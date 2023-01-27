import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationInputService {

  constructor() { }

  getErrorMessage(formControl: AbstractControl | FormControl, compareFieldName?: string): string {
    if (formControl === undefined || formControl === null) { throw new Error('Campo del form validazione non riconosciuto. Assicurarsi di aver impostato il get() del campo del form'); }
    for (let propertyName in formControl.errors) {
      if (formControl.errors.hasOwnProperty(propertyName) && formControl.touched) {
        return ValidationInputService.getValidatorErrorMessage(propertyName, formControl.errors[propertyName], compareFieldName);
      }
    }
    return "";
  }
  
  getClassName(formControl: AbstractControl | FormControl): string {
    if (formControl === undefined || formControl === null) { throw new Error('Campo del form validazione non riconosciuto. Assicurarsi di aver impostato il get() del campo del form'); }
    
      if (formControl.errors && (formControl.touched || formControl.dirty)) {
        return "is-invalid";
      }
    return "";
  }
  
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any, compareFieldName?: string) {
    let config = {
      'required': 'Il valore del campo è richiesto',
      'invalidEmailAddress': 'Indirizzo Email non valido',
      'invalidCodiceFiscale': 'Codice Fiscale non valido',
      'invalidPartitaIva': 'Partita Iva non valida',
      'invalidIban': 'Codice Iban italiano non valido',
      'invalidBic': 'Formato Codice Bic/Swift non valido',
      'invalidCodiceLotteria': 'É necessario un valore alfanumerico di 8 caratteri',
      'invalidCodiceDestinatarioPA': 'Codice Destinatario non valido per soggetto di tipo PA, deve contenere 6 caratteri in maiuscolo',
      'invalidCodiceDestinatario': 'Codice Destinatario non valido, deve contenere 7 caratteri in maiuscolo',
      'minlength': `La lunghezza minima consentita è di ${validatorValue.requiredLength} caratteri`,
      'maxlength': `La lunghezza massima consentita è di ${validatorValue.requiredLength} caratteri`,
      'valueExists': 'Il valore immesso non è valido poichè già presente',
      'arrayUniqueElement': 'Il valore immesso non è valido poichè già presente',
      'invalidWhatsApp': 'Inserire il numero telefonico esclusivamente con numeri e senza zeri iniziali',
      'invalidNumeroColli': 'Il numero colli deve essere un numero intero compreso tra 1 e 9999',
      'invalidNumeroIntero': 'É neccessario un numero intero',
      'invalidNumeroPositivo': 'É neccessario un numero positivo',
      'invalidNumeroDocumento': 'Il numero documento deve contenere 6 cifre totali precedute sempre da 0',
      'invalidPercentualiMultiple': 'Sono ammessi valori percentuali con max due decimali separati dal simbolo + e senza spazi',
      'invalidPercentuale2Decimali': 'Immettere un valore positivo con max 2 cifre decimali',
      'invalidPercentuale5Decimali': 'Immettere un valore positivo con max 5 cifre decimali',
      'invalidNumber2Decimali': 'Inserire un valore con max 2 cifre decimali',
      'invalidDecimal_20_8_pos': 'É ammesso un valore positivo con max 12 cifre intere e max 8 cifre decimali',
      'invalidDecimal_19_8': 'É ammesso un valore con max 11 cifre intere e max 8 cifre decimali',
      'invalidDecimal_19_8_pos_not0': 'É ammesso un valore positivo con max 11 cifre intere e max 8 cifre decimali',
      'invalidDecimal_6_2_pos_not0': 'É ammesso un valore positivo con max 4 cifre intere e max 2 cifre decimali',
      'invalidDecimal_11_2': 'É ammesso un valore con max 9 cifre intere e max 2 cifre decimali',
      'invalidDecimal_11_2_pos_not0': 'É ammesso un valore positivo con max 9 cifre intere e max 2 cifre decimali',
      'invalidDecimal_13_2': 'É ammesso un valore con max 11 cifre intere e max 2 cifre decimali',
      'invalidDecimal_13_2_pos_not0': 'É ammesso un valore maggiore di 0 con max 11 cifre intere e max 2 cifre decimali',
      'invalidGiornodelMeseFisso': 'É necessario un valore compreso tra 1 e 30',
      'compare2Field': 'Il valore inserito non corrisponde al campo ' + compareFieldName,
      'startEndDate': "La data fine evento deve essere successiva alla data inizio",
      'matDatepickerMin': `La data deve essere successiva al ${validatorValue.min ? validatorValue.min.format('DD/MM/YYYY') : ''}`,
      'matDatepickerMax': `La data deve essere precedente al ${validatorValue.max ? validatorValue.max.format('DD/MM/YYYY') : ''}`,
      'invalidCommaSeparatedIntegersMaxLength4': 'Sono ammessi solo numeri interi com max 4 cifre separati da virgola',
      'invalidArrayEmpty': 'É necessario inserire almeno un valore nell\'elenco',
    };

    return config[validatorName];
  }
}
