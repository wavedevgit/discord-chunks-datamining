/** Chunk was on 64935 **/
/** chunk id: 795982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk52133 = require("./52133.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk713654 = require("./713654.js"),
  Chunk958340 = require("./958340.js"),
  Chunk384231 = require("./384231.js"),
  Chunk291812 = require("./291812.jsx"),
  Chunk538355 = require("./538355.jsx"),
  Chunk699352 = require("./699352.jsx"),
  Chunk8455 = require("./8455.js"),
  Chunk253932 = require("./253932.js"),
  Chunk734057 = require("./734057.js"),
  Chunk540999 = require("./540999.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk862804 = require("./862804.js"),
  Chunk627950 = require("./627950.js"),
  Chunk387408 = require("./387408.js"),
  Chunk427209 = require("./427209.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk772004 = require("./772004.js");

function N() {
  return (0, r.jsxs)("div", {
    className: T.N1,
    children: [(0, r.jsx)(I.A, {
      size: "xs",
      className: T.nr,
      color: o.A.colors.TEXT_MUTED
    }), (0, r.jsx)(l.EYj, {
      className: T.TK,
      variant: "text-sm/semibold",
      color: "text-muted",
      children: S.intl.string(S.t.ToyvLk)
    })]
  })
}

function P(e) {
  let {
    message: t,
    snapshot: n,
    index: u
  } = e, p = i.useMemo(() => new E.j(t, n, u), [t, n, u]), m = (0, a.bG)([b.A, x.default, O.A, v.A, A.A, d.A], () => p.getForwardInfo(b.A, x.default, O.A, v.A, A.A, d.A).footerInfo, [p], s.A), f = (0, a.bG)([b.A], () => {
    var e;
    return b.A.getChannel(null == (e = t.messageReference) ? true : e.channel_id)
  }), g = i.useCallback(() => {
    (0, j.A)(t)
  }, [t]);
  return null == m ? null : (0, r.jsxs)(c.DUT, {
    className: T.xQ,
    onClick: g,
    "aria-label": m.accessibilityLabel,
    children: [null != m.originIconUrl ? (0, r.jsx)("img", {
      className: T.yl,
      src: m.originIconUrl,
      alt: ""
    }) : null, null == m.originIconUrl && (null == f ? true : f.isThread()) ? (0, r.jsx)(w, {
      channel: f
    }) : null, (0, r.jsx)(l.EYj, {
      className: T.PJ,
      variant: "text-sm/medium",
      color: "none",
      children: "".concat(m.originLabel, "  •  ").concat(m.timestampLabel)
    }), (0, r.jsx)(c._BQ, {
      size: "xxs",
      color: o.A.colors.TEXT_MUTED
    })]
  })
}

function w(e) {
  let {
    channel: t
  } = e, n = (0, _.Vp)({
    location: "ForwardFooter"
  }), l = i.useMemo(() => (0, u.gU)(t), [t]);
  return n.enabled && null != l ? (0, r.jsx)(l, {
    className: T.yl,
    size: "xs",
    color: "currentColor"
  }) : null
}

function R(e) {
  var t;
  let {
    message: n,
    snapshot: l,
    index: s
  } = e, o = i.useMemo(() => (0, C.A)(n, l), [n, l]), c = h.hD.useSetting(), u = h.rs.useSetting(), d = (0, a.bG)([y.A], () => y.A.isDeveloper), _ = (0, p.S)((null != (t = o.editedTimestamp) ? t : o.timestamp).valueOf()), {
    content: A,
    hasSpoilerEmbeds: v,
    hasBailedAst: O
  } = (0, f.A)(o, {
    hideSimpleEmbedContent: c && u,
    isInteracting: false,
    formatInline: false,
    allowList: _,
    allowHeading: _,
    allowLinks: true,
    allowDevLinks: d,
    previewLinkTarget: true
  }), x = (0, a.bG)([b.A], () => b.A.getChannel(n.channel_id)), E = h.hH.useSetting();
  return null == x ? null : (0, r.jsxs)("div", {
    className: T.kL,
    children: [(0, r.jsx)("div", {
      className: T.hD
    }), (0, r.jsxs)("div", {
      className: T.Qs,
      children: [(0, r.jsx)(N, {}), (0, r.jsx)(m.Ay, {
        message: o,
        content: A,
        compact: E
      }), (0, g.A)({
        channelMessageProps: {
          message: o,
          channel: x,
          compact: E
        },
        hasSpoilerEmbeds: v,
        hasBailedAst: O,
        isInteracting: false,
        isMessageSnapshot: true,
        renderThreadAccessory: false
      }), (0, r.jsx)(P, {
        message: n,
        snapshot: l,
        index: s
      })]
    })]
  }, s)
}

function D(e) {
  let {
    message: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.messageSnapshots.map((e, n) => (0, r.jsx)(R, {
      message: t,
      snapshot: e,
      index: n
    }, n))
  })
}