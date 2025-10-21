/** Chunk was on 93979 **/
/** chunk id: 428927, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
  Chunk878449 = require("./878449.js");

function m(e) {
  let {
    user: n,
    onClose: t
  } = e, {
    trackUserProfileAction: m
  } = (0, s.KZ)(), {
    mutualGuilds: p,
    isFetching: f
  } = (0, a.Z)(n);
  return (0, l.jsx)(i.zJl, {
    className: u.listScroller,
    fade: true,
    children: null == p && f ? (0, l.jsx)("div", {
      className: u.empty,
      children: (0, l.jsx)(i.$jN, {})
    }) : (null != p || f) && (null == p ? true : p.length) !== 0 ? null == p ? true : p.map(e => {
      let {
        guild: i,
        nick: s
      } = e;
      return (0, l.jsx)(c.Z, {
        user: n,
        guild: i,
        nick: s,
        onSelect: () => {
          var e;
          m({
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