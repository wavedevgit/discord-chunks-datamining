/** Chunk was on 30372 **/
/** chunk id: 480898, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk172416 = require("./172416.js"),
  Chunk220141 = require("./220141.jsx");

function d(e) {
  let {
    displayProfile: t,
    handleOpenUserProfileModal: n,
    height: d
  } = e, u = (0, s.Un)({
    location: "AccountProfilePopoutUpsell"
  }), m = (0, o.ww)(t), p = r.useMemo(() => {
    let e = [];
    return u && !m && e.push(l.z.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e
  }, [u, m]);
  return (0, a.jsx)(i.ZP, {
    contentTypes: p,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: r
      } = e;
      return null == d ? null : t === l.z.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL ? (0, a.jsx)(c.Z, {
        handleOpenUserProfileModal: n,
        markAsDismissed: r,
        height: d
      }) : null
    }
  })
}