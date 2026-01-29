/** Chunk was on 1113 **/
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
  } = e, g = (0, i.bG)([c.default], () => c.default.getId()), f = (0, o.A)(g, n)[0], m = null != (t = (0, s.YY)(null == f ? true : f.application_id).data) ? t : true, b = l.useCallback(() => {
    null != m && ((0, u.xA)(m.id, true), p())
  }, [m, p]);
  return null == m ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.u, {
      label: m.name,
      icon: (0, r.jsx)(a.A, {
        game: m,
        className: h.K
      }),
      setStatus: b
    }), (0, r.jsx)("div", {
      role: "separator",
      className: h.m
    })]
  })
}