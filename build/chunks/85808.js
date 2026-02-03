/** Chunk was on 44669 **/
/** chunk id: 85808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B3: () => o,
  Bo: () => c
});
var Chunk924985 = require("./924985.js"),
  Chunk576705 = require("./576705.js"),
  Chunk32603 = require("./32603.js"),
  Chunk281405 = require("./281405.js"),
  Chunk652215 = require("./652215.js");

function o(e, t, n) {
  return {
    hasDivider: ! function(e, t) {
      if (t === i.PU) {
        let t = e.getGuildActionSection().getRows();
        return 1 === t.length && t[0] === s.n.GUILD_PREMIUM_PROGRESS_BAR || e.getGuildActionSection().isEmpty()
      }
      return 0 === e.getSections(false)[t]
    }(e, n) && (n === i.PU || !!t && (n === i.HP || n !== i.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, false)))),
    canHaveVoiceSummary: n !== i.PU && n !== i.HP && n !== i.bK && n !== e.recentsSectionNumber && n !== e.voiceChannelsSectionNumber
  }
}

function c(e) {
  let {
    category: t,
    voiceStates: n,
    selectedChannelId: i,
    selectedVoiceChannelId: s
  } = e;
  return function(e) {
    let {
      category: t,
      voiceStates: n,
      selectedChannelId: i,
      selectedVoiceChannelId: s
    } = e;
    returntrue !== r.A.isCollapsed(t.record.id) ? [] : t.getChannelRecords().filter(e => {
      var t;
      if (!l.A.can(a.xBc.VIEW_CHANNEL, e)) returnfalse;
      let r = null != (t = n[e.id]) ? t : [];
      return e.id !== s && e.id !== i && r.length > 0
    })
  }({
    category: t,
    selectedChannelId: i,
    selectedVoiceChannelId: s,
    voiceStates: n
  }).length > 0
}