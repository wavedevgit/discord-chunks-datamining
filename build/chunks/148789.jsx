/** Chunk was on 34779 **/
/** chunk id: 148789, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk298213 = require("./298213.js"),
  Chunk388032 = require("./388032.js"),
  Chunk884492 = require("./884492.js");

function c(e) {
  let {
    userId: t,
    applicationId: n
  } = e, [c, u] = i.useState(false), [d, h] = i.useState(false), p = i.useCallback(async e => {
    e.stopPropagation(), h(true);
    try {
      await o.Z.cancelFriendRequest({
        userId: t,
        applicationId: n,
        location: "ActionButtonFriendRequest"
      })
    } finally {
      h(false)
    }
  }, [n, t]), f = i.useCallback(async e => {
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
  return <div className={a.friendRequestContainer}>{<l.zx className={a.acceptButton} look={l.zx.Looks.FILLED} color={l.zx.Colors.GREEN} size={l.zx.Sizes.NONE} submitting={c} disabled={d} onClick={f}>{s.intl.string(s.t.ZcibdX)}</l.zx>}{<l.zx className={a.ignoreButton} look={l.zx.Looks.FILLED} color={l.zx.Colors.PRIMARY} size={l.zx.Sizes.NONE} submitting={d} disabled={c} onClick={p}>{s.intl.string(s.t.xuio0N)}</l.zx>}</div>
}