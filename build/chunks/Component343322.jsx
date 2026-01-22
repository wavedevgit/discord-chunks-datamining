/** Chunk was on 881 **/
/** chunk id: 343322, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk59636 = require("./59636.js"),
  Chunk189081 = require("./189081.js"),
  Chunk194871 = require("./194871.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function A(t, e) {
  let n = (0, l.bG)([d.A], () => d.A.isInstalled(t.id, t.branchId), [t.branchId, t.id]),
    A = (0, l.bG)([u.A], () => !u.A.hasRemovedLibraryApplicationThisSession);
  if (n && !t.isHidden()) return null;

  function f() {
    let e = (0, i.PQ)(t.getFlags(), s.hM6.HIDDEN);
    o.V(t.id, t.branchId, e), b.default.track(s.HAw.APPLICATION_SETTINGS_UPDATED, function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), r.forEach(function(e) {
          var r;
          r = n[e], e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = r
        })
      }
      return t
    }({
      hidden_enabled: (0, i.Lt)(e, s.hM6.HIDDEN)
    }, t.getAnalyticsData()))
  }
  return (0, r.jsx)(c.Drp, {
    id: "in-library",
    label: t.isHidden() ? p.intl.string(p.t["0dnEUJ"]) : p.intl.string(p.t.TuJXLx),
    action: function() {
      null != t && null != e && (t.isHidden() || !A ? f() : (0, a.A)({
        title: p.intl.string(p.t.oB7isi),
        subtitle: p.intl.format(p.t.HXfjKt, {
          name: e.name
        }),
        variant: "primary",
        confirmText: p.intl.string(p.t.OWjIiV),
        onConfirm: () => f()
      }))
    }
  })
}