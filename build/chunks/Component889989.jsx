/** Chunk was on web.js **/
/** chunk id: 889989, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk187753 = require("./187753.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk73346 = require("./73346.js");

function s(e, t) {
  if (null != t) switch (t.type) {
    case i.T.STORE_ASSET:
      let n = (0, a._W)(e, t.store_asset_id);
      return (0, r.jsx)("img", {
        src: n,
        alt: "",
        className: "emoji"
      });
    case i.T.EMOJI:
      return (0, r.jsx)(o.Z, {
        emojiName: t.emoji
      })
  }
}