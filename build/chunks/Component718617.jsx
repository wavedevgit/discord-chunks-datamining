/** Chunk was on 69937 **/
/** chunk id: 718617, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk853590 = require("./853590.js"),
  Chunk872175 = require("./872175.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk714338 = require("./714338.js"),
  Chunk433355 = require("./433355.js"),
  Chunk189432 = require("./189432.js"),
  Chunk727381 = require("./727381.jsx"),
  Chunk313692 = require("./313692.jsx"),
  Chunk596443 = require("./596443.jsx"),
  Chunk50493 = require("./50493.js"),
  Chunk981631 = require("./981631.js");

function I(e, t) {
  return n => {
    if (0 === n) return "auto";
    let r = "forwards" === t.current,
      l = n > 0,
      i = false;
    return l && r && "left" === e && (i = true), l && !r && "right" === e && (i = true), !l && r && "right" === e && (i = true), l || r || "left" !== e || (i = true), i ? "calc(".concat(100 * Math.abs(n), "% + ").concat(Math.round(12 * Math.abs(n)), "px)") : "auto"
  }
}

function m(e) {
  var t;
  let {
    userId: n,
    guildId: m,
    onClose: h,
    analyticsLocation: N,
    className: O
  } = e, p = (0, s.e7)([d.ZP], () => d.ZP.getGuildSidebarState(m), [m]), R = null != (t = null == p ? true : p.details.modViewPanel) ? t : T.k.INFO, S = (0, c.Z)(n), C = null == R ? null : R === T.k.INFO ? "backwards" : "forwards", b = (0, a.Z)(C), {
    reducedMotion: D
  } = l.useContext(o.Sfi), L = l.useCallback(e => {
    null != p && (0, E.r)(m, n, p.baseChannelId, {
      modViewPanel: e
    })
  }, [p, m, n]), U = l.useMemo(() => ({
    [g.EkH.CLOSE_MODAL]: {
      binds: ["esc"],
      comboKeysBindGlobal: true,
      action: () => R === T.k.INFO ? h() : L(T.k.INFO)
    }
  }), [h, R, L]);
  l.useEffect(() => (u.Z.enable(), u.Z.enableTemp(U), () => u.Z.disableTemp()), [U]);
  let M = (0, o.Yzy)(R, {
    value: 0,
    from: {
      value: 1
    },
    enter: {
      value: 0
    },
    leave: {
      value: false
    }
  }, S !== n ? "animate-never" : "animate-always");
  return (0, r.jsx)(i.animated.div, {
    style: {
      position: "relative",
      height: "100%",
      flex: 1,
      overflow: "hidden"
    },
    children: M((e, t, l) => {
      var a, s, o;
      let {
        key: c
      } = l;
      return (0, r.jsx)(i.animated.div, {
        style: function(e) {
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
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          backfaceVisibility: "hidden",
          width: "100%",
          height: "100%"
        }, D.enabled ? {
          opacity: null == (a = e.value) ? true : a.to(e => 1 - Math.abs(e))
        } : {
          left: null == (s = e.value) ? true : s.to(I("left", b)),
          right: null == (o = e.value) ? true : o.to(I("right", b))
        }),
        children: function(e) {
          switch (e) {
            case T.k.INFO:
              return (0, r.jsx)(_.Z, {
                userId: n,
                guildId: m,
                onNavigate: L,
                className: O
              });
            case T.k.MESSAGE_HISTORY:
              return (0, r.jsx)(A.Z, {
                userId: n,
                guildId: m,
                onNavigate: () => L(T.k.INFO),
                className: O
              });
            case T.k.PERMISSIONS:
              return (0, r.jsx)(f.Z, {
                userId: n,
                guildId: m,
                onNavigate: () => L(T.k.INFO),
                className: O
              });
            default:
              return null
          }
        }(t)
      }, c)
    })
  })
}