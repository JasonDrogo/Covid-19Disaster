import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChroplethComponent } from './chropleth.component';

describe('ChroplethComponent', () => {
  let component: ChroplethComponent;
  let fixture: ComponentFixture<ChroplethComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChroplethComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChroplethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
