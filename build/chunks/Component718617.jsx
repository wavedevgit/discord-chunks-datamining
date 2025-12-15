/** Chunk was on 66201 **/
/** chunk id: 718617, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk236726 = require("./236726.js"),
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

function f(e, t) {
  return n => {
    if (0 === n) return "auto";
    let r = "forwards" === t.current,
      l = n > 0,
      i = false;
    return l && r && "left" === e && (i = true), l && !r && "right" === e && (i = true), !l && r && "right" === e && (i = true), l || r || "left" !== e || (i = true), i ? "calc(".concat(100 * Math.abs(n), "% + ").concat(Math.round(12 * Math.abs(n)), "px)") : "auto"
  }
}

function g(e) {
  var t;
  let {
    userId: n,
    guildId: g,
    onClose: N,
    analyticsLocation: h,
    className: O
  } = e, R = (0, s.e7)([E.ZP], () => E.ZP.getGuildSidebarState(g), [g]), S = null != (t = null == R ? true : R.details.modViewPanel) ? t : I.k.INFO, p = (0, u.Z)(n), C = null == S ? null : S === I.k.INFO ? "backwards" : "forwards", b = (0, a.Z)(C), {
    reducedMotion: D
  } = l.useContext(o.Sfi), U = l.useCallback(e => {
    null != R && (0, d.r)(g, n, R.baseChannelId, {
      modViewPanel: e
    })
  }, [R, g, n]), L = l.useMemo(() => ({
    [m.EkH.CLOSE_MODAL]: {
      binds: ["esc"],
      comboKeysBindGlobal: true,
      action: () => S === I.k.INFO ? N() : U(I.k.INFO)
    }
  }), [N, S, U]);
  l.useEffect(() => (c.Z.enable(), c.Z.enableTemp(L), () => c.Z.disableTemp()), [L]);
  let M = (0, o.Yzy)(S, {
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
    children: M((e, t, l) => {
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
        }, D.enabled ? {
          opacity: null == (a = e.value) ? true : a.to(e => 1 - Math.abs(e))
        } : {
          left: null == (s = e.value) ? true : s.to(f("left", b)),
          right: null == (o = e.value) ? true : o.to(f("right", b))
        }),
        children: function(e) {
          switch (e) {
            case I.k.INFO:
              return (0, r.jsx)(_.Z, {
                userId: n,
                guildId: g,
                onNavigate: U,
                className: O
              });
            case I.k.MESSAGE_HISTORY:
              return (0, r.jsx)(A.Z, {
                userId: n,
                guildId: g,
                onNavigate: () => U(I.k.INFO),
                className: O
              });
            case I.k.PERMISSIONS:
              return (0, r.jsx)(T.Z, {
                userId: n,
                guildId: g,
                onNavigate: () => U(I.k.INFO),
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