/** Chunk was on 65599 **/
/** chunk id: 809991, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk554146 = require("./554146.js"),
  Chunk354486 = require("./354486.jsx"),
  Chunk379848 = require("./379848.jsx"),
  Chunk441811 = require("./441811.jsx"),
  Chunk587084 = require("./587084.js"),
  Chunk693240 = require("./693240.jsx"),
  Chunk987237 = require("./987237.jsx"),
  Chunk844526 = require("./844526.jsx"),
  Chunk201805 = require("./201805.jsx"),
  Chunk523620 = require("./523620.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk654487 = require("./654487.js");

function g(e) {
  var t, n, g;
  let {
    isQuestBarEmpty: f,
    hasLoadedQuestBar: b
  } = (0, m.c9)({
    location: x.rE.CONFLICT_CHECKS
  }), v = null != e.targetElementRef.current && f && b, [j, _] = (0, o.r)(e.guildId, {
    shouldShow: v
  }), [y, A] = (0, o.L)(e.currentUser, {
    shouldShow: v
  }), [C, S] = (0, r.l)({
    shouldShow: v
  });
  return v ? j === l.M.GUILD_TAG_AVAILABLE_COACHMARK_V2 ? (0, a.jsx)(c.w, {
    guildId: e.guildId,
    onDismiss: _,
    targetElementRef: e.targetElementRef,
    children: e.children
  }) : y === l.M.GUILD_TAG_UPDATED_COACHMARK ? (0, a.jsx)(c.o, {
    guildId: null != (n = null == (g = e.currentUser.primaryGuild) ? true : g.identityGuildId) ? n : null,
    onDismiss: A,
    targetElementRef: e.targetElementRef,
    children: e.children
  }) : C === l.M.DO_NOT_DISTURB_REMINDER_POPOVER ? (0, a.jsx)(r.A, {
    targetElementRef: e.targetElementRef,
    onDismiss: S,
    children: e.children
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.A, {
      groupName: h.m.ACCOUNT_NAME_ZONE,
      targetElementRef: e.targetElementRef
    }), (0, a.jsx)(i.Ay, {
      contentTypes: v && null != (t = e.additionalDCs) ? t : [],
      groupName: h.m.ACCOUNT_NAME_ZONE,
      children: t => {
        let {
          visibleContent: n,
          markAsDismissed: r
        } = t;
        switch (n) {
          case l.M.WIDGETS_RTC_UPSELL_COACHMARK:
            return (0, a.jsx)(p.A, {
              markAsDismissed: r,
              targetElementRef: e.targetElementRef,
              children: e.children
            });
          case l.M.DISPLAY_NAME_STYLES_COACHMARK:
            return (0, a.jsx)(s.l, {
              markAsDismissed: r,
              targetElementRef: e.targetElementRef,
              children: e.children
            });
          case l.M.TENURE_BADGE_CHURN_REMINDER:
            return (0, a.jsx)(d.A, {
              markAsDismissed: r,
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