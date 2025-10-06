/** Chunk was on 64982 **/
/** chunk id: 729995, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => N
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function O(e) {
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
  let u = async function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    l ? (await (0, h.$y)(t, false), m.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, y(O({}, (0, a.hH)(t)), {
      action_taken: x.W$[x.W$.TOGGLE_DISABLED],
      location: c
    }))) : (await (0, h.$y)(t, true), e && (0, p.To)(t, true), n ? m.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, y(O({}, (0, a.hH)(t)), {
      action_taken: x.W$[x.W$.TOGGLE_ENABLED],
      location: c
    })) : m.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, y(O({}, (0, a.hH)(t)), {
      step: x.PG[x.PG.REVIEW],
      back: false,
      skip: false,
      completed: true
    })))
  }, f = () => {
    m.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, y(O({}, (0, a.hH)(t)), {
      action_taken: x.W$[x.W$.PREVIEW],
      location: c
    })), (0, g.di)(t)
  }, b = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(j.ku, {
      guildId: t,
      onEdit: () => {
        m.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, y(O({}, (0, a.hH)(t)), {
          action_taken: x.W$[x.W$.EDIT_DEFAULT_CHANNELS],
          location: c
        })), (0, g.$K)(x.PG.DEFAULT_CHANNELS)
      },
      disableGoodStatus: n
    }), (0, r.jsx)(d.Z, {
      className: C.divider
    }), (0, r.jsx)(j.ap, {
      guildId: t,
      onEdit: () => {
        m.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, y(O({}, (0, a.hH)(t)), {
          action_taken: x.W$[x.W$.EDIT_CUSTOMIZATION_QUESTIONS],
          location: c
        })), (0, g.$K)(x.PG.CUSTOMIZATION_QUESTIONS)
      },
      disableGoodStatus: n
    }), (0, r.jsx)(d.Z, {
      className: C.divider
    }), (0, r.jsx)(j.P_, {
      guildId: t,
      onEdit: () => {
        m.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, y(O({}, (0, a.hH)(t)), {
          action_taken: x.W$[x.W$.EDIT_HOME_SETTINGS],
          location: c
        })), (0, g.$K)(x.PG.HOME_SETTINGS)
      },
      disableGoodStatus: n
    })]
  });
  return n ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(E, {
      guildId: t,
      handlePreview: f
    }), (0, r.jsx)(I, {}), (0, r.jsxs)("div", {
      className: C.content,
      children: [(0, r.jsx)(S, {
        guildId: t,
        handleOnboardingToggle: u
      }), b]
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: C.content,
      children: [(0, r.jsx)(T, {
        guildId: t,
        handleOnboardingToggle: u,
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
    children: [(0, r.jsx)(l.X6q, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: C.header,
      children: v.intl.string(v.t.mhxUsL)
    }), (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: C.subheader,
      children: v.intl.string(v.t.GtWdQE)
    }), (0, r.jsxs)("div", {
      className: C.help,
      children: [(0, r.jsx)(l.eee, {
        target: "_blank",
        href: _.EYA.GUILD_ONBOARDING_EXAMPLES,
        children: (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: v.intl.string(v.t.Ok55Ki)
        })
      }), (0, r.jsx)("div", {
        className: C.helpSeparator
      }), (0, r.jsx)(l.eee, {
        onClick: n,
        children: (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: v.intl.string(v.t["6gsjdH"])
        })
      }), (0, r.jsx)("div", {
        className: C.helpSeparator
      }), (0, r.jsx)(b.Wu, {
        guildId: t
      })]
    })]
  })
}

function I() {
  let e = "• ";
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk820983.notice,
    children: [(0, Chunk951288.jsx)("img", {
      className: Chunk820983.wumpus,
      src: require("./33631.js"),
      alt: "wumpus"
    }), (0, Chunk951288.jsxs)("div", {
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/semibold",
        color: "header-primary",
        className: Chunk820983.header,
        children: Chunk388032.intl.string(Chunk388032.t.WslWRE)
      }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [module, Chunk388032.intl.string(Chunk388032.t.z9k21N)]
      }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [module, Chunk388032.intl.string(Chunk388032.t.t1LelZ)]
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
    className: C.review,
    children: (0, r.jsx)(l.rsf, {
      label: a ? v.intl.string(v.t.MBdTCQ) : v.intl.string(v.t.Wslim5),
      description: a ? v.intl.string(v.t.LokpLi) : v.intl.string(v.t.nBIyJi),
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
  } = e, a = (0, j.$$)(t), o = (0, i.e7)([f.Z], () => f.Z.getSettings()), d = (0, c.uo)(o);
  return (0, r.jsxs)("div", {
    className: C.reviewHeader,
    children: [(0, r.jsxs)("div", {
      className: C.reviewHeaderText,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-md/semibold",
        children: a ? v.intl.string(v.t.FcIcT0) : v.intl.string(v.t.R09tJy)
      }), (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        children: a ? v.intl.string(v.t.ockHVV) : v.intl.string(v.t["u/ji09"])
      })]
    }), (0, r.jsxs)("div", {
      className: C.reviewActions,
      children: [(0, r.jsx)(l.zxk, {
        size: "sm",
        variant: "secondary",
        onClick: s,
        text: v.intl.string(v.t["6gsjdH"])
      }), (0, r.jsx)(l.zxk, {
        variant: "primary",
        size: "sm",
        text: v.intl.string(v.t.Yz7hsL),
        onClick: () => n(d),
        disabled: !a
      })]
    })]
  })
}

function P(e) {
  let {
    guildId: t
  } = e, n = (0, i.e7)([u.Z], () => u.Z.getGuild(t));
  return null == n || n.verificationLevel < _.sFg.VERY_HIGH ? null : (0, r.jsxs)("div", {
    className: C.rolesWarning,
    children: [(0, r.jsx)(l.Mgn, {
      size: "xs",
      color: "currentColor",
      className: C.warningIcon
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: v.intl.string(v.t.HVoKZ2)
    })]
  })
}