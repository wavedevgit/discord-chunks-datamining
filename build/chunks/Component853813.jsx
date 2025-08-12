/** Chunk was on 5533 **/
/** chunk id: 853813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk605436 = require("./605436.js"),
  Chunk228643 = require("./228643.js"),
  Chunk496675 = require("./496675.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk243730 = require("./243730.js"),
  Chunk946724 = require("./946724.js"),
  Chunk999382 = require("./999382.js"),
  Chunk130341 = require("./130341.js"),
  Chunk981975 = require("./981975.jsx"),
  Chunk660962 = require("./660962.jsx"),
  Chunk442182 = require("./442182.jsx"),
  Chunk322816 = require("./322816.jsx"),
  Chunk266665 = require("./266665.jsx"),
  Chunk203377 = require("./203377.js"),
  Chunk981631 = require("./981631.js"),
  Chunk680738 = require("./680738.js");

function E(e) {
  let t, {
      editRoleId: n,
      setEditRoleId: l,
      selectedSection: E,
      setSelectedSection: S
    } = e,
    T = (0, s.e7)([f.Z], () => f.Z.guild, []);
  a()(null != T, "guildId cannot be null here");
  let {
    role: P,
    permissionSearchQuery: w
  } = (0, s.cj)([f.Z], () => ({
    role: f.Z.getRole(n),
    permissionSearchQuery: f.Z.getPermissionSearchQuery()
  }), [n]);
  i.useEffect(() => {
    null == P && l(null)
  }, [P, l]);
  let R = (0, s.e7)([m.Z], () => m.Z.getHighestRole(T), [T]),
    Z = (0, s.e7)([m.Z], () => !m.Z.isRoleHigher(T, R, P)),
    D = i.useRef(null),
    A = (0, s.e7)([b.Z], () => b.Z.getProps().integrations),
    k = {
      role: P,
      editRoleId: n
    },
    L = i.useRef(k);
  if (i.useEffect(() => {
      L.current = k
    }), i.useEffect(() => {
      var e, t;
      let {
        role: n,
        editRoleId: r
      } = L.current, i = (0, x.UT)(E), l = null != (t = null == (e = h.Z.getRoleMemberCount(T.id)) ? true : e[r]) ? t : 0;
      g.default.track(N.rMx.ROLE_PAGE_VIEWED, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        tab_opened: i,
        is_everyone: (0, d.pM)(T.id, r),
        role_id: r,
        role_mentionable: null == n ? true : n.mentionable,
        role_hoist: null == n ? true : n.hoist,
        role_permissions: null == n ? true : n.permissions.toString(),
        role_num_members: l
      }, (0, c.hH)(T.id)))
    }, [E, T.id, null == P ? true : P.id]), i.useEffect(() => {
      (null == P ? true : P.id) != null && (0, u.sE)(T.id, P.id)
    }, [T.id, null == P ? true : P.id]), null == P) return null;
  switch (E) {
    case C.ZI.DISPLAY:
      t = (0, r.jsx)(v.ZP, {
        guild: T,
        role: P,
        locked: Z,
        highestRole: R,
        setSelectedSection: S
      });
      break;
    case C.ZI.PERMISSIONS:
      t = (0, r.jsx)(O.ZP, {
        guild: T,
        role: P,
        locked: Z,
        setSelectedSection: S,
        initialSearchQuery: w
      });
      break;
    case C.ZI.VERIFICATIONS:
      t = (0, r.jsx)(j.Z, {
        guild: T,
        role: P,
        locked: Z,
        setSelectedSection: S,
        integrations: null != A ? A : true
      });
      break;
    case C.ZI.MEMBERS:
      t = (0, r.jsx)(_.ZP, {
        guild: T,
        role: P,
        locked: Z,
        setSelectedSection: S
      });
      break;
    default:
      (0, p.vE)(E)
  }
  return (0, r.jsxs)(o.hjN, {
    className: I.page,
    children: [(0, r.jsx)(y.Z, {
      guild: T,
      currentRoleId: n,
      setCurrentRoleId: l,
      setSelectedSection: S
    }), (0, r.jsx)("div", {
      className: I.contentContainer,
      ref: D,
      children: (0, r.jsx)(o.JcV, {
        containerRef: D,
        children: t
      })
    })]
  })
}