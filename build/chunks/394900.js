/** Chunk was on 54628 **/
/** chunk id: 394900, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk37484 = require("./37484.js"),
  Chunk665352 = require("./665352.js"),
  Chunk798192 = require("./798192.js"),
  Chunk181568 = require("./181568.js"),
  Chunk103671 = require("./103671.js"),
  Chunk262281 = require("./262281.js"),
  Chunk830927 = require("./830927.js");

function l(e, {
  precision: t = o.Z.precision,
  format: r = "default",
  inGamut: f = true,
  ...b
} = {}) {
  let d;
  e = (0, s.Z)(e);
  let h = r;
  r = e.space.getFormat(r) ?? e.space.getFormat("default") ?? n.Z.DEFAULT_FORMAT;
  let p = e.coords.slice();
  if ((f ||= r.toGamut) && !(0, i.Z)(e) && (p = (0, c.Z)((0, u.Z)(e), true === f ? true : f).coords), "custom" === r.type)
    if (b.precision = t, r.serialize) d = r.serialize(p, e.alpha, b);
    else throw TypeError(`format ${h} can only be used to parse colors, not for serialization`);
  else {
    let n = r.name || "color";
    r.serializeCoords ? p = r.serializeCoords(p, t) : null !== t && (p = p.map(e => a.zL(e, {
      precision: t
    })));
    let o = [...p];
    if ("color" === n) {
      let t = r.id || r.ids?.[0] || e.space.id;
      o.unshift(t)
    }
    let s = e.alpha;
    null !== t && (s = a.zL(s, {
      precision: t
    }));
    let i = e.alpha >= 1 || r.noAlpha ? "" : `${r.commas?",":" /"} ${s}`;
    d = `${n}(${o.join(r.commas?", ":" ")}${i})`
  }
  return d
}