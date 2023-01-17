import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyShowComponent } from './modify-show.component';

describe('ModifyShowComponent', () => {
  let component: ModifyShowComponent;
  let fixture: ComponentFixture<ModifyShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
