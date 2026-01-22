/** Chunk was on web.js **/
/** chunk id: 855522, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk664294 = require("./664294.js"),
  Chunk484838 = require("./484838.js");
require("./426586.js");
let a = new Chunk484838.Ay({
  initialLocale: Chunk664294.parse(document.cookie).locale,
  getMessages: e => n(121312)("./".concat(e, ".json")),
  getLanguages: () => n(296437)
});
a.addListener("locale", e => {
  document.cookie = "locale=".concat(e, ";path=/")
});
let s = a