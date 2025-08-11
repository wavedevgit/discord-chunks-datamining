/** Chunk was on web.js **/
/** chunk id: 562618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk756715 = require("./756715.js"),
  Chunk446673 = require("./446673.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk669546 = require("./669546.js");

function u(e) {
  var t;
  let {
    title: n,
    body: i,
    badge: u,
    className: d,
    textLink: f,
    hasBottomMargin: _ = false
  } = e, p = null == (t = null == f ? true : f.external) || t;
  return <div className={o()(c.header, d, {
      [c.hasActions]: _
    })}>{<div>{null != u && <div className={c.badgeContainer}><s.C badge={u} /></div>}{<l.X6q variant={"heading-md/semibold"} className={c.title}>{n}</l.X6q>}</div>}{null != i && "" !== i && <l.Text variant={"text-sm/normal"} className={c.headerBody}>{i}</l.Text>}{null != f && <a.Anchor href={f.link} target={p ? "_blank" : true} rel={p ? "noopener noreferrer" : true}><l.Text variant={"text-sm/normal"} className={c.footerLink}>{f.text}</l.Text></a.Anchor>}</div>
}