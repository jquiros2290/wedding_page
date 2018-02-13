import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestbookPostComponent } from './guestbook-post.component';

describe('GuestbookPostComponent', () => {
  let component: GuestbookPostComponent;
  let fixture: ComponentFixture<GuestbookPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestbookPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestbookPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
