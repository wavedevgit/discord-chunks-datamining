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
  } = e, E = (0, o.e7)([i.Z], () => i.Z.hasConsented(m.pjP.PERSONALIZATION)), v = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[s.m.RECOMMENDED]) ? e : []
  }, [t]), S = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[s.m.POPULAR]) ? e : []
  }, [t]), _ = v.length > 0 && E, [x, O] = r.useState(_ ? s.m.RECOMMENDED : s.m.POPULAR), y = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup), k = r.useMemo(() => (0, d.wO)(y), [y]), T = (0, o.e7)([u.Z], () => u.Z.getUserDiscounts()), j = (0, p.Z)(), L = (0, f.a)(), [I, A] = r.useState([]), B = r.useCallback(() => {
    O(s.m.RANDOM), A(a().shuffle(k))
  }, [k]);
  r.useEffect(() => {
    A(a().shuffle(k))
  }, [k]);
  let N = r.useMemo(() => {
    let e = [];
    if (x === s.m.RECENT) e = k;
    else if (x === s.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...k], n, C);
    else if (x === s.m.RECOMMENDED) {
      let t = j(v);
      e = l ? (0, d.Qf)(t, T) : t
    } else if (x === s.m.POPULAR) {
      let t = j(S);
      e = l ? (0, d.Qf)(t, T) : t
    } else x === s.m.RANDOM && (e = I);
    return C ? (0, b.cf)(L(e)) : L(e)
  }, [x, C, L, n, k, j, v, l, T, S, I]);
  return {
    sortType: x,
    setSortType: O,
    sortedItems: (0, g.l)(N),
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
      return _ && e.unshift({
        value: s.m.RECOMMENDED,
        label: h.intl.string(h.t.JrlKlh)
      }), e
    }, [_]),
    showRecommendationOption: _,
    shuffleProducts: B
  }
}