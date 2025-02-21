import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { NgHttpService } from '../ng-http.service.js';
import { CapacitorHttpService } from '../cap-http.service.js';

export const httpFactory = (platform: Platform, httpClient: HttpClient) => {
  return platform.is('ios') ? new CapacitorHttpService() : new NgHttpService(httpClient);
};
