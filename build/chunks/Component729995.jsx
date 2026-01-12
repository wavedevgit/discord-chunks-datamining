/** Chunk was on 9536 **/
/** chunk id: 729995, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk2052 = require("./2052.js"),
  Chunk367907 = require("./367907.js"),
  Chunk45966 = require("./45966.js"),
  Chunk734893 = require("./734893.js"),
  Chunk661824 = require("./661824.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk983135 = require("./983135.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk570961 = require("./570961.js"),
  Chunk84658 = require("./84658.js"),
  Chunk974513 = require("./974513.jsx"),
  Chunk677892 = require("./677892.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk199368 = require("./199368.js");

function C(e) {
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

function N(e, t) {
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

function E(e) {
  let {
    guildId: t,
    completed: n
  } = e, l = (0, i.e7)([o.Z], () => o.Z.getEnabled(t)), {
    location: c
  } = (0, a.O)();
  c.object = n ? v.qAy.ONBOARDING_EDIT : v.qAy.ONBOARDING_REVIEW;
  let u = async function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    l ? (await (0, p.$y)(t, false), g.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, N(C({}, (0, s.hH)(t)), {
      action_taken: h.W$[h.W$.TOGGLE_DISABLED],
      location: c
    }))) : (await (0, p.$y)(t, true), e && (0, f.To)(t, true), n ? g.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, N(C({}, (0, s.hH)(t)), {
      action_taken: h.W$[h.W$.TOGGLE_ENABLED],
      location: c
    })) : g.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, N(C({}, (0, s.hH)(t)), {
      step: h.PG[h.PG.REVIEW],
      back: false,
      skip: false,
      completed: true
    })))
  }, b = () => {
    g.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, N(C({}, (0, s.hH)(t)), {
      action_taken: h.W$[h.W$.PREVIEW],
      location: c
    })), (0, m.di)(t)
  }, x = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(j.ku, {
      guildId: t,
      onEdit: () => {
        g.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, N(C({}, (0, s.hH)(t)), {
          action_taken: h.W$[h.W$.EDIT_DEFAULT_CHANNELS],
          location: c
        })), (0, m.$K)(h.PG.DEFAULT_CHANNELS)
      },
      disableGoodStatus: n
    }), (0, r.jsx)(d.Z, {
      className: y.divider
    }), (0, r.jsx)(j.ih, {
      guildId: t,
      onEdit: () => {
        g.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, N(C({}, (0, s.hH)(t)), {
          action_taken: h.W$[h.W$.EDIT_CONNECTIONS],
          location: c
        })), (0, m.$K)(h.PG.CONNECTIONS)
      },
      disableGoodStatus: n
    }), (0, r.jsx)(d.Z, {
      className: y.divider
    }), (0, r.jsx)(j.ap, {
      guildId: t,
      onEdit: () => {
        g.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, N(C({}, (0, s.hH)(t)), {
          action_taken: h.W$[h.W$.EDIT_CUSTOMIZATION_QUESTIONS],
          location: c
        })), (0, m.$K)(h.PG.CUSTOMIZATION_QUESTIONS)
      },
      disableGoodStatus: n
    }), (0, r.jsx)(d.Z, {
      className: y.divider
    }), (0, r.jsx)(j.P_, {
      guildId: t,
      onEdit: () => {
        g.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, N(C({}, (0, s.hH)(t)), {
          action_taken: h.W$[h.W$.EDIT_HOME_SETTINGS],
          location: c
        })), (0, m.$K)(h.PG.HOME_SETTINGS)
      },
      disableGoodStatus: n
    })]
  });
  return n ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(I, {
      guildId: t,
      handlePreview: b
    }), (0, r.jsx)(S, {}), (0, r.jsxs)("div", {
      className: y.content,
      children: [(0, r.jsx)(_, {
        guildId: t,
        handleOnboardingToggle: u
      }), x]
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: y.content,
      children: [(0, r.jsx)(T, {
        guildId: t,
        handleOnboardingToggle: u,
        handlePreview: b
      }), x]
    }), (0, r.jsx)(P, {
      guildId: t
    })]
  })
}

function I(e) {
  let {
    guildId: t,
    handlePreview: n
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      className: y.header,
      children: O.intl.string(O.t.mhxUsE)
    }), (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "text-default",
      className: y.subheader,
      children: O.intl.string(O.t.GtWdQH)
    }), (0, r.jsxs)("div", {
      className: y.help,
      children: [(0, r.jsx)(l.eee, {
        target: "_blank",
        href: v.EYA.GUILD_ONBOARDING_EXAMPLES,
        children: (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: O.intl.string(O.t.Ok55Kh)
        })
      }), (0, r.jsx)("div", {
        className: y.helpSeparator
      }), (0, r.jsx)(l.eee, {
        onClick: n,
        children: (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: O.intl.string(O.t["6gsjdM"])
        })
      }), (0, r.jsx)("div", {
        className: y.helpSeparator
      }), (0, r.jsx)(x.Wu, {
        guildId: t
      })]
    })]
  })
}

function S() {
  let e = "• ";
  return (0, r.jsxs)("div", {
    className: y.notice,
    children: [(0, r.jsx)("img", {
      className: y.wumpus,
      src: n(33631),
      alt: "wumpus"
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        className: y.header,
        children: O.intl.string(O.t.WslWRL)
      }), (0, r.jsxs)(l.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: [e, O.intl.string(O.t.z9k21H)]
      }), (0, r.jsxs)(l.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: [e, O.intl.string(O.t.t1Lele)]
      })]
    })]
  })
}

function _(e) {
  let {
    guildId: t,
    handleOnboardingToggle: n
  } = e, a = (0, j.$$)(t), s = (0, i.e7)([o.Z], () => o.Z.getEnabled(t));
  return (0, r.jsx)("div", {
    className: y.review,
    children: (0, r.jsx)(l.rsf, {
      label: s ? O.intl.string(O.t.MBdTCZ) : O.intl.string(O.t["Wslim+"]),
      description: s ? O.intl.string(O.t.LokpLi) : O.intl.string(O.t.nBIyJp),
      checked: s,
      onChange: () => n(false),
      disabled: !s && !a
    })
  })
}

function T(e) {
  let {
    guildId: t,
    handleOnboardingToggle: n,
    handlePreview: a
  } = e, s = (0, j.$$)(t), o = (0, i.e7)([b.Z], () => b.Z.getSettings()), d = (0, c.uo)(o);
  return (0, r.jsxs)("div", {
    className: y.reviewHeader,
    children: [(0, r.jsxs)("div", {
      className: y.reviewHeaderText,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        children: s ? O.intl.string(O.t.FcIcT8) : O.intl.string(O.t.R09tJ2)
      }), (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        children: s ? O.intl.string(O.t.ockHVS) : O.intl.string(O.t["u/ji07"])
      })]
    }), (0, r.jsxs)("div", {
      className: y.reviewActions,
      children: [(0, r.jsx)(l.Button, {
        size: "sm",
        variant: "secondary",
        onClick: a,
        text: O.intl.string(O.t["6gsjdM"])
      }), (0, r.jsx)(l.Button, {
        variant: "primary",
        size: "sm",
        text: O.intl.string(O.t.Yz7hsB),
        onClick: () => n(d),
        disabled: !s
      })]
    })]
  })
}

function P(e) {
  let {
    guildId: t
  } = e, n = (0, i.e7)([u.Z], () => u.Z.getGuild(t));
  return null == n || n.verificationLevel < v.sFg.VERY_HIGH ? null : (0, r.jsxs)("div", {
    className: y.rolesWarning,
    children: [(0, r.jsx)(l.Mgn, {
      size: "xs",
      color: "currentColor",
      className: y.warningIcon
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: O.intl.string(O.t.HVoKZ5)
    })]
  })
}