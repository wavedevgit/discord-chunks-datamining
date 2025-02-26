/** Chunk was on 12416 **/
n.d(t, {
  Ix: () => L,
  OV: () => U,
  V_: () => W,
  Ym: () => F,
  ZP: () => Y,
  ac: () => z,
  bn: () => M,
  nR: () => k
}), n(47120);
var r, i = n(200651),
  l = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(115911),
  c = n(442837),
  u = n(481060),
  d = n(2052),
  f = n(317381),
  m = n(638880),
  p = n(413458),
  h = n(16609),
  b = n(527805),
  v = n(716600),
  g = n(778569),
  y = n(563218),
  E = n(318891),
  O = n(884338),
  S = n(719296),
  j = n(958185),
  x = n(100527),
  Z = n(906732),
  C = n(890280),
  w = n(835473),
  P = n(522474),
  N = n(314897),
  I = n(819640),
  _ = n(594174),
  R = n(823379),
  T = n(5192),
  A = n(388032),
  D = n(890479),
  k = ((r = {})[r.SMALL = 0] = "SMALL", r[r.MEDIUM = 1] = "MEDIUM", r[r.LARGE = 2] = "LARGE", r);
let M = 1024,
  L = ["embedded_background"];

function W(e) {
  return e > 400 ? 2 : +(e > 300)
}

function F(e) {
  return e > 400 ? [u.EFr.SIZE_56, 56] : e > 300 ? [u.EFr.SIZE_32, 32] : [u.EFr.SIZE_24, 24]
}

function U(e) {
  let {
    avatarSize: t,
    guildId: n,
    channelId: r,
    users: l
  } = e, o = null != t ? t : u.EFr.SIZE_32, a = (0, u.pxk)(o);
  return (0, i.jsx)(O.Z, {
    size: a,
    guildId: n,
    users: l,
    max: 4,
    renderUser: e => {
      if (null == e) return null;
      let t = T.ZP.getName(n, r, e);
      return (0, i.jsx)(u.DY3, {
        text: t,
        color: u.FGA.GREY,
        children: (0, i.jsx)("img", {
          src: e.getAvatarURL(n, a),
          alt: t,
          className: D.avatar
        }, e.id)
      }, e.id)
    }
  })
}

function z(e) {
  switch (e) {
    case 2:
      return u.zxk.Sizes.LARGE;
    case 1:
      return u.zxk.Sizes.MEDIUM;
    case 0:
      return u.zxk.Sizes.SMALL
  }
}

function V(e) {
  var t, n;
  let {
    participants: r,
    application: o,
    channel: h,
    width: v
  } = e, g = W(v), [y] = F(v), E = (0, c.Wu)([_.default, N.default], () => Array.from(r).map(e => (0, p.J)(e, N.default) ? null : _.default.getUser(e.userId)).filter(R.lm)), O = (0, c.e7)([f.ZP], () => {
    var e;
    return null !== (e = f.ZP.getEmbeddedActivitiesForChannel(h.id).find(e => e.applicationId === o.id)) && void 0 !== e ? e : f.ZP.getEmbeddedActivitiesForStartingChannel(h.id).find(e => e.applicationId === o.id)
  }), {
    analyticsLocations: S
  } = (0, Z.ZP)(), j = (0, d.O)(), x = T.ZP.getName(h.getGuildId(), h.id, null == E ? void 0 : E[0]), w = (0, b.s5)({
    userId: null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
    channelId: h.id,
    application: o
  }) === b.Fw.CAN_JOIN, P = null !== (n = h.getGuildId()) && void 0 !== n ? n : void 0, I = l.useId(), k = o.id, M = l.useMemo(() => ({
    channel: h,
    type: "channel"
  }), [h]), {
    submitting: L
  } = (0, C.Z)({
    applicationId: k,
    context: M,
    launchingComponentId: I
  });
  return (0, i.jsxs)("div", {
    className: D.splash,
    children: [(0, i.jsx)(U, {
      avatarSize: y,
      guildId: P,
      channelId: h.id,
      users: E
    }), (0, i.jsx)(u.Text, {
      className: a()(D.subheader, {
        [D.small]: 0 === g,
        [D.medium]: 1 === g
      }),
      variant: "text-sm/normal",
      children: E.length > 1 ? A.NW.formatToPlainString(A.t.cpe6CA, {
        username: x,
        count: E.length - 1
      }) : A.NW.formatToPlainString(A.t["7Uuia2"], {
        username: x
      })
    }), (0, i.jsx)(u.Text, {
      className: a()(D.header, {
        [D.small]: 0 === g,
        [D.medium]: 1 === g
      }),
      variant: "text-sm/normal",
      children: o.name
    }), (0, i.jsx)("div", {
      className: D.buttons,
      children: w ? (0, i.jsx)(u.zxk, {
        onClick: function(e) {
          e.stopPropagation(), null != O && (0, m.Z)({
            applicationId: O.applicationId,
            activityChannelId: h.id,
            locationObject: j.location,
            analyticsLocations: S,
            componentId: I,
            instanceId: O.compositeInstanceId,
            isContextlessActivity: O.location.kind === s.X.CONTEXTLESS
          })
        },
        submitting: L,
        size: z(g),
        className: D.button,
        look: u.iLD.FILLED,
        color: u.zxk.Colors.WHITE,
        children: A.NW.string(A.t["4i2vj4"])
      }) : null
    })]
  })
}

function Y(e) {
  let {
    participant: t,
    width: n,
    selected: r,
    interactible: o,
    channel: a
  } = e, {
    analyticsLocations: s
  } = (0, Z.ZP)(x.Z.ACTIVITY_TILE), {
    applicationId: u
  } = t, d = (0, v.Z)(), f = null != d && (0, h.pY)(d.location) === a.id && d.applicationId === u, [m] = (0, w.Z)([u]), {
    url: p
  } = (0, g.Z)({
    applicationId: u,
    names: L,
    size: M
  }), b = !r && f, O = !f, C = !f && !r, N = (0, c.e7)([I.Z, P.Z], () => (0, j.Z)({
    LayerStore: I.Z,
    PopoutWindowStore: P.Z
  }));
  return l.useEffect(() => {
    if (b && null != d && !N) {
      let e = (0, S.Z)(d.location.id, d.applicationId);
      (0, E.jy)(e)
    }
  }, [b, d, N]), (0, i.jsx)(Z.Gt, {
    value: s,
    children: (0, i.jsxs)("div", {
      className: D.container,
      children: [b && null != d && (0, i.jsx)(y.Z, {
        className: D.iframe,
        embedId: (0, S.Z)(d.location.id, u)
      }), O && null != m && null != p && "" !== p ? (0, i.jsx)("img", {
        className: D.splashImage,
        alt: m.name,
        src: p
      }) : null, C && null != m && (0, i.jsx)(V, {
        width: n,
        channel: a,
        participants: t.participants,
        application: m
      }), o || O ? null : (0, i.jsx)("div", {
        className: D.clickShield
      })]
    })
  })
}