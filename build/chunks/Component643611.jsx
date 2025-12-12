/** Chunk was on 63714 **/
/** chunk id: 643611, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk556012 = require("./556012.js"),
  Chunk388032 = require("./388032.jsx");
let S = t => {
  let {
    guildId: n,
    channel: e,
    onSelectChannel: r
  } = t, i = (0, a.Wu)([j.ZP], () => j.ZP.getChannels(n)[j.sH].filter(t => {
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
  return (0, l.jsx)(u.d, {
    required: true,
    value: null == e ? true : e.id,
    options: i.map(t => ({
      value: t.id,
      label: (0, c.F6)(t, A.default, o.Z, true)
    })),
    onChange: t => {
      let n = i.find(n => n.id === t);
      r(null != n ? n : true)
    },
    placeholder: N.intl.string(N.t["N+T69y"])
  })
};

function _(t) {
  let {
    action: n,
    triggerType: e,
    guildId: u,
    isEdit: c,
    onEditChannel: j,
    onClose: o,
    transitionState: A
  } = t, [_, C] = r.useState(n.metadata.channelId), [h, g] = r.useState(null), I = (0, a.e7)([d.Z], () => d.Z.getChannel(_), [_]), L = (0, E.c)(n.type, n, e);
  if (null == L) return null;
  let {
    headerText: f
  } = L;
  return (0, l.jsx)(i.Modal, {
    onClose: o,
    transitionState: A,
    title: f,
    subtitle: N.intl.string(N.t["z/ZF2i"]),
    actions: [{
      text: N.intl.string(N.t["ETE/oC"]),
      onClick: () => {
        o()
      },
      variant: "secondary"
    }, {
      text: c ? N.intl.string(N.t.bt75uw) : N.intl.string(N.t["R3BPH+"]),
      onClick: () => {
        if (null == _) return void g(N.intl.string(N.t.lM1NLh));
        j(_)
      }
    }],
    children: (0, l.jsxs)(s.Kqy, {
      gap: 8,
      direction: "vertical",
      children: [(0, l.jsx)(S, {
        guildId: u,
        channel: I,
        onSelectChannel: t => {
          null != t && C(t.id)
        }
      }), null != h ? (0, l.jsx)(s.Text, {
        color: "text-feedback-critical",
        variant: "text-sm/normal",
        children: h
      }) : (0, l.jsx)(s.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: N.intl.string(N.t["ric+5q"])
      })]
    })
  })
}