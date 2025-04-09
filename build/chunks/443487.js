/** Chunk was on 41150 **/
n.d(l, {
  F9: () => Z,
  Zb: () => g,
  cA: () => f,
  e$: () => p,
  ll: () => _
});
var t = n(200651);
n(192379);
var i = n(120356),
  r = n.n(i),
  a = n(442837),
  s = n(481060),
  d = n(686546),
  c = n(884902),
  o = n(271383),
  u = n(430824),
  h = n(594174),
  m = n(5192),
  x = n(192918),
  v = n(388032),
  j = n(522314);

function f() {
  return (0, t.jsx)("div", {
    className: j.container,
    "aria-hidden": !0
  })
}

function g(e) {
  let {
    children: l,
    selected: n
  } = e;
  return (0, t.jsx)("div", {
    className: r()(j.container, j.openOnHover, {
      [j.selected]: n
    }),
    children: l
  })
}

function p(e) {
  let {
    children: l
  } = e;
  return (0, t.jsx)("div", {
    className: j.infoSection,
    children: l
  })
}

function N(e) {
  let {
    users: l,
    guildId: n,
    "aria-hidden": i
  } = e;
  return (0, t.jsx)("div", {
    className: j.facePile,
    children: l.map((e, r) => {
      let a = (0, t.jsx)(s.qEK, {
        src: e.getAvatarURL(n, 80),
        size: s.EFr.SIZE_16,
        "aria-label": i ? void 0 : e.username,
        "aria-hidden": i
      });
      return r === l.length - 1 ? (0, t.jsx)("div", {
        className: j.facePileItem,
        children: a
      }, e.id) : (0, t.jsx)(d.ZP, {
        width: 16,
        height: 16,
        className: j.facePileItem,
        mask: d.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
        children: a
      }, e.id)
    })
  })
}

function Z(e) {
  let {
    guildId: l,
    channelId: n,
    entry: i,
    maxAvatars: r = 3
  } = e, d = i.author_id, f = (0, a.e7)([h.default], () => h.default.getUser(d)), {
    displayParticipants: g,
    participant1: p,
    participant2: Z,
    numOtherParticipants: _
  } = (0, x.Z)(i, r), I = (0, a.e7)([o.ZP], () => o.ZP.getMember(l, d)), A = (0, a.e7)([u.Z], () => {
    var e;
    return (null == I ? void 0 : I.colorRoleId) != null ? null == (e = u.Z.getRole(l, I.colorRoleId)) ? void 0 : e.name : void 0
  }, [l, I]), P = (0, c.X)(l, null == I ? void 0 : I.colorStrings);
  if (null == f) return null;
  let b = null == I ? void 0 : I.colorString,
    C = m.ZP.getName(l, n, f);
  return (0, t.jsxs)("div", {
    className: j.userSection,
    children: [(0, t.jsx)(N, {
      users: g,
      guildId: l,
      "aria-hidden": !0
    }), (0, t.jsx)(s.PUh, {
      color: null != b ? b : void 0,
      roleName: A,
      roleColors: P,
      name: C,
      className: j.userName,
      "aria-hidden": !0
    }), _ > 0 ? (0, t.jsx)("div", {
      className: j.additionalParticipantBadge,
      "aria-hidden": !0,
      children: (0, t.jsxs)(s.Text, {
        variant: "text-xxs/medium",
        color: "text-normal",
        className: j.additionalParticipantBadgeText,
        children: ["+", _]
      })
    }) : null, (0, t.jsx)(s.nn4, {
      children: v.NW.format(v.t.rH95Gh, {
        user0: m.ZP.getName(l, n, p),
        user1: m.ZP.getName(l, n, Z),
        countOthers: _,
        name0Hook: (e, l) => (0, t.jsx)("span", {
          children: e
        }, l),
        name1Hook: (e, l) => (0, t.jsx)("span", {
          children: e
        }, l),
        countOthersHook: (e, l) => (0, t.jsx)("span", {
          children: e
        }, l)
      })
    })]
  })
}

function _(e) {
  let {
    children: l
  } = e;
  return (0, t.jsx)(s.X6q, {
    color: "text-normal",
    variant: "heading-sm/medium",
    className: j.contentTitle,
    lineClamp: 1,
    children: l
  })
}