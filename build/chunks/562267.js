/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => p
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  a = n(481060),
  s = n(661824),
  l = n(913663),
  c = n(268350),
  u = n(419922),
  d = n(388032),
  f = n(871850);

function _(e) {
  var t;
  let {
    channelId: n,
    chatInputType: _
  } = e, [p, h] = i.useState(null), g = (0, o.e7)([l.Z], () => l.Z.getStickerPreview(n, _.drafts.type));
  return (null === (t = _.stickers) || void 0 === t ? void 0 : t.allowSending) && null != g && 0 !== g.length ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: f.stickerPreviews,
      children: g.map(e => (0, r.jsxs)("div", {
        className: f.stickerPreviewContainer,
        children: [(0, r.jsx)(a.P3F, {
          onFocus: () => h(e.id),
          onBlur: () => h(null),
          className: f.closeButton,
          "aria-label": d.NW.formatToPlainString(d.t.BGAQRU, {
            name: e.name
          }),
          onClick: () => (0, c.qB)(n, _.drafts.type),
          children: (0, r.jsx)("div", {
            className: f.closeIconContainer,
            children: (0, r.jsx)(a.k$p, {
              size: "md",
              color: "currentColor",
              className: f.closeIcon
            })
          })
        }), (0, r.jsx)(u.ZP, {
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
let p = i.memo(_)