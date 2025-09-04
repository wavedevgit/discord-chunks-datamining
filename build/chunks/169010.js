/** Chunk was on 44799 **/
/** chunk id: 169010, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => a,
  z: () => i
}), require("./388685.js"), require("./539854.js");
var Chunk494497 = require("./494497.js"),
  Chunk535396 = require("./535396.js");
let i = {
    guildTagsBadgePacks: [Chunk494497.MB, Chunk494497.Vk]
  },
  l = Object.entries(i).reduce((e, t) => {
    let [n, r] = t;
    for (let t of r) e[t] = n;
    return e
  }, {});

function a(e, t, n) {
  let i = [],
    a = t.reduce((e, t) => {
      if (t.type !== o.Us.PERK) return e;
      let n = l[t.skuId];
      return null == n || (null != e[n] || (e[n] = []), e[n].push(t)), e
    }, {});
  for (let e of t) {
    if (e.type === o.Us.LEVEL) {
      i.push({
        type: "singleLevel",
        powerup: e
      });
      continue
    }
    let t = l[e.skuId];
    if (null != t) {
      let e = a[t];
      true !== e && (i.push({
        type: "multiPerk",
        group: t,
        powerups: e
      }), a[t] = true);
      continue
    }
    i.push({
      type: "singlePerk",
      powerup: e
    })
  }
  return n && e === o.Us.PERK && i.push({
      type: "portkey"
    }),
    function(e) {
      let t = e.findIndex(e => "singlePerk" === e.type && e.powerup.skuId === r.IN),
        n = e.findIndex(e => "multiPerk" === e.type && "guildTagsBadgePacks" === e.group);
      if (false !== t && false !== n && n !== t + 1) {
        let t = [...e],
          [o] = t.splice(n, 1),
          i = t.findIndex(e => "singlePerk" === e.type && e.powerup.skuId === r.IN);
        return t.splice(i + 1, 0, o), t
      }
      return e
    }(i)
}