import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CertificateService} from '../../../shared/services/certificate.service';

@Component({
  selector: 'app-certificates-list',
  templateUrl: './certificates-list.component.html',
  styleUrls: ['./certificates-list.component.css']
})
export class CertificatesListComponent implements OnInit {

  certificates = [];

  constructor(private service: CertificateService) {
  }

  ngOnInit(): void {
    this.service.getCertificates().subscribe(data => {
      this.certificates = data._embedded.certificates;
      console.log(this.certificates);
    });

  }

}
