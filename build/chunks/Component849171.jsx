/** Chunk was on 56785 **/
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
      let t = T.ZP.getName(n, i, e);
      return (0, r.jsx)(s.DY3, {
        text: t,
        color: s.FGA.GREY,
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
    application: m,
    channel: g,
    width: b
  } = e, v = b > 400 ? 2 : +(b > 300), [E] = b > 400 ? [s.EFr.SIZE_56, 56] : b > 300 ? [s.EFr.SIZE_32, 32] : [s.EFr.SIZE_24, 24], h = (0, o.Wu)([x.default, P.default], () => Array.from(l).map(e => (0, p.J)(e, P.default) ? null : x.default.getUser(e.userId)).filter(A.lm)), y = (0, o.e7)([d.ZP], () => {
    var e;
    return null != (e = d.ZP.getEmbeddedActivitiesForChannel(g.id).find(e => e.applicationId === m.id)) ? e : d.ZP.getEmbeddedActivitiesForStartingChannel(g.id).find(e => e.applicationId === m.id)
  }), {
    analyticsLocations: S
  } = (0, I.ZP)(), O = (0, u.O)(), j = T.ZP.getName(g.getGuildId(), g.id, null == h ? true : h[0]), C = (0, _.s5)({
    userId: null == (t = x.default.getCurrentUser()) ? true : t.id,
    channelId: g.id,
    application: m
  }) === _.Fw.CAN_JOIN, Z = null != (n = g.getGuildId()) ? n : true, D = i.useId(), k = m.id, F = i.useMemo(() => ({
    channel: g,
    type: "channel"
  }), [g]), {
    submitting: L
  } = (0, w.Z)({
    applicationId: k,
    context: F,
    launchingComponentId: D
  });
  return (0, r.jsxs)("div", {
    className: N.splash,
    children: [(0, r.jsx)(M, {
      avatarSize: E,
      guildId: Z,
      channelId: g.id,
      users: h
    }), (0, r.jsx)(s.Text, {
      className: a()(N.subheader, {
        [N.small]: 0 === v,
        [N.medium]: 1 === v
      }),
      variant: "text-sm/normal",
      children: h.length > 1 ? R.intl.formatToPlainString(R.t.cpe6CA, {
        username: j,
        count: h.length - 1
      }) : R.intl.formatToPlainString(R.t["7Uuia2"], {
        username: j
      })
    }), (0, r.jsx)(s.Text, {
      className: a()(N.header, {
        [N.small]: 0 === v,
        [N.medium]: 1 === v
      }),
      variant: "text-sm/normal",
      children: m.name
    }), (0, r.jsx)("div", {
      className: N.buttons,
      children: C ? (0, r.jsx)(c.zx, {
        onClick: function(e) {
          e.stopPropagation(), null != y && (0, f.Z)({
            applicationId: y.applicationId,
            activityChannelId: g.id,
            locationObject: O.location,
            analyticsLocations: S,
            componentId: D
          })
        },
        submitting: L,
        size: function(e) {
          switch (e) {
            case 2:
              return c.zx.Sizes.LARGE;
            case 1:
              return c.zx.Sizes.MEDIUM;
            case 0:
              return c.zx.Sizes.SMALL
          }
        }(v),
        className: N.button,
        look: c.iL.FILLED,
        color: c.zx.Colors.WHITE,
        children: R.intl.string(R.t["4i2vj4"])
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
  } = t, d = (0, g.Z)(), f = null != d && (0, m.p)(d.location) === c.id && d.applicationId === u, [p] = (0, j.Z)([u]), {
    url: _
  } = (0, b.Z)({
    applicationId: u,
    names: D,
    size: 1024
  }), h = !l && f, w = !f, P = !f && !l, x = (0, o.e7)([Z.Z, C.Z], () => (0, S.Z)({
    LayerStore: Z.Z,
    PopoutWindowStore: C.Z
  }));
  return i.useEffect(() => {
    if (h && null != d && !x) {
      let e = (0, y.Z)(d.location.id, d.applicationId);
      (0, E.jy)(e)
    }
  }, [h, d, x]), (0, r.jsx)(I.Gt, {
    value: s,
    children: (0, r.jsxs)("div", {
      className: N.container,
      children: [h && null != d && (0, r.jsx)(v.Z, {
        className: N.iframe,
        embedId: (0, y.Z)(d.location.id, u)
      }), w && null != p && null != _ && "" !== _ ? (0, r.jsx)("img", {
        className: N.splashImage,
        alt: p.name,
        src: _
      }) : null, P && null != p && (0, r.jsx)(k, {
        width: n,
        channel: c,
        participants: t.participants,
        application: p
      }), a || w ? null : (0, r.jsx)("div", {
        className: N.clickShield
      })]
    })
  })
}