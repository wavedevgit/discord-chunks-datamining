/** Chunk was on 47841 **/
/** chunk id: 175284, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk686956 = require("./686956.js"),
  Chunk386849 = require("./386849.js"),
  Chunk826673 = require("./826673.js"),
  Chunk801264 = require("./801264.jsx"),
  Chunk576705 = require("./576705.js"),
  Chunk405269 = require("./405269.js"),
  Chunk975571 = require("./975571.js"),
  Chunk997509 = require("./997509.js"),
  Chunk50249 = require("./50249.jsx"),
  Chunk305053 = require("./305053.jsx"),
  Chunk512031 = require("./512031.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk107550 = require("./107550.js");

function I(e) {
  let {
    guild: t,
    everyoneRole: n,
    filteredRoles: l,
    setEditRoleId: s,
    query: a,
    setQuery: o,
    setHeaderHeight: c
  } = e, u = i.useRef(null), {
    enabled: g
  } = m.A.useExperiment({
    guildId: t.id,
    location: "GuildSettingsRolesOverviewHeader"
  });
  i.useEffect(() => {
    var e, t;
    c(null != (e = null == (t = u.current) ? true : t.offsetHeight) ? e : v.p4)
  }, [c]);
  let p = i.useCallback(() => {
      s(n.id)
    }, [s, n.id]),
    f = g ? O.A : T;
  return (0, r.jsxs)("div", {
    ref: u,
    children: [(0, r.jsx)(d.Heading, {
      variant: "heading-lg/semibold",
      children: N.intl.string(N.t["LPJmL/"])
    }), (0, r.jsx)(d.Text, {
      className: S.h_,
      color: "text-default",
      variant: "text-sm/normal",
      children: N.intl.string(N.t["1ydhVp"])
    }), (0, r.jsx)(f, {
      guild: t
    }), (0, r.jsx)(C, {
      guild: t,
      everyoneRole: n,
      filteredRoles: l,
      query: a,
      setQuery: o,
      onEveryoneRoleClick: p
    })]
  })
}

function T(e) {
  let {
    guild: t
  } = e;
  i.useEffect(() => {
    (0, p.dX)(c.M.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
      dismissAction: A.i.INDIRECT_ACTION,
      guildId: t.id,
      forceTrack: true
    })
  }, [t]);
  let n = (0, h.i$)(o()(y.X30), "LL"),
    l = t.features.has(y.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE) ? (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: N.intl.format(N.t.Vg2oTN, {
        breakingChangeDate: n
      })
    }) : b.A.can(E.xB.ADMINISTRATOR, t) ? (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: N.intl.format(N.t.HYM8OE, {
        onClickMigrate: () => {
          u.A.show({
            title: N.intl.string(N.t.nFE8dD),
            body: N.intl.format(N.t["1PAzQ6"], {
              guildName: t.name
            }),
            cancelText: N.intl.string(N.t["ETE/oC"]),
            confirmText: N.intl.string(N.t["cY+Oob"]),
            onConfirm: () => {
              j.A.migratePinPermission(t.id)
            }
          })
        },
        breakingChangeDate: n
      })
    }) : (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: N.intl.format(N.t.cAuU1S, {
        breakingChangeDate: n
      })
    });
  return (0, r.jsx)(f.A, {
    look: f.k.WARNING,
    className: S.q4,
    children: l
  })
}

function C(e) {
  let {
    guild: t,
    everyoneRole: n,
    filteredRoles: i,
    query: l,
    setQuery: a,
    onEveryoneRoleClick: o
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.A, {
      role: n,
      onClick: o
    }), (0, r.jsx)(P, {
      guild: t,
      query: l,
      setQuery: a
    }), (0, r.jsx)(d.Text, {
      className: S.BK,
      color: "text-default",
      variant: "text-sm/normal",
      children: N.intl.format(N.t.xkC3Yf, {
        articleURL: x.A.getArticleURL(y.MVz.PERMISSIONS_TUTORIAL)
      })
    }), (0, r.jsx)("div", {
      className: S.kA,
      children: (0, r.jsxs)("div", {
        className: S.qd,
        children: [(0, r.jsx)("div", {
          className: S._M
        }), (0, r.jsx)(d.Text, {
          className: s()(S.jA, S.N5),
          variant: "text-sm/normal",
          children: N.intl.format(N.t["38N3Vz"], {
            numRoles: String(i.length)
          })
        }), (0, r.jsx)(d.Text, {
          className: s()(S.jA, S.Hp),
          variant: "text-sm/normal",
          children: N.intl.string(N.t["9Oq93m"])
        }), (0, r.jsx)("div", {
          className: S.DE
        })]
      })
    })]
  })
}

function P(e) {
  let {
    guild: t,
    query: n,
    setQuery: l
  } = e, [s, a] = i.useState(false), o = i.useCallback(e => {
    l(e)
  }, [l]), c = i.useCallback(() => {
    l("")
  }, [l]), u = async () => {
    a(true), await g.A.createRole(t.id), a(false)
  };
  return (0, r.jsx)("div", {
    className: S.__invalid_rolesList,
    children: (0, r.jsxs)("div", {
      className: S.MT,
      children: [(0, r.jsx)(d.IWV, {
        query: n,
        onChange: o,
        onClear: c,
        placeholder: N.intl.string(N.t.Sojqsr),
        "aria-label": N.intl.string(N.t.Sojqsr)
      }), (0, r.jsx)(d.Button, {
        size: "sm",
        onClick: u,
        loading: s,
        text: N.intl.string(N.t.JZZjQK)
      })]
    })
  })
}