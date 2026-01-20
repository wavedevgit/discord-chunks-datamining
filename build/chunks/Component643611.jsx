/** Chunk was on 74543 **/
/** chunk id: 643611, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk556012 = require("./556012.js"),
  Chunk388032 = require("./388032.jsx");
let N = t => {
  let {
    guildId: n,
    channel: e,
    onSelectChannel: i
  } = t, r = (0, a.Wu)([d.ZP], () => d.ZP.getChannels(n)[d.sH].filter(t => {
    let {
      channel: n
    } = t;
    return !n.isGuildVocal() && !n.isThread() && !n.isForumLikeChannel()
  }).map(t => {
    let {
      channel: n
    } = t;
    return n
  }), [n]);
  return (0, l.jsx)(u.VcW, {
    required: true,
    value: null == e ? true : e.id,
    options: r.map(t => ({
      id: t.id,
      value: t.id,
      label: (0, s.F6)(t, o.default, j.Z, true)
    })),
    onSelectionChange: t => {
      let n = r.find(n => n.id === t);
      i(null != n ? n : true)
    },
    placeholder: E.intl.string(E.t["N+T69y"]),
    selectionMode: "single"
  })
};

function S(t) {
  let {
    action: n,
    triggerType: e,
    guildId: s,
    isEdit: d,
    onEditChannel: j,
    onClose: o,
    transitionState: S
  } = t, [_, C] = i.useState(n.metadata.channelId), [h, g] = i.useState(null), I = (0, a.e7)([c.Z], () => c.Z.getChannel(_), [_]), L = (0, A.c)(n.type, n, e);
  if (null == L) return null;
  let {
    headerText: f
  } = L;
  return (0, l.jsx)(r.Modal, {
    onClose: o,
    transitionState: S,
    title: f,
    subtitle: E.intl.string(E.t["z/ZF2i"]),
    actions: [{
      text: E.intl.string(E.t["ETE/oC"]),
      onClick: () => {
        o()
      },
      variant: "secondary"
    }, {
      text: d ? E.intl.string(E.t.bt75uw) : E.intl.string(E.t["R3BPH+"]),
      onClick: () => {
        if (null == _) return void g(E.intl.string(E.t.lM1NLh));
        j(_)
      }
    }],
    children: (0, l.jsxs)(u.Kqy, {
      gap: 8,
      direction: "vertical",
      children: [(0, l.jsx)(N, {
        guildId: s,
        channel: I,
        onSelectChannel: t => {
          null != t && C(t.id)
        }
      }), null != h ? (0, l.jsx)(u.Text, {
        color: "text-feedback-critical",
        variant: "text-sm/normal",
        children: h
      }) : (0, l.jsx)(u.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: E.intl.string(E.t["ric+5q"])
      })]
    })
  })
}