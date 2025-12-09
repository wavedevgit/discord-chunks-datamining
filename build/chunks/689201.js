/** Chunk was on 57575 **/
/** chunk id: 689201, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  c: () => m,
  g: () => f
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk525302 = require("./525302.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
  Chunk602733 = require("./602733.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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
          renderIcon: l.Q
        }
      }),
      n = c.ZP.getName(t),
      {
        hasMultipleTypes: i,
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
      }(r);
    return i || o ? r.map(e => !i && o ? {
      title: e.source === a.lr.WISHLIST ? d.intl.formatToPlainString(d.t.p3RmJF, {
        username: n
      }) : d.intl.string(d.t.Ig6VDH),
      renderIcon: e.productLine !== u.POd.COLLECTIBLES ? e.renderIcon : true,
      shouldShow: true
    } : i && !o ? {
      title: e.productLine === u.POd.SOCIAL_LAYER_GAME_ITEM ? d.intl.string(d.t["4yiU7x"]) : d.intl.string(d.t.HFhcqh),
      renderIcon: e.renderIcon,
      shouldShow: true
    } : {
      title: e.productLine === u.POd.SOCIAL_LAYER_GAME_ITEM ? d.intl.string(d.t["4yiU7x"]) : d.intl.string(d.t.HFhcqh),
      body: e.source === a.lr.WISHLIST ? d.intl.formatToPlainString(d.t.p3RmJF, {
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
  let r = (0, i.Wu)([o.default], () => e.map(e => o.default.getUser(e.gifterUserId)).filter(s.lm), [e]),
    c = n.useMemo(() => r.reduce((e, t) => (e[t.id] = t, e), {}), [r]);
  return n.useMemo(() => new Set(e.map(e => e.skuProductLine)).size > 1 ? e.map(e => {
    let r = t && e.isOwned && null != e.gifterUserId && null != c[e.gifterUserId];
    return {
      title: e.skuProductLine === u.POd.SOCIAL_LAYER_GAME_ITEM ? d.intl.string(d.t["4yiU7x"]) : d.intl.string(d.t.HFhcqh),
      renderIcon: e.skuProductLine === u.POd.SOCIAL_LAYER_GAME_ITEM ? l.Q : true,
      shouldShow: !r
    }
  }) : e.map(() => ({
    shouldShow: false
  })), [e, t, c])
}