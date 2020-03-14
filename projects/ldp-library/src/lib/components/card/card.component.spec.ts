import { Component, OnInit } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CardComponent } from './card.component';

@Component({
  selector: 'ldp-test-host-card',
  template: `
    <ldp-card [title]="myTitle" [opened]="opened">
      {{ myContent }}
    </ldp-card>
  `
})

export class TestCardComponent {

  myTitle = 'Test title';

  opened = false;

  myContent = 'projection test';

}

describe('CardComponent', () => {
  let fixture: ComponentFixture<TestCardComponent>;
  let context: TestCardComponent;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCardComponent, CardComponent]
    });

    fixture = TestBed.createComponent(TestCardComponent);
    context = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();

  });

  describe('Card',  () => {

    it('should be property title display in the titlebar', () => {
      expect(element.querySelector('.title').textContent).toEqual(context.myTitle);
    });

    it('should be description box not visible if opened property equal to false', () => {
      expect(context.opened).toBeFalsy();
      expect(element.querySelector('.description')).toBeNull();
    });

    it('should be description box visible if opened property equal to true', () => {
      context.opened = true;
      fixture.detectChanges();
      expect(context.opened).toBeTruthy();
      expect(element.querySelector('.description').textContent).toContain(context.myContent);
    });

  });

});
