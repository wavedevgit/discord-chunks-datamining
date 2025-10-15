/** Chunk was on 470 **/
/** chunk id: 215269, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk70877 = require("./70877.jsx"),
  Chunk572427 = require("./572427.jsx"),
  Chunk231259 = require("./231259.jsx"),
  Chunk159233 = require("./159233.jsx"),
  Chunk924952 = require("./924952.jsx"),
  Chunk99528 = require("./99528.jsx"),
  Chunk830394 = require("./830394.jsx"),
  Chunk473545 = require("./473545.jsx"),
  Chunk124422 = require("./124422.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function y(t) {
  let {
    guildEventId: e,
    recurrenceId: n,
    channel: y,
    guild: h,
    analyticsContext: P,
    isRecurrenceItem: O = false,
    onSelect: m
  } = t, N = (0, b.Z)({
    guildEventId: e,
    recurrenceId: n,
    guild: h,
    channel: y
  }), j = (0, s.Z)({
    guildEventId: e,
    recurrenceId: n,
    guild: h,
    channel: y
  }), _ = (0, d.Z)({
    guildEventId: e,
    guild: h,
    channel: y,
    recurrenceId: n,
    isRecurrenceItem: O
  }), w = (0, g.Z)(e, h, y), S = (0, E.Z)(e, h, y), D = (0, a.Z)(e, h.id, n), T = (0, f.Z)(e), x = (0, u.Z)({
    id: e,
    label: Z.intl.string(Z.t.WZwPO4)
  }), I = (0, u.Z)({
    id: n,
    label: Z.intl.string(Z.t.NZRGQo)
  }), C = (0, c.Z)(e, h.id, y, n), G = (0, v.Z)({
    guildEventId: e,
    guildId: h.id,
    recurrenceId: n
  });
  return (0, l.jsx)(o.Z, {
    context: P,
    object: p.qAy.CONTEXT_MENU,
    children: (0, l.jsxs)(r.v2r, {
      navId: "user-context",
      onClose: i.Zy,
      "aria-label": Z.intl.string(Z.t.liqwPJ),
      onSelect: m,
      children: [(0, l.jsxs)(r.kSQ, {
        children: [C, !O && S, _, !O && w, j, N, D, O && G]
      }), !O && (0, l.jsx)(r.kSQ, {
        children: T
      }), (0, l.jsxs)(r.kSQ, {
        children: [x, I]
      })]
    })
  })
}