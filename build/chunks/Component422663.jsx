/** Chunk was on 39159 **/
/** chunk id: 422663, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  VS: () => b,
  oh: () => v,
  ok: () => j
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk603113 = require("./603113.js"),
  Chunk481060 = require("./481060.js"),
  Chunk183369 = require("./183369.jsx"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk946410 = require("./946410.js");

function f(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = r
    })
  }
  return e
}

function p(e) {
  let {
    onNext: n
  } = (0, d.aj)();
  return (0, r.jsx)(c.zxk, f({
    variant: "primary",
    text: m.intl.string(m.t["3PatS0"]),
    onClick: n,
    icon: c.ZSh,
    iconPosition: "end"
  }, e))
}

function x(e) {
  let {
    onNext: n,
    stepLoading: t,
    portkeyInstance: i,
    availableBoostCount: a,
    planCost: l
  } = (0, d.aj)(), o = l > 0 && a < l, s = l > 0 ? null != i ? m.intl.string(u.default["1fogMj"]) : o ? m.intl.string(u.default.MPNPJS) : m.intl.string(u.default.ShxV5e) : m.intl.string(m.t.K344S0);
  return (0, r.jsx)(c.zxk, f({
    variant: o || l > 0 ? "expressive" : "primary",
    text: s,
    onClick: n,
    icon: o || l > 0 ? c.$Eu : true,
    iconPosition: "start",
    loading: t
  }, e))
}

function v(e) {
  var n;
  let {
    stepAction: t
  } = (0, d.aj)(), i = null == t || null == (n = t.onNext) ? true : n.type;
  switch (i) {
    case "go-to-step":
      return (0, r.jsx)(p, f({}, e));
    case "save":
      return (0, r.jsx)(x, f({}, e));
    default:
      o()(null != i, "Invalid stepType ".concat(i))
  }
}

function b(e) {
  var n, t, i;
  let a, {
      onBack: l,
      stepAction: s
    } = (0, d.aj)(),
    u = null == s || null == (n = s.onBack) ? true : n.type;
  switch (u) {
    case "go-to-step":
      a = m.intl.string(m.t["13/7kZ"]);
      break;
    case "close":
      a = m.intl.string(m.t.cpT0Cg)
  }
  return o()(null != a, "Invalid stepType ".concat(u)), (0, r.jsx)(c.zxk, (t = f({}, e), i = i = {
    variant: "secondary",
    text: a,
    onClick: l,
    icon: "go-to-step" === u ? c.whL : true,
    iconPosition: "start"
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(i)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
  }), t))
}

function j(e) {
  let {
    step: n,
    className: t,
    children: i
  } = e, {
    footerNode: l,
    step: o
  } = (0, d.aj)();
  return null == l || o !== n ? null : s.createPortal((0, r.jsx)("div", {
    className: a()(g.footer, t),
    children: i
  }), l, n)
}