/** Chunk was on 2928 **/
n.d(t, {
  ZP: () => y,
  dt: () => m,
  eo: () => b
}), n(653041), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(442837),
  o = n(884338),
  a = n(398758),
  s = n(9156),
  c = n(934415),
  u = n(540126),
  d = n(700026),
  p = n(301342),
  h = n(327530),
  f = n(769208);
let g = i.memo(function(e) {
  let {
    guildChannels: t,
    guildChannelsVersion: n
  } = e, l = i.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
  return null == l ? null : (0, r.jsx)(p.Qo, {
    category: l
  })
});

function m(e) {
  let {
    sectionIndex: t,
    guildChannels: n,
    voiceStates: r,
    selectedChannelId: i,
    selectedVoiceChannelId: l,
    optInEnabled: o,
    visualRefreshEnabled: a,
    density: s
  } = e;
  if (t === n.voiceChannelsSectionNumber) return 44;
  let {
    hasDivider: c,
    canHaveVoiceSummary: p
  } = (0, d.ie)(n, o, t), f = c ? a ? 9 : h.QP : 0;
  if (!p || t === u.wZ) return f;
  let g = n.getNamedCategoryFromSection(t);
  return null == g ? f : (0, d.V5)({
    category: g,
    selectedChannelId: i,
    selectedVoiceChannelId: l,
    voiceStates: r
  }) ? (a ? "cozy" === s ? 42 : 34 : h.Vf) + f : f
}

function b(e, t, n) {
  if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
  let {
    hasDivider: r,
    canHaveVoiceSummary: i
  } = (0, d.ie)(t, n, e);
  return "section-footer-".concat(e).concat(r ? "-divider" : "").concat(i ? "-voice-summary" : "")
}
let y = i.memo(function(e) {
  let {
    sectionIndex: t,
    guildChannels: n,
    guildChannelsVersion: p,
    voiceStates: h,
    guildId: m,
    selectedChannelId: b,
    selectedVoiceChannelId: y,
    optInEnabled: v
  } = e, {
    hasDivider: O,
    canHaveVoiceSummary: j
  } = i.useMemo(() => (0, d.ie)(n, v, t), [n, v, t, p]), _ = i.useMemo(() => t === u.wZ ? null : n.getCategoryFromSection(t), [n, t, p]), C = (0, a.DM)(m), x = (0, l.Wu)([s.ZP], () => {
    if (null == _ || !_.isCollapsed || !j) return [];
    let e = _.getChannelRecords(),
      t = [];
    for (let n of e) {
      if (!n.isGuildVocal()) continue;
      let e = s.ZP.isChannelOrParentOptedIn(m, n.id);
      (!C || e) && t.push(n)
    }
    return t
  }, [_, j, m, C]), P = i.useMemo(() => (0, c.c4)({
    channels: x,
    selectedChannelId: b,
    selectedVoiceChannelId: y,
    voiceStates: h
  }), [x, b, y, h]);
  if (t === n.voiceChannelsSectionNumber) return (0, r.jsx)(g, {
    guildChannels: n,
    guildChannelsVersion: p
  });
  let N = O ? (0, r.jsx)("div", {
    className: f.sectionDivider
  }) : null;
  return j && 0 !== P.length ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: f.voiceUserSummary,
      children: (0, r.jsx)(o.Z, {
        renderIcon: !0,
        users: P,
        max: 8,
        showUserPopout: !0,
        guildId: m
      })
    }), N]
  }) : N
})