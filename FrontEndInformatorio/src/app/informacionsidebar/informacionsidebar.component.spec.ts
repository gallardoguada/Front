import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionsidebarComponent } from './informacionsidebar.component';

describe('InformacionsidebarComponent', () => {
  let component: InformacionsidebarComponent;
  let fixture: ComponentFixture<InformacionsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
