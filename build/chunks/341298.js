/** Chunk was on web.js **/
/** chunk id: 341298, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => l,
  mM: () => u,
  tr: () => c
}), require("./442837.js");
var Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk558921 = require("./558921.js");
let o = 3e3,
  s = 36e5;

function l() {
  let {
    guildStore: e
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, t = null != e ? e : r.Z, n = t.getGuild(a.y), i = (null == n ? true : n.joinedAt) instanceof Date && Date.now() - n.joinedAt.getTime() <= s;
  return 1 === t.getGuildCount() && i
}

function c(e) {
  return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === a.g && l()
}

function u(e) {
  return new Promise((t, n) => {
    if (i.Z.getGuildId() === e) return void t();
    let r = setTimeout(() => {
        s(), n()
      }, o),
      a = () => {
        i.Z.getGuildId() === e && (s(), t())
      },
      s = () => {
        i.Z.removeChangeListener(a), clearTimeout(r)
      };
    i.Z.addChangeListener(a)
  })
}