/** Chunk was on 56065 **/
/** chunk id: 539085, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function v(e) {
  let {
    canUseBoosts: t,
    guildId: r,
    powerup: s
  } = e, [v, O] = o.useState(false), y = (0, c.Ay)(r, s), g = (0, d.e)(s, y, false), h = (0, c.dy)(y), {
    disabled: w
  } = (0, l.A)(r, s, h), {
    onActivate: _,
    error: I
  } = (0, x.A)(r, s);
  (0, j.A)(I);
  let P = !t || w,
    A = h && !P,
    C = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: a()(b._W, {
          [b.vu]: h
        }),
        children: (0, n.jsx)(p.l, {
          powerup: s,
          isHovering: !P && v
        })
      }), (0, n.jsxs)("div", {
        className: b.xQ,
        children: [(0, n.jsxs)("div", {
          className: b.U7,
          children: [(0, n.jsx)("div", {
            children: (0, n.jsx)(i.Text, {
              variant: "text-sm/medium",
              color: (h || v) && !P ? "text-strong" : "text-subtle",
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
              className: b.II,
              children: [(0, n.jsx)(i._Jp, {
                size: "sm",
                color: i.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK
              }), (0, n.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: m.intl.formatToPlainString(m.t.t2Wbo1, {
                  required: s.cost,
                  decorator: ""
                })
              })]
            })]
          })]
        }), A && (0, n.jsx)(f.A, {
          compact: true,
          iconSize: "md",
          guildId: r,
          powerup: s,
          className: b.Rm
        })]
      })]
    });
  return h ? (0, n.jsx)("div", {
    className: a()(b.nK, b.RO, {
      [b.r9]: P
    }),
    onMouseEnter: () => O(true),
    onMouseLeave: () => O(false),
    children: C
  }) : (0, n.jsx)(i.DUT, {
    className: a()(b.nK, {
      [b.r9]: P
    }),
    onMouseEnter: () => O(true),
    onMouseLeave: () => O(false),
    "aria-disabled": P,
    onClick: e => {
      e.stopPropagation(), P || null == _ || _({
        shouldCloseAllModals: false
      })
    },
    children: C
  })
}