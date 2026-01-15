/** Chunk was on web.js **/
/** chunk id: 606963, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk923928 = require("./923928.js"),
  Chunk503856 = require("./503856.js"),
  Chunk209590 = require("./209590.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function E(e) {
  let t, n;
  var {
    afk: a
  } = e, s = m(e, ["afk"]);
  let [c, u] = i.useState(false);
  return a ? (t = d.intl.string(d.t.Y40Jke), n = d.intl.string(d.t["5J4yGc"])) : (t = d.intl.string(d.t.FJSZVM), n = d.intl.string(d.t.etJjgW)), (0, r.jsx)(o.u_l, p({
    size: "md",
    title: t,
    subtitle: n,
    actions: [{
      text: d.intl.string(d.t.BddRzS),
      onClick: () => {
        s.onClose(), l.Z.clearSuppressWarning(c)
      },
      variant: "primary"
    }],
    actionBarInput: (0, r.jsx)(o.XZJ, {
      checked: c,
      onChange: e => u(e),
      label: d.intl.string(d.t["5E9SB9"]),
      labelType: "secondary"
    })
  }, s))
}
let b = () => {
  let e = i.useRef(null);

  function t() {
    null !== e.current && ((0, s.Mr3)(e.current), e.current = null)
  }
  let [o, l] = (0, a.Wu)([u.Z], () => [u.Z.shouldShowWarning(), u.Z.isAFKChannel()], []), d = i.useCallback(() => {
    e.current = (0, s.h7j)(e => (0, r.jsx)(E, p({
      afk: l
    }, e)))
  }, [l]), f = i.useCallback(() => {
    (0, s.ZDy)(async () => {
      let {
        default: e
      } = await n.e("41281").then(n.bind(n, 669732));
      return t => (0, r.jsx)(e, h(p({}, t), {
        showHideSuppressWarning: true
      }))
    }).then(t => {
      null != t && (e.current = t)
    })
  }, []);
  return i.useEffect(() => (o && (0, c.p)() ? f() : o ? d() : t(), () => {
    t()
  }), [o, d, f]), null
}