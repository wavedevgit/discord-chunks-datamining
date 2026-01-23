/** Chunk was on 65076 **/
/** chunk id: 883662, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function b(e) {
  var t, r;
  let {
    partialRoot: b,
    target: d,
    defaultTarget: p,
    onPanelChange: g,
    sidebarFooter: O,
    emptyState: j,
    searchQuery: m,
    onSearchChange: h
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
  }(e, ["partialRoot", "target", "defaultTarget", "onPanelChange", "sidebarFooter", "emptyState", "searchQuery", "onSearchChange"]), [x, S] = l.useState(false), [P, _] = l.useState(1.4), w = l.useRef(null), C = (0, o.bG)([c.A], () => c.A.useReducedMotion), A = (0, o.bG)([s.A], () => s.A.isFocused());
  return l.useEffect(() => {
    let e = e => {
      let {
        intensity: t,
        duration: r
      } = e;
      !C && A && (S(true), _(null != t ? t : 1.4), clearTimeout(w.current), w.current = setTimeout(() => S(false), null != r ? r : 1e3))
    };
    return u._.subscribe(f.jej.SHAKE_SETTINGS_MODAL, e), () => {
      u._.unsubscribe(f.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(w.current)
    }
  }, [C, A]), (0, n.jsx)(i.bfh, {
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
      children: (0, n.jsx)(y.A, {
        onClose: v.onClose,
        partialRoot: b,
        target: d,
        defaultTarget: p,
        onPanelChange: g,
        emptyState: j,
        sidebarFooter: O,
        searchQuery: m,
        onSearchChange: h
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