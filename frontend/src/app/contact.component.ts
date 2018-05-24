import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<header>

  <!--Navbar-->
  <mdb-navbar SideClass="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
     
      <links>
          <ul class="navbar-nav mr-auto">
              <li class="nav-item waves-light" mdbWavesEffect>
                  <a class="black-text nav-link" href="#"><strong>Home</strong> <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item waves-light" mdbWavesEffect>
                  <a class="black-text nav-link" href="/about"><strong>About</strong></a>
              </li>
              <li class="nav-item active waves-light" mdbWavesEffect>
                  <a class="black-text nav-link" href="/contact"><strong>Contact Us</strong></a>
              </li>
          </ul>
          <form class="form-inline waves-light" mdbWavesEffect>
              <div class="black-text md-form mt-0">
                  <input class=" form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
              </div>
          </form>
      </links>
  </mdb-navbar>

  <!--Intro Section-->
  <section class="view intro-2">
      <div class="full-bg-img mask rgba-stylish-strong">
          <h3 class="white-text h3 font-weight-bold text-center pt-4">Easy Property Management</h3>
         
      </div>
  </section>

</header>
`,
styleUrls: ['./app.component.css']
})
export class ContactComponent {
 
}
