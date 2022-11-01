import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizcomponentComponent } from './quizcomponent.component';

describe('QuizcomponentComponent', () => {
  let component: QuizcomponentComponent;
  let fixture: ComponentFixture<QuizcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
