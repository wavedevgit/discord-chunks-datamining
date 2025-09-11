/** Chunk was on 20303 **/
/** chunk id: 718617, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk938288 = require("./938288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk714338 = require("./714338.js"),
  Chunk237617 = require("./237617.js"),
  Chunk433355 = require("./433355.js"),
  Chunk189432 = require("./189432.js"),
  Chunk727381 = require("./727381.jsx"),
  Chunk313692 = require("./313692.jsx"),
  Chunk596443 = require("./596443.jsx"),
  Chunk50493 = require("./50493.js"),
  Chunk981631 = require("./981631.js");

function g(e, t) {
  return n => {
    if (0 === n) return "auto";
    let r = "forwards" === t.current,
      l = n > 0,
      i = false;
    return l && r && "left" === e && (i = true), l && !r && "right" === e && (i = true), !l && r && "right" === e && (i = true), l || r || "left" !== e || (i = true), i ? "calc(".concat(100 * Math.abs(n), "% + ").concat(Math.round(12 * Math.abs(n)), "px)") : "auto"
  }
}

function f(e) {
  var t;
  let {
    userId: n,
    guildId: f,
    onClose: h,
    analyticsLocation: N,
    className: O
  } = e, p = (0, a.e7)([d.ZP], () => d.ZP.getGuildSidebarState(f), [f]), R = null != (t = null == p ? true : p.details.modViewPanel) ? t : T.k.INFO, S = (0, o.Z)(n), C = null == R ? null : R === T.k.INFO ? "backwards" : "forwards", D = (0, c.Z)(C), {
    reducedMotion: L
  } = l.useContext(s.Sfi), b = l.useCallback(e => {
    null != p && (0, E.r)(f, n, p.baseChannelId, {
      modViewPanel: e
    })
  }, [p, f, n]), U = l.useMemo(() => ({
    [I.EkH.CLOSE_MODAL]: {
      binds: ["esc"],
      comboKeysBindGlobal: true,
      action: () => R === T.k.INFO ? h() : b(T.k.INFO)
    }
  }), [h, R, b]);
  l.useEffect(() => (u.Z.enable(), u.Z.enableTemp(U), () => u.Z.disableTemp()), [U]);
  let v = (0, s.Yzy)(R, {
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
    children: v((e, t, l) => {
      var a, s, o;
      let {
        key: u
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
        }, L.enabled ? {
          opacity: null == (a = e.value) ? true : a.to(e => 1 - Math.abs(e))
        } : {
          left: null == (s = e.value) ? true : s.to(g("left", D)),
          right: null == (o = e.value) ? true : o.to(g("right", D))
        }),
        children: function(e) {
          switch (e) {
            case T.k.INFO:
              return (0, r.jsx)(_.Z, {
                userId: n,
                guildId: f,
                onNavigate: b,
                className: O
              });
            case T.k.MESSAGE_HISTORY:
              return (0, r.jsx)(A.Z, {
                userId: n,
                guildId: f,
                onNavigate: () => b(T.k.INFO),
                className: O
              });
            case T.k.PERMISSIONS:
              return (0, r.jsx)(m.Z, {
                userId: n,
                guildId: f,
                onNavigate: () => b(T.k.INFO),
                className: O
              });
            default:
              return null
          }
        }(t)
      }, u)
    })
  })
}