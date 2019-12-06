import { ValidatorFn, ValidationErrors, FormGroup } from '@angular/forms';

export const minMaxValidator: ValidatorFn = (
  formGroup: FormGroup
): ValidationErrors | null => {
  const minPrice = formGroup.get('minPrice').value;
  const maxPrice = formGroup.get('maxPrice').value;

  return Number(minPrice) > Number(maxPrice)
    ? { minGreaterThanMax: true }
    : null;
};
