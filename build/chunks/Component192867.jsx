/** Chunk was on web.js **/
/** chunk id: 192867, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk725499 = require("./725499.js");

function o(e) {
  let {
    user: t,
    nickname: n
  } = e, o = null != n;
  return (0, r.jsx)(i.euF, {
    src: t.getAvatarURL(true, o ? 16 : 24),
    size: o ? i._3J.SIZE_16 : i._3J.SIZE_24,
    className: o ? a.H : a.tM,
    "aria-hidden": true
  })
}