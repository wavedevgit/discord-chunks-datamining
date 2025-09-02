/** Chunk was on 30355 **/
/** chunk id: 408986, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk37234 = require("./37234.js"),
  Chunk566898 = require("./566898.jsx"),
  Chunk769654 = require("./769654.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk806729 = require("./806729.js"),
  Chunk821179 = require("./821179.jsx"),
  Chunk264481 = require("./264481.jsx"),
  Chunk661462 = require("./661462.jsx"),
  Chunk443680 = require("./443680.js");

function g(e) {
  let {
    user: t,
    onClose: r
  } = e, {
    trackUserProfileAction: g
  } = (0, a.KZ)(), {
    mutualGuilds: m,
    isFetching: p
  } = (0, o.Z)(t);
  return (0, n.jsx)(d.F, {
    className: f.scroller,
    fade: true,
    children: null == m && p ? Array.from({
      length: 10
    }).map((e, t) => (0, n.jsxs)("div", {
      className: f.guildsLoadingItem,
      children: [(0, n.jsx)(i.ZT, {
        width: 40,
        opacity: .08
      }), (0, n.jsx)(i.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t)) : (null != m || p) && (null == m ? true : m.length) !== 0 ? null == m ? true : m.map(e => {
      let {
        guild: i,
        nick: a
      } = e;
      return (0, n.jsx)(c.Z, {
        user: t,
        guild: i,
        nick: a,
        onSelect: () => {
          g({
            action: "PRESS_MUTUAL_GUILD"
          }), (0, s.X)(i.id), r(), (0, l.xf)()
        }
      }, i.id)
    }) : (0, n.jsx)(u.b0, {})
  })
}