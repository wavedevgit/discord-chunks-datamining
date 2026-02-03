/** Chunk was on 44669 **/
/** chunk id: 484191, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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
let m = function(e) {
  let {
    participants: t,
    channel: n,
    hasConnectPermission: m
  } = e, b = t.filter(h.Xw), A = (0, c.H)(n.guild_id), y = l.useCallback(() => {
    A ? (0, o.Ze)(n.guild_id, () => s.default.selectVoiceChannel(n.id)) : s.default.selectVoiceChannel(n.id)
  }, [n.id, n.guild_id, A]), O = 4 === b.length ? 2 : 3;
  return (0, r.jsxs)("div", {
    className: f.kL,
    children: [(0, r.jsx)(p.A, {}), (0, r.jsx)("div", {
      className: f.os,
      style: {
        maxWidth: 168 * O
      },
      children: b.slice(0, 5).map(e => (0, r.jsx)(d.Ay, {
        participant: e,
        channel: n,
        className: f.Vs,
        inCall: true,
        noVideoRender: true,
        popoutType: a.N.NO_POPOUT,
        width: 48
      }, e.id))
    }), (0, r.jsx)(i.Heading, {
      className: f.HA,
      variant: "heading-xxl/semibold",
      children: n.name
    }), (0, r.jsx)("div", {
      className: f.Nu,
      children: (0, r.jsx)(i.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: 0 === b.length ? g.intl.string(g.t.zSqdrS) : 1 === b.length ? g.intl.formatToPlainString(g.t.BUyJIG, {
          a: (0, u.A)(n, b[0])
        }) : 2 === b.length ? g.intl.formatToPlainString(g.t["dcyZf/"], {
          a: (0, u.A)(n, b[0]),
          b: (0, u.A)(n, b[1])
        }) : b.length > 2 ? g.intl.formatToPlainString(g.t["44/Obu"], {
          a: (0, u.A)(n, b[0]),
          b: (0, u.A)(n, b[1]),
          n: b.length - 2
        }) : true
      })
    }), (0, r.jsx)("div", {
      className: f.PD,
      children: (0, r.jsx)(i.Button, {
        variant: "overlay-primary",
        text: m ? g.intl.string(g.t["96ANUN"]) : g.intl.string(g.t.TVBCKZ),
        onClick: y,
        disabled: !m
      })
    })]
  })
}