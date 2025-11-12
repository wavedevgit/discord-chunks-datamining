/** Chunk was on 44799 **/
/** chunk id: 169010, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => a,
  z: () => l
}), require("./388685.js"), require("./539854.js");
var Chunk494497 = require("./494497.js"),
  Chunk535396 = require("./535396.js");
let l = {
    guildTagsBadgePacks: [Chunk494497.MB, Chunk494497.Vk]
  },
  o = Object.entries(l).reduce((e, t) => {
    let [n, r] = t;
    for (let t of r) e[t] = n;
    return e
  }, {});

function a(e, t, n) {
  let l = [];
  n && e === i.Us.PERK && l.push({
    type: "gameServer"
  });
  let a = t.reduce((e, t) => {
    if (t.type !== i.Us.PERK) return e;
    let n = o[t.skuId];
    return null == n || (null != e[n] || (e[n] = []), e[n].push(t)), e
  }, {});
  for (let e of t) {
    if (e.type === i.Us.LEVEL) {
      l.push({
        type: "singleLevel",
        powerup: e
      });
      continue
    }
    let t = o[e.skuId];
    if (null != t) {
      let e = a[t];
      true !== e && (l.push({
        type: "multiPerk",
        group: t,
        powerups: e
      }), a[t] = true);
      continue
    }
    l.push({
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
        l = t.findIndex(e => "singlePerk" === e.type && e.powerup.skuId === r.IN);
      return t.splice(l + 1, 0, i), t
    }
    return e
  }(l)
}