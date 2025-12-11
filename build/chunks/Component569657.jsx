/** Chunk was on 9536 **/
/** chunk id: 569657, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
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
  Chunk824222 = require("./824222.js");

function y(e) {
  let {
    guild: t
  } = e;
  i.useEffect(() => {
    (0, m.wE)(g.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
      dismissAction: v.L.INDIRECT_ACTION,
      guildId: t.id,
      forceTrack: true
    })
  }, [t]);
  let n = !(0, b.OA)(g.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, t.id) || !t.features.has(j.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE) || !t.features.has(j.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE),
    l = (0, h.vc)(a()(j.zQD), "LL");
  return (0, r.jsxs)(s.pJ, {
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
            children: O.intl.string(O.t["F+YaVP"])
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
          children: [O.intl.format(O.t.xaPmNf, {}), (0, r.jsxs)("ul", {
            className: C.infoList,
            children: [(0, r.jsx)("li", {
              children: O.intl.format(O.t.tUarT8, {})
            }), (0, r.jsx)("li", {
              children: O.intl.format(O.t.r807RN, {})
            })]
          })]
        }), (0, r.jsx)(d.y5t, {
          forceLevel: 3,
          children: (0, r.jsx)(d.X6q, {
            variant: "text-md/bold",
            children: O.intl.string(O.t.bLwbyU)
          })
        }), (0, r.jsx)("p", {
          children: O.intl.format(O.t.eo5E6e, {
            breakingChangeDate: l
          })
        }), (0, r.jsx)("p", {
          children: O.intl.format(O.t.iLwQzv, {
            breakingChangeDate: l
          })
        }), (0, r.jsx)("div", {
          className: C.divider
        }), (0, r.jsx)(N, {
          guild: t
        })]
      })
    })]
  })
}

function N(e) {
  let {
    guild: t
  } = e, n = (0, u.e7)([p.Z], () => p.Z.can(j.Plq.ADMINISTRATOR, t)), l = t.features.has(j.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE), a = t.features.has(j.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE), [s, o] = i.useState(true), [c, g] = i.useState(true);
  return n ? (0, r.jsxs)("form", {
    className: C.form,
    children: [(0, r.jsxs)("fieldset", {
      children: [(0, r.jsx)("legend", {
        children: O.intl.string(O.t["/SSzPD"])
      }), (0, r.jsx)(E, {
        label: O.intl.string(O.t.KMbKTt),
        migratedLabel: O.intl.string(O.t.IJKefK),
        migrated: l,
        enabled: s,
        onChange: o
      }), (0, r.jsx)(E, {
        label: O.intl.string(O.t["7ltOG9"]),
        migratedLabel: O.intl.string(O.t.gVKQNA),
        migrated: a,
        enabled: c,
        onChange: g
      })]
    }), (0, r.jsx)(d.zxk, {
      text: O.intl.string(O.t["1Qm822"]),
      disabled: (!s || l) && (!c || a),
      onClick: () => {
        var e, n;
        return e = t, n = {
          migratePin: s && !l,
          migrateSlowmode: c && !a
        }, void f.Z.show({
          title: O.intl.string(O.t.fM5aQ2),
          body: O.intl.format(O.t.rLbJs6, {
            guildName: e.name
          }),
          cancelText: O.intl.string(O.t["ETE/oC"]),
          confirmText: O.intl.string(O.t["cY+Oob"]),
          onConfirm: () => {
            I(e.id, n)
          }
        })
      }
    })]
  }) : (0, r.jsx)("p", {
    children: O.intl.string(O.t.hvFwHy)
  })
}

function E(e) {
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
async function I(e, t) {
  try {
    await x.Z.migratePermissions(e, t)
  } catch (e) {
    f.Z.show({
      title: O.intl.string(O.t.R0RpRX),
      body: O.intl.string(O.t["58yMLG"]),
      confirmVariant: "secondary"
    })
  }
}