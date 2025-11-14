/** Chunk was on 65354 **/
/** chunk id: 700026, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V5: () => c,
  ie: () => s
});
var Chunk680089 = require("./680089.js"),
  Chunk496675 = require("./496675.js"),
  Chunk540126 = require("./540126.js"),
  Chunk443063 = require("./443063.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  return {
    hasDivider: ! function(e, t) {
      if (t === l.wZ) {
        let t = e.getGuildActionSection().getRows();
        return 1 === t.length && t[0] === o.z.GUILD_PREMIUM_PROGRESS_BAR || e.getGuildActionSection().isEmpty()
      }
      return 0 === e.getSections(false)[t]
    }(e, n) && (n === l.wZ || !!t && (n === l.p2 || n !== l.wd && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, false)))),
    canHaveVoiceSummary: n !== l.wZ && n !== l.p2 && n !== l.wd && n !== e.recentsSectionNumber && n !== e.voiceChannelsSectionNumber
  }
}

function c(e) {
  let {
    category: t,
    voiceStates: n,
    selectedChannelId: l,
    selectedVoiceChannelId: o
  } = e;
  return function(e) {
    let {
      category: t,
      voiceStates: n,
      selectedChannelId: l,
      selectedVoiceChannelId: o
    } = e;
    returntrue !== r.Z.isCollapsed(t.record.id) ? [] : t.getChannelRecords().filter(e => {
      var t;
      if (!i.Z.can(a.Plq.VIEW_CHANNEL, e)) returnfalse;
      let r = null != (t = n[e.id]) ? t : [];
      return e.id !== o && e.id !== l && r.length > 0
    })
  }({
    category: t,
    selectedChannelId: l,
    selectedVoiceChannelId: o,
    voiceStates: n
  }).length > 0
}