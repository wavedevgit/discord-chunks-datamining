/** Chunk was on web.js **/
/** chunk id: 345898, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk360044 = require("./360044.js");
let l = e => {
  let {
    renderTitle: t,
    renderTagline: n,
    renderActions: i,
    renderMedia: l,
    className: c,
    isHorizontal: u = false
  } = e;
  return <div className={o()(s.tile, {
      [s.tileHorizontal]: u
    }, c)}>{<div className={o()(s.media, {
        [s.mediaHorizontal]: u
      })}>{null == l ? true : l()}</div>}{<div className={s.description}>{<a.H className={s.title}>{null == t ? true : t()}</a.H>}{<div className={s.tagline}>{null == n ? true : n()}</div>}{<div className={s.actions}>{null == i ? true : i()}</div>}</div>}</div>
}