/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  X: () => S,
  Z: () => Q
}), n(266796), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(544891),
  c = n(433517),
  A = n(481060),
  d = n(852860),
  u = n(493773),
  g = n(933557),
  f = n(63568),
  m = n(769654),
  p = n(984933),
  h = n(650774),
  C = n(430824),
  b = n(496675),
  v = n(699516),
  x = n(594174),
  N = n(434404),
  j = n(999382),
  E = n(54842),
  I = n(929834),
  O = n(981631),
  y = n(388032),
  w = n(14782),
  P = n(922905);

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function D(e, t) {
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
let T = "dismissedCommunityFeaturesUpsell",
  S = () => {
    let e;
    let {
      guild: t,
      submitting: n,
      errors: i
    } = (0, l.cj)([j.Z], () => ({
      submitting: j.Z.isSubmitting(),
      guild: j.Z.getGuild(),
      errors: j.Z.getErrors()
    })), s = Object.keys(i), a = s.length > 0 ? s[0] : null;
    return e = "rules_channel_id" === a ? y.NW.string(y.t["7IrBYm"]) : null != a ? i[a] : void 0, (0, r.jsx)(d.Z, {
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
  L = e => {
    let {
      discoveryEnabled: t,
      onboardingEnabled: n,
      guild: s
    } = e, [a, d] = i.useState(!0 === c.K.get(T)), g = (0, l.e7)([h.Z], () => {
      var e;
      return null !== (e = h.Z.getMemberCount(s.id)) && void 0 !== e ? e : 0
    }), [f, p] = i.useState(!1);
    (0, u.ZP)(() => {
      o.tn.get({
        url: O.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(s.id),
        rejectWithError: !0
      }).then(e => {
        p(e.body.eligible_for_admin_server)
      }).catch(() => p(!1))
    });
    let b = (0, l.e7)([C.Z], () => C.Z.getGuild("942897714956472401")),
      v = s.isCommunity() && g >= 1e3 && f && null == b;
    if (t && n && !v) return null;
    let x = async () => {
      try {
        let e = await o.tn.post({
          url: O.ANM.JOIN_ADMIN_SERVER(s.id),
          oldFormErrors: !0,
          rejectWithError: !0
        });
        N.Z.close(), (0, m.X)(e.body.id)
      } catch (e) {}
    };
    return a && !v ? null : (0, r.jsxs)("div", {
      className: w.upsellContainer,
      children: [(0, r.jsxs)("div", {
        className: w.upsellContent,
        children: [(0, r.jsx)("img", {
          src: P,
          alt: "",
          width: 60,
          className: w.upsellImage
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(A.X6q, {
            variant: "heading-md/semibold",
            className: w.upsellHeader,
            children: y.NW.string(y.t["pR/BgY"])
          }), (0, r.jsx)(A.Text, {
            variant: "text-sm/normal",
            children: y.NW.string(y.t["V+Yo1t"])
          })]
        })]
      }), (0, r.jsx)(A.zxk, {
        "aria-label": y.NW.string(y.t.cpT0Cg),
        look: A.zxk.Looks.BLANK,
        size: A.zxk.Sizes.NONE,
        className: w.upsellClose,
        onClick: () => {
          c.K.set(T, !0), d(!0)
        },
        children: (0, r.jsx)(A.Dio, {
          size: "md",
          color: "currentColor"
        })
      }), (0, r.jsxs)("div", {
        className: w.upsellFooter,
        children: [v && (0, r.jsx)(A.zxk, {
          size: A.zxk.Sizes.SMALL,
          onClick: x,
          className: w.upsellButton,
          children: y.NW.string(y.t.iF1Asr)
        }), n ? null : (0, r.jsx)(A.zxk, {
          size: A.zxk.Sizes.SMALL,
          onClick: () => {
            N.Z.setSection(O.pNK.ONBOARDING)
          },
          className: w.upsellButton,
          children: y.NW.string(y.t["S/DfiY"])
        }), t ? null : (0, r.jsx)(A.zxk, {
          size: A.zxk.Sizes.SMALL,
          onClick: () => {
            N.Z.setSection(O.pNK.DISCOVERY)
          },
          className: w.upsellButton,
          color: A.zxk.Colors.PRIMARY,
          children: y.NW.string(y.t["0kmJd3"])
        }), (0, r.jsx)(A.zxk, {
          size: A.zxk.Sizes.SMALL,
          onClick: () => {
            N.Z.setSection(O.pNK.ANALYTICS)
          },
          className: w.upsellButton,
          color: A.zxk.Colors.PRIMARY,
          children: y.NW.string(y.t.BQIYTU)
        })]
      })]
    })
  },
  R = () => {
    let e = (0, l.e7)([j.Z], () => j.Z.getGuild()),
      {
        canManageGuild: t,
        isGuildAdmin: n
      } = (0, l.cj)([b.Z], () => ({
        canManageGuild: b.Z.can(O.Plq.MANAGE_GUILD, e),
        isGuildAdmin: b.Z.can(O.Plq.ADMINISTRATOR, e)
      })),
      s = (0, l.e7)([p.ZP], () => null != e ? p.ZP.getChannels(e.id) : null),
      o = i.useMemo(I.jb, []),
      d = !0 !== c.K.get(T);
    if (null == e) return null;
    let u = [];
    null != s && s[p.sH].forEach(e => {
      let {
        channel: t
      } = e;
      t.type === O.d4z.GUILD_TEXT && u.push({
        value: t.id,
        label: (0, g.F6)(t, x.default, v.Z, !0)
      })
    });
    let m = () => {
        N.Z.init(e.id), N.Z.open(e.id, O.pNK.MEMBER_VERIFICATION)
      },
      h = () => {
        if (null == e) return;
        let t = new Set(e.features);
        t.delete(O.oNc.COMMUNITY), t.delete(O.oNc.DISCOVERABLE), (0, f.K2)(e.id, "disableCommunity") || e.hasFeature(O.oNc.CLAN) || t.delete(O.oNc.MEMBER_VERIFICATION_GATE_ENABLED), t.delete(O.oNc.PREVIEW_ENABLED), N.Z.updateGuild({
          features: t,
          rulesChannelId: null,
          publicUpdatesChannelId: null
        })
      },
      C = e => {
        N.Z.updateGuild({
          description: e
        })
      },
      E = () => {
        let t = (0, f.K2)(e.id, "GuildSettingsCommunity");
        e.features.has(O.oNc.DISCOVERABLE) && e.features.has(O.oNc.PARTNERED) ? (0, A.h7j)(e => (0, r.jsx)(A.ConfirmModal, D(B({}, e), {
          header: y.NW.string(y.t.iBnVHR),
          confirmText: y.NW.string(y.t["cY+Ooa"]),
          cancelText: y.NW.string(y.t.oEAioK),
          onConfirm: h,
          children: (0, r.jsx)(A.Text, {
            variant: "text-sm/normal",
            children: y.NW.string(y.t["P+Sh8f"])
          })
        }))) : e.features.has(O.oNc.DISCOVERABLE) ? (0, A.h7j)(e => (0, r.jsx)(A.ConfirmModal, D(B({}, e), {
          header: y.NW.string(y.t.iBnVHR),
          confirmText: y.NW.string(y.t["cY+Ooa"]),
          cancelText: y.NW.string(y.t.oEAioK),
          onConfirm: h,
          children: (0, r.jsx)(A.Text, {
            variant: "text-sm/normal",
            children: y.NW.string(y.t["eMx/ub"])
          })
        }))) : e.features.has(O.oNc.PARTNERED) ? (0, A.h7j)(e => (0, r.jsx)(A.ConfirmModal, D(B({}, e), {
          header: y.NW.string(y.t.iBnVHR),
          confirmText: y.NW.string(y.t["cY+Ooa"]),
          cancelText: y.NW.string(y.t.oEAioK),
          onConfirm: h,
          children: (0, r.jsx)(A.Text, {
            variant: "text-sm/normal",
            children: y.NW.string(y.t.l1wLeX)
          })
        }))) : !e.features.has(O.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || t || e.features.has(O.oNc.CLAN) ? h() : (0, A.h7j)(e => (0, r.jsx)(A.ConfirmModal, D(B({}, e), {
          header: y.NW.string(y.t.iBnVHR),
          confirmButtonColor: A.zxk.Colors.BRAND,
          confirmText: y.NW.string(y.t.izNBMz),
          cancelText: y.NW.string(y.t.oEAioK),
          onConfirm: m,
          children: (0, r.jsx)(A.Text, {
            variant: "text-sm/normal",
            children: y.NW.string(y.t.kQzUNj)
          })
        })))
      };
    return (0, r.jsxs)(A.hjN, {
      title: y.NW.string(y.t.nRtNqq),
      tag: A.RB0.H1,
      children: [d ? (0, r.jsx)(L, {
        discoveryEnabled: e.features.has(O.oNc.DISCOVERABLE),
        onboardingEnabled: e.features.has(O.oNc.GUILD_ONBOARDING),
        guild: e
      }) : null, (0, r.jsxs)(A.hjN, {
        className: a()(w.twoColumnFormSection, w.firstSection),
        children: [(0, r.jsxs)("div", {
          className: w.descriptionColumn,
          children: [(0, r.jsx)(A.vwX, {
            className: w.formTitle,
            children: y.NW.string(y.t.otcXPz)
          }), (0, r.jsx)(A.R94, {
            type: A.geA.DESCRIPTION,
            className: w.__invalid_formDescription,
            children: y.NW.string(y.t.BtwmYG)
          })]
        }), (0, r.jsx)("div", {
          className: w.selectColumn,
          children: (0, r.jsx)(A.VcW, {
            value: e.rulesChannelId,
            options: u,
            onChange: e => {
              N.Z.updateGuild({
                rulesChannelId: e
              })
            },
            isDisabled: !t
          })
        })]
      }), (0, r.jsx)(A.$i$, {
        className: w.divider
      }), (0, r.jsxs)(A.hjN, {
        className: a()(w.twoColumnFormSection, w.firstSection),
        children: [(0, r.jsxs)("div", {
          className: w.descriptionColumn,
          children: [(0, r.jsx)(A.vwX, {
            className: w.formTitle,
            children: y.NW.string(y.t.vAyDGR)
          }), (0, r.jsx)(A.R94, {
            type: A.geA.DESCRIPTION,
            className: w.__invalid_formDescription,
            children: y.NW.string(y.t.ZFeonp)
          })]
        }), (0, r.jsx)("div", {
          className: w.selectColumn,
          children: (0, r.jsx)(A.VcW, {
            value: e.publicUpdatesChannelId,
            options: u,
            onChange: e => {
              N.Z.updateGuild({
                publicUpdatesChannelId: e
              })
            },
            isDisabled: !n
          })
        })]
      }), (0, r.jsx)(A.$i$, {
        className: w.divider
      }), (0, r.jsxs)(A.hjN, {
        className: a()(w.twoColumnFormSection, w.firstSection),
        children: [(0, r.jsxs)("div", {
          className: w.descriptionColumn,
          children: [(0, r.jsx)(A.vwX, {
            className: w.formTitle,
            children: y.NW.string(y.t.sMkYEx)
          }), (0, r.jsx)(A.R94, {
            type: A.geA.DESCRIPTION,
            className: w.__invalid_formDescription,
            children: y.NW.string(y.t.htioQk)
          })]
        }), (0, r.jsx)("div", {
          className: w.selectColumn,
          children: (0, r.jsx)(A.VcW, {
            value: e.safetyAlertsChannelId,
            options: u,
            onChange: e => {
              N.Z.updateGuild({
                safetyAlertsChannelId: e
              })
            },
            isDisabled: !t
          })
        })]
      }), (0, r.jsx)(A.$i$, {
        className: w.divider
      }), (0, r.jsxs)(A.hjN, {
        className: w.twoColumnFormSection,
        children: [(0, r.jsxs)("div", {
          className: w.descriptionColumn,
          children: [(0, r.jsx)(A.vwX, {
            className: w.formTitle,
            children: y.NW.string(y.t.pO60f3)
          }), (0, r.jsx)(A.R94, {
            type: A.geA.DESCRIPTION,
            className: w.__invalid_formDescription,
            children: y.NW.string(y.t.aIR73d)
          })]
        }), (0, r.jsx)("div", {
          className: w.selectColumn,
          children: (0, r.jsx)(A.VcW, {
            value: e.preferredLocale,
            options: o,
            onChange: e => {
              N.Z.updateGuild({
                preferredLocale: e
              })
            },
            isDisabled: !t
          })
        })]
      }), (0, r.jsx)(A.$i$, {
        className: w.divider
      }), (() => {
        var n;
        if (null != e) return (0, r.jsxs)(A.hjN, {
          children: [(0, r.jsx)(A.vwX, {
            className: w.formTitle,
            children: y.NW.string(y.t["RSfm+v"])
          }), (0, r.jsx)(A.R94, {
            className: w.description,
            type: A.geA.DESCRIPTION,
            children: y.NW.string(y.t["/B6PR0"])
          }), (0, r.jsx)(A.Kx8, {
            value: null !== (n = e.description) && void 0 !== n ? n : "",
            placeholder: y.NW.string(y.t.Nvfows),
            onChange: C,
            maxLength: 120,
            disabled: !t
          })]
        })
      })(), (0, r.jsx)(A.$i$, {
        className: w.divider
      }), (0, r.jsxs)(A.hjN, {
        className: w.twoColumnFormSection,
        children: [(0, r.jsxs)("div", {
          className: w.descriptionColumn,
          children: [(0, r.jsx)(A.vwX, {
            className: w.formTitle,
            children: y.NW.string(y.t.c1BmbG)
          }), (0, r.jsx)(A.R94, {
            type: A.geA.DESCRIPTION,
            className: w.__invalid_formDescription,
            children: y.NW.string(y.t.aQzVFx)
          })]
        }), (0, r.jsx)(A.ua7, {
          text: n ? null : y.NW.string(y.t["pjG+T0"]),
          "aria-label": n ? void 0 : y.NW.string(y.t["pjG+T0"]),
          children: e => (0, r.jsx)(A.zxk, D(B({
            size: A.zxk.Sizes.SMALL,
            onClick: E,
            color: A.zxk.Colors.RED,
            disabled: !n
          }, e), {
            children: y.NW.string(y.t.c1BmbG)
          }))
        })]
      })]
    })
  },
  Q = () => {
    let e = (0, l.e7)([j.Z], () => j.Z.getGuild());
    return null == e ? null : e.features.has(O.oNc.COMMUNITY) ? (0, r.jsx)(R, {}) : (0, r.jsx)(E.Z, {
      guild: e
    })
  }