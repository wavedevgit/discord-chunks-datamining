/** Chunk was on 64982 **/
/** chunk id: 822591, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  X: () => Z,
  Z: () => L
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk345074 = require("./345074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk433517 = require("./433517.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk852860 = require("./852860.jsx"),
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

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let R = "dismissedCommunityFeaturesUpsell",
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
      l = Object.keys(Chunk647438),
      a = Chunk345074.length > 0 ? Chunk345074[0] : null;
    return e = "rules_channel_id" === Chunk544891 ? Chunk388032.intl.string(Chunk388032.t["7IrBYm"]) : null != Chunk544891 ? Chunk647438[Chunk544891] : true, (0, Chunk951288.jsx)(Chunk852860.Z, {
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
  D = e => {
    let {
      discoveryEnabled: t,
      onboardingEnabled: n,
      guild: l
    } = e, [c, g] = i.useState(true === o.K.get(R)), p = (0, s.e7)([x.Z], () => {
      var e;
      return null != (e = x.Z.getMemberCount(l.id)) ? e : 0
    }), [h, j] = i.useState(false);
    (0, m.ZP)(() => {
      a.tn.get({
        url: E.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
        rejectWithError: true
      }).then(e => {
        j(e.body.eligible_for_admin_server)
      }).catch(() => j(false))
    });
    let _ = (0, s.e7)([b.Z], () => b.Z.getGuild("942897714956472401")),
      v = l.features.has(E.oNc.COMMUNITY) && p >= 1e3 && h && null == _;
    if (t && n && !v) return null;
    let O = async () => {
      try {
        let e = await a.tn.post({
          url: E.ANM.JOIN_ADMIN_SERVER(l.id),
          oldFormErrors: true,
          rejectWithError: true
        });
        C.Z.close(), (0, f.X)(e.body.id)
      } catch (e) {}
    };
    return c && !v ? null : (0, r.jsxs)("div", {
      className: S.upsellContainer,
      children: [(0, r.jsxs)("div", {
        className: S.upsellContent,
        children: [(0, r.jsx)("img", {
          src: T,
          alt: "",
          width: 60,
          className: S.upsellImage
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(u.X6q, {
            variant: "heading-md/semibold",
            className: S.upsellHeader,
            children: I.intl.string(I.t["pR/BgY"])
          }), (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: I.intl.string(I.t["V+Yo1t"])
          })]
        })]
      }), (0, r.jsx)(d.zx, {
        "aria-label": I.intl.string(I.t.cpT0Cg),
        look: d.zx.Looks.BLANK,
        size: d.zx.Sizes.NONE,
        className: S.upsellClose,
        onClick: () => {
          o.K.set(R, true), g(true)
        },
        children: (0, r.jsx)(u.Dio, {
          size: "md",
          color: "currentColor"
        })
      }), (0, r.jsxs)("div", {
        className: S.upsellFooter,
        children: [v && (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: S.upsellButton,
          children: (0, r.jsx)(u.zxk, {
            variant: "primary",
            size: "sm",
            text: I.intl.string(I.t.iF1Asr),
            onClick: O
          })
        }), n ? null : (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: S.upsellButton,
          children: (0, r.jsx)(u.zxk, {
            variant: "primary",
            size: "sm",
            text: I.intl.string(I.t["S/DfiY"]),
            onClick: () => {
              C.Z.setSection(E.pNK.ONBOARDING)
            }
          })
        }), t ? null : (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: S.upsellButton,
          children: (0, r.jsx)(u.zxk, {
            variant: "secondary",
            size: "sm",
            text: I.intl.string(I.t["0kmJd3"]),
            onClick: () => {
              C.Z.setSection(E.pNK.ACCESS, E.KsC.ACCESS_DISCOVERABLE)
            }
          })
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: S.upsellButton,
          children: (0, r.jsx)(u.zxk, {
            variant: "secondary",
            size: "sm",
            text: I.intl.string(I.t.BQIYTU),
            onClick: () => {
              C.Z.setSection(E.pNK.ANALYTICS)
            }
          })
        })]
      })]
    })
  },
  A = () => {
    let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
      {
        canManageGuild: t,
        isGuildAdmin: n
      } = (0, Chunk442837.cj)([Chunk496675.Z], () => ({
        canManageGuild: Chunk496675.Z.can(Chunk981631.Plq.MANAGE_GUILD, module),
        isGuildAdmin: Chunk496675.Z.can(Chunk981631.Plq.ADMINISTRATOR, module)
      })),
      a = (0, Chunk442837.e7)([Chunk984933.ZP], () => null != module ? Chunk984933.ZP.getChannels(module.id) : null),
      d = Chunk647438.useMemo(Chunk929834.jb, []),
      g = true !== Chunk433517.K.get(R);
    if (null == module) return null;
    let m = [];
    null != Chunk544891 && Chunk544891[Chunk984933.sH].forEach(e => {
      let {
        channel: t
      } = e;
      t.type === E.d4z.GUILD_TEXT && m.push({
        value: t.id,
        label: (0, p.F6)(t, v.default, _.Z, true)
      })
    });
    let f = () => {
        if (null == module) return;
        let t = new Set(module.features);
        exports.delete(Chunk981631.oNc.COMMUNITY), exports.delete(Chunk981631.oNc.DISCOVERABLE), exports.delete(Chunk981631.oNc.PREVIEW_ENABLED), Chunk434404.Z.updateGuild({
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
    return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: Chunk388032.intl.string(Chunk388032.t.nRtNqq),
      tag: Chunk481060.RB0.H1,
      children: [Chunk852860 ? (0, Chunk951288.jsx)(D, {
        discoveryEnabled: module.features.has(Chunk981631.oNc.DISCOVERABLE),
        onboardingEnabled: module.features.has(Chunk981631.oNc.GUILD_ONBOARDING),
        guild: module
      }) : null, (0, Chunk951288.jsx)(Chunk481060.VcW, {
        layout: "horizontal",
        label: Chunk388032.intl.string(Chunk388032.t.otcXPz),
        description: Chunk388032.intl.string(Chunk388032.t.BtwmYG),
        value: module.rulesChannelId,
        options: Chunk493773,
        onChange: e => {
          C.Z.updateGuild({
            rulesChannelId: e
          })
        },
        isDisabled: !exports
      }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
        className: Chunk560818.divider
      }), (0, Chunk951288.jsx)(Chunk481060.VcW, {
        layout: "horizontal",
        label: Chunk388032.intl.string(Chunk388032.t.vAyDGR),
        description: Chunk388032.intl.string(Chunk388032.t.ZFeonp),
        value: module.publicUpdatesChannelId,
        options: Chunk493773,
        onChange: e => {
          C.Z.updateGuild({
            publicUpdatesChannelId: e
          })
        },
        isDisabled: !require
      }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
        className: Chunk560818.divider
      }), (0, Chunk951288.jsx)(Chunk481060.VcW, {
        layout: "horizontal",
        label: Chunk388032.intl.string(Chunk388032.t.sMkYEx),
        description: Chunk388032.intl.string(Chunk388032.t.htioQk),
        value: module.safetyAlertsChannelId,
        options: Chunk493773,
        onChange: e => {
          C.Z.updateGuild({
            safetyAlertsChannelId: e
          })
        },
        isDisabled: !exports
      }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
        className: Chunk560818.divider
      }), (0, Chunk951288.jsx)(Chunk481060.VcW, {
        layout: "horizontal",
        label: Chunk388032.intl.string(Chunk388032.t.pO60f3),
        description: Chunk388032.intl.string(Chunk388032.t.aIR73d),
        value: module.preferredLocale,
        options: Chunk755721,
        onChange: e => {
          C.Z.updateGuild({
            preferredLocale: e
          })
        },
        isDisabled: !exports
      }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
        className: Chunk560818.divider
      }), (() => {
        var n;
        if (null != module) return (0, Chunk951288.jsx)(Chunk481060.Kx8, {
          label: Chunk388032.intl.string(Chunk388032.t["RSfm+v"]),
          description: Chunk388032.intl.string(Chunk388032.t["/B6PR0"]),
          value: null != (n = module.description) ? require : "",
          placeholder: Chunk388032.intl.string(Chunk388032.t.Nvfows),
          onChange: Chunk650774,
          maxLength: Chunk345074.Us,
          disabled: !exports
        })
      })(), (0, Chunk951288.jsx)(Chunk481060.izJ, {
        className: Chunk560818.divider
      }), (0, Chunk951288.jsx)(Chunk481060.NIc, {
        label: Chunk388032.intl.string(Chunk388032.t.c1BmbG),
        description: Chunk388032.intl.string(Chunk388032.t.aQzVFx),
        layout: "horizontal",
        children: (0, Chunk951288.jsx)(Chunk28664.u, {
          text: require ? null : Chunk388032.intl.string(Chunk388032.t["pjG+T0"]),
          "aria-label": require ? true : Chunk388032.intl.string(Chunk388032.t["pjG+T0"]),
          children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "critical-primary",
            size: "sm",
            text: Chunk388032.intl.string(Chunk388032.t.c1BmbG),
            onClick: () => {
              module.features.has(Chunk981631.oNc.DISCOVERABLE) && module.features.has(Chunk981631.oNc.PARTNERED) ? (0, Chunk481060.h7j)(e => (0, r.jsx)(u.ConfirmModal, w(P({}, e), {
                header: I.intl.string(I.t.iBnVHR),
                confirmText: I.intl.string(I.t["cY+Ooa"]),
                cancelText: I.intl.string(I.t.oEAioK),
                onConfirm: f,
                children: (0, r.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  children: I.intl.string(I.t["P+Sh8f"])
                })
              }))) : module.features.has(Chunk981631.oNc.DISCOVERABLE) ? (0, Chunk481060.h7j)(e => (0, r.jsx)(u.ConfirmModal, w(P({}, e), {
                header: I.intl.string(I.t.iBnVHR),
                confirmText: I.intl.string(I.t["cY+Ooa"]),
                cancelText: I.intl.string(I.t.oEAioK),
                onConfirm: f,
                children: (0, r.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  children: I.intl.string(I.t["eMx/ub"])
                })
              }))) : module.features.has(Chunk981631.oNc.PARTNERED) ? (0, Chunk481060.h7j)(e => (0, r.jsx)(u.ConfirmModal, w(P({}, e), {
                header: I.intl.string(I.t.iBnVHR),
                confirmText: I.intl.string(I.t["cY+Ooa"]),
                cancelText: I.intl.string(I.t.oEAioK),
                onConfirm: f,
                children: (0, r.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  children: I.intl.string(I.t.l1wLeX)
                })
              }))) : Chunk769654()
            },
            disabled: !require
          })
        })
      })]
    })
  },
  L = () => {
    let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild());
    return null == module ? null : module.features.has(Chunk981631.oNc.COMMUNITY) ? (0, Chunk951288.jsx)(A, {}) : (0, Chunk951288.jsx)(Chunk906512.Z, {
      guild: module
    })
  }