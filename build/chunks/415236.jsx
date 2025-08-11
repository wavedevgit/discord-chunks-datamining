/** Chunk was on 86915 **/
/** chunk id: 415236, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk332067 = require("./332067.js");

function a(e) {
  let {
    description: t,
    icon: n,
    id: a,
    label: o,
    onChange: c,
    value: d
  } = e;
  return <div className={s.cardContent}>{<r.Z justify={r.Z.Justify.BETWEEN} align={r.Z.Align.CENTER}>{n}{<r.Z.Child grow={1}><l.Text variant={"text-md/semibold"}>{o}</l.Text></r.Z.Child>}{null != c && null != d && <l.rsf id={a} checked={d} onChange={c} />}</r.Z>}{<l.Text variant={"text-xs/normal"} color={"text-default"} className={s.cardDescription}>{t}</l.Text>}</div>
}