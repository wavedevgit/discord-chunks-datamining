/** Chunk was on 53494 **/
n.d(t, {
  V5: () => c,
  ie: () => s
});
var r = n(680089),
  i = n(496675),
  o = n(540126),
  l = n(443063),
  a = n(981631);

function s(e, t, n) {
  return {
    hasDivider: ! function(e, t) {
      if (t === o.wZ) {
        let t = e.getGuildActionSection().getRows();
        return 1 === t.length && t[0] === l.z.GUILD_PREMIUM_PROGRESS_BAR || e.getGuildActionSection().isEmpty()
      }
      return 0 === e.getSections(!1)[t]
    }(e, n) && (n === o.wZ || !!t && (n === o.p2 || n !== o.wd && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1)))),
    canHaveVoiceSummary: n !== o.wZ && n !== o.p2 && n !== o.wd && n !== e.recentsSectionNumber && n !== e.voiceChannelsSectionNumber
  }
}

function c(e) {
  let {
    category: t,
    voiceStates: n,
    selectedChannelId: o,
    selectedVoiceChannelId: l
  } = e;
  return function(e) {
    let {
      category: t,
      voiceStates: n,
      selectedChannelId: o,
      selectedVoiceChannelId: l
    } = e;
    return !0 !== r.Z.isCollapsed(t.record.id) ? [] : t.getChannelRecords().filter(e => {
      var t;
      if (!i.Z.can(a.Plq.VIEW_CHANNEL, e)) return !1;
      let r = null !== (t = n[e.id]) && void 0 !== t ? t : [];
      return e.id !== l && e.id !== o && r.length > 0
    })
  }({
    category: t,
    selectedChannelId: o,
    selectedVoiceChannelId: l,
    voiceStates: n
  }).length > 0
}