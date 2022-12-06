import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHamlaComponent } from './about-hamla.component';

describe('AboutHamlaComponent', () => {
  let component: AboutHamlaComponent;
  let fixture: ComponentFixture<AboutHamlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHamlaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutHamlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
