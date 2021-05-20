import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyVarificationComponent } from './pages/company-varification/company-varification.component';
import { ConformFormComponent } from './pages/conform-form/conform-form.component';
import { ConformationFormComponent } from './pages/conformation-form/conformation-form.component';
import { EmployeDetailsComponent } from './pages/employe-details/employe-details.component';
import { ErrorComponent } from './pages/error/error.component';
import { OfficeDetailsComponent } from './pages/office-details/office-details.component';
import { OfficeVerificationComponent } from './pages/office-verification/office-verification.component';
import { OtpVerificationComponent } from './pages/otp-verification/otp-verification.component';
import { ProofVerificationComponent } from './pages/proof-verification/proof-verification.component';
import { SubmitFormComponent } from './pages/submit-form/submit-form.component';
import { WorkingDetailsComponent } from './pages/working-details/working-details.component';

const routes: Routes = [
  {path: '',component : OtpVerificationComponent },
  {path: 'conformform',component : ConformFormComponent },
  {path: 'companyverificationdetails',component : CompanyVarificationComponent },
  {path: 'officeverificationdetails',component : OfficeDetailsComponent },
  {path: 'employeverificationdetails',component : EmployeDetailsComponent },
  {path: 'workingdetails',component : WorkingDetailsComponent },
  {path: 'proofofverification',component : ProofVerificationComponent },
  {path: 'officeofverification',component : OfficeVerificationComponent },
  {path: 'conformmationform',component : ConformationFormComponent },
  {path: 'submitform',component : SubmitFormComponent },
  {path: 'error',component : ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
