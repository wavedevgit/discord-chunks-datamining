/** Chunk was on 33648 **/
/** chunk id: 646746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk830960 = require("./830960.js"),
  Chunk26118 = require("./26118.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk627050 = require("./627050.js"),
  Chunk124347 = require("./124347.jsx"),
  Chunk499376 = require("./499376.js"),
  Chunk937889 = require("./937889.js"),
  Chunk930282 = require("./930282.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk318616 = require("./318616.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk140939 = require("./140939.js"),
  Chunk698755 = require("./698755.js");

function O(e) {
  var t, n, r, O, j, T;
  let {
    message: _,
    forwardOptions: E,
    channel: P
  } = e, S = w.jU.useSetting(), {
    attachments: D,
    embeds: M,
    hasContent: I,
    contentMessage: R
  } = (0, b.c)({
    message: _,
    channel: P,
    forwardOptions: E
  }), A = R.components.length > 0 && R.components[0].type === u.re.CHECKPOINT_CARD ? R.components[0].checkpointData : null, N = c.F[null != (t = null == A ? true : A.cardId) ? t : 0], Z = (0, o.dQu)(N.primaryColor).hex(), k = m.d.useExperiment({
    location: "forward_preview"
  }).enabled, F = a.useMemo(() => I ? (0, p.ZP)(_, {
    formatInline: true,
    allowLinks: true,
    allowHeading: true,
    allowList: true,
    allowGameMentions: k,
    hideSimpleEmbedContent: false,
    contentMessage: R
  }).content : null, [R, I, _, k]), U = D.length, L = null, G = null, V = null;
  if (U > 0 || M.length > 0) {
    let e = (0, s.countBy)(D, e => (0, f.aw)(e, true)),
      t = null != (O = e.IMAGE) ? O : 0,
      a = null != (j = e.VIDEO) ? j : 0;
    t > 0 && a > 0 ? (L = x.intl.formatToPlainString(x.t.Lr0Top, {
      image_count: t,
      video_count: a
    }), G = o.Ka2) : a > 0 ? (L = x.intl.formatToPlainString(x.t.SJ6pPX, {
      count: a
    }), G = o.g8d) : t > 0 ? (L = x.intl.formatToPlainString(x.t.h4pFfU, {
      count: t
    }), G = 1 === t ? o.XBm : o.Ka2) : (L = x.intl.formatToPlainString(x.t["89ihS8"], {
      count: U
    }), G = o.Ujz), a > 0 && U === a ? V = (0, l.jsxs)("div", {
      className: i()(y.attachmentPreview, y.attachmentPreviewVideo),
      children: [(0, l.jsx)(g.ZP, {
        className: y.thumbnail,
        src: D[0].proxy_url,
        width: 56,
        height: 56
      }), (0, l.jsx)(o.g8d, {
        className: y.playIcon,
        size: "md",
        color: "white"
      })]
    }) : U > 0 ? V = (0, l.jsx)("div", {
      className: y.attachmentPreview,
      children: (0, l.jsx)(g.ZP, {
        src: D[0].proxy_url,
        width: 56,
        height: 56
      })
    }) : (null == (r = M[0]) || null == (n = r.thumbnail) ? true : n.proxyURL) != null && (V = (0, l.jsx)("div", {
      className: y.attachmentPreview,
      children: (0, l.jsx)(g.ZP, {
        src: M[0].thumbnail.proxyURL,
        width: 56,
        height: 56
      })
    }))
  }
  return U > 1 && null != V && (V = (0, l.jsxs)("div", {
    className: y.attachmentPreviewOverflow,
    children: [(0, l.jsx)(h.ZP, {
      mask: h.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
      width: 56,
      height: 56,
      children: V
    }), (0, l.jsxs)(o.Text, {
      className: y.overflowCount,
      variant: "text-xs/semibold",
      color: "text-default",
      children: ["+", U - 1]
    })]
  })), (0, l.jsxs)("div", {
    className: y.forwardPreview,
    children: [(0, l.jsxs)("div", {
      className: y.contentWrapper,
      children: [null != A && (0, l.jsx)(o.Text, {
        variant: "text-md/medium",
        children: x.intl.string(C.default.goiR2u)
      }), I && (0, l.jsx)(v.ZP, {
        className: i()(y.forwardPreviewMessage, U > 0 && y.hasAttachments),
        message: _,
        content: F,
        compact: S
      }), U > 0 && (0, l.jsxs)("div", {
        className: y.attachmentRow,
        children: [null != G && (0, l.jsx)(G, {
          size: "custom",
          width: I ? 18 : 20,
          color: o.TVs.colors.TEXT_LOW_CONTRAST
        }), null != L && (0, l.jsx)(o.Text, {
          variant: I ? "text-sm/medium" : "text-md/medium",
          color: "text-low-contrast",
          children: L
        })]
      })]
    }), V, null != A && (0, l.jsx)("div", {
      className: y.attachmentPreview,
      children: (0, l.jsx)("img", {
        alt: "",
        style: {
          backgroundColor: Z
        },
        width: 56,
        height: 56,
        src: (0, d.UN)(null != (T = A.cardId) ? T : 0)
      })
    })]
  })
}