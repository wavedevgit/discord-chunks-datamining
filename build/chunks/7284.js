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
  Chunk693450 = require("./693450.js"),
  Chunk806539 = require("./806539.js");
let l = {
    name: Chunk693450.default.ZEL6m5,
    className: ""
  },
  c = {
    [Chunk342905.C.DEFAULT]: l,
    [Chunk342905.C.CHERRY_BOMB]: {
      name: Chunk693450.default.rN7cub,
      className: Chunk806539.cherryBomb
    },
    [Chunk342905.C.CHICLE]: {
      name: Chunk693450.default.CbHHnJ,
      className: Chunk806539.chicle
    },
    [Chunk342905.C.MUSEO_MODERNO]: {
      name: Chunk693450.default.iEcEKC,
      className: Chunk806539.museoModerno
    },
    [Chunk342905.C.NEO_CASTEL]: {
      name: Chunk693450.default.DL7jLS,
      className: Chunk806539.neoCastel
    },
    [Chunk342905.C.PIXELIFY]: {
      name: Chunk693450.default.jq4aRk,
      className: Chunk806539.pixelify
    },
    [Chunk342905.C.SINISTRE]: {
      name: Chunk693450.default.jV9DNz,
      className: Chunk806539.sinistre
    },
    [Chunk342905.C.ZILLA_SLAB]: {
      name: Chunk693450.default.KMR8ra,
      className: Chunk806539.zillaSlab
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
  return (0, o.Y)({
    location: "useDisplayNameStylesFont"
  }) && (r || a) && null != n ? (null != (t = c[n.fontId]) ? t : l).className : ""
}