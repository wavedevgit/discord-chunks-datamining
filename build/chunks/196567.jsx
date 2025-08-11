/** Chunk was on web.js **/
/** chunk id: 196567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk314943 = require("./314943.js");

function l(e) {
  let {
    className: t,
    copy: n,
    bannerImage: i,
    textColor: l = "always-white",
    hideGiftIcon: c = false,
    hideNitroIcon: u = false
  } = e;
  return <div className={o()(s.bannerContainer, t)}>{null == i ? null : <img alt={""} className={s.banner} src={i} />}{<div className={s.textContainer}>{false === c && <a.OgN size={"md"} color={"currentColor"} className={s.giftIcon} />}{false === u && <a.SrA size={"md"} color={a.TVs.colors.TEXT_INVERT} className={s.nitroIcon} />}{<a.X6q className={o()(s.textHeader, {
          [s.textHeaderWithIcon]: !c
        })} color={l} variant={"heading-md/bold"}>{n}</a.X6q>}</div>}</div>
}