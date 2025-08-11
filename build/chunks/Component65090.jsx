/** Chunk was on web.js **/
/** chunk id: 65090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk588468 = require("./588468.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk483360 = require("./483360.js"),
  Chunk51144 = require("./51144.js"),
  Chunk877565 = require("./877565.jsx"),
  Chunk590921 = require("./590921.js"),
  Chunk761652 = require("./761652.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t, n) {
  return s.ZP.hasSameRoleAsUsername(t, e) ? "".concat(d.ME).concat(e.tag) : "".concat(d.ME).concat(l.ZP.getUserTag(e, {
    identifiable: n ? "never" : "always"
  }))
}

function p(e) {
  return "<@".concat(e.id, ">")
}

function h(e) {
  return e.text
}

function m(e) {
  return "".concat(d.ME).concat(e.name)
}

function g(e) {
  return "<@&".concat(e.id, ">")
}
let E = {
  sentinel: Chunk761652.ME,
  stores: [Chunk271383.ZP],
  matches: (e, t, n, r, i) => i.mentions.user !== u.h3.DENY || i.mentions.role !== u.Fw.DENY || i.mentions.global !== u.VV.DENY,
  queryResults(e, t, n, r, i) {
    let o = r.mentions.global === u.VV.ALLOW_EVERYONE || r.mentions.global === u.VV.ALLOW_EVERYONE_OR_HERE,
      a = r.mentions.global === u.VV.ALLOW_EVERYONE_OR_HERE,
      l = r.mentions.user !== u.h3.DENY,
      c = r.mentions.role !== u.Fw.DENY,
      d = r.mentions.user === u.h3.ALLOW_GUILD,
      f = r.mentions.role === u.Fw.ALLOW_ALL;
    return {
      results: s.ZP.queryMentionResults({
        query: n,
        channel: e,
        canMentionEveryone: o,
        canMentionHere: a,
        canMentionUsers: l,
        canMentionRoles: c,
        includeAllGuildUsers: d,
        includeNonMentionableRoles: f,
        request: i
      })
    }
  },
  renderResults(e) {
    let t, n, {
        results: {
          users: a,
          globals: s,
          roles: l
        },
        selectedIndex: _,
        channel: p,
        query: h,
        options: m,
        onHover: g,
        onClick: E
      } = e,
      b = a.map((e, t) => (0, r.jsx)(o.ZP.User, {
        guildId: p.guild_id,
        onClick: E,
        onHover: g,
        selected: _ === t,
        index: t,
        user: e.user,
        nick: e.nick,
        status: e.status,
        hidePersonalInformation: m.hidePersonalInformation
      }, e.user.id)),
      y = s.map((e, t) => (0, r.jsx)(o.ZP.Generic, {
        onClick: E,
        onHover: g,
        selected: _ === t + a.length,
        index: a.length + t,
        text: e.text,
        description: m.hideMentionDescription ? null : e.description,
        "aria-label": e.text,
        badge: "@game" === e.text ? "new" : true
      }, e.text)),
      O = l.map((e, t) => (0, r.jsx)(o.ZP.Role, {
        onClick: E,
        onHover: g,
        selected: _ === t + a.length + s.length,
        index: a.length + s.length + t,
        role: e,
        hideDescription: m.hideMentionDescription,
        guildId: p.guild_id
      }, e.id));
    return m.mentions.user === u.h3.DENY ? (t = f.t.MLiD1d, n = f.intl.string(f.t.LPJmLy)) : (t = f.t.rPNimp, n = f.intl.string(f.t["9Oq93t"])), (0, r.jsxs)(i.Fragment, {
      children: [(0, c.gm)({
        titleWithQuery: t,
        titleWithoutQuery: n,
        query: h,
        getQuery: e => "".concat(d.ME).concat(e)
      }), b, a.length > 0 && s.length > 0 ? (0, r.jsx)(o.ZP.Divider, {}) : null, y, a.length > 0 && l.length > 0 || s.length > 0 && l.length > 0 ? (0, r.jsx)(o.ZP.Divider, {}) : null, O]
    }, "mentions")
  },
  onSelect(e) {
    let {
      results: {
        users: t,
        globals: n,
        roles: r
      },
      index: i,
      options: o,
      channel: a
    } = e, s = t[i], l = n[i - t.length], c = r[i - t.length - n.length];
    return null != s ? o.insertText(_(s.user, a, o.hidePersonalInformation), p(s.user)) : null != l ? null != l.inlineAutocompleteType ? o.insertAutocompleteInput(l.inlineAutocompleteType) : o.insertText(h(l)) : null != c && o.insertText(m(c), g(c)), {
      type: u.z2.MENTION
    }
  }
}