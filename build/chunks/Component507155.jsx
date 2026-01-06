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
  Chunk329134 = require("./329134.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk795338 = require("./795338.jsx"),
  Chunk880419 = require("./880419.jsx"),
  Chunk994234 = require("./994234.js"),
  Chunk192958 = require("./192958.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk599374 = require("./599374.js");

function x(e) {
  let {
    canUseBoosts: t,
    guildId: r,
    powerup: a
  } = e, [x, g] = o.useState(false), O = (0, d.ZP)(r, a), C = (0, c.P)(a, O, false), h = (0, d.UP)(O), {
    disabled: y
  } = (0, l.Z)(r, a, h), {
    onActivate: P,
    error: k
  } = (0, b.Z)(r, a);
  (0, v.Z)(k);
  let w = !t || y,
    I = h && !w,
    N = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: i()(m.perkCardImage, {
          [m.active]: h
        }),
        children: (0, n.jsx)(p.m, {
          powerup: a,
          isHovering: !w && x
        })
      }), (0, n.jsxs)("div", {
        className: m.footerContainer,
        children: [(0, n.jsxs)("div", {
          className: m.footerDetails,
          children: [(0, n.jsx)("div", {
            children: (0, n.jsx)(s.Text, {
              variant: "text-sm/medium",
              color: (h || x) && !w ? "text-strong" : "text-subtle",
              children: a.description
            })
          }), (0, n.jsxs)("div", {
            children: [(null == C ? true : C.type) === "expiring" && (0, n.jsx)(u.rL, {
              dateString: C.expiringAt
            }), (null == C ? true : C.type) === "removing" && (0, n.jsx)(u.c, {
              removingAt: C.removingAt
            }), (null == C ? true : C.type) === "active" && (0, n.jsx)(u.P2, {
              text: C.statusText
            }), null == C && (0, n.jsxs)("div", {
              className: m.statusContainer,
              children: [(0, n.jsx)(s.Ucv, {
                size: "sm",
                color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
              }), (0, n.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: j.intl.formatToPlainString(j.t.t2Wbo1, {
                  required: a.cost,
                  decorator: ""
                })
              })]
            })]
          })]
        }), I && (0, n.jsx)(f.Z, {
          compact: true,
          iconSize: "md",
          guildId: r,
          powerup: a,
          className: m.toggleButton
        })]
      })]
    });
  return h ? (0, n.jsx)("div", {
    className: i()(m.perkCard, m.activeCard, {
      [m.disabled]: w
    }),
    onMouseEnter: () => g(true),
    onMouseLeave: () => g(false),
    children: N
  }) : (0, n.jsx)(s.P3F, {
    className: i()(m.perkCard, {
      [m.disabled]: w
    }),
    onMouseEnter: () => g(true),
    onMouseLeave: () => g(false),
    "aria-disabled": w,
    onClick: e => {
      e.stopPropagation(), w || null == P || P({
        shouldCloseAllModals: false
      })
    },
    children: N
  })
}