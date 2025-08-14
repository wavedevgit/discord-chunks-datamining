/** Chunk was on web.js **/
/** chunk id: 7284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => f,
  y: () => d
});
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk342905 = require("./342905.js"),
  Chunk594928 = require("./594928.js"),
  Chunk181430 = require("./181430.js"),
  Chunk693450 = require("./693450.js"),
  Chunk806539 = require("./806539.js");
let u = {
    name: Chunk693450.default.ZEL6m5,
    className: ""
  },
  d = {
    [Chunk342905.C.DEFAULT]: u,
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
    [Chunk342905.C.BIO_RHYME]: u,
    [Chunk342905.C.BANGERS]: u,
    [Chunk342905.C.COMPAGNON]: u,
    [Chunk342905.C.RIBES]: u
  };

function f(e) {
  var t;
  let {
    displayNameStyles: n,
    inProfile: r
  } = e, {
    includeNonProfile: o
  } = a.f.useExperiment({
    location: "useDisplayNameStylesFont"
  });
  if (!(0, s.Y)({
      location: "useDisplayNameStylesFont"
    }) || !r && !o || null == n) return "";
  let l = null != (t = d[n.fontId]) ? t : u;
  return "" === l.className ? "" : i()(c.dnsFont, l.className)
}