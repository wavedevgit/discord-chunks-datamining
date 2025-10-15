/** Chunk was on 45620 **/
/** chunk id: 849275, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
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
  Chunk309956 = require("./309956.js"),
  Chunk937510 = require("./937510.js"),
  Chunk934760 = require("./934760.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let {
    sortedSkuIds: t,
    isPremiumUser: n,
    prioritizeUserDiscounts: l,
    orbsSupportedOnly: b
  } = e, v = (0, s.e7)([a.Z], () => a.Z.hasConsented(_.pjP.PERSONALIZATION)), E = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[o.m.RECOMMENDED]) ? e : []
  }, [t]), O = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[o.m.POPULAR]) ? e : []
  }, [t]), x = E.length > 0 && v, [S, y] = r.useState(x ? o.m.RECOMMENDED : o.m.POPULAR), k = (0, C.Z)(), j = (0, s.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup), T = (0, s.e7)([u.Z], () => u.Z.getUserDiscounts()), L = (0, g.a)(), I = (0, f.s)([h.cv]), [B, A] = r.useState([]), N = r.useCallback(() => {
    y(o.m.RANDOM), A(i().shuffle(j))
  }, [j]);
  r.useEffect(() => {
    A(i().shuffle(j))
  }, [j]);
  let P = r.useMemo(() => {
    let e = [];
    if (S === o.m.RECENT) e = j;
    else if (S === o.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...j], n, b);
    else if (S === o.m.RECOMMENDED) {
      let t = k(E);
      e = l ? (0, d.Qf)(t, T) : t
    } else if (S === o.m.POPULAR) {
      let t = k(O);
      e = l ? (0, d.Qf)(t, T) : t
    } else S === o.m.RANDOM && (e = B);
    return b ? I(L(e), n) : L(e)
  }, [S, b, I, L, n, j, k, E, l, T, O, B]);
  return {
    sortType: S,
    setSortType: y,
    sortedItems: (0, p.l)(P),
    sortOptions: r.useMemo(() => {
      let e = [{
        value: o.m.POPULAR,
        label: m.intl.string(m.t["1wQj4O"])
      }, {
        value: o.m.RECENT,
        label: m.intl.string(m.t["6NZpt7"])
      }, {
        value: o.m.PRICE_LOW_TO_HIGH,
        label: m.intl.string(m.t.RTG4yM)
      }];
      return x && e.unshift({
        value: o.m.RECOMMENDED,
        label: m.intl.string(m.t.JrlKlp)
      }), e
    }, [x]),
    showRecommendationOption: x,
    shuffleProducts: N
  }
}