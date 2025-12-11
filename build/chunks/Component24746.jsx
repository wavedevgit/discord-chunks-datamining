/** Chunk was on 92504 **/
/** chunk id: 24746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk159635 = require("./159635.js"),
  o = require.n(Chunk159635),
  Chunk481060 = require("./481060.js"),
  Chunk241209 = require("./241209.jsx"),
  Chunk547563 = require("./547563.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk300449 = require("./300449.js");
let h = o().parserFor(Chunk547563.Z),
  f = o().reactFor(o().ruleOutput(Chunk547563.Z, "react"));

function b(e) {
  let {
    description: t,
    supportsMarkdown: n
  } = e, [i, s] = r.useState(false), o = r.useRef(null);
  r.useEffect(() => {
    if (null == o.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, a;
      s((null != (n = null == (e = o.current) ? true : e.scrollHeight) ? n : 0) - (null != (a = null == (t = o.current) ? true : t.clientHeight) ? a : 0) > 1)
    });
    return e.observe(o.current), () => e.disconnect()
  }, []);
  let [u, p] = r.useState(false), b = r.useCallback(() => {
    p(e => !e)
  }, []);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ref: o,
      className: l()({
        [m.descriptionClamp]: !u,
        [m.descriptionClampSafari]: !u && "Safari" === platform.name
      }),
      children: n ? (0, a.jsx)(d.Z, {
        className: m.detailedDescription,
        parser: h,
        output: f,
        state: {
          allowLinks: true
        },
        children: t
      }) : (0, a.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: t
      })
    }), i || u ? (0, a.jsx)(g, {
      isShowingMore: u,
      onToggle: b
    }) : null]
  })
}

function g(e) {
  let {
    onToggle: t,
    isShowingMore: n
  } = e, i = r.useMemo(() => (0, a.jsxs)("div", {
    className: m.showMoreContent,
    children: [(0, a.jsx)(c.Text, {
      variant: "text-md/semibold",
      color: "interactive-text-default",
      children: n ? p.intl.string(p.t["vtfc4+"]) : p.intl.string(p.t.ZDRyuq)
    }), n ? (0, a.jsx)(c.u04, {
      size: "md",
      color: "currentColor",
      className: m.showMoreButtonIcon
    }) : (0, a.jsx)(c.CJ0, {
      size: "md",
      color: "currentColor",
      className: m.showMoreButtonIcon
    })]
  }), [n]);
  return (0, a.jsxs)(c.P3F, {
    className: m.showMoreButton,
    onClick: t,
    children: [(0, a.jsx)("div", {
      className: m.divider
    }), i, (0, a.jsx)("div", {
      className: m.divider
    })]
  })
}
let x = function(e) {
  var t, n;
  let {
    application: i
  } = e, l = null == (t = i.directory_entry) ? true : t.detailed_description, s = null == (n = i.directory_entry) ? true : n.short_description, o = r.useMemo(() => null != l && l.length > 0 ? (0, a.jsx)(b, {
    description: l,
    supportsMarkdown: true
  }) : null != s && s.length > 0 ? (0, a.jsx)(b, {
    description: s,
    supportsMarkdown: false
  }) : null, [l, s]);
  return null == o ? null : (0, a.jsxs)("div", {
    className: m.overviewContainer,
    children: [(0, a.jsx)(c.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: p.intl.string(p.t.txraKS)
    }), o]
  })
}