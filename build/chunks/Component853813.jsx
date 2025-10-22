/** Chunk was on 29679 **/
/** chunk id: 853813, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk999382 = require("./999382.js"),
  Chunk103576 = require("./103576.js"),
  Chunk130341 = require("./130341.js"),
  Chunk981975 = require("./981975.jsx"),
  Chunk660962 = require("./660962.jsx"),
  Chunk442182 = require("./442182.jsx"),
  Chunk322816 = require("./322816.jsx"),
  Chunk266665 = require("./266665.jsx"),
  Chunk203377 = require("./203377.js"),
  Chunk981631 = require("./981631.js"),
  Chunk720298 = require("./720298.js");

function I(e) {
  let t, {
      editRoleId: n,
      setEditRoleId: l,
      selectedSection: I,
      setSelectedSection: S
    } = e,
    T = (0, s.e7)([b.Z], () => b.Z.guild, []);
  a()(null != T, "guildId cannot be null here");
  let {
    role: P,
    permissionSearchQuery: w
  } = (0, s.cj)([b.Z], () => ({
    role: b.Z.getRole(n),
    permissionSearchQuery: b.Z.getPermissionSearchQuery()
  }), [n]);
  i.useEffect(() => {
    null == P && l(null)
  }, [P, l]);
  let Z = (0, s.e7)([g.Z], () => g.Z.getHighestRole(T), [T]),
    R = (0, s.e7)([g.Z], () => !g.Z.isRoleHigher(T, Z, P)),
    D = i.useRef(null),
    A = (0, s.e7)([h.Z], () => h.Z.getProps().integrations),
    L = {
      role: P,
      editRoleId: n
    },
    k = i.useRef(L);
  if (i.useEffect(() => {
      k.current = L
    }), i.useEffect(() => {
      var e, t;
      let {
        role: n,
        editRoleId: r
      } = k.current, i = (0, x.UT)(I), l = null != (t = null == (e = f.Z.getRoleMemberCount(T.id)) ? true : e[r]) ? t : 0;
      m.default.track(E.rMx.ROLE_PAGE_VIEWED, function(e) {
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
    }, [I, T.id, null == P ? true : P.id]), i.useEffect(() => {
      (null == P ? true : P.id) != null && (0, u.sE)(T.id, P.id)
    }, [T.id, null == P ? true : P.id]), null == P) return null;
  switch (I) {
    case y.ZI.DISPLAY:
      t = (0, r.jsx)(v.ZP, {
        guild: T,
        role: P,
        locked: R,
        highestRole: Z,
        setSelectedSection: S
      });
      break;
    case y.ZI.PERMISSIONS:
      t = (0, r.jsx)(C.ZP, {
        guild: T,
        role: P,
        locked: R,
        setSelectedSection: S,
        initialSearchQuery: w
      });
      break;
    case y.ZI.VERIFICATIONS:
      t = (0, r.jsx)(j.Z, {
        guild: T,
        role: P,
        locked: R,
        setSelectedSection: S,
        integrations: null != A ? A : true
      });
      break;
    case y.ZI.MEMBERS:
      t = (0, r.jsx)(_.ZP, {
        guild: T,
        role: P,
        locked: R,
        setSelectedSection: S
      });
      break;
    default:
      (0, p.vE)(I)
  }
  return (0, r.jsxs)("div", {
    className: N.page,
    children: [(0, r.jsx)(O.Z, {
      guild: T,
      currentRoleId: n,
      setCurrentRoleId: l,
      setSelectedSection: S
    }), (0, r.jsx)("div", {
      className: N.contentContainer,
      ref: D,
      children: (0, r.jsx)(o.JcV, {
        containerRef: D,
        children: t
      })
    })]
  })
}