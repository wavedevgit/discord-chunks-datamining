/** Chunk was on 69844 **/
/** chunk id: 24746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk159635 = require("./159635.js"),
  o = require.n(Chunk159635),
  Chunk481060 = require("./481060.js"),
  Chunk241209 = require("./241209.jsx"),
  Chunk547563 = require("./547563.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk412850 = require("./412850.js");
let h = o().parserFor(Chunk547563.Z),
  g = o().reactFor(o().ruleOutput(Chunk547563.Z, "react"));

function _(e) {
  let {
    description: t,
    supportsMarkdown: n
  } = e, [i, s] = a.useState(false), o = a.useRef(null);
  a.useEffect(() => {
    if (null == o.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, r;
      s((null != (n = null == (e = o.current) ? true : e.scrollHeight) ? n : 0) - (null != (r = null == (t = o.current) ? true : t.clientHeight) ? r : 0) > 1)
    });
    return e.observe(o.current), () => e.disconnect()
  }, []);
  let [u, p] = a.useState(false), _ = a.useCallback(() => {
    p(e => !e)
  }, []);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: o,
      className: l()({
        [m.descriptionClamp]: !u,
        [m.descriptionClampSafari]: !u && "Safari" === platform.name
      }),
      children: n ? (0, r.jsx)(d.Z, {
        className: m.detailedDescription,
        parser: h,
        output: g,
        state: {
          allowLinks: true
        },
        children: t
      }) : (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: t
      })
    }), i || u ? (0, r.jsx)(f, {
      isShowingMore: u,
      onToggle: _
    }) : null]
  })
}

function f(e) {
  let {
    onToggle: t,
    isShowingMore: n
  } = e, i = a.useMemo(() => (0, r.jsxs)("div", {
    className: m.showMoreContent,
    children: [(0, r.jsx)(c.Text, {
      variant: "text-md/semibold",
      color: "interactive-normal",
      children: n ? p.intl.string(p.t["vtfc4+"]) : p.intl.string(p.t.ZDRyuq)
    }), n ? (0, r.jsx)(c.u04, {
      size: "md",
      color: "currentColor",
      className: m.showMoreButtonIcon
    }) : (0, r.jsx)(c.CJ0, {
      size: "md",
      color: "currentColor",
      className: m.showMoreButtonIcon
    })]
  }), [n]);
  return (0, r.jsxs)(c.P3F, {
    className: m.showMoreButton,
    onClick: t,
    children: [(0, r.jsx)("div", {
      className: m.divider
    }), i, (0, r.jsx)("div", {
      className: m.divider
    })]
  })
}
let b = function(e) {
  var t, n;
  let {
    application: i
  } = e, l = null == (t = i.directory_entry) ? true : t.detailed_description, s = null == (n = i.directory_entry) ? true : n.short_description, o = a.useMemo(() => null != l && l.length > 0 ? (0, r.jsx)(_, {
    description: l,
    supportsMarkdown: true
  }) : null != s && s.length > 0 ? (0, r.jsx)(_, {
    description: s,
    supportsMarkdown: false
  }) : null, [l, s]);
  return null == o ? null : (0, r.jsxs)("div", {
    className: m.overviewContainer,
    children: [(0, r.jsx)(c.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: p.intl.string(p.t.txraKS)
    }), o]
  })
}