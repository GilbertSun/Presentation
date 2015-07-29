getJson('story.json').then(function(story) {
    addHtmlToPage(story.heading);

    // Take an array of promises and wait on them all
    return Promise.all(
        // Map our array of chapter urls
        // to an array of chapter json promises
        story.chapterUrls.map(getJson)
    );
}).then(function(chapters) {
    // Now we have the chapters jsons in order! Loop thorugh…
    chapters.forEach(function(chapter) {
        // …and add to the page
        addHtmlToPage(chapter.html);
    });
    addTextToPage("All done");
}).catch(function(err) {
    // catch any error that happened along the way
    addTextToPage("Argh, broken: " + err.message);
}).then(function() {
    document.querySelector('.spinner').style.display = 'none';
});
