import { async, TestBed } from '@angular/core/testing';
import { FooModule } from './foo.module';

describe('FooModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FooModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FooModule).toBeDefined();
  });
});
