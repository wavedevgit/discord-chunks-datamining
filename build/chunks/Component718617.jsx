/** Chunk was on 66201 **/
/** chunk id: 718617, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk786920 = require("./786920.js"),
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

function N(e) {
  var t;
  let {
    userId: n,
    guildId: N,
    onClose: O,
    analyticsLocation: h,
    className: f
  } = e, R = (0, s.e7)([E.ZP], () => E.ZP.getGuildSidebarState(N), [N]), S = null != (t = null == R ? true : R.details.modViewPanel) ? t : I.k.INFO, p = (0, o.Z)(n), C = null == S ? null : S === I.k.INFO ? "backwards" : "forwards", D = (0, c.Z)(C), {
    reducedMotion: L
  } = l.useContext(a.Sfi), U = l.useCallback(e => {
    null != R && (0, d.r)(N, n, R.baseChannelId, {
      modViewPanel: e
    })
  }, [R, N, n]), M = l.useMemo(() => ({
    [m.EkH.CLOSE_MODAL]: {
      binds: ["esc"],
      comboKeysBindGlobal: true,
      action: () => S === I.k.INFO ? O() : U(I.k.INFO)
    }
  }), [O, S, U]);
  l.useEffect(() => (u.Z.enable(), u.Z.enableTemp(M), () => u.Z.disableTemp()), [M]);
  let b = (0, a.Yzy)(S, {
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
  }, p !== n ? "animate-never" : "animate-always");
  return (0, r.jsx)(i.animated.div, {
    style: {
      position: "relative",
      height: "100%",
      flex: 1,
      overflow: "hidden"
    },
    children: b((e, t, l) => {
      var s, a, o;
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
          opacity: null == (s = e.value) ? true : s.to(e => 1 - Math.abs(e))
        } : {
          left: null == (a = e.value) ? true : a.to(g("left", D)),
          right: null == (o = e.value) ? true : o.to(g("right", D))
        }),
        children: function(e) {
          switch (e) {
            case I.k.INFO:
              return (0, r.jsx)(_.Z, {
                userId: n,
                guildId: N,
                onNavigate: U,
                className: f
              });
            case I.k.MESSAGE_HISTORY:
              return (0, r.jsx)(A.Z, {
                userId: n,
                guildId: N,
                onNavigate: () => U(I.k.INFO),
                className: f
              });
            case I.k.PERMISSIONS:
              return (0, r.jsx)(T.Z, {
                userId: n,
                guildId: N,
                onNavigate: () => U(I.k.INFO),
                className: f
              });
            default:
              return null
          }
        }(t)
      }, u)
    })
  })
}