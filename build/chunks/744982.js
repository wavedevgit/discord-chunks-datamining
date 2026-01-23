/** Chunk was on web.js **/
/** chunk id: 744982, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./747238.js"), require("./733351.js"), require("./812715.js");
var Chunk155718 = require("./155718.js"),
  Chunk842209 = require("./842209.js"),
  Chunk210978 = require("./210978.js"),
  Chunk392054 = require("./392054.js"),
  Chunk664929 = require("./664929.js"),
  Chunk580424 = require("./580424.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk362562 = require("./362562.js"),
  Chunk634788 = require("./634788.jsx"),
  Chunk374803 = require("./374803.js"),
  Chunk114323 = require("./114323.jsx"),
  Chunk985018 = require("./985018.jsx");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
  let t = f.z.exec(e);
  if (null != t) {
    let n = t[1],
      r = u.default.getUser(n);
    return null != r && r.bot ? {
      type: "mention",
      cleanedQuery: e.substring(t[0].length).trim(),
      user: r
    } : null
  }
  return null
}
let v = b(E({}, Chunk114323.A), {
  sentinel: true,
  focusMode: Chunk374803.e.MANUAL,
  matches(e, t, n, r, i) {
    if (i.commands === _.Ze.DISABLED || i.commands === _.Ze.OLD_BUILT_INS || n.length < 2 || !c._3.getSetting()) returnfalse;
    let a = O(n);
    return null != a && a.cleanedQuery.length > 0
  },
  queryResults(e, t, n, s, l) {
    if (!c._3.getSetting()) return h.f;
    let u = O(n);
    if (null == u) return h.f;
    let d = (0, o.Yn)(e, u.cleanedQuery),
      {
        commands: f,
        sections: p
      } = i.eW({
        channel: e,
        type: "channel"
      }, {
        commandTypes: [r.kc.CHAT],
        text: d.text
      }, {
        limit: 20,
        placeholderCount: 3,
        scoreMethod: a.M.COMMAND_OR_APPLICATION,
        allowFetch: l
      });
    if (null == f) return h.f;
    let _ = f.filter(e => e.section.botId === u.user.id);
    if (d.hasSpaceTerminator) {
      let e = d.text.trim(),
        t = e + " ";
      _ = _.filter(n => n.untranslatedName === e || n.untranslatedName.startsWith(t))
    }
    return 0 === _.length ? h.f : {
      results: {
        entries: _.slice(0, 20).map(e => ({
          command: e,
          section: null == p ? true : p.find(t => t.id === e.applicationId)
        }))
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        entries: t
      },
      selectedIndex: n,
      guild: r,
      channel: i,
      query: a,
      options: s,
      onHover: o,
      onClick: c
    } = e;
    return (0, p.GM)({
      query: a,
      selectedIndex: n,
      autocompletes: t,
      onHover: o,
      onClick: c,
      titleWithQuery: m.t.HFRoZR,
      titleWithoutQuery: m.intl.string(m.t["0hKkS+"]),
      Component: s.commands === _.Ze.OLD_BUILT_INS ? l.Ay.Command : l.Ay.NewCommand,
      getProps: e => {
        let {
          command: t,
          section: n
        } = e;
        return {
          key: t.id,
          command: t,
          channel: i,
          guildId: i.guild_id,
          showImage: true,
          section: n
        }
      },
      getQuery: e => {
        let t = O(e);
        if ("mention" !== t.type) return e;
        let n = d.Ay.getName(null == r ? true : r.id, i.id, t.user);
        return e.replace(f.z, "@".concat(n))
      },
      key: "commands"
    })
  },
  onSelect(e) {
    let {
      results: t,
      index: n,
      type: r,
      options: i,
      channel: a,
      guild: o
    } = e, l = h.A.onSelect({
      results: t,
      index: n,
      type: r,
      options: i,
      channel: a,
      guild: o,
      location: s.Oh.SUGGESTION
    });
    return null == l ? null : b(E({}, l), {
      type: _.kc.COMMAND_SUGGESTION
    })
  }
})