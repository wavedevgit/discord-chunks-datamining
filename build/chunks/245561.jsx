/** Chunk was on web.js **/
/** chunk id: 245561, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GU: () => u
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.js"),
  Chunk889989 = require("./889989.js"),
  Chunk97629 = require("./97629.js");

function u(e) {
  let t, {
    applicationId: n,
    storeListingBenefits: i,
    skuBenefits: o,
    className: a
  } = e;
  return null != i ? t = i.map(e => <f applicationId={n} benefit={e} className={a} />) : null != o && (t = o.map((e, t) => <d benefit={e} className={a} />)), t
}

function d(e) {
  let {
    benefit: t,
    className: n,
    emojiContainerClassName: i,
    showsDescription: l = true,
    nameTextVariant: u = "text-md/medium",
    nameTextColor: d = "header-primary"
  } = e;
  return <div className={o()(c.container, n)}>{null != t.emoji && <div className={o()(c.emojiContainer, i)}><s.Z emojiId={t.emoji.id} emojiName={t.emoji.name} animated={t.emoji.animated} /></div>}{<div className={c.infoContainer}>{<a.Text variant={u} color={d} className={c.name}>{t.name}</a.Text>}{l && <a.Text color={"interactive-normal"} variant={"text-sm/normal"}>{t.description}</a.Text>}</div>}</div>
}

function f(e) {
  let {
    applicationId: t,
    benefit: n,
    className: i,
    emojiContainerClassName: s,
    showsDescription: u = true,
    nameTextVariant: d = "text-md/medium",
    nameTextColor: f = "header-primary"
  } = e;
  return <div className={o()(c.container, i)}>{<div className={o()(c.emojiContainer, s)}>{(0, l.n)(t, n.icon)}</div>}{<div className={c.infoContainer}>{<a.Text variant={d} color={f} className={c.name}>{n.name}</a.Text>}{u && <a.Text color={"interactive-normal"} variant={"text-sm/normal"}>{n.description}</a.Text>}</div>}</div>
}