/** Chunk was on web.js **/
/** chunk id: 545594, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk469285 = require("./469285.js");

function s(e) {
  let {
    bannerIcon: t,
    bannerHeader: n,
    bannerSubtext: i,
    textStyles: s,
    headerStyles: l,
    containerStyles: c,
    children: u
  } = e;
  return <div className={o()(a.spamBanner, c)}>{<div className={o()(a.bannerTextContainer, s)}>{null != t && ("string" == typeof t ? <img src={t} alt={""} className={a.bannerIcon} /> : t)}{<div className={a.bannerText}>{<div className={o()(a.bannerHeader, l)}>{n}</div>}{null != i && <div className={a.bannerSubtext}>{i}</div>}</div>}</div>}{<div className={a.actionButtons}>{u}</div>}</div>
}