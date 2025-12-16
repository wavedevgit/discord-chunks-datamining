/** Chunk was on 33648 **/
/** chunk id: 646746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => y
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
  Chunk638398 = require("./638398.js"),
  Chunk655428 = require("./655428.js");

function y(e) {
  var t, n, r, y, P, O;
  let {
    message: S,
    forwardOptions: T,
    channel: k
  } = e, Z = x.jU.useSetting(), {
    attachments: D,
    embeds: R,
    hasContent: E,
    contentMessage: _
  } = (0, b.c)({
    message: S,
    channel: k,
    forwardOptions: T
  }), M = _.components.length > 0 && _.components[0].type === u.re.CHECKPOINT_CARD ? _.components[0].checkpointData : null, N = c.F[null != (t = null == M ? true : M.cardId) ? t : 0], I = (0, o.dQu)(N.primaryColor).hex(), F = m.d.useExperiment({
    location: "forward_preview"
  }).enabled, A = a.useMemo(() => E ? (0, p.ZP)(S, {
    formatInline: true,
    allowLinks: true,
    allowHeading: true,
    allowList: true,
    allowGameMentions: F,
    hideSimpleEmbedContent: false,
    contentMessage: _
  }).content : null, [_, E, S, F]), V = D.length, L = null, U = null, G = null;
  if (V > 0 || R.length > 0) {
    let e = (0, s.countBy)(D, e => (0, f.aw)(e, true)),
      t = null != (y = e.IMAGE) ? y : 0,
      a = null != (P = e.VIDEO) ? P : 0;
    t > 0 && a > 0 ? (L = w.intl.formatToPlainString(w.t.Lr0Top, {
      image_count: t,
      video_count: a
    }), U = o.Ka2) : a > 0 ? (L = w.intl.formatToPlainString(w.t.SJ6pPX, {
      count: a
    }), U = o.g8d) : t > 0 ? (L = w.intl.formatToPlainString(w.t.h4pFfU, {
      count: t
    }), U = 1 === t ? o.XBm : o.Ka2) : (L = w.intl.formatToPlainString(w.t["89ihS8"], {
      count: V
    }), U = o.Ujz), a > 0 && V === a ? G = (0, l.jsxs)("div", {
      className: i()(C.attachmentPreview, C.attachmentPreviewVideo),
      children: [(0, l.jsx)(g.ZP, {
        className: C.thumbnail,
        src: D[0].proxy_url,
        width: 56,
        height: 56
      }), (0, l.jsx)(o.g8d, {
        className: C.playIcon,
        size: "md",
        color: "white"
      })]
    }) : V > 0 ? G = (0, l.jsx)("div", {
      className: C.attachmentPreview,
      children: (0, l.jsx)(g.ZP, {
        src: D[0].proxy_url,
        width: 56,
        height: 56
      })
    }) : (null == (r = R[0]) || null == (n = r.thumbnail) ? true : n.proxyURL) != null && (G = (0, l.jsx)("div", {
      className: C.attachmentPreview,
      children: (0, l.jsx)(g.ZP, {
        src: R[0].thumbnail.proxyURL,
        width: 56,
        height: 56
      })
    }))
  }
  return V > 1 && null != G && (G = (0, l.jsxs)("div", {
    className: C.attachmentPreviewOverflow,
    children: [(0, l.jsx)(h.ZP, {
      mask: h.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
      width: 56,
      height: 56,
      children: G
    }), (0, l.jsxs)(o.Text, {
      className: C.overflowCount,
      variant: "text-xs/semibold",
      color: "text-default",
      children: ["+", V - 1]
    })]
  })), (0, l.jsxs)("div", {
    className: C.forwardPreview,
    children: [(0, l.jsxs)("div", {
      className: C.contentWrapper,
      children: [null != M && (0, l.jsx)(o.Text, {
        variant: "text-md/medium",
        children: w.intl.string(j.default.goiR2u)
      }), E && (0, l.jsx)(v.ZP, {
        className: i()(C.forwardPreviewMessage, V > 0 && C.hasAttachments),
        message: S,
        content: A,
        compact: Z
      }), V > 0 && (0, l.jsxs)("div", {
        className: C.attachmentRow,
        children: [null != U && (0, l.jsx)(U, {
          size: "custom",
          width: E ? 18 : 20,
          color: o.TVs.colors.TEXT_MUTED
        }), null != L && (0, l.jsx)(o.Text, {
          variant: E ? "text-sm/medium" : "text-md/medium",
          color: "text-muted",
          children: L
        })]
      })]
    }), G, null != M && (0, l.jsx)("div", {
      className: C.attachmentPreview,
      children: (0, l.jsx)("img", {
        alt: "",
        style: {
          backgroundColor: I
        },
        width: 56,
        height: 56,
        src: (0, d.UN)(null != (O = M.cardId) ? O : 0)
      })
    })]
  })
}