/** Chunk was on web.js **/
/** chunk id: 988102, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./747238.js");
let r = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
  i = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
  a = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
  o = /^(.*)#[0-9]{1,5}$/,
  s = /^(https:\/\/)?(discord\.com\/discovery\/game\/)([0-9-]+)\/?/,
  l = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
  c = ["discordtag", "everyone", "here", "discord nitro", "discord"],
  u = {
    isEmail: function(e) {
      return r.test(e)
    },
    isInvite: function(e) {
      return i.test(e)
    },
    isPhoneNumber: function(e) {
      return a.test(e)
    },
    isUserTagLike: function(e) {
      let t = o.exec(e);
      if (null != t && t.length > 1) {
        let e = t[1],
          n = l.some(t => e.includes(t)),
          r = c.includes(e);
        return !n && !r
      }
      returnfalse
    },
    isDiscoveryLink: function(e) {
      return s.test(e)
    }
  }