/** Chunk was on 82124 **/
/** chunk id: 901434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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
  Chunk501655 = require("./501655.js"),
  Chunk192079 = require("./192079.js"),
  Chunk504185 = require("./504185.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk951840 = require("./951840.js");
let O = function(e) {
  let {
    participants: t,
    channel: n,
    hasConnectPermission: O
  } = e, j = (0, d.J)(n.guild_id), x = i.useCallback(() => {
    j ? (0, u.hk)(n.guild_id, () => o.default.selectVoiceChannel(n.id)) : o.default.selectVoiceChannel(n.id)
  }, [n.id, n.guild_id, j]), C = t.filter(e => e.type === g.Ui.VOICE), E = 4 === C.length ? 2 : 3, S = (0, l.Wu)([s.Z], () => C.map(e => s.Z.getParticipant(n.id, e.id)).filter(h.lm), [n.id, C]);
  return (0, r.jsxs)("div", {
    className: v.container,
    children: [(0, r.jsx)(f.Z, {}), (0, r.jsx)("div", {
      className: v.tiles,
      style: {
        maxWidth: 168 * E
      },
      children: S.slice(0, 5).map(e => (0, r.jsx)(p.ZP, {
        participant: e,
        channel: n,
        className: v.tile,
        inCall: true,
        noVideoRender: true,
        popoutType: c.P.NO_POPOUT,
        width: 48
      }, e.id))
    }), (0, r.jsx)(a.Heading, {
      className: v.channelName,
      variant: "heading-xxl/normal",
      children: n.name
    }), (0, r.jsx)("div", {
      className: v.participantsRow,
      children: (0, r.jsx)(a.Text, {
        tag: "div",
        color: "text-default",
        variant: "heading-lg/normal",
        children: (0, m.wQ)(n, C)
      })
    }), (0, r.jsxs)("div", {
      className: v.buttonContainer,
      children: [(0, r.jsx)("div", {
        className: v.joinButton,
        children: (0, r.jsx)(a.Button, {
          variant: "overlay-primary",
          text: O ? y.intl.string(y.t["7vb2cc"]) : y.intl.string(y.t.TVBCKZ),
          onClick: x,
          disabled: !O
        })
      }), (0, r.jsx)(b.e, {
        channel: n
      })]
    })]
  })
}