/** Chunk was on web.js **/
/** chunk id: 512100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => u
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk409794 = require("./409794.jsx"),
  Chunk777207 = require("./777207.js"),
  Chunk541822 = require("./541822.js"),
  Chunk330711 = require("./330711.js"),
  Chunk845533 = require("./845533.js");
let c = 96;

function u(e) {
  let {
    benefits: t,
    description: n,
    imgSrc: u,
    title: d,
    tag: f,
    FallbackIcon: _
  } = e, p = null != u ? {
    "--custom-background-url": "url(".concat(u.toString(), ")")
  } : true, h = null != n && "" !== n;
  return <div className={l.container}><a.Z className={l.scroller}><div className={l.scrollContent}>{<div className={l.header}>{<div className={l.headerBackground} style={p} />}{<div className={l.headerImage}>{null != u ? (0, r.jsx)("img", {
              src: u.toString(),
              alt: ""
            }) : (0, r.jsx)(_, {
              size: "custom",
              color: "var(--text-muted)",
              height: c,
              width: c
            })}</div>}</div>}{<div className={l.content}>{<div className={l.details}>{null != f && <div>{f}</div>}{<i.X color={"header-primary"} variant={"heading-xl/semibold"}>{d}</i.X>}{h && <o.x color={"text-default"} variant={"text-md/normal"} className={l.description}>{n}</o.x>}</div>}{null != t && <div className={l.benefits}>{<o.x color={"header-secondary"} variant={"eyebrow"}>{s.Z.Messages.STOREFRONT_BENEFITS_TITLE}</o.x>}{t}</div>}</div>}</div></a.Z></div>
}