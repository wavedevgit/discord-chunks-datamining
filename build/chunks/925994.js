/** Chunk was on web.js **/
/** chunk id: 925994, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  sg: () => O,
  sk: () => b
}), require("./388685.js"), require("./539854.js"), require("./704826.js"), require("./35282.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk933557 = require("./933557.js"),
  Chunk660199 = require("./660199.js"),
  Chunk763296 = require("./763296.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk699516 = require("./699516.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk887490 = require("./887490.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  let {
    mode: n,
    ignoreTrailingEmptyNodes: r,
    preventEmojiSurrogates: i
  } = null != t ? t : {}, [a, o] = (null == t ? true : t.range) != null ? _.M8.edges(t.range) : [true, true];
  return y(e, {
    mode: n,
    start: a,
    end: o,
    ignoreTrailingEmptyNodes: r,
    preventEmojiSurrogates: i
  })
}

function y(e, t) {
  var n, r;
  let {
    mode: i,
    start: a,
    end: o,
    separator: s,
    ignoreEmptyNodes: l,
    ignoreTrailingEmptyNodes: c,
    preventEmojiSurrogates: u
  } = null != t ? t : {}, d = e.length > 0 && !_.LC.isText(e[0]);
  null == s && (s = d ? "\n" : "");
  let f = null != (n = null == a ? true : a.path[0]) ? n : 0,
    p = null != (r = null == o ? true : o.path[0]) ? r : e.length - 1;
  if (c)
    for (let t = p; t >= f; t--) {
      let n = e[t];
      if (_.LC.isText(n)) {
        if (n.text.length > 0) {
          p = t;
          break
        }
      } else if (!_.q.isEmpty(n)) {
        p = t;
        break
      }
      if (t === f) return ""
    }
  let h = f > 0 && _.aj.isType(e[f - 1], "blockQuote"),
    m = _.aj.isType(e[f], "blockQuote"),
    g = _.aj.isType(e[p], "blockQuote"),
    E = [];
  for (let t = f; t <= p; t++) {
    let n = e[t];
    if (l && _.LC.isText(n) && 0 === n.text.length) continue;
    let r = null != a && t === f ? {
        path: a.path.slice(1),
        offset: a.offset
      } : true,
      s = O(n, {
        mode: i,
        start: r,
        end: null != o && t === p ? {
          path: o.path.slice(1),
          offset: o.offset
        } : true,
        allowBlockQuotePrefix: null == a || null == o || !h && (!m || g),
        preventEmojiSurrogates: u
      });
    (!l || s.length > 0) && E.push(s)
  }
  return E.join(s)
}

function O(e, t) {
  let {
    mode: n,
    start: r,
    allowBlockQuotePrefix: i = false,
    preventEmojiSurrogates: h = false
  } = null != t ? t : {};
  if (_.LC.isText(e)) return v(e.text, t);
  switch (e.type) {
    case "gameMentionInput":
    case "testInlineVoid":
      return "";
    case "line":
    case "testInline":
      return y(e.children, t);
    case "blockQuote": {
      let n = y(e.children, t),
        a = null != r && 1 === r.path.length && 0 === r.path[0] && 0 === r.offset;
      if (i && (null == r || a)) return "> ".concat(n);
      return n
    }
    case "emoji": {
      let t = e.emoji;
      if (!h && null != t.surrogate) return t.surrogate;
      return t.name
    }
    case "customEmoji": {
      let t = e.emoji;
      if ("raw" === n) {
        let e = t.animated ? "a" : "",
          n = t.name.replace(/:/g, "").split("~")[0];
        return "<".concat(e, ":").concat(n, ":").concat(t.emojiId, ">")
      }
      return t.name
    }
    case "textMention":
      return e.name;
    case "channelMention": {
      let t = "<#".concat(e.channelId, ">");
      if ("raw" === n) return t;
      let r = l.Z.getChannel(e.channelId);
      if (null == r) return t;
      return (0, a.F6)(r, f.default, u.Z, true, true)
    }
    case "soundboard": {
      let t = "<sound:".concat(e.guildId, ":").concat(e.soundId, ">");
      if ("raw" === n) return t;
      let r = s.Z.getSoundById(e.soundId);
      if (null == r) return t;
      return r.name
    }
    case "staticRouteLink":
      return null != e.itemId ? "<id:".concat(e.id, ":").concat(e.itemId, ">") : "<id:".concat(e.id, ">");
    case "roleMention": {
      let t = "<@&".concat(e.roleId, ">");
      if ("raw" === n) return t;
      let r = d.Z.getGuildId(),
        i = null != r ? c.Z.getRole(r, e.roleId) : true;
      if (null == i) return t;
      return "@".concat(i.name)
    }
    case "userMention": {
      let t = "<@".concat(e.userId, ">");
      if ("raw" === n) return t;
      let r = f.default.getUser(e.userId);
      if (null == r) return t;
      return "@".concat(p.ZP.getUserTag(r, {
        decoration: "never"
      }))
    }
    case "commandMention":
      return "</".concat(e.commandName, ":").concat(e.commandId, ">");
    case "timestamp":
      return (0, o.He)(e.parsed.timestamp, e.parsed.format);
    case "gameMention":
      return "<@$".concat(e.applicationId, ">");
    case "timestampMentionInput": {
      let n = y(e.children, t);
      if (null == r) return "<@time:".concat(n, ">");
      return n
    }
    case "applicationCommand":
      return y(e.children, E(m({}, t), {
        separator: " ",
        ignoreEmptyNodes: true
      }));
    case "applicationCommandOption": {
      let n = y(e.children, t);
      if (null == r) return "".concat(e.optionDisplayName, ":").concat(n);
      return n
    }
  }
}

function v(e, t) {
  var n, r;
  let {
    start: a,
    end: o
  } = null != t ? t : {};
  return i()(null == a || 0 === a.path.length, "Invalid start provided to serializeText"), i()(null == o || 0 === o.path.length, "Invalid end provided to serializeText"), e.substring(null != (n = null == a ? true : a.offset) ? n : 0, null != (r = null == o ? true : o.offset) ? r : e.length)
}