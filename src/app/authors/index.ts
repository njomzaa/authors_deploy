import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorNewComponent } from './author-new/author-new.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorShowComponent } from './author-show/author-show.component';

export const components: any[] = [
    AuthorListComponent, 
    AuthorNewComponent, 
    AuthorEditComponent, 
    AuthorShowComponent];

export * from './author-show/author-show.component';
export * from './author-list/author-list.component';
export * from './author-new/author-new.component';
export * from './author-edit/author-edit.component';
