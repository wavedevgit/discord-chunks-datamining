/** Chunk was on web.js **/
/** chunk id: 165017, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => p
});
var Chunk498607 = require("./498607.js"),
  i = require.n(Chunk498607),
  Chunk442837 = require("./442837.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk945577 = require("./945577.js"),
  Chunk125085 = require("./125085.js"),
  Chunk981631 = require("./981631.js");

function _(e) {
  let {
    isSearchDesktopXDMExperimentEnabled: t,
    isGlobalXDMSettingSupported: n,
    isCrossDMSearchEnabledSetting: r
  } = e;
  return t && n ? null != r ? r : d.K : !!t
}

function p(e) {
  let {
    guildId: t,
    channelId: n
  } = e, r = (0, u.u5)({
    location: "useDesktopSearchContext"
  }), d = _({
    isSearchDesktopXDMExperimentEnabled: (0, u.UX)({
      location: "useDesktopSearchContext"
    }),
    isGlobalXDMSettingSupported: r,
    isCrossDMSearchEnabledSetting: o.rR.useSetting()
  });
  return (0, a.e7)([l.Z, s.Z, c.Z], () => {
    let e = l.Z.getGuild(t),
      r = s.Z.getChannel(n);
    return c.Z.getGuildId() === f.I_8 ? {
      type: f.aib.FAVORITES
    } : null != t && null != e ? {
      type: f.aib.GUILD,
      guildId: t
    } : null != n && null != r && r.isPrivate() ? d ? {
      type: f.aib.DMS
    } : {
      type: f.aib.CHANNEL,
      channelId: n
    } : null
  }, [n, t, d], i())
}