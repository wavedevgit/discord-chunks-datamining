/** Chunk was on 5665 **/
/** chunk id: 901434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
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
let _ = (e, t) => f.ZP.getName(e.getGuildId(), e.id, t.user),
  C = function(e) {
    let {
      participants: t,
      channel: n,
      hasConnectPermission: f
    } = e, C = (0, u.J)(n.guild_id), v = i.useCallback(() => {
      C ? (0, c.hk)(n.guild_id, () => o.default.selectVoiceChannel(n.id)) : o.default.selectVoiceChannel(n.id)
    }, [n.id, n.guild_id, C]), x = t.filter(e => e.type === m.Ui.VOICE), O = 4 === x.length ? 2 : 3, j = (0, l.Wu)([s.Z], () => x.map(e => s.Z.getParticipant(n.id, e.id)).filter(h.lm), [n.id, x]);
    return (0, r.jsxs)("div", {
      className: y.container,
      children: [(0, r.jsx)(p.Z, {}), (0, r.jsx)("div", {
        className: y.tiles,
        style: {
          maxWidth: 168 * O
        },
        children: j.slice(0, 5).map(e => (0, r.jsx)(d.ZP, {
          participant: e,
          channel: n,
          className: y.tile,
          inCall: true,
          noVideoRender: true,
          inPopout: false,
          width: 48
        }, e.id))
      }), (0, r.jsx)(a.X6q, {
        className: y.channelName,
        variant: "heading-xxl/normal",
        children: n.name
      }), (0, r.jsx)("div", {
        className: y.participantsRow,
        children: (0, r.jsx)(a.Text, {
          tag: "div",
          color: "header-secondary",
          variant: "heading-lg/normal",
          children: 0 === x.length ? b.intl.string(b.t.FUVhyM) : 1 === x.length ? b.intl.formatToPlainString(b.t.EQwZlJ, {
            a: _(n, x[0])
          }) : 2 === x.length ? b.intl.formatToPlainString(b.t.zBcKoK, {
            a: _(n, x[0]),
            b: _(n, x[1])
          }) : x.length > 2 ? b.intl.formatToPlainString(b.t["3AqFaG"], {
            a: _(n, x[0]),
            b: _(n, x[1]),
            n: x.length - 2
          }) : true
        })
      }), (0, r.jsxs)("div", {
        className: y.buttonContainer,
        children: [(0, r.jsx)("div", {
          className: y.joinButton,
          children: (0, r.jsx)(a.zxk, {
            variant: "overlay-primary",
            text: f ? b.intl.string(b.t["7vb2cX"]) : b.intl.string(b.t.TVBCKS),
            onClick: v,
            disabled: !f
          })
        }), (0, r.jsx)(g.e, {
          channel: n
        })]
      })]
    })
  }