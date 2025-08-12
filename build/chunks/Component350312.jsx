/** Chunk was on 32249 **/
/** chunk id: 350312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk754700 = require("./754700.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497505 = require("./497505.js"),
  Chunk720293 = require("./720293.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk807964 = require("./807964.js");

function p(e) {
  let {
    asset: t
  } = e;
  return null == t ? null : (0, r.jsx)("img", {
    src: t.url,
    alt: "",
    className: m.endScreenImageBackground
  })
}

function f(e) {
  let {
    quest: t,
    asset: n,
    sourceQuestContent: l
  } = e;
  return null == n ? null : (0, r.jsx)(d.A, {
    questOrQuests: t,
    questContent: c.jn.VIDEO_MODAL_END_CARD,
    sourceQuestContent: l,
    children: e => (0, r.jsx)("img", {
      ref: t => {
        e.current = t
      },
      src: n.url,
      alt: "Video thumbnail",
      className: m.endScreenCard
    })
  })
}

function v(e) {
  let {
    ctaBtnLabel: t,
    title: n,
    subtitle: l,
    onCTAClick: o
  } = e;
  return (0, r.jsxs)("div", {
    className: m.endScreenCtaContainer,
    children: [(0, r.jsx)(E, {
      title: n,
      subtitle: l
    }), (0, r.jsx)(g, {
      label: t,
      icon: s.d4D,
      onClick: o
    })]
  })
}

function E(e) {
  let {
    title: t,
    subtitle: n
  } = e;
  return (0, r.jsxs)("div", {
    className: m.endScreenCtaTitleContainer,
    children: [(0, r.jsx)(s.X6q, {
      variant: "heading-md/semibold",
      className: m.endScreenCtaTitle,
      children: t
    }), (0, r.jsx)(s.X6q, {
      variant: "heading-sm/normal",
      className: m.endScreenCtaSubtitle,
      children: n
    })]
  })
}

function g(e) {
  let {
    label: t,
    icon: n,
    onClick: o,
    className: a
  } = e, [c, u] = l.useState(false), d = () => {
    u(true)
  }, p = () => {
    u(false)
  };
  return (0, r.jsxs)(s.P3F, {
    className: i()(m.endScreenCtaBtn, m.accentOnHover, a),
    onMouseEnter: d,
    onMouseLeave: p,
    onFocus: d,
    onBlur: p,
    onClick: o,
    children: [(0, r.jsx)(s.X6q, {
      variant: "heading-md/semibold",
      className: m.endScreenCtaBtnTitle,
      children: t
    }), (0, r.jsx)(n, {
      size: "md",
      color: c ? s.TVs.colors.WHITE : "#B5BAC1",
      className: m.endScreenIcon
    })]
  })
}
let O = function(e) {
  let {
    quest: t,
    ctaBtnLabel: n,
    title: o,
    subtitle: i,
    onCTAClick: s,
    sourceQuestContent: c
  } = e, d = l.useMemo(() => (0, u.z0)(t, a.X.WATCH_VIDEO, u.n1.VIDEO, u.O.THUMBNAIL), [t]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(p, {
      asset: d
    }), (0, r.jsx)("div", {
      className: m.endScreenOverlay
    }), (0, r.jsxs)("div", {
      className: m.endScreenContainer,
      children: [(0, r.jsx)(f, {
        quest: t,
        asset: d,
        sourceQuestContent: c
      }), (0, r.jsx)(v, {
        title: o,
        subtitle: i,
        ctaBtnLabel: n,
        onCTAClick: s
      })]
    })]
  })
}