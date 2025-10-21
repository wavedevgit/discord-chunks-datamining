/** Chunk was on web.js **/
/** chunk id: 311739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk583434 = require("./583434.js"),
  Chunk124072 = require("./124072.jsx"),
  Chunk891984 = require("./891984.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk104844 = require("./104844.js");

function _(e) {
  var t;
  let {
    shopLink: n,
    skuId: a,
    onClick: c
  } = e, {
    product: u
  } = (0, o.T)(a);
  return (0, r.jsxs)(s.Z, {
    role: "link",
    href: n,
    onClick: c,
    children: [(0, r.jsx)(i.EOn, {
      size: "sm",
      className: f.icon,
      color: i.TVs.colors.MENTION_FOREGROUND
    }), null != (t = null == u ? true : u.name) ? t : d.intl.string(d.t["Ij+2rZ"]), (0, r.jsx)(l.Z, {})]
  }, a)
}

function p(e) {
  return {
    react(t, n, i) {
      let o = i.noStyleAndInteraction ? true : n => {
        e.shouldStopPropagation && (null == n || n.stopPropagation()), c.default.track(u.rMx.SHOP_LINK_MENTION_CLICKED, {
          sku_id: t.skuId
        }), (0, a.Z)(t.shopLink)
      };
      return (0, r.jsx)(_, {
        shopLink: t.shopLink,
        skuId: t.skuId,
        onClick: o
      })
    }
  }
}