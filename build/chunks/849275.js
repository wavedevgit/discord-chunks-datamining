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
  } = e, E = (0, o.e7)([a.Z], () => a.Z.hasConsented(_.pjP.PERSONALIZATION)), v = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[s.m.RECOMMENDED]) ? e : []
  }, [t]), S = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[s.m.POPULAR]) ? e : []
  }, [t]), O = v.length > 0 && E, [x, y] = r.useState(O ? s.m.RECOMMENDED : s.m.POPULAR), j = (0, C.Z)(), k = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup), T = (0, o.e7)([u.Z], () => u.Z.getUserDiscounts()), L = (0, g.a)(), I = (0, f.s)([h.cv]), [B, A] = r.useState([]), N = r.useCallback(() => {
    y(s.m.RANDOM), A(i().shuffle(k))
  }, [k]);
  r.useEffect(() => {
    A(i().shuffle(k))
  }, [k]);
  let P = r.useMemo(() => {
    let e = [];
    if (x === s.m.RECENT) e = k;
    else if (x === s.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...k], n, b);
    else if (x === s.m.RECOMMENDED) {
      let t = j(v);
      e = l ? (0, d.Qf)(t, T) : t
    } else if (x === s.m.POPULAR) {
      let t = j(S);
      e = l ? (0, d.Qf)(t, T) : t
    } else x === s.m.RANDOM && (e = B);
    return b ? I(L(e), n) : L(e)
  }, [x, b, I, L, n, k, j, v, l, T, S, B]);
  return {
    sortType: x,
    setSortType: y,
    sortedItems: (0, p.l)(P),
    sortOptions: r.useMemo(() => {
      let e = [{
        value: s.m.POPULAR,
        label: m.intl.string(m.t["1wQj4O"])
      }, {
        value: s.m.RECENT,
        label: m.intl.string(m.t["6NZpt7"])
      }, {
        value: s.m.PRICE_LOW_TO_HIGH,
        label: m.intl.string(m.t.RTG4yM)
      }];
      return O && e.unshift({
        value: s.m.RECOMMENDED,
        label: m.intl.string(m.t.JrlKlp)
      }), e
    }, [O]),
    showRecommendationOption: O,
    shuffleProducts: N
  }
}