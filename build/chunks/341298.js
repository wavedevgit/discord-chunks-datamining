/** Chunk was on web.js **/
/** chunk id: 341298, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => c,
  mM: () => d,
  tr: () => u
}), require("./442837.js");
var Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk369274 = require("./369274.js"),
  Chunk558921 = require("./558921.js");
let s = 3e3,
  l = 36e5;

function c(e) {
  let {
    guildStore: t
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, n = null != t ? t : r.Z, i = n.getGuild(o.y), s = (null == i ? true : i.joinedAt) instanceof Date && Date.now() - i.joinedAt.getTime() <= l;
  return 1 === n.getGuildCount() && s && (0, a.Z)(e)
}

function u(e) {
  return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === o.g && c("app")
}

function d(e) {
  return new Promise((t, n) => {
    if (i.Z.getGuildId() === e) return void t();
    let r = setTimeout(() => {
        o(), n()
      }, s),
      a = () => {
        i.Z.getGuildId() === e && (o(), t())
      },
      o = () => {
        i.Z.removeChangeListener(a), clearTimeout(r)
      };
    i.Z.addChangeListener(a)
  })
}