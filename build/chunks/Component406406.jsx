/** Chunk was on 7869 **/
/** chunk id: 406406, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk50268 = require("./50268.jsx"),
  Chunk247191 = require("./247191.jsx"),
  Chunk971961 = require("./971961.jsx"),
  Chunk753333 = require("./753333.jsx"),
  Chunk544255 = require("./544255.jsx"),
  Chunk28314 = require("./28314.jsx"),
  Chunk24661 = require("./24661.jsx"),
  Chunk288357 = require("./288357.jsx"),
  Chunk587018 = require("./587018.jsx"),
  Chunk675623 = require("./675623.jsx"),
  Chunk174966 = require("./174966.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function O(t) {
  let {
    guildEventId: e,
    recurrenceId: n,
    channel: O,
    guild: m,
    analyticsContext: j,
    isRecurrenceItem: h = false,
    onSelect: D,
    target: _
  } = t, w = (0, b.A)({
    guildEventId: e,
    recurrenceId: n,
    guild: m,
    channel: O
  }), N = (0, d.A)({
    guildEventId: e,
    recurrenceId: n,
    guild: m,
    channel: O
  }), G = (0, g.A)({
    guildEventId: e,
    guild: m,
    channel: O,
    recurrenceId: n,
    isRecurrenceItem: h
  }), S = (0, y.A)(e, m, O), P = (0, A.A)(e, m, O), x = (0, s.A)(e, m.id, n), T = (0, c.A)(e, _), C = (0, f.A)(e), I = (0, o.A)({
    id: e,
    label: E.intl.string(E.t.WZwPO4)
  }), L = (0, o.A)({
    id: n,
    label: E.intl.string(E.t.NZRGQo)
  }), U = (0, a.A)(e, m.id, O, n), V = (0, p.A)({
    guildEventId: e,
    guildId: m.id,
    recurrenceId: n
  });
  return (0, l.jsx)(u.A, {
    context: j,
    object: v.ZSU.CONTEXT_MENU,
    children: (0, l.jsxs)(r.W1t, {
      navId: "user-context",
      onClose: i.Z_,
      "aria-label": E.intl.string(E.t.liqwPJ),
      onSelect: D,
      children: [(0, l.jsxs)(r.rXV, {
        children: [U, !h && P, G, !h && S, N, w, x, h && V]
      }), !h && (0, l.jsx)(r.rXV, {
        children: C
      }), null != T && (0, l.jsx)(r.rXV, {
        children: T
      }), (0, l.jsxs)(r.rXV, {
        children: [I, L]
      })]
    })
  })
}