/** Chunk was on 1272 **/
/** chunk id: 467460, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => g,
  a: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk704215 = require("./704215.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk266454 = require("./266454.js"),
  Chunk533246 = require("./533246.js"),
  Chunk197155 = require("./197155.js"),
  Chunk476398 = require("./476398.js");
let p = e => {
    let {
      digit: t
    } = e;
    return (0, r.jsx)("div", {
      className: u.digit,
      children: (0, r.jsx)(a.Text, {
        variant: "text-xs/semibold",
        color: "text-primary",
        children: t
      })
    })
  },
  f = e => {
    let {
      value: t
    } = e, n = t.toString().padStart(2, "0"), [i, l] = [n[0], n[1]];
    return (0, r.jsxs)("div", {
      className: u.timeUnit,
      children: [(0, r.jsx)(p, {
        digit: i
      }), (0, r.jsx)(p, {
        digit: l
      })]
    })
  },
  h = e => {
    let {
      expiresAt: t,
      tooltipText: n
    } = e, {
      days: c,
      hours: p,
      minutes: h,
      seconds: g
    } = (0, o.Z)(Date.parse(t), 1e3), m = c > 0 ? [c, p, h] : p > 0 ? [p, h, g] : [h, g], _ = (0, s.zu)(i.z.NITRO_TAB_BADGE_OFFER_REMINDER);
    return (0, r.jsx)(l.u, {
      text: n,
      position: "right",
      children: (0, r.jsxs)("div", {
        children: [!_ && (0, r.jsx)("img", {
          src: d,
          alt: "",
          className: u.gradientCircles
        }), (0, r.jsx)(a.Kqy, {
          gap: 0,
          direction: "horizontal",
          className: u.countdownContainer,
          children: m.map((e, t) => (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(f, {
              value: e
            }, t), t !== m.length - 1 && (0, r.jsx)("div", {
              className: u.delinator,
              children: ":"
            })]
          }))
        })]
      })
    })
  },
  g = e => {
    let {
      trialOffer: t
    } = e, n = (0, c.YF)(t);
    return (0, r.jsx)(h, {
      expiresAt: t.expires_at,
      tooltipText: n
    })
  },
  m = e => {
    let {
      discountOffer: t
    } = e, n = (0, c.h$)(t);
    return (0, r.jsx)(h, {
      expiresAt: t.expires_at,
      tooltipText: n
    })
  }