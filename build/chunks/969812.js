/** Chunk was on web.js **/
/** chunk id: 969812, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk544891 = require("./544891.js"),
  Chunk904245 = require("./904245.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let s = {
  changeNickname: (e, t, n, s) => r.tn.patch({
    url: a.ANM.GUILD_MEMBER_NICK(e, n),
    body: {
      nick: s
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => {
    s = e.body.nick, i.Z.sendBotMessage(t, null != s && "" !== s ? o.intl.formatToMarkdownString(o.t["gz+HRq"], {
      nick: s
    }) : o.intl.string(o.t.Vhpd9A))
  }, e => {
    403 === e.status ? i.Z.sendBotMessage(t, o.intl.formatToMarkdownString(o.t.Izf9jO, {})) : i.Z.sendBotMessage(t, o.intl.string(o.t["5LO/Ss"]))
  })
}