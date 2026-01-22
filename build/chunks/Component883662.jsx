/** Chunk was on 48666 **/
/** chunk id: 883662, original params: e,t,r (module,exports,require) **/
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
  var t, r;
  let {
    partialRoot: y,
    target: d,
    defaultTarget: p,
    onPanelChange: g,
    sidebarFooter: O,
    emptyState: j,
    searchQuery: h,
    onSearchChange: m
  } = e, v = function(e, t) {
    if (null == e) return {};
    var r, n, l, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
      return o
    }
    if (o = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          o = Object.getOwnPropertyNames(e);
        for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
    return o
  }(e, ["partialRoot", "target", "defaultTarget", "onPanelChange", "sidebarFooter", "emptyState", "searchQuery", "onSearchChange"]), [x, S] = l.useState(false), [P, w] = l.useState(1.4), A = l.useRef(null), C = (0, o.bG)([i.A], () => i.A.useReducedMotion), E = (0, o.bG)([s.A], () => s.A.isFocused());
  return l.useEffect(() => {
    let e = e => {
      let {
        intensity: t,
        duration: r
      } = e;
      !C && E && (S(true), w(null != t ? t : 1.4), clearTimeout(A.current), A.current = setTimeout(() => S(false), null != r ? r : 1e3))
    };
    return u._.subscribe(b.jej.SHAKE_SETTINGS_MODAL, e), () => {
      u._.unsubscribe(b.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(A.current)
    }
  }, [C, E]), (0, n.jsx)(c.bfh, {
    isShaking: x,
    intensity: P,
    children: (0, n.jsx)(a.N, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, v), r = r = {
      children: (0, n.jsx)(f.A, {
        onClose: v.onClose,
        partialRoot: y,
        target: d,
        defaultTarget: p,
        onPanelChange: g,
        emptyState: j,
        sidebarFooter: O,
        searchQuery: h,
        onSearchChange: m
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))
  })
}