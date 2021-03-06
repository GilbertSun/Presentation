getJson('story.json').then(function(story) {
    addHtmlToPage(story.heading);

    return story.chapterUrls.reduce(function(chain, chapterUrl) {
        // Once the last chapter's promise is done…
        return chain.then(function() {
            // …fetch the next chapter
            return getJson(chapterUrl);
        }).then(function(chapter) {
            // and add it to the page
            addHtmlToPage(chapter.html);
        });
    }, Promise.resolve());
}).then(function() {
    // And we're all done!
    addTextToPage("All done");
}).catch(function(err) {
    // Catch any error that happened along the way
    addTextToPage("Argh, broken: " + err.message);
}).then(function() {
    // Always hide the spinner
    document.querySelector('.spinner').style.display = 'none';
});
