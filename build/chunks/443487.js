/** Chunk was on 87791 **/
n.d(t, {
  F9: () => v,
  Zb: () => b,
  cA: () => _,
  e$: () => g,
  ll: () => O
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
  p = n(5192),
  f = n(192918),
  h = n(388032),
  m = n(563504);

function _() {
  return (0, r.jsx)("div", {
    className: m.container,
    "aria-hidden": !0
  })
}

function b(e) {
  let {
    children: t,
    selected: n
  } = e;
  return (0, r.jsx)("div", {
    className: o()(m.container, m.openOnHover, {
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

function E(e) {
  let {
    users: t,
    guildId: n,
    "aria-hidden": i
  } = e;
  return (0, r.jsx)("div", {
    className: m.facePile,
    children: t.map((e, o) => {
      let l = (0, r.jsx)(a.qEK, {
        src: e.getAvatarURL(n, 80),
        size: a.EFr.SIZE_16,
        "aria-label": i ? void 0 : e.username,
        "aria-hidden": i
      });
      return o === t.length - 1 ? (0, r.jsx)("div", {
        className: m.facePileItem,
        children: l
      }, e.id) : (0, r.jsx)(s.ZP, {
        width: 16,
        height: 16,
        className: m.facePileItem,
        mask: s.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
        children: l
      }, e.id)
    })
  })
}

function v(e) {
  let {
    guildId: t,
    channelId: n,
    entry: i,
    maxAvatars: o = 3
  } = e, s = i.author_id, _ = (0, l.e7)([d.default], () => d.default.getUser(s)), {
    displayParticipants: b,
    participant1: g,
    participant2: v,
    numOtherParticipants: O
  } = (0, f.Z)(i, o), y = (0, l.e7)([c.ZP], () => c.ZP.getMember(t, s)), C = (0, l.e7)([u.Z], () => {
    var e;
    return (null == y ? void 0 : y.colorRoleId) != null ? null === (e = u.Z.getRole(t, y.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0
  }, [t, y]);
  if (null == _) return null;
  let x = null == y ? void 0 : y.colorString,
    S = p.ZP.getName(t, n, _);
  return (0, r.jsxs)("div", {
    className: m.userSection,
    children: [(0, r.jsx)(E, {
      users: b,
      guildId: t,
      "aria-hidden": !0
    }), (0, r.jsx)(a.PUh, {
      color: null != x ? x : void 0,
      roleName: C,
      name: S,
      className: m.userName,
      "aria-hidden": !0
    }), O > 0 ? (0, r.jsx)("div", {
      className: m.additionalParticipantBadge,
      "aria-hidden": !0,
      children: (0, r.jsxs)(a.Text, {
        variant: "text-xxs/medium",
        color: "text-normal",
        className: m.additionalParticipantBadgeText,
        children: ["+", O]
      })
    }) : null, (0, r.jsx)(a.nn4, {
      children: h.NW.format(h.t.rH95Gh, {
        user0: p.ZP.getName(t, n, g),
        user1: p.ZP.getName(t, n, v),
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
  return (0, r.jsx)(a.X6q, {
    color: "text-normal",
    variant: "heading-sm/medium",
    className: m.contentTitle,
    lineClamp: 1,
    children: t
  })
}