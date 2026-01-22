/** Chunk was on 21738 **/
/** chunk id: 965966, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => g,
  s: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk554146 = require("./554146.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk496431 = require("./496431.js"),
  Chunk826673 = require("./826673.js"),
  Chunk915516 = require("./915516.js"),
  Chunk907700 = require("./907700.js"),
  Chunk164960 = require("./164960.js");
let p = e => {
    let {
      digit: t
    } = e;
    return (0, r.jsx)("div", {
      className: u.U2,
      children: (0, r.jsx)(a.Text, {
        variant: "text-xs/semibold",
        color: "text-strong",
        children: t
      })
    })
  },
  f = e => {
    let {
      value: t
    } = e, n = t.toString().padStart(2, "0"), [i, l] = [n[0], n[1]];
    return (0, r.jsxs)("div", {
      className: u.Yk,
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
      seconds: A
    } = (0, s.A)(Date.parse(t), 1e3), g = c > 0 ? [c, p, h] : p > 0 ? [p, h, A] : [h, A], m = (0, o.k8)(i.M.NITRO_TAB_BADGE_OFFER_REMINDER);
    return (0, r.jsx)(l.m, {
      text: n,
      position: "right",
      children: (0, r.jsxs)("div", {
        children: [!m && (0, r.jsx)("img", {
          src: d,
          alt: "",
          className: u.S1
        }), (0, r.jsx)(a.BJc, {
          gap: 0,
          direction: "horizontal",
          className: u.Pc,
          children: g.map((e, t) => (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(f, {
              value: e
            }, t), t !== g.length - 1 && (0, r.jsx)("div", {
              className: u.Nm,
              children: ":"
            })]
          }))
        })]
      })
    })
  },
  A = e => {
    let {
      trialOffer: t
    } = e, n = (0, c.Fu)(t);
    return (0, r.jsx)(h, {
      expiresAt: t.expires_at,
      tooltipText: n
    })
  },
  g = e => {
    let {
      discountOffer: t
    } = e, n = (0, c.__)(t);
    return (0, r.jsx)(h, {
      expiresAt: t.expires_at,
      tooltipText: n
    })
  }