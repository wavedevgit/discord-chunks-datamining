/** Chunk was on 29458 **/
/** chunk id: 408986, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk566898 = require("./566898.jsx"),
  Chunk769654 = require("./769654.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk806729 = require("./806729.js"),
  Chunk821179 = require("./821179.jsx"),
  Chunk264481 = require("./264481.jsx"),
  Chunk824754 = require("./824754.js");

function p(e) {
  let {
    user: t,
    onClose: n
  } = e, {
    trackUserProfileAction: p
  } = (0, c.KZ)(), {
    mutualGuilds: m,
    isFetching: g
  } = (0, s.Z)(t);
  return (0, r.jsx)(l.Ttm, {
    className: f.scroller,
    fade: true,
    children: null == m && g ? Array.from({
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
    }, t)) : (null != m || g) && (null == m ? true : m.length) !== 0 ? null == m ? true : m.map(e => {
      let {
        guild: l,
        nick: o
      } = e;
      return (0, r.jsx)(d.Z, {
        user: t,
        guild: l,
        nick: o,
        onSelect: () => {
          p({
            action: "PRESS_MUTUAL_GUILD"
          }), (0, a.X)(l.id), n(), (0, i.xf)()
        }
      }, l.id)
    }) : (0, r.jsx)(u.b0, {})
  })
}