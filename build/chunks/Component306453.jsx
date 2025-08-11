/** Chunk was on 10778 **/
/** chunk id: 306453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => f,
  Z: () => g
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk297700 = require("./297700.jsx"),
  Chunk875307 = require("./875307.js"),
  Chunk837748 = require("./837748.js"),
  Chunk260539 = require("./260539.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk704983 = require("./704983.js"),
  Chunk20493 = require("./20493.js");

function h() {
  return (0, Chunk255367.jsx)(Chunk297700.Z, {
    className: Chunk704983.verifiedIcon,
    children: (0, Chunk255367.jsx)("div", {
      className: Chunk704983.verifiedCheckContainer,
      children: (0, Chunk255367.jsx)(Chunk481060.kmB, {
        size: "xs",
        color: "currentColor",
        className: Chunk704983.verifiedCheck
      })
    })
  })
}

function x(e) {
  let {
    verified: t,
    text: n
  } = e;
  return t ? (0, i.jsxs)("div", {
    className: m.verifiedNameContainer,
    children: [(0, i.jsx)(h, {}), n]
  }) : n
}

function f(e) {
  let {
    className: t,
    count: n,
    creator: r,
    verifiedName: l
  } = e;
  return (0, i.jsx)("div", {
    className: s()(m.usagePill, t, m.userText),
    children: null != r || null != l ? C.intl.format(C.t.TTcKAw, {
      usageCount: n,
      creator: null != l ? l : r,
      creatorHook: (e, t) => (0, i.jsx)(x, {
        text: e,
        verified: null != l
      }, t)
    }) : C.intl.format(C.t.cGXXHB, {
      usageCount: n
    })
  })
}

function g(e) {
  var t;
  let {
    guildTemplate: n,
    error: r,
    tall: c,
    pillClassName: h
  } = e;
  if (null != r && "" !== r) return (0, i.jsxs)("div", {
    className: m.container,
    children: [(0, i.jsx)(a.Dx, {
      children: C.intl.string(C.t.mDFGFh)
    }), (0, i.jsx)(a.DK, {
      children: r
    })]
  });
  if (n.state === o.Rj.RESOLVING) return (0, i.jsx)("div", {
    className: m.container,
    children: (0, i.jsx)(l.$jN, {})
  });
  let x = (0, u.Z)(n.code).header;
  return c ? (0, i.jsxs)("div", {
    className: m.container,
    children: [(0, i.jsx)(a.Dx, {
      className: m.title,
      children: x
    }), (0, i.jsx)(a.DK, {
      className: s()(m.subtitle, L.__invalid_marginTop2),
      children: C.intl.string(C.t["h+vyOz"])
    }), (0, i.jsx)(a.Dx, {
      className: s()(m.title, m.userText),
      children: n.name
    }), null != n.description && "" !== n.description && (0, i.jsx)(a.DK, {
      className: s()(m.subtitle, m.userText, L.marginTop8),
      children: n.description
    }), (0, i.jsx)(f, {
      className: h,
      count: null != (t = n.usageCount) ? t : 0,
      creator: n.creator.username,
      verifiedName: (0, d.R)(n.code)
    })]
  }) : (0, i.jsxs)("div", {
    className: m.container,
    children: [(0, i.jsx)(a.Dx, {
      className: m.title,
      children: x
    }), (0, i.jsx)(a.DK, {
      className: s()(m.subtitle, m.userText),
      children: n.name
    })]
  })
}