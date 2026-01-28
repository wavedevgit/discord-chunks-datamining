/** Chunk was on 78528 **/
/** chunk id: 766319, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
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

function j(e) {
  let t, {
      activity: n,
      channel: i,
      userId: s
    } = e,
    u = (0, d.YY)(n.application_id).data,
    [p, h] = l.useState(false),
    [g, m] = l.useState(0),
    b = (0, a.bG)([f.A], () => f.A.getChannelId() !== i.id);
  async function j() {
    m(1);
    try {
      await c.A.sendActivityInvite({
        type: A.xL.STREAM_REQUEST,
        channelId: i.id,
        activity: n,
        content: "<@".concat(s, ">"),
        location: "request to stream hover",
        targetUserId: s
      })
    } catch (e) {
      m(0);
      return
    }
    m(2)
  }
  if (b && (t = _.intl.string(y.default.qRXats)), n.type === A.$pd.PLAYING) {
    let e = null == u ? true : u.getIconURL(46);
    return (0, r.jsxs)("div", {
      className: O.gd,
      children: [(0, r.jsxs)("div", {
        className: O.xi,
        children: [p || null == e ? (0, r.jsx)(o._7Z, {
          size: "custom",
          width: 46,
          height: 46
        }) : (0, r.jsx)("img", {
          src: e,
          alt: n.name,
          onError: () => h(true)
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: _.intl.string(_.t.BMTj28)
          }), (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            children: n.name
          })]
        })]
      }), (0, r.jsx)(o.Button, {
        loading: 1 === g,
        disabled: b || 2 === g,
        fullWidth: true,
        size: "sm",
        text: 2 === g ? _.intl.string(y.default["8HU1M2"]) : _.intl.string(y.default.DKHhec),
        onClick: j
      }), null != t && (0, r.jsx)(o.Text, {
        className: O.H$,
        variant: "text-xs/normal",
        color: "text-muted",
        children: t
      })]
    })
  }
}

function v(e) {
  let {
    userId: t,
    channel: n
  } = e, o = (0, a.bG)([g.default], () => g.default.getUser(t)), c = (0, b.A)(t, n.guild_id), d = (0, m.A)(t, n.id), f = l.useMemo(() => i.uniqWith(c, (e, t) => {
    if (e.application_id === t.application_id) returntrue;
    let n = h.A.getGameByName(e.name),
      r = h.A.getGameByName(t.name);
    return null != n && n === r || e.name === t.name
  }), [c]), A = null == o || !d || 0 === f.length;
  return ((0, u.A)({
    type: s.ImpressionTypes.POPOUT,
    name: s.ImpressionNames.VOICE_USER_ACTIVITY_POPOUT,
    properties: {}
  }, {
    disableTrack: A
  }), A) ? null : (0, r.jsx)(p.A.Provider, {
    value: n.guild_id,
    children: (0, r.jsx)("div", {
      className: O.zr,
      children: (0, r.jsx)("div", {
        className: O.Ci,
        children: f.map(e => (0, r.jsx)(j, {
          activity: e,
          channel: n,
          userId: t
        }, "".concat(e.session_id, "-").concat(e.application_id, "-").concat(e.name)))
      })
    })
  })
}