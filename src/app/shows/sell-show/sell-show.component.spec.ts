import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellShowComponent } from './sell-show.component';

describe('SellShowComponent', () => {
  let component: SellShowComponent;
  let fixture: ComponentFixture<SellShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
