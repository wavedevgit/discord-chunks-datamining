/** Chunk was on 41700 **/
/** chunk id: 901434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk951840 = require("./951840.js");
let j = (e, t) => g.ZP.getName(e.getGuildId(), e.id, t.user),
  x = function(e) {
    let {
      participants: t,
      channel: n,
      hasConnectPermission: g
    } = e, x = (0, u.J)(n.guild_id), v = i.useCallback(() => {
      x ? (0, d.hk)(n.guild_id, () => s.default.selectVoiceChannel(n.id)) : s.default.selectVoiceChannel(n.id)
    }, [n.id, n.guild_id, x]), C = t.filter(e => e.type === m.Ui.VOICE), I = 4 === C.length ? 2 : 3, _ = (0, l.Wu)([o.Z], () => C.map(e => o.Z.getParticipant(n.id, e.id)).filter(f.lm), [n.id, C]);
    return (0, r.jsxs)("div", {
      className: O.container,
      children: [(0, r.jsx)(h.Z, {}), (0, r.jsx)("div", {
        className: O.tiles,
        style: {
          maxWidth: 168 * I
        },
        children: _.slice(0, 5).map(e => (0, r.jsx)(p.ZP, {
          participant: e,
          channel: n,
          className: O.tile,
          inCall: true,
          noVideoRender: true,
          popoutType: c.P.NO_POPOUT,
          width: 48
        }, e.id))
      }), (0, r.jsx)(a.Heading, {
        className: O.channelName,
        variant: "heading-xxl/normal",
        children: n.name
      }), (0, r.jsx)("div", {
        className: O.participantsRow,
        children: (0, r.jsx)(a.Text, {
          tag: "div",
          color: "text-default",
          variant: "heading-lg/normal",
          children: 0 === C.length ? y.intl.string(y.t.FUVhyC) : 1 === C.length ? y.intl.formatToPlainString(y.t.EQwZlN, {
            a: j(n, C[0])
          }) : 2 === C.length ? y.intl.formatToPlainString(y.t.zBcKoA, {
            a: j(n, C[0]),
            b: j(n, C[1])
          }) : C.length > 2 ? y.intl.formatToPlainString(y.t["3AqFaG"], {
            a: j(n, C[0]),
            b: j(n, C[1]),
            n: C.length - 2
          }) : true
        })
      }), (0, r.jsxs)("div", {
        className: O.buttonContainer,
        children: [(0, r.jsx)("div", {
          className: O.joinButton,
          children: (0, r.jsx)(a.Button, {
            variant: "overlay-primary",
            text: g ? y.intl.string(y.t["7vb2cc"]) : y.intl.string(y.t.TVBCKZ),
            onClick: v,
            disabled: !g
          })
        }), (0, r.jsx)(b.e, {
          channel: n
        })]
      })]
    })
  }