/** Chunk was on 22979 **/
/** chunk id: 480898, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk704215 = require("./704215.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk362416 = require("./362416.js"),
  Chunk372167 = require("./372167.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk220141 = require("./220141.jsx");

function u(e) {
  let {
    displayProfile: t,
    handleOpenUserProfileModal: n,
    height: u
  } = e, m = (0, c.ww)(t), p = (0, s.Z)({
    location: "AccountProfilePopoutUpsell"
  }), h = r.useMemo(() => {
    let e = [];
    return m || e.push(i.z.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), p && e.push(i.z.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e
  }, [m, p]);
  return (0, a.jsx)(l.ZP, {
    contentTypes: h,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: r
      } = e;
      if (null == u) return null;
      switch (t) {
        case i.z.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL:
          return (0, a.jsx)(d.Z, {
            handleOpenUserProfileModal: n,
            markAsDismissed: r,
            height: u
          });
        case i.z.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL:
          return (0, a.jsx)(o.Z, {
            handleOpenUserProfileModal: n,
            markAsDismissed: r
          });
        default:
          return null
      }
    }
  })
}