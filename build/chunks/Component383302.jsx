/** Chunk was on 86142 **/
/** chunk id: 383302, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => d
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk860689 = require("./860689.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk936528 = require("./936528.js");
let d = e => {
  let {
    guild: t,
    onlineCount: n
  } = e;
  if (null == t) return null;
  let d = a.DY(t),
    {
      name: u,
      description: h
    } = d;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-md/normal",
      color: "text-muted",
      className: c.CT,
      children: o.intl.string(o.t.Eabu1z)
    }), (0, r.jsxs)("div", {
      className: c.EB,
      children: [(0, r.jsx)(s.Ay, {
        mask: s.Ay.Masks.SQUIRCLE,
        width: 40,
        height: 40,
        children: (0, r.jsx)(l.A, {
          guild: d,
          size: l.A.Sizes.MEDIUM,
          active: true
        })
      }), (0, r.jsxs)("div", {
        className: c.OA,
        children: [(0, r.jsx)(i.Heading, {
          variant: "heading-sm/semibold",
          children: u
        }), (0, r.jsxs)("div", {
          className: c.aH,
          children: [(0, r.jsx)("div", {
            className: c.Om
          }), null != n && n > 0 ? (0, r.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: o.intl.format(o.t["LC+S+m"], {
              membersOnline: n
            })
          }) : null]
        })]
      })]
    }), null != h && "" !== h && (0, r.jsx)(i.Text, {
      color: "text-default",
      className: c.CT,
      variant: "text-sm/normal",
      children: h
    })]
  })
}