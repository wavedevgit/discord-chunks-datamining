/** Chunk was on 59024 **/
/** chunk id: 883662, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk521489 = require("./521489.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk531685 = require("./531685.js"),
  Chunk203982 = require("./203982.js"),
  Chunk418829 = require("./418829.jsx"),
  Chunk652215 = require("./652215.js");

function y(e) {
  var t, n;
  let {
    partialRoot: y,
    target: p,
    defaultTarget: f,
    onPanelChange: g,
    sidebarFooter: m,
    emptyState: h,
    searchQuery: j,
    onSearchChange: O
  } = e, v = function(e, t) {
    if (null == e) return {};
    var n, r, l, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
      return o
    }
    if (o = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          o = Object.getOwnPropertyNames(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
    return o
  }(e, ["partialRoot", "target", "defaultTarget", "onPanelChange", "sidebarFooter", "emptyState", "searchQuery", "onSearchChange"]), [_, x] = l.useState(false), [S, P] = l.useState(1.4), w = l.useRef(null), C = (0, o.bG)([c.A], () => c.A.useReducedMotion), A = (0, o.bG)([s.A], () => s.A.isFocused());
  return l.useEffect(() => {
    let e = e => {
      let {
        intensity: t,
        duration: n
      } = e;
      !C && A && (x(true), P(null != t ? t : 1.4), clearTimeout(w.current), w.current = setTimeout(() => x(false), null != n ? n : 1e3))
    };
    return u._.subscribe(b.jej.SHAKE_SETTINGS_MODAL, e), () => {
      u._.unsubscribe(b.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(w.current)
    }
  }, [C, A]), (0, r.jsx)(i.bfh, {
    isShaking: _,
    intensity: S,
    children: (0, r.jsx)(a.N, (t = function(e) {
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
    }({}, v), n = n = {
      children: (0, r.jsx)(d.A, {
        onClose: v.onClose,
        partialRoot: y,
        target: p,
        defaultTarget: f,
        onPanelChange: g,
        emptyState: h,
        sidebarFooter: m,
        searchQuery: j,
        onSearchChange: O
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