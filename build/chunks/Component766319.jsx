/** Chunk was on 97492 **/
/** chunk id: 766319, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk110259 = require("./110259.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308368 = require("./308368.js"),
  Chunk139286 = require("./139286.js"),
  Chunk627363 = require("./627363.js"),
  Chunk386467 = require("./386467.js"),
  Chunk760751 = require("./760751.js"),
  Chunk383501 = require("./383501.js"),
  Chunk287809 = require("./287809.js"),
  Chunk762370 = require("./762370.js"),
  Chunk25528 = require("./25528.js"),
  Chunk652215 = require("./652215.js"),
  Chunk426127 = require("./426127.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk281783 = require("./281783.js");

function v(e) {
  let t, {
      activity: n,
      channel: i,
      userId: a
    } = e,
    u = (0, d.YY)(n.application_id).data,
    [f, p] = l.useState(false),
    [b, g] = l.useState(0),
    m = (0, s.bG)([h.A], () => h.A.getChannelId() !== i.id);
  async function v() {
    g(1);
    try {
      await c.A.sendActivityInvite({
        type: A.xL.STREAM_REQUEST,
        channelId: i.id,
        activity: n,
        content: "<@".concat(a, ">"),
        location: "request to stream hover",
        targetUserId: a
      })
    } catch (e) {
      g(0);
      return
    }
    g(2)
  }
  if (m && (t = O.intl.string(y.default.qRXats)), n.type === A.$pd.PLAYING) {
    let e = null == u ? true : u.getIconURL(46);
    return (0, r.jsxs)("div", {
      className: j.gd,
      children: [(0, r.jsxs)("div", {
        className: j.xi,
        children: [f || null == e ? (0, r.jsx)(o._7Z, {
          size: "custom",
          width: 46,
          height: 46
        }) : (0, r.jsx)("img", {
          src: e,
          alt: n.name,
          onError: () => p(true)
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: O.intl.string(O.t.BMTj28)
          }), (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            children: n.name
          })]
        })]
      }), (0, r.jsx)(o.Button, {
        loading: 1 === b,
        disabled: m || 2 === b,
        fullWidth: true,
        size: "sm",
        text: 2 === b ? O.intl.string(y.default["8HU1M2"]) : O.intl.string(y.default.DKHhec),
        onClick: v
      }), null != t && (0, r.jsx)(o.Text, {
        className: j.H$,
        variant: "text-xs/normal",
        color: "text-muted",
        children: t
      })]
    })
  }
}

function x(e) {
  let {
    userId: t,
    channel: n
  } = e, o = (0, s.bG)([b.default], () => b.default.getUser(t)), c = (0, m.A)(t, n.guild_id), d = (0, g.A)(t, n.id), h = l.useMemo(() => i.uniqWith(c, (e, t) => {
    if (e.application_id === t.application_id) returntrue;
    let n = p.A.getGameByName(e.name),
      r = p.A.getGameByName(t.name);
    return null != n && n === r || e.name === t.name
  }), [c]), A = null == o || !d || 0 === h.length;
  return ((0, u.A)({
    type: a.ImpressionTypes.POPOUT,
    name: a.ImpressionNames.VOICE_USER_ACTIVITY_POPOUT,
    properties: {}
  }, {
    disableTrack: A
  }), A) ? null : (0, r.jsx)(f.A.Provider, {
    value: n.guild_id,
    children: (0, r.jsx)("div", {
      className: j.zr,
      children: (0, r.jsx)("div", {
        className: j.Ci,
        children: h.map(e => (0, r.jsx)(v, {
          activity: e,
          channel: n,
          userId: t
        }, "".concat(e.session_id, "-").concat(e.application_id, "-").concat(e.name)))
      })
    })
  })
}