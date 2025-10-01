/** Chunk was on 49613 **/
/** chunk id: 340295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk305325 = require("./305325.js"),
  Chunk281956 = require("./281956.js"),
  Chunk584729 = require("./584729.js"),
  Chunk27457 = require("./27457.jsx"),
  Chunk546247 = require("./546247.jsx"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk631755 = require("./631755.js");
let m = function(e) {
  let {
    participants: t,
    channel: n,
    hasConnectPermission: m
  } = e, g = t.filter(p.Io), b = (0, s.J)(n.guild_id), y = i.useCallback(() => {
    b ? (0, o.hk)(n.guild_id, () => a.default.selectVoiceChannel(n.id)) : a.default.selectVoiceChannel(n.id)
  }, [n.id, n.guild_id, b]), C = 4 === g.length ? 2 : 3;
  return (0, r.jsxs)("div", {
    className: f.container,
    children: [(0, r.jsx)(d.Z, {}), (0, r.jsx)("div", {
      className: f.tiles,
      style: {
        maxWidth: 168 * C
      },
      children: g.slice(0, 5).map(e => (0, r.jsx)(u.ZP, {
        participant: e,
        channel: n,
        className: f.tile,
        inCall: true,
        noVideoRender: true,
        inPopout: false,
        width: 48
      }, e.id))
    }), (0, r.jsx)(l.X6q, {
      className: f.channelName,
      variant: "heading-xxl/semibold",
      children: n.name
    }), (0, r.jsx)("div", {
      className: f.participantsRow,
      children: (0, r.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: 0 === g.length ? h.intl.string(h.t.zSqdra) : 1 === g.length ? h.intl.formatToPlainString(h.t.BUyJIC, {
          a: (0, c.Z)(n, g[0])
        }) : 2 === g.length ? h.intl.formatToPlainString(h.t.dcyZf3, {
          a: (0, c.Z)(n, g[0]),
          b: (0, c.Z)(n, g[1])
        }) : g.length > 2 ? h.intl.formatToPlainString(h.t["44/Obm"], {
          a: (0, c.Z)(n, g[0]),
          b: (0, c.Z)(n, g[1]),
          n: g.length - 2
        }) : true
      })
    }), (0, r.jsx)("div", {
      className: f.joinButton,
      children: (0, r.jsx)(l.zxk, {
        variant: "overlay-primary",
        text: m ? h.intl.string(h.t["96ANUF"]) : h.intl.string(h.t.TVBCKS),
        onClick: y,
        disabled: !m
      })
    })]
  })
}