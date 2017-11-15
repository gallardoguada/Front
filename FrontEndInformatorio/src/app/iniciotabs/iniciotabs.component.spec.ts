import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciotabsComponent } from './iniciotabs.component';

describe('IniciotabsComponent', () => {
  let component: IniciotabsComponent;
  let fixture: ComponentFixture<IniciotabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciotabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciotabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
