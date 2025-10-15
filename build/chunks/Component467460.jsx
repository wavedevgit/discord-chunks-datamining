/** Chunk was on 1272 **/
/** chunk id: 467460, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => m,
  a: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk704215 = require("./704215.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk266454 = require("./266454.js"),
  Chunk535278 = require("./535278.jsx"),
  Chunk246965 = require("./246965.jsx"),
  Chunk197155 = require("./197155.js"),
  Chunk476398 = require("./476398.js");
let f = e => {
    let {
      digit: t
    } = e;
    return (0, r.jsx)("div", {
      className: d.digit,
      children: (0, r.jsx)(a.Text, {
        variant: "text-xxs/semibold",
        color: "text-primary",
        children: t
      })
    })
  },
  h = e => {
    let {
      value: t
    } = e, n = t.toString().padStart(2, "0"), [i, l] = [n[0], n[1]];
    return (0, r.jsxs)("div", {
      className: d.timeUnit,
      children: [(0, r.jsx)(f, {
        digit: i
      }), (0, r.jsx)(f, {
        digit: l
      })]
    })
  },
  g = e => {
    let {
      countdown: t,
      tooltipText: n
    } = e, {
      days: o,
      hours: c,
      minutes: u,
      seconds: f
    } = t, g = o > 0 ? [o, c, u] : c > 0 ? [c, u, f] : [u, f], m = (0, s.zu)(i.z.NITRO_TAB_BADGE_COUNTDOWN);
    return (0, r.jsx)(l.u, {
      text: n,
      position: "right",
      children: (0, r.jsxs)(a.P3F, {
        onClick: () => (0, s.Q3)(i.z.NITRO_TAB_BADGE_COUNTDOWN),
        children: [!m && (0, r.jsx)("img", {
          src: p,
          alt: "",
          className: d.gradientCircles
        }), (0, r.jsx)(a.Kqy, {
          gap: 0,
          direction: "horizontal",
          className: d.countdownContainer,
          children: g.map((e, t) => (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(h, {
              value: e
            }, t), t !== g.length - 1 && (0, r.jsx)("div", {
              className: d.delinator,
              children: ":"
            })]
          }))
        })]
      })
    })
  },
  m = e => {
    let {
      trialOffer: t,
      subscriptionTier: n
    } = e, i = new Date(t.expires_at), l = (0, o.Z)(i, 1e3);
    return null == l ? null : (0, r.jsx)(g, {
      countdown: l,
      tooltipText: (0, u.A)(n, l)
    })
  },
  b = e => {
    let {
      discountOffer: t
    } = e, n = new Date(t.expires_at), i = (0, o.Z)(n, 1e3);
    return null == i ? null : (0, r.jsx)(g, {
      countdown: i,
      tooltipText: (0, c.A)(i, Number(t.discount.amount))
    })
  }