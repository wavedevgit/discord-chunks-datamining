/** Chunk was on 64228 **/
/** chunk id: 738759, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f(e) {
  let {
    user: l,
    onClose: t
  } = e, {
    trackUserProfileAction: f
  } = (0, a.NJ)(), {
    mutualGuilds: p,
    isFetching: m
  } = (0, o.A)(l);
  return (0, n.jsx)(i.IpV, {
    className: u.DK,
    fade: true,
    children: null == p && m ? (0, n.jsx)("div", {
      className: u.Ie,
      children: (0, n.jsx)(i.y$y, {})
    }) : (null != p || m) && (null == p ? true : p.length) !== 0 ? null == p ? true : p.map(e => {
      let {
        guild: i,
        nick: a
      } = e;
      return (0, n.jsx)(d.A, {
        user: l,
        guild: i,
        nick: a,
        onSelect: () => {
          var e;
          f({
            action: "PRESS_MUTUAL_GUILD"
          }), e = i.id, (0, s.u)(e), t(), (0, r.jH)()
        }
      }, i.id)
    }) : (0, n.jsxs)("div", {
      className: u.Ie,
      children: [(0, n.jsx)("div", {
        className: u.vC
      }), (0, n.jsx)("div", {
        className: u.BI,
        children: c.intl.string(c.t.zjVh8h)
      })]
    })
  })
}