/** Chunk was on 36499 **/
/** chunk id: 340295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk305325 = require("./305325.js"),
  Chunk281956 = require("./281956.js"),
  Chunk584729 = require("./584729.js"),
  Chunk27457 = require("./27457.jsx"),
  Chunk546247 = require("./546247.jsx"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk427538 = require("./427538.js");
let g = function(e) {
  let {
    participants: t,
    channel: n,
    hasConnectPermission: g
  } = e, b = t.filter(h.Io), y = (0, c.J)(n.guild_id), _ = i.useCallback(() => {
    y ? (0, s.hk)(n.guild_id, () => o.default.selectVoiceChannel(n.id)) : o.default.selectVoiceChannel(n.id)
  }, [n.id, n.guild_id, y]), C = 4 === b.length ? 2 : 3;
  return (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsx)(p.Z, {}), (0, r.jsx)("div", {
      className: m.tiles,
      style: {
        maxWidth: 168 * C
      },
      children: b.slice(0, 5).map(e => (0, r.jsx)(d.ZP, {
        participant: e,
        channel: n,
        className: m.tile,
        inCall: true,
        noVideoRender: true,
        inPopout: false,
        width: 48
      }, e.id))
    }), (0, r.jsx)(a.X6q, {
      className: m.channelName,
      variant: "heading-xxl/semibold",
      children: n.name
    }), (0, r.jsx)("div", {
      className: m.participantsRow,
      children: (0, r.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: 0 === b.length ? f.intl.string(f.t.zSqdra) : 1 === b.length ? f.intl.formatToPlainString(f.t.BUyJIC, {
          a: (0, u.Z)(n, b[0])
        }) : 2 === b.length ? f.intl.formatToPlainString(f.t.dcyZf3, {
          a: (0, u.Z)(n, b[0]),
          b: (0, u.Z)(n, b[1])
        }) : b.length > 2 ? f.intl.formatToPlainString(f.t["44/Obm"], {
          a: (0, u.Z)(n, b[0]),
          b: (0, u.Z)(n, b[1]),
          n: b.length - 2
        }) : true
      })
    }), (0, r.jsx)(l.zx, {
      disabled: !g,
      className: m.joinButton,
      color: g ? l.zx.Colors.WHITE : l.zx.Colors.PRIMARY,
      onClick: _,
      size: l.zx.Sizes.MEDIUM,
      children: g ? f.intl.string(f.t["96ANUF"]) : f.intl.string(f.t.TVBCKS)
    })]
  })
}