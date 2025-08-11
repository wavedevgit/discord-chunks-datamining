/** Chunk was on web.js **/
/** chunk id: 216701, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => s,
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk596454 = require("./596454.jsx"),
  Chunk307707 = require("./307707.js"),
  Chunk377396 = require("./377396.js");
let s = {
  SMALL: Chunk377396.small,
  MEDIUM: Chunk377396.medium,
  LARGE: Chunk377396.large
};

function l(e) {
  let {
    emojiId: t,
    emojiName: n,
    defaultComponent: a,
    size: l = s.MEDIUM
  } = e, {
    customEmoji: c,
    unicodeEmoji: u
  } = (0, o.Z)(t, n);
  return null == c && null == u ? a : (0, r.jsx)(i.Z, {
    emojiName: null != c ? null == c ? true : c.name : n,
    animated: null != c && c.animated,
    emojiId: null == c ? true : c.id,
    autoplay: true,
    className: l
  })
}