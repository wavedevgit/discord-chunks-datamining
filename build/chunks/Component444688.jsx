/** Chunk was on 20102 **/
/** chunk id: 444688, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk418632 = require("./418632.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk28449 = require("./28449.js");
let g = function(e) {
  let {
    onClose: t,
    transitionState: a
  } = e, g = (0, o.e7)([d.default], () => d.default.getCurrentUser()), [b, p] = r.useState(false), v = r.useCallback(() => (null == t || t(), Promise.resolve()), [t]), y = r.useCallback(() => {
    null == t || t(), (0, u.ZDy)(async () => {
      let {
        default: e
      } = await n.e("9343").then(n.bind(n, 642298));
      return t => (0, i.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, t))
    })
  }, [t]), k = r.useCallback(() => {
    null == t || t(), l()(null != g, "ResendEmailVerificationButton: currentUser cannot be undefined"), p(true), (0, c.s)(g).finally(() => p(false))
  }, [g, t]), h = r.useMemo(() => (null == g ? true : g.email) == null ? [{
    text: f.intl.string(f.t.ydw5nX),
    onClick: y,
    variant: "primary"
  }] : [{
    text: f.intl.string(f.t.Vm8akB),
    onClick: y,
    variant: "secondary"
  }, {
    text: f.intl.string(f.t.lm1UKt),
    onClick: k,
    variant: "primary",
    loading: b
  }], [g, y, k, b]);
  return (0, i.jsxs)(s.Modal, {
    title: f.intl.string(f.t.UZLrY1),
    transitionState: a,
    onClose: v,
    actions: h,
    children: [(0, i.jsx)("div", {
      className: m.imageUnverified
    }), (0, i.jsx)(u.Text, {
      variant: "text-md/normal",
      className: m.message,
      children: f.intl.string(f.t["0LgOKH"])
    })]
  })
}