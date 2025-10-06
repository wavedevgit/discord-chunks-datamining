/** Chunk was on 64982 **/
/** chunk id: 822591, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  X: () => A,
  Z: () => G
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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

function R(e) {
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

function Z(e, t) {
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
let D = "dismissedCommunityFeaturesUpsell",
  A = () => {
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
      s = Chunk120356.length > 0 ? Chunk120356[0] : null;
    return e = "rules_channel_id" === s ? Chunk388032.intl.string(Chunk388032.t["7IrBYm"]) : null != s ? Chunk647438[s] : true, (0, Chunk951288.jsx)(Chunk852860.Z, {
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
  L = e => {
    let {
      discoveryEnabled: t,
      onboardingEnabled: n,
      guild: l
    } = e, [s, a] = i.useState(true === d.K.get(D)), u = (0, o.e7)([j.Z], () => {
      var e;
      return null != (e = j.Z.getMemberCount(l.id)) ? e : 0
    }), [p, h] = i.useState(false);
    (0, f.ZP)(() => {
      c.tn.get({
        url: S.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
        rejectWithError: true
      }).then(e => {
        h(e.body.eligible_for_admin_server)
      }).catch(() => h(false))
    });
    let b = (0, o.e7)([_.Z], () => _.Z.getGuild("942897714956472401")),
      v = l.features.has(S.oNc.COMMUNITY) && u >= 1e3 && p && null == b;
    if (t && n && !v) return null;
    let C = async () => {
      try {
        let e = await c.tn.post({
          url: S.ANM.JOIN_ADMIN_SERVER(l.id),
          oldFormErrors: true,
          rejectWithError: true
        });
        y.Z.close(), (0, x.X)(e.body.id)
      } catch (e) {}
    };
    return s && !v ? null : (0, r.jsxs)("div", {
      className: P.upsellContainer,
      children: [(0, r.jsxs)("div", {
        className: P.upsellContent,
        children: [(0, r.jsx)("img", {
          src: w,
          alt: "",
          width: 60,
          className: P.upsellImage
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(g.X6q, {
            variant: "heading-md/semibold",
            className: P.upsellHeader,
            children: T.intl.string(T.t["pR/BgY"])
          }), (0, r.jsx)(g.Text, {
            variant: "text-sm/normal",
            children: T.intl.string(T.t["V+Yo1t"])
          })]
        })]
      }), (0, r.jsx)(m.zx, {
        "aria-label": T.intl.string(T.t.cpT0Cg),
        look: m.zx.Looks.BLANK,
        size: m.zx.Sizes.NONE,
        className: P.upsellClose,
        onClick: () => {
          d.K.set(D, true), a(true)
        },
        children: (0, r.jsx)(g.Dio, {
          size: "md",
          color: "currentColor"
        })
      }), (0, r.jsxs)("div", {
        className: P.upsellFooter,
        children: [v && (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: P.upsellButton,
          children: (0, r.jsx)(g.zxk, {
            variant: "primary",
            size: "sm",
            text: T.intl.string(T.t.iF1Asr),
            onClick: C
          })
        }), n ? null : (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: P.upsellButton,
          children: (0, r.jsx)(g.zxk, {
            variant: "primary",
            size: "sm",
            text: T.intl.string(T.t["S/DfiY"]),
            onClick: () => {
              y.Z.setSection(S.pNK.ONBOARDING)
            }
          })
        }), t ? null : (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: P.upsellButton,
          children: (0, r.jsx)(g.zxk, {
            variant: "secondary",
            size: "sm",
            text: T.intl.string(T.t["0kmJd3"]),
            onClick: () => {
              y.Z.setSection(S.pNK.ACCESS, S.KsC.ACCESS_DISCOVERABLE)
            }
          })
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: P.upsellButton,
          children: (0, r.jsx)(g.zxk, {
            variant: "secondary",
            size: "sm",
            text: T.intl.string(T.t.BQIYTU),
            onClick: () => {
              y.Z.setSection(S.pNK.ANALYTICS)
            }
          })
        })]
      })]
    })
  },
  k = () => {
    let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
      {
        canManageGuild: t,
        isGuildAdmin: n
      } = (0, Chunk442837.cj)([Chunk496675.Z], () => ({
        canManageGuild: Chunk496675.Z.can(Chunk981631.Plq.MANAGE_GUILD, module),
        isGuildAdmin: Chunk496675.Z.can(Chunk981631.Plq.ADMINISTRATOR, module)
      })),
      l = (0, Chunk442837.e7)([Chunk984933.ZP], () => null != module ? Chunk984933.ZP.getChannels(module.id) : null),
      c = Chunk647438.useMemo(Chunk929834.jb, []),
      m = true !== Chunk433517.K.get(D);
    if (null == module) return null;
    let p = [];
    null != Chunk120356 && Chunk120356[Chunk984933.sH].forEach(e => {
      let {
        channel: t
      } = e;
      t.type === S.d4z.GUILD_TEXT && p.push({
        value: t.id,
        label: (0, h.F6)(t, O.default, C.Z, true)
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
        y.Z.updateGuild({
          description: e
        })
      };
    return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: Chunk388032.intl.string(Chunk388032.t.nRtNqq),
      tag: Chunk481060.RB0.H1,
      children: [Chunk755721 ? (0, Chunk951288.jsx)(L, {
        discoveryEnabled: module.features.has(Chunk981631.oNc.DISCOVERABLE),
        onboardingEnabled: module.features.has(Chunk981631.oNc.GUILD_ONBOARDING),
        guild: module
      }) : null, (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: s()(Chunk560818.twoColumnFormSection, Chunk560818.firstSection),
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk560818.descriptionColumn,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            className: Chunk560818.formTitle,
            children: Chunk388032.intl.string(Chunk388032.t.otcXPz)
          }), (0, Chunk951288.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            children: Chunk388032.intl.string(Chunk388032.t.BtwmYG)
          })]
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk560818.selectColumn,
          children: (0, Chunk951288.jsx)(Chunk481060.VcW, {
            value: module.rulesChannelId,
            options: Chunk852860,
            onChange: e => {
              y.Z.updateGuild({
                rulesChannelId: e
              })
            },
            isDisabled: !exports
          })
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
        className: Chunk560818.divider
      }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: s()(Chunk560818.twoColumnFormSection, Chunk560818.firstSection),
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk560818.descriptionColumn,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            className: Chunk560818.formTitle,
            children: Chunk388032.intl.string(Chunk388032.t.vAyDGR)
          }), (0, Chunk951288.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            className: Chunk560818.__invalid_formDescription,
            children: Chunk388032.intl.string(Chunk388032.t.ZFeonp)
          })]
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk560818.selectColumn,
          children: (0, Chunk951288.jsx)(Chunk481060.VcW, {
            value: module.publicUpdatesChannelId,
            options: Chunk852860,
            onChange: e => {
              y.Z.updateGuild({
                publicUpdatesChannelId: e
              })
            },
            isDisabled: !require
          })
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
        className: Chunk560818.divider
      }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: s()(Chunk560818.twoColumnFormSection, Chunk560818.firstSection),
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk560818.descriptionColumn,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            className: Chunk560818.formTitle,
            children: Chunk388032.intl.string(Chunk388032.t.sMkYEx)
          }), (0, Chunk951288.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            className: Chunk560818.__invalid_formDescription,
            children: Chunk388032.intl.string(Chunk388032.t.htioQk)
          })]
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk560818.selectColumn,
          children: (0, Chunk951288.jsx)(Chunk481060.VcW, {
            value: module.safetyAlertsChannelId,
            options: Chunk852860,
            onChange: e => {
              y.Z.updateGuild({
                safetyAlertsChannelId: e
              })
            },
            isDisabled: !exports
          })
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
        className: Chunk560818.divider
      }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: Chunk560818.twoColumnFormSection,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk560818.descriptionColumn,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            className: Chunk560818.formTitle,
            children: Chunk388032.intl.string(Chunk388032.t.pO60f3)
          }), (0, Chunk951288.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            className: Chunk560818.__invalid_formDescription,
            children: Chunk388032.intl.string(Chunk388032.t.aIR73d)
          })]
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk560818.selectColumn,
          children: (0, Chunk951288.jsx)(Chunk481060.VcW, {
            value: module.preferredLocale,
            options: Chunk544891,
            onChange: e => {
              y.Z.updateGuild({
                preferredLocale: e
              })
            },
            isDisabled: !exports
          })
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
        className: Chunk560818.divider
      }), (() => {
        var n;
        if (null != module) return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            className: Chunk560818.formTitle,
            children: Chunk388032.intl.string(Chunk388032.t["RSfm+v"])
          }), (0, Chunk951288.jsx)(Chunk481060.R94, {
            className: Chunk560818.description,
            type: Chunk481060.geA.DESCRIPTION,
            children: Chunk388032.intl.string(Chunk388032.t["/B6PR0"])
          }), (0, Chunk951288.jsx)(Chunk481060.Kx8, {
            value: null != (n = module.description) ? require : "",
            placeholder: Chunk388032.intl.string(Chunk388032.t.Nvfows),
            onChange: Chunk769654,
            maxLength: Chunk345074.Us,
            disabled: !exports
          })]
        })
      })(), (0, Chunk951288.jsx)(Chunk481060.izJ, {
        className: Chunk560818.divider
      }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: Chunk560818.twoColumnFormSection,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk560818.descriptionColumn,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            className: Chunk560818.formTitle,
            children: Chunk388032.intl.string(Chunk388032.t.c1BmbG)
          }), (0, Chunk951288.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            className: Chunk560818.__invalid_formDescription,
            children: Chunk388032.intl.string(Chunk388032.t.aQzVFx)
          })]
        }), (0, Chunk951288.jsx)(Chunk28664.u, {
          text: require ? null : Chunk388032.intl.string(Chunk388032.t["pjG+T0"]),
          "aria-label": require ? true : Chunk388032.intl.string(Chunk388032.t["pjG+T0"]),
          children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "critical-primary",
            size: "sm",
            text: Chunk388032.intl.string(Chunk388032.t.c1BmbG),
            onClick: () => {
              module.features.has(Chunk981631.oNc.DISCOVERABLE) && module.features.has(Chunk981631.oNc.PARTNERED) ? (0, Chunk481060.h7j)(e => (0, r.jsx)(g.ConfirmModal, Z(R({}, e), {
                header: T.intl.string(T.t.iBnVHR),
                confirmText: T.intl.string(T.t["cY+Ooa"]),
                cancelText: T.intl.string(T.t.oEAioK),
                onConfirm: f,
                children: (0, r.jsx)(g.Text, {
                  variant: "text-sm/normal",
                  children: T.intl.string(T.t["P+Sh8f"])
                })
              }))) : module.features.has(Chunk981631.oNc.DISCOVERABLE) ? (0, Chunk481060.h7j)(e => (0, r.jsx)(g.ConfirmModal, Z(R({}, e), {
                header: T.intl.string(T.t.iBnVHR),
                confirmText: T.intl.string(T.t["cY+Ooa"]),
                cancelText: T.intl.string(T.t.oEAioK),
                onConfirm: f,
                children: (0, r.jsx)(g.Text, {
                  variant: "text-sm/normal",
                  children: T.intl.string(T.t["eMx/ub"])
                })
              }))) : module.features.has(Chunk981631.oNc.PARTNERED) ? (0, Chunk481060.h7j)(e => (0, r.jsx)(g.ConfirmModal, Z(R({}, e), {
                header: T.intl.string(T.t.iBnVHR),
                confirmText: T.intl.string(T.t["cY+Ooa"]),
                cancelText: T.intl.string(T.t.oEAioK),
                onConfirm: f,
                children: (0, r.jsx)(g.Text, {
                  variant: "text-sm/normal",
                  children: T.intl.string(T.t.l1wLeX)
                })
              }))) : Chunk493773()
            },
            disabled: !require
          })
        })]
      })]
    })
  },
  G = () => {
    let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild());
    return null == module ? null : module.features.has(Chunk981631.oNc.COMMUNITY) ? (0, Chunk951288.jsx)(k, {}) : (0, Chunk951288.jsx)(Chunk906512.Z, {
      guild: module
    })
  }