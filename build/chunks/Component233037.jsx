/** Chunk was on 4093 **/
/** chunk id: 233037, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk938475 = require("./938475.js"),
  Chunk102172 = require("./102172.js"),
  Chunk499596 = require("./499596.jsx"),
  Chunk148381 = require("./148381.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk376681 = require("./376681.js");

function j(e) {
  let {
    selectedChannelId: n,
    guildId: t,
    onChangeSelectedChannelId: j
  } = e, v = (0, r.e7)([o.default], () => o.default.getCurrentUser()), p = (0, r.e7)([a.Z, s.ZP, c.Z], () => (0, d.h_)(s.ZP.getChannels(t), a.Z, c.Z)), f = (0, r.e7)([u.ZP], () => u.ZP.getVoiceStates(t)), Z = p.map(e => {
    var t;
    return {
      name: (0, l.jsx)(m.Z, {
        channel: e,
        users: null == (t = f[e.id]) ? true : t.filter(e => {
          let {
            user: n
          } = e;
          return n.id !== (null == v ? true : v.id)
        }).map(e => {
          let {
            user: n
          } = e;
          return n
        }),
        selected: e.id === n
      }),
      value: e.id
    }
  });
  return (0, l.jsx)(g.Z, {
    title: x.intl.string(x.t["eg7R/k"]),
    scrollerInnerClassName: h.channelSelectScrollerInner,
    children: (0, l.jsx)(i.Gu, {
      "data-migration-pending": true,
      options: Z,
      value: n,
      itemInfoClassName: h.channelInfoWrapper,
      itemTitleClassName: h.channelTitleWrapper,
      onChange: e => {
        let {
          value: n
        } = e;
        return j(n)
      }
    })
  })
}