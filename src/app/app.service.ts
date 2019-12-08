import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService {
	constructor(private httpClient: HttpClient) { }

	public addressList = new BehaviorSubject(null);
	async getAddresses(){
		try{
			let addresses = await this.httpClient.get('https://0f1c6e64.s3.amazonaws.com/addresses.txt',{responseType: 'text'}).toPromise();
			this.addressList.next(this.formatTextToJson(addresses));
		}catch(error){
			console.error(error);
		}	
	}
	async postAddressesBeingSaved(){
		try{
			await this.httpClient.put('/save/address/text',{data: this.formatJsonToText()}).toPromise();
		}catch(error){
			console.log(error);
		}
		
	}

	//helper functions
	formatTextToJson(addresses:string){
		let address_array = addresses.split(/\n/g);
		return address_array.map((add,index) =>{
			let formatLine = add.replace(/^\d+/g,'$&,').replace(/\d+$/g,',$&').split(',').map(line => line.trim());

			return {
					id:index,
					streetNumber: parseInt(formatLine[0]),
					streetName: formatLine[1],
					city: formatLine[2],
					state: formatLine[3],
					zip: parseInt(formatLine[4])
				}
		});
	}

	formatJsonToText(){
		let copy = this.addressList.getValue().slice();
		let format = copy.map(val => {
			let obj_copy = {...val};
			obj_copy.streetName = `${obj_copy.streetName},`;
			obj_copy.city = `${obj_copy.city},`;
			delete obj_copy.id;
			return Object.values(obj_copy).join(' ');
		}).join('\n');	
		return format;
	}

}