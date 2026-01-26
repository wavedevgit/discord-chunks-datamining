/** Chunk was on 65298 **/
/** chunk id: 809991, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk554146 = require("./554146.js"),
  Chunk354486 = require("./354486.jsx"),
  Chunk379848 = require("./379848.jsx"),
  Chunk441811 = require("./441811.jsx"),
  Chunk587084 = require("./587084.js"),
  Chunk693240 = require("./693240.jsx"),
  Chunk844526 = require("./844526.jsx"),
  Chunk201805 = require("./201805.jsx"),
  Chunk523620 = require("./523620.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk654487 = require("./654487.js");

function x(e) {
  var t, n, x;
  let {
    isQuestBarEmpty: g,
    hasLoadedQuestBar: f
  } = (0, u.c9)({
    location: h.rE.CONFLICT_CHECKS
  }), b = null != e.targetElementRef.current && g && f, [v, j] = (0, o.r)(e.guildId, {
    shouldShow: b
  }), [_, y] = (0, o.L)(e.currentUser, {
    shouldShow: b
  }), [A, C] = (0, r.l)({
    shouldShow: b
  });
  return b ? v === l.M.GUILD_TAG_AVAILABLE_COACHMARK_V2 ? (0, a.jsx)(c.w, {
    guildId: e.guildId,
    onDismiss: j,
    targetElementRef: e.targetElementRef,
    children: e.children
  }) : _ === l.M.GUILD_TAG_UPDATED_COACHMARK ? (0, a.jsx)(c.o, {
    guildId: null != (n = null == (x = e.currentUser.primaryGuild) ? true : x.identityGuildId) ? n : null,
    onDismiss: y,
    targetElementRef: e.targetElementRef,
    children: e.children
  }) : A === l.M.DO_NOT_DISTURB_REMINDER_POPOVER ? (0, a.jsx)(r.A, {
    targetElementRef: e.targetElementRef,
    onDismiss: C,
    children: e.children
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.A, {
      groupName: p.m.ACCOUNT_NAME_ZONE,
      targetElementRef: e.targetElementRef
    }), (0, a.jsx)(i.Ay, {
      contentTypes: b && null != (t = e.additionalDCs) ? t : [],
      groupName: p.m.ACCOUNT_NAME_ZONE,
      children: t => {
        let {
          visibleContent: n,
          markAsDismissed: r
        } = t;
        switch (n) {
          case l.M.WIDGETS_RTC_UPSELL_COACHMARK:
            return (0, a.jsx)(m.A, {
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
          default:
            return e.children
        }
      }
    })]
  }) : e.children
}