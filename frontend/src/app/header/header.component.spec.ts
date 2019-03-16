import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {ContentService} from '../content/content.service';
import {VirtualScrollerModule} from 'ngx-virtual-scroller';
import {ContentServiceStab} from '../content/content.service.stab';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const contentServiceStub: ContentServiceStab = new ContentServiceStab();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      imports: [
        VirtualScrollerModule,
      ],
      providers: [
        {provide: ContentService, useValue: contentServiceStub}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should start with 0 paragraph count', async(() => {
    expect(component.downloadedParagraphCount).toBe(0);
  }));

  it('should subscribe to paragraphLoaded event', async(() => {
    spyOn(contentServiceStub.paragraphLoaded, 'subscribe');
    fixture.detectChanges();
    expect(contentServiceStub.paragraphLoaded.subscribe).toHaveBeenCalled();
  }));

  it('should update downloaded paragraph count when new paragraphs are loaded', async(() => {
    fixture.detectChanges();
    contentServiceStub.downloadedParagraphCount = 42;
    contentServiceStub.paragraphLoaded.emit();
    expect(component.downloadedParagraphCount).toBe(42);
  }));
});
