/** Chunk was on 65341 **/
/** chunk id: 158956, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk239705 = require("./239705.js"),
  Chunk985018 = require("./985018.jsx");
let h = t => {
  let {
    guildId: n,
    channel: e,
    onSelectChannel: i
  } = t, r = (0, a.yK)([c.Ay], () => c.Ay.getChannels(n)[c.I6].filter(t => {
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
  return (0, l.jsx)(u.ZiE, {
    required: true,
    value: null == e ? true : e.id,
    options: r.map(t => ({
      id: t.id,
      value: t.id,
      label: (0, s.m1)(t, o.default, d.A, true)
    })),
    onSelectionChange: t => {
      let n = r.find(n => n.id === t);
      i(null != n ? n : true)
    },
    placeholder: N.intl.string(N.t["N+T69y"]),
    selectionMode: "single"
  })
};

function S(t) {
  let {
    action: n,
    triggerType: e,
    guildId: s,
    isEdit: c,
    onEditChannel: d,
    onClose: o,
    transitionState: S
  } = t, [_, C] = i.useState(n.metadata.channelId), [g, H] = i.useState(null), I = (0, a.bG)([A.A], () => A.A.getChannel(_), [_]), L = (0, E.x)(n.type, n, e);
  if (null == L) return null;
  let {
    headerText: T
  } = L;
  return (0, l.jsx)(r.Modal, {
    onClose: o,
    transitionState: S,
    title: T,
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
        null == _ ? H(N.intl.string(N.t.lM1NLh)) : d(_)
      }
    }],
    children: (0, l.jsxs)(u.BJc, {
      gap: 8,
      direction: "vertical",
      children: [(0, l.jsx)(h, {
        guildId: s,
        channel: I,
        onSelectChannel: t => {
          null != t && C(t.id)
        }
      }), null != g ? (0, l.jsx)(u.Text, {
        color: "text-feedback-critical",
        variant: "text-sm/normal",
        children: g
      }) : (0, l.jsx)(u.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: N.intl.string(N.t["ric+5q"])
      })]
    })
  })
}