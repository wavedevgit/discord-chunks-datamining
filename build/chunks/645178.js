/** Chunk was on web.js **/
/** chunk id: 645178, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Tk: () => l,
  dH: () => s,
  ho: () => c,
  o7: () => o
});
var Chunk575593 = require("./575593.js"),
  Chunk623373 = require("./623373.js"),
  Chunk985018 = require("./985018.jsx");
let o = e => {
    if (null == e) return "";
    let t = a.intl.string(a.t.z7y5vF);
    return "baseVariantName" in e && null != e.baseVariantName && e.variantLabel !== t ? a.intl.formatToPlainString(a.t.BZN5k2, {
      baseVariantName: e.baseVariantName,
      variantLabel: e.variantLabel
    }) : e.name
  },
  s = e => null == e ? "" : "baseVariantName" in e && null != e.baseVariantName ? e.baseVariantName : null != e.variants && e.variants.length > 0 ? e.variants[0].baseVariantName : e.name,
  l = e => {
    if (null == e) return "";
    let t = a.intl.string(a.t.z7y5vF);
    return null != e.baseVariantName && e.variantLabel !== t ? a.intl.formatToPlainString(a.t.BZN5k2, {
      baseVariantName: e.baseVariantName,
      variantLabel: e.variantLabel
    }) : e.name
  },
  c = e => {
    let t = s(e);
    switch ((0, i.YW)(e)) {
      case r.R.AVATAR_DECORATION:
        return a.intl.formatToPlainString(a.t.lvBzLi, {
          product: t
        });
      case r.R.PROFILE_EFFECT:
        return a.intl.formatToPlainString(a.t.eR7moP, {
          product: t
        });
      case r.R.NAMEPLATE:
        return a.intl.formatToPlainString(a.t.YFOwHj, {
          product: t
        });
      default:
        return t
    }
  }