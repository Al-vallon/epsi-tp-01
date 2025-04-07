import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;
  categories: string[] = ['Fiction', 'Non-fiction', 'Science_Fiction', 'Fantasy', 'Biography', 'History', 'Mystery', 'Romance'];
  submissionError = false;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      category: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialisation supplémentaire si nécessaire
  }

  onSubmit(): void {
    this.submissionError = false;
    
    if (this.bookForm.valid) {
      console.log('Form values:', this.bookForm.value);
      
      this.bookService.addBook(this.bookForm.value).subscribe({
        next: () => {
          console.log('Book added successfully');
          this.router.navigate(['/books']);
        },
        error: (error) => {
          console.error('Error adding book:', error);
          this.submissionError = true;
        }
      });
    } else {
      // Marquer tous les champs comme touchés pour afficher les erreurs
      Object.keys(this.bookForm.controls).forEach(key => {
        const control = this.bookForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}