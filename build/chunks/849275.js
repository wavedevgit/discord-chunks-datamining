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
  } = e, b = (0, o.e7)([a.Z], () => a.Z.hasConsented(C.pjP.PERSONALIZATION)), v = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[s.m.RECOMMENDED]) ? e : []
  }, [t]), E = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[s.m.POPULAR]) ? e : []
  }, [t]), O = v.length > 0 && b, [S, x] = r.useState(O ? s.m.RECOMMENDED : s.m.POPULAR), y = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup), j = r.useMemo(() => (0, d.wO)(y), [y]), k = (0, o.e7)([u.Z], () => u.Z.getUserDiscounts()), T = (0, m.Z)(), I = (0, g.a)(), [L, B] = r.useState([]), N = r.useCallback(() => {
    x(s.m.RANDOM), B(i().shuffle(j))
  }, [j]);
  r.useEffect(() => {
    B(i().shuffle(j))
  }, [j]);
  let A = r.useMemo(() => {
    let e = [];
    if (S === s.m.RECENT) e = j;
    else if (S === s.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...j], n, _);
    else if (S === s.m.RECOMMENDED) {
      let t = T(v);
      e = l ? (0, d.Qf)(t, k) : t
    } else if (S === s.m.POPULAR) {
      let t = T(E);
      e = l ? (0, d.Qf)(t, k) : t
    } else S === s.m.RANDOM && (e = L);
    return _ ? (0, p.cf)(I(e)) : I(e)
  }, [S, _, I, n, j, T, v, l, k, E, L]);
  return {
    sortType: S,
    setSortType: x,
    sortedItems: (0, f.l)(A),
    sortOptions: r.useMemo(() => {
      let e = [{
        value: s.m.POPULAR,
        label: h.intl.string(h.t["1wQj4E"])
      }, {
        value: s.m.RECENT,
        label: h.intl.string(h.t["6NZpt6"])
      }, {
        value: s.m.PRICE_LOW_TO_HIGH,
        label: h.intl.string(h.t.RTG4yJ)
      }];
      return O && e.unshift({
        value: s.m.RECOMMENDED,
        label: h.intl.string(h.t.JrlKlh)
      }), e
    }, [O]),
    showRecommendationOption: O,
    shuffleProducts: N
  }
}