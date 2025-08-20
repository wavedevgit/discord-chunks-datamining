/** Chunk was on 32249 **/
/** chunk id: 350312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk754700 = require("./754700.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497505 = require("./497505.js"),
  Chunk720293 = require("./720293.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk524953 = require("./524953.js");

function m(e) {
  let {
    asset: t
  } = e;
  return null == t ? null : (0, r.jsx)("img", {
    src: t.url,
    alt: "",
    className: f.endScreenImageBackground
  })
}

function p(e) {
  let {
    quest: t,
    asset: n,
    sourceQuestContent: o
  } = e;
  return null == n ? null : (0, r.jsx)(d.A, {
    questOrQuests: t,
    questContent: c.jn.VIDEO_MODAL_END_CARD,
    sourceQuestContent: o,
    children: e => (0, r.jsx)("img", {
      ref: t => {
        e.current = t
      },
      src: n.url,
      alt: "Video thumbnail",
      className: f.endScreenCard
    })
  })
}

function v(e) {
  let {
    ctaBtnLabel: t,
    title: n,
    subtitle: o,
    onCTAClick: l
  } = e;
  return (0, r.jsxs)("div", {
    className: f.endScreenCtaContainer,
    children: [(0, r.jsx)(C, {
      title: n,
      subtitle: o
    }), (0, r.jsx)(E, {
      label: t,
      icon: s.d4D,
      onClick: l
    })]
  })
}

function C(e) {
  let {
    title: t,
    subtitle: n
  } = e;
  return (0, r.jsxs)("div", {
    className: f.endScreenCtaTitleContainer,
    children: [(0, r.jsx)(s.X6q, {
      variant: "heading-md/semibold",
      className: f.endScreenCtaTitle,
      children: t
    }), (0, r.jsx)(s.X6q, {
      variant: "heading-sm/normal",
      className: f.endScreenCtaSubtitle,
      children: n
    })]
  })
}

function E(e) {
  let {
    label: t,
    icon: n,
    onClick: l,
    className: i
  } = e, [c, u] = o.useState(false), d = () => {
    u(true)
  }, m = () => {
    u(false)
  };
  return (0, r.jsxs)(s.P3F, {
    className: a()(f.endScreenCtaBtn, f.accentOnHover, i),
    onMouseEnter: d,
    onMouseLeave: m,
    onFocus: d,
    onBlur: m,
    onClick: l,
    children: [(0, r.jsx)(s.X6q, {
      variant: "heading-md/semibold",
      className: f.endScreenCtaBtnTitle,
      children: t
    }), (0, r.jsx)(n, {
      size: "md",
      color: c ? s.TVs.colors.WHITE : "#B5BAC1",
      className: f.endScreenIcon
    })]
  })
}
let _ = function(e) {
  let {
    quest: t,
    ctaBtnLabel: n,
    title: l,
    subtitle: a,
    onCTAClick: s,
    sourceQuestContent: c
  } = e, d = o.useMemo(() => (0, u.z0)(t, i.X.WATCH_VIDEO, u.n1.VIDEO, u.O.THUMBNAIL), [t]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m, {
      asset: d
    }), (0, r.jsx)("div", {
      className: f.endScreenOverlay
    }), (0, r.jsxs)("div", {
      className: f.endScreenContainer,
      children: [(0, r.jsx)(p, {
        quest: t,
        asset: d,
        sourceQuestContent: c
      }), (0, r.jsx)(v, {
        title: l,
        subtitle: a,
        ctaBtnLabel: n,
        onCTAClick: s
      })]
    })]
  })
}