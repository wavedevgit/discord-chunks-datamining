/** Chunk was on 75393 **/
/** chunk id: 480898, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  } = e, u = (0, o.Un)({
    location: "AccountProfilePopoutUpsell"
  }), m = (0, s.ww)(t), p = l.useMemo(() => {
    let e = [];
    return u && !m && e.push(r.z.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e
  }, [u, m]);
  return (0, a.jsx)(i.ZP, {
    contentTypes: p,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: l
      } = e;
      return null == d ? null : t === r.z.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL ? (0, a.jsx)(c.Z, {
        handleOpenUserProfileModal: n,
        markAsDismissed: l,
        height: d
      }) : null
    }
  })
}