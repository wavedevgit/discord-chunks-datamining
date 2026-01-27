/** Chunk was on web.js **/
/** chunk id: 266536, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk861382 = require("./861382.js"),
  Chunk580424 = require("./580424.jsx"),
  Chunk968011 = require("./968011.js"),
  Chunk399777 = require("./399777.js"),
  Chunk253932 = require("./253932.js"),
  Chunk696451 = require("./696451.js"),
  Chunk374803 = require("./374803.js"),
  Chunk311036 = require("./311036.jsx");
let p = {
  selectMode: Chunk374803.SB.TAB_ONLY,
  stores: [Chunk696451.Ay],
  matches(e, t, n, r, i) {
    var o;
    let {
      enabled: u
    } = (0, s.sA)("MentionSuggestionAutocompletes", {
      autoTrackExposure: true
    });
    return !(!u || e.isDM()) && !!c.ng.getSetting() && !!(null == (o = i.chatInputType.autocomplete) ? true : o.mentionSuggestions) && i.mentions.user !== d.Vf.DENY && null != i.currentFullWord && !(i.currentFullWord.length < l.$) && null == a.A.getActiveCommand(e.id) && true
  },
  queryResults(e, t, n, r) {
    var i;
    let a = n.length;
    return (0, l.W)(e, null != (i = r.currentFullWord) ? i : "", a, {
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
    } = (0, s.sA)("MentionSuggestionAutocompletes", {
      autoTrackExposure: false
    }), f = t.map((e, t) => (0, r.jsx)(o.Ay.UserSuggestion, {
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
    return null != s && a.insertText(n + (0, f.JB)(s.user, o, a.hidePersonalInformation) + r, n + (0, f.z$)(s.user) + r, {
      replaceFullWord: true
    }), {
      type: d.kc.MENTION
    }
  }
}