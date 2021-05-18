import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineNewReactiveComponent } from './wine-new-reactive.component';

describe('WineNewReactiveComponent', () => {
  let component: WineNewReactiveComponent;
  let fixture: ComponentFixture<WineNewReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineNewReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineNewReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
