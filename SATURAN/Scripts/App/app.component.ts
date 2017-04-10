import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
<!-- Navigation -->
    <nav class="navbar navbar-toggleable-md navbar-light fixed-top bg-faded">        
        <a class="navbar-brand">{{pageTitle}}</a>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" [routerLink]="['welcome']">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" [routerLink]="['products']">Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" >Disabled</a>
                </li>
            </ul>            
        </div>
    </nav>
    <!-- Page Content -->
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <router-outlet></router-outlet>
            </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->  
     `
})
export class AppComponent {
    pageTitle: string = `Product Management`;
}
