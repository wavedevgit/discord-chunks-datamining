/** Chunk was on web.js **/
/** chunk id: 994048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
let A = () => (0, h.U)(false),
  v = e => {
    var t, n, a;
    let {
      onLearnMore: h
    } = e, {
      analyticsLocations: v
    } = (0, c.Ay)(l.A.PREMIUM_UPSELL);
    i.useEffect(() => {
      p.default.track(g.HAw.PREMIUM_UPSELL_VIEWED, {
        location_section: g.JJy.STICKER_PICKER_UPSELL,
        type: E.e.STICKER_PICKER_UPSELL,
        location_stack: v
      })
    }, [v]);
    let S = (0, d.V)(),
      I = (0, u.O)(),
      T = (null == S || null == (n = S.subscription_trial) ? true : n.sku_id) === E.pe.TIER_0,
      C = null != S || null != I;
    return (0, r.jsxs)("div", {
      className: s()(y.VL, {
        [y.Hz]: C
      }),
      children: [C ? (0, r.jsx)(f.Ay, {
        trialOffer: S,
        discountOffer: I,
        onClose: A,
        type: E.e.STICKER_PICKER_UPSELL,
        subscriptionTier: null != (t = null == S || null == (a = S.subscription_trial) ? true : a.sku_id) ? t : E.pe.TIER_2,
        children: T ? b.intl.format(b.t.MAGagw, {
          planName: (0, _.RH)(E.gD.PREMIUM_MONTH_TIER_0),
          onClick: h
        }) : b.intl.format(b.t.jt7JX6, {
          onClick: h
        })
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("img", {
          className: y.Tn,
          src: O,
          alt: b.intl.string(b.t.do7AoM)
        }), (0, r.jsx)(o.Text, {
          className: y.ex,
          color: "text-strong",
          variant: "text-lg/semibold",
          children: b.intl.string(b.t.jJG1pl)
        }), (0, r.jsx)(o.Text, {
          className: y.GR,
          variant: "text-md/normal",
          children: b.intl.format(b.t.jt7JX6, {
            onClick: h
          })
        })]
      }), !C && (0, r.jsx)(m.A, {
        analyticsSection: g.JJy.EXPRESSION_PICKER,
        buttonText: C ? T ? b.intl.string(b.t.hz78hE) : b.intl.string(b.t["Gd/XHF"]) : true
      }), (0, r.jsx)(o.DUT, {
        className: y.kz,
        onClick: A,
        children: (0, r.jsx)(o.PGe, {
          size: "md",
          color: "currentColor"
        })
      })]
    })
  }