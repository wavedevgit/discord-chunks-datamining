/** Chunk was on 13587 **/
/** chunk id: 689201, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  c: () => u,
  g: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk525302 = require("./525302.jsx"),
  Chunk51144 = require("./51144.js"),
  Chunk602733 = require("./602733.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function a(e, t) {
  return n.useMemo(() => {
    let r = e.map(e => {
        let {
          item: t,
          source: r
        } = e;
        return {
          productLine: t.skuProductLine,
          source: r,
          renderIcon: i.Q
        }
      }),
      n = l.ZP.getName(t),
      {
        hasMultipleTypes: a,
        hasMultipleSources: u
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
      }(r);
    return a || u ? r.map(e => !a && u ? {
      title: e.source === o.lr.WISHLIST ? s.intl.formatToPlainString(s.t.p3RmJF, {
        username: n
      }) : s.intl.string(s.t.Ig6VDH),
      renderIcon: e.productLine !== c.POd.COLLECTIBLES ? e.renderIcon : true,
      shouldShow: true
    } : a && !u ? {
      title: e.productLine === c.POd.SOCIAL_LAYER_GAME_ITEM ? s.intl.string(s.t["4yiU7x"]) : s.intl.string(s.t.HFhcqh),
      renderIcon: e.renderIcon,
      shouldShow: true
    } : {
      title: e.productLine === c.POd.SOCIAL_LAYER_GAME_ITEM ? s.intl.string(s.t["4yiU7x"]) : s.intl.string(s.t.HFhcqh),
      body: e.source === o.lr.WISHLIST ? s.intl.formatToPlainString(s.t.p3RmJF, {
        username: n
      }) : s.intl.string(s.t.Ig6VDH),
      renderIcon: e.renderIcon,
      shouldShow: true
    }) : r.map(() => ({
      shouldShow: false
    }))
  }, [e, t])
}

function u(e) {
  return n.useMemo(() => new Set(e.map(e => e.skuProductLine)).size > 1 ? e.map(e => ({
    title: e.skuProductLine === c.POd.SOCIAL_LAYER_GAME_ITEM ? s.intl.string(s.t["4yiU7x"]) : s.intl.string(s.t.HFhcqh),
    renderIcon: e.skuProductLine === c.POd.SOCIAL_LAYER_GAME_ITEM ? i.Q : true,
    shouldShow: true
  })) : e.map(() => ({
    shouldShow: false
  })), [e])
}