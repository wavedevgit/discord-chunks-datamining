/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => y
});
var r = n(200651),
  i = n(192379),
  s = n(512722),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(367907),
  A = n(605436),
  d = n(228643),
  u = n(496675),
  g = n(626135),
  f = n(823379),
  m = n(243730),
  p = n(946724),
  h = n(999382),
  C = n(130341),
  b = n(981975),
  v = n(660962),
  x = n(442182),
  N = n(322816),
  j = n(266665),
  E = n(203377),
  I = n(981631),
  O = n(259869);

function y(e) {
  let t, {
      editRoleId: n,
      setEditRoleId: s,
      selectedSection: y,
      setSelectedSection: w
    } = e,
    P = (0, l.e7)([p.Z], () => p.Z.guild, []);
  a()(null != P, "guildId cannot be null here");
  let {
    role: B,
    permissionSearchQuery: D
  } = (0, l.cj)([p.Z], () => ({
    role: p.Z.getRole(n),
    permissionSearchQuery: p.Z.getPermissionSearchQuery()
  }), [n]);
  i.useEffect(() => {
    null == B && s(null)
  }, [B, s]);
  let T = (0, l.e7)([u.Z], () => u.Z.getHighestRole(P), [P]),
    S = (0, l.e7)([u.Z], () => !u.Z.isRoleHigher(P, T, B)),
    L = i.useRef(null),
    R = (0, l.e7)([h.Z], () => h.Z.getProps().integrations),
    Q = {
      role: B,
      editRoleId: n
    },
    Z = i.useRef(Q);
  if (i.useEffect(() => {
      Z.current = Q
    }), i.useEffect(() => {
      var e, t;
      let {
        role: n,
        editRoleId: r
      } = Z.current, i = (0, C.UT)(y), s = null !== (t = null === (e = m.Z.getRoleMemberCount(P.id)) || void 0 === e ? void 0 : e[r]) && void 0 !== t ? t : 0;
      g.default.track(I.rMx.ROLE_PAGE_VIEWED, function(e) {
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
      }({
        tab_opened: i,
        is_everyone: (0, A.pM)(P.id, r),
        role_id: r,
        role_mentionable: null == n ? void 0 : n.mentionable,
        role_hoist: null == n ? void 0 : n.hoist,
        role_permissions: null == n ? void 0 : n.permissions.toString(),
        role_num_members: s
      }, (0, c.hH)(P.id)))
    }, [y, P.id, null == B ? void 0 : B.id]), i.useEffect(() => {
      (null == B ? void 0 : B.id) != null && (0, d.sE)(P.id, B.id)
    }, [P.id, null == B ? void 0 : B.id]), null == B) return null;
  switch (y) {
    case E.ZI.DISPLAY:
      t = (0, r.jsx)(v.ZP, {
        guild: P,
        role: B,
        locked: S,
        highestRole: T,
        setSelectedSection: w
      });
      break;
    case E.ZI.PERMISSIONS:
      t = (0, r.jsx)(N.ZP, {
        guild: P,
        role: B,
        locked: S,
        setSelectedSection: w,
        initialSearchQuery: D
      });
      break;
    case E.ZI.VERIFICATIONS:
      t = (0, r.jsx)(b.Z, {
        guild: P,
        role: B,
        locked: S,
        setSelectedSection: w,
        integrations: null != R ? R : void 0
      });
      break;
    case E.ZI.MEMBERS:
      t = (0, r.jsx)(x.ZP, {
        guild: P,
        role: B,
        locked: S,
        setSelectedSection: w
      });
      break;
    default:
      (0, f.vE)(y)
  }
  return (0, r.jsxs)(o.hjN, {
    className: O.page,
    children: [(0, r.jsx)(j.Z, {
      guild: P,
      currentRoleId: n,
      setCurrentRoleId: s,
      setSelectedSection: w
    }), (0, r.jsx)("div", {
      className: O.contentContainer,
      ref: L,
      children: (0, r.jsx)(o.JcV, {
        containerRef: L,
        children: t
      })
    })]
  })
}