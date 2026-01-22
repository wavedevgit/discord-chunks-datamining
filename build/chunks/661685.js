/** Chunk was on 74488 **/
/** chunk id: 661685, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk64700 = require("./64700.js"),
  Chunk512750 = require("./512750.js"),
  Chunk311907 = require("./311907.js"),
  Chunk386784 = require("./386784.js"),
  Chunk498642 = require("./498642.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk840120 = require("./840120.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx");

function p(e, t) {
  let r = (0, l.bG)([s.A], () => s.A.getMemberCount(e)),
    p = (0, o.A)(e),
    m = (0, l.bG)([c.A], () => {
      var t;
      return (null == (t = c.A.getGuild(e)) ? true : t.vanityURLCode) != null
    }),
    b = (0, u.M5)(e, "Powerup Deactivate Modal"),
    k = (0, l.bG)([i.A], () => t.skuId !== a.aN || null == p ? 0 : i.A.getSortedRoles(e).reduce((e, t) => {
      var r, n;
      return (null == (n = t.colorStrings) ? true : n.secondaryColor) == null ? e : e + (null != (r = p[t.id]) ? r : 0)
    }, 0), [e, t.skuId, p]);
  return n.useMemo(() => {
    let e;
    switch (t.skuId) {
      case a.aN:
        e = k > 0 ? f.intl.formatToPlainString(d.default["4jSvr1"], {
          perk: t.title,
          memberCount: k
        }) : f.intl.formatToPlainString(d.default.cavtEo, {
          perk: t.title
        });
        break;
      case a.FB:
        e = m ? f.intl.string(d.default.hN75yb) : f.intl.string(d.default.Du91Rb);
        break;
      case a.OJ:
      case a.jF:
        e = f.intl.string(d.default.Vf2ZcR);
        break;
      default:
        e = f.intl.formatToPlainString(d.default["4jSvr1"], {
          perk: t.title,
          memberCount: null != r ? r : 0
        })
    }
    let n = null;
    return m && t.skuId === a.YG && (n = b ? f.intl.string(d.default.TkNA7b) : f.intl.string(d.default.M4XL5n)), {
      warningText: e,
      vanityUrlWarning: n
    }
  }, [t, k, r, m, b])
}