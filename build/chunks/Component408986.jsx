/** Chunk was on 56848 **/
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
  Chunk527639 = require("./527639.js");

function g(e) {
  let {
    user: t,
    onClose: r
  } = e, {
    trackUserProfileAction: g
  } = (0, s.KZ)(), {
    mutualGuilds: h,
    isFetching: p
  } = (0, o.Z)(t);
  return (0, n.jsx)(d.F, {
    className: f.scroller,
    fade: true,
    children: null == h && p ? Array.from({
      length: 10
    }).map((e, t) => (0, n.jsxs)("div", {
      className: f.guildsLoadingItem,
      children: [(0, n.jsx)(l.ZT, {
        width: 40,
        opacity: .08
      }), (0, n.jsx)(l.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t)) : (null != h || p) && (null == h ? true : h.length) !== 0 ? null == h ? true : h.map(e => {
      let {
        guild: l,
        nick: s
      } = e;
      return (0, n.jsx)(c.Z, {
        user: t,
        guild: l,
        nick: s,
        onSelect: () => {
          g({
            action: "PRESS_MUTUAL_GUILD"
          }), (0, a.X)(l.id), r(), (0, i.xf)()
        }
      }, l.id)
    }) : (0, n.jsx)(u.b0, {})
  })
}