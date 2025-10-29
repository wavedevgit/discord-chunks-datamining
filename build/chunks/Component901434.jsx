/** Chunk was on 91053 **/
/** chunk id: 901434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk358221 = require("./358221.js"),
  Chunk598006 = require("./598006.js"),
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
let x = (e, t) => g.ZP.getName(e.getGuildId(), e.id, t.user),
  j = function(e) {
    let {
      participants: t,
      channel: n,
      hasConnectPermission: g
    } = e, j = (0, u.J)(n.guild_id), O = i.useCallback(() => {
      j ? (0, d.hk)(n.guild_id, () => s.default.selectVoiceChannel(n.id)) : s.default.selectVoiceChannel(n.id)
    }, [n.id, n.guild_id, j]), v = t.filter(e => e.type === m.Ui.VOICE), C = 4 === v.length ? 2 : 3, I = (0, l.Wu)([o.Z], () => v.map(e => o.Z.getParticipant(n.id, e.id)).filter(f.lm), [n.id, v]);
    return (0, r.jsxs)("div", {
      className: y.container,
      children: [(0, r.jsx)(h.Z, {}), (0, r.jsx)("div", {
        className: y.tiles,
        style: {
          maxWidth: 168 * C
        },
        children: I.slice(0, 5).map(e => (0, r.jsx)(p.ZP, {
          participant: e,
          channel: n,
          className: y.tile,
          inCall: true,
          noVideoRender: true,
          popoutType: c.P.NO_POPOUT,
          width: 48
        }, e.id))
      }), (0, r.jsx)(a.Heading, {
        className: y.channelName,
        variant: "heading-xxl/normal",
        children: n.name
      }), (0, r.jsx)("div", {
        className: y.participantsRow,
        children: (0, r.jsx)(a.Text, {
          tag: "div",
          color: "header-secondary",
          variant: "heading-lg/normal",
          children: 0 === v.length ? _.intl.string(_.t.FUVhyC) : 1 === v.length ? _.intl.formatToPlainString(_.t.EQwZlN, {
            a: x(n, v[0])
          }) : 2 === v.length ? _.intl.formatToPlainString(_.t.zBcKoA, {
            a: x(n, v[0]),
            b: x(n, v[1])
          }) : v.length > 2 ? _.intl.formatToPlainString(_.t["3AqFaG"], {
            a: x(n, v[0]),
            b: x(n, v[1]),
            n: v.length - 2
          }) : true
        })
      }), (0, r.jsxs)("div", {
        className: y.buttonContainer,
        children: [(0, r.jsx)("div", {
          className: y.joinButton,
          children: (0, r.jsx)(a.Button, {
            variant: "overlay-primary",
            text: g ? _.intl.string(_.t["7vb2cc"]) : _.intl.string(_.t.TVBCKZ),
            onClick: O,
            disabled: !g
          })
        }), (0, r.jsx)(b.e, {
          channel: n
        })]
      })]
    })
  }