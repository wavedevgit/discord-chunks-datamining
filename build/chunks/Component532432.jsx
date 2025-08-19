/** Chunk was on 66181 **/
/** chunk id: 532432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk373230 = require("./373230.js"),
  Chunk654904 = require("./654904.jsx"),
  Chunk993413 = require("./993413.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk486324 = require("./486324.js"),
  Chunk485696 = require("./485696.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk801292 = require("./801292.js");
let j = [{
  name: "gif",
  extensions: ["gif"]
}];

function E(e) {
  let {
    showRemoveAvatarButton: t,
    errors: n,
    onAvatarChange: s,
    sectionTitle: E,
    changeAvatarButtonText: C,
    guildId: O,
    className: v,
    disabled: S = false,
    isTryItOutFlow: T = false,
    forcedDivider: N,
    withHighlight: I = false
  } = e, {
    newestAnalyticsLocation: y
  } = (0, d.ZP)(), A = I ? c.gtL : o.zx, P = (0, m.T)({
    location: "AvatarSection"
  }), R = [];
  P && R.push(l.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE);
  let [D, Z] = (0, u.US)(R), w = D === l.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE, k = r.useCallback(() => {
    Z(h.L.TAKE_ACTION), (0, p.$r)({
      uploadType: f.pC.AVATAR,
      analyticsSource: y,
      filters: T ? j : true,
      guildId: O,
      isTryItOutFlow: T
    })
  }, [O, y, T, Z]);
  return (0, i.jsx)(g.Z, {
    className: v,
    title: E,
    titleIcon: w ? (0, i.jsx)(c.IGR, {
      text: x.intl.string(x.t.y2b7CA),
      className: _.newBadge
    }) : true,
    description: P ? x.intl.format(x.t.U4tZfX, {
      recentAvatarsLimit: b.iZ,
      onClick: k
    }) : true,
    errors: n,
    disabled: S,
    forcedDivider: N,
    children: (0, i.jsxs)("div", {
      className: _.buttonsContainer,
      children: [(0, i.jsx)(A, {
        className: a()({
          [_.buttonHighlighted]: I
        }),
        size: o.zx.Sizes.SMALL,
        onClick: k,
        children: null != C ? C : x.intl.string(x.t["4OynCA"])
      }), t && (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: _.removeButton,
        children: (0, i.jsx)(c.zxk, {
          variant: "secondary",
          size: "sm",
          text: null != O ? x.intl.string(x.t.TDjKDg) : x.intl.string(x.t.twB3f3),
          onClick: () => s(null)
        })
      })]
    })
  })
}