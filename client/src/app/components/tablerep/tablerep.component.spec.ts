import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablerepComponent } from './tablerep.component';

describe('TablerepComponent', () => {
  let component: TablerepComponent;
  let fixture: ComponentFixture<TablerepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablerepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablerepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
