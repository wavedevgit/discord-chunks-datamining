/** Chunk was on web.js **/
/** chunk id: 890307, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk124347 = require("./124347.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk419173 = require("./419173.js");

function p(e) {
  let {
    previewData: t,
    className: n,
    onClick: a
  } = e, {
    trackUserProfileAction: p
  } = (0, c.KZ)(), _ = i.useRef(false);
  return i.useEffect(() => {
    _.current || (p({
      action: "VIEW_APPLICATION_WIDGET_PREVIEW",
      applicationId: t.application.id
    }), _.current = true)
  }, [p, t.application.id]), (0, r.jsx)(s.kL8, {
    onClick: () => {
      p({
        action: "PRESS_APPLICATION_WIDGET_PREVIEW",
        applicationId: t.application.id
      }), null == a || a()
    },
    "aria-label": t.application.name,
    children: (0, r.jsxs)(u.Z.Overlay, {
      className: o()(f.container, n),
      children: [(0, r.jsxs)(s.Kqy, {
        gap: 8,
        padding: 8,
        className: f.content,
        children: [(0, r.jsxs)(s.Kqy, {
          direction: "horizontal",
          gap: 4,
          children: [(0, r.jsx)(l.ZP, {
            width: 16,
            height: 16,
            src: t.application.icon,
            className: f.applicationIcon
          }), (0, r.jsx)(s.xvT, {
            variant: "text-xs/medium",
            children: t.application.name
          })]
        }), (0, r.jsxs)("div", {
          className: f.textContent,
          children: [(0, r.jsxs)(s.X6q, {
            variant: "heading-sm/semibold",
            lineClamp: 2,
            children: [t.season, ": ", t.currentRankName, " ", null != t.currentRankImage && (0, r.jsx)("div", {
              className: f.rankImage,
              children: (0, r.jsx)(l.ZP, {
                src: t.currentRankImage.proxyUrl,
                width: t.currentRankImage.width,
                height: t.currentRankImage.height,
                responsive: true
              })
            })]
          }), (0, r.jsx)(s.Avr, {
            textVariant: "text-xs/normal",
            text: d.intl.string(d.t.qI8ZP6),
            variant: "secondary"
          })]
        })]
      }), (0, r.jsx)("div", {
        className: f.featuredCharacterImageContainer,
        children: (0, r.jsx)(l.ZP, {
          src: t.featuredCharacterImage.proxyUrl,
          width: t.featuredCharacterImage.width,
          height: t.featuredCharacterImage.height,
          responsive: true,
          className: f.featuredCharacterImage
        })
      })]
    })
  })
}