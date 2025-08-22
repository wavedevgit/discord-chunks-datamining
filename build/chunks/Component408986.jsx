/** Chunk was on 82008 **/
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
  } = (0, s.KZ)(), {
    mutualGuilds: p,
    isFetching: h
  } = (0, a.Z)(n);
  return (0, r.jsx)(l.Ttm, {
    className: f.scroller,
    fade: true,
    children: null == p && h ? Array.from({
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
    }, n)) : (null != p || h) && (null == p ? true : p.length) !== 0 ? null == p ? true : p.map(e => {
      let {
        guild: l,
        nick: i
      } = e;
      return (0, r.jsx)(d.Z, {
        user: n,
        guild: l,
        nick: i,
        onSelect: () => {
          m({
            action: "PRESS_MUTUAL_GUILD"
          }), (0, c.X)(l.id), t(), (0, o.xf)()
        }
      }, l.id)
    }) : (0, r.jsx)(u.b0, {})
  })
}