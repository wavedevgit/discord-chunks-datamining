/** Chunk was on web.js **/
/** chunk id: 73392, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => f,
  p: () => d
});
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk559949 = require("./559949.js"),
  Chunk676279 = require("./676279.js"),
  Chunk913563 = require("./913563.js"),
  Chunk824994 = require("./824994.js"),
  Chunk464998 = require("./464998.js");
let u = {
  [Chunk559949.x.DEFAULT]: "",
  [Chunk559949.x.CHERRY_BOMB]: Chunk464998.u_,
  [Chunk559949.x.CHICLE]: Chunk464998.xO,
  [Chunk559949.x.MUSEO_MODERNO]: Chunk464998._,
  [Chunk559949.x.NEO_CASTEL]: Chunk464998.pN,
  [Chunk559949.x.PIXELIFY]: Chunk464998.f,
  [Chunk559949.x.SINISTRE]: Chunk464998.yH,
  [Chunk559949.x.ZILLA_SLAB]: Chunk464998.FR
};

function d(e) {
  var t;
  return {
    name: (0, s.A)(e),
    className: null != (t = u[e]) ? t : ""
  }
}

function f(e) {
  let {
    displayNameStyles: t
  } = e;
  if (!(0, l.W)({
      location: "useDisplayNameStylesFont"
    }) || null == t) return "";
  let n = d(t.fontId);
  return "" === n.className ? "" : i()(c.zt, n.className, {
    [c.VM]: (0, o.nr)()
  })
}