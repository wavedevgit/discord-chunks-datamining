/** Chunk was on 1272 **/
/** chunk id: 467460, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => h,
  a: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk535278 = require("./535278.jsx"),
  Chunk246965 = require("./246965.jsx"),
  Chunk197155 = require("./197155.js"),
  Chunk476398 = require("./476398.js");
let d = e => {
    let {
      digit: t
    } = e;
    return (0, r.jsx)("div", {
      className: c.digit,
      children: (0, r.jsx)(l.Text, {
        variant: "text-xxs/semibold",
        color: "text-primary",
        children: t
      })
    })
  },
  p = e => {
    let {
      value: t
    } = e, n = t.toString().padStart(2, "0"), [i, l] = [n[0], n[1]];
    return (0, r.jsxs)("div", {
      className: c.timeUnit,
      children: [(0, r.jsx)(d, {
        digit: i
      }), (0, r.jsx)(d, {
        digit: l
      })]
    })
  },
  f = e => {
    let {
      countdown: t,
      tooltipText: n
    } = e, {
      days: a,
      hours: o,
      minutes: s,
      seconds: d
    } = t, f = a > 0 ? [a, o, s] : o > 0 ? [o, s, d] : [s, d];
    return (0, r.jsx)(i.u, {
      text: n,
      position: "right",
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)("img", {
          src: u,
          alt: "",
          className: c.gradientCircles
        }), (0, r.jsx)(l.Kqy, {
          gap: 0,
          direction: "horizontal",
          className: c.countdownContainer,
          children: f.map((e, t) => (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(p, {
              value: e
            }, t), t !== f.length - 1 && (0, r.jsx)("div", {
              className: c.delinator,
              children: ":"
            })]
          }))
        })]
      })
    })
  },
  h = e => {
    let {
      trialOffer: t,
      subscriptionTier: n
    } = e, i = new Date(t.expires_at), l = (0, a.Z)(i, 1e3);
    return null == l ? null : (0, r.jsx)(f, {
      countdown: l,
      tooltipText: (0, s.A)(n, l)
    })
  },
  g = e => {
    let {
      discountOffer: t
    } = e, n = new Date(t.expires_at), i = (0, a.Z)(n, 1e3);
    return null == i ? null : (0, r.jsx)(f, {
      countdown: i,
      tooltipText: (0, o.A)(i, Number(t.discount.amount))
    })
  }