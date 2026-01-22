/** Chunk was on web.js **/
/** chunk id: 3432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk301677 = require("./301677.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk371794 = require("./371794.js");

function o(e, t) {
  if (null != t) switch (t.type) {
    case i.A.STORE_ASSET:
      let n = (0, s.YE)(e, t.store_asset_id);
      return (0, r.jsx)("img", {
        src: n,
        alt: "",
        className: "emoji"
      });
    case i.A.EMOJI:
      return (0, r.jsx)(a.A, {
        emojiName: t.emoji
      })
  }
}