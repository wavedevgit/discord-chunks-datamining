/** Chunk was on 56710 **/
/** chunk id: 148789, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk298213 = require("./298213.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk231796 = require("./231796.js");

function c(e) {
  let {
    userId: t,
    applicationId: n
  } = e, [c, u] = i.useState(false), [d, p] = i.useState(false), f = i.useCallback(async e => {
    e.stopPropagation(), p(true);
    try {
      await o.Z.cancelFriendRequest({
        userId: t,
        applicationId: n,
        location: "ActionButtonFriendRequest"
      })
    } finally {
      p(false)
    }
  }, [n, t]), h = i.useCallback(async e => {
    e.stopPropagation(), u(true);
    try {
      await o.Z.maybeConfirmFriendRequestAccept({
        userId: t,
        applicationId: n,
        location: "ActionButtonFriendRequest"
      })
    } finally {
      u(false)
    }
  }, [n, t]);
  return (0, r.jsxs)("div", {
    className: s.friendRequestContainer,
    children: [(0, r.jsx)(l.zx, {
      className: s.acceptButton,
      look: l.zx.Looks.FILLED,
      color: l.zx.Colors.GREEN,
      size: l.zx.Sizes.NONE,
      submitting: c,
      disabled: d,
      onClick: h,
      children: a.intl.string(a.t.Zcibdf)
    }), (0, r.jsx)(l.zx, {
      className: s.ignoreButton,
      look: l.zx.Looks.FILLED,
      color: l.zx.Colors.PRIMARY,
      size: l.zx.Sizes.NONE,
      submitting: d,
      disabled: c,
      onClick: f,
      children: a.intl.string(a.t.xuio0C)
    })]
  })
}