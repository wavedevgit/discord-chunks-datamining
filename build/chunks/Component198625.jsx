/** Chunk was on 28636 **/
/** chunk id: 198625, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk280230 = require("./280230.js"),
  c = require.n(Chunk280230),
  Chunk397927 = require("./397927.js"),
  Chunk558179 = require("./558179.jsx"),
  Chunk151890 = require("./151890.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk191817 = require("./191817.js");
let m = c().parserFor(Chunk151890.A),
  b = c().reactFor(c().ruleOutput(Chunk151890.A, "react"));

function f(e) {
  let {
    description: t,
    supportsMarkdown: n
  } = e, [r, s] = a.useState(false), c = a.useRef(null);
  a.useEffect(() => {
    if (null == c.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, l;
      s((null != (e = null == (n = c.current) ? true : n.scrollHeight) ? e : 0) - (null != (t = null == (l = c.current) ? true : l.clientHeight) ? t : 0) > 1)
    });
    return e.observe(c.current), () => e.disconnect()
  }, []);
  let [u, p] = a.useState(false), f = a.useCallback(() => {
    p(e => !e)
  }, []);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      ref: c,
      className: i()({
        [h.mA]: !u,
        [h.ii]: !u && "Safari" === platform.name
      }),
      children: n ? (0, l.jsx)(d.A, {
        className: h.R4,
        parser: m,
        output: b,
        state: {
          allowLinks: true
        },
        children: t
      }) : (0, l.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: t
      })
    }), r || u ? (0, l.jsx)(g, {
      isShowingMore: u,
      onToggle: f
    }) : null]
  })
}

function g(e) {
  let {
    onToggle: t,
    isShowingMore: n
  } = e, r = a.useMemo(() => (0, l.jsxs)("div", {
    className: h.eR,
    children: [(0, l.jsx)(o.Text, {
      variant: "text-md/semibold",
      color: "interactive-text-default",
      children: n ? p.intl.string(p.t["vtfc4+"]) : p.intl.string(p.t.ZDRyuq)
    }), n ? (0, l.jsx)(o.tN5, {
      size: "md",
      color: "currentColor",
      className: h.ys
    }) : (0, l.jsx)(o.abt, {
      size: "md",
      color: "currentColor",
      className: h.ys
    })]
  }), [n]);
  return (0, l.jsxs)(o.DUT, {
    className: h.dO,
    onClick: t,
    children: [(0, l.jsx)("div", {
      className: h.yF
    }), r, (0, l.jsx)("div", {
      className: h.yF
    })]
  })
}
let x = function(e) {
  var t, n;
  let {
    application: r
  } = e, i = null == (t = r.directory_entry) ? true : t.detailed_description, s = null == (n = r.directory_entry) ? true : n.short_description, c = a.useMemo(() => null != i && i.length > 0 ? (0, l.jsx)(f, {
    description: i,
    supportsMarkdown: true
  }) : null != s && s.length > 0 ? (0, l.jsx)(f, {
    description: s,
    supportsMarkdown: false
  }) : null, [i, s]);
  return null == c ? null : (0, l.jsxs)("div", {
    className: h.l4,
    children: [(0, l.jsx)(o.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: p.intl.string(p.t.txraKS)
    }), c]
  })
}