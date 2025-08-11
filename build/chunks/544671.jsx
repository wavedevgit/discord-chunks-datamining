/** Chunk was on web.js **/
/** chunk id: 544671, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk557711 = require("./557711.js"),
  Chunk620662 = require("./620662.js"),
  Chunk503438 = require("./503438.js"),
  Chunk981631 = require("./981631.js"),
  Chunk145131 = require("./145131.js");

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
  return null != t && (0, o.Z)(t, s.xjy.SYNC) && (0, a.Z)(t) ? <i.Z className={l.button} size={l.buttonSize} look={f} color={_} user={n} activity={t} guildId={null != c ? c : true} channelId={u} source={d} onAction={p} /> : null
}