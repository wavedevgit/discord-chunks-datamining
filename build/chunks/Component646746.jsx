/** Chunk was on 9797 **/
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
    attachments: v,
    embeds: x,
    hasContent: y,
    contentMessage: C
  } = (0, _.c)({
    message: t,
    channel: r,
    forwardOptions: n
  }), O = u.d.useExperiment({
    location: "forward_preview"
  }).enabled, P = l.useMemo(() => y ? (0, m.ZP)(t, {
    formatInline: true,
    allowLinks: true,
    allowHeading: true,
    allowList: true,
    allowGameMentions: O,
    hideSimpleEmbedContent: false,
    contentMessage: C
  }).content : null, [C, y, t, O]), S = v.length, j = null, E = null, T = null;
  if (S > 0 || x.length > 0) {
    var I, M, D, R;
    let e = (0, s.countBy)(v, e => (0, h.aw)(e, true)),
      t = null != (D = e.IMAGE) ? D : 0,
      n = null != (R = e.VIDEO) ? R : 0;
    t > 0 && n > 0 ? (j = w.intl.formatToPlainString(w.t.Lr0Top, {
      image_count: t,
      video_count: n
    }), E = o.Ka2) : n > 0 ? (j = w.intl.formatToPlainString(w.t.SJ6pPX, {
      count: n
    }), E = o.g8d) : t > 0 ? (j = w.intl.formatToPlainString(w.t.h4pFfU, {
      count: t
    }), E = 1 === t ? o.XBm : o.Ka2) : (j = w.intl.formatToPlainString(w.t["89ihS8"], {
      count: S
    }), E = o.Ujz), n > 0 && S === n ? T = (0, a.jsxs)("div", {
      className: i()(p.attachmentPreview, p.attachmentPreviewVideo),
      children: [(0, a.jsx)(d.ZP, {
        className: p.thumbnail,
        src: v[0].proxy_url,
        width: 56,
        height: 56
      }), (0, a.jsx)(o.g8d, {
        className: p.playIcon,
        size: "md",
        color: "white"
      })]
    }) : S > 0 ? T = (0, a.jsx)("div", {
      className: p.attachmentPreview,
      children: (0, a.jsx)(d.ZP, {
        src: v[0].proxy_url,
        width: 56,
        height: 56
      })
    }) : (null == (M = x[0]) || null == (I = M.thumbnail) ? true : I.proxyURL) != null && (T = (0, a.jsx)("div", {
      className: p.attachmentPreview,
      children: (0, a.jsx)(d.ZP, {
        src: x[0].thumbnail.proxyURL,
        width: 56,
        height: 56
      })
    }))
  }
  return S > 1 && null != T && (T = (0, a.jsxs)("div", {
    className: p.attachmentPreviewOverflow,
    children: [(0, a.jsx)(c.ZP, {
      mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
      width: 56,
      height: 56,
      children: T
    }), (0, a.jsxs)(o.Text, {
      className: p.overflowCount,
      variant: "text-xs/semibold",
      color: "text-default",
      children: ["+", S - 1]
    })]
  })), (0, a.jsxs)("div", {
    className: p.forwardPreview,
    children: [(0, a.jsxs)("div", {
      className: p.contentWrapper,
      children: [y && (0, a.jsx)(g.ZP, {
        className: i()(p.forwardPreviewMessage, S > 0 && p.hasAttachments),
        message: t,
        content: P,
        compact: b
      }), S > 0 && (0, a.jsxs)("div", {
        className: p.attachmentRow,
        children: [null != E && (0, a.jsx)(E, {
          size: "custom",
          width: y ? 18 : 20,
          color: o.TVs.colors.TEXT_LOW_CONTRAST
        }), null != j && (0, a.jsx)(o.Text, {
          variant: y ? "text-sm/medium" : "text-md/medium",
          color: "text-low-contrast",
          children: j
        })]
      })]
    }), T]
  })
}