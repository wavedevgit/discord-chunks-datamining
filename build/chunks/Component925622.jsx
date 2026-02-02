/** Chunk was on 39048 **/
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
let T = "dismissedCommunityFeaturesUpsell",
  P = () => {
    let e, {
        guild: t,
        submitting: n,
        errors: i
      } = (0, l.cf)([y.A], () => ({
        submitting: y.A.isSubmitting(),
        guild: y.A.getGuild(),
        errors: y.A.getErrors()
      })),
      s = Object.keys(i),
      a = s.length > 0 ? s[0] : null;
    return e = "rules_channel_id" === a ? S.intl.string(S.t["7IrBYt"]) : null != a ? i[a] : true, (0, r.jsx)(o.A, {
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
      guild: o
    } = e, [c, d] = i.useState(true === a.w.get(T)), p = (0, l.bG)([b.A], () => {
      var e;
      return null != (e = b.A.getMemberCount(o.id)) ? e : 0
    }), [h, j] = i.useState(false);
    (0, m.Ay)(() => {
      s.Bo.get({
        url: N.Rsh.GUILD_ADMIN_SERVER_ELIGIBILITY(o.id),
        rejectWithError: true
      }).then(e => {
        j(e.body.eligible_for_admin_server)
      }).catch(() => j(false))
    });
    let _ = (0, l.bG)([x.A], () => x.A.getGuild("942897714956472401")),
      O = o.features.has(N.GuildFeatures.COMMUNITY) && p >= 1e3 && h && null == _;
    if (t && n && !O) return null;
    let y = async () => {
      try {
        let e = await s.Bo.post({
          url: N.Rsh.JOIN_ADMIN_SERVER(o.id),
          oldFormErrors: true,
          rejectWithError: true
        });
        v.A.close(), (0, f.u)(e.body.id)
      } catch (e) {}
    };
    return c && !O ? null : (0, r.jsxs)("div", {
      className: I.Zj,
      children: [(0, r.jsxs)("div", {
        className: I.xw,
        children: [(0, r.jsx)("img", {
          src: C,
          alt: "",
          width: 60,
          className: I.Tn
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(g.Heading, {
            variant: "heading-md/semibold",
            className: I.$P,
            children: S.intl.string(S.t["pR/Bge"])
          }), (0, r.jsx)(g.Text, {
            variant: "text-sm/normal",
            children: S.intl.string(S.t["V+Yo1l"])
          })]
        })]
      }), (0, r.jsx)(u.$n, {
        "aria-label": S.intl.string(S.t.cpT0Cq),
        look: u.$n.Looks.BLANK,
        size: u.$n.Sizes.NONE,
        className: I.kz,
        onClick: () => {
          a.w.set(T, true), d(true)
        },
        children: (0, r.jsx)(g.PGe, {
          size: "md",
          color: "currentColor"
        })
      }), (0, r.jsxs)("div", {
        className: I.dt,
        children: [O && (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: I.Oy,
          children: (0, r.jsx)(g.Button, {
            variant: "primary",
            size: "sm",
            text: S.intl.string(S.t.iF1Asi),
            onClick: y
          })
        }), n ? null : (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: I.Oy,
          children: (0, r.jsx)(g.Button, {
            variant: "primary",
            size: "sm",
            text: S.intl.string(S.t["S/Dfid"]),
            onClick: () => {
              v.A.setSection(N.BEX.ONBOARDING)
            }
          })
        }), t ? null : (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: I.Oy,
          children: (0, r.jsx)(g.Button, {
            variant: "secondary",
            size: "sm",
            text: S.intl.string(S.t["0kmJdw"]),
            onClick: () => {
              v.A.setSection(N.BEX.ACCESS, N.nd0.ACCESS_DISCOVERABLE)
            }
          })
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: I.Oy,
          children: (0, r.jsx)(g.Button, {
            variant: "secondary",
            size: "sm",
            text: S.intl.string(S.t.BQIYTb),
            onClick: () => {
              v.A.setSection(N.BEX.ANALYTICS)
            }
          })
        })]
      })]
    })
  },
  R = () => {
    var e, t, n;
    let s = (0, l.bG)([y.A], () => y.A.getGuild()),
      {
        canManageGuild: o,
        isGuildAdmin: u
      } = (0, l.cf)([j.A], () => ({
        canManageGuild: j.A.can(N.xBc.MANAGE_GUILD, s),
        isGuildAdmin: j.A.can(N.xBc.ADMINISTRATOR, s)
      })),
      m = (0, l.bG)([h.Ay], () => null != s ? h.Ay.getChannels(s.id) : null),
      f = i.useMemo(E.fr, []),
      b = true !== a.w.get(T);
    if (null == s) return null;
    let x = [];
    null != m && m[h.I6].forEach(e => {
      let {
        channel: t
      } = e;
      t.type === N.rbe.GUILD_TEXT && x.push({
        id: t.id,
        value: t.id,
        label: (0, p.m1)(t, O.default, _.A, true)
      })
    });
    let A = () => {
        if (null == s) return;
        let e = new Set(s.features);
        e.delete(N.GuildFeatures.COMMUNITY), e.delete(N.GuildFeatures.DISCOVERABLE), e.delete(N.GuildFeatures.PREVIEW_ENABLED), v.A.updateGuild({
          features: e,
          rulesChannelId: null,
          publicUpdatesChannelId: null
        })
      },
      I = e => {
        v.A.updateGuild({
          description: e
        })
      };
    return (0, r.jsxs)(g.BJc, {
      gap: 24,
      children: [(0, r.jsx)(g.Heading, {
        variant: "heading-lg/semibold",
        children: S.intl.string(S.t.nRtNqn)
      }), b ? (0, r.jsx)(w, {
        discoveryEnabled: s.features.has(N.GuildFeatures.DISCOVERABLE),
        onboardingEnabled: s.features.has(N.GuildFeatures.GUILD_ONBOARDING),
        guild: s
      }) : null, (0, r.jsx)(g.ZiE, {
        selectionMode: "single",
        layout: "horizontal-responsive",
        label: S.intl.string(S.t["otcXP/"]),
        description: S.intl.string(S.t.BtwmYB),
        value: null != (e = s.rulesChannelId) ? e : true,
        options: x,
        onSelectionChange: e => {
          v.A.updateGuild({
            rulesChannelId: e
          })
        },
        disabled: !o
      }), (0, r.jsx)(g.cGx, {}), (0, r.jsx)(g.ZiE, {
        selectionMode: "single",
        layout: "horizontal-responsive",
        label: S.intl.string(S.t.vAyDGU),
        description: S.intl.string(S.t.ZFeonu),
        value: null != (t = s.publicUpdatesChannelId) ? t : true,
        options: x,
        onSelectionChange: e => {
          v.A.updateGuild({
            publicUpdatesChannelId: e
          })
        },
        disabled: !u
      }), (0, r.jsx)(g.cGx, {}), (0, r.jsx)(g.ZiE, {
        selectionMode: "single",
        layout: "horizontal-responsive",
        label: S.intl.string(S.t.sMkYE8),
        description: S.intl.string(S.t.htioQo),
        value: null != (n = s.safetyAlertsChannelId) ? n : true,
        options: x,
        onSelectionChange: e => {
          v.A.updateGuild({
            safetyAlertsChannelId: e
          })
        },
        disabled: !o
      }), (0, r.jsx)(g.cGx, {}), (0, r.jsx)(g.ZiE, {
        selectionMode: "single",
        layout: "horizontal-responsive",
        label: S.intl.string(S.t.pO60fy),
        description: S.intl.string(S.t.aIR73T),
        value: s.preferredLocale,
        options: f,
        onSelectionChange: e => {
          v.A.updateGuild({
            preferredLocale: e
          })
        },
        disabled: !o
      }), (0, r.jsx)(g.cGx, {}), (() => {
        var e;
        if (null != s) return (0, r.jsx)(g.fs1, {
          label: S.intl.string(S.t["RSfm+i"]),
          description: S.intl.string(S.t["/B6PRw"]),
          value: null != (e = s.description) ? e : "",
          placeholder: S.intl.string(S.t.Nvfowl),
          onChange: I,
          maxLength: 300,
          disabled: !o
        })
      })(), (0, r.jsx)(g.cGx, {}), (0, r.jsx)(g.D0$, {
        label: S.intl.string(S.t.c1BmbC),
        description: S.intl.string(S.t.aQzVF8),
        layout: "horizontal",
        children: (0, r.jsx)(d.m, {
          text: u ? null : S.intl.string(S.t["pjG+T3"]),
          "aria-label": u ? true : S.intl.string(S.t["pjG+T3"]),
          children: (0, r.jsx)(g.Button, {
            variant: "critical-primary",
            size: "sm",
            text: S.intl.string(S.t.c1BmbC),
            onClick: () => {
              s.features.has(N.GuildFeatures.DISCOVERABLE) && s.features.has(N.GuildFeatures.PARTNERED) ? (0, c.A)({
                title: S.intl.string(S.t.iBnVHc),
                subtitle: S.intl.string(S.t["P+Sh8V"]),
                confirmText: S.intl.string(S.t["cY+Oob"]),
                cancelText: S.intl.string(S.t.oEAioF),
                onConfirm: A
              }) : s.features.has(N.GuildFeatures.DISCOVERABLE) ? (0, c.A)({
                title: S.intl.string(S.t.iBnVHc),
                subtitle: S.intl.string(S.t["eMx/uZ"]),
                confirmText: S.intl.string(S.t["cY+Oob"]),
                cancelText: S.intl.string(S.t.oEAioF),
                onConfirm: A
              }) : s.features.has(N.GuildFeatures.PARTNERED) ? (0, c.A)({
                title: S.intl.string(S.t.iBnVHc),
                subtitle: S.intl.string(S.t.l1wLeX),
                confirmText: S.intl.string(S.t["cY+Oob"]),
                cancelText: S.intl.string(S.t.oEAioF),
                onConfirm: A
              }) : A()
            },
            disabled: !u
          })
        })
      })]
    })
  },
  D = () => {
    let e = (0, l.bG)([y.A], () => y.A.getGuild());
    return null == e ? null : e.features.has(N.GuildFeatures.COMMUNITY) ? (0, r.jsx)(R, {}) : (0, r.jsx)(A.A, {
      guild: e
    })
  }