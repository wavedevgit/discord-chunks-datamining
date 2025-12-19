/** Chunk was on 6043 **/
/** chunk id: 372167, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk371286 = require("./371286.jsx"),
  Chunk164670 = require("./164670.js"),
  Chunk705338 = require("./705338.js"),
  Chunk790773 = require("./790773.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk993874 = require("./993874.js");

function p() {
  (0, Chunk705338.default)({
    guildId: (0, Chunk164670.ac)()
  })
}

function h(e) {
  let {
    handleOpenUserProfileModal: t,
    markAsDismissed: n
  } = e, {
    analyticsLocations: o
  } = (0, l.ZP)([i.Z.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
  return (0, a.jsxs)(s.Z, {
    heading: u.intl.string(u.t["vy/61K"]),
    subheading: u.intl.string(u.t.tEee9t),
    markAsDismissed: n,
    className: m.upsellContainer,
    contentClassName: m.contentContainer,
    height: 560,
    children: [(0, a.jsx)(d.Z, {
      analyticsLocations: o,
      handleOpenUserProfileModal: t
    }), (0, a.jsx)("div", {
      className: m.buttonContainer,
      children: (0, a.jsx)(r.zxk, {
        variant: "primary",
        fullWidth: true,
        text: u.intl.string(u.t.rg9FQp),
        onClick: p
      })
    })]
  })
}