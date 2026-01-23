/** Chunk was on web.js **/
/** chunk id: 763795, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk224016 = require("./224016.jsx"),
  Chunk217392 = require("./217392.jsx"),
  Chunk336378 = require("./336378.jsx"),
  Chunk183942 = require("./183942.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk456919 = require("./456919.js");

function y(e, t) {
  let n = f.Ay.getDefaultPrice(e),
    {
      intervalType: r
    } = f.Ay.getInterval(e),
    i = (0, p.$g)(n.amount, n.currency);
  if (t) return i;
  switch (r) {
    case m.WT.MONTH:
      return g.intl.formatToPlainString(g.t.AbOLNu, {
        price: i
      });
    case m.WT.YEAR:
      return g.intl.formatToPlainString(g.t["rS8FA+"], {
        price: i
      })
  }
}
let b = e => {
    let {
      isTier0: t,
      discountAmount: n
    } = e, i = (0, h.V)(), o = null != i && i.trial_id === m.Dw, l = g.intl.string(g.t.IBYG5U);
    return true !== n ? l = g.intl.formatToPlainString(g.t.iiLbvu, {
      percent: n
    }) : o && (l = g.intl.string(g.t.gtNqJQ)), (0, r.jsx)("div", {
      className: E.TX,
      children: (0, r.jsx)(s.Text, {
        variant: "text-xs/bold",
        className: a()(E.El, {
          [E.LD]: t
        }),
        children: l
      })
    })
  },
  O = function(e) {
    var t;
    let n, {
        hideCloseButton: i = false,
        hideCloseOnFullScreen: f,
        shouldShowPrice: p,
        plan: h,
        renderAnimation: g,
        onClose: O,
        isGift: v,
        upgradeToPremiumType: A,
        className: I,
        showTrialBadge: S = false,
        showDiscountBadge: T = false
      } = e,
      C = A === m.PremiumTypes.TIER_2;
    n = A === m.PremiumTypes.TIER_0 ? c.A : A === m.PremiumTypes.TIER_1 ? u.A : l.A;
    let N = (0, _.O)(),
      w = null == N || null == (t = N.discount) ? true : t.amount;
    return (0, r.jsxs)("div", {
      "aria-hidden": true,
      className: a()({
        [E.y2]: !C,
        [E.qG]: C
      }, I),
      children: [(S || T) && (0, r.jsx)(d.A, {
        className: E.N8
      }), g(), (0, r.jsxs)(o.A, {
        align: o.A.Align.START,
        justify: o.A.Justify.BETWEEN,
        className: E.LI,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(n, {
            className: a()(E.nr, {
              [E.w6]: !C
            })
          }), (S || T) && (0, r.jsx)(b, {
            isTier0: A === m.PremiumTypes.TIER_0,
            discountAmount: T ? w : true
          })]
        }), !i && (0, r.jsx)(s.s_y, {
          "data-migration-pending": true,
          hideOnFullscreen: f,
          onClick: O,
          className: E.b
        })]
      }), p && null != h ? (0, r.jsx)("div", {
        className: E.q9,
        children: y(h, v)
      }) : null]
    })
  }