/** Chunk was on 27087 **/
/** chunk id: 623691, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk749210 = require("./749210.js"),
  Chunk266454 = require("./266454.js"),
  Chunk190263 = require("./190263.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk55935 = require("./55935.js"),
  Chunk63063 = require("./63063.js"),
  Chunk434404 = require("./434404.js"),
  Chunk714939 = require("./714939.jsx"),
  Chunk494831 = require("./494831.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk804306 = require("./804306.js");

function I(e) {
  let {
    guild: t,
    everyoneRole: n,
    filteredRoles: l,
    setEditRoleId: s,
    query: a,
    setQuery: o,
    setHeaderHeight: c
  } = e, u = i.useRef(null), m = p.D.useExperiment({
    guildId: t.id,
    location: "GuildSettingsRolesOverviewHeader"
  }).enabled;
  i.useEffect(() => {
    var e, t;
    c(null != (t = null == (e = u.current) ? true : e.offsetHeight) ? t : _.Cl)
  }, [c]);
  let g = i.useCallback(() => {
    s(n.id)
  }, [s, n.id]);
  return (0, r.jsxs)("div", {
    ref: u,
    children: [(0, r.jsx)(d.vwX, {
      tag: d.RB0.H1,
      children: N.intl.string(N.t.LPJmLy)
    }), (0, r.jsx)(d.Text, {
      className: E.description,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: N.intl.string(N.t["1ydhVl"])
    }), m ? (0, r.jsx)(S, {
      guild: t
    }) : null, (0, r.jsx)(T, {
      guild: t,
      everyoneRole: n,
      filteredRoles: l,
      query: a,
      setQuery: o,
      onEveryoneRoleClick: g
    })]
  })
}

function S(e) {
  let {
    guild: t
  } = e;
  i.useEffect(() => {
    (0, g.wE)(c.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
      dismissAction: y.L.INDIRECT_ACTION,
      guildId: t.id,
      forceTrack: true
    })
  }, [t]);
  let n = (0, b.vc)(o()(O.zQD), "LL"),
    l = t.features.has(O.oNc.PIN_PERMISSION_MIGRATION_COMPLETE) ? (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: N.intl.format(N.t.Vg2oTE, {
        breakingChangeDate: n
      })
    }) : h.Z.can(C.Pl.ADMINISTRATOR, t) ? (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: N.intl.format(N.t.HYM8OD, {
        onClickMigrate: () => {
          u.Z.show({
            title: N.intl.string(N.t.nFE8dH),
            body: N.intl.format(N.t["1PAzQ0"], {
              guildName: t.name
            }),
            cancelText: N.intl.string(N.t["ETE/oK"]),
            confirmText: N.intl.string(N.t["cY+Ooa"]),
            onConfirm: () => {
              j.Z.migratePinPermission(t.id)
            }
          })
        },
        breakingChangeDate: n
      })
    }) : (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: N.intl.format(N.t.cAuU1d, {
        breakingChangeDate: n
      })
    });
  return (0, r.jsx)(f.Z, {
    look: f.z.WARNING,
    className: E.migrationInfoBox,
    children: l
  })
}

function T(e) {
  let {
    guild: t,
    everyoneRole: n,
    filteredRoles: i,
    query: l,
    setQuery: a,
    onEveryoneRoleClick: o
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(v.Z, {
      role: n,
      onClick: o
    }), (0, r.jsx)(P, {
      guild: t,
      query: l,
      setQuery: a
    }), (0, r.jsx)(d.Text, {
      className: E.helpText,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: N.intl.format(N.t.xkC3YW, {
        articleURL: x.Z.getArticleURL(O.BhN.PERMISSIONS_TUTORIAL)
      })
    }), (0, r.jsx)("div", {
      className: E.rolesTable,
      children: (0, r.jsxs)("div", {
        className: E.tableHeader,
        children: [(0, r.jsx)("div", {
          className: E.dragSpacing
        }), (0, r.jsx)(d.Text, {
          className: s()(E.tableTitle, E.roleNameSpacing),
          variant: "text-sm/normal",
          children: N.intl.format(N.t["38N3V1"], {
            numRoles: String(i.length)
          })
        }), (0, r.jsx)(d.Text, {
          className: s()(E.tableTitle, E.memberSpacing),
          variant: "text-sm/normal",
          children: N.intl.string(N.t["9Oq93t"])
        }), (0, r.jsx)("div", {
          className: E.buttonsSpacing
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
    a(true), await m.Z.createRole(t.id), a(false)
  };
  return (0, r.jsx)("div", {
    className: E.__invalid_rolesList,
    children: (0, r.jsxs)("div", {
      className: E.searchContainer,
      children: [(0, r.jsx)(d.E1j, {
        query: n,
        onChange: o,
        onClear: c,
        placeholder: N.intl.string(N.t.Sojqsr),
        "aria-label": N.intl.string(N.t.Sojqsr)
      }), (0, r.jsx)(d.zxk, {
        size: "sm",
        onClick: u,
        loading: s,
        text: N.intl.string(N.t.JZZjQE)
      })]
    })
  })
}