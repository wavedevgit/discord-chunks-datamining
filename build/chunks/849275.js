/** Chunk was on 45620 **/
/** chunk id: 849275, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./290780.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk482820 = require("./482820.js"),
  Chunk442837 = require("./442837.js"),
  Chunk480294 = require("./480294.js"),
  Chunk597688 = require("./597688.js"),
  Chunk615006 = require("./615006.js"),
  Chunk884697 = require("./884697.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk27123 = require("./27123.js"),
  Chunk934760 = require("./934760.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    sortedSkuIds: t,
    isPremiumUser: n,
    prioritizeUserDiscounts: l,
    orbsSupportedOnly: m
  } = e, b = (0, s.e7)([a.Z], () => a.Z.hasConsented(h.pjP.PERSONALIZATION)), E = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[o.m.RECOMMENDED]) ? e : []
  }, [t]), v = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[o.m.POPULAR]) ? e : []
  }, [t]), x = E.length > 0 && b, [O, S] = r.useState(x ? o.m.RECOMMENDED : o.m.POPULAR), y = (0, C.Z)(), k = (0, s.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup), T = (0, s.e7)([u.Z], () => u.Z.getUserDiscounts()), j = (0, g.a)(), [L, I] = r.useState([]), B = r.useCallback(() => {
    S(o.m.RANDOM), I(i().shuffle(k))
  }, [k]);
  r.useEffect(() => {
    I(i().shuffle(k))
  }, [k]);
  let A = r.useMemo(() => {
    let e = [];
    if (O === o.m.RECENT) e = k;
    else if (O === o.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...k], n, m);
    else if (O === o.m.RECOMMENDED) {
      let t = y(E);
      e = l ? (0, d.Qf)(t, T) : t
    } else if (O === o.m.POPULAR) {
      let t = y(v);
      e = l ? (0, d.Qf)(t, T) : t
    } else O === o.m.RANDOM && (e = L);
    return m ? (0, p.cf)(j(e)) : j(e)
  }, [O, m, j, n, k, y, E, l, T, v, L]);
  return {
    sortType: O,
    setSortType: S,
    sortedItems: (0, f.l)(A),
    sortOptions: r.useMemo(() => {
      let e = [{
        value: o.m.POPULAR,
        label: _.intl.string(_.t["1wQj4O"])
      }, {
        value: o.m.RECENT,
        label: _.intl.string(_.t["6NZpt7"])
      }, {
        value: o.m.PRICE_LOW_TO_HIGH,
        label: _.intl.string(_.t.RTG4yM)
      }];
      return x && e.unshift({
        value: o.m.RECOMMENDED,
        label: _.intl.string(_.t.JrlKlp)
      }), e
    }, [x]),
    showRecommendationOption: x,
    shuffleProducts: B
  }
}