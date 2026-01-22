/** Chunk was on web.js **/
/** chunk id: 111487, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  g: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk565645 = require("./565645.jsx"),
  Chunk202027 = require("./202027.js"),
  Chunk322107 = require("./322107.js");
let o = {
  SMALL: Chunk322107.EX,
  MEDIUM: Chunk322107.Y,
  LARGE: Chunk322107.as
};

function l(e) {
  let {
    emojiId: t,
    emojiName: n,
    defaultComponent: s,
    size: l = o.MEDIUM
  } = e, {
    customEmoji: c,
    unicodeEmoji: u
  } = (0, a.A)(t, n);
  return null == c && null == u ? s : (0, r.jsx)(i.A, {
    emojiName: null != c ? null == c ? true : c.name : n,
    animated: null != c && c.animated,
    emojiId: null == c ? true : c.id,
    autoplay: true,
    className: l
  })
}