/** Chunk was on 31924 **/
/** chunk id: 268574, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk473749 = require("./473749.js"),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk14263 = require("./14263.js"),
  Chunk650774 = require("./650774.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk158638 = require("./158638.js"),
  Chunk5238 = require("./5238.js"),
  Chunk388032 = require("./388032.jsx");

function b(e, t) {
  let n = (0, a.e7)([c.Z], () => c.Z.getMemberCount(e)),
    b = (0, i.Z)(e),
    m = (0, a.e7)([s.Z], () => {
      var t;
      return (null == (t = s.Z.getGuild(e)) ? true : t.vanityURLCode) != null
    }),
    p = (0, u.g1)(e, "Powerup Deactivate Modal"),
    k = (0, a.e7)([l.Z], () => t.skuId !== o.If || null == b ? 0 : l.Z.getSortedRoles(e).reduce((e, t) => {
      var n, r;
      return (null == (n = t.colorStrings) ? true : n.secondaryColor) == null ? e : e + (null != (r = b[t.id]) ? r : 0)
    }, 0), [e, t.skuId, b]);
  return r.useMemo(() => {
    let e;
    switch (t.skuId) {
      case o.If:
        e = k > 0 ? f.intl.formatToPlainString(d.default["4jSvr1"], {
          perk: t.title,
          memberCount: k
        }) : f.intl.formatToPlainString(d.default.cavtEo, {
          perk: t.title
        });
        break;
      case o.A$:
        e = m ? f.intl.string(d.default.hN75yb) : f.intl.string(d.default.Du91Rb);
        break;
      case o.MB:
      case o.Vk:
        e = f.intl.string(d.default.Vf2ZcR);
        break;
      default:
        e = f.intl.formatToPlainString(d.default["4jSvr1"], {
          perk: t.title,
          memberCount: null != n ? n : 0
        })
    }
    let r = null;
    return m && t.skuId === o.XW && (r = p ? f.intl.string(d.default.TkNA7b) : f.intl.string(d.default.M4XL5n)), {
      warningText: e,
      vanityUrlWarning: r
    }
  }, [t, k, n, m, p])
}