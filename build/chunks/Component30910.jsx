/** Chunk was on 67365 **/
/** chunk id: 30910, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  $b: () => p,
  c_: () => _,
  o2: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk24156 = require("./24156.js"),
  Chunk481060 = require("./481060.js"),
  Chunk343312 = require("./343312.jsx"),
  Chunk914820 = require("./914820.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk424106 = require("./424106.js");

function f(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function g(e) {
  let {
    onNext: n
  } = (0, c.JL)();
  return (0, l.jsx)(o.Button, f({
    variant: "primary",
    text: m.intl.string(m.t["3PatSz"]),
    onClick: n,
    icon: o.ZSh,
    iconPosition: "end"
  }, e))
}

function b(e) {
  let {
    onNext: n,
    stepLoading: t,
    gameServerInstance: i,
    availableBoostCount: a,
    planCost: r
  } = (0, c.JL)(), s = r > 0 && a < r, u = r > 0 ? null != i ? m.intl.string(d.default.e3Q5Kz) : m.intl.string(d.default["cmSy/b"]) : m.intl.string(m.t.K344S7);
  return (0, l.jsx)(o.Button, f({
    variant: s || r > 0 ? "expressive" : "primary",
    text: u,
    onClick: n,
    icon: s || r > 0 ? o.Ucv : true,
    iconPosition: "start",
    loading: t
  }, e))
}

function p(e) {
  var n;
  let {
    stepAction: t
  } = (0, c.JL)(), i = null == t || null == (n = t.onNext) ? true : n.type;
  switch (i) {
    case "go-to-step":
      return (0, l.jsx)(g, f({}, e));
    case "save":
      return (0, l.jsx)(b, f({}, e));
    default:
      s()(null != i, "Invalid stepType ".concat(i))
  }
}

function _(e) {
  var n, t, i;
  let a, {
      onBack: r,
      stepAction: u
    } = (0, c.JL)(),
    d = null == u || null == (n = u.onBack) ? true : n.type;
  switch (d) {
    case "go-to-step":
      a = m.intl.string(m.t["13/7kX"]);
      break;
    case "close":
      a = m.intl.string(m.t.cpT0Cq)
  }
  return s()(null != a, "Invalid stepType ".concat(d)), (0, l.jsx)(o.Button, (t = f({}, e), i = i = {
    variant: "secondary",
    text: a,
    onClick: r,
    icon: "go-to-step" === d ? o.whL : true,
    iconPosition: "start"
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
    }
    return t
  })(Object(i)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
  }), t))
}

function x(e) {
  let {
    step: n,
    className: t,
    children: i
  } = e, {
    footerNode: r,
    step: s
  } = (0, c.JL)();
  return null == r || s !== n ? null : u.createPortal((0, l.jsx)("div", {
    className: a()(v.footer, t),
    children: i
  }), r, n)
}