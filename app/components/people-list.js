import Component from '@ember/component';

export default Component.extend({


    model() {
        this._super(...arguments)
        console.log('Model Render');
    }

    /* willRender() {
         console.log('willRender');
     }
     didRender() {
         console.log('didRender');
     }*/
});