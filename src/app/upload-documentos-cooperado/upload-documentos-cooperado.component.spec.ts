import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDocumentosCooperadoComponent } from './upload-documentos-cooperado.component';

describe('UploadDocumentosCooperadoComponent', () => {
  let component: UploadDocumentosCooperadoComponent;
  let fixture: ComponentFixture<UploadDocumentosCooperadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDocumentosCooperadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDocumentosCooperadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
