/** Chunk was on 64982 **/
/** chunk id: 623691, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk749210 = require("./749210.js"),
  Chunk266454 = require("./266454.js"),
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
  Chunk297827 = require("./297827.js");

function N(e) {
  let {
    guild: t,
    everyoneRole: n,
    filteredRoles: l,
    setEditRoleId: a,
    query: s,
    setQuery: o,
    setHeaderHeight: c
  } = e, u = i.useRef(null);
  i.useEffect(() => {
    var e, t;
    c(null != (t = null == (e = u.current) ? true : e.offsetHeight) ? t : v.Cl)
  }, [c]);
  let g = i.useCallback(() => {
    a(n.id)
  }, [a, n.id]);
  return (0, r.jsxs)("div", {
    ref: u,
    children: [(0, r.jsx)(d.Heading, {
      variant: "heading-lg/semibold",
      children: y.intl.string(y.t["LPJmL/"])
    }), (0, r.jsx)(d.Text, {
      className: E.description,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: y.intl.string(y.t["1ydhVp"])
    }), (0, r.jsx)(I, {
      guild: t
    }), (0, r.jsx)(S, {
      guild: t,
      everyoneRole: n,
      filteredRoles: l,
      query: s,
      setQuery: o,
      onEveryoneRoleClick: g
    })]
  })
}

function I(e) {
  let {
    guild: t
  } = e;
  i.useEffect(() => {
    (0, m.wE)(c.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
      dismissAction: C.L.INDIRECT_ACTION,
      guildId: t.id,
      forceTrack: true
    })
  }, [t]);
  let n = (0, h.vc)(o()(_.zQD), "LL"),
    l = t.features.has(_.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE) ? (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: y.intl.format(y.t.Vg2oTN, {
        breakingChangeDate: n
      })
    }) : f.Z.can(O.Pl.ADMINISTRATOR, t) ? (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: y.intl.format(y.t.HYM8OE, {
        onClickMigrate: () => {
          u.Z.show({
            title: y.intl.string(y.t.nFE8dD),
            body: y.intl.format(y.t["1PAzQ6"], {
              guildName: t.name
            }),
            cancelText: y.intl.string(y.t["ETE/oC"]),
            confirmText: y.intl.string(y.t["cY+Oob"]),
            onConfirm: () => {
              x.Z.migratePinPermission(t.id)
            }
          })
        },
        breakingChangeDate: n
      })
    }) : (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: y.intl.format(y.t.cAuU1S, {
        breakingChangeDate: n
      })
    });
  return (0, r.jsx)(p.Z, {
    look: p.z.WARNING,
    className: E.migrationInfoBox,
    children: l
  })
}

function S(e) {
  let {
    guild: t,
    everyoneRole: n,
    filteredRoles: i,
    query: l,
    setQuery: s,
    onEveryoneRoleClick: o
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(j.Z, {
      role: n,
      onClick: o
    }), (0, r.jsx)(T, {
      guild: t,
      query: l,
      setQuery: s
    }), (0, r.jsx)(d.Text, {
      className: E.helpText,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: y.intl.format(y.t.xkC3Yf, {
        articleURL: b.Z.getArticleURL(_.BhN.PERMISSIONS_TUTORIAL)
      })
    }), (0, r.jsx)("div", {
      className: E.rolesTable,
      children: (0, r.jsxs)("div", {
        className: E.tableHeader,
        children: [(0, r.jsx)("div", {
          className: E.dragSpacing
        }), (0, r.jsx)(d.Text, {
          className: a()(E.tableTitle, E.roleNameSpacing),
          variant: "text-sm/normal",
          children: y.intl.format(y.t["38N3Vz"], {
            numRoles: String(i.length)
          })
        }), (0, r.jsx)(d.Text, {
          className: a()(E.tableTitle, E.memberSpacing),
          variant: "text-sm/normal",
          children: y.intl.string(y.t["9Oq93m"])
        }), (0, r.jsx)("div", {
          className: E.buttonsSpacing
        })]
      })
    })]
  })
}

function T(e) {
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
    className: E.__invalid_rolesList,
    children: (0, r.jsxs)("div", {
      className: E.searchContainer,
      children: [(0, r.jsx)(d.E1j, {
        query: n,
        onChange: o,
        onClear: c,
        placeholder: y.intl.string(y.t.Sojqsr),
        "aria-label": y.intl.string(y.t.Sojqsr)
      }), (0, r.jsx)(d.Button, {
        size: "sm",
        onClick: u,
        loading: a,
        text: y.intl.string(y.t.JZZjQK)
      })]
    })
  })
}