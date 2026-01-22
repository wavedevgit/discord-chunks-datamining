/** Chunk was on web.js **/
/** chunk id: 14509, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  TT: () => c,
  _9: () => l,
  ml: () => u
}), require("./311907.js");
var Chunk71393 = require("./71393.js"),
  Chunk967198 = require("./967198.js"),
  Chunk276041 = require("./276041.js");
let s = 3e3,
  o = 36e5;

function l() {
  let {
    guildStore: e
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, t = null != e ? e : r.A, n = t.getGuild(a.$), i = (null == n ? true : n.joinedAt) instanceof Date && Date.now() - n.joinedAt.getTime() <= o;
  return 1 === t.getGuildCount() && i
}

function c(e) {
  return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === a.t && l()
}

function u(e) {
  return new Promise((t, n) => {
    if (i.A.getGuildId() === e) return void t();
    let r = setTimeout(() => {
        o(), n()
      }, s),
      a = () => {
        i.A.getGuildId() === e && (o(), t())
      },
      o = () => {
        i.A.removeChangeListener(a), clearTimeout(r)
      };
    i.A.addChangeListener(a)
  })
}