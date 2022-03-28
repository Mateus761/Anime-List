import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnimesComponent } from './update-animes.component';

describe('UpdateAnimesComponent', () => {
  let component: UpdateAnimesComponent;
  let fixture: ComponentFixture<UpdateAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAnimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
