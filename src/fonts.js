import WebFont from 'webfontloader';

export default function getFontsAsync() {
    WebFont.load({
        google: {
            families: ['Droid Sans', 'Droid Serif']
        }
    });
}