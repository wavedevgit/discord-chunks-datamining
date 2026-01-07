/** Chunk was on 44799 **/
/** chunk id: 169010, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _P: () => c
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk905128 = require("./905128.js"),
  Chunk535396 = require("./535396.js");
let s = Object.entries({
    guildTagsBadgePacks: [Chunk494497.MB, Chunk494497.Vk]
  }).reduce((e, t) => {
    let [n, r] = t;
    for (let t of r) e[t] = n;
    return e
  }, {}),
  u = [Chunk535396.Us.LEVEL, Chunk535396.Us.PERK];

function c(e, t) {
  let n = (0, o.e7)([l.Z], () => l.Z.getStateForGuild(e));
  return r.useMemo(() => u.reduce((e, r) => {
    let o = null == n ? true : n.powerupCatalog[r];
    if (null == o) return e;
    let l = function(e, t, n) {
      let r = [];
      n && e === a.Us.PERK && r.push({
        type: "gameServer"
      });
      let o = t.reduce((e, t) => {
        if (t.type !== a.Us.PERK) return e;
        let n = s[t.skuId];
        return null == n || (null != e[n] || (e[n] = []), e[n].push(t)), e
      }, {});
      for (let e of t) {
        if (e.type === a.Us.LEVEL) {
          r.push({
            type: "singleLevel",
            powerup: e
          });
          continue
        }
        let t = s[e.skuId];
        if (null != t) {
          let e = o[t];
          true !== e && (r.push({
            type: "multiPerk",
            group: t,
            powerups: e
          }), o[t] = true);
          continue
        }
        r.push({
          type: "singlePerk",
          powerup: e
        })
      }
      return function(e) {
        let t = e.findIndex(e => "singlePerk" === e.type && e.powerup.skuId === i.IN),
          n = e.findIndex(e => "multiPerk" === e.type && "guildTagsBadgePacks" === e.group);
        if (false !== t && false !== n && n !== t + 1) {
          let t = [...e],
            [r] = t.splice(n, 1),
            o = t.findIndex(e => "singlePerk" === e.type && e.powerup.skuId === i.IN);
          return t.splice(o + 1, 0, r), t
        }
        return e
      }(r)
    }(r, o, t);
    return e.push({
      type: r,
      listings: l
    }), e
  }, []), [null == n ? true : n.powerupCatalog, t])
}