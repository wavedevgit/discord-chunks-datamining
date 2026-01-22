/** Chunk was on 7726 **/
/** chunk id: 768397, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => p,
  F: () => g
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  n = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk496885 = require("./496885.jsx"),
  Chunk68965 = require("./68965.js"),
  Chunk651539 = require("./651539.js"),
  Chunk401755 = require("./401755.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk346349 = require("./346349.js"),
  Chunk473169 = require("./473169.js");

function h() {
  return (0, s.jsx)(d.A, {
    className: m.w$,
    children: (0, s.jsx)("div", {
      className: m.SN,
      children: (0, s.jsx)(i.Uzd, {
        size: "xs",
        color: "currentColor",
        className: m.HE
      })
    })
  })
}

function x(e) {
  let {
    verified: t,
    text: r
  } = e;
  return t ? (0, s.jsxs)("div", {
    className: m.V,
    children: [(0, s.jsx)(h, {}), r]
  }) : r
}

function g(e) {
  let {
    className: t,
    count: r,
    creator: l,
    verifiedName: i
  } = e;
  return (0, s.jsx)("div", {
    className: n()(m.t5, t, m.fz),
    children: null != l || null != i ? C.intl.format(C.t.TTcKAw, {
      usageCount: r,
      creator: null != i ? i : l,
      creatorHook: (e, t) => (0, s.jsx)(x, {
        text: e,
        verified: null != i
      }, t)
    }) : C.intl.format(C.t.cGXXHL, {
      usageCount: r
    })
  })
}

function p(e) {
  var t;
  let {
    guildTemplate: r,
    error: l,
    tall: d,
    pillClassName: h
  } = e;
  if (null != l && "" !== l) return (0, s.jsxs)("div", {
    className: m.kL,
    children: [(0, s.jsx)(a.hE, {
      children: C.intl.string(C.t.mDFGFj)
    }), (0, s.jsx)(a.tK, {
      children: l
    })]
  });
  if (r.state === o.QB.RESOLVING) return (0, s.jsx)("div", {
    className: m.kL,
    children: (0, s.jsx)(i.y$y, {})
  });
  let x = (0, u.A)(r.code).header;
  return d ? (0, s.jsxs)("div", {
    className: m.kL,
    children: [(0, s.jsx)(a.hE, {
      className: m.DD,
      children: x
    }), (0, s.jsx)(a.tK, {
      className: n()(m.VA, L.__invalid_marginTop2),
      children: C.intl.string(C.t["h+vyO6"])
    }), (0, s.jsx)(a.hE, {
      className: n()(m.DD, m.fz),
      children: r.name
    }), null != r.description && "" !== r.description && (0, s.jsx)(a.tK, {
      className: n()(m.VA, m.fz, L.Ot),
      children: r.description
    }), (0, s.jsx)(g, {
      className: h,
      count: null != (t = r.usageCount) ? t : 0,
      creator: r.creator.username,
      verifiedName: (0, c.c)(r.code)
    })]
  }) : (0, s.jsxs)("div", {
    className: m.kL,
    children: [(0, s.jsx)(a.hE, {
      className: m.DD,
      children: x
    }), (0, s.jsx)(a.tK, {
      className: n()(m.VA, m.fz),
      children: r.name
    })]
  })
}