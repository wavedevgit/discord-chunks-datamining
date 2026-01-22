/** Chunk was on 43622 **/
/** chunk id: 980490, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => w
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk222713 = require("./222713.js"),
  Chunk57882 = require("./57882.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk352505 = require("./352505.js"),
  Chunk619517 = require("./619517.jsx"),
  Chunk448381 = require("./448381.js"),
  Chunk465364 = require("./465364.js"),
  Chunk291812 = require("./291812.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk53228 = require("./53228.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk622865 = require("./622865.js"),
  Chunk312396 = require("./312396.js");

function w(e) {
  var t, n, a, w, O, A;
  let {
    message: S,
    forwardOptions: T,
    channel: P
  } = e, k = x.hH.useSetting(), {
    attachments: R,
    embeds: D,
    hasContent: E,
    contentMessage: M
  } = (0, y.A)({
    message: S,
    channel: P,
    forwardOptions: T
  }), N = M.components.length > 0 && M.components[0].type === u.I5.CHECKPOINT_CARD ? M.components[0].checkpointData : null, I = c.f[null != (t = null == N ? true : N.cardId) ? t : 0], _ = (0, o.rdh)(I.primaryColor).hex(), F = m.m.useExperiment({
    location: "forward_preview"
  }).enabled, V = r.useMemo(() => E ? (0, p.Ay)(S, {
    formatInline: true,
    allowLinks: true,
    allowHeading: true,
    allowList: true,
    allowGameMentions: F,
    hideSimpleEmbedContent: false,
    contentMessage: M
  }).content : null, [M, E, S, F]), L = R.length, U = null, G = null, B = null;
  if (L > 0 || D.length > 0) {
    let e = (0, s.countBy)(R, e => (0, g.NI)(e, true)),
      t = null != (a = e.IMAGE) ? a : 0,
      n = null != (w = e.VIDEO) ? w : 0;
    t > 0 && n > 0 ? (U = v.intl.formatToPlainString(v.t.Lr0Top, {
      image_count: t,
      video_count: n
    }), G = o.sYc) : n > 0 ? (U = v.intl.formatToPlainString(v.t.SJ6pPX, {
      count: n
    }), G = o.SfG) : t > 0 ? (U = v.intl.formatToPlainString(v.t.h4pFfU, {
      count: t
    }), G = 1 === t ? o.xfq : o.sYc) : (U = v.intl.formatToPlainString(v.t["89ihS8"], {
      count: L
    }), G = o.PtA), n > 0 && L === n ? B = (0, l.jsxs)("div", {
      className: i()(j.cR, j.JZ),
      children: [(0, l.jsx)(f.Ay, {
        className: j.xn,
        src: R[0].proxy_url,
        width: 56,
        height: 56
      }), (0, l.jsx)(o.SfG, {
        className: j.uZ,
        size: "md",
        color: "white"
      })]
    }) : L > 0 ? B = (0, l.jsx)("div", {
      className: j.cR,
      children: (0, l.jsx)(f.Ay, {
        src: R[0].proxy_url,
        width: 56,
        height: 56
      })
    }) : (null == (A = D[0]) || null == (O = A.thumbnail) ? true : O.proxyURL) != null && (B = (0, l.jsx)("div", {
      className: j.cR,
      children: (0, l.jsx)(f.Ay, {
        src: D[0].thumbnail.proxyURL,
        width: 56,
        height: 56
      })
    }))
  }
  return L > 1 && null != B && (B = (0, l.jsxs)("div", {
    className: j.EW,
    children: [(0, l.jsx)(h.Ay, {
      mask: h.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
      width: 56,
      height: 56,
      children: B
    }), (0, l.jsxs)(o.Text, {
      className: j.mB,
      variant: "text-xs/semibold",
      color: "text-default",
      children: ["+", L - 1]
    })]
  })), (0, l.jsxs)("div", {
    className: j.sq,
    children: [(0, l.jsxs)("div", {
      className: j.FG,
      children: [null != N && (0, l.jsx)(o.Text, {
        variant: "text-md/medium",
        children: v.intl.string(C.default.goiR2u)
      }), E && (0, l.jsx)(b.Ay, {
        className: i()(j.vp, L > 0 && j.NL),
        message: S,
        content: V,
        compact: k
      }), L > 0 && (0, l.jsxs)("div", {
        className: j.kp,
        children: [null != G && (0, l.jsx)(G, {
          size: "custom",
          width: E ? 18 : 20,
          color: o.LU0.colors.TEXT_MUTED
        }), null != U && (0, l.jsx)(o.Text, {
          variant: E ? "text-sm/medium" : "text-md/medium",
          color: "text-muted",
          children: U
        })]
      })]
    }), B, null != N && (0, l.jsx)("div", {
      className: j.cR,
      children: (0, l.jsx)("img", {
        alt: "",
        style: {
          backgroundColor: _
        },
        width: 56,
        height: 56,
        src: (0, d.OW)(null != (n = N.cardId) ? n : 0)
      })
    })]
  })
}