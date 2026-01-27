/** Chunk was on web.js **/
/** chunk id: 659612, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk206547 = require("./206547.js"),
  Chunk35275 = require("./35275.jsx"),
  Chunk299434 = require("./299434.js");

function d(e) {
  var t;
  let {
    guildId: n,
    emojiId: i,
    emojiName: d,
    className: f
  } = e, p = (0, l.A)(n, i);
  return null != p || null != d ? (0, r.jsx)(s.A, {
    emojiId: null == p ? true : p.id,
    emojiName: null != d ? d : null == p ? true : p.name,
    animated: null != (t = null == p ? true : p.animated) && t,
    className: a()(u.m, f)
  }) : (0, r.jsx)(c.A, {
    className: a()(u.m, f),
    color: o.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css
  })
}