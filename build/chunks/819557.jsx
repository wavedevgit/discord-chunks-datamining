/** Chunk was on web.js **/
/** chunk id: 819557, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => c,
  z: () => l
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk916704 = require("./916704.js");

function l(e) {
  let {
    children: t
  } = e;
  return <div className={s.cellGroup}><div className={s.content}>{t}</div></div>
}

function c(e) {
  let {
    icon: t,
    title: n,
    description: i,
    iconClassName: l,
    color: c,
    listType: u = "icon",
    index: d
  } = e;
  return <div className={s.cell}>{"numbered" === u && null != d ? <a.X6q variant={"heading-md/semibold"} color={"text-brand"} className={s.number}>{d + 1}</a.X6q> : null != t && <div className={s.iconContainer}><t color={null != c ? c : "currentColor"} className={o()(s.icon, l)} /></div>}{<div className={s.textContainer}>{<a.Text variant={"text-md/semibold"} color={"header-primary"}>{n}</a.Text>}{null != i && <a.Text variant={"text-xs/medium"} color={"text-secondary"}>{i}</a.Text>}</div>}</div>
}