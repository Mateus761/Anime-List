import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnimesComponent } from './create-animes.component';

describe('CreateAnimesComponent', () => {
  let component: CreateAnimesComponent;
  let fixture: ComponentFixture<CreateAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAnimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
