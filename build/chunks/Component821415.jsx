/** Chunk was on 81985 **/
/** chunk id: 821415, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk278323 = require("./278323.js"),
  Chunk213609 = require("./213609.js"),
  Chunk728345 = require("./728345.js"),
  Chunk372900 = require("./372900.js"),
  Chunk404577 = require("./404577.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk607361 = require("./607361.js"),
  Chunk463421 = require("./463421.js"),
  Chunk981631 = require("./981631.js"),
  Chunk486014 = require("./486014.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk67103 = require("./67103.js");

function x(e) {
  let t, {
      activity: n,
      channel: l,
      userId: a
    } = e,
    u = (0, d.IX)(n.application_id).data,
    [p, f] = i.useState(false),
    [g, m] = i.useState(0),
    b = (0, o.e7)([h.Z], () => h.Z.getChannelId() !== l.id);
  async function x() {
    m(1);
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
      m(0);
      return
    }
    m(2)
  }
  if (b && (t = O.intl.string(v.default.qRXats)), n.type === y.IIU.PLAYING) {
    let e = null == u ? true : u.getIconURL(46);
    return (0, r.jsxs)("div", {
      className: j.activityRow,
      children: [(0, r.jsxs)("div", {
        className: j.activityRowContent,
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
            color: "text-muted",
            children: O.intl.string(O.t.BMTj28)
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/medium",
            children: n.name
          })]
        })]
      }), (0, r.jsx)(s.Button, {
        loading: 1 === g,
        disabled: b || 2 === g,
        fullWidth: true,
        size: "sm",
        text: 2 === g ? O.intl.string(v.default["8HU1M2"]) : O.intl.string(v.default.DKHhec),
        onClick: x
      }), null != t && (0, r.jsx)(s.Text, {
        className: j.disabledReason,
        variant: "text-xs/normal",
        color: "text-muted",
        children: t
      })]
    })
  }
}

function C(e) {
  let {
    userId: t,
    channel: n
  } = e, s = (0, o.e7)([g.default], () => g.default.getUser(t)), c = (0, b.Z)(t, n.guild_id), d = (0, m.Z)(t, n.id), h = i.useMemo(() => l.uniqWith(c, (e, t) => {
    if (e.application_id === t.application_id) returntrue;
    let n = f.Z.getGameByName(e.name),
      r = f.Z.getGameByName(t.name);
    return null != n && n === r || e.name === t.name
  }), [c]), y = null == s || !d || 0 === h.length;
  return ((0, u.Z)({
    type: a.ImpressionTypes.POPOUT,
    name: a.ImpressionNames.VOICE_USER_ACTIVITY_POPOUT,
    properties: {}
  }, {
    disableTrack: y
  }), y) ? null : (0, r.jsx)(p.Z.Provider, {
    value: n.guild_id,
    children: (0, r.jsx)("div", {
      className: j.root,
      children: (0, r.jsx)("div", {
        className: j.activityList,
        children: h.map(e => (0, r.jsx)(x, {
          activity: e,
          channel: n,
          userId: t
        }, "".concat(e.session_id, "-").concat(e.application_id, "-").concat(e.name)))
      })
    })
  })
}