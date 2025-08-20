/** Chunk was on 57937 **/
/** chunk id: 357823, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => y
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
let y = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: t,
    channel: n,
    guildId: a,
    onSelect: o,
    onInteraction: u,
    context: g
  } = e, y = n.id, S = t.isNonUserBot(), p = t.id === b.default.getId(), v = (0, d.Z)(t), m = (0, f.Z)(t, a, y), A = (0, _.Y)({
    isOwnSettings: p,
    userId: t.id,
    channelId: y,
    guildId: a,
    context: g
  }), [I, P] = (0, _.E)(t, y, a), j = (0, O.Z)(t, a, y), C = (0, c.Z)({
    id: t.id,
    label: E.intl.string(E.t["/AXYnJ"])
  }), Z = (0, s.Z)(t.id, n);
  return (0, r.jsx)(i.v2r, {
    navId: "user-context",
    onClose: l.Zy,
    "aria-label": E.intl.string(E.t.liqwPD),
    onSelect: o,
    onInteraction: u,
    variant: "fixed",
    children: !S && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(i.kSQ, {
        children: [v, m]
      }), Z, A, !p && (0, r.jsx)(i.kSQ, {
        children: (0, r.jsxs)(i.sNh, {
          id: "more-options",
          label: E.intl.string(E.t.PdRCRk),
          children: [I, (0, r.jsx)(i.kSQ, {
            children: j
          }), P]
        })
      }), p && (0, r.jsx)(i.kSQ, {
        children: C
      })]
    })
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.VOICE_USER])