/** Chunk was on 46989 **/
n.d(t, {
  Z: () => D
});
var r = n(255367),
  l = n(73800),
  i = n(120356),
  s = n.n(i),
  a = n(913527),
  o = n.n(a),
  u = n(399606),
  c = n(481060),
  d = n(480137),
  E = n(906732),
  _ = n(376923),
  m = n(472596),
  A = n(987707),
  g = n(909746),
  f = n(501801),
  T = n(884902),
  I = n(271383),
  h = n(430824),
  O = n(5192),
  p = n(776767),
  N = n(981631),
  R = n(388032),
  S = n(54433),
  C = n(44946),
  b = n(12740);

function v(e) {
  var t;
  let {
    log: n,
    member: i,
    guild: a
  } = e, {
    analyticsLocations: d
  } = (0, E.ZP)(), A = g.nm(n), h = g.QM(n), p = null == (t = g.V$(N.zUn.REASON, n)) ? void 0 : t.newValue, b = g.J5(n), v = (0, _.LJ)(n.id), D = (0, u.e7)([I.ZP], () => null != n.userId ? I.ZP.getMember(i.guildId, n.userId) : null, [i.guildId, n.userId]), x = (0, T.X7)(null == D ? void 0 : D.guildId, null == D ? void 0 : D.userId, null == D ? void 0 : D.colorStrings), L = l.useCallback(e => t => {
    t.preventDefault(), t.stopPropagation(), null != e && (0, m.RE)(e, d)
  }, [d]), U = l.useCallback(() => null == n.user ? null : (0, r.jsx)(c.ua7, {
    text: R.intl.string(R.t.mvsi9v),
    children: e => {
      var t;
      let {
        onMouseEnter: l,
        onMouseLeave: s
      } = e;
      return (0, r.jsx)(c.P3F, {
        tag: "span",
        className: S.username,
        onClick: L(D),
        onMouseEnter: l,
        onMouseLeave: s,
        children: (0, r.jsxs)(c.Text, {
          variant: "text-sm/medium",
          tag: "span",
          children: ["@", (0, r.jsx)(c.PUh, {
            name: O.ZP.getName(i.guildId, null, n.user),
            color: null != (t = null == D ? void 0 : D.colorString) ? t : void 0,
            roleColors: x
          })]
        })
      })
    }
  }), [L, n.user, i.guildId, D, x])();
  return (0, r.jsxs)("div", {
    className: s()(C.modInfoItem, S.auditLogItem),
    children: [(0, r.jsxs)("div", {
      className: S.auditLogItemTitleContainer,
      children: [(0, r.jsxs)("div", {
        className: S.auditLogItemTitle,
        children: [null != A && (0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: A
        }), null != h && (0, r.jsxs)(c.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: ["(", "string" == typeof h ? h : o()(h).fromNow(), ")"]
        })]
      }), (0, r.jsx)("div", {
        className: S.auditLogItemDate,
        children: (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: v
        })
      })]
    }), null != p && (0, r.jsx)("div", {
      className: S.auditLogSecondaryContainer,
      children: (0, r.jsxs)("div", {
        className: S.auditLogReason,
        children: [U, (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: p
        })]
      })
    }), null == p && null != b && (0, r.jsx)("div", {
      className: S.auditLogSecondaryContainer,
      children: (0, r.jsxs)("div", {
        className: S.auditLogSecondary,
        children: [U, (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: b
        })]
      })
    }), null == p && null == b && (0, r.jsx)("div", {
      className: S.auditLogSecondaryContainer,
      children: (0, r.jsx)("div", {
        className: S.auditLogSecondary,
        children: (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: (0, r.jsx)(f.tP, {
            log: n,
            guild: a,
            onContentClick: () => {},
            className: S.auditLogExpandedChangeDetails
          })
        })
      })
    })]
  })
}

function D(e) {
  let {
    member: t
  } = e, n = (0, u.e7)([h.Z], () => h.Z.getGuild(t.guildId), [t.guildId]), i = (0, u.e7)([A.Z], () => {
    let e = A.Z.logs;
    return null == e || null == n ? [] : g._$(e, n)
  }, [n]);
  return (l.useEffect(() => {
    !async function(e, t) {
      await d.gV(t, e)
    }(t.guildId, t.userId)
  }, [t.guildId, t.userId]), null == n || 0 === i.length) ? null : (0, r.jsx)(c.xJW, {
    title: R.intl.string(R.t.flCxLi),
    titleClassName: b.infoTitle,
    children: i.length > 0 ? (0, r.jsx)(p.WM, {
      children: i.map(e => (0, r.jsx)(v, {
        log: e,
        member: t,
        guild: n
      }, e.id))
    }) : null
  })
}