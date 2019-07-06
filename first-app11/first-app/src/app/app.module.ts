import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClient,HttpClientModule, HttpResponse} from '@angular/common/http';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {FormsModule} from '@angular/forms';
import {ProfessorComponent} from './professor/professor.component';
import {StudentComponent} from './student/student.component';
import {ProfileComponent} from './profile/profile.Component';
import {MainService} from './share/main.service';
import {SubdepartmentComponent} from './subdepartment/subdepartment.component';
import {DepartmentComponent} from './department/department.component';
import {SubdepmasetrComponent} from './subdepartment/subdepartmentmaster/subdepartmentmaster.component';
import {ProfilepComponent } from './profilep/profilep.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ContactComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        LogoutComponent,
        ProfessorComponent,
        
        StudentComponent,
        DepartmentComponent,
        ProfileComponent,
        SubdepartmentComponent,
        SubdepmasetrComponent,
        ProfilepComponent
        
    ],
    imports: [
        TooltipModule.forRoot(),
        BrowserModule,HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [MainService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
