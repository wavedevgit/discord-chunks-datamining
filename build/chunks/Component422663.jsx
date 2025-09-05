/** Chunk was on 39159 **/
/** chunk id: 422663, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  VS: () => v,
  oh: () => g,
  ok: () => j
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk603113 = require("./603113.js"),
  Chunk481060 = require("./481060.js"),
  Chunk183369 = require("./183369.jsx"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk698339 = require("./698339.js");

function x(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      a = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), a.forEach(function(n) {
      var a;
      a = t[n], n in e ? Object.defineProperty(e, n, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = a
    })
  }
  return e
}

function g(e) {
  var n, t;
  let i, {
      onNext: r,
      stepAction: l,
      stepLoading: o
    } = (0, d.aj)(),
    p = null == l || null == (n = l.onNext) ? true : n.type;
  switch (p) {
    case "go-to-step":
      i = m.intl.string(m.t["3PatS0"]);
      break;
    case "purchase":
      i = m.intl.string(u.default.MPNPJS);
      break;
    case "save":
      i = m.intl.string(m.t.R3BPHx)
  }
  return s()(null != i, "Invalid stepType ".concat(p)), (0, a.jsx)(c.zxk, x({
    variant: "purchase" === p ? "expressive" : "primary",
    text: i,
    onClick: r,
    icon: (null == l || null == (t = l.onNext) ? true : t.type) === "go-to-step" ? c.ZSh : true,
    iconPosition: "end",
    loading: o
  }, e))
}

function v(e) {
  var n, t, i;
  let r, {
      onBack: l,
      stepAction: o
    } = (0, d.aj)(),
    u = null == o || null == (n = o.onBack) ? true : n.type;
  switch (u) {
    case "go-to-step":
      r = m.intl.string(m.t["13/7kZ"]);
      break;
    case "close":
      r = m.intl.string(m.t.cpT0Cg)
  }
  return s()(null != r, "Invalid stepType ".concat(u)), (0, a.jsx)(c.zxk, (t = x({}, e), i = i = {
    variant: "secondary",
    text: r,
    onClick: l,
    icon: "go-to-step" === u ? c.whL : true,
    iconPosition: "start"
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      t.push.apply(t, a)
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
    step: s
  } = (0, d.aj)();
  return null == l || s !== n ? null : o.createPortal((0, a.jsx)("div", {
    className: r()(p.footer, t),
    children: i
  }), l, n)
}