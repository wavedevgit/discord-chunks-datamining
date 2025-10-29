/** Chunk was on 56710 **/
/** chunk id: 620304, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk667815 = require("./667815.js"),
  Chunk531572 = require("./531572.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk639777 = require("./639777.js"),
  Chunk495804 = require("./495804.js"),
  Chunk441536 = require("./441536.js"),
  Chunk459196 = require("./459196.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk931942 = require("./931942.js");

function j(e) {
  let {
    guild: t,
    withMargin: l
  } = e, j = (0, b.Z)(t), C = (0, m.Z)(t.id), E = i.useCallback(() => {
    (0, _.Z)(t.id, p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY)
  }, [t.id]), x = (0, c.e7)([h.Z], () => {
    var e;
    return null != (e = h.Z.getCountForGuild(t.id)) ? e : 0
  });
  i.useEffect(() => {
    x !== t.premiumSubscriberCount && (0, f.v)(t.id, t.premiumSubscriberCount)
  }, [t.id, x, t.premiumSubscriberCount]);
  let S = Math.min(x / j * 100, 100),
    [I, P] = (0, u.q_F)(() => ({
      width: x === t.premiumSubscriberCount ? "calc(".concat(S, "% - 4px)") : "0%",
      config: {
        tension: 250,
        damping: 5,
        mass: 1
      }
    }), "respect-motion-settings", [x, t.premiumSubscriberCount]);
  i.useEffect(() => {
    P({
      width: "calc(".concat(S, "% - 4px)")
    })
  }, [S, P]);
  let N = x >= j;
  return (0, r.jsx)(u.P3F, {
    "aria-label": true,
    role: "button",
    focusProps: {
      offset: {
        left: 10,
        right: 4
      }
    },
    onClick: () => {
      E()
    },
    className: o()(v.container, {
      [v.containerWithMargin]: l
    }),
    onContextMenu: e => {
      C && (0, d.jW)(e, async () => {
        let {
          default: e
        } = await n.e("8570").then(n.bind(n, 651138));
        return n => {
          var i, l;
          return (0, r.jsx)(e, (i = function(e) {
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
          }({}, n), l = l = {
            guild: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      })
    },
    children: (0, r.jsxs)("div", {
      className: v.contentContainer,
      children: [(0, r.jsx)("div", {
        className: v.progressContainer
      }), (0, r.jsx)(a.animated.div, {
        className: o()(v.progress, {
          [v.progressLow]: S <= 5
        }),
        style: I
      }), (0, r.jsxs)("div", {
        className: v.textContainer,
        children: [(0, r.jsxs)("div", {
          className: v.textContentContainer,
          children: [(0, r.jsx)(s.xvT, {
            className: v.text,
            variant: "text-xs/semibold",
            children: y.intl.string(O.default.NI6Ihe)
          }), t.premiumSubscriberCount >= j && (0, r.jsx)(s.xvT, {
            className: v.text,
            variant: "text-xs/semibold",
            children: "\uD83C\uDF89"
          })]
        }), (0, r.jsxs)("div", {
          className: v.textContentContainer,
          children: [(0, r.jsx)(s.xvT, {
            className: o()(v.text, v.boostCountText),
            variant: "text-xs/semibold",
            children: N ? y.intl.formatToPlainString(O.default["Ehpq+7"], {
              appliedBoostCount: x
            }) : y.intl.formatToPlainString(O.default["/rbPDs"], {
              appliedBoostCount: x,
              maxBoostCount: j
            })
          }), (0, r.jsx)(g.Z, {
            width: 12,
            height: 12,
            direction: g.Z.Directions.RIGHT,
            className: o()(v.text, v.boostCountText)
          })]
        })]
      })]
    })
  })
}

function C(e) {
  let {
    guild: t,
    withMargin: n
  } = e;
  return (0, r.jsx)(j, {
    guild: t,
    withMargin: n
  })
}