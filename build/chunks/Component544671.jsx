/** Chunk was on web.js **/
/** chunk id: 544671, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk557711 = require("./557711.jsx"),
  Chunk620662 = require("./620662.js"),
  Chunk503438 = require("./503438.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  let {
    activity: t,
    user: n,
    guildId: l,
    channelId: c,
    source: u,
    onAction: d
  } = e;
  return null != t && (0, a.Z)(t, s.xjy.SYNC) && (0, o.Z)(t) ? (0, r.jsx)(i.Z, {
    size: "sm",
    variant: "secondary",
    user: n,
    activity: t,
    guildId: null != l ? l : true,
    channelId: c,
    source: u,
    onAction: d
  }) : null
}