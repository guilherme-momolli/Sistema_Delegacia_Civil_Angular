import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
private readonly isLocalStorageAvailable =
    typeof window !== 'undefined' && !!window.localStorage;

  setItem<T>(key: string, value: T): void {
    if (!this.isLocalStorageAvailable) return;

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn(`Erro ao salvar no localStorage: ${e}`);
    }
  }

  getItem<T = any>(key: string): T | null {
    if (!this.isLocalStorageAvailable) return null;

    const item = localStorage.getItem(key);
    if (!item) return null;

    try {
      return JSON.parse(item) as T;
    } catch (e) {
      console.warn(`Erro ao fazer parse do item '${key}' no localStorage: ${e}`);
      return null;
    }
  }

  removeItem(key: string): void {
    if (this.isLocalStorageAvailable) {
      localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (this.isLocalStorageAvailable) {
      localStorage.clear();
    }
  }

  
  exists(key: string): boolean {
    return this.isLocalStorageAvailable && localStorage.getItem(key) !== null;
  }

 
  updateItem<T>(key: string, updateFn: (oldValue: T | null) => T): void {
    const currentValue = this.getItem<T>(key);
    const newValue = updateFn(currentValue);
    this.setItem(key, newValue);
  }
}
