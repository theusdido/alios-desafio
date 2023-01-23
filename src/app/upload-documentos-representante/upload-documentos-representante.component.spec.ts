import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDocumentosRepresentanteComponent } from './upload-documentos-representante.component';

describe('UploadDocumentosRepresentanteComponent', () => {
  let component: UploadDocumentosRepresentanteComponent;
  let fixture: ComponentFixture<UploadDocumentosRepresentanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDocumentosRepresentanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDocumentosRepresentanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
