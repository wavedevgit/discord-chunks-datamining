/** Chunk was on 10778 **/
/** chunk id: 306453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => f,
  Z: () => g
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk297700 = require("./297700.jsx"),
  Chunk875307 = require("./875307.js"),
  Chunk837748 = require("./837748.js"),
  Chunk260539 = require("./260539.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk23789 = require("./23789.js"),
  Chunk10198 = require("./10198.js");

function L() {
  return (0, Chunk54381.jsx)(Chunk297700.Z, {
    className: Chunk23789.verifiedIcon,
    children: (0, Chunk54381.jsx)("div", {
      className: Chunk23789.verifiedCheckContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.kmB, {
        size: "xs",
        color: "currentColor",
        className: Chunk23789.verifiedCheck
      })
    })
  })
}

function h(e) {
  let {
    verified: t,
    text: n
  } = e;
  return t ? (0, r.jsxs)("div", {
    className: m.verifiedNameContainer,
    children: [(0, r.jsx)(L, {}), n]
  }) : n
}

function f(e) {
  let {
    className: t,
    count: n,
    creator: i,
    verifiedName: s
  } = e;
  return (0, r.jsx)("div", {
    className: l()(m.usagePill, t, m.userText),
    children: null != i || null != s ? C.intl.format(C.t.TTcKAw, {
      usageCount: n,
      creator: null != s ? s : i,
      creatorHook: (e, t) => (0, r.jsx)(h, {
        text: e,
        verified: null != s
      }, t)
    }) : C.intl.format(C.t.cGXXHL, {
      usageCount: n
    })
  })
}

function g(e) {
  var t;
  let {
    guildTemplate: n,
    error: i,
    tall: c,
    pillClassName: L
  } = e;
  if (null != i && "" !== i) return (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsx)(a.Dx, {
      children: C.intl.string(C.t.mDFGFj)
    }), (0, r.jsx)(a.DK, {
      children: i
    })]
  });
  if (n.state === o.Rj.RESOLVING) return (0, r.jsx)("div", {
    className: m.container,
    children: (0, r.jsx)(s.$jN, {})
  });
  let h = (0, u.Z)(n.code).header;
  return c ? (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsx)(a.Dx, {
      className: m.title,
      children: h
    }), (0, r.jsx)(a.DK, {
      className: l()(m.subtitle, x.__invalid_marginTop2),
      children: C.intl.string(C.t["h+vyO6"])
    }), (0, r.jsx)(a.Dx, {
      className: l()(m.title, m.userText),
      children: n.name
    }), null != n.description && "" !== n.description && (0, r.jsx)(a.DK, {
      className: l()(m.subtitle, m.userText, x.marginTop8),
      children: n.description
    }), (0, r.jsx)(f, {
      className: L,
      count: null != (t = n.usageCount) ? t : 0,
      creator: n.creator.username,
      verifiedName: (0, d.R)(n.code)
    })]
  }) : (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsx)(a.Dx, {
      className: m.title,
      children: h
    }), (0, r.jsx)(a.DK, {
      className: l()(m.subtitle, m.userText),
      children: n.name
    })]
  })
}