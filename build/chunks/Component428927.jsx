/** Chunk was on 93979 **/
/** chunk id: 428927, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk769654 = require("./769654.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk806729 = require("./806729.js"),
  Chunk821179 = require("./821179.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk940640 = require("./940640.js");

function f(e) {
  let {
    user: n,
    onClose: t
  } = e, {
    trackUserProfileAction: f
  } = (0, a.KZ)(), {
    mutualGuilds: m,
    isFetching: p
  } = (0, c.Z)(n);
  return (0, l.jsx)(i.zJl, {
    className: u.listScroller,
    fade: true,
    children: null == m && p ? (0, l.jsx)("div", {
      className: u.empty,
      children: (0, l.jsx)(i.$jN, {})
    }) : (null != m || p) && (null == m ? true : m.length) !== 0 ? null == m ? true : m.map(e => {
      let {
        guild: i,
        nick: a
      } = e;
      return (0, l.jsx)(s.Z, {
        user: n,
        guild: i,
        nick: a,
        onSelect: () => {
          var e;
          f({
            action: "PRESS_MUTUAL_GUILD"
          }), e = i.id, (0, r.X)(e), t(), (0, o.xf)()
        }
      }, i.id)
    }) : (0, l.jsxs)("div", {
      className: u.empty,
      children: [(0, l.jsx)("div", {
        className: u.emptyIconGuilds
      }), (0, l.jsx)("div", {
        className: u.emptyText,
        children: d.intl.string(d.t.zjVh8h)
      })]
    })
  })
}