/** Chunk was on 21738 **/
/** chunk id: 787331, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk49229 = require("./49229.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk38910 = require("./38910.js"),
  Chunk657331 = require("./657331.js"),
  Chunk513297 = require("./513297.jsx"),
  Chunk414711 = require("./414711.jsx"),
  Chunk723690 = require("./723690.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk276991 = require("./276991.js");

function m(e) {
  let {
    user: t,
    nickname: n,
    status: m,
    isFocused: f
  } = e, {
    analyticsLocations: A
  } = (0, a.Ay)(), _ = e => {
    null == e || e.stopPropagation(), l.A.addRelationship({
      userId: t.id,
      context: {
        location: "Friends"
      },
      type: true,
      fromFriendSuggestion: true
    })
  }, b = e => {
    null == e || e.stopPropagation(), s.A.ignore(t.id)
  }, E = m === p.clD.OFFLINE ? p.clD.UNKNOWN : m;
  return (0, r.jsx)(u.A, {
    isFocused: f,
    user: t,
    onClick: () => (0, o.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: A
    }),
    children: e => {
      let l = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.A, {
          icon: i.A9s,
          actionType: c.A.ActionTypes.ACCEPT,
          tooltip: h.intl.string(h.t.Zcibdf),
          onClick: _,
          shouldHighlight: e
        }), (0, r.jsx)(c.A, {
          icon: i.PGe,
          actionType: c.A.ActionTypes.DENY,
          tooltip: h.intl.string(h.t.xuio0C),
          onClick: b,
          shouldHighlight: e
        })]
      });
      return (0, r.jsxs)("div", {
        className: g.a,
        children: [(0, r.jsx)(d.A, {
          user: t,
          hovered: e,
          status: E,
          subText: n,
          className: g.__invalid_userInfo
        }), (0, r.jsx)("div", {
          className: g.o,
          children: l
        })]
      })
    }
  })
}