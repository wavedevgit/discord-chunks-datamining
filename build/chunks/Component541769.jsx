/** Chunk was on 22979 **/
/** chunk id: 541769, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk704215 = require("./704215.js"),
  Chunk812055 = require("./812055.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk287647 = require("./287647.jsx"),
  Chunk562511 = require("./562511.js"),
  Chunk53891 = require("./53891.jsx"),
  Chunk494424 = require("./494424.jsx"),
  Chunk562705 = require("./562705.jsx"),
  Chunk659302 = require("./659302.jsx"),
  Chunk620799 = require("./620799.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk324805 = require("./324805.js");

function b(e) {
  var t, n, b;
  let {
    isQuestBarEmpty: x,
    hasLoadedQuestBar: g
  } = (0, m.Ws)({
    location: f.dr.CONFLICT_CHECKS
  }), v = null != e.targetElementRef.current && x && g, [j, y] = (0, o.X)(e.guildId, {
    shouldShow: v
  }), [C, _] = (0, o.Z)(e.currentUser, {
    shouldShow: v
  }), [S, E] = (0, i.b)({
    shouldShow: v
  });
  return v ? j === r.z.GUILD_TAG_AVAILABLE_COACHMARK_V2 ? (0, a.jsx)(c.$, {
    guildId: e.guildId,
    onDismiss: y,
    targetElementRef: e.targetElementRef,
    children: e.children
  }) : C === r.z.GUILD_TAG_UPDATED_COACHMARK ? (0, a.jsx)(c.f, {
    guildId: null != (n = null == (t = e.currentUser.primaryGuild) ? true : t.identityGuildId) ? n : null,
    onDismiss: _,
    targetElementRef: e.targetElementRef,
    children: e.children
  }) : S === r.z.DO_NOT_DISTURB_REMINDER_POPOVER ? (0, a.jsx)(i.Z, {
    targetElementRef: e.targetElementRef,
    onDismiss: E,
    children: e.children
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.Z, {
      groupName: h.R.ACCOUNT_NAME_ZONE,
      targetElementRef: e.targetElementRef
    }), (0, a.jsx)(l.ZP, {
      contentTypes: v && null != (b = e.additionalDCs) ? b : [],
      groupName: h.R.ACCOUNT_NAME_ZONE,
      children: t => {
        let {
          visibleContent: n,
          markAsDismissed: i
        } = t;
        switch (n) {
          case r.z.WIDGETS_RTC_UPSELL_COACHMARK:
            return (0, a.jsx)(p.Z, {
              markAsDismissed: i,
              targetElementRef: e.targetElementRef,
              children: e.children
            });
          case r.z.DISPLAY_NAME_STYLES_COACHMARK:
            return (0, a.jsx)(s.e, {
              markAsDismissed: i,
              targetElementRef: e.targetElementRef,
              children: e.children
            });
          case r.z.TENURE_BADGE_CHURN_REMINDER:
            return (0, a.jsx)(d.Z, {
              markAsDismissed: i,
              mode: "popover",
              targetElementRef: e.targetElementRef,
              children: e.children
            });
          default:
            return e.children
        }
      }
    })]
  }) : e.children
}