import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDoctor'
})
export class FilterDoctorPipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): unknown {
        return null;

  }

}
