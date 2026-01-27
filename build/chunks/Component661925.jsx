/** Chunk was on 90406 **/
/** chunk id: 661925, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk452357 = require("./452357.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk143021 = require("./143021.js");
let m = function(t) {
  let {
    onClose: e,
    transitionState: l
  } = t, m = (0, s.bG)([d.default], () => d.default.getCurrentUser()), [g, y] = i.useState(false), p = i.useCallback(() => (null == e || e(), Promise.resolve()), [e]), v = i.useCallback(() => {
    null == e || e(), (0, u.mMO)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("83269"), n.e("17726")]).then(n.bind(n, 350116));
      return e => (0, r.jsx)(t, function(t) {
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
      }({}, e))
    })
  }, [e]), k = i.useCallback(() => {
    null == e || e(), a()(null != m, "ResendEmailVerificationButton: currentUser cannot be undefined"), y(true), (0, c.S)(m).finally(() => y(false))
  }, [m, e]), O = i.useMemo(() => (null == m ? true : m.email) == null ? [{
    text: f.intl.string(f.t.ydw5nX),
    onClick: v,
    variant: "primary"
  }] : [{
    text: f.intl.string(f.t.Vm8akB),
    onClick: v,
    variant: "secondary"
  }, {
    text: f.intl.string(f.t.lm1UKt),
    onClick: k,
    variant: "primary",
    loading: g
  }], [m, v, k, g]);
  return (0, r.jsxs)(o.Modal, {
    title: f.intl.string(f.t.UZLrY1),
    transitionState: l,
    onClose: p,
    actions: O,
    children: [(0, r.jsx)("div", {
      className: b.p
    }), (0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      className: b.i,
      children: f.intl.string(f.t["0LgOKH"])
    })]
  })
}