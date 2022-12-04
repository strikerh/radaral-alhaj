import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuafelListComponent } from './quafel-list.component';

describe('QuafelListComponent', () => {
  let component: QuafelListComponent;
  let fixture: ComponentFixture<QuafelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuafelListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuafelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
