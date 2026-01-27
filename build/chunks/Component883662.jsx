/** Chunk was on 51901 **/
/** chunk id: 883662, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f(e) {
  var t, n;
  let {
    partialRoot: f,
    target: p,
    defaultTarget: _,
    onPanelChange: y,
    sidebarFooter: m,
    emptyState: g,
    searchQuery: h,
    onSearchChange: O
  } = e, j = function(e, t) {
    if (null == e) return {};
    var n, r, o, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, n = Reflect.ownKeys(e); o < n.length; o++) r = n[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          a = Object.getOwnPropertyNames(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) r = n[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }(e, ["partialRoot", "target", "defaultTarget", "onPanelChange", "sidebarFooter", "emptyState", "searchQuery", "onSearchChange"]), [v, x] = o.useState(false), [S, C] = o.useState(1.4), P = o.useRef(null), w = (0, a.bG)([c.A], () => c.A.useReducedMotion), A = (0, a.bG)([s.A], () => s.A.isFocused());
  return o.useEffect(() => {
    let e = e => {
      let {
        intensity: t,
        duration: n
      } = e;
      !w && A && (x(true), C(null != t ? t : 1.4), clearTimeout(P.current), P.current = setTimeout(() => x(false), null != n ? n : 1e3))
    };
    return u._.subscribe(b.jej.SHAKE_SETTINGS_MODAL, e), () => {
      u._.unsubscribe(b.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(P.current)
    }
  }, [w, A]), (0, r.jsx)(i.bfh, {
    isShaking: v,
    intensity: S,
    children: (0, r.jsx)(l.N, (t = function(e) {
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
    }({}, j), n = n = {
      children: (0, r.jsx)(d.A, {
        onClose: j.onClose,
        partialRoot: f,
        target: p,
        defaultTarget: _,
        onPanelChange: y,
        emptyState: g,
        sidebarFooter: m,
        searchQuery: h,
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