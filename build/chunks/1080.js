/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => W
}), n(47120), n(566702), n(266796), n(653041);
var r = n(200651),
  i = n(192379),
  s = n(392711),
  a = n.n(s),
  l = n(399606),
  o = n(481060),
  c = n(239091),
  A = n(749210),
  d = n(479531),
  u = n(110924),
  g = n(410030),
  f = n(367907),
  m = n(906732),
  p = n(118012),
  h = n(218867),
  C = n(733026),
  b = n(246946),
  v = n(594174),
  x = n(626135),
  N = n(136015),
  j = n(51144),
  E = n(434404),
  I = n(999382),
  O = n(84613),
  y = n(740903),
  w = n(981631),
  P = n(388032),
  B = n(383833);

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
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

function L(e) {
  var t;
  let {
    transitionState: n,
    guild: s,
    user: a,
    ban: l,
    hideDiscriminator: c,
    onClose: u
  } = e, [g, h] = i.useState(!1), [C, b] = i.useState(null), {
    analyticsLocations: v
  } = (0, m.ZP)(), N = null !== (t = null == v ? void 0 : v[0]) && void 0 !== t ? t : null;
  async function E() {
    if (null != s) {
      b(null), h(!0);
      try {
        await A.Z.unbanUser(s.id, a.id), u(), x.default.track(w.rMx.GUILD_BAN_REMOVED, S(T({}, (0, f.hH)(s.id)), {
          target_user_id: a.id,
          reason: l.reason,
          location: N
        }))
      } catch (e) {
        b(new d.Z(e)), h(!1)
      }
    }
  }
  return (0, r.jsxs)(o.Y0X, {
    className: B.bannedUserModal,
    transitionState: n,
    children: [(0, r.jsxs)(o.xBx, {
      className: B.header,
      separator: !1,
      children: [(0, r.jsx)(p.Z, {
        size: p.Z.Sizes.SIZE_24,
        className: B.userUsername,
        children: j.ZP.getUserTag(a, {
          mode: "username",
          identifiable: c ? "never" : "always"
        })
      }), c || a.isPomelo() ? null : (0, r.jsxs)(p.Z, {
        size: p.Z.Sizes.SIZE_24,
        className: B.userDiscrim,
        children: ["#", a.discriminator]
      })]
    }), (0, r.jsxs)(o.hzk, {
      className: B.content,
      children: [(0, r.jsx)(o.Text, {
        className: B.reasonHeader,
        variant: "text-md/medium",
        children: P.NW.string(P.t["9Ki66O"])
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        children: null != l.reason && "" !== l.reason ? l.reason : P.NW.string(P.t["t+2Zcn"])
      }), null != C ? (0, r.jsx)(o.Text, {
        className: B.error,
        color: "text-danger",
        variant: "text-sm/normal",
        children: C.getAnyErrorMessage()
      }) : null]
    }), (0, r.jsxs)(o.mzw, {
      className: B.footer,
      children: [(0, r.jsx)(o.zxk, {
        onClick: u,
        children: P.NW.string(P.t.i4jeWV)
      }), (0, r.jsx)(o.zxk, {
        onClick: E,
        look: o.zxk.Looks.LINK,
        color: o.zxk.Colors.RED,
        submitting: g,
        children: P.NW.string(P.t.UPcIa2)
      })]
    })]
  })
}
class R extends i.PureComponent {
  render() {
    var e;
    let {
      user: t,
      guild: n
    } = this.props;
    return (0, r.jsxs)(o.P3F, {
      className: B.bannedUser,
      onClick: this.handleShowModal,
      onContextMenu: this.handleContextMenu,
      children: [(0, r.jsx)(o.qEK, {
        src: t.getAvatarURL(null == n ? void 0 : n.id, 40),
        "aria-label": t.username,
        size: o.EFr.SIZE_40,
        className: B.bannedUserAvatar
      }), (0, r.jsxs)("div", {
        className: B.username,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: null !== (e = t.globalName) && void 0 !== e ? e : t.username
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: null != t.globalName ? t.username : null
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), D(this, "handleShowModal", () => {
      let {
        guild: e,
        user: t,
        hideDiscriminator: n,
        ban: i
      } = this.props;
      (0, o.h7j)(s => (0, r.jsx)(L, S(T({}, s), {
        guild: e,
        user: t,
        ban: i,
        hideDiscriminator: n
      })))
    }), D(this, "handleContextMenu", e => {
      (0, c.jW)(e, async () => {
        let {
          default: e
        } = await n.e("23835").then(n.bind(n, 768079));
        return t => (0, r.jsx)(e, S(T({}, t), {
          user: this.props.user
        }))
      })
    })
  }
}
let Q = i.forwardRef(function(e, t) {
  let {
    guild: n,
    sortedBans: s,
    bans: a
  } = e, c = (0, l.e7)([b.Z], () => b.Z.hidePersonalInformation, []), A = i.useCallback(e => {
    var t;
    if (null == a && 0 === e) return 60;
    let n = s[e],
      r = null == a ? void 0 : a.get(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : "");
    return 60 * (null != n && null != r)
  }, [a, s]), d = i.useCallback(e => {
    var t;
    if (null == a && 0 === e) return (0, r.jsx)(o.$jN, {
      className: B.spinner,
      type: o.$jN.Type.SPINNING_CIRCLE
    }, "spinner");
    let i = s[e],
      l = null == a ? void 0 : a.get(null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : "");
    if (null != i && null != l) return (0, r.jsx)(R, {
      user: i,
      ban: l,
      hideDiscriminator: c,
      guild: n
    }, i.id)
  }, [a, n, s, c]);
  return (0, r.jsx)(h.Z, {
    role: "listbox",
    listPadding: [8, 8, 8, 8],
    rowCount: s.length,
    rowHeight: A,
    renderRow: d,
    ref: t
  })
});

function Z(e) {
  let {
    guildId: t,
    storedSearchQuery: n
  } = e, [s, a] = i.useState(null != n ? n : ""), [l, c] = i.useState(!1), d = i.useCallback(() => {
    E.Z.setSection(w.pNK.SAFETY), (0, O.K)(y.u.DM_AND_SPAM_PROTECTION)
  }, []), u = i.useCallback(e => {
    a(e), 0 === e.trim().length && E.Z.setSearchQuery(e)
  }, []), g = i.useCallback(() => {
    a(""), E.Z.setSearchQuery("")
  }, []), f = i.useCallback(async () => {
    if (0 === s.trim().length) {
      E.Z.setSearchQuery(s), c(!1);
      return
    }
    if (!l) try {
      c(!0);
      let [e, n] = (0, C.C)(s), r = e[0];
      E.Z.setSearchQuery(s), await A.Z.searchGuildBans(t, r, n), c(!1)
    } catch (e) {
      c(!1)
    }
  }, [t, l, s]), m = i.useCallback(e => {
    "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), f())
  }, [f]);
  return (0, r.jsxs)(o.hjN, {
    tag: o.RB0.H1,
    title: P.NW.string(P.t["7OY0gI"]),
    children: [(0, r.jsx)("div", {
      className: B.settingsHeader,
      children: (0, r.jsx)(o.R94, {
        type: o.geA.DESCRIPTION,
        className: B.description,
        children: P.NW.format(P.t.JcZ36u, {
          onModerationClick: d
        })
      })
    }), (0, r.jsxs)("div", {
      className: B.bansSearchContainer,
      children: [(0, r.jsx)(o.E1j, {
        className: B.searchBar,
        query: null != s ? s : "",
        placeholder: P.NW.string(P.t.MiqUmZ),
        "aria-label": P.NW.string(P.t.MiqUmZ),
        onChange: u,
        onKeyDown: m,
        onClear: g,
        size: o.E1j.Sizes.MEDIUM,
        isLoading: l
      }), (0, r.jsx)(o.zxk, {
        color: o.zxk.Colors.BRAND,
        onClick: f,
        size: o.zxk.Sizes.SMALL,
        disabled: l,
        submitting: l,
        className: B.searchButton,
        children: P.NW.string(P.t["5h0QOD"])
      })]
    })]
  }, "bans-header")
}

function W() {
  var e, t;
  let {
    guild: c,
    searchQuery: d
  } = (0, l.e7)([I.Z], () => I.Z.getProps(), [], s.isEqual), f = null != d && d.trim().length > 0, m = (0, u.Z)(f), p = f !== m, [h] = (0, l.e7)([I.Z], () => I.Z.getBans(), [], N.Q), b = null !== (e = null == h ? void 0 : h.size) && void 0 !== e ? e : 0, x = (0, g.ZP)(), j = null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : w.lds, E = i.useRef(null), O = i.useCallback(e => null == e || 0 === e.length ? e => null != e : t => {
    if (null == t || 0 === e.trim().length) return !1;
    let [
      [n], r
    ] = (0, C.C)(e);
    return !!r.includes(t.id) || null != n && !!(t.username.toLowerCase().includes(n.toLowerCase()) || null != t.globalName && t.globalName.toLowerCase().includes(n.toLowerCase()))
  }, []), y = i.useCallback((e, t, n) => {
    if (null == e || 0 === n) return [];
    let r = [];
    for (let n of e.keys()) {
      let e = v.default.getUser(n);
      null != e && O(t)(e) && r.push(e)
    }
    return r
  }, [O]), D = i.useMemo(() => y(h, d, b), [h, y, d, b]), L = null != h, R = D.length % 1e3 == 0 && D.length > 0 && L, W = 0 === D.length, [k, M] = i.useState({
    currentPage: 1,
    pageSize: 100
  });
  i.useEffect(() => {
    p && 1 !== k.currentPage && M(e => S(T({}, e), {
      currentPage: 1
    }))
  }, [p, k.currentPage]);
  let _ = i.useCallback(e => {
      A.Z.fetchGuildBansBatch(j, 1e3, e)
    }, [j]),
    G = i.useMemo(() => a().chunk(D, k.pageSize), [k.pageSize, D]),
    F = i.useCallback(e => {
      var t, n, r;
      null === (t = E.current) || void 0 === t || t.scrollToSectionTop(0), (e + 1) * k.pageSize > D.length && R && !f && (U.current = null !== (r = null === (n = D[D.length - 1]) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : null, _(U.current)), (null != G[e - 1] || R) && M(t => S(T({}, t), {
        currentPage: e
      }))
    }, [k.pageSize, D, R, G, _, f]),
    U = i.useRef(null);
  i.useEffect(() => {
    _(U.current)
  }, [_]);
  let H = i.useMemo(() => {
    var e;
    return null !== (e = G[k.currentPage - 1]) && void 0 !== e ? e : []
  }, [G, k.currentPage]);
  return null == c ? null : (0, r.jsxs)("div", {
    className: B.container,
    children: [(0, r.jsx)(Z, {
      guildId: j,
      storedSearchQuery: d
    }), (0, r.jsxs)("div", {
      className: B.scrollerContainer,
      children: [!W && (0, r.jsx)(Q, {
        guild: c,
        bans: h,
        sortedBans: H,
        ref: E
      }), !R && W && (0, r.jsxs)(o.ubH, {
        theme: x,
        className: B.emptyState,
        children: [(0, r.jsx)(o.oxh, {
          darkSrc: n(532747),
          lightSrc: n(433466),
          width: 256,
          height: 212
        }), (0, r.jsx)(o.OZU, {
          note: P.NW.string(P.t.zfCsAw),
          style: {
            maxWidth: 300
          },
          children: P.NW.string(P.t.ZEiY1N)
        })]
      })]
    }), (0, r.jsx)("div", {
      className: B.__invalid_paginationContainer,
      children: (0, r.jsx)(o.DsT, {
        className: B.paginationInput,
        totalCount: D.length + (R ? k.pageSize : 0),
        pageSize: k.pageSize,
        currentPage: k.currentPage,
        onPageChange: F,
        maxVisiblePages: 9
      })
    })]
  })
}