/** Chunk was on 20102 **/
/** chunk id: 444688, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js"), require("./457542.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk418632 = require("./418632.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk97411 = require("./97411.js");
let b = function(e) {
  let {
    onClose: t,
    transitionState: l
  } = e, b = (0, o.e7)([d.default], () => d.default.getCurrentUser()), [p, g] = i.useState(false), y = i.useCallback(() => (null == t || t(), Promise.resolve()), [t]), h = i.useCallback(() => {
    null == t || t(), (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("9343"), n.e("84577")]).then(n.bind(n, 642298));
      return t => (0, r.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, t))
    })
  }, [t]), O = i.useCallback(() => {
    null == t || t(), a()(null != b, "ResendEmailVerificationButton: currentUser cannot be undefined"), g(true), (0, u.s)(b).finally(() => g(false))
  }, [b, t]), j = i.useMemo(() => (null == b ? true : b.email) == null ? [{
    text: f.intl.string(f.t.ydw5nZ),
    onClick: h,
    variant: "primary"
  }] : [{
    text: f.intl.string(f.t.Vm8akJ),
    onClick: h,
    variant: "secondary"
  }, {
    text: f.intl.string(f.t.lm1UKi),
    onClick: O,
    variant: "primary",
    loading: p
  }], [b, h, O, p]);
  return (0, r.jsxs)(s.Modal, {
    title: f.intl.string(f.t.UZLrY2),
    transitionState: l,
    onClose: y,
    actions: j,
    children: [(0, r.jsx)("div", {
      className: m.imageUnverified
    }), (0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      className: m.message,
      children: f.intl.string(f.t["0LgOKC"])
    })]
  })
}