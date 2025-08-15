/** Chunk was on 19157 **/
/** chunk id: 646746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
    channel: i
  } = e, b = g.jU.useSetting(), {
    attachments: y,
    embeds: I,
    hasContent: S,
    contentMessage: A
  } = (0, m.c)({
    message: t,
    channel: i,
    forwardOptions: n
  }), O = u.d.useExperiment({
    location: "forward_preview"
  }).enabled, v = r.useMemo(() => S ? (0, h.ZP)(t, {
    formatInline: true,
    allowLinks: true,
    allowHeading: true,
    allowList: true,
    allowGameMentions: O,
    hideSimpleEmbedContent: false,
    contentMessage: A
  }).content : null, [A, S, t, O]), C = y.length, x = null, P = null, N = null;
  if (C > 0 || I.length > 0) {
    var T, L, j, Z;
    let e = (0, s.countBy)(y, e => (0, f.aw)(e, true)),
      t = null != (j = e.IMAGE) ? j : 0,
      n = null != (Z = e.VIDEO) ? Z : 0;
    t > 0 && n > 0 ? (x = p.intl.formatToPlainString(p.t.Lr0Toq, {
      image_count: t,
      video_count: n
    }), P = o.Ka2) : n > 0 ? (x = p.intl.formatToPlainString(p.t.SJ6pPT, {
      count: n
    }), P = o.g8d) : t > 0 ? (x = p.intl.formatToPlainString(p.t.h4pFfX, {
      count: t
    }), P = 1 === t ? o.XBm : o.Ka2) : (x = p.intl.formatToPlainString(p.t["89ihS0"], {
      count: C
    }), P = o.Ujz), n > 0 && C === n ? N = (0, l.jsxs)("div", {
      className: a()(E.attachmentPreview, E.attachmentPreviewVideo),
      children: [(0, l.jsx)(d.ZP, {
        className: E.thumbnail,
        src: y[0].proxy_url,
        width: 56,
        height: 56
      }), (0, l.jsx)(o.g8d, {
        className: E.playIcon,
        size: "md",
        color: "white"
      })]
    }) : C > 0 ? N = (0, l.jsx)("div", {
      className: E.attachmentPreview,
      children: (0, l.jsx)(d.ZP, {
        src: y[0].proxy_url,
        width: 56,
        height: 56
      })
    }) : (null == (L = I[0]) || null == (T = L.thumbnail) ? true : T.proxyURL) != null && (N = (0, l.jsx)("div", {
      className: E.attachmentPreview,
      children: (0, l.jsx)(d.ZP, {
        src: I[0].thumbnail.proxyURL,
        width: 56,
        height: 56
      })
    }))
  }
  return C > 1 && null != N && (N = (0, l.jsxs)("div", {
    className: E.attachmentPreviewOverflow,
    children: [(0, l.jsx)(c.ZP, {
      mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
      width: 56,
      height: 56,
      children: N
    }), (0, l.jsxs)(o.Text, {
      className: E.overflowCount,
      variant: "text-xs/semibold",
      color: "text-default",
      children: ["+", C - 1]
    })]
  })), (0, l.jsxs)("div", {
    className: E.forwardPreview,
    children: [(0, l.jsx)("div", {
      className: E.quote
    }), (0, l.jsxs)("div", {
      className: E.contentWrapper,
      children: [S && (0, l.jsx)(_.ZP, {
        className: a()(E.forwardPreviewMessage, C > 0 && E.hasAttachments),
        message: t,
        content: v,
        compact: b
      }), C > 0 && (0, l.jsxs)("div", {
        className: E.attachmentRow,
        children: [null != P && (0, l.jsx)(P, {
          size: "custom",
          width: S ? 18 : 20,
          color: o.TVs.colors.TEXT_LOW_CONTRAST
        }), null != x && (0, l.jsx)(o.Text, {
          variant: S ? "text-sm/medium" : "text-md/medium",
          color: "text-low-contrast",
          children: x
        })]
      })]
    }), N]
  })
}