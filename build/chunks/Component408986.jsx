/** Chunk was on 98360 **/
/** chunk id: 408986, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk566898 = require("./566898.jsx"),
  Chunk769654 = require("./769654.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk806729 = require("./806729.js"),
  Chunk821179 = require("./821179.jsx"),
  Chunk264481 = require("./264481.jsx"),
  Chunk443680 = require("./443680.js");

function m(e) {
  let {
    user: n,
    onClose: t
  } = e, {
    trackUserProfileAction: m
  } = (0, a.KZ)(), {
    mutualGuilds: p,
    isFetching: x
  } = (0, s.Z)(n);
  return (0, r.jsx)(o.Ttm, {
    className: f.scroller,
    fade: true,
    children: null == p && x ? Array.from({
      length: 10
    }).map((e, n) => (0, r.jsxs)("div", {
      className: f.guildsLoadingItem,
      children: [(0, r.jsx)(i.ZT, {
        width: 40,
        opacity: .08
      }), (0, r.jsx)(i.ZT, {
        width: 135,
        opacity: .08
      })]
    }, n)) : (null != p || x) && (null == p ? true : p.length) !== 0 ? null == p ? true : p.map(e => {
      let {
        guild: o,
        nick: i
      } = e;
      return (0, r.jsx)(d.Z, {
        user: n,
        guild: o,
        nick: i,
        onSelect: () => {
          m({
            action: "PRESS_MUTUAL_GUILD"
          }), (0, c.X)(o.id), t(), (0, l.xf)()
        }
      }, o.id)
    }) : (0, r.jsx)(u.b0, {})
  })
}