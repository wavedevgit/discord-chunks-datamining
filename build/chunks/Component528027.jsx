/** Chunk was on 81498 **/
/** chunk id: 528027, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk596454 = require("./596454.jsx"),
  Chunk377171 = require("./377171.js"),
  Chunk403910 = require("./403910.js"),
  Chunk549631 = require("./549631.jsx"),
  Chunk221237 = require("./221237.js");

function d(e) {
  var t;
  let {
    guildId: n,
    emojiId: r,
    emojiName: d,
    className: h
  } = e, p = (0, a.Z)(n, r);
  return null != p || null != d ? (0, i.jsx)(l.Z, {
    emojiId: null == p ? true : p.id,
    emojiName: null != d ? d : null == p ? true : p.name,
    animated: null != (t = null == p ? true : p.animated) && t,
    className: s()(c.emojiIcon, h)
  }) : (0, i.jsx)(u.Z, {
    className: s()(c.emojiIcon, h),
    color: o.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
  })
}