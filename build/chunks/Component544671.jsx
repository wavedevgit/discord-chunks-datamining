/** Chunk was on web.js **/
/** chunk id: 544671, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk557711 = require("./557711.jsx"),
  Chunk620662 = require("./620662.js"),
  Chunk503438 = require("./503438.js"),
  Chunk981631 = require("./981631.js"),
  Chunk7826 = require("./7826.js");

function c(e) {
  let {
    activity: t,
    user: n,
    guildId: c,
    channelId: u,
    source: d,
    look: f,
    color: _,
    onAction: p
  } = e;
  return null != t && (0, a.Z)(t, s.xjy.SYNC) && (0, o.Z)(t) ? (0, r.jsx)(i.Z, {
    className: l.button,
    size: l.buttonSize,
    look: f,
    color: _,
    user: n,
    activity: t,
    guildId: null != c ? c : true,
    channelId: u,
    source: d,
    onAction: p
  }, "sync") : null
}