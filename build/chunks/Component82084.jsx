/** Chunk was on 91968 **/
/** chunk id: 82084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk352065 = require("./352065.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk451478 = require("./451478.js"),
  Chunk585483 = require("./585483.js"),
  Chunk79808 = require("./79808.jsx"),
  Chunk981631 = require("./981631.js");

function b(e) {
  var t, n, {
      partialRoot: b,
      target: y,
      defaultTarget: p,
      onPanelChange: g,
      sidebarFooter: O,
      emptyState: m,
      searchQuery: j,
      onSearchChange: v
    } = e,
    h = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["partialRoot", "target", "defaultTarget", "onPanelChange", "sidebarFooter", "emptyState", "searchQuery", "onSearchChange"]);
  let [x, S] = o.useState(false), [P, C] = o.useState(1.4), w = o.useRef(null), T = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), k = (0, a.e7)([s.Z], () => s.Z.isFocused());
  return o.useEffect(() => {
    let e = e => {
      let {
        intensity: t,
        duration: n
      } = e;
      !T && k && (S(true), C(null != t ? t : 1.4), clearTimeout(w.current), w.current = setTimeout(() => S(false), null != n ? n : 1e3))
    };
    return u.S.subscribe(d.CkL.SHAKE_SETTINGS_MODAL, e), () => {
      u.S.unsubscribe(d.CkL.SHAKE_SETTINGS_MODAL, e), clearTimeout(w.current)
    }
  }, [T, k]), (0, r.jsx)(l.UkV, {
    isShaking: x,
    intensity: P,
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
    }({}, h), n = n = {
      children: (0, r.jsx)(f.Z, {
        onClose: h.onClose,
        partialRoot: b,
        target: y,
        defaultTarget: p,
        onPanelChange: g,
        emptyState: m,
        sidebarFooter: O,
        searchQuery: j,
        onSearchChange: v
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