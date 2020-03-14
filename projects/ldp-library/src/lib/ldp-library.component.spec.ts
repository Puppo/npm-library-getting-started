import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LdpLibraryComponent } from './ldp-library.component';

describe('LdpLibraryComponent', () => {
  let component: LdpLibraryComponent;
  let fixture: ComponentFixture<LdpLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LdpLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LdpLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
