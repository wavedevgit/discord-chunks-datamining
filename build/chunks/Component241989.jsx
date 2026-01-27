/** Chunk was on web.js **/
/** chunk id: 241989, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DH: () => p,
  JW: () => f,
  a6: () => _,
  f7: () => u,
  jw: () => h,
  oo: () => m
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk756366 = require("./756366.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk559485 = require("./559485.js");

function u(e) {
  var t;
  let {
    header: n,
    headerIconSrc: i,
    label: u,
    description: d,
    graphic: f,
    price: p,
    PriceIcon: _,
    strikethroughPrice: h,
    gift: m,
    className: g
  } = e, E = null != m ? l.intl.format(s.default["2PiTTi"], {
    username: m.username,
    nickname: null != (t = m.nickname) ? t : m.username,
    avatar: () => (0, r.jsx)("img", {
      alt: "",
      src: m.avatarUrl,
      className: c.s
    })
  }) : null;
  return (0, r.jsxs)("div", {
    className: a()(c.kL, g),
    children: [null != f && (0, r.jsx)("div", {
      className: c.Kk,
      children: f
    }), (0, r.jsxs)("div", {
      className: c.Qs,
      children: [null != n && (0, r.jsxs)(o.Text, {
        variant: "text-sm/semibold",
        color: "text-muted",
        lineClamp: 1,
        className: c.wx,
        children: [null != i && (0, r.jsx)("img", {
          alt: "",
          src: i,
          className: c.nr
        }), n]
      }), (0, r.jsxs)("div", {
        className: c.zH,
        children: [(0, r.jsxs)("div", {
          className: c.Qq,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-default",
            lineClamp: 1,
            children: u
          }), (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            lineClamp: 2,
            children: d
          }), null != E && (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            lineClamp: 1,
            className: c.Qy,
            children: E
          })]
        }), (0, r.jsxs)("div", {
          className: c.p6,
          children: [(0, r.jsxs)(o.Text, {
            variant: "text-md/medium",
            color: "text-default",
            className: c.nw,
            children: [null != _ && (0, r.jsx)(_, {
              size: "xs"
            }), p]
          }), null != h && (0, r.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            className: c.Jb,
            children: h
          })]
        })]
      })]
    })]
  })
}

function d(e) {
  let {
    color: t,
    Icon: n
  } = e;
  return (0, r.jsx)(o.hLv, {
    color: t,
    className: c.nC,
    children: (0, r.jsx)(n, {
      size: "lg",
      color: "var(--icon-strong)"
    })
  })
}

function f() {
  return (0, r.jsx)(d, {
    color: "nitro-pink",
    Icon: o.tvc
  })
}

function p() {
  return (0, r.jsx)(d, {
    color: "nitro-green",
    Icon: o.tvc
  })
}

function _() {
  return (0, r.jsx)(d, {
    color: "pink",
    Icon: o._Jp
  })
}

function h() {
  return (0, r.jsx)(o.k9F, {
    size: "lg",
    color: "var(--icon-muted)"
  })
}

function m() {
  return (0, r.jsx)("div", {
    className: c.CX,
    children: (0, r.jsx)(o.tvc, {
      size: "lg",
      color: "var(--neutral-1)"
    })
  })
}