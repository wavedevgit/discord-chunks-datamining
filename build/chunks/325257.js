/** Chunk was on 2928 **/
n.d(t, {
  Z: () => k
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(999153),
  s = n(642128),
  c = n(91192),
  u = n(399606),
  d = n(846519),
  p = n(481060),
  h = n(493683),
  f = n(239091),
  g = n(153867),
  m = n(377171),
  b = n(540059),
  y = n(35225),
  v = n(703656),
  O = n(769654),
  j = n(271383),
  _ = n(771845),
  C = n(727258),
  x = n(276952),
  P = n(249792),
  N = n(40153),
  S = n(593618),
  I = n(252686),
  Z = n(682662),
  E = n(674552),
  w = n(981631),
  T = n(388032),
  A = n(625704);

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let L = {
  analyticsSource: {
    page: w.ZY5.GUILD_CHANNEL,
    section: w.jXE.CHANNEL_LIST,
    object: w.qAy.CHANNEL
  }
};

function M(e, t) {
  (0, f.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("40580"), n.e("7654"), n.e("44156"), n.e("50749"), n.e("6850"), n.e("16114"), n.e("58227"), n.e("54408"), n.e("3205"), n.e("21881"), n.e("69760"), n.e("33213"), n.e("23590")]).then(n.bind(n, 545135));
    return n => (0, r.jsx)(e, R(D({}, n), {
      guild: t
    }))
  })
}
let k = i.memo(function(e) {
  var t, n, l, f, k;
  let {
    guildNode: G,
    setRef: U,
    onDragStart: B,
    onDragEnd: W,
    route: V,
    guild: F,
    animatable: H,
    selected: z = !1,
    unread: Y = !1,
    mediaState: q,
    unavailable: Q = !1,
    badge: K = 0,
    isMentionLowImportance: J,
    contextMenu: X = M,
    draggable: $ = !1,
    sorting: ee = !1,
    preloadOnClick: et = !0,
    guildJoinRequestStatus: en,
    height: er
  } = e, {
    id: ei,
    parentId: el
  } = G, eo = (0, b.Q3)("GuildItem"), ea = null !== (t = e.upperBadge) && void 0 !== t ? t : Q ? (0, E.Ny)() : null != q ? (0, E.Or)(q) : void 0, es = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
  null == es && K > 0 ? es = null !== (l = (0, E.Ne)(K, J ? m.Z.BACKGROUND_ACCENT : m.Z.STATUS_DANGER)) && void 0 !== l ? l : void 0 : null == es && null != en && (es = null !== (f = (0, E.jt)({
    guildJoinRequestStatus: en
  })) && void 0 !== f ? f : void 0);
  let ec = null !== (k = e.lowerBadgeSize) && void 0 !== k ? k : {
      width: (0, p.OVM)(K)
    },
    [{
      dragging: eu
    }, ed] = (0, a.c)({
      type: C.eD.GUILD,
      item: () => (requestAnimationFrame(() => {
        null == B || B()
      }), {
        type: G.type,
        nodeId: G.id
      }),
      end() {
        null == W || W(), (0, g.V1)(_.ZP.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }),
    ep = (0, c.Ie)(null != ei ? ei : w.lds),
    [eh, ef] = i.useState(!1),
    eg = !ee && eh,
    [em, eb] = i.useState(!1),
    [ey, ev] = i.useState(!1),
    [eO] = i.useState(() => new d.sW(70, () => ev(!0)));
  i.useEffect(() => () => eO.cancel(), [eO]);
  let ej = i.useCallback(() => {
      if (null != V) {
        (0, v.uL)(V, {
          state: L
        });
        return
      }(0, O.X)(ei, {
        state: L
      })
    }, [ei, V]),
    e_ = i.useCallback(() => {
      if (null != V || null == F || Q || !et) return;
      let e = (0, y.V)(F.id);
      null != e && h.Z.preload(F.id, e)
    }, [V, F, Q, et]),
    eC = (0, u.e7)([j.ZP], () => j.ZP.isCurrentUserGuest(ei)),
    ex = i.useCallback(e => {
      null == F || eC || X(e, F)
    }, [F, X, eC]),
    eP = i.useCallback(e => {
      if ("ArrowLeft" === e.key && null != el) {
        var t;
        null === (t = document.querySelector("[aria-owns=folder-items-".concat(el, "]"))) || void 0 === t || t.focus()
      }
    }, [el]),
    eN = i.useCallback(e => {
      if (e) {
        eO.delay();
        return
      }
      eO.cancel(), ev(!1)
    }, [eO]),
    eS = i.useCallback(e => {
      null == U || U(ei, e)
    }, [ei, U]),
    eI = (0, p.dQu)(p.TVs.modules.guildbar.AVATAR_SIZE);
  if (null == F) return null;
  let eZ = ey || em ? (0, r.jsx)(P.Z, {
      guild: F,
      show: ey,
      active: z,
      onAnimationStart: function() {
        eb(ey)
      },
      onAnimationRest: function() {
        ey || eb(!1)
      }
    }) : (0, r.jsx)(p.LYs, R(D({
      ariaLabel: T.NW.formatToPlainString(T.t["/uzRsr"], {
        guildName: F.toString(),
        mentions: K
      }),
      name: F.toString(),
      onClick: ej,
      onMouseEnter: function() {
        ee || ef(!0)
      },
      onMouseLeave: function() {
        ee || ef(!1)
      },
      onMouseDown: e_,
      onContextMenu: ex,
      onKeyDown: eP,
      icon: F.getIconURL(2 * eI, eg && H, eo),
      selected: z || eg
    }, ep), {
      role: "treeitem"
    })),
    eE = eu ? (0, r.jsx)(N.OG, {
      children: (0, r.jsx)(I.Z, {})
    }) : (0, r.jsx)(s.animated.div, {
      ref: $ ? ed : void 0,
      "data-dnd-name": F.toString(),
      style: {
        scale: null == er ? 1 : er
      },
      "data-drop-hovering": ey,
      className: o()(A.blobContainer, {
        [A.sorting]: ee,
        [A.wobble]: ey,
        [A.selected]: ey || z
      }),
      children: (0, r.jsx)(p.aRk, {
        selected: !!eo || ey || z || eg,
        upperBadge: ea,
        lowerBadge: es,
        lowerBadgeSize: ec,
        children: eZ
      })
    });
  return (0, r.jsxs)(Z.H, {
    ref: eS,
    children: [(0, r.jsx)(x.Z, {
      hovered: !eu && eg,
      selected: !eu && z,
      unread: !eu && Y,
      className: A.pill
    }), (0, r.jsx)(S.Z, {
      guild: F,
      disabled: ee,
      isDragging: eu,
      children: eE
    }), $ ? (0, r.jsx)(N.ZP, {
      name: F.name,
      targetNode: G,
      onDragOverChanged: eN
    }) : null]
  })
})