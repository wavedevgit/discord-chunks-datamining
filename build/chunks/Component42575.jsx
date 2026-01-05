/** Chunk was on 1272 **/
/** chunk id: 42575, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk388380 = require("./388380.js"),
  Chunk892001 = require("./892001.js"),
  Chunk321488 = require("./321488.jsx"),
  Chunk417183 = require("./417183.jsx"),
  Chunk170245 = require("./170245.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk626019 = require("./626019.js");

function m(e) {
  let {
    user: t,
    nickname: n,
    status: m,
    isFocused: h
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
  }, E = e => {
    null == e || e.stopPropagation(), o.Z.ignore(t.id)
  }, O = m === p.Skl.OFFLINE ? p.Skl.UNKNOWN : m;
  return (0, r.jsx)(u.Z, {
    isFocused: h,
    user: t,
    onClick: () => (0, s.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: b
    }),
    children: e => {
      let l = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.Z, {
          icon: i.dz2,
          actionType: c.Z.ActionTypes.ACCEPT,
          tooltip: f.intl.string(f.t.Zcibdf),
          onClick: _,
          shouldHighlight: e
        }), (0, r.jsx)(c.Z, {
          icon: i.Dio,
          actionType: c.Z.ActionTypes.DENY,
          tooltip: f.intl.string(f.t.xuio0C),
          onClick: E,
          shouldHighlight: e
        })]
      });
      return (0, r.jsxs)("div", {
        className: g.listItemContents,
        children: [(0, r.jsx)(d.Z, {
          user: t,
          hovered: e,
          status: O,
          subText: n,
          className: g.__invalid_userInfo
        }), (0, r.jsx)("div", {
          className: g.actions,
          children: l
        })]
      })
    }
  })
}