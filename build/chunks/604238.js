/** Chunk was on web.js **/
/** chunk id: 604238, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => _,
  e: () => h
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk528226 = require("./528226.jsx"),
  Chunk304973 = require("./304973.jsx"),
  Chunk18769 = require("./18769.jsx"),
  Chunk596395 = require("./596395.jsx"),
  Chunk245595 = require("./245595.jsx"),
  Chunk124300 = require("./124300.jsx"),
  Chunk540391 = require("./540391.jsx"),
  Chunk219561 = require("./219561.js"),
  Chunk244190 = require("./244190.jsx");
let _ = {
    ContainedHero: Chunk528226.A,
    BasicHero: e => {
      let {
        bannerSrc: t
      } = e;
      return null
    },
    PromotionalHero: () => null,
    InteractiveHScroll: Chunk124300.A,
    Grid: Chunk245595.A,
    Section: Chunk540391.A,
    Card: Chunk596395.A,
    FeaturedChip: Chunk304973.A,
    FeaturedCollection: Chunk18769.A,
    FeaturedProduct: () => null,
    ShopProductCard: Chunk244190.A,
    Stack: Chunk219561.Kp,
    Text: Chunk219561.t,
    Heading: Chunk219561.Oo
  },
  h = e => {
    let {
      overrides: t
    } = e;
    return r.useMemo(() => {
      let e = (0, i.cloneDeep)(_);
      if (null != t)
        for (let [n, r] of Object.entries(t)) null != r && (e[n] = r);
      return e
    }, [t])
  }