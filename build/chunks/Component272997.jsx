/** Chunk was on 41727 **/
/** chunk id: 272997, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => h
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

function h(e) {
  var t;
  let {
    guildId: n,
    onSetActivityStatus: h
  } = e, f = (0, i.bG)([c.default], () => c.default.getId()), g = (0, o.A)(f, n)[0], m = null != (t = (0, s.YY)(null == g ? true : g.application_id).data) ? t : true, b = l.useCallback(() => {
    null != m && ((0, u.xA)(m.id, true), h())
  }, [m, h]);
  return null == m ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.u, {
      label: m.name,
      icon: (0, r.jsx)(a.A, {
        game: m,
        className: p.K
      }),
      setStatus: b
    }), (0, r.jsx)("div", {
      role: "separator",
      className: p.m
    })]
  })
}