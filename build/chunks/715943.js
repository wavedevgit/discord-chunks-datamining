/** Chunk was on web.js **/
/** chunk id: 715943, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk562465 = require("./562465.js"),
  Chunk843472 = require("./843472.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let o = {
  changeNickname: (e, t, n, o) => r.Bo.patch({
    url: a.Rsh.GUILD_MEMBER_NICK(e, n),
    body: {
      nick: o
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => {
    o = e.body.nick, i.A.sendBotMessage(t, null != o && "" !== o ? s.intl.formatToMarkdownString(s.t["gz+HRq"], {
      nick: o
    }) : s.intl.string(s.t.Vhpd9A))
  }, e => {
    403 === e.status ? i.A.sendBotMessage(t, s.intl.formatToMarkdownString(s.t.Izf9jO, {})) : i.A.sendBotMessage(t, s.intl.string(s.t["5LO/Ss"]))
  })
}