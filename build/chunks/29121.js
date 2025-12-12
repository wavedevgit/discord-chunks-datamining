/** Chunk was on web.js **/
/** chunk id: 29121, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  To: () => s,
  ag: () => l,
  kd: () => a,
  zQ: () => c
});
var Chunk979554 = require("./979554.js"),
  Chunk786040 = require("./786040.js"),
  Chunk388032 = require("./388032.jsx");
let a = e => {
    if (null == e) return "";
    let t = o.intl.string(o.t.z7y5vF);
    return "baseVariantName" in e && null != e.baseVariantName && e.variantLabel !== t ? o.intl.formatToPlainString(o.t.BZN5k2, {
      baseVariantName: e.baseVariantName,
      variantLabel: e.variantLabel
    }) : e.name
  },
  s = e => null == e ? "" : "baseVariantName" in e && null != e.baseVariantName ? e.baseVariantName : null != e.variants && e.variants.length > 0 ? e.variants[0].baseVariantName : e.name,
  l = e => {
    if (null == e) return "";
    let t = o.intl.string(o.t.z7y5vF);
    return null != e.baseVariantName && e.variantLabel !== t ? o.intl.formatToPlainString(o.t.BZN5k2, {
      baseVariantName: e.baseVariantName,
      variantLabel: e.variantLabel
    }) : e.name
  },
  c = e => {
    let t = s(e);
    switch ((0, i.rC)(e)) {
      case r.Z.AVATAR_DECORATION:
        return o.intl.formatToPlainString(o.t.lvBzLi, {
          product: t
        });
      case r.Z.PROFILE_EFFECT:
        return o.intl.formatToPlainString(o.t.eR7moP, {
          product: t
        });
      case r.Z.NAMEPLATE:
        return o.intl.formatToPlainString(o.t.YFOwHj, {
          product: t
        });
      default:
        return t
    }
  }