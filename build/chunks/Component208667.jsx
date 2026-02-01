/** Chunk was on 42402 **/
/** chunk id: 208667, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk928039 = require("./928039.js"),
  Chunk139286 = require("./139286.js"),
  Chunk688895 = require("./688895.jsx"),
  Chunk456425 = require("./456425.jsx"),
  Chunk1347 = require("./1347.js");

function h(e) {
  let {
    initialized: t,
    items: n,
    loading: h,
    loadMore: g
  } = e, f = l.useRef(null), m = (0, o.A)("for-you", f);
  (0, c.A)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.NOTIFICATION_CENTER_LANDING,
    properties: {
      empty: 0 === n.length
    }
  }, {
    disableTrack: !t
  }, [t]);
  let b = () => {
    var e;
    let t = null == (e = f.current) ? true : e.getScrollerState();
    null == t || t.scrollHeight - t.scrollTop - t.offsetHeight < 1500 && g()
  };
  return t ? 0 === n.length ? (0, r.jsx)(u.H, {}) : (0, r.jsx)(s.hD, {
    navigator: m,
    children: (0, r.jsx)(s.PR, {
      children: e => {
        var t, l;
        let {
          ref: i
        } = e, s = function(e, t) {
          if (null == e) return {};
          var n, r, l, i = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
          }
          if (i = function(e, t) {
              if (null == e) return {};
              var n, r, l = {},
                i = Object.getOwnPropertyNames(e);
              for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
              return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
          return i
        }(e, ["ref"]);
        return (0, r.jsxs)(a.T7Y, (t = function(e) {
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
        }({
          className: p.kL,
          ref: e => {
            var t;
            f.current = e, i.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
          }
        }, s), l = l = {
          onScroll: b,
          children: [(0, r.jsx)(d.$, {
            items: n
          }), h ? (0, r.jsx)(a.y$y, {
            className: p.u1
          }) : null]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
        }), t))
      }
    })
  }) : (0, r.jsx)(a.y$y, {
    className: p.k$
  })
}