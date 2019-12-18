import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeContainer } from "./home-container.component";

describe("HomeContainerComponent", () => {
  let component: HomeContainer;
  let fixture: ComponentFixture<HomeContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeContainer]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
