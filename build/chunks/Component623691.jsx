/** Chunk was on 9536 **/
/** chunk id: 623691, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk749210 = require("./749210.js"),
  Chunk409513 = require("./409513.js"),
  Chunk266454 = require("./266454.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk55935 = require("./55935.js"),
  Chunk63063 = require("./63063.js"),
  Chunk434404 = require("./434404.js"),
  Chunk714939 = require("./714939.jsx"),
  Chunk569657 = require("./569657.jsx"),
  Chunk494831 = require("./494831.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk499899 = require("./499899.js");

function _(e) {
  let {
    guild: t,
    everyoneRole: n,
    filteredRoles: l,
    setEditRoleId: a,
    query: s,
    setQuery: o,
    setHeaderHeight: c
  } = e, u = i.useRef(null), {
    enabled: g
  } = m.Z.useExperiment({
    guildId: t.id,
    location: "GuildSettingsRolesOverviewHeader"
  });
  i.useEffect(() => {
    var e, t;
    c(null != (t = null == (e = u.current) ? true : e.offsetHeight) ? t : y.Cl)
  }, [c]);
  let f = i.useCallback(() => {
      a(n.id)
    }, [a, n.id]),
    b = g ? O.Z : T;
  return (0, r.jsxs)("div", {
    ref: u,
    children: [(0, r.jsx)(d.Heading, {
      variant: "heading-lg/semibold",
      children: I.intl.string(I.t["LPJmL/"])
    }), (0, r.jsx)(d.Text, {
      className: S.description,
      color: "text-default",
      variant: "text-sm/normal",
      children: I.intl.string(I.t["1ydhVp"])
    }), (0, r.jsx)(b, {
      guild: t
    }), (0, r.jsx)(P, {
      guild: t,
      everyoneRole: n,
      filteredRoles: l,
      query: s,
      setQuery: o,
      onEveryoneRoleClick: f
    })]
  })
}

function T(e) {
  let {
    guild: t
  } = e;
  i.useEffect(() => {
    (0, f.wE)(c.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
      dismissAction: N.L.INDIRECT_ACTION,
      guildId: t.id,
      forceTrack: true
    })
  }, [t]);
  let n = (0, h.vc)(o()(C.zQD), "LL"),
    l = t.features.has(C.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE) ? (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: I.intl.format(I.t.Vg2oTN, {
        breakingChangeDate: n
      })
    }) : p.Z.can(E.Pl.ADMINISTRATOR, t) ? (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: I.intl.format(I.t.HYM8OE, {
        onClickMigrate: () => {
          u.Z.show({
            title: I.intl.string(I.t.nFE8dD),
            body: I.intl.format(I.t["1PAzQ6"], {
              guildName: t.name
            }),
            cancelText: I.intl.string(I.t["ETE/oC"]),
            confirmText: I.intl.string(I.t["cY+Oob"]),
            onConfirm: () => {
              j.Z.migratePinPermission(t.id)
            }
          })
        },
        breakingChangeDate: n
      })
    }) : (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: I.intl.format(I.t.cAuU1S, {
        breakingChangeDate: n
      })
    });
  return (0, r.jsx)(b.Z, {
    look: b.z.WARNING,
    className: S.migrationInfoBox,
    children: l
  })
}

function P(e) {
  let {
    guild: t,
    everyoneRole: n,
    filteredRoles: i,
    query: l,
    setQuery: s,
    onEveryoneRoleClick: o
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(v.Z, {
      role: n,
      onClick: o
    }), (0, r.jsx)(w, {
      guild: t,
      query: l,
      setQuery: s
    }), (0, r.jsx)(d.Text, {
      className: S.helpText,
      color: "text-default",
      variant: "text-sm/normal",
      children: I.intl.format(I.t.xkC3Yf, {
        articleURL: x.Z.getArticleURL(C.BhN.PERMISSIONS_TUTORIAL)
      })
    }), (0, r.jsx)("div", {
      className: S.rolesTable,
      children: (0, r.jsxs)("div", {
        className: S.tableHeader,
        children: [(0, r.jsx)("div", {
          className: S.dragSpacing
        }), (0, r.jsx)(d.Text, {
          className: a()(S.tableTitle, S.roleNameSpacing),
          variant: "text-sm/normal",
          children: I.intl.format(I.t["38N3Vz"], {
            numRoles: String(i.length)
          })
        }), (0, r.jsx)(d.Text, {
          className: a()(S.tableTitle, S.memberSpacing),
          variant: "text-sm/normal",
          children: I.intl.string(I.t["9Oq93m"])
        }), (0, r.jsx)("div", {
          className: S.buttonsSpacing
        })]
      })
    })]
  })
}

function w(e) {
  let {
    guild: t,
    query: n,
    setQuery: l
  } = e, [a, s] = i.useState(false), o = i.useCallback(e => {
    l(e)
  }, [l]), c = i.useCallback(() => {
    l("")
  }, [l]), u = async () => {
    s(true), await g.Z.createRole(t.id), s(false)
  };
  return (0, r.jsx)("div", {
    className: S.__invalid_rolesList,
    children: (0, r.jsxs)("div", {
      className: S.searchContainer,
      children: [(0, r.jsx)(d.E1j, {
        query: n,
        onChange: o,
        onClear: c,
        placeholder: I.intl.string(I.t.Sojqsr),
        "aria-label": I.intl.string(I.t.Sojqsr)
      }), (0, r.jsx)(d.Button, {
        size: "sm",
        onClick: u,
        loading: a,
        text: I.intl.string(I.t.JZZjQK)
      })]
    })
  })
}