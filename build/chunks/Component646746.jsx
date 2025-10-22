/** Chunk was on 8818 **/
/** chunk id: 646746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk627050 = require("./627050.js"),
  Chunk124347 = require("./124347.jsx"),
  Chunk499376 = require("./499376.js"),
  Chunk937889 = require("./937889.js"),
  Chunk930282 = require("./930282.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk764871 = require("./764871.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk151576 = require("./151576.js");

function _(e) {
  let {
    message: t,
    forwardOptions: n,
    channel: r
  } = e, _ = f.jU.useSetting(), {
    attachments: v,
    embeds: x,
    hasContent: y,
    contentMessage: P
  } = (0, w.c)({
    message: t,
    channel: r,
    forwardOptions: n
  }), C = u.d.useExperiment({
    location: "forward_preview"
  }).enabled, j = l.useMemo(() => y ? (0, m.ZP)(t, {
    formatInline: true,
    allowLinks: true,
    allowHeading: true,
    allowList: true,
    allowGameMentions: C,
    hideSimpleEmbedContent: false,
    contentMessage: P
  }).content : null, [P, y, t, C]), O = v.length, S = null, Z = null, I = null;
  if (O > 0 || x.length > 0) {
    var R, k, M, T;
    let e = (0, s.countBy)(v, e => (0, h.aw)(e, true)),
      t = null != (M = e.IMAGE) ? M : 0,
      n = null != (T = e.VIDEO) ? T : 0;
    t > 0 && n > 0 ? (S = p.intl.formatToPlainString(p.t.Lr0Top, {
      image_count: t,
      video_count: n
    }), Z = o.Ka2) : n > 0 ? (S = p.intl.formatToPlainString(p.t.SJ6pPX, {
      count: n
    }), Z = o.g8d) : t > 0 ? (S = p.intl.formatToPlainString(p.t.h4pFfU, {
      count: t
    }), Z = 1 === t ? o.XBm : o.Ka2) : (S = p.intl.formatToPlainString(p.t["89ihS8"], {
      count: O
    }), Z = o.Ujz), n > 0 && O === n ? I = (0, a.jsxs)("div", {
      className: i()(b.attachmentPreview, b.attachmentPreviewVideo),
      children: [(0, a.jsx)(d.ZP, {
        className: b.thumbnail,
        src: v[0].proxy_url,
        width: 56,
        height: 56
      }), (0, a.jsx)(o.g8d, {
        className: b.playIcon,
        size: "md",
        color: "white"
      })]
    }) : O > 0 ? I = (0, a.jsx)("div", {
      className: b.attachmentPreview,
      children: (0, a.jsx)(d.ZP, {
        src: v[0].proxy_url,
        width: 56,
        height: 56
      })
    }) : (null == (k = x[0]) || null == (R = k.thumbnail) ? true : R.proxyURL) != null && (I = (0, a.jsx)("div", {
      className: b.attachmentPreview,
      children: (0, a.jsx)(d.ZP, {
        src: x[0].thumbnail.proxyURL,
        width: 56,
        height: 56
      })
    }))
  }
  return O > 1 && null != I && (I = (0, a.jsxs)("div", {
    className: b.attachmentPreviewOverflow,
    children: [(0, a.jsx)(c.ZP, {
      mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
      width: 56,
      height: 56,
      children: I
    }), (0, a.jsxs)(o.Text, {
      className: b.overflowCount,
      variant: "text-xs/semibold",
      color: "text-default",
      children: ["+", O - 1]
    })]
  })), (0, a.jsxs)("div", {
    className: b.forwardPreview,
    children: [(0, a.jsxs)("div", {
      className: b.contentWrapper,
      children: [y && (0, a.jsx)(g.ZP, {
        className: i()(b.forwardPreviewMessage, O > 0 && b.hasAttachments),
        message: t,
        content: j,
        compact: _
      }), O > 0 && (0, a.jsxs)("div", {
        className: b.attachmentRow,
        children: [null != Z && (0, a.jsx)(Z, {
          size: "custom",
          width: y ? 18 : 20,
          color: o.TVs.colors.TEXT_LOW_CONTRAST
        }), null != S && (0, a.jsx)(o.Text, {
          variant: y ? "text-sm/medium" : "text-md/medium",
          color: "text-low-contrast",
          children: S
        })]
      })]
    }), I]
  })
}