/** Chunk was on web.js **/
/** chunk id: 795982, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => L
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

function w() {
  return (0, r.jsxs)("div", {
    className: R.N1,
    children: [(0, r.jsx)(C.A, {
      size: "xs",
      className: R.nr,
      color: l.A.colors.TEXT_MUTED
    }), (0, r.jsx)(a.EYj, {
      className: R.TK,
      variant: "text-sm/semibold",
      color: "text-muted",
      children: N.intl.string(N.t.ToyvLk)
    })]
  })
}

function P(e) {
  let {
    message: t,
    snapshot: n,
    index: u
  } = e, f = i.useMemo(() => new S.j(t, n, u), [t, n, u]), p = (0, s.bG)([E.A, v.default, A.A, O.A, y.A, d.A], () => f.getForwardInfo(E.A, v.default, A.A, O.A, y.A, d.A).footerInfo, [f], o.A), _ = (0, s.bG)([E.A], () => {
    var e;
    return E.A.getChannel(null == (e = t.messageReference) ? true : e.channel_id)
  }), h = i.useCallback(() => {
    (0, I.A)(t)
  }, [t]);
  return null == p ? null : (0, r.jsxs)(c.DUT, {
    className: R.xQ,
    onClick: h,
    "aria-label": p.accessibilityLabel,
    children: [null != p.originIconUrl ? (0, r.jsx)("img", {
      className: R.yl,
      src: p.originIconUrl,
      alt: ""
    }) : null, null == p.originIconUrl && (null == _ ? true : _.isThread()) ? (0, r.jsx)(D, {
      channel: _
    }) : null, (0, r.jsx)(a.EYj, {
      className: R.PJ,
      variant: "text-sm/medium",
      color: "none",
      children: "".concat(p.originLabel, "  •  ").concat(p.timestampLabel)
    }), (0, r.jsx)(c._BQ, {
      size: "xxs",
      color: l.A.colors.TEXT_MUTED
    })]
  })
}

function D(e) {
  let {
    channel: t
  } = e, n = (0, m.Vp)({
    location: "ForwardFooter"
  }), a = i.useMemo(() => (0, u.gU)(t), [t]);
  return n.enabled && null != a ? (0, r.jsx)(a, {
    className: R.yl,
    size: "xs",
    color: "currentColor"
  }) : null
}

function x(e) {
  var t;
  let {
    message: n,
    snapshot: a,
    index: o
  } = e, l = i.useMemo(() => (0, T.A)(n, a), [n, a]), c = g.hD.useSetting(), u = g.rs.useSetting(), d = c && u, m = (0, s.bG)([b.A], () => b.A.isDeveloper), y = (0, f.S)((null != (t = l.editedTimestamp) ? t : l.timestamp).valueOf()), {
    content: O,
    hasSpoilerEmbeds: A,
    hasBailedAst: v
  } = (0, _.A)(l, {
    hideSimpleEmbedContent: d,
    isInteracting: false,
    formatInline: false,
    allowList: y,
    allowHeading: y,
    allowLinks: true,
    allowDevLinks: m,
    previewLinkTarget: true
  }), S = (0, s.bG)([E.A], () => E.A.getChannel(n.channel_id)), I = g.hH.useSetting();
  return null == S ? null : (0, r.jsxs)("div", {
    className: R.kL,
    children: [(0, r.jsx)("div", {
      className: R.hD
    }), (0, r.jsxs)("div", {
      className: R.Qs,
      children: [(0, r.jsx)(w, {}), (0, r.jsx)(p.Ay, {
        message: l,
        content: O,
        compact: I
      }), (0, h.A)({
        channelMessageProps: {
          message: l,
          channel: S,
          compact: I
        },
        hasSpoilerEmbeds: A,
        hasBailedAst: v,
        isInteracting: false,
        isMessageSnapshot: true,
        renderThreadAccessory: false
      }), (0, r.jsx)(P, {
        message: n,
        snapshot: a,
        index: o
      })]
    })]
  }, o)
}

function L(e) {
  let {
    message: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.messageSnapshots.map((e, n) => (0, r.jsx)(x, {
      message: t,
      snapshot: e,
      index: n
    }, n))
  })
}