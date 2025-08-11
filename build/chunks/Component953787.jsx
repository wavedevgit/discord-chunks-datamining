/** Chunk was on web.js **/
/** chunk id: 953787, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk278323 = require("./278323.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk740265 = require("./740265.js"),
  Chunk728345 = require("./728345.js"),
  Chunk372900 = require("./372900.js"),
  Chunk809244 = require("./809244.js"),
  Chunk158776 = require("./158776.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk172029 = require("./172029.js"),
  Chunk762578 = require("./762578.js"),
  Chunk981631 = require("./981631.js"),
  Chunk704483 = require("./704483.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk219917 = require("./219917.js");
let I = 46;

function T(e) {
  let {
    activity: t,
    channel: n,
    userId: o
  } = e, c = (0, d.IX)(t.application_id).data, f = (0, a.e7)([g.Z], () => null != g.Z.getPendingRequestForUser(o)), [_, p] = i.useState(false), [m, E] = i.useState(false), T = (0, a.e7)([h.Z], () => h.Z.getChannelId() !== n.id);
  async function S() {
    E(true);
    try {
      await l.Z.sendActivityInvite({
        type: b.mFx.STREAM_REQUEST,
        channelId: n.id,
        activity: t,
        content: "<@".concat(o, ">"),
        location: "request to stream hover",
        targetUserId: o
      })
    } finally {
      E(false)
    }
  }

  function A() {
    return f ? O.intl.string(y.default["8HU1Mz"]) : T ? O.intl.string(y.default.qRXatr) : O.intl.string(y.default.DKHheX)
  }
  if (t.type === b.IIU.PLAYING) {
    let e = null == c ? true : c.getIconURL(I);
    return (0, r.jsxs)("div", {
      className: v.activityRow,
      children: [(0, r.jsxs)("div", {
        className: v.activityRowContent,
        children: [_ || null == e ? (0, r.jsx)(s.IMN, {
          size: "custom",
          width: I,
          height: I
        }) : (0, r.jsx)("img", {
          src: e,
          alt: t.name,
          onError: () => p(true)
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-tertiary",
            children: (0, u.Z)(t)
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/medium",
            children: t.name
          })]
        })]
      }), (0, r.jsx)(s.zxk, {
        loading: m,
        disabled: f || T,
        fullWidth: true,
        size: "sm",
        text: A(),
        onClick: S
      })]
    })
  }
}

function S(e) {
  let {
    userId: t,
    channel: n
  } = e, l = (0, a.e7)([m.default], () => m.default.getUser(t)), u = (0, a.e7)([p.Z], () => p.Z.getActivities(t, n.getGuildId())), d = (0, a.e7)([p.Z], () => p.Z.getStatus(t, n.getGuildId())), h = (0, _.Z)(n, null != l ? l : null), g = (0, E.Z)(n.id), y = i.useMemo(() => o.uniqBy(u.filter(e => e.type === b.IIU.PLAYING), e => e.application_id), [u]);
  return null != l && g ? (0, r.jsx)(f.Z.Provider, {
    value: n.guild_id,
    children: (0, r.jsxs)("div", {
      className: v.root,
      children: [(0, r.jsxs)("div", {
        className: v.userHeader,
        children: [(0, r.jsx)(c.Z, {
          user: l,
          status: d,
          size: s.EFr.SIZE_24
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/medium",
          children: h
        })]
      }), (0, r.jsx)("div", {
        className: v.activityList,
        children: y.map(e => (0, r.jsx)(T, {
          activity: e,
          channel: n,
          userId: t
        }, "".concat(e.session_id, "-").concat(e.application_id, "-").concat(e.name)))
      })]
    })
  }) : null
}