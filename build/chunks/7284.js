/** Chunk was on web.js **/
/** chunk id: 7284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => _,
  y: () => f
});
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk342905 = require("./342905.js"),
  Chunk526167 = require("./526167.js"),
  Chunk594928 = require("./594928.js"),
  Chunk181430 = require("./181430.js"),
  Chunk693450 = require("./693450.js"),
  Chunk806539 = require("./806539.js");
let d = {
    name: Chunk693450.default.ZEL6m5,
    className: ""
  },
  f = {
    [Chunk342905.C.DEFAULT]: d,
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
    [Chunk342905.C.BIO_RHYME]: d,
    [Chunk342905.C.BANGERS]: d,
    [Chunk342905.C.COMPAGNON]: d,
    [Chunk342905.C.RIBES]: d
  };

function _(e) {
  var t;
  let {
    displayNameStyles: n,
    inProfile: r
  } = e, {
    includeNonProfile: a
  } = s.f.useExperiment({
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