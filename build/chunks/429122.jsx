/** Chunk was on 34779 **/
/** chunk id: 429122, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => O,
  dt: () => m,
  eo: () => b
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk884338 = require("./884338.js"),
  Chunk398758 = require("./398758.js"),
  Chunk9156 = require("./9156.js"),
  Chunk934415 = require("./934415.js"),
  Chunk540126 = require("./540126.js"),
  Chunk700026 = require("./700026.js"),
  Chunk301342 = require("./301342.jsx"),
  Chunk327530 = require("./327530.js"),
  Chunk789123 = require("./789123.js");
let g = Chunk73800.memo(function(e) {
  let {
    guildChannels: t,
    guildChannelsVersion: n
  } = e, l = i.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
  return null == l ? null : <h.Qo category={l} />
});

function m(e) {
  let {
    sectionIndex: t,
    guildChannels: n,
    voiceStates: r,
    selectedChannelId: i,
    selectedVoiceChannelId: l,
    optInEnabled: o,
    visualRefreshEnabled: s,
    density: a
  } = e;
  if (t === n.voiceChannelsSectionNumber) return 44;
  let {
    hasDivider: c,
    canHaveVoiceSummary: h
  } = (0, d.ie)(n, o, t), f = c ? s ? 9 : p.QP : 0;
  if (!h || t === u.wZ) return f;
  let g = n.getNamedCategoryFromSection(t);
  return null == g ? f : (0, d.V5)({
    category: g,
    selectedChannelId: i,
    selectedVoiceChannelId: l,
    voiceStates: r
  }) ? (s ? "cozy" === a ? 42 : 34 : p.Vf) + f : f
}

function b(e, t, n) {
  if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
  let {
    hasDivider: r,
    canHaveVoiceSummary: i
  } = (0, d.ie)(t, n, e);
  return "section-footer-".concat(e).concat(r ? "-divider" : "").concat(i ? "-voice-summary" : "")
}
let O = Chunk73800.memo(function(e) {
  let {
    sectionIndex: t,
    guildChannels: n,
    guildChannelsVersion: h,
    voiceStates: p,
    guildId: m,
    selectedChannelId: b,
    selectedVoiceChannelId: O,
    optInEnabled: _
  } = e, {
    hasDivider: y,
    canHaveVoiceSummary: C
  } = i.useMemo(() => (0, d.ie)(n, _, t), [n, _, t, h]), v = i.useMemo(() => t === u.wZ ? null : n.getCategoryFromSection(t), [n, t, h]), j = (0, s.DM)(m), E = (0, l.Wu)([a.ZP], () => {
    if (null == v || !v.isCollapsed || !C) return [];
    let e = v.getChannelRecords(),
      t = [];
    for (let n of e) {
      if (!n.isGuildVocal()) continue;
      let e = a.ZP.isChannelOrParentOptedIn(m, n.id);
      (!j || e) && t.push(n)
    }
    return t
  }, [v, C, m, j]), S = i.useMemo(() => (0, c.c4)({
    channels: E,
    selectedChannelId: b,
    selectedVoiceChannelId: O,
    voiceStates: p
  }), [E, b, O, p]);
  if (t === n.voiceChannelsSectionNumber) return <g guildChannels={n} guildChannelsVersion={h} />;
  let x = y ? <div className={f.sectionDivider} /> : null;
  return C && 0 !== S.length ? <r.Fragment>{<div className={f.voiceUserSummary}><o.ZP renderIcon={true} users={S} max={8} showUserPopout={true} guildId={m} /></div>}{x}</r.Fragment> : x
})