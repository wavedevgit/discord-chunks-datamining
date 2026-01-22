/** Chunk was on 21738 **/
/** chunk id: 294132, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk956793 = require("./956793.js"),
  Chunk401843 = require("./401843.js"),
  Chunk427262 = require("./427262.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let {
    applicationStreams: t
  } = e;
  return t.map(e => {
    let {
      stream: t,
      streamUser: n
    } = e;
    return (0, r.jsx)(i.Drp, {
      id: "spectate-".concat(t.ownerId),
      action: () => {
        l.default.selectVoiceChannel(t.channelId), (0, a.Nl)(t)
      },
      label: o.intl.formatToPlainString(o.t.m09d0T, {
        streamerName: s.Ay.getName(n)
      })
    }, "spectate-".concat(t.ownerId))
  })
}