/** Chunk was on 470 **/
/** chunk id: 215269, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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

function h(t) {
  let {
    guildEventId: e,
    recurrenceId: n,
    channel: h,
    guild: y,
    analyticsContext: P,
    isRecurrenceItem: O = false,
    onSelect: m
  } = t, j = (0, b.Z)({
    guildEventId: e,
    recurrenceId: n,
    guild: y,
    channel: h
  }), N = (0, s.Z)({
    guildEventId: e,
    recurrenceId: n,
    guild: y,
    channel: h
  }), _ = (0, d.Z)({
    guildEventId: e,
    guild: y,
    channel: h,
    recurrenceId: n,
    isRecurrenceItem: O
  }), w = (0, g.Z)(e, y, h), S = (0, E.Z)(e, y, h), D = (0, a.Z)(e, y.id, n), T = (0, f.Z)(e), x = (0, o.Z)({
    id: e,
    label: Z.intl.string(Z.t.WZwPO4)
  }), I = (0, o.Z)({
    id: n,
    label: Z.intl.string(Z.t.NZRGQo)
  }), C = (0, c.Z)(e, y.id, h, n), G = (0, v.Z)({
    guildEventId: e,
    guildId: y.id,
    recurrenceId: n
  });
  return (0, l.jsx)(u.Z, {
    context: P,
    object: p.qAy.CONTEXT_MENU,
    children: (0, l.jsxs)(r.v2r, {
      navId: "user-context",
      onClose: i.Zy,
      "aria-label": Z.intl.string(Z.t.liqwPJ),
      onSelect: m,
      children: [(0, l.jsxs)(r.kSQ, {
        children: [C, !O && S, _, !O && w, N, j, D, O && G]
      }), !O && (0, l.jsx)(r.kSQ, {
        children: T
      }), (0, l.jsxs)(r.kSQ, {
        children: [x, I]
      })]
    })
  })
}