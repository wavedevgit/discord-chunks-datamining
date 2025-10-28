/** Chunk was on 91053 **/
/** chunk id: 874139, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk311570 = require("./311570.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk541699 = require("./541699.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk221300 = require("./221300.jsx"),
  Chunk688192 = require("./688192.jsx"),
  Chunk766717 = require("./766717.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk815743 = require("./815743.js");

function _(e) {
  let {
    wishlistItems: t = [],
    profileOwner: n,
    onClick: _
  } = e, {
    analyticsLocations: y
  } = (0, o.ZP)(), x = (0, i.useMemo)(() => {
    let e = [];
    for (let i = 0; i < t.length && e.length < 4; i++) {
      let s = t[i],
        o = 3 === e.length && t.length > 4,
        u = o ? m.intl.string(m.t.TxBQzD) : m.intl.string(m.t.ilhtIa);
      if ((0, d.Q)(s)) {
        let i = () => {
            if (o) return void _();
            (0, c.Z)({
              skuId: s.skuId,
              isGift: true,
              giftingOrigin: g.Wt.USER_PROFILE_WISHLIST,
              analyticsLocations: y,
              giftRecipient: n,
              variantsReturnStyle: a.v.VARIANTS_GROUP
            })
          },
          d = () => (0, r.jsx)(p.Z, {
            item: s,
            profileOwner: n,
            isHighlighted: false,
            surface: h.Y.PROFILE_SIDEBAR
          }),
          m = s.collectiblesItem.type === l.Z.PROFILE_EFFECT;
        e.push((0, r.jsx)(f.Z, {
          onCardClick: i,
          tooltipText: u,
          shouldScalePreview: !m,
          renderPreview: d,
          showMoreOverlay: o,
          moreCount: t.length - 4
        }, s.skuId))
      }
    }
    return e
  }, [t, n, y, _]);
  return 0 === x.length ? null : (0, r.jsxs)(u.Z.Overlay, {
    className: b.container,
    children: [(0, r.jsx)("div", {
      className: b.header,
      children: (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        children: m.intl.string(m.t["7lZ31J"])
      })
    }), (0, r.jsx)("div", {
      className: b.cardsContainer,
      children: x
    })]
  })
}