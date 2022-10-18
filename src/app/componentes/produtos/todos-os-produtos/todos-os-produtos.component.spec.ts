import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosOsProdutosComponent } from './todos-os-produtos.component';

describe('ProdutosHomeComponent', () => {
  let component: TodosOsProdutosComponent;
  let fixture: ComponentFixture<TodosOsProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosOsProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosOsProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
