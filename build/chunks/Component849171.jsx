/** Chunk was on 17360 **/
/** chunk id: 849171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  OV: () => M,
  ZP: () => F
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk826405 = require("./826405.js"),
  Chunk835473 = require("./835473.js"),
  Chunk522474 = require("./522474.js"),
  Chunk314897 = require("./314897.js"),
  Chunk819640 = require("./819640.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk5192 = require("./5192.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk412222 = require("./412222.js");
let D = ["embedded_background"];

function M(e) {
  let {
    avatarSize: t,
    guildId: n,
    channelId: i,
    users: l
  } = e, a = null != t ? t : s.EFr.SIZE_32, o = (0, s.pxk)(a);
  return (0, r.jsx)(h.ZP, {
    size: o,
    guildId: n,
    users: l,
    max: 4,
    renderUser: e => {
      if (null == e || e === h.ag) return null;
      let t = A.ZP.getName(n, i, e);
      return (0, r.jsx)(c.u, {
        text: t,
        children: (0, r.jsx)("img", {
          src: e.getAvatarURL(n, o),
          alt: t,
          className: N.avatar
        }, e.id)
      }, e.id)
    }
  })
}

function k(e) {
  var t, n;
  let {
    participants: l,
    application: c,
    channel: _,
    width: g
  } = e, v = g > 400 ? 2 : +(g > 300), [b] = g > 400 ? [s.EFr.SIZE_56, 56] : g > 300 ? [s.EFr.SIZE_32, 32] : [s.EFr.SIZE_24, 24], E = (0, o.Wu)([x.default, Z.default], () => Array.from(l).map(e => (0, p.J)(e, Z.default) ? null : x.default.getUser(e.userId)).filter(R.lm)), h = (0, o.e7)([d.ZP], () => {
    var e;
    return null != (e = d.ZP.getEmbeddedActivitiesForChannel(_.id).find(e => e.applicationId === c.id)) ? e : d.ZP.getEmbeddedActivitiesForStartingChannel(_.id).find(e => e.applicationId === c.id)
  }), {
    analyticsLocations: S
  } = (0, I.ZP)(), y = (0, u.O)(), O = A.ZP.getName(_.getGuildId(), _.id, null == E ? true : E[0]), w = (0, m.s5)({
    userId: null == (t = x.default.getCurrentUser()) ? true : t.id,
    channelId: _.id,
    application: c
  }) === m.Fw.CAN_JOIN, j = null != (n = _.getGuildId()) ? n : true, P = i.useId(), D = c.id, k = i.useMemo(() => ({
    channel: _,
    type: "channel"
  }), [_]), {
    submitting: F
  } = (0, C.Z)({
    applicationId: D,
    context: k,
    launchingComponentId: P
  });
  return (0, r.jsxs)("div", {
    className: N.splash,
    children: [(0, r.jsx)(M, {
      avatarSize: b,
      guildId: j,
      channelId: _.id,
      users: E
    }), (0, r.jsx)(s.Text, {
      className: a()(N.subheader, {
        [N.small]: 0 === v,
        [N.medium]: 1 === v
      }),
      variant: "text-sm/normal",
      children: E.length > 1 ? T.intl.formatToPlainString(T.t.cpe6CK, {
        username: O,
        count: E.length - 1
      }) : T.intl.formatToPlainString(T.t["7Uuia2"], {
        username: O
      })
    }), (0, r.jsx)(s.Text, {
      className: a()(N.header, {
        [N.small]: 0 === v,
        [N.medium]: 1 === v
      }),
      variant: "text-sm/normal",
      children: c.name
    }), (0, r.jsx)("div", {
      className: N.buttons,
      children: w ? (0, r.jsx)(s.Button, {
        text: T.intl.string(T.t["4i2vj+"]),
        onClick: function(e) {
          e.stopPropagation(), null != h && (0, f.Z)({
            applicationId: h.applicationId,
            activityChannelId: _.id,
            locationObject: y.location,
            analyticsLocations: S,
            componentId: P
          })
        },
        loading: F,
        size: 2 === v ? "md" : "sm",
        variant: "overlay-primary"
      }) : null
    })]
  })
}

function F(e) {
  let {
    participant: t,
    width: n,
    selected: l,
    interactible: a,
    channel: c
  } = e, {
    analyticsLocations: s
  } = (0, I.ZP)(O.Z.ACTIVITY_TILE), {
    applicationId: u
  } = t, d = (0, g.Z)(), f = null != d && (0, _.p)(d.location) === c.id && d.applicationId === u, [p] = (0, w.Z)([u]), {
    url: m
  } = (0, v.Z)({
    applicationId: u,
    names: D,
    size: 1024
  }), h = !l && f, C = !f, Z = !f && !l, x = (0, o.e7)([P.Z, j.Z], () => (0, y.Z)({
    LayerStore: P.Z,
    PopoutWindowStore: j.Z
  }));
  return i.useEffect(() => {
    if (h && null != d && !x) {
      let e = (0, S.Z)(d.location.id, d.applicationId);
      (0, E.jy)(e)
    }
  }, [h, d, x]), (0, r.jsx)(I.Gt, {
    value: s,
    children: (0, r.jsxs)("div", {
      className: N.container,
      children: [h && null != d && (0, r.jsx)(b.Z, {
        className: N.iframe,
        embedId: (0, S.Z)(d.location.id, u)
      }), C && null != p && null != m && "" !== m ? (0, r.jsx)("img", {
        className: N.splashImage,
        alt: p.name,
        src: m
      }) : null, Z && null != p && (0, r.jsx)(k, {
        width: n,
        channel: c,
        participants: t.participants,
        application: p
      }), a || C ? null : (0, r.jsx)("div", {
        className: N.clickShield
      })]
    })
  })
}