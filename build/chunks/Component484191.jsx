/** Chunk was on 97492 **/
/** chunk id: 484191, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk956793 = require("./956793.js"),
  Chunk164617 = require("./164617.js"),
  Chunk202384 = require("./202384.js"),
  Chunk51758 = require("./51758.js"),
  Chunk141035 = require("./141035.js"),
  Chunk175203 = require("./175203.jsx"),
  Chunk426660 = require("./426660.jsx"),
  Chunk806931 = require("./806931.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk852887 = require("./852887.js");
let g = function(e) {
  let {
    participants: t,
    channel: n,
    hasConnectPermission: g
  } = e, m = t.filter(p.Xw), A = (0, c.H)(n.guild_id), y = l.useCallback(() => {
    A ? (0, o.Ze)(n.guild_id, () => a.default.selectVoiceChannel(n.id)) : a.default.selectVoiceChannel(n.id)
  }, [n.id, n.guild_id, A]), O = 4 === m.length ? 2 : 3;
  return (0, r.jsxs)("div", {
    className: b.kL,
    children: [(0, r.jsx)(f.A, {}), (0, r.jsx)("div", {
      className: b.os,
      style: {
        maxWidth: 168 * O
      },
      children: m.slice(0, 5).map(e => (0, r.jsx)(d.Ay, {
        participant: e,
        channel: n,
        className: b.Vs,
        inCall: true,
        noVideoRender: true,
        popoutType: s.N.NO_POPOUT,
        width: 48
      }, e.id))
    }), (0, r.jsx)(i.Heading, {
      className: b.HA,
      variant: "heading-xxl/semibold",
      children: n.name
    }), (0, r.jsx)("div", {
      className: b.Nu,
      children: (0, r.jsx)(i.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: 0 === m.length ? h.intl.string(h.t.zSqdrS) : 1 === m.length ? h.intl.formatToPlainString(h.t.BUyJIG, {
          a: (0, u.A)(n, m[0])
        }) : 2 === m.length ? h.intl.formatToPlainString(h.t["dcyZf/"], {
          a: (0, u.A)(n, m[0]),
          b: (0, u.A)(n, m[1])
        }) : m.length > 2 ? h.intl.formatToPlainString(h.t["44/Obu"], {
          a: (0, u.A)(n, m[0]),
          b: (0, u.A)(n, m[1]),
          n: m.length - 2
        }) : true
      })
    }), (0, r.jsx)("div", {
      className: b.PD,
      children: (0, r.jsx)(i.Button, {
        variant: "overlay-primary",
        text: g ? h.intl.string(h.t["96ANUN"]) : h.intl.string(h.t.TVBCKZ),
        onClick: y,
        disabled: !g
      })
    })]
  })
}