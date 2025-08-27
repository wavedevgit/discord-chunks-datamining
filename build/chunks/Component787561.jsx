/** Chunk was on 88479 **/
/** chunk id: 787561, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => D,
  Z: () => k
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk345074 = require("./345074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk433517 = require("./433517.js"),
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
  Chunk54842 = require("./54842.jsx"),
  Chunk929834 = require("./929834.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk353343 = require("./353343.js"),
  Chunk922905 = require("./922905.js");

function w(e) {
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

function R(e, t) {
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
let Z = "dismissedCommunityFeaturesUpsell",
  D = () => {
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
      a = Chunk120356.length > 0 ? Chunk120356[0] : null;
    return e = "rules_channel_id" === a ? Chunk388032.intl.string(Chunk388032.t["7IrBYm"]) : null != a ? Chunk647438[a] : true, (0, Chunk951288.jsx)(Chunk852860.Z, {
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
  A = e => {
    let {
      discoveryEnabled: t,
      onboardingEnabled: n,
      guild: l
    } = e, [a, s] = i.useState(true === d.K.get(Z)), g = (0, o.e7)([x.Z], () => {
      var e;
      return null != (e = x.Z.getMemberCount(l.id)) ? e : 0
    }), [h, b] = i.useState(false);
    (0, p.ZP)(() => {
      c.tn.get({
        url: I.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
        rejectWithError: true
      }).then(e => {
        b(e.body.eligible_for_admin_server)
      }).catch(() => b(false))
    });
    let v = (0, o.e7)([j.Z], () => j.Z.getGuild("942897714956472401")),
      _ = l.features.has(I.oNc.COMMUNITY) && g >= 1e3 && h && null == v;
    if (t && n && !_) return null;
    let O = async () => {
      try {
        let e = await c.tn.post({
          url: I.ANM.JOIN_ADMIN_SERVER(l.id),
          oldFormErrors: true,
          rejectWithError: true
        });
        y.Z.close(), (0, f.X)(e.body.id)
      } catch (e) {}
    };
    return a && !_ ? null : (0, r.jsxs)("div", {
      className: T.upsellContainer,
      children: [(0, r.jsxs)("div", {
        className: T.upsellContent,
        children: [(0, r.jsx)("img", {
          src: P,
          alt: "",
          width: 60,
          className: T.upsellImage
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(m.X6q, {
            variant: "heading-md/semibold",
            className: T.upsellHeader,
            children: S.intl.string(S.t["pR/BgY"])
          }), (0, r.jsx)(m.Text, {
            variant: "text-sm/normal",
            children: S.intl.string(S.t["V+Yo1t"])
          })]
        })]
      }), (0, r.jsx)(u.zx, {
        "aria-label": S.intl.string(S.t.cpT0Cg),
        look: u.zx.Looks.BLANK,
        size: u.zx.Sizes.NONE,
        className: T.upsellClose,
        onClick: () => {
          d.K.set(Z, true), s(true)
        },
        children: (0, r.jsx)(m.Dio, {
          size: "md",
          color: "currentColor"
        })
      }), (0, r.jsxs)("div", {
        className: T.upsellFooter,
        children: [_ && (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: T.upsellButton,
          children: (0, r.jsx)(m.zxk, {
            variant: "primary",
            size: "sm",
            text: S.intl.string(S.t.iF1Asr),
            onClick: O
          })
        }), n ? null : (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: T.upsellButton,
          children: (0, r.jsx)(m.zxk, {
            variant: "primary",
            size: "sm",
            text: S.intl.string(S.t["S/DfiY"]),
            onClick: () => {
              y.Z.setSection(I.pNK.ONBOARDING)
            }
          })
        }), t ? null : (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: T.upsellButton,
          children: (0, r.jsx)(m.zxk, {
            variant: "secondary",
            size: "sm",
            text: S.intl.string(S.t["0kmJd3"]),
            onClick: () => {
              y.Z.setSection(I.pNK.ACCESS, I.KsC.ACCESS_DISCOVERABLE)
            }
          })
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: T.upsellButton,
          children: (0, r.jsx)(m.zxk, {
            variant: "secondary",
            size: "sm",
            text: S.intl.string(S.t.BQIYTU),
            onClick: () => {
              y.Z.setSection(I.pNK.ANALYTICS)
            }
          })
        })]
      })]
    })
  },
  L = () => {
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
      u = true !== Chunk433517.K.get(Z);
    if (null == module) return null;
    let g = [];
    null != Chunk120356 && Chunk120356[Chunk984933.sH].forEach(e => {
      let {
        channel: t
      } = e;
      t.type === I.d4z.GUILD_TEXT && g.push({
        value: t.id,
        label: (0, h.F6)(t, O.default, _.Z, true)
      })
    });
    let p = () => {
        if (null == module) return;
        let t = new Set(module.features);
        exports.delete(Chunk981631.oNc.COMMUNITY), exports.delete(Chunk981631.oNc.DISCOVERABLE), exports.delete(Chunk981631.oNc.PREVIEW_ENABLED), Chunk434404.Z.updateGuild({
          features: exports,
          rulesChannelId: null,
          publicUpdatesChannelId: null
        })
      },
      f = e => {
        y.Z.updateGuild({
          description: e
        })
      },
      x = () => {
        module.features.has(Chunk981631.oNc.DISCOVERABLE) && module.features.has(Chunk981631.oNc.PARTNERED) ? (0, Chunk481060.h7j)(e => (0, r.jsx)(m.ConfirmModal, R(w({}, e), {
          header: S.intl.string(S.t.iBnVHR),
          confirmText: S.intl.string(S.t["cY+Ooa"]),
          cancelText: S.intl.string(S.t.oEAioK),
          onConfirm: p,
          children: (0, r.jsx)(m.Text, {
            variant: "text-sm/normal",
            children: S.intl.string(S.t["P+Sh8f"])
          })
        }))) : module.features.has(Chunk981631.oNc.DISCOVERABLE) ? (0, Chunk481060.h7j)(e => (0, r.jsx)(m.ConfirmModal, R(w({}, e), {
          header: S.intl.string(S.t.iBnVHR),
          confirmText: S.intl.string(S.t["cY+Ooa"]),
          cancelText: S.intl.string(S.t.oEAioK),
          onConfirm: p,
          children: (0, r.jsx)(m.Text, {
            variant: "text-sm/normal",
            children: S.intl.string(S.t["eMx/ub"])
          })
        }))) : module.features.has(Chunk981631.oNc.PARTNERED) ? (0, Chunk481060.h7j)(e => (0, r.jsx)(m.ConfirmModal, R(w({}, e), {
          header: S.intl.string(S.t.iBnVHR),
          confirmText: S.intl.string(S.t["cY+Ooa"]),
          cancelText: S.intl.string(S.t.oEAioK),
          onConfirm: p,
          children: (0, r.jsx)(m.Text, {
            variant: "text-sm/normal",
            children: S.intl.string(S.t.l1wLeX)
          })
        }))) : Chunk493773()
      };
    return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: Chunk388032.intl.string(Chunk388032.t.nRtNqq),
      tag: Chunk481060.RB0.H1,
      children: [Chunk755721 ? (0, Chunk951288.jsx)(A, {
        discoveryEnabled: module.features.has(Chunk981631.oNc.DISCOVERABLE),
        onboardingEnabled: module.features.has(Chunk981631.oNc.GUILD_ONBOARDING),
        guild: module
      }) : null, (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: a()(Chunk353343.twoColumnFormSection, Chunk353343.firstSection),
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk353343.descriptionColumn,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            className: Chunk353343.formTitle,
            children: Chunk388032.intl.string(Chunk388032.t.otcXPz)
          }), (0, Chunk951288.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            children: Chunk388032.intl.string(Chunk388032.t.BtwmYG)
          })]
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk353343.selectColumn,
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
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk353343.divider
      }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: a()(Chunk353343.twoColumnFormSection, Chunk353343.firstSection),
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk353343.descriptionColumn,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            className: Chunk353343.formTitle,
            children: Chunk388032.intl.string(Chunk388032.t.vAyDGR)
          }), (0, Chunk951288.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            className: Chunk353343.__invalid_formDescription,
            children: Chunk388032.intl.string(Chunk388032.t.ZFeonp)
          })]
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk353343.selectColumn,
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
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk353343.divider
      }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: a()(Chunk353343.twoColumnFormSection, Chunk353343.firstSection),
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk353343.descriptionColumn,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            className: Chunk353343.formTitle,
            children: Chunk388032.intl.string(Chunk388032.t.sMkYEx)
          }), (0, Chunk951288.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            className: Chunk353343.__invalid_formDescription,
            children: Chunk388032.intl.string(Chunk388032.t.htioQk)
          })]
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk353343.selectColumn,
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
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk353343.divider
      }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: Chunk353343.twoColumnFormSection,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk353343.descriptionColumn,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            className: Chunk353343.formTitle,
            children: Chunk388032.intl.string(Chunk388032.t.pO60f3)
          }), (0, Chunk951288.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            className: Chunk353343.__invalid_formDescription,
            children: Chunk388032.intl.string(Chunk388032.t.aIR73d)
          })]
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk353343.selectColumn,
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
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk353343.divider
      }), (() => {
        var n;
        if (null != module) return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            className: Chunk353343.formTitle,
            children: Chunk388032.intl.string(Chunk388032.t["RSfm+v"])
          }), (0, Chunk951288.jsx)(Chunk481060.R94, {
            className: Chunk353343.description,
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
      })(), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk353343.divider
      }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: Chunk353343.twoColumnFormSection,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk353343.descriptionColumn,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            className: Chunk353343.formTitle,
            children: Chunk388032.intl.string(Chunk388032.t.c1BmbG)
          }), (0, Chunk951288.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            className: Chunk353343.__invalid_formDescription,
            children: Chunk388032.intl.string(Chunk388032.t.aQzVFx)
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
          text: require ? null : Chunk388032.intl.string(Chunk388032.t["pjG+T0"]),
          "aria-label": require ? true : Chunk388032.intl.string(Chunk388032.t["pjG+T0"]),
          children: e => (0, r.jsx)(m.zxk, w({
            variant: "critical-primary",
            size: "sm",
            text: S.intl.string(S.t.c1BmbG),
            onClick: x,
            disabled: !n
          }, e))
        })]
      })]
    })
  },
  k = () => {
    let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild());
    return null == module ? null : module.features.has(Chunk981631.oNc.COMMUNITY) ? (0, Chunk951288.jsx)(L, {}) : (0, Chunk951288.jsx)(Chunk54842.Z, {
      guild: module
    })
  }