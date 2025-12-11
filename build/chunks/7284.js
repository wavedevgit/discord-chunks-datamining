/** Chunk was on web.js **/
/** chunk id: 7284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => f,
  j: () => p
});
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk342905 = require("./342905.js"),
  Chunk526167 = require("./526167.js"),
  Chunk594928 = require("./594928.js"),
  Chunk817330 = require("./817330.js"),
  Chunk181430 = require("./181430.js"),
  Chunk717360 = require("./717360.js");
let d = {
  [Chunk342905.C.DEFAULT]: "",
  [Chunk342905.C.CHERRY_BOMB]: Chunk717360.cherryBomb,
  [Chunk342905.C.CHICLE]: Chunk717360.chicle,
  [Chunk342905.C.MUSEO_MODERNO]: Chunk717360.museoModerno,
  [Chunk342905.C.NEO_CASTEL]: Chunk717360.neoCastel,
  [Chunk342905.C.PIXELIFY]: Chunk717360.pixelify,
  [Chunk342905.C.SINISTRE]: Chunk717360.sinistre,
  [Chunk342905.C.ZILLA_SLAB]: Chunk717360.zillaSlab
};

function f(e) {
  var t;
  return {
    name: (0, l.Z)(e),
    className: null != (t = d[e]) ? t : ""
  }
}

function p(e) {
  let {
    displayNameStyles: t,
    inProfile: n
  } = e, {
    includeNonProfile: r
  } = s.fN.useExperiment({
    location: "useDisplayNameStylesFont"
  });
  if (!(0, c.Y)({
      location: "useDisplayNameStylesFont"
    }) || !n && !r || null == t) return "";
  let a = f(t.fontId);
  return "" === a.className ? "" : i()(u.dnsFont, a.className, {
    [u.safari]: (0, o.G6)()
  })
}