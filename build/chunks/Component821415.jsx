/** Chunk was on 36499 **/
/** chunk id: 821415, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk278323 = require("./278323.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk740265 = require("./740265.js"),
  Chunk213609 = require("./213609.js"),
  Chunk728345 = require("./728345.js"),
  Chunk372900 = require("./372900.js"),
  Chunk809244 = require("./809244.js"),
  Chunk158776 = require("./158776.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk877912 = require("./877912.js"),
  Chunk762578 = require("./762578.js"),
  Chunk981631 = require("./981631.js"),
  Chunk658805 = require("./658805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk405143 = require("./405143.js");

function E(e) {
  let {
    activity: t,
    channel: n,
    userId: l
  } = e, a = (0, h.IX)(t.application_id).data, u = (0, _.Z)(l), [p, f] = i.useState(false), [m, g] = i.useState(false), y = (0, o.e7)([b.Z], () => b.Z.getChannelId() !== n.id);
  async function C() {
    g(true);
    try {
      await c.Z.sendActivityInvite({
        type: x.mFx.STREAM_REQUEST,
        channelId: n.id,
        activity: t,
        content: "<@".concat(l, ">"),
        location: "request to stream hover",
        targetUserId: l
      })
    } finally {
      g(false)
    }
  }
  if (t.type === x.IIU.PLAYING) {
    let e = null == a ? true : a.getIconURL(46);
    return (0, r.jsxs)("div", {
      className: O.activityRow,
      children: [(0, r.jsxs)("div", {
        className: O.activityRowContent,
        children: [p || null == e ? (0, r.jsx)(s.IMN, {
          size: "custom",
          width: 46,
          height: 46
        }) : (0, r.jsx)("img", {
          src: e,
          alt: t.name,
          onError: () => f(true)
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-tertiary",
            children: (0, d.Z)(t)
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/medium",
            children: t.name
          })]
        })]
      }), (0, r.jsx)(s.zxk, {
        loading: m,
        disabled: u || y,
        fullWidth: true,
        size: "sm",
        text: u ? j.intl.string(v.default["8HU1Mz"]) : y ? j.intl.string(v.default.qRXatr) : j.intl.string(v.default.DKHheX),
        onClick: C
      })]
    })
  }
}

function S(e) {
  let {
    userId: t,
    channel: n
  } = e, c = (0, o.e7)([y.default], () => y.default.getUser(t)), d = (0, o.e7)([g.Z], () => g.Z.getActivities(t, n.getGuildId())), h = (0, o.e7)([g.Z], () => g.Z.getStatus(t, n.getGuildId())), b = (0, m.Z)(n, null != c ? c : null), _ = (0, C.Z)(n.id), v = null == c || !_, j = i.useMemo(() => l.uniqBy(d.filter(e => e.type === x.IIU.PLAYING), e => e.application_id), [d]);
  return ((0, p.Z)({
    type: a.ImpressionTypes.POPOUT,
    name: a.ImpressionNames.VOICE_USER_ACTIVITY_POPOUT,
    properties: {}
  }, {
    disableTrack: v
  }), v) ? null : (0, r.jsx)(f.Z.Provider, {
    value: n.guild_id,
    children: (0, r.jsxs)("div", {
      className: O.root,
      children: [(0, r.jsxs)("div", {
        className: O.userHeader,
        children: [(0, r.jsx)(u.Z, {
          user: c,
          status: h,
          size: s.EFr.SIZE_24
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/medium",
          children: b
        })]
      }), (0, r.jsx)("div", {
        className: O.activityList,
        children: j.map(e => (0, r.jsx)(E, {
          activity: e,
          channel: n,
          userId: t
        }, "".concat(e.session_id, "-").concat(e.application_id, "-").concat(e.name)))
      })]
    })
  })
}