/** Chunk was on 47841 **/
/** chunk id: 206774, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk495273 = require("./495273.js"),
  Chunk619006 = require("./619006.js"),
  Chunk576705 = require("./576705.js"),
  Chunk954571 = require("./954571.js"),
  Chunk403362 = require("./403362.js"),
  Chunk642133 = require("./642133.js"),
  Chunk555337 = require("./555337.js"),
  Chunk396816 = require("./396816.js"),
  Chunk856644 = require("./856644.js"),
  Chunk614164 = require("./614164.jsx"),
  Chunk28495 = require("./28495.jsx"),
  Chunk869568 = require("./869568.jsx"),
  Chunk541285 = require("./541285.jsx"),
  Chunk728713 = require("./728713.jsx"),
  Chunk927573 = require("./927573.js"),
  Chunk652215 = require("./652215.js"),
  Chunk326028 = require("./326028.js");

function S(e) {
  let t, {
      editRoleId: n,
      setEditRoleId: l,
      selectedSection: S,
      setSelectedSection: I
    } = e,
    T = (0, a.bG)([h.A], () => h.A.guild, []);
  s()(null != T, "guildId cannot be null here");
  let {
    role: C,
    permissionSearchQuery: P
  } = (0, a.cf)([h.A], () => ({
    role: h.A.getRole(n),
    permissionSearchQuery: h.A.getPermissionSearchQuery()
  }), [n]);
  i.useEffect(() => {
    null == C && l(null)
  }, [C, l]);
  let w = (0, a.bG)([g.A], () => g.A.getHighestRole(T), [T]),
    R = (0, a.bG)([g.A], () => !g.A.isRoleHigher(T, w, C)),
    D = i.useRef(null),
    G = (0, a.bG)([b.A], () => b.A.getProps().integrations),
    L = {
      role: C,
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
      } = k.current, i = (0, x.L9)(S), l = null != (e = null == (t = f.A.getRoleMemberCount(T.id)) ? true : t[r]) ? e : 0;
      m.default.track(E.HAw.ROLE_PAGE_VIEWED, function(e) {
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
        is_everyone: (0, d.N8)(T.id, r),
        role_id: r,
        role_mentionable: null == n ? true : n.mentionable,
        role_hoist: null == n ? true : n.hoist,
        role_permissions: null == n ? true : n.permissions.toString(),
        role_num_members: l
      }, (0, c.H$)(T.id)))
    }, [S, T.id, null == C ? true : C.id]), i.useEffect(() => {
      (null == C ? true : C.id) != null && (0, u.os)(T.id, C.id)
    }, [T.id, null == C ? true : C.id]), null == C) return null;
  switch (S) {
    case A.T$.DISPLAY:
      t = (0, r.jsx)(_.Ay, {
        guild: T,
        role: C,
        locked: R,
        highestRole: w,
        setSelectedSection: I
      });
      break;
    case A.T$.PERMISSIONS:
      t = (0, r.jsx)(v.Ay, {
        guild: T,
        role: C,
        locked: R,
        setSelectedSection: I,
        initialSearchQuery: P
      });
      break;
    case A.T$.VERIFICATIONS:
      t = (0, r.jsx)(j.A, {
        guild: T,
        role: C,
        locked: R,
        setSelectedSection: I,
        integrations: null != G ? G : true
      });
      break;
    case A.T$.MEMBERS:
      t = (0, r.jsx)(O.Ay, {
        guild: T,
        role: C,
        locked: R,
        setSelectedSection: I
      });
      break;
    default:
      (0, p.xb)(S)
  }
  return (0, r.jsxs)("div", {
    className: N.MY,
    children: [(0, r.jsx)(y.A, {
      guild: T,
      currentRoleId: n,
      setCurrentRoleId: l,
      setSelectedSection: I
    }), (0, r.jsx)("div", {
      className: N.hQ,
      ref: D,
      children: (0, r.jsx)(o.xpW, {
        containerRef: D,
        children: t
      })
    })]
  })
}