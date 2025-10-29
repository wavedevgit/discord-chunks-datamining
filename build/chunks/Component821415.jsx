/** Chunk was on 73726 **/
/** chunk id: 821415, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk278323 = require("./278323.js"),
  Chunk213609 = require("./213609.js"),
  Chunk728345 = require("./728345.js"),
  Chunk372900 = require("./372900.js"),
  Chunk77498 = require("./77498.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk607361 = require("./607361.js"),
  Chunk463421 = require("./463421.js"),
  Chunk981631 = require("./981631.js"),
  Chunk978967 = require("./978967.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk405143 = require("./405143.js");

function x(e) {
  let t, {
      activity: n,
      channel: l,
      userId: a
    } = e,
    u = (0, d.IX)(n.application_id).data,
    [p, f] = i.useState(false),
    [m, g] = i.useState(0),
    b = (0, o.e7)([h.Z], () => h.Z.getChannelId() !== l.id);
  async function x() {
    g(1);
    try {
      await c.Z.sendActivityInvite({
        type: _.mFx.STREAM_REQUEST,
        channelId: l.id,
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
  if (b && (t = C.intl.string(y.default.qRXats)), n.type === _.IIU.PLAYING) {
    let e = null == u ? true : u.getIconURL(46);
    return (0, r.jsxs)("div", {
      className: v.activityRow,
      children: [(0, r.jsxs)("div", {
        className: v.activityRowContent,
        children: [p || null == e ? (0, r.jsx)(s.IMN, {
          size: "custom",
          width: 46,
          height: 46
        }) : (0, r.jsx)("img", {
          src: e,
          alt: n.name,
          onError: () => f(true)
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-tertiary",
            children: C.intl.string(C.t.BMTj28)
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/medium",
            children: n.name
          })]
        })]
      }), (0, r.jsx)(s.Button, {
        loading: 1 === m,
        disabled: b || 2 === m,
        fullWidth: true,
        size: "sm",
        text: 2 === m ? C.intl.string(y.default["8HU1M2"]) : C.intl.string(y.default.DKHhec),
        onClick: x
      }), null != t && (0, r.jsx)(s.Text, {
        className: v.disabledReason,
        variant: "text-xs/normal",
        color: "text-muted",
        children: t
      })]
    })
  }
}

function O(e) {
  let {
    userId: t,
    channel: n
  } = e, s = (0, o.e7)([m.default], () => m.default.getUser(t)), c = (0, b.Z)(t, n.guild_id), d = (0, g.Z)(t, n.id), h = i.useMemo(() => l.uniqWith(c, (e, t) => {
    if (e.application_id === t.application_id) returntrue;
    let n = f.Z.getGameByName(e.name),
      r = f.Z.getGameByName(t.name);
    return null != n && n === r || e.name === t.name
  }), [c]), _ = null == s || !d || 0 === h.length;
  return ((0, u.Z)({
    type: a.ImpressionTypes.POPOUT,
    name: a.ImpressionNames.VOICE_USER_ACTIVITY_POPOUT,
    properties: {}
  }, {
    disableTrack: _
  }), _) ? null : (0, r.jsx)(p.Z.Provider, {
    value: n.guild_id,
    children: (0, r.jsx)("div", {
      className: v.root,
      children: (0, r.jsx)("div", {
        className: v.activityList,
        children: h.map(e => (0, r.jsx)(x, {
          activity: e,
          channel: n,
          userId: t
        }, "".concat(e.session_id, "-").concat(e.application_id, "-").concat(e.name)))
      })
    })
  })
}