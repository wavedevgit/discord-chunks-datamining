/** Chunk was on 46746 **/
/** chunk id: 233037, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk938475 = require("./938475.js"),
  Chunk102172 = require("./102172.js"),
  Chunk499596 = require("./499596.jsx"),
  Chunk148381 = require("./148381.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk936794 = require("./936794.js");

function x(e) {
  let {
    selectedChannelId: t,
    guildId: n,
    onChangeSelectedChannelId: x
  } = e, g = (0, i.e7)([c.default], () => c.default.getCurrentUser()), _ = (0, i.e7)([o.Z, s.ZP, a.Z], () => (0, u.h_)(s.ZP.getChannels(n), o.Z, a.Z)), v = (0, i.e7)([d.ZP], () => d.ZP.getVoiceStates(n)), j = _.map(e => {
    var n;
    return {
      name: (0, r.jsx)(f.Z, {
        channel: e,
        users: null == (n = v[e.id]) ? true : n.filter(e => {
          let {
            user: t
          } = e;
          return t.id !== (null == g ? true : g.id)
        }).map(e => {
          let {
            user: t
          } = e;
          return t
        }),
        selected: e.id === t
      }),
      value: e.id
    }
  });
  return (0, r.jsx)(m.Z, {
    title: h.intl.string(h.t["eg7R/v"]),
    scrollerInnerClassName: p.channelSelectScrollerInner,
    children: (0, r.jsx)(l.FXm, {
      options: j,
      value: t,
      itemInfoClassName: p.channelInfoWrapper,
      itemTitleClassName: p.channelTitleWrapper,
      onChange: e => {
        let {
          value: t
        } = e;
        return x(t)
      }
    })
  })
}