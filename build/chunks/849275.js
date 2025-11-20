/** Chunk was on 45620 **/
/** chunk id: 849275, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./290780.js");
var Chunk473749 = require("./473749.js"),
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

function _(e) {
  let {
    sortedSkuIds: t,
    isPremiumUser: n,
    prioritizeUserDiscounts: l,
    orbsSupportedOnly: _
  } = e, b = (0, o.e7)([s.Z], () => s.Z.hasConsented(h.pjP.PERSONALIZATION)), v = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[a.m.RECOMMENDED]) ? e : []
  }, [t]), x = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[a.m.POPULAR]) ? e : []
  }, [t]), E = v.length > 0 && b, [O, S] = r.useState(E ? a.m.RECOMMENDED : a.m.POPULAR), y = (0, m.Z)(), j = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup), k = (0, o.e7)([u.Z], () => u.Z.getUserDiscounts()), I = (0, f.a)(), [T, L] = r.useState([]), B = r.useCallback(() => {
    S(a.m.RANDOM), L(i().shuffle(j))
  }, [j]);
  r.useEffect(() => {
    L(i().shuffle(j))
  }, [j]);
  let P = r.useMemo(() => {
    let e = [];
    if (O === a.m.RECENT) e = j;
    else if (O === a.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...j], n, _);
    else if (O === a.m.RECOMMENDED) {
      let t = y(v);
      e = l ? (0, d.Qf)(t, k) : t
    } else if (O === a.m.POPULAR) {
      let t = y(x);
      e = l ? (0, d.Qf)(t, k) : t
    } else O === a.m.RANDOM && (e = T);
    return _ ? (0, p.cf)(I(e)) : I(e)
  }, [O, _, I, n, j, y, v, l, k, x, T]);
  return {
    sortType: O,
    setSortType: S,
    sortedItems: (0, g.l)(P),
    sortOptions: r.useMemo(() => {
      let e = [{
        value: a.m.POPULAR,
        label: C.intl.string(C.t["1wQj4E"])
      }, {
        value: a.m.RECENT,
        label: C.intl.string(C.t["6NZpt6"])
      }, {
        value: a.m.PRICE_LOW_TO_HIGH,
        label: C.intl.string(C.t.RTG4yJ)
      }];
      return E && e.unshift({
        value: a.m.RECOMMENDED,
        label: C.intl.string(C.t.JrlKlh)
      }), e
    }, [E]),
    showRecommendationOption: E,
    shuffleProducts: B
  }
}