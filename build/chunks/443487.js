/** Chunk was on 80137 **/
n.d(t, {
  F9: () => C,
  Zb: () => g,
  cA: () => m,
  e$: () => b,
  ll: () => O
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  l = n(442837),
  s = n(481060),
  a = n(686546),
  c = n(271383),
  u = n(430824),
  d = n(594174),
  p = n(5192),
  _ = n(192918),
  h = n(388032),
  f = n(522314);

function m() {
  return (0, r.jsx)("div", {
    className: f.container,
    "aria-hidden": !0
  })
}

function g(e) {
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

function E(e) {
  let {
    users: t,
    guildId: n,
    "aria-hidden": i
  } = e;
  return (0, r.jsx)("div", {
    className: f.facePile,
    children: t.map((e, o) => {
      let l = (0, r.jsx)(s.qEK, {
        src: e.getAvatarURL(n, 80),
        size: s.EFr.SIZE_16,
        "aria-label": i ? void 0 : e.username,
        "aria-hidden": i
      });
      return o === t.length - 1 ? (0, r.jsx)("div", {
        className: f.facePileItem,
        children: l
      }, e.id) : (0, r.jsx)(a.ZP, {
        width: 16,
        height: 16,
        className: f.facePileItem,
        mask: a.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
        children: l
      }, e.id)
    })
  })
}

function C(e) {
  let {
    guildId: t,
    channelId: n,
    entry: i,
    maxAvatars: o = 3
  } = e, a = i.author_id, m = (0, l.e7)([d.default], () => d.default.getUser(a)), {
    displayParticipants: g,
    participant1: b,
    participant2: C,
    numOtherParticipants: O
  } = (0, _.Z)(i, o), y = (0, l.e7)([c.ZP], () => c.ZP.getMember(t, a)), v = (0, l.e7)([u.Z], () => {
    var e;
    return (null == y ? void 0 : y.colorRoleId) != null ? null == (e = u.Z.getRole(t, y.colorRoleId)) ? void 0 : e.name : void 0
  }, [t, y]);
  if (null == m) return null;
  let N = null == y ? void 0 : y.colorString,
    S = p.ZP.getName(t, n, m);
  return (0, r.jsxs)("div", {
    className: f.userSection,
    children: [(0, r.jsx)(E, {
      users: g,
      guildId: t,
      "aria-hidden": !0
    }), (0, r.jsx)(s.PUh, {
      color: null != N ? N : void 0,
      roleName: v,
      name: S,
      className: f.userName,
      "aria-hidden": !0
    }), O > 0 ? (0, r.jsx)("div", {
      className: f.additionalParticipantBadge,
      "aria-hidden": !0,
      children: (0, r.jsxs)(s.Text, {
        variant: "text-xxs/medium",
        color: "text-normal",
        className: f.additionalParticipantBadgeText,
        children: ["+", O]
      })
    }) : null, (0, r.jsx)(s.nn4, {
      children: h.NW.format(h.t.rH95Gh, {
        user0: p.ZP.getName(t, n, b),
        user1: p.ZP.getName(t, n, C),
        countOthers: O,
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

function O(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(s.X6q, {
    color: "text-normal",
    variant: "heading-sm/medium",
    className: f.contentTitle,
    lineClamp: 1,
    children: t
  })
}