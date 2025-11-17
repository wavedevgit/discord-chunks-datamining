/** Chunk was on 64767 **/
/** chunk id: 507155, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk762762 = require("./762762.js"),
  Chunk973772 = require("./973772.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk795338 = require("./795338.jsx"),
  Chunk880419 = require("./880419.jsx"),
  Chunk279604 = require("./279604.jsx"),
  Chunk787188 = require("./787188.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk397321 = require("./397321.js");

function x(e) {
  let {
    canUseBoosts: t,
    guildId: r,
    powerup: a
  } = e, [x, b] = o.useState(false), g = (0, c.ZP)(r, a), O = (0, v._)(a, g, false), y = (0, c.UP)(g), {
    disabled: C
  } = (0, l.Z)(r, a, y), {
    onActivate: h
  } = (0, f.ZP)(r, a), P = !t || C, k = y && !P, _ = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: i()(j.perkCardImage, {
        [j.active]: y
      }),
      children: (0, n.jsx)(u.m, {
        powerup: a,
        isHovering: !P && x
      })
    }), (0, n.jsxs)("div", {
      className: j.footerContainer,
      children: [(0, n.jsxs)("div", {
        className: j.footerDetails,
        children: [(0, n.jsx)("div", {
          children: (0, n.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: (y || x) && !P ? "text-primary" : "text-secondary",
            children: a.description
          })
        }), (0, n.jsxs)("div", {
          children: [(null == O ? true : O.type) === "expiring" && (0, n.jsx)(d.rL, {
            dateString: O.expiringAt
          }), (null == O ? true : O.type) === "removing" && (0, n.jsx)(d.c, {
            removingAt: O.removingAt
          }), (null == O ? true : O.type) === "active" && (0, n.jsx)(d.P2, {
            text: O.statusText
          }), null == O && (0, n.jsxs)("div", {
            className: j.statusContainer,
            children: [(0, n.jsx)(s.Ucv, {
              size: "sm",
              color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
            }), (0, n.jsx)(s.Text, {
              variant: "text-sm/medium",
              color: "text-secondary",
              children: m.intl.formatToPlainString(m.t.t2Wbo1, {
                required: a.cost,
                decorator: ""
              })
            })]
          })]
        })]
      }), k && (0, n.jsx)(p.Z, {
        compact: true,
        iconSize: "md",
        guildId: r,
        powerup: a,
        className: j.toggleButton
      })]
    })]
  });
  return y ? (0, n.jsx)("div", {
    className: i()(j.perkCard, j.activeCard, {
      [j.disabled]: P
    }),
    onMouseEnter: () => b(true),
    onMouseLeave: () => b(false),
    children: _
  }) : (0, n.jsx)(s.P3F, {
    className: i()(j.perkCard, {
      [j.disabled]: P
    }),
    onMouseEnter: () => b(true),
    onMouseLeave: () => b(false),
    "aria-disabled": P,
    onClick: e => {
      e.stopPropagation(), P || null == h || h(e, {
        shouldCloseAllModals: false
      })
    },
    children: _
  })
}