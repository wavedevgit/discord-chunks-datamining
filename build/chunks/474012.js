/** Chunk was on web.js **/
/** chunk id: 474012, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => l,
  T: () => c
}), require("./321073.js"), require("./896048.js"), require("./228524.js");
var Chunk575593 = require("./575593.js"),
  Chunk898461 = require("./898461.js"),
  Chunk837015 = require("./837015.js"),
  Chunk203632 = require("./203632.js"),
  Chunk652215 = require("./652215.js");
let l = e => null == e ? [] : e.reduce((e, t) => (t.type === r.R.AVATAR_DECORATION && e.push(i.A.fromServer(t)), t.type === r.R.PROFILE_EFFECT && e.push(o.A.fromServer(t)), t.type === r.R.NAMEPLATE && e.push(a.A.fromServer(t)), e), []);

function c(e) {
  var t, n, l, u, d, f, p, _;
  if (e.productLine !== s.EZt.COLLECTIBLES) return;
  if (e.type === s.Puh.BUNDLE) {
    let t = [];
    for (let r of null != (n = e.bundledSkus) ? n : []) {
      let e = c(r);
      (null == e ? true : e.type) === "single" && t.push(e.item)
    }
    if (0 === t.length) return;
    return {
      type: "bundle",
      items: t
    }
  }
  let h = null == (t = e.tenantMetadata) ? true : t.collectibles,
    m = null == h ? true : h.item;
  if (null != m) {
    if (m.type === r.R.AVATAR_DECORATION) return {
      type: "single",
      item: new i.A({
        skuId: e.id,
        type: m.type,
        asset: m.asset,
        label: null != (l = m.labelLocalized) ? l : m.label
      })
    };
    if (m.type === r.R.PROFILE_EFFECT) return {
      type: "single",
      item: new o.A({
        skuId: e.id,
        type: m.type,
        title: null != (u = m.titleLocalized) ? u : m.title,
        description: null != (d = m.descriptionLocalized) ? d : m.description,
        thumbnailPreviewSrc: m.thumbnailPreviewSrc,
        reducedMotionSrc: m.reducedMotionSrc,
        effects: null != (f = m.effects) ? f : [],
        accessibilityLabel: null != (p = m.accessibilityLabelLocalized) ? p : m.accessibilityLabel,
        animationType: m.animationType,
        staticFrameSrc: m.staticFrameSrc
      })
    };
    if (m.type === r.R.NAMEPLATE) return {
      type: "single",
      item: new a.A({
        skuId: e.id,
        type: m.type,
        asset: m.asset,
        label: null != (_ = m.labelLocalized) ? _ : m.label,
        palette: m.palette
      })
    }
  }
}