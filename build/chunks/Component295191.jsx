/** Chunk was on 94503 **/
/** chunk id: 295191, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk108531 = require("./108531.js"),
  Chunk66455 = require("./66455.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk475743 = require("./475743.js"),
  Chunk775121 = require("./775121.js"),
  Chunk761640 = require("./761640.js"),
  Chunk706752 = require("./706752.js"),
  Chunk290294 = require("./290294.jsx"),
  Chunk420775 = require("./420775.jsx"),
  Chunk684968 = require("./684968.jsx"),
  Chunk486974 = require("./486974.js"),
  Chunk652215 = require("./652215.js");

function h(e, t) {
  return n => {
    if (0 === n) return "auto";
    let l = "forwards" === t.current,
      r = n > 0,
      a = false;
    return r && l && "left" === e && (a = true), r && !l && "right" === e && (a = true), !r && l && "right" === e && (a = true), r || l || "left" !== e || (a = true), a ? "calc(".concat(100 * Math.abs(n), "% + ").concat(Math.round(12 * Math.abs(n)), "px)") : "auto"
  }
}

function I(e) {
  var t;
  let {
    userId: n,
    guildId: I,
    onClose: O,
    analyticsLocation: N,
    className: m
  } = e, S = (0, s.bG)([E.Ay], () => E.Ay.getGuildSidebarState(I), [I]), p = null != (t = null == S ? true : S.details.modViewPanel) ? t : T.g.INFO, b = (0, c.A)(n), G = null == p ? null : p === T.g.INFO ? "backwards" : "forwards", R = (0, i.A)(G), {
    reducedMotion: D
  } = r.useContext(o.CZY), L = r.useCallback(e => {
    null != S && (0, d.z)(I, n, S.baseChannelId, {
      modViewPanel: e
    })
  }, [S, I, n]), x = r.useMemo(() => ({
    [f.IWg.CLOSE_MODAL]: {
      binds: ["esc"],
      comboKeysBindGlobal: true,
      action: () => p === T.g.INFO ? O() : L(T.g.INFO)
    }
  }), [O, p, L]);
  r.useEffect(() => (u.A.enable(), u.A.enableTemp(x), () => u.A.disableTemp()), [x]);
  let C = (0, o.pnh)(p, {
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
  }, b !== n ? "animate-never" : "animate-always");
  return (0, l.jsx)(a.animated.div, {
    style: {
      position: "relative",
      height: "100%",
      flex: 1,
      overflow: "hidden"
    },
    children: C((e, t, r) => {
      var i, s, o;
      let {
        key: c
      } = r;
      return (0, l.jsx)(a.animated.div, {
        style: function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
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
          opacity: null == (i = e.value) ? true : i.to(e => 1 - Math.abs(e))
        } : {
          left: null == (s = e.value) ? true : s.to(h("left", R)),
          right: null == (o = e.value) ? true : o.to(h("right", R))
        }),
        children: function(e) {
          switch (e) {
            case T.g.INFO:
              return (0, l.jsx)(_.A, {
                userId: n,
                guildId: I,
                onNavigate: L,
                className: m
              });
            case T.g.MESSAGE_HISTORY:
              return (0, l.jsx)(g.A, {
                userId: n,
                guildId: I,
                onNavigate: () => L(T.g.INFO),
                className: m
              });
            case T.g.PERMISSIONS:
              return (0, l.jsx)(A.A, {
                userId: n,
                guildId: I,
                onNavigate: () => L(T.g.INFO),
                className: m
              });
            default:
              return null
          }
        }(t)
      }, c)
    })
  })
}