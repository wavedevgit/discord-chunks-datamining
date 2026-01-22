/** Chunk was on 58652 **/
/** chunk id: 404192, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk212335 = require("./212335.js"),
  Chunk606566 = require("./606566.js");
let u = e => {
  let {
    data: {
      url: t,
      link_text: n,
      link_description: r,
      is_localized: o
    }
  } = e;
  return o ? (0, l.jsxs)(i.DUT, {
    role: "link",
    className: a()(d.$J, c.lD),
    onClick: () => {
      (0, s.A)(t)
    },
    children: [(0, l.jsxs)("div", {
      className: d.xU,
      children: [(0, l.jsx)(i.Text, {
        className: d.__invalid_linkText,
        variant: "text-md/semibold",
        children: n
      }), null != r && "" !== r && (0, l.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: r
      })]
    }), (0, l.jsx)(i.I9m, {
      size: "sm",
      color: "currentColor",
      className: d.wP
    })]
  }) : null
};

function m(e) {
  let {
    elements: t
  } = e;
  if (null == t || 0 === t.length || null == t.find(e => {
      let {
        data: t
      } = e;
      return t.is_localized
    })) return null;
  let n = t.map((e, t) => {
      let {
        data: n
      } = e;
      return (0, l.jsx)(u, {
        data: n
      }, "external-link+".concat(t))
    }),
    r = t.some(e => {
      let {
        data: t
      } = e;
      return t.is_header_hidden
    });
  return (0, l.jsxs)("div", {
    className: a()(d.nV, c.E8),
    children: [!r && (0, l.jsx)(i.Heading, {
      variant: "heading-sm/semibold",
      color: "text-default",
      className: d.wx,
      children: o.intl.string(o.t.hvVgAZ)
    }), n]
  })
}