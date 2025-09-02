/** Chunk was on web.js **/
/** chunk id: 55937, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => o
});
var Chunk468771 = require("./468771.js"),
  Chunk314897 = require("./314897.js");
let a = null;

function o(e, t) {
  a || (a = r.jA.configure({
    environmentId: "{{cf_shim}}SPRIG_API_KEY{{/cf_shim}}"
  })), a.identifyAndTrack({
    eventName: e,
    userId: i.default.getId(),
    properties: t
  })
}