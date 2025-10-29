/** Chunk was on 44799 **/
/** chunk id: 169010, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => a,
  z: () => o
}), require("./388685.js"), require("./539854.js");
var Chunk494497 = require("./494497.js"),
  Chunk535396 = require("./535396.js");
let o = {
    guildTagsBadgePacks: [Chunk494497.MB, Chunk494497.Vk]
  },
  l = Object.entries(o).reduce((e, t) => {
    let [n, r] = t;
    for (let t of r) e[t] = n;
    return e
  }, {});

function a(e, t, n) {
  let o = [];
  n && e === i.Us.PERK && o.push({
    type: "gameServer"
  });
  let a = t.reduce((e, t) => {
    if (t.type !== i.Us.PERK) return e;
    let n = l[t.skuId];
    return null == n || (null != e[n] || (e[n] = []), e[n].push(t)), e
  }, {});
  for (let e of t) {
    if (e.type === i.Us.LEVEL) {
      o.push({
        type: "singleLevel",
        powerup: e
      });
      continue
    }
    let t = l[e.skuId];
    if (null != t) {
      let e = a[t];
      true !== e && (o.push({
        type: "multiPerk",
        group: t,
        powerups: e
      }), a[t] = true);
      continue
    }
    o.push({
      type: "singlePerk",
      powerup: e
    })
  }
  return function(e) {
    let t = e.findIndex(e => "singlePerk" === e.type && e.powerup.skuId === r.IN),
      n = e.findIndex(e => "multiPerk" === e.type && "guildTagsBadgePacks" === e.group);
    if (false !== t && false !== n && n !== t + 1) {
      let t = [...e],
        [i] = t.splice(n, 1),
        o = t.findIndex(e => "singlePerk" === e.type && e.powerup.skuId === r.IN);
      return t.splice(o + 1, 0, i), t
    }
    return e
  }(o)
}