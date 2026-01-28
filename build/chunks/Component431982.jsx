/** Chunk was on 5606 **/
/** chunk id: 431982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk590547 = require("./590547.jsx"),
  Chunk919395 = require("./919395.js"),
  Chunk128450 = require("./128450.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk888920 = require("./888920.js");

function p(e) {
  let {
    user: t,
    guild: n,
    titleIcon: p
  } = e, {
    analyticsLocations: _
  } = (0, s.Ay)(), m = null != n, {
    userNameplate: g,
    guildNameplate: f,
    pendingNameplate: b,
    pendingErrors: h
  } = (0, o.rv)(t, null == n ? true : n.id), A = i.useCallback(() => {
    (0, a.p)({
      analyticsLocations: _,
      guildId: null == n ? true : n.id
    })
  }, [_, null == n ? true : n.id]), E = i.useCallback(() => {
    (0, o.pX)(null, null == n ? true : n.id)
  }, [null == n ? true : n.id]);
  return (0, r.jsx)(c.A, {
    title: d.intl.string(d.t.x5CoXR),
    titleIcon: p,
    errors: h,
    children: (0, r.jsxs)("div", {
      className: u.u,
      children: [(0, r.jsx)(l.Button, {
        variant: "primary",
        size: "sm",
        text: d.intl.string(d.t.BwdeM1),
        onClick: A
      }), (true === b ? (m ? f : g) != null : null != b) && (0, r.jsx)(l.Button, {
        variant: "secondary",
        size: "sm",
        text: m ? d.intl.string(d.t.CHf9iJ) : d.intl.string(d.t["9zwziY"]),
        onClick: E
      })]
    })
  })
}