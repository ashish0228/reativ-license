import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLayerComponent } from './header-layer.component';

describe('HeaderLayerComponent', () => {
  let component: HeaderLayerComponent;
  let fixture: ComponentFixture<HeaderLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
