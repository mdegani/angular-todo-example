import { AppComponent } from './app.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ToDoService } from './to-do.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppModule } from './app.module';
import { By } from '@angular/platform-browser';


fdescribe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let comp: AppComponent;
  let mockToDoService;

  beforeEach(() => {
    mockToDoService = {
      addItem: () => { },
      items: ['item 1', 'item 2', 'item 3']
    };
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{
        provide: ToDoService, useValue: mockToDoService
      }]
    });
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  xit('should count the number of items', () => {
    expect(comp.itemCount()).toEqual(3);
  });

  it('should show all todo items', () => {
    const el = fixture.debugElement.query(By.css('ul'));
    fixture.detectChanges();
    console.log(el);
    console.log(fixture.nativeElement);
    // expect(el.children.length).toEqual(3);
  });

});
