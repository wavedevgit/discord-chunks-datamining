/** Chunk was on web.js **/
/** chunk id: 528027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk108447 = require("./108447.js"),
  Chunk549631 = require("./549631.jsx"),
  Chunk221237 = require("./221237.js");

function d(e) {
  var t;
  let {
    guildId: n,
    emojiId: i,
    emojiName: d,
    className: f
  } = e, p = (0, l.Z)(n, i);
  return null != p || null != d ? (0, r.jsx)(s.Z, {
    emojiId: null == p ? true : p.id,
    emojiName: null != d ? d : null == p ? true : p.name,
    animated: null != (t = null == p ? true : p.animated) && t,
    className: o()(u.emojiIcon, f)
  }) : (0, r.jsx)(c.Z, {
    className: o()(u.emojiIcon, f),
    color: a.Z.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css
  })
}