/** Chunk was on 82477 **/
/** chunk id: 620304, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
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
  Chunk44542 = require("./44542.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk915241 = require("./915241.js");

function C(e) {
  let {
    guild: t,
    withMargin: l
  } = e, C = (0, m.Z)(t), x = (0, b.Z)(t.id), E = i.useCallback(() => {
    (0, y.Z)(t.id, f.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY)
  }, [t.id]), S = (0, c.e7)([p.Z], () => {
    var e;
    return null != (e = p.Z.getCountForGuild(t.id)) ? e : 0
  });
  i.useEffect(() => {
    S !== t.premiumSubscriberCount && (0, h.v)(t.id, t.premiumSubscriberCount)
  }, [t.id, S, t.premiumSubscriberCount]);
  let I = Math.min(S / C * 100, 100),
    [_, P] = (0, u.q_F)(() => ({
      width: S === t.premiumSubscriberCount ? "calc(".concat(I, "% - 4px)") : "0%",
      config: {
        tension: 250,
        damping: 5,
        mass: 1
      }
    }), "respect-motion-settings", [S, t.premiumSubscriberCount]);
  i.useEffect(() => {
    P({
      width: "calc(".concat(I, "% - 4px)")
    })
  }, [I, P]);
  let N = S >= C;
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
    className: a()(j.container, {
      [j.containerWithMargin]: l
    }),
    onContextMenu: e => {
      x && (0, d.jW)(e, async () => {
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
      className: j.contentContainer,
      children: [(0, r.jsx)("div", {
        className: j.progressContainer
      }), (0, r.jsx)(o.animated.div, {
        className: a()(j.progress, {
          [j.progressLow]: I <= 5
        }),
        style: _
      }), (0, r.jsxs)("div", {
        className: j.textContainer,
        children: [(0, r.jsxs)("div", {
          className: j.textContentContainer,
          children: [(0, r.jsx)(s.xvT, {
            className: j.text,
            variant: "text-xs/semibold",
            children: v.intl.string(O.default.NI6Ihe)
          }), t.premiumSubscriberCount >= C && (0, r.jsx)(s.xvT, {
            className: j.text,
            variant: "text-xs/semibold",
            children: "\uD83C\uDF89"
          })]
        }), (0, r.jsxs)("div", {
          className: j.textContentContainer,
          children: [(0, r.jsx)(s.xvT, {
            className: a()(j.text, j.boostCountText),
            variant: "text-xs/semibold",
            children: N ? v.intl.formatToPlainString(O.default["Ehpq+7"], {
              appliedBoostCount: S
            }) : v.intl.formatToPlainString(O.default["/rbPDs"], {
              appliedBoostCount: S,
              maxBoostCount: C
            })
          }), (0, r.jsx)(g.Z, {
            width: 12,
            height: 12,
            direction: g.Z.Directions.RIGHT,
            className: a()(j.text, j.boostCountText)
          })]
        })]
      })]
    })
  })
}

function x(e) {
  let {
    guild: t,
    withMargin: n
  } = e;
  return (0, r.jsx)(C, {
    guild: t,
    withMargin: n
  })
}