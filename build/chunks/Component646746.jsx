/** Chunk was on 8818 **/
/** chunk id: 646746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => w
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

function w(e) {
  let {
    message: t,
    forwardOptions: n,
    channel: r
  } = e, w = f.jU.useSetting(), {
    attachments: v,
    embeds: x,
    hasContent: y,
    contentMessage: P
  } = (0, _.c)({
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
  }).content : null, [P, y, t, C]), O = v.length, I = null, S = null, Z = null;
  if (O > 0 || x.length > 0) {
    var R, T, k, D;
    let e = (0, s.countBy)(v, e => (0, h.aw)(e, true)),
      t = null != (k = e.IMAGE) ? k : 0,
      n = null != (D = e.VIDEO) ? D : 0;
    t > 0 && n > 0 ? (I = p.intl.formatToPlainString(p.t.Lr0Toq, {
      image_count: t,
      video_count: n
    }), S = o.Ka2) : n > 0 ? (I = p.intl.formatToPlainString(p.t.SJ6pPT, {
      count: n
    }), S = o.g8d) : t > 0 ? (I = p.intl.formatToPlainString(p.t.h4pFfX, {
      count: t
    }), S = 1 === t ? o.XBm : o.Ka2) : (I = p.intl.formatToPlainString(p.t["89ihS0"], {
      count: O
    }), S = o.Ujz), n > 0 && O === n ? Z = (0, a.jsxs)("div", {
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
    }) : O > 0 ? Z = (0, a.jsx)("div", {
      className: b.attachmentPreview,
      children: (0, a.jsx)(d.ZP, {
        src: v[0].proxy_url,
        width: 56,
        height: 56
      })
    }) : (null == (T = x[0]) || null == (R = T.thumbnail) ? true : R.proxyURL) != null && (Z = (0, a.jsx)("div", {
      className: b.attachmentPreview,
      children: (0, a.jsx)(d.ZP, {
        src: x[0].thumbnail.proxyURL,
        width: 56,
        height: 56
      })
    }))
  }
  return O > 1 && null != Z && (Z = (0, a.jsxs)("div", {
    className: b.attachmentPreviewOverflow,
    children: [(0, a.jsx)(c.ZP, {
      mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
      width: 56,
      height: 56,
      children: Z
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
        compact: w
      }), O > 0 && (0, a.jsxs)("div", {
        className: b.attachmentRow,
        children: [null != S && (0, a.jsx)(S, {
          size: "custom",
          width: y ? 18 : 20,
          color: o.TVs.colors.TEXT_LOW_CONTRAST
        }), null != I && (0, a.jsx)(o.Text, {
          variant: y ? "text-sm/medium" : "text-md/medium",
          color: "text-low-contrast",
          children: I
        })]
      })]
    }), Z]
  })
}