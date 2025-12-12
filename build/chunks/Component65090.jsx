/** Chunk was on web.js **/
/** chunk id: 65090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BL: () => p,
  ZP: () => E,
  m1: () => _
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk588468 = require("./588468.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk483360 = require("./483360.js"),
  Chunk51144 = require("./51144.js"),
  Chunk877565 = require("./877565.jsx"),
  Chunk590921 = require("./590921.js"),
  Chunk761652 = require("./761652.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
  return s.ZP.hasSameRoleAsUsername(t, e) ? "".concat(d.ME).concat(e.tag) : "".concat(d.ME).concat(l.ZP.getUserTag(e, {
    identifiable: n ? "never" : "always"
  }))
}

function _(e) {
  return "<@".concat(e.id, ">")
}

function m(e) {
  return e.text
}

function h(e) {
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
        canMentionOtherGlobals: r.mentions.otherGlobals,
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
        selectedIndex: p,
        channel: _,
        query: m,
        options: h,
        onHover: g,
        onClick: E
      } = e,
      b = a.map((e, t) => (0, r.jsx)(o.ZP.User, {
        guildId: _.guild_id,
        onClick: E,
        onHover: g,
        selected: p === t,
        index: t,
        user: e.user,
        nick: e.nick,
        status: e.status,
        hidePersonalInformation: h.hidePersonalInformation
      }, e.user.id)),
      y = s.map((e, t) => (0, r.jsx)(o.ZP.Generic, {
        onClick: E,
        onHover: g,
        selected: p === t + a.length,
        index: a.length + t,
        text: e.text,
        description: h.hideMentionDescription ? null : e.description,
        "aria-label": e.text,
        badge: "@game" === e.text || "@time" === e.text ? "new" : true
      }, e.text)),
      O = l.map((e, t) => (0, r.jsx)(o.ZP.Role, {
        onClick: E,
        onHover: g,
        selected: p === t + a.length + s.length,
        index: a.length + s.length + t,
        role: e,
        hideDescription: h.hideMentionDescription,
        guildId: _.guild_id
      }, e.id));
    return h.mentions.user === u.h3.DENY ? (t = f.t.MLiD1e, n = f.intl.string(f.t["LPJmL/"])) : (t = f.t.rPNimn, n = f.intl.string(f.t["9Oq93m"])), (0, r.jsxs)(i.Fragment, {
      children: [(0, c.gm)({
        titleWithQuery: t,
        titleWithoutQuery: n,
        query: m,
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
    } = e, s = t[i], l = n[i - t.length], c = r[i - t.length - n.length], d = u.z2.MENTION;
    return null != s ? o.insertText(p(s.user, a, o.hidePersonalInformation), _(s.user)) : null != l ? null != l.inlineAutocompleteType ? (o.insertAutocompleteInput(l.inlineAutocompleteType), d = "timestampMentionInput" === l.inlineAutocompleteType ? u.z2.TIMESTAMP : u.z2.GAME_MENTION) : o.insertText(m(l)) : null != c && o.insertText(h(c), g(c)), {
      type: d
    }
  }
}