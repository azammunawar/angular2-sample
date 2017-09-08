import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsComponent } from './listings.component';

describe('ListingsComponent', () => {
  let component: ListingsComponent;
  let fixture: ComponentFixture<ListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment and event emit when upvoted', () => {
    let votecount = component.count;
    component.change.subscribe((count)=>{
        votecount++;
    });

    component.upvote();

    expect(component.count).toEqual(votecount);
  });

});
