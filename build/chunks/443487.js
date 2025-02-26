/** Chunk was on 65936 **/
n.d(t, {
  F9: () => O,
  Zb: () => f,
  cA: () => h,
  e$: () => g,
  ll: () => I
});
var r = n(200651);
n(192379);
var i = n(120356),
  l = n.n(i),
  o = n(442837),
  s = n(481060),
  a = n(686546),
  c = n(271383),
  u = n(430824),
  d = n(594174),
  _ = n(5192),
  E = n(192918),
  p = n(388032),
  m = n(62545);

function h() {
  return (0, r.jsx)("div", {
    className: m.container,
    "aria-hidden": !0
  })
}

function f(e) {
  let {
    children: t,
    selected: n
  } = e;
  return (0, r.jsx)("div", {
    className: l()(m.container, m.openOnHover, {
      [m.selected]: n
    }),
    children: t
  })
}

function g(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: m.infoSection,
    children: t
  })
}

function N(e) {
  let {
    users: t,
    guildId: n,
    "aria-hidden": i
  } = e;
  return (0, r.jsx)("div", {
    className: m.facePile,
    children: t.map((e, l) => {
      let o = (0, r.jsx)(s.qEK, {
        src: e.getAvatarURL(n, 80),
        size: s.EFr.SIZE_16,
        "aria-label": i ? void 0 : e.username,
        "aria-hidden": i
      });
      return l === t.length - 1 ? (0, r.jsx)("div", {
        className: m.facePileItem,
        children: o
      }, e.id) : (0, r.jsx)(a.ZP, {
        width: 16,
        height: 16,
        className: m.facePileItem,
        mask: a.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
        children: o
      }, e.id)
    })
  })
}

function O(e) {
  let {
    guildId: t,
    channelId: n,
    entry: i,
    maxAvatars: l = 3
  } = e, a = i.author_id, h = (0, o.e7)([d.default], () => d.default.getUser(a)), {
    displayParticipants: f,
    participant1: g,
    participant2: O,
    numOtherParticipants: I
  } = (0, E.Z)(i, l), b = (0, o.e7)([c.ZP], () => c.ZP.getMember(t, a)), T = (0, o.e7)([u.Z], () => {
    var e;
    return (null == b ? void 0 : b.colorRoleId) != null ? null === (e = u.Z.getRole(t, b.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0
  }, [t, b]);
  if (null == h) return null;
  let C = null == b ? void 0 : b.colorString,
    S = _.ZP.getName(t, n, h);
  return (0, r.jsxs)("div", {
    className: m.userSection,
    children: [(0, r.jsx)(N, {
      users: f,
      guildId: t,
      "aria-hidden": !0
    }), (0, r.jsx)(s.PUh, {
      color: null != C ? C : void 0,
      roleName: T,
      name: S,
      className: m.userName,
      "aria-hidden": !0
    }), I > 0 ? (0, r.jsx)("div", {
      className: m.additionalParticipantBadge,
      "aria-hidden": !0,
      children: (0, r.jsxs)(s.Text, {
        variant: "text-xxs/medium",
        color: "text-normal",
        className: m.additionalParticipantBadgeText,
        children: ["+", I]
      })
    }) : null, (0, r.jsx)(s.nn4, {
      children: p.NW.format(p.t.rH95Gh, {
        user0: _.ZP.getName(t, n, g),
        user1: _.ZP.getName(t, n, O),
        countOthers: I,
        name0Hook: (e, t) => (0, r.jsx)("span", {
          children: e
        }, t),
        name1Hook: (e, t) => (0, r.jsx)("span", {
          children: e
        }, t),
        countOthersHook: (e, t) => (0, r.jsx)("span", {
          children: e
        }, t)
      })
    })]
  })
}

function I(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(s.X6q, {
    color: "text-normal",
    variant: "heading-sm/medium",
    className: m.contentTitle,
    lineClamp: 1,
    children: t
  })
}