import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NotFoundComponent } from "./not-found.component";
import { MatIconModule } from "@angular/material";

describe("NotFoundComponent", () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
      imports: [MatIconModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display the right error number", () => {
    let error = 404;
    component.errorNumber = error;
    fixture.detectChanges();

    let htmlElement = fixture.nativeElement;
    let insideText = htmlElement.querySelector("p.error-title").innerText;

    expect(insideText).toContain(error);
  });
});
