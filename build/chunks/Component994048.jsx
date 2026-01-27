/** Chunk was on web.js **/
/** chunk id: 994048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk811611 = require("./811611.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk410558 = require("./410558.js"),
  Chunk320061 = require("./320061.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk369614 = require("./369614.js"),
  Chunk939383 = require("./939383.js");
let v = () => (0, h.U)(false),
  A = e => {
    var t, n, a;
    let {
      onLearnMore: h
    } = e, {
      analyticsLocations: A
    } = (0, c.Ay)(l.A.PREMIUM_UPSELL);
    i.useEffect(() => {
      p.default.track(g.HAw.PREMIUM_UPSELL_VIEWED, {
        location_section: g.JJy.STICKER_PICKER_UPSELL,
        type: E.e.STICKER_PICKER_UPSELL,
        location_stack: A
      })
    }, [A]);
    let I = (0, d.V)(),
      S = (0, u.O)(),
      T = (null == I || null == (n = I.subscription_trial) ? true : n.sku_id) === E.pe.TIER_0,
      C = null != I || null != S;
    return (0, r.jsxs)("div", {
      className: o()(b.VL, {
        [b.Hz]: C
      }),
      children: [C ? (0, r.jsx)(f.Ay, {
        trialOffer: I,
        discountOffer: S,
        onClose: v,
        type: E.e.STICKER_PICKER_UPSELL,
        subscriptionTier: null != (t = null == I || null == (a = I.subscription_trial) ? true : a.sku_id) ? t : E.pe.TIER_2,
        children: T ? y.intl.format(y.t.MAGagw, {
          planName: (0, _.RH)(E.gD.PREMIUM_MONTH_TIER_0),
          onClick: h
        }) : y.intl.format(y.t.jt7JX6, {
          onClick: h
        })
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("img", {
          className: b.Tn,
          src: O,
          alt: y.intl.string(y.t.do7AoM)
        }), (0, r.jsx)(s.Text, {
          className: b.ex,
          color: "text-strong",
          variant: "text-lg/semibold",
          children: y.intl.string(y.t.jJG1pl)
        }), (0, r.jsx)(s.Text, {
          className: b.GR,
          variant: "text-md/normal",
          children: y.intl.format(y.t.jt7JX6, {
            onClick: h
          })
        })]
      }), !C && (0, r.jsx)(m.A, {
        analyticsSection: g.JJy.EXPRESSION_PICKER,
        buttonText: C ? T ? y.intl.string(y.t.hz78hE) : y.intl.string(y.t["Gd/XHF"]) : true
      }), (0, r.jsx)(s.DUT, {
        className: b.kz,
        onClick: v,
        children: (0, r.jsx)(s.PGe, {
          size: "md",
          color: "currentColor"
        })
      })]
    })
  }