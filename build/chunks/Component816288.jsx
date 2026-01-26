/** Chunk was on 97887 **/
/** chunk id: 816288, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk793574 = require("./793574.js"),
  Chunk230135 = require("./230135.js"),
  Chunk552836 = require("./552836.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk363487 = require("./363487.js"),
  Chunk267771 = require("./267771.js"),
  Chunk828162 = require("./828162.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk375395 = require("./375395.js");

function j(e) {
  let {
    guild: t,
    withMargin: i
  } = e, j = (0, b.A)(t), v = (0, m.A)(t.id), x = l.useCallback(() => {
    (0, A.A)(t.id, p.A.GUILD_BOOSTING_SIDEBAR_DISPLAY)
  }, [t.id]), E = (0, c.bG)([f.A], () => {
    var e;
    return null != (e = f.A.getCountForGuild(t.id)) ? e : 0
  });
  l.useEffect(() => {
    E !== t.premiumSubscriberCount && (0, h.u)(t.id, t.premiumSubscriberCount)
  }, [t.id, E, t.premiumSubscriberCount]);
  let C = Math.min(E / j * 100, 100),
    [S, I] = (0, u.zhh)(() => ({
      width: E === t.premiumSubscriberCount ? "calc(".concat(C, "% - 4px)") : "0%",
      config: {
        tension: 250,
        damping: 5,
        mass: 1
      }
    }), "respect-motion-settings", [E, t.premiumSubscriberCount]);
  l.useEffect(() => {
    I({
      width: "calc(".concat(C, "% - 4px)")
    })
  }, [C, I]);
  let N = E >= j;
  return (0, r.jsx)(u.DUT, {
    "aria-label": true,
    role: "button",
    focusProps: {
      offset: {
        left: 10,
        right: 4
      }
    },
    onClick: () => {
      x()
    },
    className: s()(O.kL, {
      [O.aF]: i
    }),
    onContextMenu: e => {
      v && (0, d.L3)(e, async () => {
        let {
          default: e
        } = await n.e("71728").then(n.bind(n, 709843));
        return n => {
          var l, i;
          return (0, r.jsx)(e, (l = function(e) {
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
          }({}, n), i = i = {
            guild: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
          }), l))
        }
      })
    },
    children: (0, r.jsxs)("div", {
      className: O.hQ,
      children: [(0, r.jsx)("div", {
        className: O.L$
      }), (0, r.jsx)(a.animated.div, {
        className: s()(O.qB, {
          [O.mu]: C <= 5
        }),
        style: S
      }), (0, r.jsxs)("div", {
        className: O.FS,
        children: [(0, r.jsxs)("div", {
          className: O.Ui,
          children: [(0, r.jsx)(o.EYj, {
            className: O.Qq,
            variant: "text-xs/semibold",
            children: _.intl.string(y.default.NI6Ihe)
          }), t.premiumSubscriberCount >= j && (0, r.jsx)(o.EYj, {
            className: O.Qq,
            variant: "text-xs/semibold",
            children: "\uD83C\uDF89"
          })]
        }), (0, r.jsxs)("div", {
          className: O.Ui,
          children: [(0, r.jsx)(o.EYj, {
            className: s()(O.Qq, O.ue),
            variant: "text-xs/semibold",
            children: N ? _.intl.formatToPlainString(y.default["Ehpq+7"], {
              appliedBoostCount: E
            }) : _.intl.formatToPlainString(y.default["/rbPDs"], {
              appliedBoostCount: E,
              maxBoostCount: j
            })
          }), (0, r.jsx)(g.A, {
            width: 12,
            height: 12,
            direction: g.A.Directions.RIGHT,
            className: s()(O.Qq, O.ue)
          })]
        })]
      })]
    })
  })
}

function v(e) {
  let {
    guild: t,
    withMargin: n
  } = e;
  return (0, r.jsx)(j, {
    guild: t,
    withMargin: n
  })
}