/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  g: () => c,
  mM: () => d,
  tr: () => u
}), n(442837);
var r = n(430824),
  i = n(914010),
  o = n(369274),
  a = n(558921);
let s = 3e3,
  l = 36e5;

function c(e) {
  let {
    guildStore: t
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null != t ? t : r.Z, i = n.getGuild(a.y), s = (null == i ? void 0 : i.joinedAt) instanceof Date && Date.now() - i.joinedAt.getTime() <= l;
  return 1 === n.getGuildCount() && s && (0, o.Z)(e)
}

function u(e) {
  return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === a.g && c("app")
}

function d(e) {
  return new Promise((t, n) => {
    if (i.Z.getGuildId() === e) {
      t();
      return
    }
    let r = setTimeout(() => {
        a(), n()
      }, s),
      o = () => {
        i.Z.getGuildId() === e && (a(), t())
      },
      a = () => {
        i.Z.removeChangeListener(o), clearTimeout(r)
      };
    i.Z.addChangeListener(o)
  })
}