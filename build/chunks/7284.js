/** Chunk was on web.js **/
/** chunk id: 7284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => _,
  j: () => p
});
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk342905 = require("./342905.js"),
  Chunk526167 = require("./526167.js"),
  Chunk594928 = require("./594928.js"),
  Chunk181430 = require("./181430.js"),
  Chunk62222 = require("./62222.js"),
  Chunk677970 = require("./677970.js");
let d = {
    name: Chunk62222.default.ZEL6m5,
    className: ""
  },
  f = {
    [Chunk342905.C.DEFAULT]: d,
    [Chunk342905.C.CHERRY_BOMB]: {
      name: Chunk62222.default.rN7cub,
      className: Chunk677970.cherryBomb
    },
    [Chunk342905.C.CHICLE]: {
      name: Chunk62222.default.CbHHnJ,
      className: Chunk677970.chicle
    },
    [Chunk342905.C.MUSEO_MODERNO]: {
      name: Chunk62222.default.iEcEKC,
      className: Chunk677970.museoModerno
    },
    [Chunk342905.C.NEO_CASTEL]: {
      name: Chunk62222.default.DL7jLS,
      className: Chunk677970.neoCastel
    },
    [Chunk342905.C.PIXELIFY]: {
      name: Chunk62222.default.jq4aRk,
      className: Chunk677970.pixelify
    },
    [Chunk342905.C.SINISTRE]: {
      name: Chunk62222.default.jV9DNz,
      className: Chunk677970.sinistre
    },
    [Chunk342905.C.ZILLA_SLAB]: {
      name: Chunk62222.default.KMR8ra,
      className: Chunk677970.zillaSlab
    }
  };

function _(e) {
  var t;
  return null != (t = f[e]) ? t : d
}

function p(e) {
  var t;
  let {
    displayNameStyles: n,
    inProfile: r
  } = e, {
    includeNonProfile: a
  } = s.fN.useExperiment({
    location: "useDisplayNameStylesFont"
  });
  if (!(0, l.Y)({
      location: "useDisplayNameStylesFont"
    }) || !r && !a || null == n) return "";
  let c = null != (t = f[n.fontId]) ? t : d;
  return "" === c.className ? "" : i()(u.dnsFont, c.className, {
    [u.safari]: (0, o.G6)()
  })
}