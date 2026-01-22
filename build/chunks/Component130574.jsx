/** Chunk was on 38435 **/
/** chunk id: 130574, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk360469 = require("./360469.js"),
  Chunk985018 = require("./985018.jsx");

function s(t) {
  let {
    application: e,
    onCancel: n,
    onClose: s,
    onConfirm: c
  } = t, p = function(t, e) {
    if (null == t) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(t); i < n.length; i++) r = n[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (l[r] = t[r]);
      return l
    }
    if (l = function(t, e) {
        if (null == t) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(t);
        for (r = 0; r < l.length; r++) n = l[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
        return i
      }(t, e), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) r = n[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (l[r] = t[r]);
    return l
  }(t, ["application", "onCancel", "onClose", "onConfirm"]);
  return (0, r.jsx)(i.Modal, {
    transitionState: p.transitionState,
    onClose: s,
    title: a.intl.string(a.t["06YebE"]),
    actions: [{
      text: a.intl.string(a.t["ETE/oC"]),
      onClick: () => {
        n(), s()
      },
      variant: "secondary"
    }, {
      text: a.intl.string(a.t["3PatSz"]),
      onClick: () => {
        c(), s()
      },
      variant: "primary"
    }],
    children: (0, r.jsxs)(l.BJc, {
      children: [(0, r.jsxs)(l.Text, {
        variant: "text-sm/normal",
        children: [a.intl.format(a.t["s+WDGz"], {
          activityName: e.name
        }), " "]
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: (0, r.jsx)(l.MzZ, {
          href: o.i6,
          children: a.intl.string(a.t.E0gf5l)
        })
      })]
    })
  })
}