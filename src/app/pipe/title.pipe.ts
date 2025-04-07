import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TitlePipe'
})
export class TitlePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    
    const lowercase = value.replace(/_/g, ' ').toLowerCase();
    
    if (lowercase.length > 0) {
      return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
    }
    
    return lowercase;
  }
}
