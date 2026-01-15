/** Chunk was on web.js **/
/** chunk id: 718108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk594174 = require("./594174.js"),
  Chunk795448 = require("./795448.js"),
  Chunk441623 = require("./441623.js"),
  Chunk474936 = require("./474936.js"),
  Chunk268685 = require("./268685.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk186120 = require("./186120.js");

function g(e) {
  let {
    profileUserId: t
  } = e, n = (0, o.e7)([u.default], () => u.default.getUser(t), [t]), g = (0, o.e7)([u.default], () => u.default.getCurrentUser()), E = (0, o.e7)([f.ZP], () => f.ZP.getFriendAnniversaryYears(t), [t]);
  return i.useEffect(() => {
    (0, c.h)({
      name: a.ImpressionNames.GIFT_INTENT_USER_PROFILE_POPOUT,
      type: a.ImpressionTypes.VIEW,
      properties: {
        gift_intent_type: p.hX.FRIEND_ANNIVERSARY
      }
    })
  }, []), (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsx)("div", {
      className: m.closeButton,
      children: (0, r.jsx)(s.hU, {
        icon: s.Dio,
        size: "sm",
        variant: "icon-only",
        "aria-label": h.intl.string(h.t.cpT0Cq),
        onClick: () => (0, d.X9)(t)
      })
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/semibold",
      color: "text-strong",
      children: h.intl.string(h.t.icDVNb)
    }), (0, r.jsxs)("div", {
      className: m.subtitleContainer,
      children: [null != n && (0, r.jsx)(l.Z, {
        size: _.EF.SIZE_16,
        user: n
      }), null != g && (0, r.jsx)(l.Z, {
        className: m.currentUserAvatar,
        size: _.EF.SIZE_16,
        user: g
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "text-strong",
        children: h.intl.formatToPlainString(h.t.PpG27s, {
          numberOfYears: E
        })
      })]
    })]
  })
}