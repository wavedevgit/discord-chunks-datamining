/** Chunk was on web.js **/
/** chunk id: 645652, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk819758 = require("./819758.js"),
  Chunk863807 = require("./863807.js");

function l(e) {
  let {
    className: t,
    children: n,
    forceUseColor: i = false,
    hideStars: l
  } = e;
  return <span className={o()(s.container, t, {
      [s.containerColored]: i
    })}>{n}{l ? null : <r.Fragment>{<a.Z foreground={s.sparkleStarTopRight} />}{<a.Z foreground={s.sparkleStarRight} />}{<a.Z foreground={s.sparkleStarBottomLeft} />}</r.Fragment>}</span>
}