/** Chunk was on web.js **/
/** chunk id: 323350, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IQ: () => O,
  WO: () => y
}), require("./896048.js"), require("./321073.js"), require("./747238.js"), require("./812715.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk47167 = require("./47167.js"),
  Chunk379418 = require("./379418.js"),
  Chunk209932 = require("./209932.js"),
  Chunk734057 = require("./734057.js"),
  Chunk317525 = require("./317525.js"),
  Chunk994500 = require("./994500.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js"),
  Chunk711371 = require("./711371.js");

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

function y(e, t) {
  let {
    mode: n,
    ignoreTrailingEmptyNodes: r,
    preventEmojiSurrogates: i
  } = null != t ? t : {}, [a, o] = (null == t ? true : t.range) != null ? _.ZF.edges(t.range) : [true, true];
  return b(e, {
    mode: n,
    start: a,
    end: o,
    ignoreTrailingEmptyNodes: r,
    preventEmojiSurrogates: i
  })
}

function b(e, t) {
  var n, r;
  let {
    mode: i,
    start: a,
    end: o,
    separator: s,
    ignoreEmptyNodes: l,
    ignoreTrailingEmptyNodes: c,
    preventEmojiSurrogates: u
  } = null != t ? t : {}, d = e.length > 0 && !_.l5.isText(e[0]);
  null == s && (s = d ? "\n" : "");
  let f = null != (n = null == a ? true : a.path[0]) ? n : 0,
    p = null != (r = null == o ? true : o.path[0]) ? r : e.length - 1;
  if (c)
    for (let t = p; t >= f; t--) {
      let n = e[t];
      if (_.l5.isText(n)) {
        if (n.text.length > 0) {
          p = t;
          break
        }
      } else if (!_.cv.isEmpty(n)) {
        p = t;
        break
      }
      if (t === f) return ""
    }
  let h = f > 0 && _.AS.isType(e[f - 1], "blockQuote"),
    m = _.AS.isType(e[f], "blockQuote"),
    g = _.AS.isType(e[p], "blockQuote"),
    E = [];
  for (let t = f; t <= p; t++) {
    let n = e[t];
    if (l && _.l5.isText(n) && 0 === n.text.length) continue;
    let r = O(n, {
      mode: i,
      start: null != a && t === f ? {
        path: a.path.slice(1),
        offset: a.offset
      } : true,
      end: null != o && t === p ? {
        path: o.path.slice(1),
        offset: o.offset
      } : true,
      allowBlockQuotePrefix: null == a || null == o || !h && (!m || g),
      preventEmojiSurrogates: u
    });
    (!l || r.length > 0) && E.push(r)
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
  if (_.l5.isText(e)) return v(e.text, t);
  switch (e.type) {
    case "gameMentionInput":
    case "testInlineVoid":
      return "";
    case "line":
    case "testInline":
      return b(e.children, t);
    case "blockQuote": {
      let n = b(e.children, t),
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
      let r = l.A.getChannel(e.channelId);
      if (null == r) return t;
      return (0, a.m1)(r, f.default, u.A, true, true)
    }
    case "soundboard": {
      let t = "<sound:".concat(e.guildId, ":").concat(e.soundId, ">");
      if ("raw" === n) return t;
      let r = s.A.getSoundById(e.soundId);
      if (null == r) return t;
      return r.name
    }
    case "staticRouteLink":
      return null != e.itemId ? "<id:".concat(e.id, ":").concat(e.itemId, ">") : "<id:".concat(e.id, ">");
    case "roleMention": {
      let t = "<@&".concat(e.roleId, ">");
      if ("raw" === n) return t;
      let r = d.A.getGuildId(),
        i = null != r ? c.A.getRole(r, e.roleId) : true;
      if (null == i) return t;
      return "@".concat(i.name)
    }
    case "userMention": {
      let t = "<@".concat(e.userId, ">");
      if ("raw" === n) return t;
      let r = f.default.getUser(e.userId);
      if (null == r) return t;
      return "@".concat(p.Ay.getUserTag(r, {
        decoration: "never"
      }))
    }
    case "commandMention":
      return "</".concat(e.commandName, ":").concat(e.commandId, ">");
    case "timestamp":
      return (0, o.tf)(e.parsed.timestamp, e.parsed.format);
    case "gameMention":
      return "<@$".concat(e.applicationId, ">");
    case "timestampMentionInput": {
      let n = b(e.children, t);
      if (null == r) return "<@time:".concat(n, ">");
      return n
    }
    case "applicationCommand":
      return b(e.children, E(m({}, t), {
        separator: " ",
        ignoreEmptyNodes: true
      }));
    case "applicationCommandOption": {
      let n = b(e.children, t);
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