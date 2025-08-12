/** Chunk was on 33648 **/
/** chunk id: 646746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk318616 = require("./318616.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk909016 = require("./909016.js");

function y(e) {
  let {
    message: t,
    forwardOptions: n,
    channel: a
  } = e, y = g.jU.useSetting(), {
    attachments: v,
    embeds: x,
    hasContent: E,
    contentMessage: C
  } = (0, _.c)({
    message: t,
    channel: a,
    forwardOptions: n
  }), S = u.d.useExperiment({
    location: "forward_preview"
  }).enabled, O = r.useMemo(() => E ? (0, f.ZP)(t, {
    formatInline: true,
    allowLinks: true,
    allowHeading: true,
    allowList: true,
    allowGameMentions: S,
    hideSimpleEmbedContent: false,
    contentMessage: C
  }).content : null, [C, E, t, S]), P = v.length, w = null, Z = null, N = null;
  if (P > 0 || x.length > 0) {
    var j, I, T, L;
    let e = (0, s.countBy)(v, e => (0, h.aw)(e, true)),
      t = null != (T = e.IMAGE) ? T : 0,
      n = null != (L = e.VIDEO) ? L : 0;
    t > 0 && n > 0 ? (w = p.intl.formatToPlainString(p.t.Lr0Toq, {
      image_count: t,
      video_count: n
    }), Z = o.Ka2) : n > 0 ? (w = p.intl.formatToPlainString(p.t.SJ6pPT, {
      count: n
    }), Z = o.g8d) : t > 0 ? (w = p.intl.formatToPlainString(p.t.h4pFfX, {
      count: t
    }), Z = 1 === t ? o.XBm : o.Ka2) : (w = p.intl.formatToPlainString(p.t["89ihS0"], {
      count: P
    }), Z = o.Ujz), n > 0 && P === n ? N = (0, l.jsxs)("div", {
      className: i()(b.attachmentPreview, b.attachmentPreviewVideo),
      children: [(0, l.jsx)(d.ZP, {
        className: b.thumbnail,
        src: v[0].proxy_url,
        width: 56,
        height: 56
      }), (0, l.jsx)(o.g8d, {
        className: b.playIcon,
        size: "md",
        color: "white"
      })]
    }) : P > 0 ? N = (0, l.jsx)("div", {
      className: b.attachmentPreview,
      children: (0, l.jsx)(d.ZP, {
        src: v[0].proxy_url,
        width: 56,
        height: 56
      })
    }) : (null == (I = x[0]) || null == (j = I.thumbnail) ? true : j.proxyURL) != null && (N = (0, l.jsx)("div", {
      className: b.attachmentPreview,
      children: (0, l.jsx)(d.ZP, {
        src: x[0].thumbnail.proxyURL,
        width: 56,
        height: 56
      })
    }))
  }
  return P > 1 && null != N && (N = (0, l.jsxs)("div", {
    className: b.attachmentPreviewOverflow,
    children: [(0, l.jsx)(c.ZP, {
      mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
      width: 56,
      height: 56,
      children: N
    }), (0, l.jsxs)(o.Text, {
      className: b.overflowCount,
      variant: "text-xs/semibold",
      color: "text-default",
      children: ["+", P - 1]
    })]
  })), (0, l.jsxs)("div", {
    className: b.forwardPreview,
    children: [(0, l.jsx)("div", {
      className: b.quote
    }), (0, l.jsxs)("div", {
      className: b.contentWrapper,
      children: [E && (0, l.jsx)(m.ZP, {
        className: i()(b.forwardPreviewMessage, P > 0 && b.hasAttachments),
        message: t,
        content: O,
        compact: y
      }), P > 0 && (0, l.jsxs)("div", {
        className: b.attachmentRow,
        children: [null != Z && (0, l.jsx)(Z, {
          size: "custom",
          width: E ? 18 : 20,
          color: o.TVs.colors.TEXT_LOW_CONTRAST
        }), null != w && (0, l.jsx)(o.Text, {
          variant: E ? "text-sm/medium" : "text-md/medium",
          color: "text-low-contrast",
          children: w
        })]
      })]
    }), N]
  })
}