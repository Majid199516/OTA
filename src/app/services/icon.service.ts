import { Injectable, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class IconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  /**
   * Call this once at app start to register icon sets.
   */
  setup(): void {
    this.registerSet('outlined', 'assets/icons/outlined.svg');
    this.registerSet('filled', 'assets/icons/filled.svg');
  }

  private registerSet(namespace: string, path: string): void {
    this.matIconRegistry.addSvgIconSetInNamespace(
      namespace,
      this.domSanitizer.bypassSecurityTrustResourceUrl(path)
    );
  }

  /**
   * Static factory method to trigger setup in `main.ts`
   */
  static setupIcons(): boolean {
    const iconService = inject(IconService);
    iconService.setup();
    return true;
  }
}
