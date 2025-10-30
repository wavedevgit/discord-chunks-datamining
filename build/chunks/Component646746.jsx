/** Chunk was on 33648 **/
/** chunk id: 646746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => b
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
  Chunk318616 = require("./318616.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk698755 = require("./698755.js");

function b(e) {
  let {
    message: t,
    forwardOptions: n,
    channel: r
  } = e, b = f.jU.useSetting(), {
    attachments: x,
    embeds: y,
    hasContent: C,
    contentMessage: O
  } = (0, p.c)({
    message: t,
    channel: r,
    forwardOptions: n
  }), j = c.d.useExperiment({
    location: "forward_preview"
  }).enabled, _ = a.useMemo(() => C ? (0, m.ZP)(t, {
    formatInline: true,
    allowLinks: true,
    allowHeading: true,
    allowList: true,
    allowGameMentions: j,
    hideSimpleEmbedContent: false,
    contentMessage: O
  }).content : null, [O, C, t, j]), S = x.length, T = null, E = null, P = null;
  if (S > 0 || y.length > 0) {
    var D, M, R, A;
    let e = (0, s.countBy)(x, e => (0, h.aw)(e, true)),
      t = null != (R = e.IMAGE) ? R : 0,
      n = null != (A = e.VIDEO) ? A : 0;
    t > 0 && n > 0 ? (T = v.intl.formatToPlainString(v.t.Lr0Top, {
      image_count: t,
      video_count: n
    }), E = o.Ka2) : n > 0 ? (T = v.intl.formatToPlainString(v.t.SJ6pPX, {
      count: n
    }), E = o.g8d) : t > 0 ? (T = v.intl.formatToPlainString(v.t.h4pFfU, {
      count: t
    }), E = 1 === t ? o.XBm : o.Ka2) : (T = v.intl.formatToPlainString(v.t["89ihS8"], {
      count: S
    }), E = o.Ujz), n > 0 && S === n ? P = (0, l.jsxs)("div", {
      className: i()(w.attachmentPreview, w.attachmentPreviewVideo),
      children: [(0, l.jsx)(d.ZP, {
        className: w.thumbnail,
        src: x[0].proxy_url,
        width: 56,
        height: 56
      }), (0, l.jsx)(o.g8d, {
        className: w.playIcon,
        size: "md",
        color: "white"
      })]
    }) : S > 0 ? P = (0, l.jsx)("div", {
      className: w.attachmentPreview,
      children: (0, l.jsx)(d.ZP, {
        src: x[0].proxy_url,
        width: 56,
        height: 56
      })
    }) : (null == (M = y[0]) || null == (D = M.thumbnail) ? true : D.proxyURL) != null && (P = (0, l.jsx)("div", {
      className: w.attachmentPreview,
      children: (0, l.jsx)(d.ZP, {
        src: y[0].thumbnail.proxyURL,
        width: 56,
        height: 56
      })
    }))
  }
  return S > 1 && null != P && (P = (0, l.jsxs)("div", {
    className: w.attachmentPreviewOverflow,
    children: [(0, l.jsx)(u.ZP, {
      mask: u.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
      width: 56,
      height: 56,
      children: P
    }), (0, l.jsxs)(o.Text, {
      className: w.overflowCount,
      variant: "text-xs/semibold",
      color: "text-default",
      children: ["+", S - 1]
    })]
  })), (0, l.jsxs)("div", {
    className: w.forwardPreview,
    children: [(0, l.jsxs)("div", {
      className: w.contentWrapper,
      children: [C && (0, l.jsx)(g.ZP, {
        className: i()(w.forwardPreviewMessage, S > 0 && w.hasAttachments),
        message: t,
        content: _,
        compact: b
      }), S > 0 && (0, l.jsxs)("div", {
        className: w.attachmentRow,
        children: [null != E && (0, l.jsx)(E, {
          size: "custom",
          width: C ? 18 : 20,
          color: o.TVs.colors.TEXT_LOW_CONTRAST
        }), null != T && (0, l.jsx)(o.Text, {
          variant: C ? "text-sm/medium" : "text-md/medium",
          color: "text-low-contrast",
          children: T
        })]
      })]
    }), P]
  })
}