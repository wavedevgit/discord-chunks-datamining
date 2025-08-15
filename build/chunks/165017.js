/** Chunk was on 54157 **/
/** chunk id: 165017, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk251625 = require("./251625.js"),
  Chunk945577 = require("./945577.js"),
  Chunk981631 = require("./981631.js");
let u = (0, Chunk251625.oH)(function(e, t, n, r, s, l) {
  return s ? {
    type: c.aib.FAVORITES
  } : null != e && null != n ? {
    type: c.aib.GUILD,
    guildId: e
  } : null == t || null == r ? null : r.isPrivate() && l ? {
    type: c.aib.DMS
  } : {
    type: c.aib.CHANNEL,
    channelId: t
  }
});

function d(e) {
  let {
    guildId: t,
    channelId: n
  } = e, i = (0, o.UX)({
    location: "useDesktopSearchContext"
  });
  return (0, r.e7)([l.Z, s.Z, a.Z], () => {
    let e = l.Z.getGuild(t),
      r = s.Z.getChannel(n);
    return u(t, n, e, r, a.Z.getGuildId() === c.I_8, i)
  })
}