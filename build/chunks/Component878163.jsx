/** Chunk was on web.js **/
/** chunk id: 878163, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk386406 = require("./386406.js"),
  Chunk964486 = require("./964486.js"),
  Chunk15285 = require("./15285.js"),
  Chunk942405 = require("./942405.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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

function y(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = b(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function O(e) {
  let {
    currentGame: t
  } = e, n = y(e, ["currentGame"]), [a, u] = i.useState(false);
  return (0, c.l0)(() => {
    a && l.A.clearPTTAdminWarning()
  }), (0, r.jsx)(s.aFV, E({
    size: "md",
    title: m.intl.string(m.t.eotlXE),
    subtitle: m.intl.formatToPlainString(m.t.Lw6KXV, {
      game: null == t ? true : t.name
    }),
    actions: [{
      text: m.intl.string(m.t.psXQHP),
      onClick: () => {
        n.onClose(), window.open(_.A.getArticleURL(h.MVz.PUSH_TO_TALK_ADMINISTRATOR_MODE), "_blank")
      }
    }],
    actionBarInput: (0, r.jsx)(o.Checkbox, {
      checked: a,
      onChange: e => u(e),
      label: m.intl.string(m.t["5E9SB9"]),
      labelType: "secondary"
    })
  }, n))
}

function v() {
  let [e, t] = (0, a.yK)([u.Ay], () => [u.Ay.canShowAdminWarning, u.Ay.getVisibleGame()], []), n = (0, a.bG)([p.A], () => p.A.isConnected(), []), s = (0, a.bG)([f.A], () => f.A.getMode() === h.TBI.PUSH_TO_TALK, []), l = null != t && t.elevated && n && s && e, c = i.useRef(null);
  return i.useEffect(() => {
    if (!(0, d.yA)(u.Ay)) return l ? c.current = (0, o.qfG)(e => (0, r.jsx)(O, E({
      currentGame: t
    }, e))) : e(), () => {
      e()
    };

    function e() {
      null !== c.current && ((0, o.OoC)(c.current), c.current = null)
    }
  }, [t, l]), null
}