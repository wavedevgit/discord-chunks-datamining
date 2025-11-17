/** Chunk was on web.js **/
/** chunk id: 848118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _,
  p: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk688619 = require("./688619.js"),
  o = require.n(Chunk688619),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk220082 = require("./220082.js"),
  Chunk164670 = require("./164670.js"),
  Chunk239100 = require("./239100.js");

function f(e) {
  let {
    cardImage: t,
    cardBackgroundImage: n,
    altText: a,
    containerClassName: s,
    backgroundImageClassName: u,
    foregroundImageClassName: f,
    shape: _
  } = e, [p, h] = (0, c.Cf)(t.toString(), "#000000"), m = i.useMemo(() => {
    let e = o()(p).brighten(1.5).saturate(.3).alpha(.8).hex(),
      t = null != h ? h : o()(p).saturate(1.2).alpha(.9).hex();
    return "linear-gradient(135deg, ".concat(e, ", ").concat(t, ")")
  }, [p, h]);
  return (0, r.jsxs)("div", {
    className: l()(d.cardContainer, {
      [d.square]: "square" === _
    }, s),
    children: [(0, r.jsx)("div", {
      className: l()(d.cardBackgroundImage, u),
      style: null != n ? {
        backgroundImage: "url(".concat(n.toString(), ")")
      } : {
        backgroundImage: m
      }
    }), (0, r.jsx)("img", {
      src: t.toString(),
      alt: a,
      className: l()(d.skuImage, {
        [d.square]: "square" === _
      }, f)
    })]
  })
}

function _(e) {
  let {
    sku: t,
    containerClassName: n,
    backgroundImageClassName: i,
    foregroundImageClassName: a,
    shape: o
  } = e, s = (0, u.Do)(t), l = (0, u.a7)(t);
  return null == s ? null : (0, r.jsx)(f, {
    cardImage: s,
    cardBackgroundImage: l,
    altText: t.name,
    containerClassName: n,
    backgroundImageClassName: i,
    foregroundImageClassName: a,
    shape: o
  })
}