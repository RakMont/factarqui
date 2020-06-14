import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfactComponent } from './showfact.component';

describe('ShowfactComponent', () => {
  let component: ShowfactComponent;
  let fixture: ComponentFixture<ShowfactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowfactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowfactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
