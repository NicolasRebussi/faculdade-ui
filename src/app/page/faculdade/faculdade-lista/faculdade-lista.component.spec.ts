/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FaculdadeListaComponent } from './faculdade-lista.component';

describe('FaculdadeListaComponent', () => {
  let component: FaculdadeListaComponent;
  let fixture: ComponentFixture<FaculdadeListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaculdadeListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaculdadeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
