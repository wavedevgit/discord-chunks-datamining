/** Chunk was on 6043 **/
/** chunk id: 480898, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk704215 = require("./704215.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk362416 = require("./362416.js"),
  Chunk372167 = require("./372167.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk172416 = require("./172416.js"),
  Chunk220141 = require("./220141.jsx");

function m(e) {
  let {
    displayProfile: t,
    handleOpenUserProfileModal: n,
    height: m
  } = e, p = (0, d.Un)({
    location: "AccountProfilePopoutUpsell"
  }), h = (0, c.ww)(t), f = (0, s.Z)({
    location: "AccountProfilePopoutUpsell"
  }), x = r.useMemo(() => {
    let e = [];
    return p && !h && e.push(i.z.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), f && e.push(i.z.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e
  }, [p, h, f]);
  return (0, a.jsx)(l.ZP, {
    contentTypes: x,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: r
      } = e;
      if (null == m) return null;
      switch (t) {
        case i.z.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL:
          return (0, a.jsx)(u.Z, {
            handleOpenUserProfileModal: n,
            markAsDismissed: r,
            height: m
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