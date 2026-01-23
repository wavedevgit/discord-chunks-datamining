/** Chunk was on 88615 **/
/** chunk id: 884684, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  MO: () => d
}), require("./896048.js"), require("./321073.js"), require("./667532.js");
var Chunk64700 = require("./64700.js"),
  Chunk512750 = require("./512750.js"),
  Chunk311907 = require("./311907.js"),
  Chunk645619 = require("./645619.js"),
  Chunk568065 = require("./568065.js");
let a = Object.entries({
    guildTagsBadgePacks: [Chunk512750.OJ, Chunk512750.jF]
  }).reduce((e, t) => {
    let [n, r] = t;
    for (let t of r) e[t] = n;
    return e
  }, {}),
  u = [Chunk568065.o9.LEVEL, Chunk568065.o9.PERK];

function d(e, t) {
  let n = (0, i.bG)([o.A], () => o.A.getStateForGuild(e));
  return r.useMemo(() => u.reduce((e, r) => {
    let i = null == n ? true : n.powerupCatalog[r];
    if (null == i) return e;
    let o = function(e, t, n) {
      let r = [],
        i = t.reduce((e, t) => {
          if (t.type !== s.o9.PERK) return e;
          let n = a[t.skuId];
          return null == n || (null != e[n] || (e[n] = []), e[n].push(t)), e
        }, {});
      for (let e of t) {
        if (e.type === s.o9.LEVEL) {
          r.push({
            type: "singleLevel",
            powerup: e
          });
          continue
        }
        let t = a[e.skuId];
        if (null != t) {
          let e = i[t];
          true !== e && (r.push({
            type: "multiPerk",
            group: t,
            powerups: e
          }), i[t] = true);
          continue
        }
        r.push({
          type: "singlePerk",
          powerup: e
        })
      }
      return n && e === s.o9.PERK && r.unshift({
          type: "gameServer"
        }),
        function(e) {
          let t = e.findIndex(e => "singlePerk" === e.type && e.powerup.skuId === l.SL),
            n = e.findIndex(e => "multiPerk" === e.type && "guildTagsBadgePacks" === e.group);
          if (false !== t && false !== n && n !== t + 1) {
            let t = [...e],
              [r] = t.splice(n, 1),
              i = t.findIndex(e => "singlePerk" === e.type && e.powerup.skuId === l.SL);
            return t.splice(i + 1, 0, r), t
          }
          return e
        }(r)
    }(r, i, t);
    return e.push({
      type: r,
      listings: o
    }), e
  }, []), [null == n ? true : n.powerupCatalog, t])
}