import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtpVerificationComponent } from './pages/otp-verification/otp-verification.component';
import { ConformFormComponent } from './pages/conform-form/conform-form.component';
import { CompanyVarificationComponent } from './pages/company-varification/company-varification.component';
import { OfficeDetailsComponent } from './pages/office-details/office-details.component';
import { EmployeDetailsComponent } from './pages/employe-details/employe-details.component';
import { WorkingDetailsComponent } from './pages/working-details/working-details.component';
import { ProofVerificationComponent } from './pages/proof-verification/proof-verification.component';
import { OfficeVerificationComponent } from './pages/office-verification/office-verification.component';
import { ConformationFormComponent } from './pages/conformation-form/conformation-form.component';
import { SubmitFormComponent } from './pages/submit-form/submit-form.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    OtpVerificationComponent,
    ConformFormComponent,
    CompanyVarificationComponent,
    OfficeDetailsComponent,
    EmployeDetailsComponent,
    WorkingDetailsComponent,
    ProofVerificationComponent,
    OfficeVerificationComponent,
    ConformationFormComponent,
    SubmitFormComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
