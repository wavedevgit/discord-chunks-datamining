/** Chunk was on web.js **/
/** chunk id: 111613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => c,
  E8: () => o
}), require("./638769.js"), require("./321073.js"), require("./264879.js"), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438);
let a = new(require("./626584.js")).A("DragAndDropUtils");

function s(e) {
  let {
    oldOrdering: t,
    newOrdering: n,
    idGetter: r,
    existingPositionGetter: i,
    ascending: s = true
  } = e, o = n.length;
  if (t.length !== o) return a.warn("Arrays are not of the same length!", t, n), [];
  let l = t.map(r).sort().join(":"),
    c = n.map(r).sort().join(":");
  if (l !== c) return a.warn("Object IDs in the old ordering and the new ordering are not the same.", l, c), [];
  let u = {};
  for (let e = 0; e < o; e++) u[r(t[e])] = i(t[e]);
  let d = [];
  for (let e = 0; e < o; e++) {
    let t = r(n[e]),
      a = u[t],
      l = s ? e : o - 1 - e;
    (a !== l || i(n[e]) !== l) && d.push({
      id: t,
      position: l
    })
  }
  return s || d.reverse(), d
}

function o(e, t, n) {
  let r = e[t],
    i = [...e];
  return i.splice(t, 1), i.splice(n, 0, r), i
}

function l(e) {
  let {
    objectArray: t,
    fromPosition: n,
    toPosition: r,
    idGetter: a,
    existingPositionGetter: l,
    ascending: c = true
  } = e;
  Array.isArray(t) || (t = i().values(t));
  let u = o(t, n, r);
  return s({
    oldOrdering: t,
    newOrdering: u,
    idGetter: a,
    existingPositionGetter: l,
    ascending: c
  })
}
let c = {
  moveItemFromTo: o,
  calculatePositionDeltas: s,
  getPositionUpdates: l
}