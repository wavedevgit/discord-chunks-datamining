/** Chunk was on 35387 **/
/** chunk id: 376521, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  l: () => s,
  z: () => o
}), require("./388685.js");
var Chunk602733 = require("./602733.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function o(e, t) {
  let {
    hasMultipleTypes: r,
    hasMultipleSources: o
  } = function(e) {
    if (0 === e.length) return {
      hasMultipleTypes: false,
      hasMultipleSources: false
    };
    let t = e[0];
    return {
      hasMultipleTypes: e.some(e => e.productLine !== t.productLine),
      hasMultipleSources: e.some(e => e.source !== t.source)
    }
  }(e);
  return r || o ? e.map(e => !r && o ? {
    title: e.source === n.lr.WISHLIST ? l.intl.formatToPlainString(l.t.p3RmJF, {
      username: t
    }) : l.intl.string(l.t.Ig6VDH),
    shouldShow: true
  } : r && !o ? {
    title: e.productLine === i.POd.SOCIAL_LAYER_GAME_ITEM ? l.intl.string(l.t["4yiU7x"]) : l.intl.string(l.t.HFhcqh),
    shouldShow: true
  } : {
    title: e.productLine === i.POd.SOCIAL_LAYER_GAME_ITEM ? l.intl.string(l.t["4yiU7x"]) : l.intl.string(l.t.HFhcqh),
    body: e.source === n.lr.WISHLIST ? l.intl.formatToPlainString(l.t.p3RmJF, {
      username: t
    }) : l.intl.string(l.t.Ig6VDH),
    shouldShow: true
  }) : e.map(() => ({
    shouldShow: false
  }))
}

function s(e) {
  return new Set(e).size > 1 ? e.map(e => ({
    title: e === i.POd.SOCIAL_LAYER_GAME_ITEM ? l.intl.string(l.t["4yiU7x"]) : l.intl.string(l.t.HFhcqh),
    shouldShow: true
  })) : e.map(() => ({
    shouldShow: false
  }))
}