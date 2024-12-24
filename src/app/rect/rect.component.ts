import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // First way - Custom two-way binding - using decorators:
  //@Input({ required: true }) size!: { width: string; height: string };
  // The @Input decorator allows the size property to receive values from its parent component.
  // The required: true option ensures that this input is provided by the parent component.
  // size is an object with two properties: width and height, both of which are strings. These values will be passed from the parent to the child (RectComponent).
  // The ! (non-null assertion operator) tells TypeScript that size will definitely be initialized and will not be null or undefined.
  
  //@Output() sizeChange = new EventEmitter<{ width: string; height: string }>();
  // The @Output decorator creates an event (sizeChange) that the component will emit when something changes (in this case, when the size is reset).
  // sizeChange is an instance of EventEmitter, which is used to send information from the child component (RectComponent) to its parent component.
  // The event will emit an object with the same structure as the size object: { width: string, height: string }.

  // In Angular, two-way binding is a common pattern where a child component can both receive data from the parent (via @Input) and send data back to the parent (via @Output).
  // In this case, the size is passed to the RectComponent as an input, and the component allows the parent to reset the size by emitting the sizeChange event. 
  // For true two-way binding, the parent component would typically listen to the sizeChange event and update the value of size.


  // Second way - Custom two-way binding - using model:
  size = model.required<{ width: string; height: string }>();
  // The model utility provides a more declarative way to define state that is reactive, making the state update flow more predictable and intuitive compared to using @Input and @Output.
  // The model.required construct is used to create a reactive model that is guaranteed to be provided (i.e., not null or undefined).
  // model is being used to create a reactive variable that holds the size object, and it's tied to the view in a way that when it changes, the view updates automatically

  onReset() {   // This method is invoked when the component wants to reset the size.
    // First way - Custom two-way binding - using decorators: 
    // this.sizeChange.emit({
    //   width: '200',
    //   height: '100'
    // });

    // Second way - Custom two-way binding - using model:
    this.size.set({
      width: '200',
      height: '100'
    });
  }
  // When onReset() is called, the component emits the sizeChange event, sending the updated size object with width: '200' and height: '100' to the parent component.
}
