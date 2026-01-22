/** Chunk was on 38663 **/
/** chunk id: 583246, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk398590 = require("./398590.js"),
  Chunk114212 = require("./114212.jsx"),
  Chunk345942 = require("./345942.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk913453 = require("./913453.js"),
  Chunk51943 = require("./51943.jsx"),
  Chunk782505 = require("./782505.jsx"),
  Chunk515054 = require("./515054.jsx"),
  Chunk828151 = require("./828151.js");

function p(e) {
  let {
    user: t,
    onClose: n
  } = e, {
    trackUserProfileAction: p
  } = (0, s.NJ)(), {
    mutualGuilds: b,
    isFetching: g
  } = (0, o.A)(t);
  return (0, r.jsx)(d.K, {
    className: f.XG,
    fade: true,
    children: null == b && g ? Array.from({
      length: 10
    }).map((e, t) => (0, r.jsxs)("div", {
      className: f.Y7,
      children: [(0, r.jsx)(i.FQ, {
        width: 40,
        opacity: .08
      }), (0, r.jsx)(i.FQ, {
        width: 135,
        opacity: .08
      })]
    }, t)) : (null != b || g) && (null == b ? true : b.length) !== 0 ? null == b ? true : b.map(e => {
      let {
        guild: i,
        nick: s
      } = e;
      return (0, r.jsx)(c.A, {
        user: t,
        guild: i,
        nick: s,
        onSelect: () => {
          p({
            action: "PRESS_MUTUAL_GUILD"
          }), (0, a.u)(i.id), n(), (0, l.jH)()
        }
      }, i.id)
    }) : (0, r.jsx)(u.jB, {})
  })
}