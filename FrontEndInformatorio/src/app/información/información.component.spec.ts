import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaciónComponent } from './información.component';

describe('InformaciónComponent', () => {
  let component: InformaciónComponent;
  let fixture: ComponentFixture<InformaciónComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformaciónComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformaciónComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
