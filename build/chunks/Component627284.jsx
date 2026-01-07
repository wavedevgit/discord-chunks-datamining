/** Chunk was on web.js **/
/** chunk id: 627284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk923928 = require("./923928.js"),
  Chunk493773 = require("./493773.js"),
  Chunk594190 = require("./594190.js"),
  Chunk865066 = require("./865066.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function O(e) {
  var {
    currentGame: t
  } = e, n = b(e, ["currentGame"]);
  let [a, u] = i.useState(false);
  return (0, c.zq)(() => {
    a && l.Z.clearPTTAdminWarning()
  }), (0, r.jsx)(o.u_l, E({
    size: "md",
    title: h.intl.string(h.t.eotlXE),
    subtitle: h.intl.formatToPlainString(h.t.Lw6KXV, {
      game: null == t ? true : t.name
    }),
    actions: [{
      text: h.intl.string(h.t.psXQHP),
      onClick: () => {
        n.onClose(), window.open(_.Z.getArticleURL(m.BhN.PUSH_TO_TALK_ADMINISTRATOR_MODE), "_blank")
      }
    }],
    actionBarInput: (0, r.jsx)(s.Checkbox, {
      checked: a,
      onChange: e => u(e),
      label: h.intl.string(h.t["5E9SB9"]),
      labelType: "secondary"
    })
  }, n))
}

function v() {
  let [e, t] = (0, a.Wu)([u.ZP], () => [u.ZP.canShowAdminWarning, u.ZP.getVisibleGame()], []), n = (0, a.e7)([p.Z], () => p.Z.isConnected(), []), o = (0, a.e7)([f.Z], () => f.Z.getMode() === m.pM4.PUSH_TO_TALK, []), l = null != t && t.elevated && n && o && e, c = i.useRef(null);
  return i.useEffect(() => {
    if (!(0, d.s2)(u.ZP)) return l ? c.current = (0, s.h7j)(e => (0, r.jsx)(O, E({
      currentGame: t
    }, e))) : e(), () => {
      e()
    };

    function e() {
      null !== c.current && ((0, s.Mr3)(c.current), c.current = null)
    }
  }, [t, l]), null
}