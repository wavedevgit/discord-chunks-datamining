/** Chunk was on 10778 **/
/** chunk id: 306453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => g,
  Z: () => x
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function h() {
  return (0, Chunk951288.jsx)(Chunk297700.Z, {
    className: Chunk23789.verifiedIcon,
    children: (0, Chunk951288.jsx)("div", {
      className: Chunk23789.verifiedCheckContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.kmB, {
        size: "xs",
        color: "currentColor",
        className: Chunk23789.verifiedCheck
      })
    })
  })
}

function f(e) {
  let {
    verified: t,
    text: n
  } = e;
  return t ? (0, r.jsxs)("div", {
    className: m.verifiedNameContainer,
    children: [(0, r.jsx)(h, {}), n]
  }) : n
}

function g(e) {
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
      creatorHook: (e, t) => (0, r.jsx)(f, {
        text: e,
        verified: null != s
      }, t)
    }) : C.intl.format(C.t.cGXXHB, {
      usageCount: n
    })
  })
}

function x(e) {
  var t;
  let {
    guildTemplate: n,
    error: i,
    tall: c,
    pillClassName: h
  } = e;
  if (null != i && "" !== i) return (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsx)(a.Dx, {
      children: C.intl.string(C.t.mDFGFh)
    }), (0, r.jsx)(a.DK, {
      children: i
    })]
  });
  if (n.state === o.Rj.RESOLVING) return (0, r.jsx)("div", {
    className: m.container,
    children: (0, r.jsx)(s.$jN, {})
  });
  let f = (0, u.Z)(n.code).header;
  return c ? (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsx)(a.Dx, {
      className: m.title,
      children: f
    }), (0, r.jsx)(a.DK, {
      className: l()(m.subtitle, L.__invalid_marginTop2),
      children: C.intl.string(C.t["h+vyOz"])
    }), (0, r.jsx)(a.Dx, {
      className: l()(m.title, m.userText),
      children: n.name
    }), null != n.description && "" !== n.description && (0, r.jsx)(a.DK, {
      className: l()(m.subtitle, m.userText, L.marginTop8),
      children: n.description
    }), (0, r.jsx)(g, {
      className: h,
      count: null != (t = n.usageCount) ? t : 0,
      creator: n.creator.username,
      verifiedName: (0, d.R)(n.code)
    })]
  }) : (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsx)(a.Dx, {
      className: m.title,
      children: f
    }), (0, r.jsx)(a.DK, {
      className: l()(m.subtitle, m.userText),
      children: n.name
    })]
  })
}