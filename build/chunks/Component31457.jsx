/** Chunk was on 35894 **/
/** chunk id: 31457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZK: () => C,
  _H: () => u,
  cS: () => c,
  fu: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk230397 = require("./230397.js");

function c(e) {
  let {
    title: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: s.A9,
    children: [(0, r.jsx)(a.Text, {
      className: s.HN,
      variant: "text-md/normal",
      color: "text-strong",
      children: t
    }), n]
  })
}

function u(e) {
  let {
    title: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: s.y,
    children: [(0, r.jsx)(a.Text, {
      className: s.HN,
      variant: "text-sm/medium",
      color: "text-muted",
      children: t
    }), n]
  })
}

function d(e) {
  let {
    icon: t,
    text: n,
    meetsRequirement: l
  } = e;
  return (0, r.jsxs)("div", {
    className: s.xP,
    children: [(0, r.jsx)(t, {
      className: s.jt,
      height: 16,
      width: 16,
      size: "custom",
      color: "currentColor"
    }), (0, r.jsx)(a.Text, {
      className: s.Pg,
      variant: "text-sm/medium",
      children: n
    }), l ? (0, r.jsx)(a.yr3, {
      size: "sm",
      color: "currentColor",
      className: s.Fl,
      secondaryColor: o.A.colors.WHITE.css
    }) : (0, r.jsx)(a.aXh, {
      size: "sm",
      color: "currentColor",
      className: s.Yk,
      secondaryColor: o.A.colors.WHITE.css
    })]
  })
}

function C(e) {
  let {
    icon: t,
    text: n,
    footnote: l,
    meetsRequirement: c,
    children: u,
    className: d
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: i()(s.xP, d),
      children: [(0, r.jsx)(t, {
        className: s.jt,
        height: 20,
        width: 20,
        size: "custom",
        color: "currentColor"
      }), (0, r.jsx)(a.Text, {
        className: s.Pg,
        variant: "text-md/normal",
        children: n
      }), c ? (0, r.jsx)(a.yr3, {
        size: "md",
        color: "currentColor",
        className: s.Fl,
        secondaryColor: o.A.colors.WHITE.css
      }) : u]
    }), null != l && (0, r.jsx)(a.Text, {
      color: "text-default",
      className: s.xA,
      variant: "text-xs/normal",
      children: l
    })]
  })
}