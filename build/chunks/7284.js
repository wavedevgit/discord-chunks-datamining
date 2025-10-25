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
  Chunk569165 = require("./569165.js"),
  Chunk806539 = require("./806539.js");
let d = {
    name: Chunk569165.default.ZEL6mz,
    className: ""
  },
  f = {
    [Chunk342905.C.DEFAULT]: d,
    [Chunk342905.C.CHERRY_BOMB]: {
      name: Chunk569165.default.rN7cuX,
      className: Chunk806539.cherryBomb
    },
    [Chunk342905.C.CHICLE]: {
      name: Chunk569165.default.CbHHnL,
      className: Chunk806539.chicle
    },
    [Chunk342905.C.MUSEO_MODERNO]: {
      name: Chunk569165.default.iEcEKO,
      className: Chunk806539.museoModerno
    },
    [Chunk342905.C.NEO_CASTEL]: {
      name: Chunk569165.default.DL7jLZ,
      className: Chunk806539.neoCastel
    },
    [Chunk342905.C.PIXELIFY]: {
      name: Chunk569165.default.jq4aRp,
      className: Chunk806539.pixelify
    },
    [Chunk342905.C.SINISTRE]: {
      name: Chunk569165.default.jV9DN4,
      className: Chunk806539.sinistre
    },
    [Chunk342905.C.ZILLA_SLAB]: {
      name: Chunk569165.default.KMR8rT,
      className: Chunk806539.zillaSlab
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