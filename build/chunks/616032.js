/** Chunk was on 11814 (fd05d34d70cdbd56.js) **/
n.d(t, {
  Z: () => m
});
var r = n(200651),
  i = n(192379),
  a = n(990547),
  o = n(91192),
  l = n(481060),
  s = n(724757),
  c = n(213609),
  d = n(441358),
  u = n(426521),
  p = n(185343);

function m(e) {
  let {
    initialized: t,
    items: n,
    loading: m,
    loadMore: f
  } = e, h = i.useRef(null), g = (0, s.Z)("for-you", h);
  (0, c.Z)({
    type: a.ImpressionTypes.VIEW,
    name: a.ImpressionNames.NOTIFICATION_CENTER_LANDING,
    properties: {
      empty: 0 === n.length
    }
  }, {
    disableTrack: !t
  }, [t]);
  let _ = () => {
    var e;
    let t = null === (e = h.current) || void 0 === e ? void 0 : e.getScrollerState();
    null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 1500 && f()
  };
  return t ? 0 === n.length ? (0, r.jsx)(d.v, {}) : (0, r.jsx)(o.bG, {
    navigator: g,
    children: (0, r.jsx)(o.SJ, {
      children: e => {
        var t, i, {
            ref: a
          } = e,
          o = function(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
          }(e, ["ref"]);
        return (0, r.jsxs)(l.Den, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({
          className: p.container,
          ref: e => {
            var t;
            h.current = e, a.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
          }
        }, o), i = i = {
          onScroll: _,
          children: [(0, r.jsx)(u.U, {
            items: n
          }), m ? (0, r.jsx)(l.$jN, {
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
  }) : (0, r.jsx)(l.$jN, {
    className: p.loadingPlaceholder
  })
}