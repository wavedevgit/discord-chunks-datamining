/** Chunk was on web.js **/
/** chunk id: 199054, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./35282.js");
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
  useFullWord: true,
  stores: [Chunk271383.ZP],
  matches(e, t, n, r, i) {
    var o;
    let {
      enabled: l
    } = (0, s.kB)("MentionSuggestionAutocompletes", {
      autoTrackExposure: false
    });
    return !(!l || !c.HV.getSetting() || !(null == (o = i.chatInputType.autocomplete) ? true : o.mentionSuggestions) || i.mentions.user === d.h3.DENY || n.length < 2 || /^\W/.test(n)) && null == a.Z.getActiveCommand(e.id)
  },
  queryResults: (e, t, n, r) => (0, l.r)(e, n, {
    isIdle: r.isEditorIdle,
    isVisible: r.isVisible
  }),
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
        trailingPunctuation: n
      },
      index: r,
      options: i,
      channel: a
    } = e, o = t[r];
    return null != o && i.insertText((0, f.BL)(o.user, a, i.hidePersonalInformation) + n, (0, f.m1)(o.user) + n, {
      replaceFullWord: true
    }), {
      type: d.z2.MENTION
    }
  }
}