/** Chunk was on 6043 **/
/** chunk id: 541769, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk704215 = require("./704215.js"),
  Chunk812055 = require("./812055.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk287647 = require("./287647.jsx"),
  Chunk53891 = require("./53891.jsx"),
  Chunk291533 = require("./291533.js"),
  Chunk494424 = require("./494424.jsx"),
  Chunk562705 = require("./562705.jsx"),
  Chunk659302 = require("./659302.jsx"),
  Chunk620799 = require("./620799.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk324805 = require("./324805.js");

function x(e) {
  var t;
  let {
    isQuestBarEmpty: n,
    hasLoadedQuestBar: x
  } = (0, m.Ws)({
    location: f.dr.CONFLICT_CHECKS
  }), b = null != e.targetElementRef.current && n && x, [g, v] = (0, c.G)(e.guildId), [j, y] = (0, l.b)({
    shouldShow: b
  });
  return b ? g === r.z.GUILD_TAG_AVAILABLE_COACHMARK ? (0, a.jsx)(o.ZP, {
    guildId: e.guildId,
    onDismiss: v,
    targetElementRef: e.targetElementRef,
    children: e.children
  }) : j === r.z.DO_NOT_DISTURB_REMINDER_POPOVER ? (0, a.jsx)(l.Z, {
    targetElementRef: e.targetElementRef,
    onDismiss: y,
    children: e.children
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.Z, {
      groupName: h.R.ACCOUNT_NAME_ZONE,
      targetElementRef: e.targetElementRef
    }), (0, a.jsx)(i.ZP, {
      contentTypes: b && null != (t = e.additionalDCs) ? t : [],
      groupName: h.R.ACCOUNT_NAME_ZONE,
      children: t => {
        let {
          visibleContent: n,
          markAsDismissed: l
        } = t;
        switch (n) {
          case r.z.WIDGETS_RTC_UPSELL_COACHMARK:
            return (0, a.jsx)(p.Z, {
              markAsDismissed: l,
              targetElementRef: e.targetElementRef,
              children: e.children
            });
          case r.z.DISPLAY_NAME_STYLES_COACHMARK:
            return (0, a.jsx)(s.e, {
              markAsDismissed: l,
              targetElementRef: e.targetElementRef,
              children: e.children
            });
          case r.z.TENURE_BADGE_CHURN_REMINDER:
            return (0, a.jsx)(d.Z, {
              markAsDismissed: l,
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