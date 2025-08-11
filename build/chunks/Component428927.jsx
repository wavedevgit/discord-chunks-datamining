/** Chunk was on 11776 **/
/** chunk id: 428927, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk769654 = require("./769654.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk806729 = require("./806729.js"),
  Chunk821179 = require("./821179.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk301150 = require("./301150.js");

function f(e) {
  let {
    user: t,
    onClose: n
  } = e, {
    trackUserProfileAction: f
  } = (0, a.KZ)(), {
    mutualGuilds: m,
    isFetching: p
  } = (0, c.Z)(t), g = e => {
    (0, o.X)(e), n(), (0, i.xf)()
  };
  return (0, r.jsx)(l.zJl, {
    className: u.listScroller,
    fade: true,
    children: null == m && p ? (0, r.jsx)("div", {
      className: u.empty,
      children: (0, r.jsx)(l.$jN, {})
    }) : (null != m || p) && (null == m ? true : m.length) !== 0 ? null == m ? true : m.map(e => {
      let {
        guild: n,
        nick: l
      } = e;
      return (0, r.jsx)(s.Z, {
        user: t,
        guild: n,
        nick: l,
        onSelect: () => {
          f({
            action: "PRESS_MUTUAL_GUILD"
          }), g(n.id)
        }
      }, n.id)
    }) : (0, r.jsxs)("div", {
      className: u.empty,
      children: [(0, r.jsx)("div", {
        className: u.emptyIconGuilds
      }), (0, r.jsx)("div", {
        className: u.emptyText,
        children: d.intl.string(d.t.zjVh8v)
      })]
    })
  })
}