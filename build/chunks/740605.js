/** Chunk was on web.js **/
/** chunk id: 740605, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => o,
  o: () => s
});
var Chunk18323 = require("./18323.js"),
  Chunk358085 = require("./358085.js"),
  Chunk616922 = require("./616922.js");

function o(e) {
  let t = null;
  (0, i.isDesktop)() || (t = window.open("", "_blank")), null != t ? t.location.href = e : window.open(e)
}

function s(e, t) {
  o(r.Z.isProtocolRegistered() ? a.C7.PLAYER_OPEN(e, t) : a.C7.WEB_OPEN(e, t))
}