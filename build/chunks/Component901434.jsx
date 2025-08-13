/** Chunk was on 21087 **/
/** chunk id: 901434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk358221 = require("./358221.js"),
  Chunk305325 = require("./305325.js"),
  Chunk281956 = require("./281956.js"),
  Chunk27457 = require("./27457.jsx"),
  Chunk546247 = require("./546247.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk5192 = require("./5192.js"),
  Chunk501655 = require("./501655.js"),
  Chunk504185 = require("./504185.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk203435 = require("./203435.js");
let O = (e, t) => b.ZP.getName(e.getGuildId(), e.id, t.user),
  v = function(e) {
    let {
      participants: t,
      channel: n,
      hasConnectPermission: l
    } = e, b = (0, p.J)(n.guild_id), v = i.useCallback(() => {
      b ? (0, h.hk)(n.guild_id, () => u.default.selectVoiceChannel(n.id)) : u.default.selectVoiceChannel(n.id)
    }, [n.id, n.guild_id, b]), C = t.filter(e => e.type === y.Ui.VOICE), E = 4 === C.length ? 2 : 3, S = (0, s.Wu)([d.Z], () => C.map(e => d.Z.getParticipant(n.id, e.id)).filter(m.lm), [n.id, C]);
    return (0, r.jsxs)("div", {
      className: _.container,
      children: [(0, r.jsx)(g.Z, {}), (0, r.jsx)("div", {
        className: _.tiles,
        style: {
          maxWidth: 168 * E
        },
        children: S.slice(0, 5).map(e => (0, r.jsx)(f.ZP, {
          participant: e,
          channel: n,
          className: _.tile,
          inCall: true,
          noVideoRender: true,
          inPopout: false,
          width: 48
        }, e.id))
      }), (0, r.jsx)(c.X6q, {
        className: _.channelName,
        variant: "heading-xxl/normal",
        children: n.name
      }), (0, r.jsx)("div", {
        className: _.participantsRow,
        children: (0, r.jsx)(c.Text, {
          tag: "div",
          color: "header-secondary",
          variant: "heading-lg/normal",
          children: 0 === C.length ? j.intl.string(j.t.FUVhyM) : 1 === C.length ? j.intl.formatToPlainString(j.t.EQwZlJ, {
            a: O(n, C[0])
          }) : 2 === C.length ? j.intl.formatToPlainString(j.t.zBcKoK, {
            a: O(n, C[0]),
            b: O(n, C[1])
          }) : C.length > 2 ? j.intl.formatToPlainString(j.t["3AqFaG"], {
            a: O(n, C[0]),
            b: O(n, C[1]),
            n: C.length - 2
          }) : true
        })
      }), (0, r.jsxs)("div", {
        className: _.buttonContainer,
        children: [(0, r.jsx)(o.zx, {
          disabled: !l,
          className: a()(_.joinButton, {
            [_.roundButton]: false
          }),
          color: l ? o.zx.Colors.WHITE : o.zx.Colors.PRIMARY,
          onClick: v,
          size: o.zx.Sizes.MEDIUM,
          children: l ? j.intl.string(j.t["7vb2cX"]) : j.intl.string(j.t.TVBCKS)
        }), (0, r.jsx)(x.e, {
          channel: n
        })]
      })]
    })
  }