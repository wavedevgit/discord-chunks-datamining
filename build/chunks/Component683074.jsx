/** Chunk was on 77803 **/
/** chunk id: 683074, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  j: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk734837 = require("./734837.js");

function o(e) {
  let {
    title: n,
    subtitle: t,
    iconSrc: o,
    backgroundSrc: u,
    animatedBackgroundSrc: a,
    prefersReducedMotion: c = true
  } = e, d = i.useMemo(() => {
    let e = null != u ? u : o;
    if (null != e) return {
      "--custom-background-url": "url(".concat(e.toString(), ")")
    }
  }, [u, o]), p = i.useMemo(() => {
    if (null == u) return;
    let e = {
      "--custom-background-static": "url(".concat(u.toString())
    };
    return c || null == a || (e["--custom-background-animated"] = "url(".concat(a.toString(), ")")), e
  }, [a, u, c]);
  return (0, r.jsxs)("div", {
    className: s.wrapper,
    children: [(0, r.jsx)("div", {
      className: s.background,
      style: d
    }), (0, r.jsxs)("div", {
      className: s.content,
      children: [null != o && (0, r.jsx)("div", {
        className: s.icon,
        children: (0, r.jsx)("img", {
          src: o.toString(),
          alt: ""
        })
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(l.xvT, {
          variant: "heading-xl/bold",
          tag: "div",
          children: n
        }), null != t && (0, r.jsxs)(l.xvT, {
          variant: "text-sm/normal",
          children: ["“", t, "”"]
        })]
      })]
    }), null != u ? (0, r.jsx)("div", {
      className: s.image,
      style: p
    }) : null]
  })
}