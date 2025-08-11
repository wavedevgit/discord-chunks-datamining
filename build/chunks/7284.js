/** Chunk was on web.js **/
/** chunk id: 7284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => u,
  y: () => c
});
var Chunk342905 = require("./342905.js"),
  Chunk594928 = require("./594928.js"),
  Chunk181430 = require("./181430.js"),
  Chunk698282 = require("./698282.js"),
  Chunk772335 = require("./772335.js");
let l = {
    name: Chunk698282.default.ZEL6m5,
    className: ""
  },
  c = {
    [Chunk342905.C.DEFAULT]: l,
    [Chunk342905.C.CHERRY_BOMB]: {
      name: Chunk698282.default.rN7cub,
      className: Chunk772335.cherryBomb
    },
    [Chunk342905.C.CHICLE]: {
      name: Chunk698282.default.CbHHnJ,
      className: Chunk772335.chicle
    },
    [Chunk342905.C.MUSEO_MODERNO]: {
      name: Chunk698282.default.iEcEKC,
      className: Chunk772335.museoModerno
    },
    [Chunk342905.C.NEO_CASTEL]: {
      name: Chunk698282.default.DL7jLS,
      className: Chunk772335.neoCastel
    },
    [Chunk342905.C.PIXELIFY]: {
      name: Chunk698282.default.jq4aRk,
      className: Chunk772335.pixelify
    },
    [Chunk342905.C.SINISTRE]: {
      name: Chunk698282.default.jV9DNz,
      className: Chunk772335.sinistre
    },
    [Chunk342905.C.ZILLA_SLAB]: {
      name: Chunk698282.default.KMR8ra,
      className: Chunk772335.zillaSlab
    },
    [Chunk342905.C.BIO_RHYME]: l,
    [Chunk342905.C.BANGERS]: l,
    [Chunk342905.C.COMPAGNON]: l,
    [Chunk342905.C.RIBES]: l
  };

function u(e) {
  var t;
  let {
    displayNameStyles: n,
    inProfile: r
  } = e, {
    includeNonProfile: a
  } = i.f.useExperiment({
    location: "useDisplayNameStylesFont"
  });
  if (!(0, o.Y)({
      location: "useDisplayNameStylesFont"
    }) || !r && !a || null == n) return "";
  let s = c[n.fontId];
  return null != (t = null == s ? true : s.className) ? t : ""
}