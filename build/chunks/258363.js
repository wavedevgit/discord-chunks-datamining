/** Chunk was on web.js **/
/** chunk id: 258363, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  AA: () => u,
  DB: () => p,
  Eq: () => d,
  Gk: () => c,
  ib: () => f
}), require("./733351.js"), require("./747238.js"), require("./812715.js"), require("./896048.js"), require("./591487.js"), require("./727858.js"), require("./284009.js");
var Chunk155718 = require("./155718.js"),
  Chunk25662 = require("./25662.js"),
  Chunk257120 = require("./257120.js");

function c(e) {
  return null == e ? [] : e.filter((t, n) => "text" !== t.type || (n > 0 && n < e.length - 1 ? "" !== t.text : "" !== t.text.trim()))
}
require("./73510.js");

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
    } = null != (n = s.i[e]) ? n : s.i["en-US"];
    r = RegExp(l.A.escape(t), "g"), i = RegExp(l.A.escape(o), "g")
  }
  return t.replace(r, "").replace(i, ".")
}

function p(e, t) {
  let n = {};
  for (let i of t) {
    var r;
    let t = null == (r = e.options) ? true : r.find(e => e.name === i.name);
    i.type !== o.n4.ATTACHMENT && (null != t && t.autocomplete || (n[i.name] = i))
  }
  return n
}