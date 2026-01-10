/** Chunk was on 38035 **/
/** chunk id: 357823, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
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
let O = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: t,
    channel: n,
    guildId: o,
    onSelect: a,
    onInteraction: u,
    context: g
  } = e, O = n.id, A = t.isNonUserBot(), j = t.id === _.default.getId(), Z = (0, s.Z)(t), S = (0, f.Z)(t, o, O), h = (0, E.Y)({
    isOwnSettings: j,
    userId: t.id,
    channelId: O,
    guildId: o,
    context: g
  }), [p, x] = (0, E.E)(t, O, o), y = (0, b.Z)(t, o, O), C = (0, c.Z)({
    id: t.id,
    label: v.intl.string(v.t["/AXYnE"])
  }), I = (0, d.Z)(t.id, n);
  return (0, i.jsx)(r.v2r, {
    navId: "user-context",
    onClose: l.Zy,
    "aria-label": v.intl.string(v.t.liqwPJ),
    onSelect: a,
    onInteraction: u,
    variant: "fixed",
    children: !A && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(r.kSQ, {
        children: [Z, S]
      }), I, h, !j && (0, i.jsx)(r.kSQ, {
        children: (0, i.jsxs)(r.sNh, {
          id: "more-options",
          label: v.intl.string(v.t.PdRCRg),
          children: [p, (0, i.jsx)(r.kSQ, {
            children: y
          }), x]
        })
      }), j && (0, i.jsx)(r.kSQ, {
        children: C
      })]
    })
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.VOICE_USER])