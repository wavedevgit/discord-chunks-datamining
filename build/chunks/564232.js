/** Chunk was on 62635 (acfe99dc9162281b.js) **/
r.d(t, {
  default: () => v
}), r(47120);
var n = r(200651),
  i = r(192379),
  s = r(392711),
  l = r.n(s),
  d = r(442837),
  u = r(481060),
  o = r(239091),
  c = r(276264),
  a = r(600164),
  p = r(313201),
  b = r(184301),
  m = r(347475),
  f = r(271383),
  g = r(699516),
  j = r(594174),
  h = r(709054),
  y = r(432496),
  O = r(981631),
  w = r(388032),
  x = r(606323);

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function v(e) {
  let {
    guild: t,
    transitionState: s,
    onClose: v
  } = e, k = (0, p.Dt)(), S = i.useMemo(() => {
    let e = g.Z.getRelationships();
    return h.default.keys(e).filter(t => e[t] === O.OGo.FRIEND)
  }, []);
  i.useEffect(() => {
    y.Z.fetchFriendMembersIfNotFetched(t.id, S)
  }, [t.id, S]);
  let N = (0, d.e7)([f.ZP], () => f.ZP.getMembers(t.id)),
    Z = i.useMemo(() => l()(N).filter(e => !!S.includes(e.userId) && null != j.default.getUser(e.userId)).sortBy(e => {
      var t;
      let r = j.default.getUser(e.userId);
      return (null != r ? null !== (t = e.nick) && void 0 !== t ? t : r.username : "").toLocaleLowerCase()
    }).map(e => {
      let i = j.default.getUser(e.userId);
      return (0, n.jsx)(u.yRy, {
        preload: () => (0, b.Z)(i.id, i.getAvatarURL(t.id, 80), {
          guildId: t.id
        }),
        renderPopout: r => (0, n.jsx)(m.Z, P(I({}, r), {
          userId: e.userId,
          guildId: t.id
        })),
        spacing: 14,
        children: (s, l) => {
          let {
            isShown: d
          } = l;
          return (0, n.jsx)(c.Z, I({
            className: x.member,
            selected: d,
            colorString: e.colorString,
            user: i,
            isOwner: e.userId === t.ownerId,
            nick: e.nick,
            premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
            guildId: t.id,
            onContextMenu: e => {
              (0, o.jW)(e, async () => {
                let {
                  default: e
                } = await Promise.all([r.e("79695"), r.e("26976"), r.e("80524")]).then(r.bind(r, 415118));
                return r => (0, n.jsx)(e, P(I({}, r), {
                  user: i,
                  guildId: t.id,
                  showMediaItems: !0
                }))
              })
            }
          }, s), e.userId)
        }
      }, i.id)
    }).value(), [S, t.id, t.ownerId, N]),
    E = y.Z.isFetchingFriendsForGuild(t.id);
  return (0, n.jsxs)(u.Y0X, {
    transitionState: s,
    size: u.CgR.SMALL,
    "aria-labelledby": k,
    children: [(0, n.jsxs)(u.xBx, {
      separator: !1,
      justify: a.Z.Justify.BETWEEN,
      children: [(0, n.jsxs)("div", {
        className: x.heading,
        children: [(0, n.jsx)("span", {
          children: (0, n.jsx)(u.iFz, {})
        }), (0, n.jsx)(u.X6q, {
          variant: "heading-lg/semibold",
          children: w.NW.format(E ? w.t.EtQnZm : w.t.OgMdNT, {
            guildName: t.name,
            numFriends: Z.length
          })
        })]
      }), (0, n.jsx)(u.olH, {
        onClick: v
      })]
    }), (0, n.jsxs)(u.hzk, {
      className: x.content,
      children: [E && (0, n.jsx)(u.$jN, {}), (0, n.jsx)(u.Ttm, {
        children: Z
      })]
    })]
  })
}