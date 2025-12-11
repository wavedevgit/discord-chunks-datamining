/** Chunk was on 45620 **/
/** chunk id: 849275, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./290780.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
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

function C(e) {
  let {
    sortedSkuIds: t,
    isPremiumUser: n,
    prioritizeUserDiscounts: l,
    orbsSupportedOnly: C
  } = e, v = (0, o.e7)([s.Z], () => s.Z.hasConsented(m.pjP.PERSONALIZATION)), E = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[i.m.RECOMMENDED]) ? e : []
  }, [t]), S = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[i.m.POPULAR]) ? e : []
  }, [t]), _ = E.length > 0 && v, [O, x] = r.useState(_ ? i.m.RECOMMENDED : i.m.POPULAR), y = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup), j = r.useMemo(() => (0, d.wO)(y), [y]), k = (0, o.e7)([u.Z], () => u.Z.getUserDiscounts()), T = (0, b.Z)(), I = (0, f.a)(), [L, B] = r.useState([]), A = r.useCallback(() => {
    x(i.m.RANDOM), B(a().shuffle(j))
  }, [j]);
  r.useEffect(() => {
    B(a().shuffle(j))
  }, [j]);
  let N = r.useMemo(() => {
    let e = [];
    if (O === i.m.RECENT) e = j;
    else if (O === i.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...j], n, C);
    else if (O === i.m.RECOMMENDED) {
      let t = T(E);
      e = l ? (0, d.Qf)(t, k) : t
    } else if (O === i.m.POPULAR) {
      let t = T(S);
      e = l ? (0, d.Qf)(t, k) : t
    } else O === i.m.RANDOM && (e = L);
    return C ? (0, p.cf)(I(e)) : I(e)
  }, [O, C, I, n, j, T, E, l, k, S, L]);
  return {
    sortType: O,
    setSortType: x,
    sortedItems: (0, g.l)(N),
    sortOptions: r.useMemo(() => {
      let e = [{
        value: i.m.POPULAR,
        label: h.intl.string(h.t["1wQj4E"])
      }, {
        value: i.m.RECENT,
        label: h.intl.string(h.t["6NZpt6"])
      }, {
        value: i.m.PRICE_LOW_TO_HIGH,
        label: h.intl.string(h.t.RTG4yJ)
      }];
      return _ && e.unshift({
        value: i.m.RECOMMENDED,
        label: h.intl.string(h.t.JrlKlh)
      }), e
    }, [_]),
    showRecommendationOption: _,
    shuffleProducts: A
  }
}