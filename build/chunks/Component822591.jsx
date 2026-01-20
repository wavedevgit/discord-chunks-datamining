/** Chunk was on 9536 **/
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
  Chunk156120 = require("./156120.js"),
  Chunk922905 = require("./922905.js");
let w = "dismissedCommunityFeaturesUpsell",
  Z = () => {
    let e, {
        guild: t,
        submitting: n,
        errors: i
      } = (0, a.cj)([N.Z], () => ({
        submitting: N.Z.isSubmitting(),
        guild: N.Z.getGuild(),
        errors: N.Z.getErrors()
      })),
      l = Object.keys(i),
      s = l.length > 0 ? l[0] : null;
    return e = "rules_channel_id" === s ? _.intl.string(_.t["7IrBYt"]) : null != s ? i[s] : true, (0, r.jsx)(c.Z, {
      submitting: n,
      onReset: () => {
        null != t && C.Z.init(t.id)
      },
      onSave: () => {
        null != t && C.Z.saveGuild(t.id, {
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
  R = e => {
    let {
      discoveryEnabled: t,
      onboardingEnabled: n,
      guild: l
    } = e, [c, d] = i.useState(true === o.K.get(w)), u = (0, a.e7)([x.Z], () => {
      var e;
      return null != (e = x.Z.getMemberCount(l.id)) ? e : 0
    }), [b, h] = i.useState(false);
    (0, m.ZP)(() => {
      s.tn.get({
        url: S.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
        rejectWithError: true
      }).then(e => {
        h(e.body.eligible_for_admin_server)
      }).catch(() => h(false))
    });
    let v = (0, a.e7)([j.Z], () => j.Z.getGuild("942897714956472401")),
      O = l.features.has(S.GuildFeatures.COMMUNITY) && u >= 1e3 && b && null == v;
    if (t && n && !O) return null;
    let y = async () => {
      try {
        let e = await s.tn.post({
          url: S.ANM.JOIN_ADMIN_SERVER(l.id),
          oldFormErrors: true,
          rejectWithError: true
        });
        C.Z.close(), (0, p.X)(e.body.id)
      } catch (e) {}
    };
    return c && !O ? null : (0, r.jsxs)("div", {
      className: T.upsellContainer,
      children: [(0, r.jsxs)("div", {
        className: T.upsellContent,
        children: [(0, r.jsx)("img", {
          src: P,
          alt: "",
          width: 60,
          className: T.upsellImage
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(f.Heading, {
            variant: "heading-md/semibold",
            className: T.upsellHeader,
            children: _.intl.string(_.t["pR/Bge"])
          }), (0, r.jsx)(f.Text, {
            variant: "text-sm/normal",
            children: _.intl.string(_.t["V+Yo1l"])
          })]
        })]
      }), (0, r.jsx)(g.zx, {
        "aria-label": _.intl.string(_.t.cpT0Cq),
        look: g.zx.Looks.BLANK,
        size: g.zx.Sizes.NONE,
        className: T.upsellClose,
        onClick: () => {
          o.K.set(w, true), d(true)
        },
        children: (0, r.jsx)(f.Dio, {
          size: "md",
          color: "currentColor"
        })
      }), (0, r.jsxs)("div", {
        className: T.upsellFooter,
        children: [O && (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: T.upsellButton,
          children: (0, r.jsx)(f.Button, {
            variant: "primary",
            size: "sm",
            text: _.intl.string(_.t.iF1Asi),
            onClick: y
          })
        }), n ? null : (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: T.upsellButton,
          children: (0, r.jsx)(f.Button, {
            variant: "primary",
            size: "sm",
            text: _.intl.string(_.t["S/Dfid"]),
            onClick: () => {
              C.Z.setSection(S.pNK.ONBOARDING)
            }
          })
        }), t ? null : (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: T.upsellButton,
          children: (0, r.jsx)(f.Button, {
            variant: "secondary",
            size: "sm",
            text: _.intl.string(_.t["0kmJdw"]),
            onClick: () => {
              C.Z.setSection(S.pNK.ACCESS, S.KsC.ACCESS_DISCOVERABLE)
            }
          })
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: T.upsellButton,
          children: (0, r.jsx)(f.Button, {
            variant: "secondary",
            size: "sm",
            text: _.intl.string(_.t.BQIYTb),
            onClick: () => {
              C.Z.setSection(S.pNK.ANALYTICS)
            }
          })
        })]
      })]
    })
  },
  D = () => {
    var e, t, n;
    let s = (0, a.e7)([N.Z], () => N.Z.getGuild()),
      {
        canManageGuild: c,
        isGuildAdmin: g
      } = (0, a.cj)([v.Z], () => ({
        canManageGuild: v.Z.can(S.Plq.MANAGE_GUILD, s),
        isGuildAdmin: v.Z.can(S.Plq.ADMINISTRATOR, s)
      })),
      m = (0, a.e7)([h.ZP], () => null != s ? h.ZP.getChannels(s.id) : null),
      p = i.useMemo(I.jb, []),
      x = true !== o.K.get(w);
    if (null == s) return null;
    let j = [];
    null != m && m[h.sH].forEach(e => {
      let {
        channel: t
      } = e;
      t.type === S.d4z.GUILD_TEXT && j.push({
        id: t.id,
        value: t.id,
        label: (0, b.F6)(t, y.default, O.Z, true)
      })
    });
    let E = () => {
        if (null == s) return;
        let e = new Set(s.features);
        e.delete(S.GuildFeatures.COMMUNITY), e.delete(S.GuildFeatures.DISCOVERABLE), e.delete(S.GuildFeatures.PREVIEW_ENABLED), C.Z.updateGuild({
          features: e,
          rulesChannelId: null,
          publicUpdatesChannelId: null
        })
      },
      T = e => {
        C.Z.updateGuild({
          description: e
        })
      };
    return (0, r.jsxs)(f.Kqy, {
      gap: 24,
      children: [(0, r.jsx)(f.Heading, {
        variant: "heading-lg/semibold",
        children: _.intl.string(_.t.nRtNqn)
      }), x ? (0, r.jsx)(R, {
        discoveryEnabled: s.features.has(S.GuildFeatures.DISCOVERABLE),
        onboardingEnabled: s.features.has(S.GuildFeatures.GUILD_ONBOARDING),
        guild: s
      }) : null, (0, r.jsx)(f.VcW, {
        selectionMode: "single",
        layout: "horizontal-responsive",
        label: _.intl.string(_.t["otcXP/"]),
        description: _.intl.string(_.t.BtwmYB),
        value: null != (e = s.rulesChannelId) ? e : true,
        options: j,
        onSelectionChange: e => {
          C.Z.updateGuild({
            rulesChannelId: e
          })
        },
        disabled: !c
      }), (0, r.jsx)(f.izJ, {}), (0, r.jsx)(f.VcW, {
        selectionMode: "single",
        layout: "horizontal-responsive",
        label: _.intl.string(_.t.vAyDGU),
        description: _.intl.string(_.t.ZFeonu),
        value: null != (t = s.publicUpdatesChannelId) ? t : true,
        options: j,
        onSelectionChange: e => {
          C.Z.updateGuild({
            publicUpdatesChannelId: e
          })
        },
        disabled: !g
      }), (0, r.jsx)(f.izJ, {}), (0, r.jsx)(f.VcW, {
        selectionMode: "single",
        layout: "horizontal-responsive",
        label: _.intl.string(_.t.sMkYE8),
        description: _.intl.string(_.t.htioQo),
        value: null != (n = s.safetyAlertsChannelId) ? n : true,
        options: j,
        onSelectionChange: e => {
          C.Z.updateGuild({
            safetyAlertsChannelId: e
          })
        },
        disabled: !c
      }), (0, r.jsx)(f.izJ, {}), (0, r.jsx)(f.VcW, {
        selectionMode: "single",
        layout: "horizontal-responsive",
        label: _.intl.string(_.t.pO60fy),
        description: _.intl.string(_.t.aIR73T),
        value: s.preferredLocale,
        options: p,
        onSelectionChange: e => {
          C.Z.updateGuild({
            preferredLocale: e
          })
        },
        disabled: !c
      }), (0, r.jsx)(f.izJ, {}), (() => {
        var e;
        if (null != s) return (0, r.jsx)(f.Kx8, {
          label: _.intl.string(_.t["RSfm+i"]),
          description: _.intl.string(_.t["/B6PRw"]),
          value: null != (e = s.description) ? e : "",
          placeholder: _.intl.string(_.t.Nvfowl),
          onChange: T,
          maxLength: l.Us,
          disabled: !c
        })
      })(), (0, r.jsx)(f.izJ, {}), (0, r.jsx)(f.gNt, {
        label: _.intl.string(_.t.c1BmbC),
        description: _.intl.string(_.t.aQzVF8),
        layout: "horizontal",
        children: (0, r.jsx)(u.u, {
          text: g ? null : _.intl.string(_.t["pjG+T3"]),
          "aria-label": g ? true : _.intl.string(_.t["pjG+T3"]),
          children: (0, r.jsx)(f.Button, {
            variant: "critical-primary",
            size: "sm",
            text: _.intl.string(_.t.c1BmbC),
            onClick: () => {
              s.features.has(S.GuildFeatures.DISCOVERABLE) && s.features.has(S.GuildFeatures.PARTNERED) ? (0, d.Z)({
                title: _.intl.string(_.t.iBnVHc),
                subtitle: _.intl.string(_.t["P+Sh8V"]),
                confirmText: _.intl.string(_.t["cY+Oob"]),
                cancelText: _.intl.string(_.t.oEAioF),
                onConfirm: E
              }) : s.features.has(S.GuildFeatures.DISCOVERABLE) ? (0, d.Z)({
                title: _.intl.string(_.t.iBnVHc),
                subtitle: _.intl.string(_.t["eMx/uZ"]),
                confirmText: _.intl.string(_.t["cY+Oob"]),
                cancelText: _.intl.string(_.t.oEAioF),
                onConfirm: E
              }) : s.features.has(S.GuildFeatures.PARTNERED) ? (0, d.Z)({
                title: _.intl.string(_.t.iBnVHc),
                subtitle: _.intl.string(_.t.l1wLeX),
                confirmText: _.intl.string(_.t["cY+Oob"]),
                cancelText: _.intl.string(_.t.oEAioF),
                onConfirm: E
              }) : E()
            },
            disabled: !g
          })
        })
      })]
    })
  },
  A = () => {
    let e = (0, a.e7)([N.Z], () => N.Z.getGuild());
    return null == e ? null : e.features.has(S.GuildFeatures.COMMUNITY) ? (0, r.jsx)(D, {}) : (0, r.jsx)(E.Z, {
      guild: e
    })
  }