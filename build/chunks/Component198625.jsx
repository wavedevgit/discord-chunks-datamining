/** Chunk was on 28636 **/
/** chunk id: 198625, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk791332 = require("./791332.js"),
  o = require.n(Chunk791332),
  Chunk397927 = require("./397927.js"),
  Chunk558179 = require("./558179.jsx"),
  Chunk151890 = require("./151890.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk191817 = require("./191817.js");
let m = o().parserFor(Chunk151890.A),
  g = o().reactFor(o().ruleOutput(Chunk151890.A, "react"));

function _(e) {
  let {
    description: t,
    supportsMarkdown: n
  } = e, [i, s] = l.useState(false), o = l.useRef(null);
  l.useEffect(() => {
    if (null == o.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, r;
      s((null != (e = null == (n = o.current) ? true : n.scrollHeight) ? e : 0) - (null != (t = null == (r = o.current) ? true : r.clientHeight) ? t : 0) > 1)
    });
    return e.observe(o.current), () => e.disconnect()
  }, []);
  let [u, p] = l.useState(false), _ = l.useCallback(() => {
    p(e => !e)
  }, []);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: o,
      className: a()({
        [h.mA]: !u,
        [h.ii]: !u && "Safari" === platform.name
      }),
      children: n ? (0, r.jsx)(d.A, {
        className: h.R4,
        parser: m,
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
    }), i || u ? (0, r.jsx)(b, {
      isShowingMore: u,
      onToggle: _
    }) : null]
  })
}

function b(e) {
  let {
    onToggle: t,
    isShowingMore: n
  } = e, i = l.useMemo(() => (0, r.jsxs)("div", {
    className: h.eR,
    children: [(0, r.jsx)(c.Text, {
      variant: "text-md/semibold",
      color: "interactive-text-default",
      children: n ? p.intl.string(p.t["vtfc4+"]) : p.intl.string(p.t.ZDRyuq)
    }), n ? (0, r.jsx)(c.tN5, {
      size: "md",
      color: "currentColor",
      className: h.ys
    }) : (0, r.jsx)(c.abt, {
      size: "md",
      color: "currentColor",
      className: h.ys
    })]
  }), [n]);
  return (0, r.jsxs)(c.DUT, {
    className: h.dO,
    onClick: t,
    children: [(0, r.jsx)("div", {
      className: h.yF
    }), i, (0, r.jsx)("div", {
      className: h.yF
    })]
  })
}
let f = function(e) {
  var t, n;
  let {
    application: i
  } = e, a = null == (t = i.directory_entry) ? true : t.detailed_description, s = null == (n = i.directory_entry) ? true : n.short_description, o = l.useMemo(() => null != a && a.length > 0 ? (0, r.jsx)(_, {
    description: a,
    supportsMarkdown: true
  }) : null != s && s.length > 0 ? (0, r.jsx)(_, {
    description: s,
    supportsMarkdown: false
  }) : null, [a, s]);
  return null == o ? null : (0, r.jsxs)("div", {
    className: h.l4,
    children: [(0, r.jsx)(c.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: p.intl.string(p.t.txraKS)
    }), o]
  })
}