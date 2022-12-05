import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QafelaComponent } from './qafela.component';

describe('QafelaComponent', () => {
  let component: QafelaComponent;
  let fixture: ComponentFixture<QafelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QafelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QafelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
