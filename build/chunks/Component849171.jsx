/** Chunk was on 69813 **/
/** chunk id: 849171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  OV: () => M,
  ZP: () => L
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
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
  Chunk890280 = require("./890280.js"),
  Chunk835473 = require("./835473.js"),
  Chunk522474 = require("./522474.js"),
  Chunk314897 = require("./314897.js"),
  Chunk819640 = require("./819640.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk5192 = require("./5192.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk404778 = require("./404778.js");
let D = ["embedded_background"];

function M(e) {
  let {
    avatarSize: t,
    guildId: n,
    channelId: l,
    users: i
  } = e, a = null != t ? t : s.EFr.SIZE_32, o = (0, s.dcp)(a);
  return (0, r.jsx)(_.ZP, {
    size: o,
    guildId: n,
    users: i,
    max: 4,
    renderUser: e => {
      if (null == e || e === _.ag) return null;
      let t = w.ZP.getName(n, l, e);
      return (0, r.jsx)(c.u, {
        text: t,
        children: (0, r.jsx)("img", {
          src: e.getAvatarURL(n, o),
          alt: t,
          className: R.avatar
        }, e.id)
      }, e.id)
    }
  })
}

function k(e) {
  var t, n;
  let {
    participants: i,
    application: c,
    channel: g,
    width: m
  } = e, h = m > 400 ? 2 : +(m > 300), [E] = m > 400 ? [s.EFr.SIZE_56, 56] : m > 300 ? [s.EFr.SIZE_32, 32] : [s.EFr.SIZE_24, 24], v = (0, o.Wu)([Z.default, x.default], () => Array.from(i).map(e => (0, p.J)(e, x.default) ? null : Z.default.getUser(e.userId)).filter(j.lm)), _ = (0, o.e7)([d.ZP], () => {
    var e;
    return null != (e = d.ZP.getEmbeddedActivitiesForChannel(g.id).find(e => e.applicationId === c.id)) ? e : d.ZP.getEmbeddedActivitiesForStartingChannel(g.id).find(e => e.applicationId === c.id)
  }), {
    analyticsLocations: y
  } = (0, S.ZP)(), O = (0, u.O)(), C = w.ZP.getName(g.getGuildId(), g.id, null == v ? true : v[0]), N = (0, b.s5)({
    userId: null == (t = Z.default.getCurrentUser()) ? true : t.id,
    channelId: g.id,
    application: c
  }) === b.Fw.CAN_JOIN, T = null != (n = g.getGuildId()) ? n : true, P = l.useId(), D = c.id, k = l.useMemo(() => ({
    channel: g,
    type: "channel"
  }), [g]), {
    submitting: L
  } = (0, I.Z)({
    applicationId: D,
    context: k,
    launchingComponentId: P
  });
  return (0, r.jsxs)("div", {
    className: R.splash,
    children: [(0, r.jsx)(M, {
      avatarSize: E,
      guildId: T,
      channelId: g.id,
      users: v
    }), (0, r.jsx)(s.Text, {
      className: a()(R.subheader, {
        [R.small]: 0 === h,
        [R.medium]: 1 === h
      }),
      variant: "text-sm/normal",
      children: v.length > 1 ? A.intl.formatToPlainString(A.t.cpe6CK, {
        username: C,
        count: v.length - 1
      }) : A.intl.formatToPlainString(A.t["7Uuia2"], {
        username: C
      })
    }), (0, r.jsx)(s.Text, {
      className: a()(R.header, {
        [R.small]: 0 === h,
        [R.medium]: 1 === h
      }),
      variant: "text-sm/normal",
      children: c.name
    }), (0, r.jsx)("div", {
      className: R.buttons,
      children: N ? (0, r.jsx)(s.Button, {
        text: A.intl.string(A.t["4i2vj+"]),
        onClick: function(e) {
          e.stopPropagation(), null != _ && (0, f.Z)({
            applicationId: _.applicationId,
            activityChannelId: g.id,
            locationObject: O.location,
            analyticsLocations: y,
            componentId: P
          })
        },
        loading: L,
        size: 2 === h ? "md" : "sm",
        variant: "overlay-primary"
      }) : null
    })]
  })
}

function L(e) {
  let {
    participant: t,
    width: n,
    selected: i,
    interactible: a,
    channel: c
  } = e, {
    analyticsLocations: s
  } = (0, S.ZP)(C.Z.ACTIVITY_TILE), {
    applicationId: u
  } = t, d = (0, m.Z)(), f = null != d && (0, g.p)(d.location) === c.id && d.applicationId === u, [p] = (0, N.Z)([u]), {
    url: b
  } = (0, h.Z)({
    applicationId: u,
    names: D,
    size: 1024
  }), _ = !i && f, I = !f, x = !f && !i, Z = (0, o.e7)([P.Z, T.Z], () => (0, O.Z)({
    LayerStore: P.Z,
    PopoutWindowStore: T.Z
  }));
  return l.useEffect(() => {
    if (_ && null != d && !Z) {
      let e = (0, y.Z)(d.location.id, d.applicationId);
      (0, v.jy)(e)
    }
  }, [_, d, Z]), (0, r.jsx)(S.Gt, {
    value: s,
    children: (0, r.jsxs)("div", {
      className: R.container,
      children: [_ && null != d && (0, r.jsx)(E.Z, {
        className: R.iframe,
        embedId: (0, y.Z)(d.location.id, u)
      }), I && null != p && null != b && "" !== b ? (0, r.jsx)("img", {
        className: R.splashImage,
        alt: p.name,
        src: b
      }) : null, x && null != p && (0, r.jsx)(k, {
        width: n,
        channel: c,
        participants: t.participants,
        application: p
      }), a || I ? null : (0, r.jsx)("div", {
        className: R.clickShield
      })]
    })
  })
}