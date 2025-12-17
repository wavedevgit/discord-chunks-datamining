/** Chunk was on 45620 **/
/** chunk id: 849275, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
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

function h(e) {
  let {
    sortedSkuIds: t,
    isPremiumUser: n,
    prioritizeUserDiscounts: l,
    orbsSupportedOnly: h
  } = e, v = (0, s.e7)([i.Z], () => i.Z.hasConsented(m.pjP.PERSONALIZATION)), E = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[o.m.RECOMMENDED]) ? e : []
  }, [t]), S = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[o.m.POPULAR]) ? e : []
  }, [t]), _ = E.length > 0 && v, [O, x] = r.useState(_ ? o.m.RECOMMENDED : o.m.POPULAR), y = (0, s.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup), j = r.useMemo(() => (0, d.wO)(y), [y]), k = (0, s.e7)([u.Z], () => u.Z.getUserDiscounts()), T = (0, b.Z)(), L = (0, f.a)(), [I, B] = r.useState([]), A = r.useCallback(() => {
    x(o.m.RANDOM), B(a().shuffle(j))
  }, [j]);
  r.useEffect(() => {
    B(a().shuffle(j))
  }, [j]);
  let N = r.useMemo(() => {
    let e = [];
    if (O === o.m.RECENT) e = j;
    else if (O === o.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...j], n, h);
    else if (O === o.m.RECOMMENDED) {
      let t = T(E);
      e = l ? (0, d.Qf)(t, k) : t
    } else if (O === o.m.POPULAR) {
      let t = T(S);
      e = l ? (0, d.Qf)(t, k) : t
    } else O === o.m.RANDOM && (e = I);
    return h ? (0, p.cf)(L(e)) : L(e)
  }, [O, h, L, n, j, T, E, l, k, S, I]);
  return {
    sortType: O,
    setSortType: x,
    sortedItems: (0, g.l)(N),
    sortOptions: r.useMemo(() => {
      let e = [{
        value: o.m.POPULAR,
        label: C.intl.string(C.t["1wQj4E"])
      }, {
        value: o.m.RECENT,
        label: C.intl.string(C.t["6NZpt6"])
      }, {
        value: o.m.PRICE_LOW_TO_HIGH,
        label: C.intl.string(C.t.RTG4yJ)
      }];
      return _ && e.unshift({
        value: o.m.RECOMMENDED,
        label: C.intl.string(C.t.JrlKlh)
      }), e
    }, [_]),
    showRecommendationOption: _,
    shuffleProducts: A
  }
}