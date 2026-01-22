/** Chunk was on 97492 **/
/** chunk id: 272997, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk627363 = require("./627363.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk25528 = require("./25528.js"),
  Chunk961350 = require("./961350.js"),
  Chunk69555 = require("./69555.js"),
  Chunk266069 = require("./266069.jsx"),
  Chunk709889 = require("./709889.js");

function p(e) {
  var t;
  let {
    guildId: n,
    onSetActivityStatus: p
  } = e, h = (0, i.bG)([c.default], () => c.default.getId()), b = (0, o.A)(h, n)[0], g = null != (t = (0, a.YY)(null == b ? true : b.application_id).data) ? t : true, m = l.useCallback(() => {
    null != g && ((0, u.xA)(g.id, true), p())
  }, [g, p]);
  return null == g ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.u, {
      label: g.name,
      icon: (0, r.jsx)(s.A, {
        game: g,
        className: f.K
      }),
      setStatus: m
    }), (0, r.jsx)("div", {
      role: "separator",
      className: f.m
    })]
  })
}