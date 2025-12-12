/** Chunk was on web.js **/
/** chunk id: 156518, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => m,
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk777658 = require("./777658.jsx"),
  Chunk44652 = require("./44652.js"),
  Chunk47091 = require("./47091.js"),
  Chunk699516 = require("./699516.js"),
  Chunk823379 = require("./823379.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    user: t,
    analyticsLocation: n
  } = e, r = (0, o.e7)([u.Z], () => u.Z.getRelationshipType(t.id) === p.OGo.PENDING_OUTGOING), {
    trackUserProfileAction: a
  } = (0, f.KZ)(), _ = (0, s.Z)({
    user: t,
    location: n,
    onFriendRemove: () => a({
      action: "REMOVE_FRIEND"
    }),
    onFriendRequestSent: () => a({
      action: "SEND_FRIEND_REQUEST"
    })
  }), m = (0, l.Z)({
    user: t
  }), h = (0, c.Z)({
    user: t
  });
  return i.useMemo(() => [r ? null : _, m, h].filter(d.lm), [m, _, r, h])
}

function h(e) {
  let {
    menuItems: t,
    children: n,
    targetElementRef: i
  } = e;
  return (0, r.jsx)(a.yRy, {
    targetElementRef: i,
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(a.v2r, {
        navId: "user-profile-friend-request-buttons",
        onSelect: true,
        onClose: n,
        "aria-label": _.intl.string(_.t.Jszi3G),
        children: t
      })
    },
    children: e => n(e)
  })
}