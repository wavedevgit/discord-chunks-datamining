/** Chunk was on 13873 **/
/** chunk id: 340295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk598006 = require("./598006.js"),
  Chunk305325 = require("./305325.js"),
  Chunk281956 = require("./281956.js"),
  Chunk584729 = require("./584729.js"),
  Chunk27457 = require("./27457.jsx"),
  Chunk546247 = require("./546247.jsx"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk631755 = require("./631755.js");
let g = function(e) {
  let {
    participants: t,
    channel: n,
    hasConnectPermission: g
  } = e, b = t.filter(f.Io), _ = (0, c.J)(n.guild_id), y = i.useCallback(() => {
    _ ? (0, s.hk)(n.guild_id, () => a.default.selectVoiceChannel(n.id)) : a.default.selectVoiceChannel(n.id)
  }, [n.id, n.guild_id, _]), C = 4 === b.length ? 2 : 3;
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
        popoutType: o.P.NO_POPOUT,
        width: 48
      }, e.id))
    }), (0, r.jsx)(l.Heading, {
      className: m.channelName,
      variant: "heading-xxl/semibold",
      children: n.name
    }), (0, r.jsx)("div", {
      className: m.participantsRow,
      children: (0, r.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: 0 === b.length ? h.intl.string(h.t.zSqdrS) : 1 === b.length ? h.intl.formatToPlainString(h.t.BUyJIG, {
          a: (0, u.Z)(n, b[0])
        }) : 2 === b.length ? h.intl.formatToPlainString(h.t["dcyZf/"], {
          a: (0, u.Z)(n, b[0]),
          b: (0, u.Z)(n, b[1])
        }) : b.length > 2 ? h.intl.formatToPlainString(h.t["44/Obu"], {
          a: (0, u.Z)(n, b[0]),
          b: (0, u.Z)(n, b[1]),
          n: b.length - 2
        }) : true
      })
    }), (0, r.jsx)("div", {
      className: m.joinButton,
      children: (0, r.jsx)(l.Button, {
        variant: "overlay-primary",
        text: g ? h.intl.string(h.t["96ANUN"]) : h.intl.string(h.t.TVBCKZ),
        onClick: y,
        disabled: !g
      })
    })]
  })
}