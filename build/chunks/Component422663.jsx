/** Chunk was on 60728 **/
/** chunk id: 422663, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  VS: () => p,
  oh: () => j,
  ok: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk603113 = require("./603113.js"),
  Chunk481060 = require("./481060.js"),
  Chunk183369 = require("./183369.jsx"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk698339 = require("./698339.js");

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function b(e) {
  let {
    onNext: t
  } = (0, u.aj)();
  return (0, l.jsx)(c.zxk, g({
    variant: "primary",
    text: m.intl.string(m.t["3PatS0"]),
    onClick: t,
    icon: c.ZSh,
    iconPosition: "end"
  }, e))
}

function f(e) {
  let {
    onNext: t,
    stepLoading: n,
    portkeyInstance: i,
    availableBoostCount: a,
    planCost: r
  } = (0, u.aj)(), s = r > 0 && a < r, o = r > 0 ? null != i ? m.intl.string(d.default["1fogMj"]) : s ? m.intl.string(d.default.MPNPJS) : m.intl.string(d.default.ShxV5e) : m.intl.string(m.t.K344S0);
  return (0, l.jsx)(c.zxk, g({
    variant: s || r > 0 ? "expressive" : "primary",
    text: o,
    onClick: t,
    icon: s || r > 0 ? c.$Eu : true,
    iconPosition: "start",
    loading: n
  }, e))
}

function j(e) {
  var t;
  let {
    stepAction: n
  } = (0, u.aj)(), i = null == n || null == (t = n.onNext) ? true : t.type;
  switch (i) {
    case "go-to-step":
      return (0, l.jsx)(b, g({}, e));
    case "save":
      return (0, l.jsx)(f, g({}, e));
    default:
      s()(null != i, "Invalid stepType ".concat(i))
  }
}

function p(e) {
  var t, n, i;
  let a, {
      onBack: r,
      stepAction: o
    } = (0, u.aj)(),
    d = null == o || null == (t = o.onBack) ? true : t.type;
  switch (d) {
    case "go-to-step":
      a = m.intl.string(m.t["13/7kZ"]);
      break;
    case "close":
      a = m.intl.string(m.t.cpT0Cg)
  }
  return s()(null != a, "Invalid stepType ".concat(d)), (0, l.jsx)(c.zxk, (n = g({}, e), i = i = {
    variant: "secondary",
    text: a,
    onClick: r,
    icon: "go-to-step" === d ? c.whL : true,
    iconPosition: "start"
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(i)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
  }), n))
}

function x(e) {
  let {
    step: t,
    className: n,
    children: i
  } = e, {
    footerNode: r,
    step: s
  } = (0, u.aj)();
  return null == r || s !== t ? null : o.createPortal((0, l.jsx)("div", {
    className: a()(v.footer, n),
    children: i
  }), r, t)
}