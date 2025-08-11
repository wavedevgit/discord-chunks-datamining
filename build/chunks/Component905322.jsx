/** Chunk was on 77803 **/
/** chunk id: 905322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk777207 = require("./777207.jsx"),
  Chunk210523 = require("./210523.js");

function s(e) {
  let {
    title: t,
    subtitle: n,
    iconSrc: s,
    backgroundSrc: a,
    animatedBackgroundSrc: u,
    prefersReducedMotion: c = true
  } = e, d = i.useMemo(() => {
    let e = null != a ? a : s;
    if (null != e) return {
      "--custom-background-url": "url(".concat(e.toString(), ")")
    }
  }, [a, s]), p = i.useMemo(() => {
    if (null == a) return;
    let e = {
      "--custom-background-static": "url(".concat(a.toString())
    };
    return c || null == u || (e["--custom-background-animated"] = "url(".concat(u.toString(), ")")), e
  }, [u, a, c]);
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
        children: [(0, r.jsx)(l.x, {
          variant: "heading-xl/bold",
          tag: "div",
          children: t
        }), null != n && (0, r.jsxs)(l.x, {
          variant: "text-sm/normal",
          children: ["“", n, "”"]
        })]
      })]
    }), null != a ? (0, r.jsx)("div", {
      className: o.image,
      style: p
    }) : null]
  })
}