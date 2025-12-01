/** Chunk was on web.js **/
/** chunk id: 456007, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  AS: () => f,
  Dw: () => p,
  KF: () => u,
  OU: () => c,
  li: () => d
}), require("./781311.js"), require("./704826.js"), require("./35282.js"), require("./388685.js"), require("./413496.js"), require("./433524.js"), require("./512722.js");
var Chunk911969 = require("./911969.js"),
  Chunk702813 = require("./702813.js"),
  Chunk226951 = require("./226951.js");

function c(e) {
  return null == e ? [] : e.filter((t, n) => "text" !== t.type || (n > 0 && n < e.length - 1 ? "" !== t.text : "" !== t.text.trim()))
}
require("./689079.js");

function u(e, t) {
  let n = e[t],
    r = "";
  for (let e of n) switch (e.type) {
    case "text":
    case "textMention":
      r += e.text;
      break;
    case "userMention":
      r += "<@".concat(e.userId, ">");
      break;
    case "channelMention":
      r += "<#".concat(e.channelId, ">");
      break;
    case "roleMention":
      r += "<@&".concat(e.roleId, ">");
      break;
    case "emoji":
      r += e.surrogate;
      break;
    case "customEmoji":
      r += "<".concat(e.animated ? "a" : "", ":").concat(e.name.replace(/:/g, "").split("~")[0], ":").concat(e.emojiId, ">")
  }
  return r
}

function d(e, t) {
  return null == e[t] ? null : u(e, t)
}

function f(e, t) {
  if (e !== a) {
    var n;
    a = e;
    let {
      group: t,
      decimal: o
    } = null != (n = s.L[e]) ? n : s.L["en-US"];
    r = RegExp(l.Z.escape(t), "g"), i = RegExp(l.Z.escape(o), "g")
  }
  return t.replace(r, "").replace(i, ".")
}

function p(e, t) {
  let n = {};
  for (let i of t) {
    var r;
    let t = null == (r = e.options) ? true : r.find(e => e.name === i.name);
    i.type !== o.jw.ATTACHMENT && (null != t && t.autocomplete || (n[i.name] = i))
  }
  return n
}