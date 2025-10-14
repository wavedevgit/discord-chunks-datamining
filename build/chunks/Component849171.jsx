/** Chunk was on 38319 **/
/** chunk id: 849171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  OV: () => D,
  ZP: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk2052 = require("./2052.js"),
  Chunk317381 = require("./317381.js"),
  Chunk638880 = require("./638880.js"),
  Chunk413458 = require("./413458.js"),
  Chunk16609 = require("./16609.js"),
  Chunk527805 = require("./527805.js"),
  Chunk716600 = require("./716600.js"),
  Chunk778569 = require("./778569.js"),
  Chunk563218 = require("./563218.jsx"),
  Chunk318891 = require("./318891.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk719296 = require("./719296.js"),
  Chunk958185 = require("./958185.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk826405 = require("./826405.js"),
  Chunk835473 = require("./835473.js"),
  Chunk522474 = require("./522474.js"),
  Chunk314897 = require("./314897.js"),
  Chunk819640 = require("./819640.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk5192 = require("./5192.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk798242 = require("./798242.js");
let N = ["embedded_background"];

function D(e) {
  let {
    avatarSize: t,
    guildId: n,
    channelId: i,
    users: l
  } = e, a = null != t ? t : c.EFr.SIZE_32, o = (0, c.pxk)(a);
  return (0, r.jsx)(v.ZP, {
    size: o,
    guildId: n,
    users: l,
    max: 4,
    renderUser: e => {
      if (null == e || e === v.ag) return null;
      let t = A.ZP.getName(n, i, e);
      return (0, r.jsx)(c.jSM, {
        text: t,
        color: c.r6K.GREY,
        children: (0, r.jsx)("img", {
          src: e.getAvatarURL(n, o),
          alt: t,
          className: R.avatar
        }, e.id)
      }, e.id)
    }
  })
}

function M(e) {
  var t, n;
  let {
    participants: l,
    application: p,
    channel: m,
    width: g
  } = e, E = g > 400 ? 2 : +(g > 300), [b] = g > 400 ? [c.EFr.SIZE_56, 56] : g > 300 ? [c.EFr.SIZE_32, 32] : [c.EFr.SIZE_24, 24], v = (0, o.Wu)([P.default, j.default], () => Array.from(l).map(e => (0, f.J)(e, j.default) ? null : P.default.getUser(e.userId)).filter(x.lm)), h = (0, o.e7)([u.ZP], () => {
    var e;
    return null != (e = u.ZP.getEmbeddedActivitiesForChannel(m.id).find(e => e.applicationId === p.id)) ? e : u.ZP.getEmbeddedActivitiesForStartingChannel(m.id).find(e => e.applicationId === p.id)
  }), {
    analyticsLocations: y
  } = (0, O.ZP)(), S = (0, s.O)(), C = A.ZP.getName(m.getGuildId(), m.id, null == v ? true : v[0]), w = (0, _.s5)({
    userId: null == (t = P.default.getCurrentUser()) ? true : t.id,
    channelId: m.id,
    application: p
  }) === _.Fw.CAN_JOIN, Z = null != (n = m.getGuildId()) ? n : true, N = i.useId(), M = p.id, k = i.useMemo(() => ({
    channel: m,
    type: "channel"
  }), [m]), {
    submitting: F
  } = (0, I.Z)({
    applicationId: M,
    context: k,
    launchingComponentId: N
  });
  return (0, r.jsxs)("div", {
    className: R.splash,
    children: [(0, r.jsx)(D, {
      avatarSize: b,
      guildId: Z,
      channelId: m.id,
      users: v
    }), (0, r.jsx)(c.Text, {
      className: a()(R.subheader, {
        [R.small]: 0 === E,
        [R.medium]: 1 === E
      }),
      variant: "text-sm/normal",
      children: v.length > 1 ? T.intl.formatToPlainString(T.t.cpe6CA, {
        username: C,
        count: v.length - 1
      }) : T.intl.formatToPlainString(T.t["7Uuia2"], {
        username: C
      })
    }), (0, r.jsx)(c.Text, {
      className: a()(R.header, {
        [R.small]: 0 === E,
        [R.medium]: 1 === E
      }),
      variant: "text-sm/normal",
      children: p.name
    }), (0, r.jsx)("div", {
      className: R.buttons,
      children: w ? (0, r.jsx)(c.Button, {
        text: T.intl.string(T.t["4i2vj4"]),
        onClick: function(e) {
          e.stopPropagation(), null != h && (0, d.Z)({
            applicationId: h.applicationId,
            activityChannelId: m.id,
            locationObject: S.location,
            analyticsLocations: y,
            componentId: N
          })
        },
        loading: F,
        size: 2 === E ? "md" : "sm",
        variant: "overlay-primary"
      }) : null
    })]
  })
}

function k(e) {
  let {
    participant: t,
    width: n,
    selected: l,
    interactible: a,
    channel: c
  } = e, {
    analyticsLocations: s
  } = (0, O.ZP)(S.Z.ACTIVITY_TILE), {
    applicationId: u
  } = t, d = (0, m.Z)(), f = null != d && (0, p.p)(d.location) === c.id && d.applicationId === u, [_] = (0, C.Z)([u]), {
    url: v
  } = (0, g.Z)({
    applicationId: u,
    names: N,
    size: 1024
  }), I = !l && f, j = !f, P = !f && !l, x = (0, o.e7)([Z.Z, w.Z], () => (0, y.Z)({
    LayerStore: Z.Z,
    PopoutWindowStore: w.Z
  }));
  return i.useEffect(() => {
    if (I && null != d && !x) {
      let e = (0, h.Z)(d.location.id, d.applicationId);
      (0, b.jy)(e)
    }
  }, [I, d, x]), (0, r.jsx)(O.Gt, {
    value: s,
    children: (0, r.jsxs)("div", {
      className: R.container,
      children: [I && null != d && (0, r.jsx)(E.Z, {
        className: R.iframe,
        embedId: (0, h.Z)(d.location.id, u)
      }), j && null != _ && null != v && "" !== v ? (0, r.jsx)("img", {
        className: R.splashImage,
        alt: _.name,
        src: v
      }) : null, P && null != _ && (0, r.jsx)(M, {
        width: n,
        channel: c,
        participants: t.participants,
        application: _
      }), a || j ? null : (0, r.jsx)("div", {
        className: R.clickShield
      })]
    })
  })
}