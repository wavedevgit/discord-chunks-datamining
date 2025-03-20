/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => I
});
var r = n(200651);
n(192379);
var i = n(442837),
  s = n(481060),
  a = n(2052),
  l = n(367907),
  o = n(45966),
  A = n(734893),
  c = n(661824),
  d = n(430824),
  u = n(626135),
  g = n(983135),
  f = n(8426),
  m = n(969632),
  p = n(570961),
  h = n(84658),
  C = n(974513),
  b = n(677892),
  v = n(981631),
  x = n(388032),
  N = n(288235);

function j(e) {
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

function E(e, t) {
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

function I(e) {
  let {
    guildId: t,
    completed: n
  } = e, s = (0, i.e7)([o.Z], () => o.Z.getEnabled(t)), {
    location: A
  } = (0, a.O)();
  A.object = n ? v.qAy.ONBOARDING_EDIT : v.qAy.ONBOARDING_REVIEW;
  let d = async function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    s ? (await (0, p.$y)(t, !1), u.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, E(j({}, (0, l.hH)(t)), {
      action_taken: h.W$[h.W$.TOGGLE_DISABLED],
      location: A
    }))) : (await (0, p.$y)(t, !0), e && (0, f.To)(t, !0), n ? u.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, E(j({}, (0, l.hH)(t)), {
      action_taken: h.W$[h.W$.TOGGLE_ENABLED],
      location: A
    })) : u.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, E(j({}, (0, l.hH)(t)), {
      step: h.PG[h.PG.REVIEW],
      back: !1,
      skip: !1,
      completed: !0
    })))
  }, m = () => {
    u.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, E(j({}, (0, l.hH)(t)), {
      action_taken: h.W$[h.W$.PREVIEW],
      location: A
    })), (0, g.di)(t)
  }, C = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(b.ku, {
      guildId: t,
      onEdit: () => {
        u.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, E(j({}, (0, l.hH)(t)), {
          action_taken: h.W$[h.W$.EDIT_DEFAULT_CHANNELS],
          location: A
        })), (0, g.$K)(h.PG.DEFAULT_CHANNELS)
      },
      disableGoodStatus: n
    }), (0, r.jsx)(c.Z, {
      className: N.divider
    }), (0, r.jsx)(b.ap, {
      guildId: t,
      onEdit: () => {
        u.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, E(j({}, (0, l.hH)(t)), {
          action_taken: h.W$[h.W$.EDIT_CUSTOMIZATION_QUESTIONS],
          location: A
        })), (0, g.$K)(h.PG.CUSTOMIZATION_QUESTIONS)
      },
      disableGoodStatus: n
    }), (0, r.jsx)(c.Z, {
      className: N.divider
    }), (0, r.jsx)(b.P_, {
      guildId: t,
      onEdit: () => {
        u.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, E(j({}, (0, l.hH)(t)), {
          action_taken: h.W$[h.W$.EDIT_HOME_SETTINGS],
          location: A
        })), (0, g.$K)(h.PG.HOME_SETTINGS)
      },
      disableGoodStatus: n
    })]
  });
  return n ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(O, {
      guildId: t,
      handlePreview: m
    }), (0, r.jsx)(y, {}), (0, r.jsxs)("div", {
      className: N.content,
      children: [(0, r.jsx)(w, {
        guildId: t,
        handleOnboardingToggle: d
      }), C]
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: N.content,
      children: [(0, r.jsx)(P, {
        guildId: t,
        handleOnboardingToggle: d,
        handlePreview: m
      }), C]
    }), (0, r.jsx)(B, {
      guildId: t
    })]
  })
}

function O(e) {
  let {
    guildId: t,
    handlePreview: n
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.X6q, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: N.header,
      children: x.NW.string(x.t.mhxUsL)
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: N.subheader,
      children: x.NW.string(x.t.GtWdQE)
    }), (0, r.jsxs)("div", {
      className: N.help,
      children: [(0, r.jsx)(s.eee, {
        target: "_blank",
        href: v.EYA.GUILD_ONBOARDING_EXAMPLES,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: x.NW.string(x.t.Ok55Ki)
        })
      }), (0, r.jsx)("div", {
        className: N.helpSeparator
      }), (0, r.jsx)(s.eee, {
        onClick: n,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: x.NW.string(x.t["6gsjdH"])
        })
      }), (0, r.jsx)("div", {
        className: N.helpSeparator
      }), (0, r.jsx)(C.Wu, {
        guildId: t
      })]
    })]
  })
}

function y() {
  let e = "• ";
  return (0, r.jsxs)("div", {
    className: N.notice,
    children: [(0, r.jsx)("img", {
      className: N.wumpus,
      src: n(33631),
      alt: "wumpus"
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-md/semibold",
        color: "header-primary",
        className: N.header,
        children: x.NW.string(x.t.WslWRE)
      }), (0, r.jsxs)(s.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [e, x.NW.string(x.t.z9k21N)]
      }), (0, r.jsxs)(s.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [e, x.NW.string(x.t.t1LelZ)]
      })]
    })]
  })
}

function w(e) {
  let {
    guildId: t,
    handleOnboardingToggle: n
  } = e, a = (0, b.$$)(t), l = (0, i.e7)([o.Z], () => o.Z.getEnabled(t));
  return (0, r.jsxs)("div", {
    className: N.review,
    children: [(0, r.jsxs)("div", {
      className: N.reviewHeaderText,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-md/semibold",
        children: l ? x.NW.string(x.t.MBdTCQ) : x.NW.string(x.t.Wslim5)
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: l ? x.NW.string(x.t.LokpLi) : x.NW.string(x.t.nBIyJi)
      })]
    }), (0, r.jsx)(s.rsf, {
      checked: l,
      onChange: () => n(!1),
      disabled: !l && !a
    })]
  })
}

function P(e) {
  let {
    guildId: t,
    handleOnboardingToggle: n,
    handlePreview: a
  } = e, l = (0, b.$$)(t), o = (0, i.e7)([m.Z], () => m.Z.getSettings()), c = (0, A.uo)(o);
  return (0, r.jsxs)("div", {
    className: N.reviewHeader,
    children: [(0, r.jsxs)("div", {
      className: N.reviewHeaderText,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-md/semibold",
        children: l ? x.NW.string(x.t.FcIcT0) : x.NW.string(x.t.R09tJy)
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/normal",
        children: l ? x.NW.string(x.t.ockHVV) : x.NW.string(x.t["u/ji09"])
      })]
    }), (0, r.jsxs)("div", {
      className: N.reviewActions,
      children: [(0, r.jsx)(s.zxk, {
        size: s.zxk.Sizes.SMALL,
        color: s.zxk.Colors.PRIMARY,
        look: s.zxk.Looks.OUTLINED,
        onClick: a,
        children: x.NW.string(x.t["6gsjdH"])
      }), (0, r.jsx)(s.zxk, {
        size: s.zxk.Sizes.SMALL,
        color: s.zxk.Colors.BRAND,
        onClick: () => n(c),
        disabled: !l,
        children: x.NW.string(x.t.Yz7hsL)
      })]
    })]
  })
}

function B(e) {
  let {
    guildId: t
  } = e, n = (0, i.e7)([d.Z], () => d.Z.getGuild(t));
  return null == n || n.verificationLevel < v.sFg.VERY_HIGH ? null : (0, r.jsxs)("div", {
    className: N.rolesWarning,
    children: [(0, r.jsx)(s.P4T, {
      size: "xs",
      color: "currentColor",
      className: N.warningIcon
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: x.NW.string(x.t.HVoKZ2)
    })]
  })
}