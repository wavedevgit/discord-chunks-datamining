/** Chunk was on 38985 **/
/** chunk id: 295191, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk864605 = require("./864605.js"),
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

function I(e, t) {
  return n => {
    if (0 === n) return "auto";
    let l = "forwards" === t.current,
      r = n > 0,
      a = false;
    return r && l && "left" === e && (a = true), r && !l && "right" === e && (a = true), !r && l && "right" === e && (a = true), r || l || "left" !== e || (a = true), a ? "calc(".concat(100 * Math.abs(n), "% + ").concat(Math.round(12 * Math.abs(n)), "px)") : "auto"
  }
}

function O(e) {
  var t;
  let {
    userId: n,
    guildId: O,
    onClose: m,
    analyticsLocation: N,
    className: f
  } = e, p = (0, s.bG)([E.Ay], () => E.Ay.getGuildSidebarState(O), [O]), S = null != (t = null == p ? true : p.details.modViewPanel) ? t : T.g.INFO, G = (0, u.A)(n), R = null == S ? null : S === T.g.INFO ? "backwards" : "forwards", D = (0, i.A)(R), {
    reducedMotion: C
  } = r.useContext(o.CZY), L = r.useCallback(e => {
    null != p && (0, d.z)(O, n, p.baseChannelId, {
      modViewPanel: e
    })
  }, [p, O, n]), b = r.useMemo(() => ({
    [h.IWg.CLOSE_MODAL]: {
      binds: ["esc"],
      comboKeysBindGlobal: true,
      action: () => S === T.g.INFO ? m() : L(T.g.INFO)
    }
  }), [m, S, L]);
  r.useEffect(() => (c.A.enable(), c.A.enableTemp(b), () => c.A.disableTemp()), [b]);
  let x = (0, o.pnh)(S, {
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
  }, G !== n ? "animate-never" : "animate-always");
  return (0, l.jsx)(a.animated.div, {
    style: {
      position: "relative",
      height: "100%",
      flex: 1,
      overflow: "hidden"
    },
    children: x((e, t, r) => {
      var i, s, o;
      let {
        key: u
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
        }, C.enabled ? {
          opacity: null == (i = e.value) ? true : i.to(e => 1 - Math.abs(e))
        } : {
          left: null == (s = e.value) ? true : s.to(I("left", D)),
          right: null == (o = e.value) ? true : o.to(I("right", D))
        }),
        children: function(e) {
          switch (e) {
            case T.g.INFO:
              return (0, l.jsx)(_.A, {
                userId: n,
                guildId: O,
                onNavigate: L,
                className: f
              });
            case T.g.MESSAGE_HISTORY:
              return (0, l.jsx)(g.A, {
                userId: n,
                guildId: O,
                onNavigate: () => L(T.g.INFO),
                className: f
              });
            case T.g.PERMISSIONS:
              return (0, l.jsx)(A.A, {
                userId: n,
                guildId: O,
                onNavigate: () => L(T.g.INFO),
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