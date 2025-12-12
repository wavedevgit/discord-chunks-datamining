/** Chunk was on web.js **/
/** chunk id: 330711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk973361 = require("./973361.js"),
  Chunk627420 = require("./627420.js");
require("./211604.js");
let o = new Chunk627420.ZP({
  initialLocale: Chunk973361.parse(document.cookie).locale,
  getMessages: e => n(248192)("./".concat(e, ".json")),
  getLanguages: () => require("./34859.js")
});
o.addListener("locale", e => {
  document.cookie = "locale=".concat(e, ";path=/")
});
let a = o