/** Chunk was on 9536 **/
/** chunk id: 569657, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk913793 = require("./913793.js"),
  Chunk247062 = require("./247062.js"),
  Chunk23893 = require("./23893.js"),
  Chunk793030 = require("./793030.js"),
  Chunk399606 = require("./399606.js"),
  Chunk704215 = require("./704215.js"),
  Chunk668781 = require("./668781.js"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk110259 = require("./110259.js"),
  Chunk496675 = require("./496675.js"),
  Chunk55935 = require("./55935.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk824222 = require("./824222.js");

function N(e) {
  let {
    guild: t
  } = e;
  i.useEffect(() => {
    (0, m.wE)(g.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
      dismissAction: O.L.INDIRECT_ACTION,
      guildId: t.id,
      forceTrack: true
    })
  }, [t]);
  let n = !(0, b.OA)(g.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, t.id) || !t.features.has(v.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE) || !t.features.has(v.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE),
    {
      enabled: l
    } = p.Z.useExperiment({
      guildId: t.id,
      location: "PermissionMigrationInfoBox"
    }),
    u = (0, x.vc)(a()(v.zQD), "LL");
  return l ? (0, r.jsxs)(s.pJ, {
    className: C.infobox,
    defaultExpanded: n,
    children: [(0, r.jsx)(o.X, {
      level: 2,
      children: (0, r.jsx)(d.tEY, {
        children: (0, r.jsxs)(c.z, {
          slot: "trigger",
          className: C.header,
          children: [(0, r.jsx)(d.Mgn, {
            color: "currentColor"
          }), (0, r.jsx)(d.xvT, {
            variant: "heading-lg/semibold",
            tag: "span",
            children: y.intl.string(y.t["k60MO+"])
          }), (0, r.jsx)(d.hic, {
            className: C.expandButton
          })]
        })
      })
    }), (0, r.jsx)(s.V2, {
      className: C.panel,
      children: (0, r.jsxs)("div", {
        className: C.content,
        children: [(0, r.jsxs)("p", {
          children: [y.intl.format(y.t.kBaRSt, {}), (0, r.jsxs)("ul", {
            className: C.infoList,
            children: [(0, r.jsx)("li", {
              children: y.intl.format(y.t.tUarT8, {})
            }), (0, r.jsx)("li", {
              children: y.intl.format(y.t.r807RN, {})
            })]
          })]
        }), (0, r.jsx)("p", {
          children: y.intl.format(y.t.vgAb6w, {
            breakingChangeDate: u
          })
        })]
      })
    })]
  }) : (0, r.jsxs)(s.pJ, {
    className: C.infobox,
    defaultExpanded: n,
    children: [(0, r.jsx)(o.X, {
      level: 2,
      children: (0, r.jsx)(d.tEY, {
        children: (0, r.jsxs)(c.z, {
          slot: "trigger",
          className: C.header,
          children: [(0, r.jsx)(d.Mgn, {
            color: "currentColor"
          }), (0, r.jsx)(d.xvT, {
            variant: "heading-lg/semibold",
            tag: "span",
            children: y.intl.string(y.t["F+YaVP"])
          }), (0, r.jsx)(d.hic, {
            className: C.expandButton
          })]
        })
      })
    }), (0, r.jsx)(s.V2, {
      className: C.panel,
      children: (0, r.jsxs)("div", {
        className: C.content,
        children: [(0, r.jsxs)("p", {
          children: [y.intl.format(y.t.xaPmNf, {}), (0, r.jsxs)("ul", {
            className: C.infoList,
            children: [(0, r.jsx)("li", {
              children: y.intl.format(y.t.tUarT8, {})
            }), (0, r.jsx)("li", {
              children: y.intl.format(y.t.r807RN, {})
            })]
          })]
        }), (0, r.jsx)(d.y5t, {
          forceLevel: 3,
          children: (0, r.jsx)(d.X6q, {
            variant: "text-md/bold",
            children: y.intl.string(y.t.bLwbyU)
          })
        }), (0, r.jsx)("p", {
          children: y.intl.format(y.t.eo5E6e, {
            breakingChangeDate: u
          })
        }), (0, r.jsx)("p", {
          children: y.intl.format(y.t.iLwQzv, {
            breakingChangeDate: u
          })
        }), (0, r.jsx)("div", {
          className: C.divider
        }), (0, r.jsx)(E, {
          guild: t
        })]
      })
    })]
  })
}

function E(e) {
  let {
    guild: t
  } = e, n = (0, u.e7)([h.Z], () => h.Z.can(v.Plq.ADMINISTRATOR, t)), l = t.features.has(v.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE), a = t.features.has(v.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE), [s, o] = i.useState(true), [c, g] = i.useState(true);
  return n ? (0, r.jsxs)("form", {
    className: C.form,
    children: [(0, r.jsxs)("fieldset", {
      children: [(0, r.jsx)("legend", {
        children: y.intl.string(y.t["/SSzPD"])
      }), (0, r.jsx)(I, {
        label: y.intl.string(y.t.KMbKTt),
        migratedLabel: y.intl.string(y.t.IJKefK),
        migrated: l,
        enabled: s,
        onChange: o
      }), (0, r.jsx)(I, {
        label: y.intl.string(y.t["7ltOG9"]),
        migratedLabel: y.intl.string(y.t.gVKQNA),
        migrated: a,
        enabled: c,
        onChange: g
      })]
    }), (0, r.jsx)(d.zxk, {
      text: y.intl.string(y.t["1Qm822"]),
      disabled: (!s || l) && (!c || a),
      onClick: () => {
        var e, n;
        return e = t, n = {
          migratePin: s && !l,
          migrateSlowmode: c && !a
        }, void f.Z.show({
          title: y.intl.string(y.t.fM5aQ2),
          body: y.intl.format(y.t.rLbJs6, {
            guildName: e.name
          }),
          cancelText: y.intl.string(y.t["ETE/oC"]),
          confirmText: y.intl.string(y.t["cY+Oob"]),
          onConfirm: () => {
            S(e.id, n)
          }
        })
      }
    })]
  }) : (0, r.jsx)("p", {
    children: y.intl.string(y.t.hvFwHy)
  })
}

function I(e) {
  let {
    label: t,
    migratedLabel: n,
    migrated: i,
    enabled: l,
    onChange: a
  } = e;
  return (0, r.jsx)(d.XZJ, {
    label: i ? n : t,
    labelType: "primary",
    disabled: i,
    checked: l || i,
    onChange: a
  })
}
async function S(e, t) {
  try {
    await j.Z.migratePermissions(e, t)
  } catch (e) {
    f.Z.show({
      title: y.intl.string(y.t.R0RpRX),
      body: y.intl.string(y.t["58yMLG"]),
      confirmVariant: "secondary"
    })
  }
}