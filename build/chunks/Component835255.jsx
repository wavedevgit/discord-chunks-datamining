/** Chunk was on 49902 **/
/** chunk id: 835255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk616066 = require("./616066.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk876917 = require("./876917.jsx"),
  Chunk232644 = require("./232644.js");

function f(e) {
  let {
    item: t,
    user: n
  } = e, f = i.useRef(null), g = (0, o.Z)(f), h = t.collectiblesItem, p = h.type === l.Z.PROFILE_EFFECT ? h.title : h.label;
  return (0, r.jsx)(a.kL8, {
    className: d.card,
    ref: f,
    onClick: () => {},
    "aria-label": p,
    children: (0, r.jsx)("div", {
      className: d.cardPreview,
      children: (() => {
        switch (h.type) {
          case l.Z.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
              className: d.profileEffectPreview,
              children: (0, r.jsx)(u.Z, {
                profileEffectId: h.id,
                isHovering: g,
                isPurchased: false,
                removeSetHeight: true
              })
            });
          case l.Z.AVATAR_DECORATION:
            return (0, r.jsx)("div", {
              className: d.avatarDecorationPreview,
              children: (0, r.jsx)(s.R, {
                item: h,
                user: n,
                isHighlighted: g,
                isPurchased: false,
                avatarSize: a.EFr.SIZE_80
              })
            });
          case l.Z.NAMEPLATE:
            return (0, r.jsxs)("div", {
              className: d.nameplatePreview,
              children: [(0, r.jsx)("div", {
                className: d.nameplateTopLeft,
                children: (0, r.jsx)(c.Z, {
                  user: n,
                  nameplate: h,
                  isHighlighted: g,
                  showPlaceholderUser: true,
                  showStatus: true,
                  isPurchased: false,
                  nameplatePreviewSize: "default",
                  width: 200
                })
              }), (0, r.jsx)("div", {
                className: d.nameplateBottomRight,
                children: (0, r.jsx)(c.Z, {
                  user: n,
                  nameplate: h,
                  isHighlighted: g,
                  showPlaceholderUser: true,
                  showStatus: true,
                  isPurchased: false,
                  nameplatePreviewSize: "default",
                  width: 200
                })
              })]
            });
          default:
            return null
        }
      })()
    })
  })
}