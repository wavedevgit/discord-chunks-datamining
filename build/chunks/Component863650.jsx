/** Chunk was on 77803 **/
/** chunk id: 863650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk797291 = require("./797291.js");

function s(e) {
  let {
    title: t,
    subtitle: n,
    iconSrc: s,
    backgroundSrc: u,
    animatedBackgroundSrc: a,
    prefersReducedMotion: c = true
  } = e, d = i.useMemo(() => {
    let e = null != u ? u : s;
    if (null != e) return {
      "--custom-background-url": "url(".concat(e.toString(), ")")
    }
  }, [u, s]), p = i.useMemo(() => {
    if (null == u) return;
    let e = {
      "--custom-background-static": "url(".concat(u.toString())
    };
    return c || null == a || (e["--custom-background-animated"] = "url(".concat(a.toString(), ")")), e
  }, [a, u, c]);
  return (0, r.jsxs)("div", {
    className: o.wrapper,
    children: [(0, r.jsx)("div", {
      className: o.background,
      style: d
    }), (0, r.jsxs)("div", {
      className: o.content,
      children: [null != s && (0, r.jsx)("div", {
        className: o.icon,
        children: (0, r.jsx)("img", {
          src: s.toString(),
          alt: ""
        })
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(l.xvT, {
          variant: "heading-xl/bold",
          tag: "div",
          children: t
        }), null != n && (0, r.jsxs)(l.xvT, {
          variant: "text-sm/normal",
          children: ["“", n, "”"]
        })]
      })]
    }), null != u ? (0, r.jsx)("div", {
      className: o.image,
      style: p
    }) : null]
  })
}