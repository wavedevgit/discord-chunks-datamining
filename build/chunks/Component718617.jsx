/** Chunk was on 7318 **/
/** chunk id: 718617, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk803948 = require("./803948.js"),
  Chunk442837 = require("./442837.js"),
  Chunk186325 = require("./186325.js"),
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

function B(A, e) {
  return t => {
    if (0 === t) return "auto";
    let n = "forwards" === e.current,
      r = t > 0,
      l = false;
    return r && n && "left" === A && (l = true), r && !n && "right" === A && (l = true), !r && n && "right" === A && (l = true), r || n || "left" !== A || (l = true), l ? "calc(".concat(100 * Math.abs(t), "% + ").concat(Math.round(12 * Math.abs(t)), "px)") : "auto"
  }
}

function w(A) {
  var e;
  let {
    userId: t,
    guildId: w,
    onClose: D,
    analyticsLocation: M,
    className: p
  } = A, I = (0, i.e7)([f.ZP], () => f.ZP.getGuildSidebarState(w), [w]), H = null != (e = null == I ? true : I.details.modViewPanel) ? e : E.k.INFO, b = (0, o.Z)(t), Q = null == H ? null : H === E.k.INFO ? "backwards" : "forwards", O = (0, c.Z)(Q), {
    reducedMotion: P
  } = r.useContext(s.S), V = r.useCallback(A => {
    null != I && (0, v.r)(w, t, I.baseChannelId, {
      modViewPanel: A
    })
  }, [I, w, t]), j = r.useMemo(() => ({
    [C.EkH.CLOSE_MODAL]: {
      binds: ["esc"],
      comboKeysBindGlobal: true,
      action: () => H === E.k.INFO ? D() : V(E.k.INFO)
    }
  }), [D, H, V]);
  r.useEffect(() => (g.Z.enable(), g.Z.enableTemp(j), () => g.Z.disableTemp()), [j]);
  let m = (0, a.Yzy)(H, {
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
  }, b !== t ? "animate-never" : "animate-always");
  return (0, n.jsx)(l.animated.div, {
    style: {
      position: "relative",
      height: "100%",
      flex: 1,
      overflow: "hidden"
    },
    children: m((A, e, r) => {
      var i, s, a;
      let {
        key: o
      } = r;
      return (0, n.jsx)(l.animated.div, {
        style: function(A) {
          for (var e = 1; e < arguments.length; e++) {
            var t = null != arguments[e] ? arguments[e] : {},
              n = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
              return Object.getOwnPropertyDescriptor(t, A).enumerable
            }))), n.forEach(function(e) {
              var n;
              n = t[e], e in A ? Object.defineProperty(A, e, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : A[e] = n
            })
          }
          return A
        }({
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          backfaceVisibility: "hidden",
          width: "100%",
          height: "100%"
        }, P.enabled ? {
          opacity: null == (i = A.value) ? true : i.to(A => 1 - Math.abs(A))
        } : {
          left: null == (s = A.value) ? true : s.to(B("left", O)),
          right: null == (a = A.value) ? true : a.to(B("right", O))
        }),
        children: function(A) {
          switch (A) {
            case E.k.INFO:
              return (0, n.jsx)(h.Z, {
                userId: t,
                guildId: w,
                onNavigate: V,
                className: p
              });
            case E.k.MESSAGE_HISTORY:
              return (0, n.jsx)(u.Z, {
                userId: t,
                guildId: w,
                onNavigate: () => V(E.k.INFO),
                className: p
              });
            case E.k.PERMISSIONS:
              return (0, n.jsx)(d.Z, {
                userId: t,
                guildId: w,
                onNavigate: () => V(E.k.INFO),
                className: p
              });
            default:
              return null
          }
        }(e)
      }, o)
    })
  })
}