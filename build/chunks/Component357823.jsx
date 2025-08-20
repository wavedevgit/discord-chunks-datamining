/** Chunk was on 50568 **/
/** chunk id: 357823, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
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
let p = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: t,
    channel: n,
    guildId: a,
    onSelect: o,
    onInteraction: u,
    context: g
  } = e, p = n.id, y = t.isNonUserBot(), S = t.id === _.default.getId(), v = (0, s.Z)(t), A = (0, f.Z)(t, a, p), j = (0, b.Y)({
    isOwnSettings: S,
    userId: t.id,
    channelId: p,
    guildId: a,
    context: g
  }), [m, I] = (0, b.E)(t, p, a), P = (0, O.Z)(t, a, p), Z = (0, c.Z)({
    id: t.id,
    label: E.intl.string(E.t["/AXYnJ"])
  }), C = (0, d.Z)(t.id, n);
  return (0, r.jsx)(i.v2r, {
    navId: "user-context",
    onClose: l.Zy,
    "aria-label": E.intl.string(E.t.liqwPD),
    onSelect: o,
    onInteraction: u,
    variant: "fixed",
    children: !y && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(i.kSQ, {
        children: [v, A]
      }), C, j, !S && (0, r.jsx)(i.kSQ, {
        children: (0, r.jsxs)(i.sNh, {
          id: "more-options",
          label: E.intl.string(E.t.PdRCRk),
          children: [m, (0, r.jsx)(i.kSQ, {
            children: P
          }), I]
        })
      }), S && (0, r.jsx)(i.kSQ, {
        children: Z
      })]
    })
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.VOICE_USER])