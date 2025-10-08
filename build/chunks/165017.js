/** Chunk was on web.js **/
/** chunk id: 165017, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => f
});
var Chunk498607 = require("./498607.js"),
  i = require.n(Chunk498607),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk945577 = require("./945577.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  let {
    isSearchDesktopXDMExperimentEnabled: t,
    isGlobalXDMSettingSupported: n
  } = e;
  return !!t && !!n || !!t
}

function f(e) {
  let {
    guildId: t,
    channelId: n
  } = e, r = (0, c.u5)({
    location: "useDesktopSearchContext"
  }), f = (0, c.UX)({
    location: "useDesktopSearchContext"
  });
  return (0, a.e7)([s.Z, o.Z, l.Z], () => {
    let e = s.Z.getGuild(t),
      i = o.Z.getChannel(n);
    return l.Z.getGuildId() === u.I_8 ? {
      type: u.aib.FAVORITES
    } : null != t && null != e ? {
      type: u.aib.GUILD,
      guildId: t
    } : null != n && null != i && i.isPrivate() ? d({
      isSearchDesktopXDMExperimentEnabled: f,
      isGlobalXDMSettingSupported: r
    }) ? {
      type: u.aib.DMS
    } : {
      type: u.aib.CHANNEL,
      channelId: n
    } : null
  }, [n, t, r, f], i())
}