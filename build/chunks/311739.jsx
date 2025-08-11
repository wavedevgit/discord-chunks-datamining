/** Chunk was on web.js **/
/** chunk id: 311739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk583434 = require("./583434.js"),
  Chunk124072 = require("./124072.jsx"),
  Chunk891984 = require("./891984.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk897384 = require("./897384.js");

function _(e) {
  var t;
  let {
    shopLink: n,
    skuId: o,
    onClick: c
  } = e, {
    product: u
  } = (0, a.T)(o);
  return <s.Z role={"link"} href={n} onClick={c}>{<i.EOn size={"sm"} className={f.icon} color={i.TVs.colors.MENTION_FOREGROUND} />}{null != (t = null == u ? true : u.name) ? t : d.intl.string(d.t["Ij+2ra"])}{<l.Z />}</s.Z>
}

function p(e) {
  return {
    react(t, n, i) {
      let a = i.noStyleAndInteraction ? true : n => {
        e.shouldStopPropagation && (null == n || n.stopPropagation()), c.default.track(u.rMx.SHOP_LINK_MENTION_CLICKED, {
          sku_id: t.skuId
        }), (0, o.Z)(t.shopLink)
      };
      return <_ shopLink={t.shopLink} skuId={t.skuId} onClick={a} />
    }
  }
}