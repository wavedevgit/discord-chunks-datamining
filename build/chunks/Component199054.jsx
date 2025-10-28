/** Chunk was on web.js **/
/** chunk id: 199054, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk998698 = require("./998698.js"),
  Chunk588468 = require("./588468.jsx"),
  Chunk657871 = require("./657871.js"),
  Chunk724177 = require("./724177.js"),
  Chunk695346 = require("./695346.js"),
  Chunk271383 = require("./271383.js"),
  Chunk590921 = require("./590921.js"),
  Chunk65090 = require("./65090.jsx");
let _ = {
  selectMode: Chunk590921.W7.TAB_ONLY,
  stores: [Chunk271383.ZP],
  matches(e, t, n, r, i) {
    var o;
    let {
      enabled: u
    } = (0, s.kB)("MentionSuggestionAutocompletes", {
      autoTrackExposure: true
    });
    return !(!u || e.isDM()) && !!c.HV.getSetting() && !!(null == (o = i.chatInputType.autocomplete) ? true : o.mentionSuggestions) && i.mentions.user !== d.h3.DENY && null != i.currentFullWord && !(i.currentFullWord.length < l.Q) && null == a.Z.getActiveCommand(e.id) && true
  },
  queryResults(e, t, n, r) {
    var i;
    let a = n.length;
    return (0, l.r)(e, null != (i = r.currentFullWord) ? i : "", a, {
      isIdle: r.isEditorIdle,
      currentAutocompleteType: r.currentAutocompleteType
    })
  },
  renderResults(e) {
    let {
      results: {
        suggestions: t
      },
      selectedIndex: n,
      channel: a,
      options: l,
      onHover: c,
      onClick: u
    } = e, {
      suggestionDesign: d
    } = (0, s.kB)("MentionSuggestionAutocompletes", {
      autoTrackExposure: false
    }), f = t.map((e, t) => (0, r.jsx)(o.ZP.UserSuggestion, {
      guildId: a.guild_id,
      onClick: u,
      onHover: c,
      selected: n === t,
      index: t,
      user: e.user,
      nick: e.nick,
      comparator: e.comparator,
      status: e.status,
      hidePersonalInformation: l.hidePersonalInformation,
      layout: "vertical" === d ? "vertical-suggestion" : "horizontal-suggestion"
    }, e.user.id));
    return (0, r.jsx)(i.Fragment, {
      children: f
    }, "mention-suggestions")
  },
  onSelect(e) {
    let {
      results: {
        suggestions: t,
        queryInfo: {
          prefix: n,
          suffix: r
        }
      },
      index: i,
      options: a,
      channel: o
    } = e, s = t[i];
    return null != s && a.insertText(n + (0, f.BL)(s.user, o, a.hidePersonalInformation) + r, n + (0, f.m1)(s.user) + r, {
      replaceFullWord: true
    }), {
      type: d.z2.MENTION
    }
  }
}