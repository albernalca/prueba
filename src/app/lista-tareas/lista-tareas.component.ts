import { Component } from '@angular/core';

interface Task {
  title: string;
  description: string;
}

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {
  tasks: Task[] = [];

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const fileContent: string = e.target.result;
      this.parseFileContent(fileContent);
    };

    reader.readAsText(file);
  }

  parseFileContent(content: string) {
    try {
      const tasks: Task[] = JSON.parse(content);
      this.tasks = tasks;
    } catch (error) {
      console.error('Error al procesar el archivo:', error);
    }
  }

  onUpload() {
    console.log(this.tasks);
    // Aquí puedes hacer lo que desees con las tareas cargadas desde el archivo
  }
}
