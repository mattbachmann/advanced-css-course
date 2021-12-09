import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBasicsComponent } from './grid-basics.component';

describe('GridBasicsComponent', () => {
  let component: GridBasicsComponent;
  let fixture: ComponentFixture<GridBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
