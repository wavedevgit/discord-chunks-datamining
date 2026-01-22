/** Chunk was on 33563 **/
/** chunk id: 206111, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  l: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk217483 = require("./217483.js");

function o(e) {
  let {
    title: n,
    subtitle: t,
    iconSrc: o,
    backgroundSrc: u,
    animatedBackgroundSrc: a,
    prefersReducedMotion: c = true
  } = e, d = l.useMemo(() => {
    let e = null != u ? u : o;
    if (null != e) return {
      "--custom-background-url": "url(".concat(e.toString(), ")")
    }
  }, [u, o]), p = l.useMemo(() => {
    if (null == u) return;
    let e = {
      "--custom-background-static": "url(".concat(u.toString())
    };
    return c || null == a || (e["--custom-background-animated"] = "url(".concat(a.toString(), ")")), e
  }, [a, u, c]);
  return (0, r.jsxs)("div", {
    className: s.iE,
    children: [(0, r.jsx)("div", {
      className: s.Tp,
      style: d
    }), (0, r.jsxs)("div", {
      className: s.Qs,
      children: [null != o && (0, r.jsx)("div", {
        className: s.Kk,
        children: (0, r.jsx)("img", {
          src: o.toString(),
          alt: ""
        })
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(i.EYj, {
          variant: "heading-xl/bold",
          tag: "div",
          children: n
        }), null != t && (0, r.jsxs)(i.EYj, {
          variant: "text-sm/normal",
          children: ["“", t, "”"]
        })]
      })]
    }), null != u ? (0, r.jsx)("div", {
      className: s.Sl,
      style: p
    }) : null]
  })
}