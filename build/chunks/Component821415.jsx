/** Chunk was on 50642 **/
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
  Chunk249280 = require("./249280.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk777777 = require("./777777.js");

function x(e) {
  let t, {
      activity: n,
      channel: l,
      userId: a
    } = e,
    u = (0, d.IX)(n.application_id).data,
    [p, h] = r.useState(false),
    [m, g] = r.useState(0),
    b = (0, o.e7)([f.Z], () => f.Z.getChannelId() !== l.id);
  async function x() {
    g(1);
    try {
      await c.Z.sendActivityInvite({
        type: y.mFx.STREAM_REQUEST,
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
  if (b && (t = v.intl.string(C.default.qRXats)), n.type === y.IIU.PLAYING) {
    let e = null == u ? true : u.getIconURL(46);
    return (0, i.jsxs)("div", {
      className: _.activityRow,
      children: [(0, i.jsxs)("div", {
        className: _.activityRowContent,
        children: [p || null == e ? (0, i.jsx)(s.IMN, {
          size: "custom",
          width: 46,
          height: 46
        }) : (0, i.jsx)("img", {
          src: e,
          alt: n.name,
          onError: () => h(true)
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-tertiary",
            children: v.intl.string(v.t.BMTj28)
          }), (0, i.jsx)(s.Text, {
            variant: "text-md/medium",
            children: n.name
          })]
        })]
      }), (0, i.jsx)(s.Button, {
        loading: 1 === m,
        disabled: b || 2 === m,
        fullWidth: true,
        size: "sm",
        text: 2 === m ? v.intl.string(C.default["8HU1M2"]) : v.intl.string(C.default.DKHhec),
        onClick: x
      }), null != t && (0, i.jsx)(s.Text, {
        className: _.disabledReason,
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
  } = e, s = (0, o.e7)([m.default], () => m.default.getUser(t)), c = (0, b.Z)(t, n.guild_id), d = (0, g.Z)(t, n.id), f = r.useMemo(() => l.uniqWith(c, (e, t) => {
    if (e.application_id === t.application_id) returntrue;
    let n = h.Z.getGameByName(e.name),
      i = h.Z.getGameByName(t.name);
    return null != n && n === i || e.name === t.name
  }), [c]), y = null == s || !d || 0 === f.length;
  return ((0, u.Z)({
    type: a.ImpressionTypes.POPOUT,
    name: a.ImpressionNames.VOICE_USER_ACTIVITY_POPOUT,
    properties: {}
  }, {
    disableTrack: y
  }), y) ? null : (0, i.jsx)(p.Z.Provider, {
    value: n.guild_id,
    children: (0, i.jsx)("div", {
      className: _.root,
      children: (0, i.jsx)("div", {
        className: _.activityList,
        children: f.map(e => (0, i.jsx)(x, {
          activity: e,
          channel: n,
          userId: t
        }, "".concat(e.session_id, "-").concat(e.application_id, "-").concat(e.name)))
      })
    })
  })
}