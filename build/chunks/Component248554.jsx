/** Chunk was on 56848 **/
/** chunk id: 248554, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => f,
  i: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk210753 = require("./210753.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk279280 = require("./279280.js"),
  Chunk651294 = require("./651294.js");

function u(e) {
  let {
    applicationId: t
  } = e, {
    coverImageUrl: n
  } = (0, l.$)(t);
  return null != n && "" !== n ? (0, r.jsx)("div", {
    className: a()(o.coverContainer, c.placeholderCover),
    children: (0, r.jsx)(s.o, {
      imageSrc: n
    })
  }) : (0, r.jsx)("div", {
    className: a()(o.loadingCover, c.placeholderCover)
  })
}

function d(e) {
  let {
    applicationId: t,
    size: n = "default"
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(c.container, c.placeholderDetailsCard, "small" === n && c.sizeSmall),
    "aria-hidden": true,
    children: [null != t ? (0, r.jsx)(u, {
      applicationId: t
    }) : (0, r.jsx)("div", {
      className: o.loadingCover
    }), (0, r.jsxs)("div", {
      className: c.placeholderText,
      children: [(0, r.jsx)("div", {
        className: c.placeholderBar
      }), (0, r.jsx)("div", {
        className: c.placeholderBar
      })]
    })]
  })
}

function f(e) {
  let {
    applicationIds: t,
    size: n = "default"
  } = e, i = "small" === n, l = i ? t.slice(0, 3) : t.slice(0, 4);
  return (0, r.jsx)("div", {
    className: a()(c.container, c.placeholderCoverGrid, i && c.sizeSmall),
    "aria-hidden": true,
    children: l.map((e, t) => (0, r.jsx)(u, {
      applicationId: e
    }, t))
  })
}