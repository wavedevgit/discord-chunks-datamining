/** Chunk was on 9536 **/
/** chunk id: 822591, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  X: () => R,
  Z: () => L
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk345074 = require("./345074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk433517 = require("./433517.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk668339 = require("./668339.jsx"),
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
  Chunk156120 = require("./156120.js"),
  Chunk922905 = require("./922905.js");
let Z = "dismissedCommunityFeaturesUpsell",
  R = () => {
    let e, {
        guild: t,
        submitting: n,
        errors: i
      } = (0, a.cj)([E.Z], () => ({
        submitting: E.Z.isSubmitting(),
        guild: E.Z.getGuild(),
        errors: E.Z.getErrors()
      })),
      l = Object.keys(i),
      s = l.length > 0 ? l[0] : null;
    return e = "rules_channel_id" === s ? T.intl.string(T.t["7IrBYt"]) : null != s ? i[s] : true, (0, r.jsx)(c.Z, {
      submitting: n,
      onReset: () => {
        null != t && N.Z.init(t.id)
      },
      onSave: () => {
        null != t && N.Z.saveGuild(t.id, {
          rulesChannelId: t.rulesChannelId,
          preferredLocale: t.preferredLocale,
          safetyAlertsChannelId: t.safetyAlertsChannelId,
          publicUpdatesChannelId: t.publicUpdatesChannelId,
          description: t.description,
          features: t.features
        })
      },
      errorMessage: e
    })
  },
  D = e => {
    let {
      discoveryEnabled: t,
      onboardingEnabled: n,
      guild: l
    } = e, [c, d] = i.useState(true === o.K.get(Z)), u = (0, a.e7)([j.Z], () => {
      var e;
      return null != (e = j.Z.getMemberCount(l.id)) ? e : 0
    }), [g, p] = i.useState(false);
    (0, b.ZP)(() => {
      s.tn.get({
        url: _.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
        rejectWithError: true
      }).then(e => {
        p(e.body.eligible_for_admin_server)
      }).catch(() => p(false))
    });
    let x = (0, a.e7)([v.Z], () => v.Z.getGuild("942897714956472401")),
      O = l.features.has(_.GuildFeatures.COMMUNITY) && u >= 1e3 && g && null == x;
    if (t && n && !O) return null;
    let C = async () => {
      try {
        let e = await s.tn.post({
          url: _.ANM.JOIN_ADMIN_SERVER(l.id),
          oldFormErrors: true,
          rejectWithError: true
        });
        N.Z.close(), (0, h.X)(e.body.id)
      } catch (e) {}
    };
    return c && !O ? null : (0, r.jsxs)("div", {
      className: P.upsellContainer,
      children: [(0, r.jsxs)("div", {
        className: P.upsellContent,
        children: [(0, r.jsx)("img", {
          src: w,
          alt: "",
          width: 60,
          className: P.upsellImage
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(m.Heading, {
            variant: "heading-md/semibold",
            className: P.upsellHeader,
            children: T.intl.string(T.t["pR/Bge"])
          }), (0, r.jsx)(m.Text, {
            variant: "text-sm/normal",
            children: T.intl.string(T.t["V+Yo1l"])
          })]
        })]
      }), (0, r.jsx)(f.zx, {
        "aria-label": T.intl.string(T.t.cpT0Cq),
        look: f.zx.Looks.BLANK,
        size: f.zx.Sizes.NONE,
        className: P.upsellClose,
        onClick: () => {
          o.K.set(Z, true), d(true)
        },
        children: (0, r.jsx)(m.Dio, {
          size: "md",
          color: "currentColor"
        })
      }), (0, r.jsxs)("div", {
        className: P.upsellFooter,
        children: [O && (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: P.upsellButton,
          children: (0, r.jsx)(m.Button, {
            variant: "primary",
            size: "sm",
            text: T.intl.string(T.t.iF1Asi),
            onClick: C
          })
        }), n ? null : (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: P.upsellButton,
          children: (0, r.jsx)(m.Button, {
            variant: "primary",
            size: "sm",
            text: T.intl.string(T.t["S/Dfid"]),
            onClick: () => {
              N.Z.setSection(_.pNK.ONBOARDING)
            }
          })
        }), t ? null : (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: P.upsellButton,
          children: (0, r.jsx)(m.Button, {
            variant: "secondary",
            size: "sm",
            text: T.intl.string(T.t["0kmJdw"]),
            onClick: () => {
              N.Z.setSection(_.pNK.ACCESS, _.KsC.ACCESS_DISCOVERABLE)
            }
          })
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: P.upsellButton,
          children: (0, r.jsx)(m.Button, {
            variant: "secondary",
            size: "sm",
            text: T.intl.string(T.t.BQIYTb),
            onClick: () => {
              N.Z.setSection(_.pNK.ANALYTICS)
            }
          })
        })]
      })]
    })
  },
  A = () => {
    let e = (0, a.e7)([E.Z], () => E.Z.getGuild()),
      {
        canManageGuild: t,
        isGuildAdmin: n
      } = (0, a.cj)([O.Z], () => ({
        canManageGuild: O.Z.can(_.Plq.MANAGE_GUILD, e),
        isGuildAdmin: O.Z.can(_.Plq.ADMINISTRATOR, e)
      })),
      s = (0, a.e7)([x.ZP], () => null != e ? x.ZP.getChannels(e.id) : null),
      c = i.useMemo(S.jb, []),
      f = true !== o.K.get(Z);
    if (null == e) return null;
    let b = [];
    null != s && s[x.sH].forEach(e => {
      let {
        channel: t
      } = e;
      t.type === _.d4z.GUILD_TEXT && b.push({
        value: t.id,
        label: (0, p.F6)(t, y.default, C.Z, true)
      })
    });
    let h = () => {
        if (null == e) return;
        let t = new Set(e.features);
        t.delete(_.GuildFeatures.COMMUNITY), t.delete(_.GuildFeatures.DISCOVERABLE), t.delete(_.GuildFeatures.PREVIEW_ENABLED), N.Z.updateGuild({
          features: t,
          rulesChannelId: null,
          publicUpdatesChannelId: null
        })
      },
      j = e => {
        N.Z.updateGuild({
          description: e
        })
      };
    return (0, r.jsxs)(m.Kqy, {
      gap: 24,
      children: [(0, r.jsx)(m.Heading, {
        variant: "heading-lg/semibold",
        children: T.intl.string(T.t.nRtNqn)
      }), f ? (0, r.jsx)(D, {
        discoveryEnabled: e.features.has(_.GuildFeatures.DISCOVERABLE),
        onboardingEnabled: e.features.has(_.GuildFeatures.GUILD_ONBOARDING),
        guild: e
      }) : null, (0, r.jsx)(d.d, {
        layout: "horizontal-responsive",
        label: T.intl.string(T.t["otcXP/"]),
        description: T.intl.string(T.t.BtwmYB),
        value: e.rulesChannelId,
        options: b,
        onChange: e => {
          N.Z.updateGuild({
            rulesChannelId: e
          })
        },
        isDisabled: !t
      }), (0, r.jsx)(m.izJ, {}), (0, r.jsx)(d.d, {
        layout: "horizontal-responsive",
        label: T.intl.string(T.t.vAyDGU),
        description: T.intl.string(T.t.ZFeonu),
        value: e.publicUpdatesChannelId,
        options: b,
        onChange: e => {
          N.Z.updateGuild({
            publicUpdatesChannelId: e
          })
        },
        isDisabled: !n
      }), (0, r.jsx)(m.izJ, {}), (0, r.jsx)(d.d, {
        layout: "horizontal-responsive",
        label: T.intl.string(T.t.sMkYE8),
        description: T.intl.string(T.t.htioQo),
        value: e.safetyAlertsChannelId,
        options: b,
        onChange: e => {
          N.Z.updateGuild({
            safetyAlertsChannelId: e
          })
        },
        isDisabled: !t
      }), (0, r.jsx)(m.izJ, {}), (0, r.jsx)(d.d, {
        layout: "horizontal-responsive",
        label: T.intl.string(T.t.pO60fy),
        description: T.intl.string(T.t.aIR73T),
        value: e.preferredLocale,
        options: c,
        onChange: e => {
          N.Z.updateGuild({
            preferredLocale: e
          })
        },
        isDisabled: !t
      }), (0, r.jsx)(m.izJ, {}), (() => {
        var n;
        if (null != e) return (0, r.jsx)(m.Kx8, {
          label: T.intl.string(T.t["RSfm+i"]),
          description: T.intl.string(T.t["/B6PRw"]),
          value: null != (n = e.description) ? n : "",
          placeholder: T.intl.string(T.t.Nvfowl),
          onChange: j,
          maxLength: l.Us,
          disabled: !t
        })
      })(), (0, r.jsx)(m.izJ, {}), (0, r.jsx)(m.gNt, {
        label: T.intl.string(T.t.c1BmbC),
        description: T.intl.string(T.t.aQzVF8),
        layout: "horizontal",
        children: (0, r.jsx)(g.u, {
          text: n ? null : T.intl.string(T.t["pjG+T3"]),
          "aria-label": n ? true : T.intl.string(T.t["pjG+T3"]),
          children: (0, r.jsx)(m.Button, {
            variant: "critical-primary",
            size: "sm",
            text: T.intl.string(T.t.c1BmbC),
            onClick: () => {
              e.features.has(_.GuildFeatures.DISCOVERABLE) && e.features.has(_.GuildFeatures.PARTNERED) ? (0, u.Z)({
                title: T.intl.string(T.t.iBnVHc),
                subtitle: T.intl.string(T.t["P+Sh8V"]),
                confirmText: T.intl.string(T.t["cY+Oob"]),
                cancelText: T.intl.string(T.t.oEAioF),
                onConfirm: h
              }) : e.features.has(_.GuildFeatures.DISCOVERABLE) ? (0, u.Z)({
                title: T.intl.string(T.t.iBnVHc),
                subtitle: T.intl.string(T.t["eMx/uZ"]),
                confirmText: T.intl.string(T.t["cY+Oob"]),
                cancelText: T.intl.string(T.t.oEAioF),
                onConfirm: h
              }) : e.features.has(_.GuildFeatures.PARTNERED) ? (0, u.Z)({
                title: T.intl.string(T.t.iBnVHc),
                subtitle: T.intl.string(T.t.l1wLeX),
                confirmText: T.intl.string(T.t["cY+Oob"]),
                cancelText: T.intl.string(T.t.oEAioF),
                onConfirm: h
              }) : h()
            },
            disabled: !n
          })
        })
      })]
    })
  },
  L = () => {
    let e = (0, a.e7)([E.Z], () => E.Z.getGuild());
    return null == e ? null : e.features.has(_.GuildFeatures.COMMUNITY) ? (0, r.jsx)(A, {}) : (0, r.jsx)(I.Z, {
      guild: e
    })
  }