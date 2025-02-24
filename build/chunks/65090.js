/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => E
}), n(266796);
var r = n(200651),
  i = n(192379),
  o = n(588468),
  a = n(271383),
  s = n(483360),
  l = n(51144),
  c = n(877565),
  u = n(590921),
  d = n(665692),
  f = n(388032);

function p(e, t, n) {
  return s.ZP.hasSameRoleAsUsername(t, e) ? "".concat(d.ME).concat(e.tag) : "".concat(d.ME).concat(l.ZP.getUserTag(e, {
    identifiable: n ? "never" : "always"
  }))
}

function _(e) {
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
  sentinel: d.ME,
  stores: [a.ZP],
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
        selectedIndex: p,
        channel: _,
        query: h,
        options: m,
        onHover: g,
        onClick: E
      } = e,
      v = a.map((e, t) => (0, r.jsx)(o.ZP.User, {
        guildId: _.guild_id,
        onClick: E,
        onHover: g,
        selected: p === t,
        index: t,
        user: e.user,
        nick: e.nick,
        status: e.status,
        hidePersonalInformation: m.hidePersonalInformation
      }, e.user.id)),
      b = s.map((e, t) => (0, r.jsx)(o.ZP.Generic, {
        onClick: E,
        onHover: g,
        selected: p === t + a.length,
        index: a.length + t,
        text: e.text,
        description: m.hideMentionDescription ? null : e.description,
        "aria-label": e.text
      }, e.text)),
      y = l.map((e, t) => (0, r.jsx)(o.ZP.Role, {
        onClick: E,
        onHover: g,
        selected: p === t + a.length + s.length,
        index: a.length + s.length + t,
        role: e,
        hideDescription: m.hideMentionDescription
      }, e.id));
    return m.mentions.user === u.h3.DENY ? (t = f.t.MLiD1d, n = f.NW.string(f.t.LPJmLy)) : (t = f.t.rPNimp, n = f.NW.string(f.t["9Oq93t"])), (0, r.jsxs)(i.Fragment, {
      children: [(0, c.gm)({
        titleWithQuery: t,
        titleWithoutQuery: n,
        query: h,
        getQuery: e => "".concat(d.ME).concat(e)
      }), v, a.length > 0 && s.length > 0 ? (0, r.jsx)(o.ZP.Divider, {}) : null, b, a.length > 0 && l.length > 0 || s.length > 0 && l.length > 0 ? (0, r.jsx)(o.ZP.Divider, {}) : null, y]
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
    return null != s ? o.insertText(p(s.user, a, o.hidePersonalInformation), _(s.user)) : null != l ? o.insertText(h(l)) : null != c && o.insertText(m(c), g(c)), {
      type: u.z2.MENTION
    }
  }
}