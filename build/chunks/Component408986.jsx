/** Chunk was on 85032 **/
/** chunk id: 408986, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk37234 = require("./37234.js"),
  Chunk566898 = require("./566898.jsx"),
  Chunk769654 = require("./769654.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk806729 = require("./806729.js"),
  Chunk821179 = require("./821179.jsx"),
  Chunk264481 = require("./264481.jsx"),
  Chunk661462 = require("./661462.jsx"),
  Chunk98420 = require("./98420.js");

function g(e) {
  let {
    user: t,
    onClose: n
  } = e, {
    trackUserProfileAction: g
  } = (0, o.KZ)(), {
    mutualGuilds: p,
    isFetching: b
  } = (0, c.Z)(t);
  return (0, r.jsx)(d.F, {
    className: f.scroller,
    fade: true,
    children: null == p && b ? Array.from({
      length: 10
    }).map((e, t) => (0, r.jsxs)("div", {
      className: f.guildsLoadingItem,
      children: [(0, r.jsx)(a.ZT, {
        width: 40,
        opacity: .08
      }), (0, r.jsx)(a.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t)) : (null != p || b) && (null == p ? true : p.length) !== 0 ? null == p ? true : p.map(e => {
      let {
        guild: a,
        nick: o
      } = e;
      return (0, r.jsx)(s.Z, {
        user: t,
        guild: a,
        nick: o,
        onSelect: () => {
          g({
            action: "PRESS_MUTUAL_GUILD"
          }), (0, l.X)(a.id), n(), (0, i.xf)()
        }
      }, a.id)
    }) : (0, r.jsx)(u.b0, {})
  })
}