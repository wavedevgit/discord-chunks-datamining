/** Chunk was on 31930 **/
/** chunk id: 528027, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
    className: s()(u.emojiIcon, h)
  }) : (0, i.jsx)(c.Z, {
    className: s()(u.emojiIcon, h),
    color: o.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
  })
}