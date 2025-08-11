/** Chunk was on 11776 **/
/** chunk id: 408986, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk566898 = require("./566898.js"),
  Chunk769654 = require("./769654.js"),
  Chunk785717 = require("./785717.js"),
  Chunk806729 = require("./806729.js"),
  Chunk821179 = require("./821179.js"),
  Chunk264481 = require("./264481.jsx"),
  Chunk714905 = require("./714905.js");

function m(e) {
  let {
    user: t,
    onClose: n
  } = e, {
    trackUserProfileAction: m
  } = (0, c.KZ)(), {
    mutualGuilds: p,
    isFetching: g
  } = (0, s.Z)(t);
  return <l.Ttm className={f.scroller} fade={true}>{null == p && g ? Array.from({
      length: 10
    }).map((e, t) => (0, r.jsxs)("div", {
      className: f.guildsLoadingItem,
      children: [(0, r.jsx)(o.ZT, {
        width: 40,
        opacity: .08
      }), (0, r.jsx)(o.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t)) : (null != p || g) && (null == p ? true : p.length) !== 0 ? null == p ? true : p.map(e => {
      let {
        guild: l,
        nick: o
      } = e;
      return (0, r.jsx)(d.Z, {
        user: t,
        guild: l,
        nick: o,
        onSelect: () => {
          m({
            action: "PRESS_MUTUAL_GUILD"
          }), (0, a.X)(l.id), n(), (0, i.xf)()
        }
      }, l.id)
    }) : (0, r.jsx)(u.b0, {})}</l.Ttm>
}