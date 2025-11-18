/** Chunk was on web.js **/
/** chunk id: 216701, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => s,
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk596454 = require("./596454.jsx"),
  Chunk307707 = require("./307707.js"),
  Chunk608470 = require("./608470.js");
let s = {
  SMALL: Chunk608470.small,
  MEDIUM: Chunk608470.medium,
  LARGE: Chunk608470.large
};

function l(e) {
  let {
    emojiId: t,
    emojiName: n,
    defaultComponent: o,
    size: l = s.MEDIUM
  } = e, {
    customEmoji: c,
    unicodeEmoji: u
  } = (0, a.Z)(t, n);
  return null == c && null == u ? o : (0, r.jsx)(i.Z, {
    emojiName: null != c ? null == c ? true : c.name : n,
    animated: null != c && c.animated,
    emojiId: null == c ? true : c.id,
    autoplay: true,
    className: l
  })
}