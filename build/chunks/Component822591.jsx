/** Chunk was on 384 **/
/** chunk id: 822591, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  X: () => Z,
  Z: () => A
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk345074 = require("./345074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk433517 = require("./433517.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk248514 = require("./248514.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk933557 = require("./933557.js"),
  Chunk769654 = require("./769654.js"),
  Chunk984933 = require("./984933.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk906512 = require("./906512.jsx"),
  Chunk929834 = require("./929834.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk560818 = require("./560818.js"),
  Chunk922905 = require("./922905.js");
let w = "dismissedCommunityFeaturesUpsell",
  Z = () => {
    let e, {
        guild: t,
        submitting: n,
        errors: i
      } = (0, Chunk442837.cj)([Chunk999382.Z], () => ({
        submitting: Chunk999382.Z.isSubmitting(),
        guild: Chunk999382.Z.getGuild(),
        errors: Chunk999382.Z.getErrors()
      })),
      l = Object.keys(Chunk473749),
      s = Chunk345074.length > 0 ? Chunk345074[0] : null;
    return e = "rules_channel_id" === Chunk544891 ? Chunk388032.intl.string(Chunk388032.t["7IrBYt"]) : null != Chunk544891 ? Chunk473749[Chunk544891] : true, (0, Chunk54381.jsx)(Chunk796027.Z, {
      submitting: require,
      onReset: () => {
        null != exports && Chunk434404.Z.init(exports.id)
      },
      onSave: () => {
        null != exports && Chunk434404.Z.saveGuild(exports.id, {
          rulesChannelId: exports.rulesChannelId,
          preferredLocale: exports.preferredLocale,
          safetyAlertsChannelId: exports.safetyAlertsChannelId,
          publicUpdatesChannelId: exports.publicUpdatesChannelId,
          description: exports.description,
          features: exports.features
        })
      },
      errorMessage: module
    })
  },
  R = e => {
    let {
      discoveryEnabled: t,
      onboardingEnabled: n,
      guild: l
    } = e, [c, d] = i.useState(true === o.K.get(w)), u = (0, a.e7)([x.Z], () => {
      var e;
      return null != (e = x.Z.getMemberCount(l.id)) ? e : 0
    }), [f, b] = i.useState(false);
    (0, p.ZP)(() => {
      s.tn.get({
        url: I.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
        rejectWithError: true
      }).then(e => {
        b(e.body.eligible_for_admin_server)
      }).catch(() => b(false))
    });
    let _ = (0, a.e7)([j.Z], () => j.Z.getGuild("942897714956472401")),
      v = l.features.has(I.GuildFeatures.COMMUNITY) && u >= 1e3 && f && null == _;
    if (t && n && !v) return null;
    let O = async () => {
      try {
        let e = await s.tn.post({
          url: I.ANM.JOIN_ADMIN_SERVER(l.id),
          oldFormErrors: true,
          rejectWithError: true
        });
        C.Z.close(), (0, h.X)(e.body.id)
      } catch (e) {}
    };
    return c && !v ? null : (0, r.jsxs)("div", {
      className: T.upsellContainer,
      children: [(0, r.jsxs)("div", {
        className: T.upsellContent,
        children: [(0, r.jsx)("img", {
          src: P,
          alt: "",
          width: 60,
          className: T.upsellImage
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(m.Heading, {
            variant: "heading-md/semibold",
            className: T.upsellHeader,
            children: S.intl.string(S.t["pR/Bge"])
          }), (0, r.jsx)(m.Text, {
            variant: "text-sm/normal",
            children: S.intl.string(S.t["V+Yo1l"])
          })]
        })]
      }), (0, r.jsx)(g.zx, {
        "aria-label": S.intl.string(S.t.cpT0Cq),
        look: g.zx.Looks.BLANK,
        size: g.zx.Sizes.NONE,
        className: T.upsellClose,
        onClick: () => {
          o.K.set(w, true), d(true)
        },
        children: (0, r.jsx)(m.Dio, {
          size: "md",
          color: "currentColor"
        })
      }), (0, r.jsxs)("div", {
        className: T.upsellFooter,
        children: [v && (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: T.upsellButton,
          children: (0, r.jsx)(m.Button, {
            variant: "primary",
            size: "sm",
            text: S.intl.string(S.t.iF1Asi),
            onClick: O
          })
        }), n ? null : (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: T.upsellButton,
          children: (0, r.jsx)(m.Button, {
            variant: "primary",
            size: "sm",
            text: S.intl.string(S.t["S/Dfid"]),
            onClick: () => {
              C.Z.setSection(I.pNK.ONBOARDING)
            }
          })
        }), t ? null : (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: T.upsellButton,
          children: (0, r.jsx)(m.Button, {
            variant: "secondary",
            size: "sm",
            text: S.intl.string(S.t["0kmJdw"]),
            onClick: () => {
              C.Z.setSection(I.pNK.ACCESS, I.KsC.ACCESS_DISCOVERABLE)
            }
          })
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: T.upsellButton,
          children: (0, r.jsx)(m.Button, {
            variant: "secondary",
            size: "sm",
            text: S.intl.string(S.t.BQIYTb),
            onClick: () => {
              C.Z.setSection(I.pNK.ANALYTICS)
            }
          })
        })]
      })]
    })
  },
  D = () => {
    let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
      {
        canManageGuild: t,
        isGuildAdmin: n
      } = (0, Chunk442837.cj)([Chunk496675.Z], () => ({
        canManageGuild: Chunk496675.Z.can(Chunk981631.Plq.MANAGE_GUILD, module),
        isGuildAdmin: Chunk496675.Z.can(Chunk981631.Plq.ADMINISTRATOR, module)
      })),
      s = (0, Chunk442837.e7)([Chunk984933.ZP], () => null != module ? Chunk984933.ZP.getChannels(module.id) : null),
      c = Chunk473749.useMemo(Chunk929834.jb, []),
      g = true !== Chunk433517.K.get(w);
    if (null == module) return null;
    let p = [];
    null != Chunk544891 && Chunk544891[Chunk984933.sH].forEach(e => {
      let {
        channel: t
      } = e;
      t.type === I.d4z.GUILD_TEXT && p.push({
        value: t.id,
        label: (0, f.F6)(t, O.default, v.Z, true)
      })
    });
    let h = () => {
        if (null == module) return;
        let t = new Set(module.features);
        exports.delete(Chunk981631.GuildFeatures.COMMUNITY), exports.delete(Chunk981631.GuildFeatures.DISCOVERABLE), exports.delete(Chunk981631.GuildFeatures.PREVIEW_ENABLED), Chunk434404.Z.updateGuild({
          features: exports,
          rulesChannelId: null,
          publicUpdatesChannelId: null
        })
      },
      x = e => {
        C.Z.updateGuild({
          description: e
        })
      };
    return (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
      gap: 24,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        children: Chunk388032.intl.string(Chunk388032.t.nRtNqn)
      }), Chunk755721 ? (0, Chunk54381.jsx)(R, {
        discoveryEnabled: module.features.has(Chunk981631.GuildFeatures.DISCOVERABLE),
        onboardingEnabled: module.features.has(Chunk981631.GuildFeatures.GUILD_ONBOARDING),
        guild: module
      }) : null, (0, Chunk54381.jsx)(Chunk481060.VcW, {
        layout: "horizontal-responsive",
        label: Chunk388032.intl.string(Chunk388032.t["otcXP/"]),
        description: Chunk388032.intl.string(Chunk388032.t.BtwmYB),
        value: module.rulesChannelId,
        options: Chunk493773,
        onChange: e => {
          C.Z.updateGuild({
            rulesChannelId: e
          })
        },
        isDisabled: !exports
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk481060.VcW, {
        layout: "horizontal-responsive",
        label: Chunk388032.intl.string(Chunk388032.t.vAyDGU),
        description: Chunk388032.intl.string(Chunk388032.t.ZFeonu),
        value: module.publicUpdatesChannelId,
        options: Chunk493773,
        onChange: e => {
          C.Z.updateGuild({
            publicUpdatesChannelId: e
          })
        },
        isDisabled: !require
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk481060.VcW, {
        layout: "horizontal-responsive",
        label: Chunk388032.intl.string(Chunk388032.t.sMkYE8),
        description: Chunk388032.intl.string(Chunk388032.t.htioQo),
        value: module.safetyAlertsChannelId,
        options: Chunk493773,
        onChange: e => {
          C.Z.updateGuild({
            safetyAlertsChannelId: e
          })
        },
        isDisabled: !exports
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk481060.VcW, {
        layout: "horizontal-responsive",
        label: Chunk388032.intl.string(Chunk388032.t.pO60fy),
        description: Chunk388032.intl.string(Chunk388032.t.aIR73T),
        value: module.preferredLocale,
        options: Chunk796027,
        onChange: e => {
          C.Z.updateGuild({
            preferredLocale: e
          })
        },
        isDisabled: !exports
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (() => {
        var n;
        if (null != module) return (0, Chunk54381.jsx)(Chunk481060.Kx8, {
          label: Chunk388032.intl.string(Chunk388032.t["RSfm+i"]),
          description: Chunk388032.intl.string(Chunk388032.t["/B6PRw"]),
          value: null != (n = module.description) ? require : "",
          placeholder: Chunk388032.intl.string(Chunk388032.t.Nvfowl),
          onChange: Chunk650774,
          maxLength: Chunk345074.Us,
          disabled: !exports
        })
      })(), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk481060.gNt, {
        label: Chunk388032.intl.string(Chunk388032.t.c1BmbC),
        description: Chunk388032.intl.string(Chunk388032.t.aQzVF8),
        layout: "horizontal",
        children: (0, Chunk54381.jsx)(Chunk28664.u, {
          text: require ? null : Chunk388032.intl.string(Chunk388032.t["pjG+T3"]),
          "aria-label": require ? true : Chunk388032.intl.string(Chunk388032.t["pjG+T3"]),
          children: (0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "critical-primary",
            size: "sm",
            text: Chunk388032.intl.string(Chunk388032.t.c1BmbC),
            onClick: () => {
              module.features.has(Chunk981631.GuildFeatures.DISCOVERABLE) && module.features.has(Chunk981631.GuildFeatures.PARTNERED) ? (0, Chunk248514.Z)({
                title: Chunk388032.intl.string(Chunk388032.t.iBnVHc),
                subtitle: Chunk388032.intl.string(Chunk388032.t["P+Sh8V"]),
                confirmText: Chunk388032.intl.string(Chunk388032.t["cY+Oob"]),
                cancelText: Chunk388032.intl.string(Chunk388032.t.oEAioF),
                onConfirm: Chunk769654
              }) : module.features.has(Chunk981631.GuildFeatures.DISCOVERABLE) ? (0, Chunk248514.Z)({
                title: Chunk388032.intl.string(Chunk388032.t.iBnVHc),
                subtitle: Chunk388032.intl.string(Chunk388032.t["eMx/uZ"]),
                confirmText: Chunk388032.intl.string(Chunk388032.t["cY+Oob"]),
                cancelText: Chunk388032.intl.string(Chunk388032.t.oEAioF),
                onConfirm: Chunk769654
              }) : module.features.has(Chunk981631.GuildFeatures.PARTNERED) ? (0, Chunk248514.Z)({
                title: Chunk388032.intl.string(Chunk388032.t.iBnVHc),
                subtitle: Chunk388032.intl.string(Chunk388032.t.l1wLeX),
                confirmText: Chunk388032.intl.string(Chunk388032.t["cY+Oob"]),
                cancelText: Chunk388032.intl.string(Chunk388032.t.oEAioF),
                onConfirm: Chunk769654
              }) : Chunk769654()
            },
            disabled: !require
          })
        })
      })]
    })
  },
  A = () => {
    let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild());
    return null == module ? null : module.features.has(Chunk981631.GuildFeatures.COMMUNITY) ? (0, Chunk54381.jsx)(D, {}) : (0, Chunk54381.jsx)(Chunk906512.Z, {
      guild: module
    })
  }