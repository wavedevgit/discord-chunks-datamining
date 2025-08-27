/** Chunk was on web.js **/
/** chunk id: 165017, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => f
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk251625 = require("./251625.js"),
  Chunk945577 = require("./945577.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n, r, i, a) {
  return i ? {
    type: c.aib.FAVORITES
  } : null != e && null != n ? {
    type: c.aib.GUILD,
    guildId: e
  } : null == t || null == r ? null : r.isPrivate() && a ? {
    type: c.aib.DMS
  } : {
    type: c.aib.CHANNEL,
    channelId: t
  }
}
let d = (0, Chunk251625.oH)(u);

function f(e) {
  let {
    guildId: t,
    channelId: n
  } = e, s = (0, l.UX)({
    location: "useDesktopSearchContext"
  });
  return (0, r.e7)([a.Z, i.Z, o.Z], () => {
    let e = a.Z.getGuild(t),
      r = i.Z.getChannel(n);
    return d(t, n, e, r, o.Z.getGuildId() === c.I_8, s)
  })
}