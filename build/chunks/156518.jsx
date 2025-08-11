/** Chunk was on web.js **/
/** chunk id: 156518, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => h,
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk777658 = require("./777658.js"),
  Chunk44652 = require("./44652.js"),
  Chunk47091 = require("./47091.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk823379 = require("./823379.js"),
  Chunk785717 = require("./785717.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

function h(e) {
  let {
    user: t,
    analyticsLocation: n
  } = e, r = (0, o.e7)([u.Z], () => u.Z.getRelationshipType(t.id) === _.OGo.PENDING_OUTGOING), {
    trackUserProfileAction: a
  } = (0, f.KZ)(), p = (0, s.Z)({
    user: t,
    location: n,
    onFriendRemove: () => a({
      action: "REMOVE_FRIEND"
    }),
    onFriendRequestSent: () => a({
      action: "SEND_FRIEND_REQUEST"
    })
  }), h = (0, l.Z)({
    user: t
  }), m = (0, c.Z)({
    user: t
  });
  return i.useMemo(() => [r ? null : p, h, m].filter(d.lm), [h, p, r, m])
}

function m(e) {
  let {
    menuItems: t,
    children: n,
    targetElementRef: i
  } = e;
  return <a.yRy targetElementRef={i} renderPopout={e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(a.v2r, {
        navId: "user-profile-friend-request-buttons",
        onSelect: true,
        onClose: n,
        "aria-label": p.intl.string(p.t.Jszi3N),
        children: t
      })
    }}>{e => n(e)}</a.yRy>
}