/** Chunk was on 47841 **/
/** chunk id: 215194, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544420 = require("./544420.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk837011 = require("./837011.js"),
  Chunk90084 = require("./90084.js"),
  Chunk42780 = require("./42780.jsx"),
  Chunk576705 = require("./576705.js"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk33888 = require("./33888.jsx"),
  Chunk494492 = require("./494492.jsx"),
  Chunk377337 = require("./377337.jsx"),
  Chunk249434 = require("./249434.jsx"),
  Chunk89145 = require("./89145.jsx"),
  Chunk913443 = require("./913443.jsx"),
  Chunk474215 = require("./474215.jsx"),
  Chunk561923 = require("./561923.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk754136 = require("./754136.js");
let S = function() {
  let {
    analyticsLocations: e
  } = (0, c.Ay)(o.A.GUILD_SETTINGS_PROFILE_PAGE), t = (0, l.bG)([f.A], () => f.A.getGuild(), []), n = null == t ? true : t.id, {
    fetchGuildProfile: S,
    fetchStatus: I
  } = (0, u.u)(null == t ? true : t.id), T = (0, l.bG)([f.A], () => f.A.getGuildProfile(), []), C = (0, l.bG)([m.A], () => m.A.can(A.xBc.MANAGE_GUILD, t)), P = i.useCallback(e => {
    null != n && (p.A.updateGuild({
      icon: e
    }), p.A.updateGuildProfile(n, {
      icon: e
    }))
  }, [n]), w = i.useCallback(e => {
    null != n && p.A.updateGuildProfile(n, {
      customBanner: e
    })
  }, [n]);
  i.useEffect(() => {
    null != n && S()
  }, [n, S]);
  let R = i.useCallback(() => {
    S(true)
  }, [S]);
  return (i.useEffect(() => {
    a.A.getDetectableGames()
  }, []), I === d.X.FETCHED && null == T) ? (0, r.jsx)(O.g, {
    forceFetchGuildProfile: R
  }) : I === d.X.NOT_FETCHED || I === d.X.FETCHING ? (0, r.jsx)("main", {
    className: N.u1,
    children: (0, r.jsx)(s.y$y, {})
  }) : null == t || null == T ? null : (0, r.jsx)(c.f5, {
    value: e,
    children: (0, r.jsxs)("main", {
      className: N.Qs,
      children: [(0, r.jsxs)("div", {
        className: N.Cd,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(s.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: E.intl.string(E.t.txdaxf)
          }), (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            className: N.h_,
            children: E.intl.string(E.t["5PGZWS"])
          })]
        }), (0, r.jsx)(_.A, {
          profile: T,
          canManageGuild: C
        }), (0, r.jsx)("div", {
          className: N.yF
        }), (0, r.jsx)(j.A, {
          profile: T,
          canManageGuild: C,
          onIconChange: P
        }), (0, r.jsx)("div", {
          className: N.yF
        }), (0, r.jsx)(b.A, {
          profile: T,
          onCustomBannerChange: w,
          canManageGuild: C
        }), (0, r.jsx)("div", {
          className: N.yF
        }), (0, r.jsx)(v.A, {
          profile: T,
          canManageGuild: C
        }), (0, r.jsx)("div", {
          className: N.yF
        }), (0, r.jsx)(h.A, {
          profile: T,
          canManageGuild: C
        }), (0, r.jsx)("div", {
          className: N.yF
        }), (0, r.jsx)(x.A, {
          profile: T,
          canManageGuild: C
        }), (0, r.jsx)("div", {
          className: N.yF
        }), (0, r.jsx)(y.A, {
          profile: T,
          canManageGuild: C
        })]
      }), (0, r.jsx)("div", {
        className: N.DK,
        children: (0, r.jsx)(s.HOs, {
          className: N.ti,
          children: (0, r.jsx)(g.Ay, {
            className: N.q5,
            profile: T,
            disableCTA: true,
            onIconChange: C ? P : true,
            disableGuildNameClick: true
          })
        })
      })]
    })
  })
}