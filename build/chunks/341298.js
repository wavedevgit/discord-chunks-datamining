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
let a = 3e3,
  s = 36e5;

function l() {
  let {
    guildStore: e
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, t = null != module ? module : Chunk430824.Z, n = exports.getGuild(Chunk558921.y), i = (null == require ? true : require.joinedAt) instanceof Date && Date.now() - require.joinedAt.getTime() <= s;
  return 1 === exports.getGuildCount() && Chunk914010
}

function c(e) {
  return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === o.g && l()
}

function u(e) {
  return new Promise((t, n) => {
    if (i.Z.getGuildId() === e) return void t();
    let r = setTimeout(() => {
        s(), n()
      }, a),
      o = () => {
        i.Z.getGuildId() === e && (s(), t())
      },
      s = () => {
        i.Z.removeChangeListener(o), clearTimeout(r)
      };
    i.Z.addChangeListener(o)
  })
}