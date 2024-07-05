import { NgModule } from '@angular/core';
      import { StoreModule } from '@ngrx/store';
      import { EffectsModule } from '@ngrx/effects';
      import { postReducer } from './post.reducer';
      import { PostEffects } from './post.effects';

      @NgModule({
        imports: [
          StoreModule.forFeature('posts', postReducer),
          EffectsModule.forFeature([PostEffects])
        ]
      })
      export class PostStoreModule {}
