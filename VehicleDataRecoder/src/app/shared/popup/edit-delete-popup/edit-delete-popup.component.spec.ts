import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeletePopupComponent } from './edit-delete-popup.component';

describe('EditDeletePopupComponent', () => {
  let component: EditDeletePopupComponent;
  let fixture: ComponentFixture<EditDeletePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeletePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeletePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
