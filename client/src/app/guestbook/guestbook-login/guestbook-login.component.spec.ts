import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestbookLoginComponent } from './guestbook-login.component';

describe('GuestbookLoginComponent', () => {
  let component: GuestbookLoginComponent;
  let fixture: ComponentFixture<GuestbookLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestbookLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestbookLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
