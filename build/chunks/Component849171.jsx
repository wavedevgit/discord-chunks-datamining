/** Chunk was on 48615 **/
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
    channelId: i,
    users: l
  } = e, a = null != t ? t : s.EFr.SIZE_32, o = (0, s.dcp)(a);
  return (0, r.jsx)(_.ZP, {
    size: o,
    guildId: n,
    users: l,
    max: 4,
    renderUser: e => {
      if (null == e || e === _.ag) return null;
      let t = T.ZP.getName(n, i, e);
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
    channel: b,
    width: g
  } = e, v = g > 400 ? 2 : +(g > 300), [h] = g > 400 ? [s.EFr.SIZE_56, 56] : g > 300 ? [s.EFr.SIZE_32, 32] : [s.EFr.SIZE_24, 24], E = (0, o.Wu)([Z.default, j.default], () => Array.from(l).map(e => (0, p.J)(e, j.default) ? null : Z.default.getUser(e.userId)).filter(R.lm)), _ = (0, o.e7)([d.ZP], () => {
    var e;
    return null != (e = d.ZP.getEmbeddedActivitiesForChannel(b.id).find(e => e.applicationId === c.id)) ? e : d.ZP.getEmbeddedActivitiesForStartingChannel(b.id).find(e => e.applicationId === c.id)
  }), {
    analyticsLocations: y
  } = (0, C.ZP)(), S = (0, u.O)(), O = T.ZP.getName(b.getGuildId(), b.id, null == E ? true : E[0]), I = (0, m.s5)({
    userId: null == (t = Z.default.getCurrentUser()) ? true : t.id,
    channelId: b.id,
    application: c
  }) === m.Fw.CAN_JOIN, P = null != (n = b.getGuildId()) ? n : true, x = i.useId(), D = c.id, k = i.useMemo(() => ({
    channel: b,
    type: "channel"
  }), [b]), {
    submitting: L
  } = (0, w.Z)({
    applicationId: D,
    context: k,
    launchingComponentId: x
  });
  return (0, r.jsxs)("div", {
    className: N.splash,
    children: [(0, r.jsx)(M, {
      avatarSize: h,
      guildId: P,
      channelId: b.id,
      users: E
    }), (0, r.jsx)(s.Text, {
      className: a()(N.subheader, {
        [N.small]: 0 === v,
        [N.medium]: 1 === v
      }),
      variant: "text-sm/normal",
      children: E.length > 1 ? A.intl.formatToPlainString(A.t.cpe6CK, {
        username: O,
        count: E.length - 1
      }) : A.intl.formatToPlainString(A.t["7Uuia2"], {
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
      children: I ? (0, r.jsx)(s.Button, {
        text: A.intl.string(A.t["4i2vj+"]),
        onClick: function(e) {
          e.stopPropagation(), null != _ && (0, f.Z)({
            applicationId: _.applicationId,
            activityChannelId: b.id,
            locationObject: S.location,
            analyticsLocations: y,
            componentId: x
          })
        },
        loading: L,
        size: 2 === v ? "md" : "sm",
        variant: "overlay-primary"
      }) : null
    })]
  })
}

function L(e) {
  let {
    participant: t,
    width: n,
    selected: l,
    interactible: a,
    channel: c
  } = e, {
    analyticsLocations: s
  } = (0, C.ZP)(O.Z.ACTIVITY_TILE), {
    applicationId: u
  } = t, d = (0, g.Z)(), f = null != d && (0, b.p)(d.location) === c.id && d.applicationId === u, [p] = (0, I.Z)([u]), {
    url: m
  } = (0, v.Z)({
    applicationId: u,
    names: D,
    size: 1024
  }), _ = !l && f, w = !f, j = !f && !l, Z = (0, o.e7)([x.Z, P.Z], () => (0, S.Z)({
    LayerStore: x.Z,
    PopoutWindowStore: P.Z
  }));
  return i.useEffect(() => {
    if (_ && null != d && !Z) {
      let e = (0, y.Z)(d.location.id, d.applicationId);
      (0, E.jy)(e)
    }
  }, [_, d, Z]), (0, r.jsx)(C.Gt, {
    value: s,
    children: (0, r.jsxs)("div", {
      className: N.container,
      children: [_ && null != d && (0, r.jsx)(h.Z, {
        className: N.iframe,
        embedId: (0, y.Z)(d.location.id, u)
      }), w && null != p && null != m && "" !== m ? (0, r.jsx)("img", {
        className: N.splashImage,
        alt: p.name,
        src: m
      }) : null, j && null != p && (0, r.jsx)(k, {
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