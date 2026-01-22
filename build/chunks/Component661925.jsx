/** Chunk was on 90406 **/
/** chunk id: 661925, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk452357 = require("./452357.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk143021 = require("./143021.js");
let p = function(t) {
  let {
    onClose: e,
    transitionState: a
  } = t, p = (0, c.bG)([b.default], () => b.default.getCurrentUser()), [m, y] = l.useState(false), g = l.useCallback(() => (null == e || e(), Promise.resolve()), [e]), k = l.useCallback(() => {
    null == e || e(), (0, o.mMO)(async () => {
      let {
        default: t
      } = await n.e("83269").then(n.bind(n, 350116));
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
  }, [e]), v = l.useCallback(() => {
    null == e || e(), i()(null != p, "ResendEmailVerificationButton: currentUser cannot be undefined"), y(true), (0, u.S)(p).finally(() => y(false))
  }, [p, e]), h = l.useMemo(() => (null == p ? true : p.email) == null ? [{
    text: d.intl.string(d.t.ydw5nX),
    onClick: k,
    variant: "primary"
  }] : [{
    text: d.intl.string(d.t.Vm8akB),
    onClick: k,
    variant: "secondary"
  }, {
    text: d.intl.string(d.t.lm1UKt),
    onClick: v,
    variant: "primary",
    loading: m
  }], [p, k, v, m]);
  return (0, r.jsxs)(s.Modal, {
    title: d.intl.string(d.t.UZLrY1),
    transitionState: a,
    onClose: g,
    actions: h,
    children: [(0, r.jsx)("div", {
      className: f.p
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      className: f.i,
      children: d.intl.string(d.t["0LgOKH"])
    })]
  })
}