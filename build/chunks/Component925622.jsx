/** Chunk was on 47841 **/
/** chunk id: 925622, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => D,
  L: () => P
}), require("./228524.js"), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
require("./516773.js");
var Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk506774 = require("./506774.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk314116 = require("./314116.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk47167 = require("./47167.js"),
  Chunk345942 = require("./345942.js"),
  Chunk808728 = require("./808728.js"),
  Chunk498642 = require("./498642.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk224394 = require("./224394.jsx"),
  Chunk814758 = require("./814758.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk944620 = require("./944620.js"),
  Chunk597306 = require("./597306.js");
let C = "dismissedCommunityFeaturesUpsell",
  P = () => {
    let e, {
        guild: t,
        submitting: n,
        errors: i
      } = (0, l.cf)([A.A], () => ({
        submitting: A.A.isSubmitting(),
        guild: A.A.getGuild(),
        errors: A.A.getErrors()
      })),
      s = Object.keys(i),
      a = s.length > 0 ? s[0] : null;
    return e = "rules_channel_id" === a ? S.intl.string(S.t["7IrBYt"]) : null != a ? i[a] : true, (0, r.jsx)(c.A, {
      submitting: n,
      onReset: () => {
        null != t && v.A.init(t.id)
      },
      onSave: () => {
        null != t && v.A.saveGuild(t.id, {
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
  w = e => {
    let {
      discoveryEnabled: t,
      onboardingEnabled: n,
      guild: c
    } = e, [o, d] = i.useState(true === a.w.get(C)), b = (0, l.bG)([x.A], () => {
      var e;
      return null != (e = x.A.getMemberCount(c.id)) ? e : 0
    }), [p, j] = i.useState(false);
    (0, g.Ay)(() => {
      s.Bo.get({
        url: _.Rsh.GUILD_ADMIN_SERVER_ELIGIBILITY(c.id),
        rejectWithError: true
      }).then(e => {
        j(e.body.eligible_for_admin_server)
      }).catch(() => j(false))
    });
    let O = (0, l.bG)([h.A], () => h.A.getGuild("942897714956472401")),
      y = c.features.has(_.GuildFeatures.COMMUNITY) && b >= 1e3 && p && null == O;
    if (t && n && !y) return null;
    let A = async () => {
      try {
        let e = await s.Bo.post({
          url: _.Rsh.JOIN_ADMIN_SERVER(c.id),
          oldFormErrors: true,
          rejectWithError: true
        });
        v.A.close(), (0, m.u)(e.body.id)
      } catch (e) {}
    };
    return o && !y ? null : (0, r.jsxs)("div", {
      className: T.Zj,
      children: [(0, r.jsxs)("div", {
        className: T.xw,
        children: [(0, r.jsx)("img", {
          src: I,
          alt: "",
          width: 60,
          className: T.Tn
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(f.Heading, {
            variant: "heading-md/semibold",
            className: T.$P,
            children: S.intl.string(S.t["pR/Bge"])
          }), (0, r.jsx)(f.Text, {
            variant: "text-sm/normal",
            children: S.intl.string(S.t["V+Yo1l"])
          })]
        })]
      }), (0, r.jsx)(u.$n, {
        "aria-label": S.intl.string(S.t.cpT0Cq),
        look: u.$n.Looks.BLANK,
        size: u.$n.Sizes.NONE,
        className: T.kz,
        onClick: () => {
          a.w.set(C, true), d(true)
        },
        children: (0, r.jsx)(f.PGe, {
          size: "md",
          color: "currentColor"
        })
      }), (0, r.jsxs)("div", {
        className: T.dt,
        children: [y && (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: T.Oy,
          children: (0, r.jsx)(f.Button, {
            variant: "primary",
            size: "sm",
            text: S.intl.string(S.t.iF1Asi),
            onClick: A
          })
        }), n ? null : (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: T.Oy,
          children: (0, r.jsx)(f.Button, {
            variant: "primary",
            size: "sm",
            text: S.intl.string(S.t["S/Dfid"]),
            onClick: () => {
              v.A.setSection(_.BEX.ONBOARDING)
            }
          })
        }), t ? null : (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: T.Oy,
          children: (0, r.jsx)(f.Button, {
            variant: "secondary",
            size: "sm",
            text: S.intl.string(S.t["0kmJdw"]),
            onClick: () => {
              v.A.setSection(_.BEX.ACCESS, _.nd0.ACCESS_DISCOVERABLE)
            }
          })
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: T.Oy,
          children: (0, r.jsx)(f.Button, {
            variant: "secondary",
            size: "sm",
            text: S.intl.string(S.t.BQIYTb),
            onClick: () => {
              v.A.setSection(_.BEX.ANALYTICS)
            }
          })
        })]
      })]
    })
  },
  R = () => {
    var e, t, n;
    let s = (0, l.bG)([A.A], () => A.A.getGuild()),
      {
        canManageGuild: c,
        isGuildAdmin: u
      } = (0, l.cf)([j.A], () => ({
        canManageGuild: j.A.can(_.xBc.MANAGE_GUILD, s),
        isGuildAdmin: j.A.can(_.xBc.ADMINISTRATOR, s)
      })),
      g = (0, l.bG)([p.Ay], () => null != s ? p.Ay.getChannels(s.id) : null),
      m = i.useMemo(N.fr, []),
      x = true !== a.w.get(C);
    if (null == s) return null;
    let h = [];
    null != g && g[p.I6].forEach(e => {
      let {
        channel: t
      } = e;
      t.type === _.rbe.GUILD_TEXT && h.push({
        id: t.id,
        value: t.id,
        label: (0, b.m1)(t, y.default, O.A, true)
      })
    });
    let E = () => {
        if (null == s) return;
        let e = new Set(s.features);
        e.delete(_.GuildFeatures.COMMUNITY), e.delete(_.GuildFeatures.DISCOVERABLE), e.delete(_.GuildFeatures.PREVIEW_ENABLED), v.A.updateGuild({
          features: e,
          rulesChannelId: null,
          publicUpdatesChannelId: null
        })
      },
      T = e => {
        v.A.updateGuild({
          description: e
        })
      };
    return (0, r.jsxs)(f.BJc, {
      gap: 24,
      children: [(0, r.jsx)(f.Heading, {
        variant: "heading-lg/semibold",
        children: S.intl.string(S.t.nRtNqn)
      }), x ? (0, r.jsx)(w, {
        discoveryEnabled: s.features.has(_.GuildFeatures.DISCOVERABLE),
        onboardingEnabled: s.features.has(_.GuildFeatures.GUILD_ONBOARDING),
        guild: s
      }) : null, (0, r.jsx)(f.ZiE, {
        selectionMode: "single",
        layout: "horizontal-responsive",
        label: S.intl.string(S.t["otcXP/"]),
        description: S.intl.string(S.t.BtwmYB),
        value: null != (e = s.rulesChannelId) ? e : true,
        options: h,
        onSelectionChange: e => {
          v.A.updateGuild({
            rulesChannelId: e
          })
        },
        disabled: !c
      }), (0, r.jsx)(f.cGx, {}), (0, r.jsx)(f.ZiE, {
        selectionMode: "single",
        layout: "horizontal-responsive",
        label: S.intl.string(S.t.vAyDGU),
        description: S.intl.string(S.t.ZFeonu),
        value: null != (t = s.publicUpdatesChannelId) ? t : true,
        options: h,
        onSelectionChange: e => {
          v.A.updateGuild({
            publicUpdatesChannelId: e
          })
        },
        disabled: !u
      }), (0, r.jsx)(f.cGx, {}), (0, r.jsx)(f.ZiE, {
        selectionMode: "single",
        layout: "horizontal-responsive",
        label: S.intl.string(S.t.sMkYE8),
        description: S.intl.string(S.t.htioQo),
        value: null != (n = s.safetyAlertsChannelId) ? n : true,
        options: h,
        onSelectionChange: e => {
          v.A.updateGuild({
            safetyAlertsChannelId: e
          })
        },
        disabled: !c
      }), (0, r.jsx)(f.cGx, {}), (0, r.jsx)(f.ZiE, {
        selectionMode: "single",
        layout: "horizontal-responsive",
        label: S.intl.string(S.t.pO60fy),
        description: S.intl.string(S.t.aIR73T),
        value: s.preferredLocale,
        options: m,
        onSelectionChange: e => {
          v.A.updateGuild({
            preferredLocale: e
          })
        },
        disabled: !c
      }), (0, r.jsx)(f.cGx, {}), (() => {
        var e;
        if (null != s) return (0, r.jsx)(f.fs1, {
          label: S.intl.string(S.t["RSfm+i"]),
          description: S.intl.string(S.t["/B6PRw"]),
          value: null != (e = s.description) ? e : "",
          placeholder: S.intl.string(S.t.Nvfowl),
          onChange: T,
          maxLength: 300,
          disabled: !c
        })
      })(), (0, r.jsx)(f.cGx, {}), (0, r.jsx)(f.D0$, {
        label: S.intl.string(S.t.c1BmbC),
        description: S.intl.string(S.t.aQzVF8),
        layout: "horizontal",
        children: (0, r.jsx)(d.m, {
          text: u ? null : S.intl.string(S.t["pjG+T3"]),
          "aria-label": u ? true : S.intl.string(S.t["pjG+T3"]),
          children: (0, r.jsx)(f.Button, {
            variant: "critical-primary",
            size: "sm",
            text: S.intl.string(S.t.c1BmbC),
            onClick: () => {
              s.features.has(_.GuildFeatures.DISCOVERABLE) && s.features.has(_.GuildFeatures.PARTNERED) ? (0, o.A)({
                title: S.intl.string(S.t.iBnVHc),
                subtitle: S.intl.string(S.t["P+Sh8V"]),
                confirmText: S.intl.string(S.t["cY+Oob"]),
                cancelText: S.intl.string(S.t.oEAioF),
                onConfirm: E
              }) : s.features.has(_.GuildFeatures.DISCOVERABLE) ? (0, o.A)({
                title: S.intl.string(S.t.iBnVHc),
                subtitle: S.intl.string(S.t["eMx/uZ"]),
                confirmText: S.intl.string(S.t["cY+Oob"]),
                cancelText: S.intl.string(S.t.oEAioF),
                onConfirm: E
              }) : s.features.has(_.GuildFeatures.PARTNERED) ? (0, o.A)({
                title: S.intl.string(S.t.iBnVHc),
                subtitle: S.intl.string(S.t.l1wLeX),
                confirmText: S.intl.string(S.t["cY+Oob"]),
                cancelText: S.intl.string(S.t.oEAioF),
                onConfirm: E
              }) : E()
            },
            disabled: !u
          })
        })
      })]
    })
  },
  D = () => {
    let e = (0, l.bG)([A.A], () => A.A.getGuild());
    return null == e ? null : e.features.has(_.GuildFeatures.COMMUNITY) ? (0, r.jsx)(R, {}) : (0, r.jsx)(E.A, {
      guild: e
    })
  }