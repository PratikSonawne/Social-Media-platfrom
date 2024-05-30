import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatingRequestsComponent } from './wating-requests.component';

describe('WatingRequestsComponent', () => {
  let component: WatingRequestsComponent;
  let fixture: ComponentFixture<WatingRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WatingRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
