import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllimagesuserComponent } from './allimagesuser.component';

describe('AllimagesuserComponent', () => {
  let component: AllimagesuserComponent;
  let fixture: ComponentFixture<AllimagesuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllimagesuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllimagesuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
