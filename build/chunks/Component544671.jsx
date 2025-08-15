/** Chunk was on 96750 **/
/** chunk id: 544671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
    look: p,
    color: f,
    onAction: m
  } = e;
  return null != t && (0, l.Z)(t, o.xjy.SYNC) && (0, a.Z)(t) ? (0, r.jsx)(i.Z, {
    className: s.button,
    size: s.buttonSize,
    look: p,
    color: f,
    user: n,
    activity: t,
    guildId: null != c ? c : true,
    channelId: u,
    source: d,
    onAction: m
  }, "sync") : null
}