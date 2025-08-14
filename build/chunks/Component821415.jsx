/** Chunk was on web.js **/
/** chunk id: 821415, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
let S = 46;

function A(e) {
  let {
    activity: t,
    channel: n,
    userId: o
  } = e, a = (0, _.IX)(t.application_id).data, u = (0, b.Z)(o), [f, p] = i.useState(false), [h, m] = i.useState(false), E = (0, s.e7)([g.Z], () => g.Z.getChannelId() !== n.id);
  async function y() {
    m(true);
    try {
      await c.Z.sendActivityInvite({
        type: O.mFx.STREAM_REQUEST,
        channelId: n.id,
        activity: t,
        content: "<@".concat(o, ">"),
        location: "request to stream hover",
        targetUserId: o
      })
    } finally {
      m(false)
    }
  }

  function A() {
    return u ? I.intl.string(v.default["8HU1Mz"]) : E ? I.intl.string(v.default.qRXatr) : I.intl.string(v.default.DKHheX)
  }
  if (t.type === O.IIU.PLAYING) {
    let e = null == a ? true : a.getIconURL(S);
    return (0, r.jsxs)("div", {
      className: T.activityRow,
      children: [(0, r.jsxs)("div", {
        className: T.activityRowContent,
        children: [f || null == e ? (0, r.jsx)(l.IMN, {
          size: "custom",
          width: S,
          height: S
        }) : (0, r.jsx)("img", {
          src: e,
          alt: t.name,
          onError: () => p(true)
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-tertiary",
            children: (0, d.Z)(t)
          }), (0, r.jsx)(l.Text, {
            variant: "text-md/medium",
            children: t.name
          })]
        })]
      }), (0, r.jsx)(l.zxk, {
        loading: h,
        disabled: u || E,
        fullWidth: true,
        size: "sm",
        text: A(),
        onClick: y
      })]
    })
  }
}

function N(e) {
  let {
    userId: t,
    channel: n
  } = e, c = (0, s.e7)([E.default], () => E.default.getUser(t)), d = (0, s.e7)([m.Z], () => m.Z.getActivities(t, n.getGuildId())), _ = (0, s.e7)([m.Z], () => m.Z.getStatus(t, n.getGuildId())), g = (0, h.Z)(n, null != c ? c : null), b = (0, y.Z)(n.id), v = null == c || !b, I = i.useMemo(() => o.uniqBy(d.filter(e => e.type === O.IIU.PLAYING), e => e.application_id), [d]);
  return ((0, f.Z)({
    type: a.ImpressionTypes.POPOUT,
    name: a.ImpressionNames.VOICE_USER_ACTIVITY_POPOUT,
    properties: {}
  }, {
    disableTrack: v
  }), v) ? null : (0, r.jsx)(p.Z.Provider, {
    value: n.guild_id,
    children: (0, r.jsxs)("div", {
      className: T.root,
      children: [(0, r.jsxs)("div", {
        className: T.userHeader,
        children: [(0, r.jsx)(u.Z, {
          user: c,
          status: _,
          size: l.EFr.SIZE_24
        }), (0, r.jsx)(l.Text, {
          variant: "text-md/medium",
          children: g
        })]
      }), (0, r.jsx)("div", {
        className: T.activityList,
        children: I.map(e => (0, r.jsx)(A, {
          activity: e,
          channel: n,
          userId: t
        }, "".concat(e.session_id, "-").concat(e.application_id, "-").concat(e.name)))
      })]
    })
  })
}