import { Injectable, signal, Type } from "@angular/core";
import { DIALOG } from "../model/dialog.model";

@Injectable({
  providedIn: 'root',
})
export class DialogService {

  private nextId = 0;
  private readonly _dialogs = signal<DIALOG[]>([]);
  readonly dialogs = this._dialogs.asReadonly();

  open<T = any>(component: Type<any>, data?: any): Promise<T> {
    return new Promise((resolve) => {
      const id = ++this.nextId;
      const instance: DIALOG = { id, component, data, resolve };
      this._dialogs.update((stack) => [...stack, instance]);
    });
  }

  close(id: number, result?: any) {
    this._dialogs.update((stack) => {
      const dialog = stack.find((d) => d.id === id);
      if (dialog) {
        dialog.resolve(result);
      }
      return stack.filter((d) => d.id !== id);
    });
  }

}
