/** Chunk was on 47841 **/
/** chunk id: 564864, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk73153 = require("./73153.js");
let i = {
  setPendingInviteRules: function(e, t, n) {
    r.h.dispatch({
      type: "GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES",
      guildId: e,
      requireTerms: t,
      termRules: n
    })
  },
  setPendingMemberVerificationRules: function(e, t) {
    r.h.dispatch({
      type: "GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS",
      guildId: e,
      formFields: t
    })
  },
  setSelectedJoinType: function(e, t) {
    r.h.dispatch({
      type: "GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE",
      guildId: e,
      joinType: t
    })
  },
  setIsAgeRestricted: function(e, t) {
    r.h.dispatch({
      type: "GUILD_SETTINGS_JOIN_RULES_SET_CONTENT_LEVEL",
      guildId: e,
      isAgeRestricted: t
    })
  }
}