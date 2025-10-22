/** Chunk was on 75454 **/
/** chunk id: 357823, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.jsx"),
  Chunk108843 = require("./108843.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk882188 = require("./882188.jsx"),
  Chunk819403 = require("./819403.jsx"),
  Chunk286694 = require("./286694.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk238296 = require("./238296.jsx"),
  Chunk933409 = require("./933409.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let C = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: t,
    channel: n,
    guildId: u,
    onSelect: a,
    onInteraction: d,
    context: g
  } = e, C = n.id, M = t.isNonUserBot(), O = t.id === E.default.getId(), S = (0, _.Z)(t), b = (0, s.Z)(t, u, C), I = (0, f.Y)({
    isOwnSettings: O,
    userId: t.id,
    channelId: C,
    guildId: u,
    context: g
  }), [Z, T] = (0, f.E)(t, C, u), h = (0, A.Z)(t, u, C), N = (0, o.Z)({
    id: t.id,
    label: v.intl.string(v.t["/AXYnE"])
  }), p = (0, c.Z)(t.id, n);
  return (0, i.jsx)(l.v2r, {
    navId: "user-context",
    onClose: r.Zy,
    "aria-label": v.intl.string(v.t.liqwPJ),
    onSelect: a,
    onInteraction: d,
    variant: "fixed",
    children: !M && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(l.kSQ, {
        children: [S, b]
      }), p, I, !O && (0, i.jsx)(l.kSQ, {
        children: (0, i.jsxs)(l.sNh, {
          id: "more-options",
          label: v.intl.string(v.t.PdRCRg),
          children: [Z, (0, i.jsx)(l.kSQ, {
            children: h
          }), T]
        })
      }), O && (0, i.jsx)(l.kSQ, {
        children: N
      })]
    })
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.VOICE_USER])