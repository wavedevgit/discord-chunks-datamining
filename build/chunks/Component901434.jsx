/** Chunk was on 5665 **/
/** chunk id: 901434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk427538 = require("./427538.js");
let v = (e, t) => b.ZP.getName(e.getGuildId(), e.id, t.user),
  O = function(e) {
    let {
      participants: t,
      channel: n,
      hasConnectPermission: l
    } = e, b = (0, h.J)(n.guild_id), O = i.useCallback(() => {
      b ? (0, p.hk)(n.guild_id, () => u.default.selectVoiceChannel(n.id)) : u.default.selectVoiceChannel(n.id)
    }, [n.id, n.guild_id, b]), j = t.filter(e => e.type === y.Ui.VOICE), E = 4 === j.length ? 2 : 3, S = (0, o.Wu)([d.Z], () => j.map(e => d.Z.getParticipant(n.id, e.id)).filter(g.lm), [n.id, j]);
    return (0, r.jsxs)("div", {
      className: x.container,
      children: [(0, r.jsx)(m.Z, {}), (0, r.jsx)("div", {
        className: x.tiles,
        style: {
          maxWidth: 168 * E
        },
        children: S.slice(0, 5).map(e => (0, r.jsx)(f.ZP, {
          participant: e,
          channel: n,
          className: x.tile,
          inCall: true,
          noVideoRender: true,
          inPopout: false,
          width: 48
        }, e.id))
      }), (0, r.jsx)(c.X6q, {
        className: x.channelName,
        variant: "heading-xxl/normal",
        children: n.name
      }), (0, r.jsx)("div", {
        className: x.participantsRow,
        children: (0, r.jsx)(c.Text, {
          tag: "div",
          color: "header-secondary",
          variant: "heading-lg/normal",
          children: 0 === j.length ? C.intl.string(C.t.FUVhyM) : 1 === j.length ? C.intl.formatToPlainString(C.t.EQwZlJ, {
            a: v(n, j[0])
          }) : 2 === j.length ? C.intl.formatToPlainString(C.t.zBcKoK, {
            a: v(n, j[0]),
            b: v(n, j[1])
          }) : j.length > 2 ? C.intl.formatToPlainString(C.t["3AqFaG"], {
            a: v(n, j[0]),
            b: v(n, j[1]),
            n: j.length - 2
          }) : true
        })
      }), (0, r.jsxs)("div", {
        className: x.buttonContainer,
        children: [(0, r.jsx)(s.zx, {
          disabled: !l,
          className: a()(x.joinButton, {
            [x.roundButton]: false
          }),
          color: l ? s.zx.Colors.WHITE : s.zx.Colors.PRIMARY,
          onClick: O,
          size: s.zx.Sizes.MEDIUM,
          children: l ? C.intl.string(C.t["7vb2cX"]) : C.intl.string(C.t.TVBCKS)
        }), (0, r.jsx)(_.e, {
          channel: n
        })]
      })]
    })
  }