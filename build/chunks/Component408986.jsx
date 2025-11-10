/** Chunk was on 77678 **/
/** chunk id: 408986, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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
  Chunk527639 = require("./527639.js");

function f(e) {
  let {
    user: t,
    onClose: n
  } = e, {
    trackUserProfileAction: f
  } = (0, o.KZ)(), {
    mutualGuilds: p,
    isFetching: m
  } = (0, c.Z)(t);
  return (0, r.jsx)(d.F, {
    className: g.scroller,
    fade: true,
    children: null == p && m ? Array.from({
      length: 10
    }).map((e, t) => (0, r.jsxs)("div", {
      className: g.guildsLoadingItem,
      children: [(0, r.jsx)(a.ZT, {
        width: 40,
        opacity: .08
      }), (0, r.jsx)(a.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t)) : (null != p || m) && (null == p ? true : p.length) !== 0 ? null == p ? true : p.map(e => {
      let {
        guild: a,
        nick: o
      } = e;
      return (0, r.jsx)(s.Z, {
        user: t,
        guild: a,
        nick: o,
        onSelect: () => {
          f({
            action: "PRESS_MUTUAL_GUILD"
          }), (0, l.X)(a.id), n(), (0, i.xf)()
        }
      }, a.id)
    }) : (0, r.jsx)(u.b0, {})
  })
}