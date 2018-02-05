import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestbookIndexComponent } from './guestbook-index.component';

describe('GuestbookIndexComponent', () => {
  let component: GuestbookIndexComponent;
  let fixture: ComponentFixture<GuestbookIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestbookIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestbookIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
