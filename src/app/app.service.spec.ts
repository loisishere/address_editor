//Angular
import { TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

//App
import { AppService } from './app.service';

const text = `1 Jesse Hill Jr Street, Atlanta, TN 30309
23 Peachtree Street, Atlanta, TN 30301
32 Glen Iris Drive NE, Brookhaven, FL 30309`

const text2json = [
	{
		id:0,
		streetNumber: 1,
		streetName: "Jesse Hill Jr Street",
		city: "Atlanta",
		state: "TN",
		zip: 30309

	},
	{
		id:1,
		streetNumber: 23,
		streetName: "Peachtree Street",
		city: "Atlanta",
		state: "TN",
		zip: 30301

	},	{
		id:2,
		streetNumber: 32,
		streetName: "Glen Iris Drive NE",
		city: "Brookhaven",
		state: "FL",
		zip: 30309

	}
]

describe('Address Editor Service ->', () => {
	let app_service: AppService;



	beforeEach(() => {
		TestBed.configureTestingModule({
			imports:[
				HttpClientTestingModule
			],
			providers: [
				AppService
			]
		})
		app_service = TestBed.get(AppService);
		app_service.addressList.next(text2json);
	})

	describe("Functional", () => {

		it('should format text to Json', fakeAsync(() => {
			let format = app_service.formatTextToJson(text);
			expect(format).toEqual(text2json);
		}))
		it('should format json to text', fakeAsync(() => {
			
			let format = app_service.formatJsonToText();
			expect(format).toEqual(text);
		}))
	})


})
