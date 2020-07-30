/**
 * Open External Links in New Tab
 *
 * @author Edwin Velez (https://edwinvelez.net)
 * @link https://edwinvelez.net/open-external-links-in-new-tab/
 */

/** JavaScript Example */
'use strict';

// Opens any external hyperlinks found in site in a new tab.
let links = document.links;

// Loop over all links on page.
for ( let i = 0; i < links.length; i++ ) {
    // Does the link belong to this site?
    if ( links[ i ].hostname != window.location.hostname ) {
        links[ i ].target = '_blank';
    }
}

/** jQuery Exmaple */

// Open any external links in a new tab rather than take user away from site.
jQuery(document).ready(function ($) {
    $(document.links).filter(function() {
        return this.hostname !== window.location.hostname;
    }).attr('target', '_blank');
});
