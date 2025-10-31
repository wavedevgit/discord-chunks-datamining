/** Chunk was on web.js **/
/** chunk id: 848118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _,
  p: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
    className: s,
    shape: u
  } = e, [f, _] = (0, c.Cf)(t.toString(), "#000000"), p = i.useMemo(() => {
    let e = o()(f).brighten(1.5).saturate(.3).alpha(.8).hex(),
      t = null != _ ? _ : o()(f).saturate(1.2).alpha(.9).hex();
    return "linear-gradient(135deg, ".concat(e, ", ").concat(t, ")")
  }, [f, _]);
  return (0, r.jsx)("div", {
    className: l()(d.cardContainer, {
      [d.square]: "square" === u
    }, s),
    style: null != n ? {
      backgroundImage: "url(".concat(n.toString(), ")")
    } : {
      backgroundImage: p
    },
    children: (0, r.jsx)("img", {
      src: t.toString(),
      alt: a,
      className: l()(d.skuImage, {
        [d.square]: "square" === u
      })
    })
  })
}

function _(e) {
  let {
    sku: t,
    className: n,
    shape: i
  } = e, a = (0, u.Do)(t), o = (0, u.a7)(t);
  return null == a ? null : (0, r.jsx)(f, {
    cardImage: a,
    cardBackgroundImage: o,
    altText: t.name,
    className: n,
    shape: i
  })
}