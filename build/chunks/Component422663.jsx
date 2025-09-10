/** Chunk was on 39159 **/
/** chunk id: 422663, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  VS: () => b,
  oh: () => j,
  ok: () => h
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
  Chunk985862 = require("./985862.js"),
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

function v(e) {
  let {
    onNext: n
  } = (0, d.aj)();
  return (0, i.jsx)(c.zxk, f({
    variant: "primary",
    text: g.intl.string(g.t["3PatS0"]),
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
    availableBoostCount: a
  } = (0, d.aj)(), l = (0, u.Z)(), o = l > 0 && a < l, s = l > 0 ? null != r ? g.intl.string(m.default["1fogMj"]) : o ? g.intl.string(m.default.MPNPJS) : g.intl.string(m.default.ShxV5e) : g.intl.string(g.t.K344S0);
  return (0, i.jsx)(c.zxk, f({
    variant: o || l > 0 ? "expressive" : "primary",
    text: s,
    onClick: n,
    icon: o || l > 0 ? c.$Eu : true,
    iconPosition: "start",
    loading: t
  }, e))
}

function j(e) {
  var n;
  let {
    stepAction: t
  } = (0, d.aj)(), r = null == t || null == (n = t.onNext) ? true : n.type;
  switch (r) {
    case "go-to-step":
      return (0, i.jsx)(v, f({}, e));
    case "save":
      return (0, i.jsx)(x, f({}, e));
    default:
      o()(null != r, "Invalid stepType ".concat(r))
  }
}

function b(e) {
  var n, t, r;
  let a, {
      onBack: l,
      stepAction: s
    } = (0, d.aj)(),
    u = null == s || null == (n = s.onBack) ? true : n.type;
  switch (u) {
    case "go-to-step":
      a = g.intl.string(g.t["13/7kZ"]);
      break;
    case "close":
      a = g.intl.string(g.t.cpT0Cg)
  }
  return o()(null != a, "Invalid stepType ".concat(u)), (0, i.jsx)(c.zxk, (t = f({}, e), r = r = {
    variant: "secondary",
    text: a,
    onClick: l,
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

function h(e) {
  let {
    step: n,
    className: t,
    children: r
  } = e, {
    footerNode: l,
    step: o
  } = (0, d.aj)();
  return null == l || o !== n ? null : s.createPortal((0, i.jsx)("div", {
    className: a()(p.footer, t),
    children: r
  }), l, n)
}