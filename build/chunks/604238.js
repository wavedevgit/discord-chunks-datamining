/** Chunk was on web.js **/
/** chunk id: 604238, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => h,
  e: () => m
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk528226 = require("./528226.jsx"),
  Chunk653793 = require("./653793.jsx"),
  Chunk261225 = require("./261225.jsx"),
  Chunk970488 = require("./970488.jsx"),
  Chunk720462 = require("./720462.jsx"),
  Chunk673277 = require("./673277.jsx"),
  Chunk304973 = require("./304973.jsx"),
  Chunk18769 = require("./18769.jsx"),
  Chunk219561 = require("./219561.js"),
  Chunk244190 = require("./244190.jsx");
let h = {
    ContainedHero: Chunk528226.A,
    BasicHero: e => {
      let {
        bannerSrc: t
      } = e;
      return null
    },
    PromotionalHero: () => null,
    InteractiveHScroll: Chunk720462.A,
    Grid: Chunk261225.A,
    GridItem: Chunk970488.A,
    Section: Chunk673277.A,
    Card: Chunk653793.A,
    FeaturedChip: Chunk304973.A,
    FeaturedCollection: Chunk18769.A,
    FeaturedProduct: () => null,
    ShopProductCard: Chunk244190.A,
    Stack: Chunk219561.Kp,
    Text: Chunk219561.t,
    Heading: Chunk219561.Oo
  },
  m = e => {
    let {
      overrides: t
    } = e;
    return r.useMemo(() => {
      let e = (0, i.cloneDeep)(h);
      if (null != t)
        for (let [n, r] of Object.entries(t)) null != r && (e[n] = r);
      return e
    }, [t])
  }