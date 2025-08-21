/** Chunk was on 37832 **/
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
  Chunk755721 = require("./755721.js"),
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
  Chunk798242 = require("./798242.js");
let D = ["embedded_background"];

function M(e) {
  let {
    avatarSize: t,
    guildId: n,
    channelId: l,
    users: i
  } = e, a = null != t ? t : s.EFr.SIZE_32, o = (0, s.pxk)(a);
  return (0, r.jsx)(h.ZP, {
    size: o,
    guildId: n,
    users: i,
    max: 4,
    renderUser: e => {
      if (null == e || e === h.ag) return null;
      let t = x.ZP.getName(n, l, e);
      return (0, r.jsx)(s.DY3, {
        text: t,
        color: s.FGA.GREY,
        children: (0, r.jsx)("img", {
          src: e.getAvatarURL(n, o),
          alt: t,
          className: T.avatar
        }, e.id)
      }, e.id)
    }
  })
}

function L(e) {
  var t, n;
  let {
    participants: i,
    application: m,
    channel: g,
    width: b
  } = e, S = b > 400 ? 2 : +(b > 300), [v] = b > 400 ? [s.EFr.SIZE_56, 56] : b > 300 ? [s.EFr.SIZE_32, 32] : [s.EFr.SIZE_24, 24], h = (0, o.Wu)([C.default, P.default], () => Array.from(i).map(e => (0, p.J)(e, P.default) ? null : C.default.getUser(e.userId)).filter(R.lm)), O = (0, o.e7)([d.ZP], () => {
    var e;
    return null != (e = d.ZP.getEmbeddedActivitiesForChannel(g.id).find(e => e.applicationId === m.id)) ? e : d.ZP.getEmbeddedActivitiesForStartingChannel(g.id).find(e => e.applicationId === m.id)
  }), {
    analyticsLocations: y
  } = (0, j.ZP)(), _ = (0, c.O)(), I = x.ZP.getName(g.getGuildId(), g.id, null == h ? true : h[0]), w = (0, E.s5)({
    userId: null == (t = C.default.getCurrentUser()) ? true : t.id,
    channelId: g.id,
    application: m
  }) === E.Fw.CAN_JOIN, A = null != (n = g.getGuildId()) ? n : true, D = l.useId(), L = m.id, F = l.useMemo(() => ({
    channel: g,
    type: "channel"
  }), [g]), {
    submitting: k
  } = (0, Z.Z)({
    applicationId: L,
    context: F,
    launchingComponentId: D
  });
  return (0, r.jsxs)("div", {
    className: T.splash,
    children: [(0, r.jsx)(M, {
      avatarSize: v,
      guildId: A,
      channelId: g.id,
      users: h
    }), (0, r.jsx)(s.Text, {
      className: a()(T.subheader, {
        [T.small]: 0 === S,
        [T.medium]: 1 === S
      }),
      variant: "text-sm/normal",
      children: h.length > 1 ? N.intl.formatToPlainString(N.t.cpe6CA, {
        username: I,
        count: h.length - 1
      }) : N.intl.formatToPlainString(N.t["7Uuia2"], {
        username: I
      })
    }), (0, r.jsx)(s.Text, {
      className: a()(T.header, {
        [T.small]: 0 === S,
        [T.medium]: 1 === S
      }),
      variant: "text-sm/normal",
      children: m.name
    }), (0, r.jsx)("div", {
      className: T.buttons,
      children: w ? (0, r.jsx)(u.zx, {
        onClick: function(e) {
          e.stopPropagation(), null != O && (0, f.Z)({
            applicationId: O.applicationId,
            activityChannelId: g.id,
            locationObject: _.location,
            analyticsLocations: y,
            componentId: D
          })
        },
        submitting: k,
        size: function(e) {
          switch (e) {
            case 2:
              return u.zx.Sizes.LARGE;
            case 1:
              return u.zx.Sizes.MEDIUM;
            case 0:
              return u.zx.Sizes.SMALL
          }
        }(S),
        className: T.button,
        look: u.iL.FILLED,
        color: u.zx.Colors.WHITE,
        children: N.intl.string(N.t["4i2vj4"])
      }) : null
    })]
  })
}

function F(e) {
  let {
    participant: t,
    width: n,
    selected: i,
    interactible: a,
    channel: u
  } = e, {
    analyticsLocations: s
  } = (0, j.ZP)(_.Z.ACTIVITY_TILE), {
    applicationId: c
  } = t, d = (0, g.Z)(), f = null != d && (0, m.p)(d.location) === u.id && d.applicationId === c, [p] = (0, I.Z)([c]), {
    url: E
  } = (0, b.Z)({
    applicationId: c,
    names: D,
    size: 1024
  }), h = !i && f, Z = !f, P = !f && !i, C = (0, o.e7)([A.Z, w.Z], () => (0, y.Z)({
    LayerStore: A.Z,
    PopoutWindowStore: w.Z
  }));
  return l.useEffect(() => {
    if (h && null != d && !C) {
      let e = (0, O.Z)(d.location.id, d.applicationId);
      (0, v.jy)(e)
    }
  }, [h, d, C]), (0, r.jsx)(j.Gt, {
    value: s,
    children: (0, r.jsxs)("div", {
      className: T.container,
      children: [h && null != d && (0, r.jsx)(S.Z, {
        className: T.iframe,
        embedId: (0, O.Z)(d.location.id, c)
      }), Z && null != p && null != E && "" !== E ? (0, r.jsx)("img", {
        className: T.splashImage,
        alt: p.name,
        src: E
      }) : null, P && null != p && (0, r.jsx)(L, {
        width: n,
        channel: u,
        participants: t.participants,
        application: p
      }), a || Z ? null : (0, r.jsx)("div", {
        className: T.clickShield
      })]
    })
  })
}