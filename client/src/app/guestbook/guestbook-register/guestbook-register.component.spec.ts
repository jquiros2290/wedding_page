import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestbookRegisterComponent } from './guestbook-register.component';

describe('GuestbookRegisterComponent', () => {
  let component: GuestbookRegisterComponent;
  let fixture: ComponentFixture<GuestbookRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestbookRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestbookRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
