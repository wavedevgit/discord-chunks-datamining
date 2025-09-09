/** Chunk was on 39159 **/
/** chunk id: 422663, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  VS: () => f,
  oh: () => v,
  ok: () => b
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

function p(e) {
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

function v(e) {
  var n, t;
  let i, {
      onNext: a,
      stepAction: l,
      stepLoading: s
    } = (0, d.aj)(),
    g = null == l || null == (n = l.onNext) ? true : n.type;
  switch (g) {
    case "go-to-step":
      i = m.intl.string(m.t["3PatS0"]);
      break;
    case "purchase":
      i = m.intl.string(u.default.MPNPJS);
      break;
    case "save":
      i = m.intl.string(m.t.R3BPHx)
  }
  return o()(null != i, "Invalid stepType ".concat(g)), (0, r.jsx)(c.zxk, p({
    variant: "purchase" === g ? "expressive" : "primary",
    text: i,
    onClick: a,
    icon: (null == l || null == (t = l.onNext) ? true : t.type) === "go-to-step" ? c.ZSh : true,
    iconPosition: "end",
    loading: s
  }, e))
}

function f(e) {
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
  return o()(null != a, "Invalid stepType ".concat(u)), (0, r.jsx)(c.zxk, (t = p({}, e), i = i = {
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

function b(e) {
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