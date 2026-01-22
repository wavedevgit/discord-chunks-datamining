/** Chunk was on 91284 **/
/** chunk id: 548392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AI: () => _,
  N4: () => j,
  cp: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk340287 = require("./340287.js"),
  Chunk397927 = require("./397927.js"),
  Chunk27023 = require("./27023.jsx"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk227530 = require("./227530.js");

function f(e) {
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

function g(e) {
  let {
    onNext: t
  } = (0, d.bv)();
  return (0, l.jsx)(o.Button, f({
    variant: "primary",
    text: m.intl.string(m.t["3PatSz"]),
    onClick: t,
    icon: o.EdP,
    iconPosition: "end"
  }, e))
}

function b(e) {
  let {
    onNext: t,
    stepLoading: n,
    gameServerInstance: i,
    availableBoostCount: a,
    planCost: r
  } = (0, d.bv)(), s = r > 0 && a < r, u = r > 0 ? null != i ? m.intl.string(c.default.e3Q5Kz) : m.intl.string(c.default["cmSy/b"]) : m.intl.string(m.t.K344S7);
  return (0, l.jsx)(o.Button, f({
    variant: s || r > 0 ? "expressive" : "primary",
    text: u,
    onClick: t,
    icon: s || r > 0 ? o._Jp : true,
    iconPosition: "start",
    loading: n
  }, e))
}

function p(e) {
  var t;
  let {
    stepAction: n
  } = (0, d.bv)(), i = null == n || null == (t = n.onNext) ? true : t.type;
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
  var t, n, i;
  let a, {
      onBack: r,
      stepAction: u
    } = (0, d.bv)(),
    c = null == u || null == (t = u.onBack) ? true : t.type;
  switch (c) {
    case "go-to-step":
      a = m.intl.string(m.t["13/7kX"]);
      break;
    case "close":
      a = m.intl.string(m.t.cpT0Cq)
  }
  return s()(null != a, "Invalid stepType ".concat(c)), (0, l.jsx)(o.Button, (n = f({}, e), i = i = {
    variant: "secondary",
    text: a,
    onClick: r,
    icon: "go-to-step" === c ? o.rJJ : true,
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

function j(e) {
  let {
    step: t,
    className: n,
    children: i
  } = e, {
    footerNode: r,
    step: s
  } = (0, d.bv)();
  return null == r || s !== t ? null : u.createPortal((0, l.jsx)("div", {
    className: a()(v.q, n),
    children: i
  }), r, t)
}