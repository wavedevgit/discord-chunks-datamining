/** Chunk was on 54844 **/
/** chunk id: 996701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk467171 = require("./467171.js"),
  Chunk888186 = require("./888186.js");
let u = e => {
  let {
    data: {
      url: t,
      link_text: n,
      link_description: l,
      is_localized: o
    }
  } = e;
  return o ? (0, r.jsxs)(a.P3F, {
    role: "link",
    className: i()(d.linkButton, c.listElement),
    onClick: () => {
      (0, s.Z)(t)
    },
    children: [(0, r.jsxs)("div", {
      className: d.linkTextContainer,
      children: [(0, r.jsx)(a.Text, {
        className: d.__invalid_linkText,
        variant: "text-md/semibold",
        children: n
      }), null != l && "" !== l && (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: l
      })]
    }), (0, r.jsx)(a.Gr1, {
      size: "sm",
      color: "currentColor",
      className: d.linkIcon
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
      return (0, r.jsx)(u, {
        data: n
      }, "external-link+".concat(t))
    }),
    l = t.some(e => {
      let {
        data: t
      } = e;
      return t.is_header_hidden
    });
  return (0, r.jsxs)("div", {
    className: i()(d.linksContainer, c.listElementWrapper),
    children: [!l && (0, r.jsx)(a.Heading, {
      variant: "heading-sm/semibold",
      color: "text-default",
      className: d.header,
      children: o.intl.string(o.t.hvVgAZ)
    }), n]
  })
}