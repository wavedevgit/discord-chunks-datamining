/** Chunk was on 1272 **/
/** chunk id: 42575, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk906732 = require("./906732.js"),
  Chunk388380 = require("./388380.js"),
  Chunk892001 = require("./892001.js"),
  Chunk321488 = require("./321488.js"),
  Chunk417183 = require("./417183.js"),
  Chunk170245 = require("./170245.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk292568 = require("./292568.js");

function g(e) {
  let {
    user: t,
    nickname: n,
    status: g,
    isFocused: m
  } = e, {
    analyticsLocations: b
  } = (0, a.ZP)(), _ = e => {
    null == e || e.stopPropagation(), l.Z.addRelationship({
      userId: t.id,
      context: {
        location: "Friends"
      },
      type: true,
      fromFriendSuggestion: true
    })
  }, O = e => {
    null == e || e.stopPropagation(), o.Z.ignore(t.id)
  }, E = g === p.Skl.OFFLINE ? p.Skl.UNKNOWN : g;
  return <u.Z isFocused={m} user={t} onClick={() => (0, s.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: b
    })}>{e => {
      let l = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.Z, {
          icon: i.dz2,
          actionType: c.Z.ActionTypes.ACCEPT,
          tooltip: f.intl.string(f.t.ZcibdX),
          onClick: _,
          shouldHighlight: e
        }), (0, r.jsx)(c.Z, {
          icon: i.Dio,
          actionType: c.Z.ActionTypes.DENY,
          tooltip: f.intl.string(f.t.xuio0N),
          onClick: O,
          shouldHighlight: e
        })]
      });
      return (0, r.jsxs)("div", {
        className: h.listItemContents,
        children: [(0, r.jsx)(d.Z, {
          user: t,
          hovered: e,
          status: E,
          subText: n,
          className: h.__invalid_userInfo
        }), (0, r.jsx)("div", {
          className: h.actions,
          children: l
        })]
      })
    }}</u.Z>
}