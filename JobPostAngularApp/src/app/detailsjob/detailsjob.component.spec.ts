import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsjobComponent } from './detailsjob.component';

describe('DetailsjobComponent', () => {
  let component: DetailsjobComponent;
  let fixture: ComponentFixture<DetailsjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
