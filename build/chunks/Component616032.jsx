/** Chunk was on 11788 **/
/** chunk id: 616032, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk724757 = require("./724757.js"),
  Chunk213609 = require("./213609.js"),
  Chunk441358 = require("./441358.jsx"),
  Chunk426521 = require("./426521.jsx"),
  Chunk837284 = require("./837284.js");

function h(e) {
  let {
    initialized: t,
    items: n,
    loading: h,
    loadMore: f
  } = e, g = i.useRef(null), m = (0, s.Z)("for-you", g);
  (0, c.Z)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.NOTIFICATION_CENTER_LANDING,
    properties: {
      empty: 0 === n.length
    }
  }, {
    disableTrack: !t
  }, [t]);
  let b = () => {
    var e;
    let t = null == (e = g.current) ? true : e.getScrollerState();
    null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 1500 && f()
  };
  return t ? 0 === n.length ? (0, r.jsx)(u.v, {}) : (0, r.jsx)(o.bG, {
    navigator: m,
    children: (0, r.jsx)(o.SJ, {
      children: e => {
        var t, i, {
            ref: l
          } = e,
          o = function(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                l = Object.keys(e);
              for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
          }(e, ["ref"]);
        return (0, r.jsxs)(a.Den, (t = function(e) {
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
          className: p.container,
          ref: e => {
            var t;
            g.current = e, l.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
          }
        }, o), i = i = {
          onScroll: b,
          children: [(0, r.jsx)(d.U, {
            items: n
          }), h ? (0, r.jsx)(a.$jN, {
            className: p.spinner
          }) : null]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }), t))
      }
    })
  }) : (0, r.jsx)(a.$jN, {
    className: p.loadingPlaceholder
  })
}