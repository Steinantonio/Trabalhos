import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styles: []
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[];

  constructor(private router: Router, private service: CustomerService) {}

  ngOnInit() {
    this.service.getCustomers().subscribe(data => (this.customers = data));
  }

  deleteCustomer(customer: Customer): void {
    swal({
      title: 'Deseja Deletar?',
      text: `Tem certeza que quer deletar? ${customer.nomeCliente}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.deleteCustomer(customer.id).subscribe(data => {
          this.customers = this.customers.filter(c => c !== customer);
        });

        swal('Deletado');
      }
    });
  }

  editCustomer(customer: Customer): void {
    localStorage.removeItem('editCustomerId');
    localStorage.setItem('editCustomerId', customer.id.toString());
    this.router.navigate(['edit-customer']);
  }

  addCustomer(): void {
    this.router.navigate(['add-customer']);
  }
}
