/** Chunk was on 75685 **/
/** chunk id: 82084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk352065 = require("./352065.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk451478 = require("./451478.js"),
  Chunk585483 = require("./585483.js"),
  Chunk79808 = require("./79808.jsx"),
  Chunk981631 = require("./981631.js");

function m(e) {
  var t, n, {
      root: m,
      directory: b,
      target: j,
      onPanelChange: p,
      sidebarHeader: x,
      sidebarFooter: y,
      emptyState: v
    } = e,
    g = function(e, t) {
      if (null == e) return {};
      var n, r, l = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["root", "directory", "target", "onPanelChange", "sidebarHeader", "sidebarFooter", "emptyState"]);
  let [h, O] = l.useState(false), [C, _] = l.useState(1.4), S = l.useRef(null), P = (0, o.e7)([s.Z], () => s.Z.useReducedMotion), N = (0, o.e7)([c.Z], () => c.Z.isFocused());
  return l.useEffect(() => {
    let e = e => {
      let {
        intensity: t,
        duration: n
      } = e;
      !P && N && (O(true), _(null != t ? t : 1.4), clearTimeout(S.current), S.current = setTimeout(() => O(false), null != n ? n : 1e3))
    };
    return u.S.subscribe(f.CkL.SHAKE_SETTINGS_MODAL, e), () => {
      u.S.unsubscribe(f.CkL.SHAKE_SETTINGS_MODAL, e), clearTimeout(S.current)
    }
  }, [P, N]), (0, r.jsx)(a.UkV, {
    isShaking: h,
    intensity: C,
    children: (0, r.jsx)(i.A, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, g), n = n = {
      children: (0, r.jsx)(d.Z, {
        onClose: g.onClose,
        root: m,
        directory: b,
        target: j,
        onPanelChange: p,
        sidebarHeader: x,
        emptyState: v,
        sidebarFooter: y
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  })
}