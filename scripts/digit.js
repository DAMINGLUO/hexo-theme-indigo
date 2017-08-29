hexo.extend.generator.register('digit', function (locals) {
    return {
        path: 'js/digit.js',
        data: function () {
            var posts = locals.posts.length;
            var tags = locals.tags.length;
            var categories = locals.categories.length;
            var d = "window.onload=function(){\n";
            d += "\tdocument.getElementById('site.tags.length').innerHTML='" + tags + "'\n";
            d += "\tdocument.getElementById('site.posts.length').innerHTML='" + posts + "'\n";
            d += "\tdocument.getElementById('site.categories.length').innerHTML='" + categories + "'\n";
            d+= "}"
            return d;
        }
    };
});