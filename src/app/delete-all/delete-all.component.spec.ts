import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-all',
  templateUrl: './delete-all.component.html',
  styleUrls: ['./delete-all.component.css']
})
export class DeleteAllComponent {
  constructor(private http: HttpClient) {}

  borrarTodosLosUsuarios() {
    this.http.delete('/api/usuarios').subscribe(() => {
      console.log('Todos los usuarios han sido eliminados');
    });
  }
}
