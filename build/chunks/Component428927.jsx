/** Chunk was on 76708 **/
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
  Chunk878449 = require("./878449.js");

function f(e) {
  let {
    user: t,
    onClose: n
  } = e, {
    trackUserProfileAction: f
  } = (0, a.KZ)(), {
    mutualGuilds: p,
    isFetching: m
  } = (0, c.Z)(t);
  return (0, r.jsx)(i.zJl, {
    className: u.listScroller,
    fade: true,
    children: null == p && m ? (0, r.jsx)("div", {
      className: u.empty,
      children: (0, r.jsx)(i.$jN, {})
    }) : (null != p || m) && (null == p ? true : p.length) !== 0 ? null == p ? true : p.map(e => {
      let {
        guild: i,
        nick: a
      } = e;
      return (0, r.jsx)(s.Z, {
        user: t,
        guild: i,
        nick: a,
        onSelect: () => {
          var e;
          f({
            action: "PRESS_MUTUAL_GUILD"
          }), e = i.id, (0, o.X)(e), n(), (0, l.xf)()
        }
      }, i.id)
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