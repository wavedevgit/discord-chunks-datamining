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
  Chunk155066 = require("./155066.js"),
  Chunk937510 = require("./937510.js"),
  Chunk27123 = require("./27123.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function C(e) {
  let {
    sortedSkuIds: t,
    isPremiumUser: n,
    prioritizeUserDiscounts: l,
    orbsSupportedOnly: C
  } = e, E = (0, i.e7)([o.Z], () => o.Z.hasConsented(m.pjP.PERSONALIZATION)), v = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[s.m.RECOMMENDED]) ? e : []
  }, [t]), S = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[s.m.POPULAR]) ? e : []
  }, [t]), x = v.length > 0 && E, [O, _] = r.useState(x ? s.m.RECOMMENDED : s.m.POPULAR), y = (0, i.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup), j = r.useMemo(() => (0, d.wO)(y), [y]), k = (0, i.e7)([u.Z], () => u.Z.getUserDiscounts()), T = (0, g.Z)(), I = (0, f.a)(), [L, A] = r.useState([]), B = r.useCallback(() => {
    _(s.m.RANDOM), A(a().shuffle(j))
  }, [j]);
  r.useEffect(() => {
    A(a().shuffle(j))
  }, [j]);
  let N = r.useMemo(() => {
    let e = [];
    if (O === s.m.RECENT) e = j;
    else if (O === s.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...j], n, C);
    else if (O === s.m.RECOMMENDED) {
      let t = T(v);
      e = l ? (0, d.Qf)(t, k) : t
    } else if (O === s.m.POPULAR) {
      let t = T(S);
      e = l ? (0, d.Qf)(t, k) : t
    } else O === s.m.RANDOM && (e = L);
    return C ? (0, p.cf)(I(e)) : I(e)
  }, [O, C, I, n, j, T, v, l, k, S, L]);
  return {
    sortType: O,
    setSortType: _,
    sortedItems: (0, b.l)(N),
    sortOptions: r.useMemo(() => {
      let e = [{
        value: s.m.POPULAR,
        label: h.intl.string(h.t.Y68e5p)
      }, {
        value: s.m.RECENT,
        label: h.intl.string(h.t["51Bhiz"])
      }, {
        value: s.m.PRICE_LOW_TO_HIGH,
        label: h.intl.string(h.t.m8RVU2)
      }];
      return x && e.unshift({
        value: s.m.RECOMMENDED,
        label: h.intl.string(h.t.zPWgFG)
      }), e
    }, [x]),
    showRecommendationOption: x,
    shuffleProducts: B
  }
}