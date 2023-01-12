import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SendEmailService {
  private formEndpoint: string =
    'https://romainteriorsdesign.co.uk//api/mail.php';

  constructor(private http: HttpClient) {}

  sendFormDetails(params: any) {
    return this.http.post(this.formEndpoint, params, {
      responseType: 'text',
    });
  }
}
