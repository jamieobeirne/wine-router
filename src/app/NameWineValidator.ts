
import { AbstractControl, ValidatorFn } from "@angular/forms";

export function NameWineValidator(): ValidatorFn {

    return (control: AbstractControl): { [key: string]: boolean } | null => {

        if ((control.value == "Laya") || (control.value == "K-Naina") || (control.value == "Verdejo") || (control.value == "Monastrell")) {
            return null;
        }
        /*else if (control.value == "K-Naina") {
            return null;
        }*/
        return { 'NameNotAllowed': true }

    }
}