/** Chunk was on 64228 **/
/** chunk id: 738759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk398590 = require("./398590.js"),
  Chunk345942 = require("./345942.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk913453 = require("./913453.js"),
  Chunk51943 = require("./51943.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk781425 = require("./781425.js");

function p(e) {
  let {
    user: t,
    onClose: n
  } = e, {
    trackUserProfileAction: p
  } = (0, o.NJ)(), {
    mutualGuilds: m,
    isFetching: f
  } = (0, a.A)(t);
  return (0, l.jsx)(i.IpV, {
    className: u.DK,
    fade: true,
    children: null == m && f ? (0, l.jsx)("div", {
      className: u.Ie,
      children: (0, l.jsx)(i.y$y, {})
    }) : (null != m || f) && (null == m ? true : m.length) !== 0 ? null == m ? true : m.map(e => {
      let {
        guild: i,
        nick: o
      } = e;
      return (0, l.jsx)(c.A, {
        user: t,
        guild: i,
        nick: o,
        onSelect: () => {
          var e;
          p({
            action: "PRESS_MUTUAL_GUILD"
          }), e = i.id, (0, s.u)(e), n(), (0, r.jH)()
        }
      }, i.id)
    }) : (0, l.jsxs)("div", {
      className: u.Ie,
      children: [(0, l.jsx)("div", {
        className: u.vC
      }), (0, l.jsx)("div", {
        className: u.BI,
        children: d.intl.string(d.t.zjVh8h)
      })]
    })
  })
}