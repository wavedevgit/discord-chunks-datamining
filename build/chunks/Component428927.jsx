/** Chunk was on 34712 **/
/** chunk id: 428927, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk769654 = require("./769654.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk806729 = require("./806729.js"),
  Chunk821179 = require("./821179.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk883172 = require("./883172.js");

function f(e) {
  let {
    user: n,
    onClose: t
  } = e, {
    trackUserProfileAction: f
  } = (0, c.KZ)(), {
    mutualGuilds: p,
    isFetching: m
  } = (0, a.Z)(n);
  return (0, o.jsx)(r.zJl, {
    className: u.listScroller,
    fade: true,
    children: null == p && m ? (0, o.jsx)("div", {
      className: u.empty,
      children: (0, o.jsx)(r.$jN, {})
    }) : (null != p || m) && (null == p ? true : p.length) !== 0 ? null == p ? true : p.map(e => {
      let {
        guild: r,
        nick: c
      } = e;
      return (0, o.jsx)(s.Z, {
        user: n,
        guild: r,
        nick: c,
        onSelect: () => {
          var e;
          f({
            action: "PRESS_MUTUAL_GUILD"
          }), e = r.id, (0, i.X)(e), t(), (0, l.xf)()
        }
      }, r.id)
    }) : (0, o.jsxs)("div", {
      className: u.empty,
      children: [(0, o.jsx)("div", {
        className: u.emptyIconGuilds
      }), (0, o.jsx)("div", {
        className: u.emptyText,
        children: d.intl.string(d.t.zjVh8v)
      })]
    })
  })
}