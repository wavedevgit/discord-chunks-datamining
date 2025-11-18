/** Chunk was on web.js **/
/** chunk id: 528027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk596454 = require("./596454.jsx"),
  Chunk377171 = require("./377171.js"),
  Chunk108447 = require("./108447.js"),
  Chunk549631 = require("./549631.jsx"),
  Chunk603751 = require("./603751.js");

function d(e) {
  var t;
  let {
    guildId: n,
    emojiId: i,
    emojiName: d,
    className: f
  } = e, _ = (0, l.Z)(n, i);
  return null != _ || null != d ? (0, r.jsx)(o.Z, {
    emojiId: null == _ ? true : _.id,
    emojiName: null != d ? d : null == _ ? true : _.name,
    animated: null != (t = null == _ ? true : _.animated) && t,
    className: a()(u.emojiIcon, f)
  }) : (0, r.jsx)(c.Z, {
    className: a()(u.emojiIcon, f),
    color: s.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
  })
}