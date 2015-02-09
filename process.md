###Process
* lookup lat longs for string addresses with google's [geocoder api](http://jsbin.com/podoxobusi/1/edit?html,output)
* group them as a multi-string geom reference in the `geonyc-connections`the_geom table
* look at the arcs, check for hiccups
* added a new image [here](https://raw.githubusercontent.com/auremoser/images/master/heart-red.png) centered it to control for the smoothing hiccups and converted the line color to `#c0392b`
* load in the cartocss and sql query as object in an `index.html` template --test
* generate a series of tests for all 40+ entries by selecting the cartodb_id and swapping out the lat/lon and zoom entries in the html
* added some css and nested divs for the name labels on the front
* realized that html label elements won't export as pngs, and none of the legend/label/tooltip functions will work with the static image api :(
* batched processed the html pages with a script using casperjs/node `ImageGenerator` after a [few](http://phantomjs.org/screen-capture.html) [too](http://docs.casperjs.org/en/latest/quickstart.html) [many](https://gist.github.com/n1k0/1501173) attempts with other [tools](http://stackoverflow.com/questions/11917042/how-to-render-part-of-a-page-with-phantomjs) and some [reading](http://www.codepool.biz/tech-frontier/html5/how-to-use-javascript-to-save-canvas-data-in-chrome.html); anything that [used canvas](https://github.com/niklasvh/html2canvas) was out
* Load PNGs into Indesign template to test, export as CMYK for proof
* Test print

###Links
* [form responses](https://docs.google.com/spreadsheets/d/1TGZW__yXL0S5xkTm704tLkxUFWC_-mdwKX6lsEtVs9k/edit#gid=2126845402)
* [geonyc-connections table](https://team.cartodb.com/u/aureliamoser/tables/geonyc_connections/table)
* [working jsbin first mockup](http://jsbin.com/lezokalodu/1/edit)
* [geocode lookup jsbin](http://jsbin.com/podoxobusi/1/edit?html,output)
* [maps api](http://docs.cartodb.com/cartodb-platform/maps-api.html)
* [andrew's mockup](https://team.cartodb.com/u/aureliamoser/viz/8b8504b0-aed2-11e4-b3a6-0e0c41326911/map) | [public vis](https://team.cartodb.com/u/andrew/viz/d2b9f652-ad96-11e4-af37-0e853d047bba/public_map)
* [rbg to cmyk stuff](http://www.ne14design.co.uk/articles/convert_RGB_to_CMYK.htm)
* [printer option 1](http://www.yelp.com/biz/send-2-print-williamsburg-brooklyn)
* [printer option 2](http://petesprintshop.net/order_information)

18
13
