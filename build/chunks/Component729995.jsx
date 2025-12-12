/** Chunk was on 384 **/
/** chunk id: 729995, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => N
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
  Chunk820983 = require("./820983.js");

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

function y(e, t) {
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

function N(e) {
  let {
    guildId: t,
    completed: n
  } = e, l = (0, i.e7)([o.Z], () => o.Z.getEnabled(t)), {
    location: c
  } = (0, s.O)();
  c.object = n ? _.qAy.ONBOARDING_EDIT : _.qAy.ONBOARDING_REVIEW;
  let d = async function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    l ? (await (0, h.$y)(t, false), g.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, y(C({}, (0, a.hH)(t)), {
      action_taken: x.W$[x.W$.TOGGLE_DISABLED],
      location: c
    }))) : (await (0, h.$y)(t, true), e && (0, p.To)(t, true), n ? g.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, y(C({}, (0, a.hH)(t)), {
      action_taken: x.W$[x.W$.TOGGLE_ENABLED],
      location: c
    })) : g.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, y(C({}, (0, a.hH)(t)), {
      step: x.PG[x.PG.REVIEW],
      back: false,
      skip: false,
      completed: true
    })))
  }, f = () => {
    g.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, y(C({}, (0, a.hH)(t)), {
      action_taken: x.W$[x.W$.PREVIEW],
      location: c
    })), (0, m.di)(t)
  }, b = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(j.ku, {
      guildId: t,
      onEdit: () => {
        g.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, y(C({}, (0, a.hH)(t)), {
          action_taken: x.W$[x.W$.EDIT_DEFAULT_CHANNELS],
          location: c
        })), (0, m.$K)(x.PG.DEFAULT_CHANNELS)
      },
      disableGoodStatus: n
    }), (0, r.jsx)(u.Z, {
      className: O.divider
    }), (0, r.jsx)(j.ih, {
      guildId: t,
      onEdit: () => {
        g.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, y(C({}, (0, a.hH)(t)), {
          action_taken: x.W$[x.W$.EDIT_CONNECTIONS],
          location: c
        })), (0, m.$K)(x.PG.CONNECTIONS)
      },
      disableGoodStatus: n
    }), (0, r.jsx)(u.Z, {
      className: O.divider
    }), (0, r.jsx)(j.ap, {
      guildId: t,
      onEdit: () => {
        g.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, y(C({}, (0, a.hH)(t)), {
          action_taken: x.W$[x.W$.EDIT_CUSTOMIZATION_QUESTIONS],
          location: c
        })), (0, m.$K)(x.PG.CUSTOMIZATION_QUESTIONS)
      },
      disableGoodStatus: n
    }), (0, r.jsx)(u.Z, {
      className: O.divider
    }), (0, r.jsx)(j.P_, {
      guildId: t,
      onEdit: () => {
        g.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, y(C({}, (0, a.hH)(t)), {
          action_taken: x.W$[x.W$.EDIT_HOME_SETTINGS],
          location: c
        })), (0, m.$K)(x.PG.HOME_SETTINGS)
      },
      disableGoodStatus: n
    })]
  });
  return n ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(E, {
      guildId: t,
      handlePreview: f
    }), (0, r.jsx)(I, {}), (0, r.jsxs)("div", {
      className: O.content,
      children: [(0, r.jsx)(S, {
        guildId: t,
        handleOnboardingToggle: d
      }), b]
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: O.content,
      children: [(0, r.jsx)(T, {
        guildId: t,
        handleOnboardingToggle: d,
        handlePreview: f
      }), b]
    }), (0, r.jsx)(P, {
      guildId: t
    })]
  })
}

function E(e) {
  let {
    guildId: t,
    handlePreview: n
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      className: O.header,
      children: v.intl.string(v.t.mhxUsE)
    }), (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "text-default",
      className: O.subheader,
      children: v.intl.string(v.t.GtWdQH)
    }), (0, r.jsxs)("div", {
      className: O.help,
      children: [(0, r.jsx)(l.Anchor, {
        target: "_blank",
        href: _.EYA.GUILD_ONBOARDING_EXAMPLES,
        children: (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: v.intl.string(v.t.Ok55Kh)
        })
      }), (0, r.jsx)("div", {
        className: O.helpSeparator
      }), (0, r.jsx)(l.Anchor, {
        onClick: n,
        children: (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: v.intl.string(v.t["6gsjdM"])
        })
      }), (0, r.jsx)("div", {
        className: O.helpSeparator
      }), (0, r.jsx)(b.Wu, {
        guildId: t
      })]
    })]
  })
}

function I() {
  let e = "• ";
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk820983.notice,
    children: [(0, Chunk54381.jsx)("img", {
      className: Chunk820983.wumpus,
      src: require("./33631.js"),
      alt: "wumpus"
    }), (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        className: Chunk820983.header,
        children: Chunk388032.intl.string(Chunk388032.t.WslWRL)
      }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: [module, Chunk388032.intl.string(Chunk388032.t.z9k21H)]
      }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: [module, Chunk388032.intl.string(Chunk388032.t.t1Lele)]
      })]
    })]
  })
}

function S(e) {
  let {
    guildId: t,
    handleOnboardingToggle: n
  } = e, s = (0, j.$$)(t), a = (0, i.e7)([o.Z], () => o.Z.getEnabled(t));
  return (0, r.jsx)("div", {
    className: O.review,
    children: (0, r.jsx)(l.rsf, {
      label: a ? v.intl.string(v.t.MBdTCZ) : v.intl.string(v.t["Wslim+"]),
      description: a ? v.intl.string(v.t.LokpLi) : v.intl.string(v.t.nBIyJp),
      checked: a,
      onChange: () => n(false),
      disabled: !a && !s
    })
  })
}

function T(e) {
  let {
    guildId: t,
    handleOnboardingToggle: n,
    handlePreview: s
  } = e, a = (0, j.$$)(t), o = (0, i.e7)([f.Z], () => f.Z.getSettings()), u = (0, c.uo)(o);
  return (0, r.jsxs)("div", {
    className: O.reviewHeader,
    children: [(0, r.jsxs)("div", {
      className: O.reviewHeaderText,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        children: a ? v.intl.string(v.t.FcIcT8) : v.intl.string(v.t.R09tJ2)
      }), (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        children: a ? v.intl.string(v.t.ockHVS) : v.intl.string(v.t["u/ji07"])
      })]
    }), (0, r.jsxs)("div", {
      className: O.reviewActions,
      children: [(0, r.jsx)(l.Button, {
        size: "sm",
        variant: "secondary",
        onClick: s,
        text: v.intl.string(v.t["6gsjdM"])
      }), (0, r.jsx)(l.Button, {
        variant: "primary",
        size: "sm",
        text: v.intl.string(v.t.Yz7hsB),
        onClick: () => n(u),
        disabled: !a
      })]
    })]
  })
}

function P(e) {
  let {
    guildId: t
  } = e, n = (0, i.e7)([d.Z], () => d.Z.getGuild(t));
  return null == n || n.verificationLevel < _.sFg.VERY_HIGH ? null : (0, r.jsxs)("div", {
    className: O.rolesWarning,
    children: [(0, r.jsx)(l.Mgn, {
      size: "xs",
      color: "currentColor",
      className: O.warningIcon
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: v.intl.string(v.t.HVoKZ5)
    })]
  })
}