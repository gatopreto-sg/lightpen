import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextpanelComponent } from './textpanel.component';

describe('TextpanelComponent', () => {
  let component: TextpanelComponent;
  let fixture: ComponentFixture<TextpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextpanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
