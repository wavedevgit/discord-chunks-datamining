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
  } = (0, o.Ay)(c.A.GUILD_SETTINGS_PROFILE_PAGE), t = (0, l.bG)([m.A], () => m.A.getGuild(), []), n = null == t ? true : t.id, {
    fetchGuildProfile: S,
    fetchStatus: T
  } = (0, u.u)(null == t ? true : t.id), I = (0, l.bG)([m.A], () => m.A.getGuildProfile(), []), C = (0, l.bG)([g.A], () => g.A.can(E.xBc.MANAGE_GUILD, t)), P = i.useCallback(e => {
    null != n && (b.A.updateGuild({
      icon: e
    }), b.A.updateGuildProfile(n, {
      icon: e
    }))
  }, [n]), w = i.useCallback(e => {
    null != n && b.A.updateGuildProfile(n, {
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
  }, []), T === d.X.FETCHED && null == I) ? (0, r.jsx)(y.g, {
    forceFetchGuildProfile: R
  }) : T === d.X.NOT_FETCHED || T === d.X.FETCHING ? (0, r.jsx)("main", {
    className: _.u1,
    children: (0, r.jsx)(s.y$y, {})
  }) : null == t || null == I ? null : (0, r.jsx)(o.f5, {
    value: e,
    children: (0, r.jsxs)("main", {
      className: _.Qs,
      children: [(0, r.jsxs)("div", {
        className: _.Cd,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(s.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: N.intl.string(N.t.txdaxf)
          }), (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            className: _.h_,
            children: N.intl.string(N.t["5PGZWS"])
          })]
        }), (0, r.jsx)(O.A, {
          profile: I,
          canManageGuild: C
        }), (0, r.jsx)("div", {
          className: _.yF
        }), (0, r.jsx)(j.A, {
          profile: I,
          canManageGuild: C,
          onIconChange: P
        }), (0, r.jsx)("div", {
          className: _.yF
        }), (0, r.jsx)(p.A, {
          profile: I,
          onCustomBannerChange: w,
          canManageGuild: C
        }), (0, r.jsx)("div", {
          className: _.yF
        }), (0, r.jsx)(v.A, {
          profile: I,
          canManageGuild: C
        }), (0, r.jsx)("div", {
          className: _.yF
        }), (0, r.jsx)(x.A, {
          profile: I,
          canManageGuild: C
        }), (0, r.jsx)("div", {
          className: _.yF
        }), (0, r.jsx)(h.A, {
          profile: I,
          canManageGuild: C
        }), (0, r.jsx)("div", {
          className: _.yF
        }), (0, r.jsx)(A.A, {
          profile: I,
          canManageGuild: C
        })]
      }), (0, r.jsx)("div", {
        className: _.DK,
        children: (0, r.jsx)(s.HOs, {
          className: _.ti,
          children: (0, r.jsx)(f.Ay, {
            className: _.q5,
            profile: I,
            disableCTA: true,
            onIconChange: C ? P : true,
            disableGuildNameClick: true
          })
        })
      })]
    })
  })
}