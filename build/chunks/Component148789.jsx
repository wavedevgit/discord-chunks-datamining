/** Chunk was on 82477 **/
/** chunk id: 148789, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk298213 = require("./298213.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk31590 = require("./31590.js");

function c(e) {
  let {
    userId: t,
    applicationId: n
  } = e, [c, u] = i.useState(false), [d, f] = i.useState(false), h = i.useCallback(async e => {
    e.stopPropagation(), f(true);
    try {
      await a.Z.cancelFriendRequest({
        userId: t,
        applicationId: n,
        location: "ActionButtonFriendRequest"
      })
    } finally {
      f(false)
    }
  }, [n, t]), p = i.useCallback(async e => {
    e.stopPropagation(), u(true);
    try {
      await a.Z.maybeConfirmFriendRequestAccept({
        userId: t,
        applicationId: n,
        location: "ActionButtonFriendRequest"
      })
    } finally {
      u(false)
    }
  }, [n, t]);
  return (0, r.jsx)("div", {
    className: s.friendRequestContainer,
    children: (0, r.jsxs)(l.hE2, {
      size: "sm",
      children: [(0, r.jsx)(l.zxk, {
        variant: "active",
        onClick: p,
        text: o.intl.string(o.t.Zcibdf),
        loading: c,
        disabled: d
      }), (0, r.jsx)(l.zxk, {
        variant: "secondary",
        onClick: h,
        text: o.intl.string(o.t.xuio0C),
        loading: d,
        disabled: c
      })]
    })
  })
}