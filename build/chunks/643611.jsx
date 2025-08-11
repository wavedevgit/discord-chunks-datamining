/** Chunk was on 74543 **/
/** chunk id: 643611, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk313201 = require("./313201.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk556012 = require("./556012.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk331632 = require("./331632.js");
let g = e => {
  let {
    guildId: n,
    channel: t,
    onSelectChannel: a
  } = e, r = (0, i.Wu)([u.ZP], () => u.ZP.getChannels(n)[u.sH].filter(e => {
    let {
      channel: n
    } = e;
    return !n.isGuildVocal() && !n.isThread() && !n.isForumLikeChannel()
  }).map(e => {
    let {
      channel: n
    } = e;
    return n
  }), [n]);
  return <o.xJW className={p.channelSelector} required={true}><o.VcW value={null == t ? true : t.id} options={r.map(e => ({
        value: e.id,
        label: (0, s.F6)(e, x.default, h.Z, true)
      }))} onChange={e => {
        let n = r.find(n => n.id === e);
        a(null != n ? n : true)
      }} placeholder={C.intl.string(C.t["N+T69/"])} /></o.xJW>
};

function j(e) {
  let {
    action: n,
    triggerType: t,
    guildId: s,
    isEdit: u,
    onEditChannel: h,
    onClose: x,
    transitionState: j
  } = e, k = (0, c.Dt)(), [v, f] = a.useState(n.metadata.channelId), [z, S] = a.useState(null), T = (0, i.e7)([d.Z], () => d.Z.getChannel(v), [v]), N = (0, m.c)(n.type, n, t);
  if (null == N) return null;
  let {
    headerText: _
  } = N;
  return <o.Y0X transitionState={j} aria-labelledby={k} size={o.CgR.SMALL} parentComponent={"AutomodActionFlagToChannelModal"}>{<o.hzk className={p.actionContentContainer}>{<o.X6q id={k} color={"header-primary"} variant={"heading-lg/semibold"} className={p.header}>{_}</o.X6q>}{<o.Text color={"header-secondary"} variant={"text-sm/normal"}>{C.intl.string(C.t["z/ZF2t"])}</o.Text>}{<g guildId={s} channel={T} onSelectChannel={e => {
          null != e && f(e.id)
        }} />}{null != z ? <o.Text color={"text-danger"} variant={"text-sm/normal"}>{z}</o.Text> : <o.Text color={"text-muted"} variant={"text-sm/normal"}>{C.intl.string(C.t["ric+5u"])}</o.Text>}</o.hzk>}{<o.mzw>{<o.zxk variant={"primary"} size={"sm"} text={u ? C.intl.string(C.t.bt75u7) : C.intl.string(C.t.R3BPHx)} onClick={() => {
          if (null == v) return void S(C.intl.string(C.t.lM1NLi));
          h(v)
        }} />}{<r.zx onClick={() => {
          x()
        }} color={r.zx.Colors.TRANSPARENT} look={r.zx.Looks.LINK}>{C.intl.string(C.t["ETE/oK"])}</r.zx>}</o.mzw>}</o.Y0X>
}