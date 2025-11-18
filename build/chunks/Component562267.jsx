/** Chunk was on web.js **/
/** chunk id: 562267, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk661824 = require("./661824.jsx"),
  Chunk913663 = require("./913663.js"),
  Chunk268350 = require("./268350.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk739090 = require("./739090.js");

function _(e) {
  var t;
  let {
    channelId: n,
    chatInputType: _
  } = e, [p, h] = i.useState(null), m = (0, a.e7)([l.Z], () => l.Z.getStickerPreview(n, _.drafts.type));
  return (null == (t = _.stickers) ? true : t.allowSending) && null != m && 0 !== m.length ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: f.stickerPreviews,
      children: m.map(e => (0, r.jsxs)("div", {
        className: f.stickerPreviewContainer,
        children: [(0, r.jsx)(o.P3F, {
          onFocus: () => h(e.id),
          onBlur: () => h(null),
          className: f.closeButton,
          "aria-label": d.intl.formatToPlainString(d.t.BGAQRd, {
            name: e.name
          }),
          onClick: () => (0, c.qB)(n, _.drafts.type),
          children: (0, r.jsx)("div", {
            className: f.closeIconContainer,
            children: (0, r.jsx)(o.k$p, {
              size: "md",
              color: "currentColor",
              className: f.closeIcon
            })
          })
        }), (0, r.jsx)(u.Z, {
          isInteracting: p === e.id,
          className: f.stickerPreview,
          size: 48,
          sticker: e
        })]
      }, e.id))
    }), (0, r.jsx)(s.Z, {
      className: f.stickerPreviewDivider
    })]
  }) : null
}
let p = Chunk473749.memo(_)