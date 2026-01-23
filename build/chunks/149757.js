/** Chunk was on web.js **/
/** chunk id: 149757, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => v,
  N: () => O
});
var Chunk788868 = require("./788868.js"),
  Chunk714206 = require("./714206.js"),
  Chunk151818 = require("./151818.js"),
  Chunk153578 = require("./153578.js"),
  Chunk971180 = require("./971180.js"),
  Chunk104876 = require("./104876.js"),
  Chunk803630 = require("./803630.js"),
  Chunk797898 = require("./797898.js"),
  Chunk112153 = require("./112153.js"),
  Chunk122725 = require("./122725.js"),
  Chunk695351 = require("./695351.js"),
  Chunk460901 = require("./460901.js"),
  Chunk367056 = require("./367056.js"),
  Chunk395663 = require("./395663.js"),
  Chunk907990 = require("./907990.js"),
  Chunk164331 = require("./164331.js"),
  Chunk997734 = require("./997734.js");
let b = {
    [Chunk788868.Ac.PREMIUM_TENURE_1_MONTH]: {
      standard: Chunk714206,
      ambient: Chunk122725.A
    },
    [Chunk788868.Ac.PREMIUM_TENURE_3_MONTH]: {
      standard: Chunk112153,
      ambient: Chunk695351.A
    },
    [Chunk788868.Ac.PREMIUM_TENURE_6_MONTH]: {
      standard: Chunk971180,
      ambient: Chunk460901.A
    },
    [Chunk788868.Ac.PREMIUM_TENURE_12_MONTH]: {
      standard: Chunk803630,
      ambient: Chunk367056.A
    },
    [Chunk788868.Ac.PREMIUM_TENURE_24_MONTH]: {
      standard: Chunk151818,
      ambient: Chunk395663.A
    },
    [Chunk788868.Ac.PREMIUM_TENURE_36_MONTH]: {
      standard: Chunk153578,
      ambient: Chunk907990.A
    },
    [Chunk788868.Ac.PREMIUM_TENURE_60_MONTH]: {
      standard: Chunk797898,
      ambient: Chunk164331.A
    },
    [Chunk788868.Ac.PREMIUM_TENURE_72_MONTH]: {
      standard: Chunk104876,
      ambient: Chunk997734.A
    }
  },
  O = function(e) {
    let {
      ambient: t = false
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    return null != e ? v(e, {
      ambient: t
    }) : null
  };

function v(e) {
  let {
    ambient: t = false
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, n = b[e];
  return t ? n.ambient : n.standard
}