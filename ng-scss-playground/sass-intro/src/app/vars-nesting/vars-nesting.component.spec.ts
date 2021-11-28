import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarsNestingComponent } from './vars-nesting.component';

describe('VarsNestingComponent', () => {
  let component: VarsNestingComponent;
  let fixture: ComponentFixture<VarsNestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarsNestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarsNestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
