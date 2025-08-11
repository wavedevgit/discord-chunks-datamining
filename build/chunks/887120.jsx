/** Chunk was on web.js **/
/** chunk id: 887120, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk442837 = require("./442837.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk965386 = require("./965386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk710111 = require("./710111.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    sound: t
  } = e, n = (0, i.e7)([s.Z], () => {
    var e;
    return t.guildId === l.X8 ? c.intl.string(c.t.Rtvk9f) : null == (e = s.Z.getGuild(t.guildId)) ? true : e.name
  });
  return <a.RX>{(null != t.emojiId || null != t.emojiName) && <a.Tw><o.Z emojiId={t.emojiId} emojiName={t.emojiName} /></a.Tw>}{<a.z5><a.BR>{t.name}</a.BR></a.z5>}{null != n && <a.dY>{n}</a.dY>}</a.RX>
}