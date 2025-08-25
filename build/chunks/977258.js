/** Chunk was on web.js **/
/** chunk id: 977258, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => c
});
var Chunk149765 = require("./149765.js");
require("./442837.js");
var Chunk430198 = require("./430198.js"),
  Chunk592125 = require("./592125.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  return null != e && s.TPd.GUILD_VOCAL.has(e.type) ? r.$e(s.Plq.VIEW_CHANNEL, s.Plq.CONNECT) : s.Plq.VIEW_CHANNEL
}

function c(e, t) {
  let n = l(o.Z.getChannel(t));
  return i.Z.isChannelGated(e, t) || a.Uu(n, o.Z.getChannel(t))
}