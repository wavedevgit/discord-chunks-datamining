/** Chunk was on 32249 **/
/** chunk id: 350312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk754700 = require("./754700.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497505 = require("./497505.js"),
  Chunk720293 = require("./720293.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk936674 = require("./936674.js");

function f(e) {
  let {
    asset: t
  } = e;
  return null == t ? null : (0, r.jsx)("img", {
    src: t.url,
    alt: "",
    className: m.endScreenImageBackground
  })
}

function p(e) {
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
    children: [(0, r.jsx)(g, {
      title: n,
      subtitle: l
    }), (0, r.jsx)(E, {
      label: t,
      icon: s.d4D,
      onClick: o
    })]
  })
}

function g(e) {
  let {
    title: t,
    subtitle: n
  } = e;
  return (0, r.jsxs)("div", {
    className: m.endScreenCtaTitleContainer,
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-md/semibold",
      className: m.endScreenCtaTitle,
      children: t
    }), (0, r.jsx)(s.Heading, {
      variant: "heading-sm/normal",
      className: m.endScreenCtaSubtitle,
      children: n
    })]
  })
}

function E(e) {
  let {
    label: t,
    icon: n,
    onClick: o,
    className: a
  } = e, [c, u] = l.useState(false), d = () => {
    u(true)
  }, f = () => {
    u(false)
  };
  return (0, r.jsxs)(s.P3F, {
    className: i()(m.endScreenCtaBtn, m.accentOnHover, a),
    onMouseEnter: d,
    onMouseLeave: f,
    onFocus: d,
    onBlur: f,
    onClick: o,
    children: [(0, r.jsx)(s.Heading, {
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
let b = function(e) {
  let {
    quest: t,
    ctaBtnLabel: n,
    title: o,
    subtitle: i,
    onCTAClick: s,
    sourceQuestContent: c
  } = e, d = l.useMemo(() => (0, u.z0)(t, a.X.WATCH_VIDEO, u.n1.VIDEO, u.O.THUMBNAIL), [t]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f, {
      asset: d
    }), (0, r.jsx)("div", {
      className: m.endScreenOverlay
    }), (0, r.jsxs)("div", {
      className: m.endScreenContainer,
      children: [(0, r.jsx)(p, {
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