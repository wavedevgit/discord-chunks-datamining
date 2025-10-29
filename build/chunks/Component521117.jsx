/** Chunk was on web.js **/
/** chunk id: 521117, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk273352 = require("./273352.jsx"),
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

function _(e) {
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

function p(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = () => {
    Chunk923928.Z.clearSuppressWarning()
  },
  g = () => {
    Chunk923928.Z.clearSuppressWarning(true)
  },
  E = () => {
    let e = Chunk647438.useRef(null);

    function t() {
      null !== module.current && ((0, Chunk481060.Mr3)(module.current), module.current = null)
    }
    let [l, f] = (0, Chunk442837.Wu)([Chunk209590.Z], () => [Chunk209590.Z.shouldShowWarning(), Chunk209590.Z.isAFKChannel()], []), p = Chunk647438.useCallback(() => {
      let t, n;
      f ? (t = Chunk388032.intl.string(Chunk388032.t.Y40Jke), n = Chunk388032.intl.string(Chunk388032.t["5J4yGc"])) : (t = Chunk388032.intl.string(Chunk388032.t.FJSZVM), n = Chunk388032.intl.string(Chunk388032.t.etJjgW)), module.current = (0, Chunk481060.h7j)(e => (0, r.jsx)(o.default, _({
        title: t,
        body: n,
        onConfirm: m,
        confirmText: d.intl.string(d.t.BddRzS),
        secondaryConfirmText: d.intl.string(d.t["5E9SB9"]),
        onConfirmSecondary: g
      }, e)))
    }, [f]), E = Chunk647438.useCallback(() => {
      (0, Chunk481060.ZDy)(async () => {
        let {
          default: e
        } = await require.e("41281").then(require.bind(require, 669732));
        return t => (0, r.jsx)(e, h(_({}, t), {
          showHideSuppressWarning: true
        }))
      }).then(t => {
        null != t && (e.current = t)
      })
    }, []);
    return Chunk647438.useEffect(() => (Chunk923928 && (0, Chunk503856.p)() ? E() : Chunk923928 ? p() : exports(), () => {
      exports()
    }), [Chunk923928, p, E]), null
  }