/** Chunk was on 51235 **/
/** chunk id: 429122, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => y,
  dt: () => b,
  eo: () => m
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk398758 = require("./398758.js"),
  Chunk9156 = require("./9156.js"),
  Chunk934415 = require("./934415.js"),
  Chunk540126 = require("./540126.js"),
  Chunk700026 = require("./700026.js"),
  Chunk301342 = require("./301342.jsx"),
  Chunk327530 = require("./327530.js"),
  Chunk135445 = require("./135445.js");
let g = Chunk473749.memo(function(e) {
  let {
    guildChannels: t,
    guildChannelsVersion: n
  } = e, l = i.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
  return null == l ? null : (0, r.jsx)(f.Qo, {
    category: l
  })
});

function b(e) {
  let {
    sectionIndex: t,
    guildChannels: n,
    voiceStates: r,
    selectedChannelId: i,
    selectedVoiceChannelId: l,
    optInEnabled: a,
    visualRefreshEnabled: o,
    density: s
  } = e;
  if (t === n.voiceChannelsSectionNumber) return 44;
  let {
    hasDivider: c,
    canHaveVoiceSummary: f
  } = (0, d.ie)(n, a, t), p = c ? o ? 9 : h.QP : 0;
  if (!f || t === u.wZ) return p;
  let g = n.getNamedCategoryFromSection(t);
  return null == g ? p : (0, d.V5)({
    category: g,
    selectedChannelId: i,
    selectedVoiceChannelId: l,
    voiceStates: r
  }) ? (o ? "cozy" === s ? 42 : 34 : h.Vf) + p : p
}

function m(e, t, n) {
  if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
  let {
    hasDivider: r,
    canHaveVoiceSummary: i
  } = (0, d.ie)(t, n, e);
  return "section-footer-".concat(e).concat(r ? "-divider" : "").concat(i ? "-voice-summary" : "")
}
let y = Chunk473749.memo(function(e) {
  let {
    sectionIndex: t,
    guildChannels: n,
    guildChannelsVersion: f,
    voiceStates: h,
    guildId: b,
    selectedChannelId: m,
    selectedVoiceChannelId: y,
    optInEnabled: O
  } = e, {
    hasDivider: v,
    canHaveVoiceSummary: j
  } = i.useMemo(() => (0, d.ie)(n, O, t), [n, O, t, f]), C = i.useMemo(() => t === u.wZ ? null : n.getCategoryFromSection(t), [n, t, f]), x = (0, o.DM)(b), E = (0, l.Wu)([s.ZP], () => {
    if (null == C || !C.isCollapsed || !j) return [];
    let e = C.getChannelRecords(),
      t = [];
    for (let n of e) {
      if (!n.isGuildVocal()) continue;
      let e = s.ZP.isChannelOrParentOptedIn(b, n.id);
      (!x || e) && t.push(n)
    }
    return t
  }, [C, j, b, x]), S = i.useMemo(() => (0, c.c4)({
    channels: E,
    selectedChannelId: m,
    selectedVoiceChannelId: y,
    voiceStates: h
  }), [E, m, y, h]);
  if (t === n.voiceChannelsSectionNumber) return (0, r.jsx)(g, {
    guildChannels: n,
    guildChannelsVersion: f
  });
  let I = v ? (0, r.jsx)("div", {
    className: p.sectionDivider
  }) : null;
  return j && 0 !== S.length ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: p.voiceUserSummary,
      children: (0, r.jsx)(a.ZP, {
        renderIcon: true,
        users: S,
        max: 8,
        showUserPopout: true,
        guildId: b
      })
    }), I]
  }) : I
})