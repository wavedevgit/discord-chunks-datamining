/** Chunk was on 56065 **/
/** chunk id: 539085, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  c = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk470934 = require("./470934.js"),
  Chunk998418 = require("./998418.js"),
  Chunk813847 = require("./813847.js"),
  Chunk890942 = require("./890942.jsx"),
  Chunk490557 = require("./490557.jsx"),
  Chunk439156 = require("./439156.jsx"),
  Chunk220628 = require("./220628.js"),
  Chunk867060 = require("./867060.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk235545 = require("./235545.js");

function O(e) {
  let {
    canUseBoosts: t,
    guildId: r,
    powerup: s
  } = e, [O, y] = o.useState(false), v = (0, a.Ay)(r, s), g = (0, d.e)(s, v, false), h = (0, a.dy)(v), {
    disabled: w
  } = (0, l.A)(r, s, h), {
    onActivate: P,
    error: I
  } = (0, x.A)(r, s);
  (0, f.A)(I);
  let _ = !t || w,
    A = h && !_,
    N = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: c()(m._W, {
          [m.vu]: h
        }),
        children: (0, n.jsx)(p.l, {
          powerup: s,
          isHovering: !_ && O
        })
      }), (0, n.jsxs)("div", {
        className: m.xQ,
        children: [(0, n.jsxs)("div", {
          className: m.U7,
          children: [(0, n.jsx)("div", {
            children: (0, n.jsx)(i.Text, {
              variant: "text-sm/medium",
              color: (h || O) && !_ ? "text-strong" : "text-subtle",
              children: s.description
            })
          }), (0, n.jsxs)("div", {
            children: [(null == g ? true : g.type) === "expiring" && (0, n.jsx)(u.P5, {
              dateString: g.expiringAt
            }), (null == g ? true : g.type) === "removing" && (0, n.jsx)(u.Yq, {
              removingAt: g.removingAt
            }), (null == g ? true : g.type) === "active" && (0, n.jsx)(u.TG, {
              text: g.statusText
            }), null == g && (0, n.jsxs)("div", {
              className: m.II,
              children: [(0, n.jsx)(i._Jp, {
                size: "sm",
                color: i.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK
              }), (0, n.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: j.intl.formatToPlainString(j.t.t2Wbo1, {
                  required: s.cost,
                  decorator: ""
                })
              })]
            })]
          })]
        }), A && (0, n.jsx)(b.A, {
          compact: true,
          iconSize: "md",
          guildId: r,
          powerup: s,
          className: m.Rm
        })]
      })]
    });
  return h ? (0, n.jsx)("div", {
    className: c()(m.nK, m.RO, {
      [m.r9]: _
    }),
    onMouseEnter: () => y(true),
    onMouseLeave: () => y(false),
    children: N
  }) : (0, n.jsx)(i.DUT, {
    className: c()(m.nK, {
      [m.r9]: _
    }),
    onMouseEnter: () => y(true),
    onMouseLeave: () => y(false),
    "aria-disabled": _,
    onClick: e => {
      e.stopPropagation(), _ || null == P || P({
        shouldCloseAllModals: false
      })
    },
    children: N
  })
}