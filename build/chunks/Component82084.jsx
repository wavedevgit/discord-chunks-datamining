/** Chunk was on 88569 **/
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
      root: b,
      directory: y,
      target: p,
      defaultTarget: g,
      onPanelChange: O,
      sidebarHeader: j,
      sidebarFooter: v,
      emptyState: m
    } = e,
    h = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["root", "directory", "target", "defaultTarget", "onPanelChange", "sidebarHeader", "sidebarFooter", "emptyState"]);
  let [x, S] = o.useState(false), [P, C] = o.useState(1.4), _ = o.useRef(null), w = (0, i.e7)([c.Z], () => c.Z.useReducedMotion), k = (0, i.e7)([s.Z], () => s.Z.isFocused());
  return o.useEffect(() => {
    let e = e => {
      let {
        intensity: t,
        duration: n
      } = e;
      !w && k && (S(true), C(null != t ? t : 1.4), clearTimeout(_.current), _.current = setTimeout(() => S(false), null != n ? n : 1e3))
    };
    return u.S.subscribe(f.CkL.SHAKE_SETTINGS_MODAL, e), () => {
      u.S.unsubscribe(f.CkL.SHAKE_SETTINGS_MODAL, e), clearTimeout(_.current)
    }
  }, [w, k]), (0, r.jsx)(a.UkV, {
    isShaking: x,
    intensity: P,
    children: (0, r.jsx)(l.A, (t = function(e) {
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
      children: (0, r.jsx)(d.Z, {
        onClose: h.onClose,
        root: b,
        directory: y,
        target: p,
        defaultTarget: g,
        onPanelChange: O,
        sidebarHeader: j,
        emptyState: m,
        sidebarFooter: v
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