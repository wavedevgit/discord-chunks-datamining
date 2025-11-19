/** Chunk was on 81141 **/
/** chunk id: 357823, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
let v = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: t,
    channel: n,
    guildId: u,
    onSelect: a,
    onInteraction: d,
    context: g
  } = e, v = n.id, C = t.isNonUserBot(), M = t.id === E.default.getId(), O = (0, _.Z)(t), I = (0, s.Z)(t, u, v), b = (0, A.Y)({
    isOwnSettings: M,
    userId: t.id,
    channelId: v,
    guildId: u,
    context: g
  }), [Z, N] = (0, A.E)(t, v, u), T = (0, f.Z)(t, u, v), h = (0, o.Z)({
    id: t.id,
    label: S.intl.string(S.t["/AXYnE"])
  }), R = (0, c.Z)(t.id, n);
  return (0, i.jsx)(l.v2r, {
    navId: "user-context",
    onClose: r.Zy,
    "aria-label": S.intl.string(S.t.liqwPJ),
    onSelect: a,
    onInteraction: d,
    variant: "fixed",
    children: !C && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(l.kSQ, {
        children: [O, I]
      }), R, b, !M && (0, i.jsx)(l.kSQ, {
        children: (0, i.jsxs)(l.sNh, {
          id: "more-options",
          label: S.intl.string(S.t.PdRCRg),
          children: [Z, (0, i.jsx)(l.kSQ, {
            children: T
          }), N]
        })
      }), M && (0, i.jsx)(l.kSQ, {
        children: h
      })]
    })
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.VOICE_USER])