/** Chunk was on 39159 **/
/** chunk id: 422663, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  VS: () => j,
  oh: () => v,
  ok: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = t[n], n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = i
    })
  }
  return e
}

function p(e) {
  let {
    onNext: n
  } = (0, d.aj)();
  return (0, i.jsx)(c.zxk, f({
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
    portkeyInstance: r,
    availableBoostCount: l,
    planCost: a
  } = (0, d.aj)(), o = a > 0 && l < a, s = a > 0 ? null != r ? m.intl.string(u.default["1fogMj"]) : o ? m.intl.string(u.default.MPNPJS) : m.intl.string(u.default.ShxV5e) : m.intl.string(m.t.K344S0);
  return (0, i.jsx)(c.zxk, f({
    variant: o || a > 0 ? "expressive" : "primary",
    text: s,
    onClick: n,
    icon: o || a > 0 ? c.$Eu : true,
    iconPosition: "start",
    loading: t
  }, e))
}

function v(e) {
  var n;
  let {
    stepAction: t
  } = (0, d.aj)(), r = null == t || null == (n = t.onNext) ? true : n.type;
  switch (r) {
    case "go-to-step":
      return (0, i.jsx)(p, f({}, e));
    case "save":
      return (0, i.jsx)(x, f({}, e));
    default:
      o()(null != r, "Invalid stepType ".concat(r))
  }
}

function j(e) {
  var n, t, r;
  let l, {
      onBack: a,
      stepAction: s
    } = (0, d.aj)(),
    u = null == s || null == (n = s.onBack) ? true : n.type;
  switch (u) {
    case "go-to-step":
      l = m.intl.string(m.t["13/7kZ"]);
      break;
    case "close":
      l = m.intl.string(m.t.cpT0Cg)
  }
  return o()(null != l, "Invalid stepType ".concat(u)), (0, i.jsx)(c.zxk, (t = f({}, e), r = r = {
    variant: "secondary",
    text: l,
    onClick: a,
    icon: "go-to-step" === u ? c.whL : true,
    iconPosition: "start"
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t.push.apply(t, i)
    }
    return t
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}

function b(e) {
  let {
    step: n,
    className: t,
    children: r
  } = e, {
    footerNode: a,
    step: o
  } = (0, d.aj)();
  return null == a || o !== n ? null : s.createPortal((0, i.jsx)("div", {
    className: l()(g.footer, t),
    children: r
  }), a, n)
}