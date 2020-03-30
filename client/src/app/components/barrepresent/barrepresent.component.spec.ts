import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrepresentComponent } from './barrepresent.component';

describe('BarrepresentComponent', () => {
  let component: BarrepresentComponent;
  let fixture: ComponentFixture<BarrepresentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrepresentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrepresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
