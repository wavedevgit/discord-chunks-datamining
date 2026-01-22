/** Chunk was on 47841 **/
/** chunk id: 307209, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk212245 = require("./212245.js"),
  Chunk58149 = require("./58149.js"),
  Chunk591552 = require("./591552.js"),
  Chunk374084 = require("./374084.js"),
  Chunk813516 = require("./813516.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk527678 = require("./527678.js"),
  Chunk199940 = require("./199940.js"),
  Chunk132514 = require("./132514.js"),
  Chunk107795 = require("./107795.js"),
  Chunk400812 = require("./400812.js"),
  Chunk259866 = require("./259866.jsx"),
  Chunk960756 = require("./960756.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk117689 = require("./117689.js");

function A(e) {
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

function N(e) {
  let {
    guildId: t,
    completed: n
  } = e, l = (0, i.bG)([c.A], () => c.A.getEnabled(t)), {
    location: o
  } = (0, s.p)();
  o.object = n ? O.ZSU.ONBOARDING_EDIT : O.ZSU.ONBOARDING_REVIEW;
  let u = async function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    l ? (await (0, p.gr)(t, false), f.default.track(O.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, E(A({}, (0, a.H$)(t)), {
      action_taken: x.mj[x.mj.TOGGLE_DISABLED],
      location: o
    }))) : (await (0, p.gr)(t, true), e && (0, b.UP)(t, true), n ? f.default.track(O.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, E(A({}, (0, a.H$)(t)), {
      action_taken: x.mj[x.mj.TOGGLE_ENABLED],
      location: o
    })) : f.default.track(O.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, E(A({}, (0, a.H$)(t)), {
      step: x.Hy[x.Hy.REVIEW],
      back: false,
      skip: false,
      completed: true
    })))
  }, m = () => {
    f.default.track(O.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, E(A({}, (0, a.H$)(t)), {
      action_taken: x.mj[x.mj.PREVIEW],
      location: o
    })), (0, g.X$)(t)
  }, h = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(j.gE, {
      guildId: t,
      onEdit: () => {
        f.default.track(O.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, E(A({}, (0, a.H$)(t)), {
          action_taken: x.mj[x.mj.EDIT_DEFAULT_CHANNELS],
          location: o
        })), (0, g.e_)(x.Hy.DEFAULT_CHANNELS)
      },
      disableGoodStatus: n
    }), (0, r.jsx)(d.A, {
      className: v.yF
    }), (0, r.jsx)(j.aV, {
      guildId: t,
      onEdit: () => {
        f.default.track(O.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, E(A({}, (0, a.H$)(t)), {
          action_taken: x.mj[x.mj.EDIT_CONNECTIONS],
          location: o
        })), (0, g.e_)(x.Hy.CONNECTIONS)
      },
      disableGoodStatus: n
    }), (0, r.jsx)(d.A, {
      className: v.yF
    }), (0, r.jsx)(j.$i, {
      guildId: t,
      onEdit: () => {
        f.default.track(O.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, E(A({}, (0, a.H$)(t)), {
          action_taken: x.mj[x.mj.EDIT_CUSTOMIZATION_QUESTIONS],
          location: o
        })), (0, g.e_)(x.Hy.CUSTOMIZATION_QUESTIONS)
      },
      disableGoodStatus: n
    }), (0, r.jsx)(d.A, {
      className: v.yF
    }), (0, r.jsx)(j.bW, {
      guildId: t,
      onEdit: () => {
        f.default.track(O.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, E(A({}, (0, a.H$)(t)), {
          action_taken: x.mj[x.mj.EDIT_HOME_SETTINGS],
          location: o
        })), (0, g.e_)(x.Hy.HOME_SETTINGS)
      },
      disableGoodStatus: n
    })]
  });
  return n ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_, {
      guildId: t,
      handlePreview: m
    }), (0, r.jsx)(S, {}), (0, r.jsxs)("div", {
      className: v.Qs,
      children: [(0, r.jsx)(T, {
        guildId: t,
        handleOnboardingToggle: u
      }), h]
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: v.Qs,
      children: [(0, r.jsx)(I, {
        guildId: t,
        handleOnboardingToggle: u,
        handlePreview: m
      }), h]
    }), (0, r.jsx)(C, {
      guildId: t
    })]
  })
}

function _(e) {
  let {
    guildId: t,
    handlePreview: n
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      className: v.wx,
      children: y.intl.string(y.t.mhxUsE)
    }), (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "text-default",
      className: v.m_,
      children: y.intl.string(y.t.GtWdQH)
    }), (0, r.jsxs)("div", {
      className: v.yj,
      children: [(0, r.jsx)(l.MzZ, {
        target: "_blank",
        href: O.X7G.GUILD_ONBOARDING_EXAMPLES,
        children: (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: y.intl.string(y.t.Ok55Kh)
        })
      }), (0, r.jsx)("div", {
        className: v.RY
      }), (0, r.jsx)(l.MzZ, {
        onClick: n,
        children: (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: y.intl.string(y.t["6gsjdM"])
        })
      }), (0, r.jsx)("div", {
        className: v.RY
      }), (0, r.jsx)(h.mU, {
        guildId: t
      })]
    })]
  })
}

function S() {
  let e = "• ";
  return (0, r.jsxs)("div", {
    className: v.lm,
    children: [(0, r.jsx)("img", {
      className: v.kX,
      src: n(903702),
      alt: "wumpus"
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        className: v.wx,
        children: y.intl.string(y.t.WslWRL)
      }), (0, r.jsxs)(l.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: [e, y.intl.string(y.t.z9k21H)]
      }), (0, r.jsxs)(l.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: [e, y.intl.string(y.t.t1Lele)]
      })]
    })]
  })
}

function T(e) {
  let {
    guildId: t,
    handleOnboardingToggle: n
  } = e, s = (0, j.n5)(t), a = (0, i.bG)([c.A], () => c.A.getEnabled(t));
  return (0, r.jsx)("div", {
    className: v.NQ,
    children: (0, r.jsx)(l.dOG, {
      label: a ? y.intl.string(y.t.MBdTCZ) : y.intl.string(y.t["Wslim+"]),
      description: a ? y.intl.string(y.t.LokpLi) : y.intl.string(y.t.nBIyJp),
      checked: a,
      onChange: () => n(false),
      disabled: !a && !s
    })
  })
}

function I(e) {
  let {
    guildId: t,
    handleOnboardingToggle: n,
    handlePreview: s
  } = e, a = (0, j.n5)(t), c = (0, i.bG)([m.A], () => m.A.getSettings()), d = (0, o.Ic)(c);
  return (0, r.jsxs)("div", {
    className: v.cN,
    children: [(0, r.jsxs)("div", {
      className: v.Zj,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        children: a ? y.intl.string(y.t.FcIcT8) : y.intl.string(y.t.R09tJ2)
      }), (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        children: a ? y.intl.string(y.t.ockHVS) : y.intl.string(y.t["u/ji07"])
      })]
    }), (0, r.jsxs)("div", {
      className: v.a4,
      children: [(0, r.jsx)(l.Button, {
        size: "sm",
        variant: "secondary",
        onClick: s,
        text: y.intl.string(y.t["6gsjdM"])
      }), (0, r.jsx)(l.Button, {
        variant: "primary",
        size: "sm",
        text: y.intl.string(y.t.Yz7hsB),
        onClick: () => n(d),
        disabled: !a
      })]
    })]
  })
}

function C(e) {
  let {
    guildId: t
  } = e, n = (0, i.bG)([u.A], () => u.A.getGuild(t));
  return null == n || n.verificationLevel < O.PvD.VERY_HIGH ? null : (0, r.jsxs)("div", {
    className: v.et,
    children: [(0, r.jsx)(l.EpV, {
      size: "xs",
      color: "currentColor",
      className: v.QW
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: y.intl.string(y.t.HVoKZ5)
    })]
  })
}