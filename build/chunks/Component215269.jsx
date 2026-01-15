/** Chunk was on 470 **/
/** chunk id: 215269, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => y
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk70877 = require("./70877.jsx"),
  Chunk147236 = require("./147236.jsx"),
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
    guild: P,
    analyticsContext: O,
    isRecurrenceItem: m = false,
    onSelect: j,
    target: N
  } = t, _ = (0, b.Z)({
    guildEventId: e,
    recurrenceId: n,
    guild: P,
    channel: y
  }), S = (0, d.Z)({
    guildEventId: e,
    recurrenceId: n,
    guild: P,
    channel: y
  }), w = (0, g.Z)({
    guildEventId: e,
    guild: P,
    channel: y,
    recurrenceId: n,
    isRecurrenceItem: m
  }), D = (0, f.Z)(e, P, y), x = (0, p.Z)(e, P, y), T = (0, s.Z)(e, P.id, n), I = (0, a.Z)(e, N), C = (0, v.Z)(e), G = (0, o.Z)({
    id: e,
    label: h.intl.string(h.t.WZwPO4)
  }), L = (0, o.Z)({
    id: n,
    label: h.intl.string(h.t.NZRGQo)
  }), U = (0, c.Z)(e, P.id, y, n), A = (0, E.Z)({
    guildEventId: e,
    guildId: P.id,
    recurrenceId: n
  });
  return (0, l.jsx)(u.Z, {
    context: O,
    object: Z.qAy.CONTEXT_MENU,
    children: (0, l.jsxs)(i.v2r, {
      navId: "user-context",
      onClose: r.Zy,
      "aria-label": h.intl.string(h.t.liqwPJ),
      onSelect: j,
      children: [(0, l.jsxs)(i.kSQ, {
        children: [U, !m && x, w, !m && D, S, _, T, m && A]
      }), !m && (0, l.jsx)(i.kSQ, {
        children: C
      }), null != I && (0, l.jsx)(i.kSQ, {
        children: I
      }), (0, l.jsxs)(i.kSQ, {
        children: [G, L]
      })]
    })
  })
}