/** Chunk was on 62880 **/
l.d(n, {
  F9: () => I,
  Zb: () => E,
  cA: () => v,
  e$: () => f,
  ll: () => g
});
var t = l(200651);
l(192379);
var i = l(120356),
  a = l.n(i),
  s = l(442837),
  r = l(481060),
  c = l(686546),
  d = l(271383),
  o = l(430824),
  u = l(594174),
  x = l(5192),
  m = l(192918),
  h = l(388032),
  j = l(563504);

function v() {
  return (0, t.jsx)("div", {
    className: j.container,
    "aria-hidden": !0
  })
}

function E(e) {
  let {
    children: n,
    selected: l
  } = e;
  return (0, t.jsx)("div", {
    className: a()(j.container, j.openOnHover, {
      [j.selected]: l
    }),
    children: n
  })
}

function f(e) {
  let {
    children: n
  } = e;
  return (0, t.jsx)("div", {
    className: j.infoSection,
    children: n
  })
}

function _(e) {
  let {
    users: n,
    guildId: l,
    "aria-hidden": i
  } = e;
  return (0, t.jsx)("div", {
    className: j.facePile,
    children: n.map((e, a) => {
      let s = (0, t.jsx)(r.qEK, {
        src: e.getAvatarURL(l, 80),
        size: r.EFr.SIZE_16,
        "aria-label": i ? void 0 : e.username,
        "aria-hidden": i
      });
      return a === n.length - 1 ? (0, t.jsx)("div", {
        className: j.facePileItem,
        children: s
      }, e.id) : (0, t.jsx)(c.ZP, {
        width: 16,
        height: 16,
        className: j.facePileItem,
        mask: c.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
        children: s
      }, e.id)
    })
  })
}

function I(e) {
  let {
    guildId: n,
    channelId: l,
    entry: i,
    maxAvatars: a = 3
  } = e, c = i.author_id, v = (0, s.e7)([u.default], () => u.default.getUser(c)), {
    displayParticipants: E,
    participant1: f,
    participant2: I,
    numOtherParticipants: g
  } = (0, m.Z)(i, a), p = (0, s.e7)([d.ZP], () => d.ZP.getMember(n, c)), Z = (0, s.e7)([o.Z], () => {
    var e;
    return (null == p ? void 0 : p.colorRoleId) != null ? null === (e = o.Z.getRole(n, p.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0
  }, [n, p]);
  if (null == v) return null;
  let N = null == p ? void 0 : p.colorString,
    y = x.ZP.getName(n, l, v);
  return (0, t.jsxs)("div", {
    className: j.userSection,
    children: [(0, t.jsx)(_, {
      users: E,
      guildId: n,
      "aria-hidden": !0
    }), (0, t.jsx)(r.PUh, {
      color: null != N ? N : void 0,
      roleName: Z,
      name: y,
      className: j.userName,
      "aria-hidden": !0
    }), g > 0 ? (0, t.jsx)("div", {
      className: j.additionalParticipantBadge,
      "aria-hidden": !0,
      children: (0, t.jsxs)(r.Text, {
        variant: "text-xxs/medium",
        color: "text-normal",
        className: j.additionalParticipantBadgeText,
        children: ["+", g]
      })
    }) : null, (0, t.jsx)(r.nn4, {
      children: h.NW.format(h.t.rH95Gh, {
        user0: x.ZP.getName(n, l, f),
        user1: x.ZP.getName(n, l, I),
        countOthers: g,
        name0Hook: (e, n) => (0, t.jsx)("span", {
          children: e
        }, n),
        name1Hook: (e, n) => (0, t.jsx)("span", {
          children: e
        }, n),
        countOthersHook: (e, n) => (0, t.jsx)("span", {
          children: e
        }, n)
      })
    })]
  })
}

function g(e) {
  let {
    children: n
  } = e;
  return (0, t.jsx)(r.X6q, {
    color: "text-normal",
    variant: "heading-sm/medium",
    className: j.contentTitle,
    lineClamp: 1,
    children: n
  })
}