/** Chunk was on 51111 **/
/** chunk id: 323002, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk585171 = require("./585171.jsx"),
  Chunk374426 = require("./374426.jsx"),
  Chunk985018 = require("./985018.jsx");

function b(e) {
  let {
    guildId: t,
    onSelect: r,
    onPickerClose: i,
    onInteraction: c
  } = e, b = (0, u.A)(t, i), p = (0, a.A)();
  return (0, n.jsx)(o.W1t, {
    "data-menu-migrated-auto": true,
    navId: "user-context",
    onClose: l.Z_,
    "aria-label": s.intl.string(s.t.liqwPJ),
    onSelect: r,
    onInteraction: c,
    children: (0, n.jsxs)(o.rXV, {
      children: [p, b]
    })
  })
}

function p(e) {
  let {
    analyticsLocations: t
  } = (0, c.Ay)(e.sourceAnalyticsLocations, i.A.SOUNDBOARD_CONTEXT_MENU);
  return (0, n.jsx)(c.f5, {
    value: t,
    children: (0, n.jsx)(b, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, e))
  })
}