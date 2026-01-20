/** Chunk was on 11010 **/
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
  return (0, r.jsx)(y.ZP, {
    size: o,
    guildId: n,
    users: l,
    max: 4,
    renderUser: e => {
      if (null == e || e === y.ag) return null;
      let t = Z.ZP.getName(n, i, e);
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
    participants: l,
    application: c,
    channel: g,
    width: b
  } = e, h = b > 400 ? 2 : +(b > 300), [v] = b > 400 ? [s.EFr.SIZE_56, 56] : b > 300 ? [s.EFr.SIZE_32, 32] : [s.EFr.SIZE_24, 24], E = (0, o.Wu)([P.default, T.default], () => Array.from(l).map(e => (0, p.J)(e, T.default) ? null : P.default.getUser(e.userId)).filter(w.lm)), y = (0, o.e7)([d.ZP], () => {
    var e;
    return null != (e = d.ZP.getEmbeddedActivitiesForChannel(g.id).find(e => e.applicationId === c.id)) ? e : d.ZP.getEmbeddedActivitiesForStartingChannel(g.id).find(e => e.applicationId === c.id)
  }), {
    analyticsLocations: _
  } = (0, S.ZP)(), O = (0, u.O)(), C = Z.ZP.getName(g.getGuildId(), g.id, null == E ? true : E[0]), I = (0, m.s5)({
    userId: null == (t = P.default.getCurrentUser()) ? true : t.id,
    channelId: g.id,
    application: c
  }) === m.Fw.CAN_JOIN, N = null != (n = g.getGuildId()) ? n : true, j = i.useId(), D = c.id, k = i.useMemo(() => ({
    channel: g,
    type: "channel"
  }), [g]), {
    submitting: L
  } = (0, x.Z)({
    applicationId: D,
    context: k,
    launchingComponentId: j
  });
  return (0, r.jsxs)("div", {
    className: R.splash,
    children: [(0, r.jsx)(M, {
      avatarSize: v,
      guildId: N,
      channelId: g.id,
      users: E
    }), (0, r.jsx)(s.Text, {
      className: a()(R.subheader, {
        [R.small]: 0 === h,
        [R.medium]: 1 === h
      }),
      variant: "text-sm/normal",
      children: E.length > 1 ? A.intl.formatToPlainString(A.t.cpe6CK, {
        username: C,
        count: E.length - 1
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
      children: I ? (0, r.jsx)(s.Button, {
        text: A.intl.string(A.t["4i2vj+"]),
        onClick: function(e) {
          e.stopPropagation(), null != y && (0, f.Z)({
            applicationId: y.applicationId,
            activityChannelId: g.id,
            locationObject: O.location,
            analyticsLocations: _,
            componentId: j
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
    selected: l,
    interactible: a,
    channel: c
  } = e, {
    analyticsLocations: s
  } = (0, S.ZP)(C.Z.ACTIVITY_TILE), {
    applicationId: u
  } = t, d = (0, b.Z)(), f = null != d && (0, g.p)(d.location) === c.id && d.applicationId === u, [p] = (0, I.Z)([u]), {
    url: m
  } = (0, h.Z)({
    applicationId: u,
    names: D,
    size: 1024
  }), y = !l && f, x = !f, T = !f && !l, P = (0, o.e7)([j.Z, N.Z], () => (0, O.Z)({
    LayerStore: j.Z,
    PopoutWindowStore: N.Z
  }));
  return i.useEffect(() => {
    if (y && null != d && !P) {
      let e = (0, _.Z)(d.location.id, d.applicationId);
      (0, E.jy)(e)
    }
  }, [y, d, P]), (0, r.jsx)(S.Gt, {
    value: s,
    children: (0, r.jsxs)("div", {
      className: R.container,
      children: [y && null != d && (0, r.jsx)(v.Z, {
        className: R.iframe,
        embedId: (0, _.Z)(d.location.id, u)
      }), x && null != p && null != m && "" !== m ? (0, r.jsx)("img", {
        className: R.splashImage,
        alt: p.name,
        src: m
      }) : null, T && null != p && (0, r.jsx)(k, {
        width: n,
        channel: c,
        participants: t.participants,
        application: p
      }), a || x ? null : (0, r.jsx)("div", {
        className: R.clickShield
      })]
    })
  })
}