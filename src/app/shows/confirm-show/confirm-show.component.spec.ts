import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmShowComponent } from './confirm-show.component';

describe('ConfirmShowComponent', () => {
  let component: ConfirmShowComponent;
  let fixture: ComponentFixture<ConfirmShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
