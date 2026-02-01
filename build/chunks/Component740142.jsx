/** Chunk was on 90228 **/
/** chunk id: 740142, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk554146 = require("./554146.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk948011 = require("./948011.js"),
  Chunk364504 = require("./364504.jsx"),
  Chunk735321 = require("./735321.js"),
  Chunk162942 = require("./162942.jsx");

function u(e) {
  let {
    displayProfile: t,
    handleOpenUserProfileModal: n,
    height: u
  } = e, m = (0, c.yy)(t), p = (0, s.A)({
    location: "AccountProfilePopoutUpsell"
  }), h = l.useMemo(() => {
    let e = [];
    return m || e.push(r.M.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), p && e.push(r.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e
  }, [m, p]);
  return (0, a.jsx)(i.Ay, {
    contentTypes: h,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: l
      } = e;
      if (null == u) return null;
      switch (t) {
        case r.M.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL:
          return (0, a.jsx)(d.A, {
            handleOpenUserProfileModal: n,
            markAsDismissed: l,
            height: u
          });
        case r.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL:
          return (0, a.jsx)(o.A, {
            handleOpenUserProfileModal: n,
            markAsDismissed: l
          });
        default:
          return null
      }
    }
  })
}