/** Chunk was on 5533 **/
/** chunk id: 787561, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => Z,
  Z: () => k
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk48749 = require("./48749.js"),
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
      l = Object.keys(Chunk73800),
      a = Chunk120356.length > 0 ? Chunk120356[0] : null;
    return e = "rules_channel_id" === a ? Chunk388032.intl.string(Chunk388032.t["7IrBYm"]) : null != a ? Chunk73800[a] : true, (0, Chunk255367.jsx)(Chunk852860.Z, {
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
    } = e, [a, m] = i.useState(true === c.K.get(R)), p = (0, s.e7)([b.Z], () => {
      var e;
      return null != (e = b.Z.getMemberCount(l.id)) ? e : 0
    }), [f, j] = i.useState(false);
    (0, g.ZP)(() => {
      o.tn.get({
        url: I.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
        rejectWithError: true
      }).then(e => {
        j(e.body.eligible_for_admin_server)
      }).catch(() => j(false))
    });
    let v = (0, s.e7)([x.Z], () => x.Z.getGuild("942897714956472401")),
      _ = l.features.has(I.oNc.COMMUNITY) && p >= 1e3 && f && null == v;
    if (t && n && !_) return null;
    let y = async () => {
      try {
        let e = await o.tn.post({
          url: I.ANM.JOIN_ADMIN_SERVER(l.id),
          oldFormErrors: true,
          rejectWithError: true
        });
        O.Z.close(), (0, h.X)(e.body.id)
      } catch (e) {}
    };
    return a && !_ ? null : (0, r.jsxs)("div", {
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
            children: E.intl.string(E.t["pR/BgY"])
          }), (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: E.intl.string(E.t["V+Yo1t"])
          })]
        })]
      }), (0, r.jsx)(d.zx, {
        "aria-label": E.intl.string(E.t.cpT0Cg),
        look: d.zx.Looks.BLANK,
        size: d.zx.Sizes.NONE,
        className: S.upsellClose,
        onClick: () => {
          c.K.set(R, true), m(true)
        },
        children: (0, r.jsx)(u.Dio, {
          size: "md",
          color: "currentColor"
        })
      }), (0, r.jsxs)("div", {
        className: S.upsellFooter,
        children: [_ && (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: S.upsellButton,
          children: (0, r.jsx)(u.zxk, {
            variant: "primary",
            size: "sm",
            text: E.intl.string(E.t.iF1Asr),
            onClick: y
          })
        }), n ? null : (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: S.upsellButton,
          children: (0, r.jsx)(u.zxk, {
            variant: "primary",
            size: "sm",
            text: E.intl.string(E.t["S/DfiY"]),
            onClick: () => {
              O.Z.setSection(I.pNK.ONBOARDING)
            }
          })
        }), t ? null : (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: S.upsellButton,
          children: (0, r.jsx)(u.zxk, {
            variant: "secondary",
            size: "sm",
            text: E.intl.string(E.t["0kmJd3"]),
            onClick: () => {
              O.Z.setSection(I.pNK.ACCESS, I.KsC.ACCESS_DISCOVERABLE)
            }
          })
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: S.upsellButton,
          children: (0, r.jsx)(u.zxk, {
            variant: "secondary",
            size: "sm",
            text: E.intl.string(E.t.BQIYTU),
            onClick: () => {
              O.Z.setSection(I.pNK.ANALYTICS)
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
      l = (0, Chunk442837.e7)([Chunk984933.ZP], () => null != module ? Chunk984933.ZP.getChannels(module.id) : null),
      o = Chunk73800.useMemo(Chunk929834.jb, []),
      d = true !== Chunk433517.K.get(R);
    if (null == module) return null;
    let m = [];
    null != Chunk120356 && Chunk120356[Chunk984933.sH].forEach(e => {
      let {
        channel: t
      } = e;
      t.type === I.d4z.GUILD_TEXT && m.push({
        value: t.id,
        label: (0, p.F6)(t, _.default, v.Z, true)
      })
    });
    let g = () => {
        if (null == module) return;
        let t = new Set(module.features);
        exports.delete(Chunk981631.oNc.COMMUNITY), exports.delete(Chunk981631.oNc.DISCOVERABLE), exports.delete(Chunk981631.oNc.PREVIEW_ENABLED), Chunk434404.Z.updateGuild({
          features: exports,
          rulesChannelId: null,
          publicUpdatesChannelId: null
        })
      },
      h = e => {
        O.Z.updateGuild({
          description: e
        })
      },
      b = () => {
        module.features.has(Chunk981631.oNc.DISCOVERABLE) && module.features.has(Chunk981631.oNc.PARTNERED) ? (0, Chunk481060.h7j)(e => (0, r.jsx)(u.ConfirmModal, w(P({}, e), {
          header: E.intl.string(E.t.iBnVHR),
          confirmText: E.intl.string(E.t["cY+Ooa"]),
          cancelText: E.intl.string(E.t.oEAioK),
          onConfirm: g,
          children: (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: E.intl.string(E.t["P+Sh8f"])
          })
        }))) : module.features.has(Chunk981631.oNc.DISCOVERABLE) ? (0, Chunk481060.h7j)(e => (0, r.jsx)(u.ConfirmModal, w(P({}, e), {
          header: E.intl.string(E.t.iBnVHR),
          confirmText: E.intl.string(E.t["cY+Ooa"]),
          cancelText: E.intl.string(E.t.oEAioK),
          onConfirm: g,
          children: (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: E.intl.string(E.t["eMx/ub"])
          })
        }))) : module.features.has(Chunk981631.oNc.PARTNERED) ? (0, Chunk481060.h7j)(e => (0, r.jsx)(u.ConfirmModal, w(P({}, e), {
          header: E.intl.string(E.t.iBnVHR),
          confirmText: E.intl.string(E.t["cY+Ooa"]),
          cancelText: E.intl.string(E.t.oEAioK),
          onConfirm: g,
          children: (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: E.intl.string(E.t.l1wLeX)
          })
        }))) : Chunk493773()
      };
    return (0, Chunk255367.jsxs)(Chunk481060.hjN, {
      title: Chunk388032.intl.string(Chunk388032.t.nRtNqq),
      tag: Chunk481060.RB0.H1,
      children: [Chunk755721 ? (0, Chunk255367.jsx)(D, {
        discoveryEnabled: module.features.has(Chunk981631.oNc.DISCOVERABLE),
        onboardingEnabled: module.features.has(Chunk981631.oNc.GUILD_ONBOARDING),
        guild: module
      }) : null, (0, Chunk255367.jsxs)(Chunk481060.hjN, {
        className: a()(Chunk48749.twoColumnFormSection, Chunk48749.firstSection),
        children: [(0, Chunk255367.jsxs)("div", {
          className: Chunk48749.descriptionColumn,
          children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
            className: Chunk48749.formTitle,
            children: Chunk388032.intl.string(Chunk388032.t.otcXPz)
          }), (0, Chunk255367.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            className: Chunk48749.__invalid_formDescription,
            children: Chunk388032.intl.string(Chunk388032.t.BtwmYG)
          })]
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk48749.selectColumn,
          children: (0, Chunk255367.jsx)(Chunk481060.VcW, {
            value: module.rulesChannelId,
            options: Chunk852860,
            onChange: e => {
              O.Z.updateGuild({
                rulesChannelId: e
              })
            },
            isDisabled: !exports
          })
        })]
      }), (0, Chunk255367.jsx)(Chunk481060.$i$, {
        className: Chunk48749.divider
      }), (0, Chunk255367.jsxs)(Chunk481060.hjN, {
        className: a()(Chunk48749.twoColumnFormSection, Chunk48749.firstSection),
        children: [(0, Chunk255367.jsxs)("div", {
          className: Chunk48749.descriptionColumn,
          children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
            className: Chunk48749.formTitle,
            children: Chunk388032.intl.string(Chunk388032.t.vAyDGR)
          }), (0, Chunk255367.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            className: Chunk48749.__invalid_formDescription,
            children: Chunk388032.intl.string(Chunk388032.t.ZFeonp)
          })]
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk48749.selectColumn,
          children: (0, Chunk255367.jsx)(Chunk481060.VcW, {
            value: module.publicUpdatesChannelId,
            options: Chunk852860,
            onChange: e => {
              O.Z.updateGuild({
                publicUpdatesChannelId: e
              })
            },
            isDisabled: !require
          })
        })]
      }), (0, Chunk255367.jsx)(Chunk481060.$i$, {
        className: Chunk48749.divider
      }), (0, Chunk255367.jsxs)(Chunk481060.hjN, {
        className: a()(Chunk48749.twoColumnFormSection, Chunk48749.firstSection),
        children: [(0, Chunk255367.jsxs)("div", {
          className: Chunk48749.descriptionColumn,
          children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
            className: Chunk48749.formTitle,
            children: Chunk388032.intl.string(Chunk388032.t.sMkYEx)
          }), (0, Chunk255367.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            className: Chunk48749.__invalid_formDescription,
            children: Chunk388032.intl.string(Chunk388032.t.htioQk)
          })]
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk48749.selectColumn,
          children: (0, Chunk255367.jsx)(Chunk481060.VcW, {
            value: module.safetyAlertsChannelId,
            options: Chunk852860,
            onChange: e => {
              O.Z.updateGuild({
                safetyAlertsChannelId: e
              })
            },
            isDisabled: !exports
          })
        })]
      }), (0, Chunk255367.jsx)(Chunk481060.$i$, {
        className: Chunk48749.divider
      }), (0, Chunk255367.jsxs)(Chunk481060.hjN, {
        className: Chunk48749.twoColumnFormSection,
        children: [(0, Chunk255367.jsxs)("div", {
          className: Chunk48749.descriptionColumn,
          children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
            className: Chunk48749.formTitle,
            children: Chunk388032.intl.string(Chunk388032.t.pO60f3)
          }), (0, Chunk255367.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            className: Chunk48749.__invalid_formDescription,
            children: Chunk388032.intl.string(Chunk388032.t.aIR73d)
          })]
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk48749.selectColumn,
          children: (0, Chunk255367.jsx)(Chunk481060.VcW, {
            value: module.preferredLocale,
            options: Chunk544891,
            onChange: e => {
              O.Z.updateGuild({
                preferredLocale: e
              })
            },
            isDisabled: !exports
          })
        })]
      }), (0, Chunk255367.jsx)(Chunk481060.$i$, {
        className: Chunk48749.divider
      }), (() => {
        var n;
        if (null != module) return (0, Chunk255367.jsxs)(Chunk481060.hjN, {
          children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
            className: Chunk48749.formTitle,
            children: Chunk388032.intl.string(Chunk388032.t["RSfm+v"])
          }), (0, Chunk255367.jsx)(Chunk481060.R94, {
            className: Chunk48749.description,
            type: Chunk481060.geA.DESCRIPTION,
            children: Chunk388032.intl.string(Chunk388032.t["/B6PR0"])
          }), (0, Chunk255367.jsx)(Chunk481060.Kx8, {
            value: null != (n = module.description) ? require : "",
            placeholder: Chunk388032.intl.string(Chunk388032.t.Nvfows),
            onChange: Chunk769654,
            maxLength: 120,
            disabled: !exports
          })]
        })
      })(), (0, Chunk255367.jsx)(Chunk481060.$i$, {
        className: Chunk48749.divider
      }), (0, Chunk255367.jsxs)(Chunk481060.hjN, {
        className: Chunk48749.twoColumnFormSection,
        children: [(0, Chunk255367.jsxs)("div", {
          className: Chunk48749.descriptionColumn,
          children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
            className: Chunk48749.formTitle,
            children: Chunk388032.intl.string(Chunk388032.t.c1BmbG)
          }), (0, Chunk255367.jsx)(Chunk481060.R94, {
            type: Chunk481060.geA.DESCRIPTION,
            className: Chunk48749.__invalid_formDescription,
            children: Chunk388032.intl.string(Chunk388032.t.aQzVFx)
          })]
        }), (0, Chunk255367.jsx)(Chunk481060.ua7, {
          text: require ? null : Chunk388032.intl.string(Chunk388032.t["pjG+T0"]),
          "aria-label": require ? true : Chunk388032.intl.string(Chunk388032.t["pjG+T0"]),
          children: e => (0, r.jsx)(u.zxk, P({
            variant: "critical-primary",
            size: "sm",
            text: E.intl.string(E.t.c1BmbG),
            onClick: b,
            disabled: !n
          }, e))
        })]
      })]
    })
  },
  k = () => {
    let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild());
    return null == module ? null : module.features.has(Chunk981631.oNc.COMMUNITY) ? (0, Chunk255367.jsx)(A, {}) : (0, Chunk255367.jsx)(Chunk54842.Z, {
      guild: module
    })
  }