/** Chunk was on web.js **/
/** chunk id: 583311, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m,
  T: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk803664 = require("./803664.jsx"),
  Chunk509302 = require("./509302.js"),
  Chunk460597 = require("./460597.js"),
  Chunk994500 = require("./994500.js"),
  Chunk403362 = require("./403362.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  let {
    user: t,
    analyticsLocation: n
  } = e, r = (0, a.bG)([u.A], () => u.A.getRelationshipType(t.id) === p.eA$.PENDING_OUTGOING), {
    trackUserProfileAction: s
  } = (0, f.NJ)(), _ = (0, o.A)({
    user: t,
    location: n,
    onFriendRemove: () => s({
      action: "REMOVE_FRIEND"
    }),
    onFriendRequestSent: () => s({
      action: "SEND_FRIEND_REQUEST"
    })
  }), h = (0, l.A)({
    user: t
  }), m = (0, c.A)({
    user: t
  });
  return i.useMemo(() => [r ? null : _, h, m].filter(d.Vq), [h, _, r, m])
}

function m(e) {
  let {
    menuItems: t,
    children: n,
    targetElementRef: i
  } = e;
  return (0, r.jsx)(s.YNO, {
    targetElementRef: i,
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(s.W1t, {
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