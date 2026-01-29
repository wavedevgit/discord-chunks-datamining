/** Chunk was on 13696 **/
/** chunk id: 46537, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  b: () => f,
  u: () => m
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk576030 = require("./576030.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk427262 = require("./427262.js"),
  Chunk594832 = require("./594832.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function f(e, t) {
  return n.useMemo(() => {
    let r = e.map(e => {
        let {
          item: t,
          source: r
        } = e;
        return {
          productLine: t.skuProductLine,
          source: r,
          renderIcon: l.GM
        }
      }),
      n = a.Ay.getName(t),
      {
        hasMultipleTypes: i,
        hasMultipleSources: s
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
    return i || s ? r.map(e => !i && s ? {
      title: e.source === u.uS.WISHLIST ? d.intl.formatToPlainString(d.t.p3RmJF, {
        username: n
      }) : d.intl.string(d.t.Ig6VDH),
      renderIcon: e.productLine !== c.EZt.COLLECTIBLES ? e.renderIcon : true,
      shouldShow: true
    } : i && !s ? {
      title: e.productLine === c.EZt.SOCIAL_LAYER_GAME_ITEM ? d.intl.string(d.t["4yiU7x"]) : d.intl.string(d.t.HFhcqh),
      renderIcon: e.renderIcon,
      shouldShow: true
    } : {
      title: e.productLine === c.EZt.SOCIAL_LAYER_GAME_ITEM ? d.intl.string(d.t["4yiU7x"]) : d.intl.string(d.t.HFhcqh),
      body: e.source === u.uS.WISHLIST ? d.intl.formatToPlainString(d.t.p3RmJF, {
        username: n
      }) : d.intl.string(d.t.Ig6VDH),
      renderIcon: e.renderIcon,
      shouldShow: true
    }) : r.map(() => ({
      shouldShow: false
    }))
  }, [e, t])
}

function m(e, t) {
  let r = (0, i.yK)([s.default], () => e.map(e => s.default.getUser(e.gifterUserId)).filter(o.Vq), [e]),
    u = n.useMemo(() => r.reduce((e, t) => (e[t.id] = t, e), {}), [r]);
  return n.useMemo(() => {
    let r = new Set(e.map(e => e.skuProductLine)).size > 1;
    return e.map(e => {
      let n = t && e.isOwned && null != e.gifterUserId && null != u[e.gifterUserId],
        i = null != e.gifterUserId && null != u[e.gifterUserId] ? a.Ay.getName(u[e.gifterUserId]) : null;
      return r || n ? {
        title: n ? d.intl.formatToPlainString(d.t.TL4ktE, {
          username: i
        }) : e.skuProductLine === c.EZt.SOCIAL_LAYER_GAME_ITEM ? d.intl.string(d.t["4yiU7x"]) : d.intl.string(d.t.HFhcqh),
        body: n ? e.skuName : true,
        renderIcon: n ? l.uq : e.skuProductLine === c.EZt.SOCIAL_LAYER_GAME_ITEM ? l.GM : true,
        shouldShow: true
      } : {
        shouldShow: false
      }
    })
  }, [e, t, u])
}