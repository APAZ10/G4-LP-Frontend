import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBosqueComponent } from './add-bosque.component';

describe('AddBosqueComponent', () => {
  let component: AddBosqueComponent;
  let fixture: ComponentFixture<AddBosqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBosqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBosqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
