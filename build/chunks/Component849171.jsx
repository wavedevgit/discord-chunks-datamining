/** Chunk was on 38319 **/
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
    application: _,
    channel: b,
    width: E
  } = e, g = E > 400 ? 2 : +(E > 300), [v] = E > 400 ? [s.EFr.SIZE_56, 56] : E > 300 ? [s.EFr.SIZE_32, 32] : [s.EFr.SIZE_24, 24], h = (0, o.Wu)([x.default, Z.default], () => Array.from(l).map(e => (0, p.J)(e, Z.default) ? null : x.default.getUser(e.userId)).filter(A.lm)), S = (0, o.e7)([d.ZP], () => {
    var e;
    return null != (e = d.ZP.getEmbeddedActivitiesForChannel(b.id).find(e => e.applicationId === _.id)) ? e : d.ZP.getEmbeddedActivitiesForStartingChannel(b.id).find(e => e.applicationId === _.id)
  }), {
    analyticsLocations: y
  } = (0, I.ZP)(), O = (0, u.O)(), w = T.ZP.getName(b.getGuildId(), b.id, null == h ? true : h[0]), j = (0, m.s5)({
    userId: null == (t = x.default.getCurrentUser()) ? true : t.id,
    channelId: b.id,
    application: _
  }) === m.Fw.CAN_JOIN, P = null != (n = b.getGuildId()) ? n : true, D = i.useId(), k = _.id, F = i.useMemo(() => ({
    channel: b,
    type: "channel"
  }), [b]), {
    submitting: L
  } = (0, C.Z)({
    applicationId: k,
    context: F,
    launchingComponentId: D
  });
  return (0, r.jsxs)("div", {
    className: N.splash,
    children: [(0, r.jsx)(M, {
      avatarSize: v,
      guildId: P,
      channelId: b.id,
      users: h
    }), (0, r.jsx)(s.Text, {
      className: a()(N.subheader, {
        [N.small]: 0 === g,
        [N.medium]: 1 === g
      }),
      variant: "text-sm/normal",
      children: h.length > 1 ? R.intl.formatToPlainString(R.t.cpe6CA, {
        username: w,
        count: h.length - 1
      }) : R.intl.formatToPlainString(R.t["7Uuia2"], {
        username: w
      })
    }), (0, r.jsx)(s.Text, {
      className: a()(N.header, {
        [N.small]: 0 === g,
        [N.medium]: 1 === g
      }),
      variant: "text-sm/normal",
      children: _.name
    }), (0, r.jsx)("div", {
      className: N.buttons,
      children: j ? (0, r.jsx)(c.zx, {
        onClick: function(e) {
          e.stopPropagation(), null != S && (0, f.Z)({
            applicationId: S.applicationId,
            activityChannelId: b.id,
            locationObject: O.location,
            analyticsLocations: y,
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
        }(g),
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
  } = t, d = (0, b.Z)(), f = null != d && (0, _.p)(d.location) === c.id && d.applicationId === u, [p] = (0, w.Z)([u]), {
    url: m
  } = (0, E.Z)({
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
      (0, v.jy)(e)
    }
  }, [h, d, x]), (0, r.jsx)(I.Gt, {
    value: s,
    children: (0, r.jsxs)("div", {
      className: N.container,
      children: [h && null != d && (0, r.jsx)(g.Z, {
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