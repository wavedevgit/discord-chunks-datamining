/** Chunk was on 64767 **/
/** chunk id: 507155, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function b(e) {
  let {
    canUseBoosts: t,
    guildId: r,
    powerup: a
  } = e, [b, m] = o.useState(false), O = (0, c.ZP)(r, a), g = (0, v._)(a, O, false), y = (0, c.UP)(O), {
    disabled: C
  } = (0, l.Z)(r, a, y), {
    onShowDeactivate: h,
    onActivate: P
  } = (0, f.ZP)(r, a), k = !t || C, w = y && !k, _ = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: i()(x.perkCardImage, {
        [x.active]: y
      }),
      children: (0, n.jsx)(u.m, {
        powerup: a,
        isHovering: !k && b
      })
    }), (0, n.jsxs)("div", {
      className: x.footerContainer,
      children: [(0, n.jsxs)("div", {
        className: x.footerDetails,
        children: [(0, n.jsx)("div", {
          children: (0, n.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: (y || b) && !k ? "text-primary" : "text-secondary",
            children: a.description
          })
        }), (0, n.jsxs)("div", {
          children: [(null == g ? true : g.type) === "expiring" && (0, n.jsx)(d.rL, {
            dateString: g.expiringAt
          }), (null == g ? true : g.type) === "removing" && (0, n.jsx)(d.c, {
            removingAt: g.removingAt
          }), (null == g ? true : g.type) === "active" && (0, n.jsx)(d.P2, {
            text: g.statusText
          }), null == g && (0, n.jsxs)("div", {
            className: x.statusContainer,
            children: [(0, n.jsx)(s.$Eu, {
              size: "sm",
              color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
            }), (0, n.jsx)(s.Text, {
              variant: "text-sm/medium",
              color: "text-secondary",
              children: j.intl.formatToPlainString(j.t.t2Wbo6, {
                required: a.cost,
                decorator: ""
              })
            })]
          })]
        })]
      }), w && (0, n.jsx)(p.Z, {
        guildId: r,
        powerup: a,
        onClick: h
      })]
    })]
  });
  return y ? (0, n.jsx)("div", {
    className: i()(x.perkCard, x.activeCard, {
      [x.disabled]: k
    }),
    onMouseEnter: () => m(true),
    onMouseLeave: () => m(false),
    children: _
  }) : (0, n.jsx)(s.P3F, {
    className: i()(x.perkCard, {
      [x.disabled]: k
    }),
    onMouseEnter: () => m(true),
    onMouseLeave: () => m(false),
    "aria-disabled": k,
    onClick: e => {
      e.stopPropagation(), k || null == P || P(e, {
        shouldCloseAllModals: false
      })
    },
    children: _
  })
}