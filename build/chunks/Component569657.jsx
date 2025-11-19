/** Chunk was on 384 **/
/** chunk id: 569657, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
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
  Chunk496675 = require("./496675.js"),
  Chunk55935 = require("./55935.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk739499 = require("./739499.js");

function C(e) {
  let {
    guild: t
  } = e;
  i.useEffect(() => {
    (0, p.wE)(g.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
      dismissAction: _.L.INDIRECT_ACTION,
      guildId: t.id,
      forceTrack: true
    })
  }, [t]);
  let n = !(0, f.OA)(g.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, t.id) || !t.features.has(j.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE) || !t.features.has(j.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE),
    l = (0, b.vc)(a()(j.zQD), "LL");
  return (0, r.jsxs)(s.pJ, {
    className: O.infobox,
    defaultExpanded: n,
    children: [(0, r.jsx)(o.X, {
      level: 2,
      children: (0, r.jsx)(d.tEY, {
        children: (0, r.jsxs)(c.z, {
          slot: "trigger",
          className: O.header,
          children: [(0, r.jsx)(d.Mgn, {
            color: "currentColor"
          }), (0, r.jsx)(d.xvT, {
            variant: "heading-lg/semibold",
            tag: "span",
            children: v.intl.string(v.t["F+YaVP"])
          }), (0, r.jsx)(d.hic, {
            className: O.expandButton
          })]
        })
      })
    }), (0, r.jsx)(s.V2, {
      className: O.panel,
      children: (0, r.jsxs)("div", {
        className: O.content,
        children: [(0, r.jsxs)("p", {
          children: [v.intl.format(v.t.xaPmNf, {}), (0, r.jsxs)("ul", {
            className: O.infoList,
            children: [(0, r.jsx)("li", {
              children: v.intl.format(v.t.tUarT8, {})
            }), (0, r.jsx)("li", {
              children: v.intl.format(v.t.r807RN, {})
            })]
          })]
        }), (0, r.jsx)(d.y5t, {
          forceLevel: 3,
          children: (0, r.jsx)(d.X6q, {
            variant: "text-md/bold",
            children: v.intl.string(v.t.bLwbyU)
          })
        }), (0, r.jsx)("p", {
          children: v.intl.format(v.t.eo5E6e, {
            breakingChangeDate: l
          })
        }), (0, r.jsx)("p", {
          children: v.intl.format(v.t.iLwQzv, {
            breakingChangeDate: l
          })
        }), (0, r.jsx)("div", {
          className: O.divider
        }), (0, r.jsx)(y, {
          guild: t
        })]
      })
    })]
  })
}

function y(e) {
  let {
    guild: t
  } = e, n = (0, u.e7)([h.Z], () => h.Z.can(j.Plq.ADMINISTRATOR, t)), l = t.features.has(j.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE), a = t.features.has(j.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE), [s, o] = i.useState(true), [c, g] = i.useState(true);
  return n ? (0, r.jsxs)("form", {
    className: O.form,
    children: [(0, r.jsxs)("fieldset", {
      children: [(0, r.jsx)("legend", {
        children: v.intl.string(v.t["/SSzPD"])
      }), (0, r.jsx)(N, {
        label: v.intl.string(v.t.KMbKTt),
        migratedLabel: v.intl.string(v.t.IJKefK),
        migrated: l,
        enabled: s,
        onChange: o
      }), (0, r.jsx)(N, {
        label: v.intl.string(v.t["7ltOG9"]),
        migratedLabel: v.intl.string(v.t.gVKQNA),
        migrated: a,
        enabled: c,
        onChange: g
      })]
    }), (0, r.jsx)(d.zxk, {
      text: v.intl.string(v.t["1Qm822"]),
      disabled: (!s || l) && (!c || a),
      onClick: () => {
        var e, n;
        return e = t, n = {
          migratePin: s && !l,
          migrateSlowmode: c && !a
        }, void m.Z.show({
          title: v.intl.string(v.t.fM5aQ2),
          body: v.intl.format(v.t.rLbJs6, {
            guildName: e.name
          }),
          cancelText: v.intl.string(v.t["ETE/oC"]),
          confirmText: v.intl.string(v.t["cY+Oob"]),
          onConfirm: () => {
            E(e.id, n)
          }
        })
      }
    })]
  }) : (0, r.jsx)("p", {
    children: v.intl.string(v.t.hvFwHy)
  })
}

function N(e) {
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
async function E(e, t) {
  try {
    await x.Z.migratePermissions(e, t)
  } catch (e) {
    m.Z.show({
      title: v.intl.string(v.t.R0RpRX),
      body: v.intl.string(v.t["58yMLG"]),
      confirmVariant: "secondary"
    })
  }
}