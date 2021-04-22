import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {baseUrl} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private http: HttpClient) {
  }

  getCertificates(): any {
    console.log('certificate service');
    return this.http.get(`${baseUrl}certificates`);
  }
}
