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
  Chunk977412 = require("./977412.js");

function f(e) {
  let {
    cardImage: t,
    cardBackgroundImage: n,
    altText: a,
    className: s
  } = e, [u, f] = (0, c.Cf)(t.toString(), "#000000"), _ = i.useMemo(() => {
    let e = o()(u).brighten(1.5).saturate(.3).alpha(.8).hex(),
      t = null != f ? f : o()(u).saturate(1.2).alpha(.9).hex();
    return "linear-gradient(135deg, ".concat(e, ", ").concat(t, ")")
  }, [u, f]);
  return (0, r.jsx)("div", {
    className: l()(d.cardContainer, s),
    style: null != n ? {
      backgroundImage: "url(".concat(n.toString(), ")")
    } : {
      backgroundImage: _
    },
    children: (0, r.jsx)("img", {
      src: t.toString(),
      alt: a,
      className: d.skuImage
    })
  })
}

function _(e) {
  let {
    sku: t,
    className: n
  } = e, i = (0, u.Do)(t), a = (0, u.a7)(t);
  return null == i ? null : (0, r.jsx)(f, {
    cardImage: i,
    cardBackgroundImage: a,
    altText: t.name,
    className: n
  })
}