/** Chunk was on 9797 **/
/** chunk id: 646746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk627050 = require("./627050.js"),
  Chunk124347 = require("./124347.jsx"),
  Chunk499376 = require("./499376.js"),
  Chunk937889 = require("./937889.js"),
  Chunk930282 = require("./930282.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk318616 = require("./318616.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk698755 = require("./698755.js");

function b(e) {
  let {
    message: t,
    forwardOptions: n,
    channel: r
  } = e, b = f.jU.useSetting(), {
    attachments: v,
    embeds: x,
    hasContent: j,
    contentMessage: y
  } = (0, _.c)({
    message: t,
    channel: r,
    forwardOptions: n
  }), P = u.d.useExperiment({
    location: "forward_preview"
  }).enabled, C = l.useMemo(() => j ? (0, m.ZP)(t, {
    formatInline: true,
    allowLinks: true,
    allowHeading: true,
    allowList: true,
    allowGameMentions: P,
    hideSimpleEmbedContent: false,
    contentMessage: y
  }).content : null, [y, j, t, P]), O = v.length, R = null, S = null, k = null;
  if (O > 0 || x.length > 0) {
    var I, Z, M, N;
    let e = (0, i.countBy)(v, e => (0, h.aw)(e, true)),
      t = null != (M = e.IMAGE) ? M : 0,
      n = null != (N = e.VIDEO) ? N : 0;
    t > 0 && n > 0 ? (R = p.intl.formatToPlainString(p.t.Lr0Toq, {
      image_count: t,
      video_count: n
    }), S = o.Ka2) : n > 0 ? (R = p.intl.formatToPlainString(p.t.SJ6pPT, {
      count: n
    }), S = o.g8d) : t > 0 ? (R = p.intl.formatToPlainString(p.t.h4pFfX, {
      count: t
    }), S = 1 === t ? o.XBm : o.Ka2) : (R = p.intl.formatToPlainString(p.t["89ihS0"], {
      count: O
    }), S = o.Ujz), n > 0 && O === n ? k = (0, a.jsxs)("div", {
      className: s()(w.attachmentPreview, w.attachmentPreviewVideo),
      children: [(0, a.jsx)(d.ZP, {
        className: w.thumbnail,
        src: v[0].proxy_url,
        width: 56,
        height: 56
      }), (0, a.jsx)(o.g8d, {
        className: w.playIcon,
        size: "md",
        color: "white"
      })]
    }) : O > 0 ? k = (0, a.jsx)("div", {
      className: w.attachmentPreview,
      children: (0, a.jsx)(d.ZP, {
        src: v[0].proxy_url,
        width: 56,
        height: 56
      })
    }) : (null == (Z = x[0]) || null == (I = Z.thumbnail) ? true : I.proxyURL) != null && (k = (0, a.jsx)("div", {
      className: w.attachmentPreview,
      children: (0, a.jsx)(d.ZP, {
        src: x[0].thumbnail.proxyURL,
        width: 56,
        height: 56
      })
    }))
  }
  return O > 1 && null != k && (k = (0, a.jsxs)("div", {
    className: w.attachmentPreviewOverflow,
    children: [(0, a.jsx)(c.ZP, {
      mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
      width: 56,
      height: 56,
      children: k
    }), (0, a.jsxs)(o.Text, {
      className: w.overflowCount,
      variant: "text-xs/semibold",
      color: "text-default",
      children: ["+", O - 1]
    })]
  })), (0, a.jsxs)("div", {
    className: w.forwardPreview,
    children: [(0, a.jsx)("div", {
      className: w.quote
    }), (0, a.jsxs)("div", {
      className: w.contentWrapper,
      children: [j && (0, a.jsx)(g.ZP, {
        className: s()(w.forwardPreviewMessage, O > 0 && w.hasAttachments),
        message: t,
        content: C,
        compact: b
      }), O > 0 && (0, a.jsxs)("div", {
        className: w.attachmentRow,
        children: [null != S && (0, a.jsx)(S, {
          size: "custom",
          width: j ? 18 : 20,
          color: o.TVs.colors.TEXT_LOW_CONTRAST
        }), null != R && (0, a.jsx)(o.Text, {
          variant: j ? "text-sm/medium" : "text-md/medium",
          color: "text-low-contrast",
          children: R
        })]
      })]
    }), k]
  })
}