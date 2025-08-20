/** Chunk was on 75283 **/
/** chunk id: 408986, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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

function p(e) {
  let {
    user: t,
    onClose: n
  } = e, {
    trackUserProfileAction: p
  } = (0, c.KZ)(), {
    mutualGuilds: m,
    isFetching: b
  } = (0, s.Z)(t);
  return (0, r.jsx)(o.Ttm, {
    className: f.scroller,
    fade: true,
    children: null == m && b ? Array.from({
      length: 10
    }).map((e, t) => (0, r.jsxs)("div", {
      className: f.guildsLoadingItem,
      children: [(0, r.jsx)(l.ZT, {
        width: 40,
        opacity: .08
      }), (0, r.jsx)(l.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t)) : (null != m || b) && (null == m ? true : m.length) !== 0 ? null == m ? true : m.map(e => {
      let {
        guild: o,
        nick: l
      } = e;
      return (0, r.jsx)(d.Z, {
        user: t,
        guild: o,
        nick: l,
        onSelect: () => {
          p({
            action: "PRESS_MUTUAL_GUILD"
          }), (0, a.X)(o.id), n(), (0, i.xf)()
        }
      }, o.id)
    }) : (0, r.jsx)(u.b0, {})
  })
}