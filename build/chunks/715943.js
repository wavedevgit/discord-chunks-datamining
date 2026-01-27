/** Chunk was on web.js **/
/** chunk id: 715943, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk843472 = require("./843472.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let s = {
  changeNickname: (e, t, n, s) => r.Bo.patch({
    url: a.Rsh.GUILD_MEMBER_NICK(e, n),
    body: {
      nick: s
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => {
    s = e.body.nick, i.A.sendBotMessage(t, null != s && "" !== s ? o.intl.formatToMarkdownString(o.t["gz+HRq"], {
      nick: s
    }) : o.intl.string(o.t.Vhpd9A))
  }, e => {
    403 === e.status ? i.A.sendBotMessage(t, o.intl.formatToMarkdownString(o.t.Izf9jO, {})) : i.A.sendBotMessage(t, o.intl.string(o.t["5LO/Ss"]))
  })
}