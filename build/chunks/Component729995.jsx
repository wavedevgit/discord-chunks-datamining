/** Chunk was on 49236 **/
/** chunk id: 729995, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
  } = e, l = (0, i.e7)([c.Z], () => c.Z.getEnabled(t)), {
    location: s
  } = (0, a.O)();
  s.object = n ? _.qAy.ONBOARDING_EDIT : _.qAy.ONBOARDING_REVIEW;
  let d = async function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    l ? (await (0, x.$y)(t, false), g.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, N(C({}, (0, o.hH)(t)), {
      action_taken: b.W$[b.W$.TOGGLE_DISABLED],
      location: s
    }))) : (await (0, x.$y)(t, true), e && (0, f.To)(t, true), n ? g.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, N(C({}, (0, o.hH)(t)), {
      action_taken: b.W$[b.W$.TOGGLE_ENABLED],
      location: s
    })) : g.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, N(C({}, (0, o.hH)(t)), {
      step: b.PG[b.PG.REVIEW],
      back: false,
      skip: false,
      completed: true
    })))
  }, m = () => {
    g.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, N(C({}, (0, o.hH)(t)), {
      action_taken: b.W$[b.W$.PREVIEW],
      location: s
    })), (0, p.di)(t)
  }, h = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(v.ku, {
      guildId: t,
      onEdit: () => {
        g.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, N(C({}, (0, o.hH)(t)), {
          action_taken: b.W$[b.W$.EDIT_DEFAULT_CHANNELS],
          location: s
        })), (0, p.$K)(b.PG.DEFAULT_CHANNELS)
      },
      disableGoodStatus: n
    }), (0, r.jsx)(u.Z, {
      className: y.divider
    }), (0, r.jsx)(v.ap, {
      guildId: t,
      onEdit: () => {
        g.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, N(C({}, (0, o.hH)(t)), {
          action_taken: b.W$[b.W$.EDIT_CUSTOMIZATION_QUESTIONS],
          location: s
        })), (0, p.$K)(b.PG.CUSTOMIZATION_QUESTIONS)
      },
      disableGoodStatus: n
    }), (0, r.jsx)(u.Z, {
      className: y.divider
    }), (0, r.jsx)(v.P_, {
      guildId: t,
      onEdit: () => {
        g.default.track(_.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, N(C({}, (0, o.hH)(t)), {
          action_taken: b.W$[b.W$.EDIT_HOME_SETTINGS],
          location: s
        })), (0, p.$K)(b.PG.HOME_SETTINGS)
      },
      disableGoodStatus: n
    })]
  });
  return n ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(I, {
      guildId: t,
      handlePreview: m
    }), (0, r.jsx)(S, {}), (0, r.jsxs)("div", {
      className: y.content,
      children: [(0, r.jsx)(T, {
        guildId: t,
        handleOnboardingToggle: d
      }), h]
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: y.content,
      children: [(0, r.jsx)(P, {
        guildId: t,
        handleOnboardingToggle: d,
        handlePreview: m
      }), h]
    }), (0, r.jsx)(w, {
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
    children: [(0, r.jsx)(s.X6q, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: y.header,
      children: O.intl.string(O.t.mhxUsL)
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: y.subheader,
      children: O.intl.string(O.t.GtWdQE)
    }), (0, r.jsxs)("div", {
      className: y.help,
      children: [(0, r.jsx)(s.eee, {
        target: "_blank",
        href: _.EYA.GUILD_ONBOARDING_EXAMPLES,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: O.intl.string(O.t.Ok55Ki)
        })
      }), (0, r.jsx)("div", {
        className: y.helpSeparator
      }), (0, r.jsx)(s.eee, {
        onClick: n,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: O.intl.string(O.t["6gsjdH"])
        })
      }), (0, r.jsx)("div", {
        className: y.helpSeparator
      }), (0, r.jsx)(j.Wu, {
        guildId: t
      })]
    })]
  })
}

function S() {
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

function T(e) {
  let {
    guildId: t,
    handleOnboardingToggle: n
  } = e, a = (0, v.$$)(t), o = (0, i.e7)([c.Z], () => c.Z.getEnabled(t));
  return (0, r.jsxs)("div", {
    className: y.review,
    children: [(0, r.jsxs)("div", {
      className: y.reviewHeaderText,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-md/semibold",
        children: o ? O.intl.string(O.t.MBdTCQ) : O.intl.string(O.t.Wslim5)
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: o ? O.intl.string(O.t.LokpLi) : O.intl.string(O.t.nBIyJi)
      })]
    }), (0, r.jsx)(l.T2, {
      checked: o,
      onChange: () => n(false),
      disabled: !o && !a
    })]
  })
}

function P(e) {
  let {
    guildId: t,
    handleOnboardingToggle: n,
    handlePreview: l
  } = e, a = (0, v.$$)(t), o = (0, i.e7)([h.Z], () => h.Z.getSettings()), c = (0, d.uo)(o);
  return (0, r.jsxs)("div", {
    className: y.reviewHeader,
    children: [(0, r.jsxs)("div", {
      className: y.reviewHeaderText,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-md/semibold",
        children: a ? O.intl.string(O.t.FcIcT0) : O.intl.string(O.t.R09tJy)
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/normal",
        children: a ? O.intl.string(O.t.ockHVV) : O.intl.string(O.t["u/ji09"])
      })]
    }), (0, r.jsxs)("div", {
      className: y.reviewActions,
      children: [(0, r.jsx)(s.zxk, {
        size: "sm",
        variant: "secondary",
        onClick: l,
        text: O.intl.string(O.t["6gsjdH"])
      }), (0, r.jsx)(s.zxk, {
        variant: "primary",
        size: "sm",
        text: O.intl.string(O.t.Yz7hsL),
        onClick: () => n(c),
        disabled: !a
      })]
    })]
  })
}

function w(e) {
  let {
    guildId: t
  } = e, n = (0, i.e7)([m.Z], () => m.Z.getGuild(t));
  return null == n || n.verificationLevel < _.sFg.VERY_HIGH ? null : (0, r.jsxs)("div", {
    className: y.rolesWarning,
    children: [(0, r.jsx)(s.Mgn, {
      size: "xs",
      color: "currentColor",
      className: y.warningIcon
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: O.intl.string(O.t.HVoKZ2)
    })]
  })
}