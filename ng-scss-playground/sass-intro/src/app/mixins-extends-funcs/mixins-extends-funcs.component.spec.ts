import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixinsExtendsFuncsComponent } from './mixins-extends-funcs.component';

describe('MixinsExtendsFuncsComponent', () => {
  let component: MixinsExtendsFuncsComponent;
  let fixture: ComponentFixture<MixinsExtendsFuncsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixinsExtendsFuncsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixinsExtendsFuncsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
