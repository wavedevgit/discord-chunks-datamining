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
  } = e, b = (0, a.e7)([o.Z], () => o.Z.hasConsented(C.pjP.PERSONALIZATION)), v = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[s.m.RECOMMENDED]) ? e : []
  }, [t]), E = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[s.m.POPULAR]) ? e : []
  }, [t]), x = v.length > 0 && b, [O, S] = r.useState(x ? s.m.RECOMMENDED : s.m.POPULAR), y = (0, h.Z)(), j = (0, a.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup), k = (0, a.e7)([u.Z], () => u.Z.getUserDiscounts()), I = (0, p.a)(), [T, L] = r.useState([]), B = r.useCallback(() => {
    S(s.m.RANDOM), L(i().shuffle(j))
  }, [j]);
  r.useEffect(() => {
    L(i().shuffle(j))
  }, [j]);
  let P = r.useMemo(() => {
    let e = [];
    if (O === s.m.RECENT) e = j;
    else if (O === s.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...j], n, m);
    else if (O === s.m.RECOMMENDED) {
      let t = y(v);
      e = l ? (0, d.Qf)(t, k) : t
    } else if (O === s.m.POPULAR) {
      let t = y(E);
      e = l ? (0, d.Qf)(t, k) : t
    } else O === s.m.RANDOM && (e = T);
    return m ? (0, f.cf)(I(e)) : I(e)
  }, [O, m, I, n, j, y, v, l, k, E, T]);
  return {
    sortType: O,
    setSortType: S,
    sortedItems: (0, g.l)(P),
    sortOptions: r.useMemo(() => {
      let e = [{
        value: s.m.POPULAR,
        label: _.intl.string(_.t["1wQj4E"])
      }, {
        value: s.m.RECENT,
        label: _.intl.string(_.t["6NZpt6"])
      }, {
        value: s.m.PRICE_LOW_TO_HIGH,
        label: _.intl.string(_.t.RTG4yJ)
      }];
      return x && e.unshift({
        value: s.m.RECOMMENDED,
        label: _.intl.string(_.t.JrlKlh)
      }), e
    }, [x]),
    showRecommendationOption: x,
    shuffleProducts: B
  }
}