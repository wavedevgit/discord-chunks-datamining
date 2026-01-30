/** Chunk was on 1113 **/
/** chunk id: 623413, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk956793 = require("./956793.js"),
  Chunk313961 = require("./313961.js"),
  Chunk164617 = require("./164617.js"),
  Chunk202384 = require("./202384.js"),
  Chunk51758 = require("./51758.js"),
  Chunk175203 = require("./175203.jsx"),
  Chunk426660 = require("./426660.jsx"),
  Chunk403362 = require("./403362.js"),
  Chunk69407 = require("./69407.js"),
  Chunk110618 = require("./110618.js"),
  Chunk566388 = require("./566388.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk852887 = require("./852887.js");
let O = function(e) {
  let {
    participants: t,
    channel: n,
    hasConnectPermission: O
  } = e, _ = (0, d.H)(n.guild_id), j = l.useCallback(() => {
    _ ? (0, u.Ze)(n.guild_id, () => a.default.selectVoiceChannel(n.id)) : a.default.selectVoiceChannel(n.id)
  }, [n.id, n.guild_id, _]), x = t.filter(e => e.type === f.wY.VOICE), v = 4 === x.length ? 2 : 3, E = (0, i.yK)([o.A], () => x.map(e => o.A.getParticipant(n.id, e.id)).filter(g.Vq), [n.id, x]);
  return (0, r.jsxs)("div", {
    className: y.kL,
    children: [(0, r.jsx)(p.A, {}), (0, r.jsx)("div", {
      className: y.os,
      style: {
        maxWidth: 168 * v
      },
      children: E.slice(0, 5).map(e => (0, r.jsx)(h.Ay, {
        participant: e,
        channel: n,
        className: y.Vs,
        inCall: true,
        noVideoRender: true,
        popoutType: c.N.NO_POPOUT,
        width: 48
      }, e.id))
    }), (0, r.jsx)(s.Heading, {
      className: y.HA,
      variant: "heading-xxl/normal",
      children: n.name
    }), (0, r.jsx)("div", {
      className: y.Nu,
      children: (0, r.jsx)(s.Text, {
        tag: "div",
        color: "text-default",
        variant: "heading-lg/normal",
        children: (0, m.DO)(n, x)
      })
    }), (0, r.jsxs)("div", {
      className: y.UD,
      children: [(0, r.jsx)("div", {
        className: y.PD,
        children: (0, r.jsx)(s.Button, {
          variant: "overlay-primary",
          text: O ? A.intl.string(A.t["7vb2cc"]) : A.intl.string(A.t.TVBCKZ),
          onClick: j,
          disabled: !O
        })
      }), (0, r.jsx)(b.l, {
        channel: n
      })]
    })]
  })
}