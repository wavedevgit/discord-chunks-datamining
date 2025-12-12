/** Chunk was on web.js **/
/** chunk id: 420001, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./35282.js"), require("./781311.js"), require("./704826.js");
var Chunk911969 = require("./911969.js"),
  Chunk10718 = require("./10718.js"),
  Chunk367790 = require("./367790.js"),
  Chunk895924 = require("./895924.js"),
  Chunk826298 = require("./826298.js"),
  Chunk588468 = require("./588468.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk417574 = require("./417574.js"),
  Chunk877565 = require("./877565.jsx"),
  Chunk590921 = require("./590921.js"),
  Chunk24397 = require("./24397.jsx"),
  Chunk388032 = require("./388032.jsx");

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

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
  let t = f.X.exec(e);
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
let v = y(E({}, Chunk24397.Z), {
  sentinel: true,
  focusMode: Chunk590921.QZ.MANUAL,
  matches(e, t, n, r, i) {
    if (i.commands === _.L8.DISABLED || i.commands === _.L8.OLD_BUILT_INS || n.length < 2 || !c.Xk.getSetting()) returnfalse;
    let a = O(n);
    return null != a && a.cleanedQuery.length > 0
  },
  queryResults(e, t, n, o, l) {
    if (!c.Xk.getSetting()) return m.K;
    let u = O(n);
    if (null == u) return m.K;
    let d = (0, s.hV)(e, u.cleanedQuery),
      {
        commands: f,
        sections: p
      } = i.JT({
        channel: e,
        type: "channel"
      }, {
        commandTypes: [r.yU.CHAT],
        text: d.text
      }, {
        limit: _.AQ,
        placeholderCount: _.YP,
        scoreMethod: a.p.COMMAND_OR_APPLICATION,
        allowFetch: l
      });
    if (null == f) return m.K;
    let h = f.filter(e => e.section.botId === u.user.id);
    if (d.hasSpaceTerminator) {
      let e = d.text.trim(),
        t = e + " ";
      h = h.filter(n => n.untranslatedName === e || n.untranslatedName.startsWith(t))
    }
    return 0 === h.length ? m.K : {
      results: {
        entries: h.slice(0, _.AQ).map(e => ({
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
      options: o,
      onHover: s,
      onClick: c
    } = e;
    return (0, p.HI)({
      query: a,
      selectedIndex: n,
      autocompletes: t,
      onHover: s,
      onClick: c,
      titleWithQuery: h.t.HFRoZR,
      titleWithoutQuery: h.intl.string(h.t["0hKkS+"]),
      Component: o.commands === _.L8.OLD_BUILT_INS ? l.ZP.Command : l.ZP.NewCommand,
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
        let n = d.ZP.getName(null == r ? true : r.id, i.id, t.user);
        return e.replace(f.X, "@".concat(n))
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
      guild: s
    } = e, l = m.Z.onSelect({
      results: t,
      index: n,
      type: r,
      options: i,
      channel: a,
      guild: s,
      location: o.Vh.SUGGESTION
    });
    return null == l ? null : y(E({}, l), {
      type: _.z2.COMMAND_SUGGESTION
    })
  }
})