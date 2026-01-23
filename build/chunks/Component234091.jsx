/** Chunk was on web.js **/
/** chunk id: 234091, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk811611 = require("./811611.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk256449 = require("./256449.js"),
  Chunk679382 = require("./679382.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk320061 = require("./320061.jsx"),
  Chunk823894 = require("./823894.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk48187 = require("./48187.js");
let I = 80;

function S(e) {
  var t, n, a;
  let {
    className: S,
    onClose: T
  } = e;
  (0, h.XQ)();
  let {
    analyticsLocations: C
  } = (0, u.Ay)(c.A.EMPTY_STATE), N = (0, o.yK)([m.A], () => y.vX.map(e => m.A.getStickerById(e)));
  i.useEffect(() => {
    _.default.track(b.HAw.PREMIUM_UPSELL_VIEWED, {
      type: O.e.EMPTY_STICKER_PICKER_UPSELL,
      source: {
        section: b.JJy.EMPTY_STICKER_PICKER_UPSELL
      },
      location_stack: C
    })
  }, [C]);
  let w = (0, f.V)(),
    R = (0, d.O)(),
    P = null != w || null != R,
    D = (null == w || null == (n = w.subscription_trial) ? true : n.sku_id) === O.pe.TIER_0;
  return (0, r.jsxs)("div", {
    className: s()(A.p$, S, {
      [A.Hz]: P
    }),
    children: [P ? (0, r.jsx)(p.Ay, {
      discountOffer: R,
      trialOffer: w,
      onClose: T,
      type: O.e.EMPTY_STICKER_PICKER_UPSELL,
      subscriptionTier: null != (t = null == w || null == (a = w.subscription_trial) ? true : a.sku_id) ? t : O.pe.TIER_2,
      children: v.intl.string(v.t.FnNud4)
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.Heading, {
        className: A.wx,
        variant: "heading-xl/semibold",
        children: v.intl.string(v.t.HEm04J)
      }), (0, r.jsx)(l.Text, {
        className: A.VA,
        color: "text-default",
        variant: "text-md/normal",
        children: v.intl.string(v.t.FnNud4)
      }), (0, r.jsx)("div", {
        className: A.l1,
        children: N.filter(e => null != e).map(e => (0, r.jsx)(g.A, {
          sticker: e,
          className: A.yI,
          size: I
        }, null == e ? true : e.id))
      })]
    }), !P && (0, r.jsx)(E.A, {
      analyticsSection: b.JJy.EXPRESSION_PICKER,
      buttonText: P ? D ? v.intl.string(v.t.hz78hE) : v.intl.string(v.t["Gd/XHF"]) : true
    })]
  })
}