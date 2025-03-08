/** Chunk was on 74329 **/
n.d(t, {
  F9: () => O,
  Zb: () => h,
  cA: () => m,
  e$: () => b,
  ll: () => N
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  l = n(442837),
  a = n(481060),
  s = n(686546),
  c = n(271383),
  u = n(430824),
  d = n(594174),
  _ = n(5192),
  p = n(192918),
  E = n(388032),
  f = n(563504);

function m() {
  return (0, r.jsx)("div", {
    className: f.container,
    "aria-hidden": !0
  })
}

function h(e) {
  let {
    children: t,
    selected: n
  } = e;
  return (0, r.jsx)("div", {
    className: o()(f.container, f.openOnHover, {
      [f.selected]: n
    }),
    children: t
  })
}

function b(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: f.infoSection,
    children: t
  })
}

function g(e) {
  let {
    users: t,
    guildId: n,
    "aria-hidden": i
  } = e;
  return (0, r.jsx)("div", {
    className: f.facePile,
    children: t.map((e, o) => {
      let l = (0, r.jsx)(a.qEK, {
        src: e.getAvatarURL(n, 80),
        size: a.EFr.SIZE_16,
        "aria-label": i ? void 0 : e.username,
        "aria-hidden": i
      });
      return o === t.length - 1 ? (0, r.jsx)("div", {
        className: f.facePileItem,
        children: l
      }, e.id) : (0, r.jsx)(s.ZP, {
        width: 16,
        height: 16,
        className: f.facePileItem,
        mask: s.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
        children: l
      }, e.id)
    })
  })
}

function O(e) {
  let {
    guildId: t,
    channelId: n,
    entry: i,
    maxAvatars: o = 3
  } = e, s = i.author_id, m = (0, l.e7)([d.default], () => d.default.getUser(s)), {
    displayParticipants: h,
    participant1: b,
    participant2: O,
    numOtherParticipants: N
  } = (0, p.Z)(i, o), I = (0, l.e7)([c.ZP], () => c.ZP.getMember(t, s)), C = (0, l.e7)([u.Z], () => {
    var e;
    return (null == I ? void 0 : I.colorRoleId) != null ? null === (e = u.Z.getRole(t, I.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0
  }, [t, I]);
  if (null == m) return null;
  let T = null == I ? void 0 : I.colorString,
    S = _.ZP.getName(t, n, m);
  return (0, r.jsxs)("div", {
    className: f.userSection,
    children: [(0, r.jsx)(g, {
      users: h,
      guildId: t,
      "aria-hidden": !0
    }), (0, r.jsx)(a.PUh, {
      color: null != T ? T : void 0,
      roleName: C,
      name: S,
      className: f.userName,
      "aria-hidden": !0
    }), N > 0 ? (0, r.jsx)("div", {
      className: f.additionalParticipantBadge,
      "aria-hidden": !0,
      children: (0, r.jsxs)(a.Text, {
        variant: "text-xxs/medium",
        color: "text-normal",
        className: f.additionalParticipantBadgeText,
        children: ["+", N]
      })
    }) : null, (0, r.jsx)(a.nn4, {
      children: E.NW.format(E.t.rH95Gh, {
        user0: _.ZP.getName(t, n, b),
        user1: _.ZP.getName(t, n, O),
        countOthers: N,
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

function N(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(a.X6q, {
    color: "text-normal",
    variant: "heading-sm/medium",
    className: f.contentTitle,
    lineClamp: 1,
    children: t
  })
}