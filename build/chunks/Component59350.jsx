/** Chunk was on 58121 **/
/** chunk id: 59350, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => el
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk45114 = require("./45114.js"),
  Chunk131388 = require("./131388.js"),
  Chunk493773 = require("./493773.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk125988 = require("./125988.js"),
  Chunk160404 = require("./160404.js"),
  Chunk240991 = require("./240991.js"),
  Chunk402235 = require("./402235.js"),
  Chunk703656 = require("./703656.js"),
  Chunk687158 = require("./687158.js"),
  Chunk287008 = require("./287008.js"),
  Chunk484459 = require("./484459.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk306680 = require("./306680.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
  Chunk998502 = require("./998502.js"),
  Chunk549817 = require("./549817.js"),
  Chunk745752 = require("./745752.js"),
  Chunk45966 = require("./45966.js"),
  Chunk637853 = require("./637853.js"),
  Chunk905204 = require("./905204.js"),
  Chunk968644 = require("./968644.js"),
  Chunk521941 = require("./521941.js"),
  Chunk657021 = require("./657021.jsx"),
  Chunk614328 = require("./614328.jsx"),
  Chunk104265 = require("./104265.jsx"),
  Chunk588632 = require("./588632.jsx"),
  Chunk290511 = require("./290511.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk490897 = require("./490897.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk811100 = require("./811100.js"),
  Chunk978966 = require("./978966.js"),
  Chunk960324 = require("./960324.js");

function J(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      a = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), a.forEach(function(n) {
      var a;
      a = t[n], n in e ? Object.defineProperty(e, n, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = a
    })
  }
  return e
}
let $ = Chunk481060.EFr.SIZE_80,
  ee = "required";

function en(e) {
  var n, t, r;
  let {
    guild: l,
    user: o
  } = e, {
    avatarSrc: d,
    eventHandlers: u,
    isAvatarAnimating: b
  } = (0, y.Z)({
    user: o,
    guildId: l.id,
    size: 120
  }), {
    avatarDecorationSrc: h
  } = (0, g.Z)({
    user: o,
    size: (0, m.y9)($),
    onlyAnimateOnHoverOrFocus: !b
  }), f = (0, c.e7)([_.ZP], () => _.ZP.getSelfMember(l.id)), x = (0, c.Wu)([_.ZP], () => _.ZP.getMemberRoleWithPendingUpdates(l.id, o.id)), v = (0, c.e7)([w.Z], () => w.Z.getSortedRoles(l.id)), Z = (0, j.ZP)(l.id, o.id), I = v.filter(e => x.includes(e.id)), P = (0, O.ZP)(o.id, l.id);
  (0, p.ZP)(() => {
    (0, N.Z)(o.id, o.getAvatarURL(l.id, (0, s.dcp)($)), {
      guildId: l.id
    })
  });
  let S = (0, C.parseBioReact)(null == P ? true : P.bio),
    B = T.ZP.getEnableHardwareAcceleration() ? s.Xo$ : s.qEK;
  return (0, a.jsxs)("div", {
    className: Q.profile,
    children: [(0, a.jsx)(s.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: X.intl.string(X.t.diTbF8)
    }), (0, a.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: X.intl.string(X.t["+8um3M"])
    }), (0, a.jsxs)("div", {
      className: Q.profileCard,
      children: [(0, a.jsx)("div", (t = J({}, u), r = r = {
        children: (0, a.jsx)(B, {
          src: d,
          avatarDecoration: h,
          size: $,
          "aria-label": o.username
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t.push.apply(t, a)
        }
        return t
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t)), (0, a.jsx)(s.Text, {
        variant: "text-lg/medium",
        color: "header-primary",
        className: Q.username,
        children: null != (n = null == f ? true : f.nick) ? n : E.ZP.getName(o)
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: i()(K.markup, Q.bio),
        children: S
      }), null != I && I.length > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("hr", {
          className: Q.separator
        }), (0, a.jsx)(s.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          className: Q.title,
          children: X.intl.string(X.t["LPJmL/"])
        }), (0, a.jsx)("div", {
          className: Q.roles,
          children: null == I ? true : I.map(e => {
            var n;
            return (0, a.jsxs)("div", {
              className: Q.role,
              children: [(0, a.jsx)(s.xko, {
                color: null != (n = e.colorString) ? n : q.Pbq,
                colors: Z ? e.colorStrings : null,
                className: Q.roleDot
              }), (0, a.jsx)(s.Text, {
                variant: "text-xs/medium",
                color: "header-primary",
                children: e.name
              })]
            }, e.id)
          })
        })]
      })]
    })]
  })
}

function et(e) {
  var n;
  let {
    prompt: t,
    guild: l
  } = e, [d, u] = r.useState(null), [b, p] = r.useState(new Set), h = null == t || null == (n = t.options) ? true : n.filter(e => b.has(e.id)), f = (0, R.L6)(h), m = (0, R.dX)(h), g = (0, c.Wu)([D.Z], () => D.Z.getOnboardingResponsesForPrompt(l.id, t.id)), {
    helpText: x,
    helpTextAdditional: C
  } = (0, L.p)({
    guild: l,
    prompt: t,
    selectedRoleIds: f,
    selectedChannelIds: m,
    itemHook: (e, n) => (0, a.jsx)(s.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: e
    }, n)
  }), {
    handleSelectOption: j
  } = (0, k.Z)(l.id), v = t.options.map(e => J({
    value: e.id
  }, e)), O = t.options.filter(e => g.includes(e.id)).map(e => e.id);
  return (0, a.jsxs)("div", {
    className: Q.prompt,
    "data-new": t.isNew,
    children: [t.isNew && (0, a.jsx)(s.IGR, {
      color: o.Z.unsafe_rawColors.BRAND_260.css,
      text: X.intl.string(X.t.y2b7CA),
      className: Q.newBadge
    }), (0, a.jsxs)(s.Heading, {
      className: Q.promptTitle,
      variant: "heading-md/semibold",
      color: "header-primary",
      children: [t.title, t.required ? (0, a.jsx)("span", {
        className: i()(Q.required, {
          [Q.error]: (null == d ? true : d.type) === ee
        }),
        children: "*"
      }) : null]
    }), (0, a.jsx)(W.Z, {
      options: v,
      value: O,
      onChange: e => {
        let n = e.find(e => !g.includes(e.id)),
          a = e.map(e => e.id);
        if (null != n) j(t, n, true), t.singleSelect && t.options.forEach(e => b.delete(e.id)), b.add(n.id);
        else {
          let e = g.filter(e => !a.includes(e)),
            n = t.options.filter(n => e.includes(n.id));
          if (g.length <= n.length && t.required) return void u({
            type: ee
          });
          n.forEach(e => {
            j(t, e, false), b.delete(e.id)
          })
        }
        p(new Set(b)), u(null)
      },
      canBeNew: !t.isNew
    }), (0, a.jsxs)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: Q.helpText,
      children: [x, " ", C]
    })]
  })
}

function ea(e) {
  let {
    guild: n
  } = e, t = (0, c.e7)([D.Z], () => D.Z.getConnections(n.id));
  return 0 === t.length ? null : (0, a.jsxs)("div", {
    className: Q.prompt,
    children: [(0, a.jsx)(s.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: X.intl.string(X.t.eDVMrA)
    }), (0, a.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: X.intl.string(X.t.BozOXu)
    }), (0, a.jsx)("div", {
      className: Q.connectionsContainer,
      children: t.map((e, t) => (0, a.jsx)(M.Z, {
        connection: e,
        guildId: n.id,
        location: f.Z.CHANNELS_AND_ROLES
      }, t))
    })]
  })
}

function er(e) {
  var n;
  let {
    prompt: t,
    guild: l
  } = e, [d, u] = r.useState(null), [b, p] = r.useState(new Set), h = null == t || null == (n = t.options) ? true : n.filter(e => b.has(e.id)), f = (0, R.L6)(h), m = (0, R.dX)(h), g = (0, c.Wu)([D.Z], () => D.Z.getOnboardingResponsesForPrompt(l.id, t.id)), {
    helpText: x,
    helpTextAdditional: C
  } = (0, L.p)({
    guild: l,
    prompt: t,
    selectedRoleIds: f,
    selectedChannelIds: m,
    itemHook: (e, n) => (0, a.jsx)(s.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: e
    }, n)
  }), {
    handleSelectOption: j
  } = (0, k.Z)(l.id);
  return (0, a.jsxs)("div", {
    className: Q.prompt,
    "data-new": t.isNew,
    children: [t.isNew && (0, a.jsx)(s.IGR, {
      color: o.Z.unsafe_rawColors.BRAND_260.css,
      text: X.intl.string(X.t.y2b7CA),
      className: Q.newBadge
    }), (0, a.jsxs)(s.Heading, {
      className: Q.promptTitle,
      variant: "heading-md/semibold",
      color: "header-primary",
      children: [t.title, t.required ? (0, a.jsx)("span", {
        className: i()(Q.required, {
          [Q.error]: (null == d ? true : d.type) === ee
        }),
        children: "*"
      }) : null]
    }), (0, a.jsx)("div", {
      className: Q.promptOptions,
      children: t.options.map(e => (0, a.jsx)(G.Z, {
        hideMemberCount: true,
        guildId: l.id,
        option: e,
        onSelect: n => ((e, n) => {
          if (!n && 1 === g.length && t.required) return void u({
            type: ee
          });
          j(t, e, null != n && n), t.singleSelect && n && t.options.forEach(e => b.delete(e.id)), n ? b.add(e.id) : b.delete(e.id), p(new Set(b)), u(null)
        })(e, n),
        selected: g.includes(e.id),
        canBeNew: !t.isNew
      }, e.id))
    }), (0, a.jsxs)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: Q.helpText,
      children: [x, " ", C]
    })]
  })
}

function el(e) {
  let {
    guildId: n,
    onBrowseChannels: t
  } = e, l = (0, d.wj)((0, h.ZP)()), p = (0, c.e7)([Z.Z], () => Z.Z.getGuild(n)), f = (0, c.e7)([P.default], () => P.default.getCurrentUser()), m = (0, b.Z)("(min-width: 1344px)") && null != f, g = r.useCallback(() => {
    (0, v.uL)(q.Z5c.CHANNEL(n, z.oC.CHANNEL_BROWSER)), null == t || t()
  }, [n, t]), C = (0, c.e7)([I.ZP], () => I.ZP.hasUnread(n, V.W.GUILD_ONBOARDING_QUESTION)), {
    onboardingPromptsRaw: j,
    newOnboardingPrompts: O,
    onboardingPromptsWithNewAnswers: y,
    newAnswersCount: N,
    onboardingPrompts: _
  } = (0, H.Z)(n);
  r.useEffect(() => {
    (null == p ? true : p.id) != null && !x.Z.isFullServerPreview(p.id) && (D.Z.shouldFetchPrompts(p.id) || C) && (0, A.eM)(p.id)
  }, [null == p ? true : p.id, C]), r.useEffect(() => {
    if ((null == p ? true : p.id) != null && !x.Z.isFullServerPreview(p.id)) return () => {
      (0, u.Ju)(p.id, V.W.GUILD_ONBOARDING_QUESTION, D.Z.ackIdForGuild(p.id)), B.Z.updateOnboardingResponses(p.id)
    }
  }, [null == p ? true : p.id]);
  let w = r.useCallback(e => {
    if (null == p) return null;
    switch (e.type) {
      case F.FN.MULTIPLE_CHOICE:
        return (0, a.jsx)(er, {
          prompt: e,
          guild: p
        }, e.id);
      case F.FN.DROPDOWN:
        return (0, a.jsx)(et, {
          prompt: e,
          guild: p
        }, e.id);
      default:
        (0, S.vE)(e.type)
    }
  }, [p]);
  if (null == p) return null;
  if (0 === j.length) {
    let e = l ? o.Z.unsafe_rawColors.PRIMARY_300.css : o.Z.unsafe_rawColors.PRIMARY_500.css,
      n = l ? o.Z.unsafe_rawColors.PRIMARY_700.css : o.Z.unsafe_rawColors.PRIMARY_230.css;
    return (0, a.jsx)("div", {
      className: i()(Y.content, Q.emptyPage),
      children: (0, a.jsxs)("div", {
        className: Q.emptyContainer,
        children: [(0, a.jsx)(U.Z, {
          className: Q.emptyIcon,
          foregroundColor: e,
          backgroundColor: n
        }), (0, a.jsx)(s.Heading, {
          className: Q.emptyHeader,
          variant: "heading-md/semibold",
          children: X.intl.string(X.t.leKHQz)
        }), (0, a.jsx)(s.Text, {
          variant: "text-sm/medium",
          children: X.intl.format(X.t["jH+ktB"], {
            onBrowseChannels: g
          })
        })]
      })
    })
  }
  return (0, a.jsxs)(s.Den, {
    className: Q.scroller,
    fade: true,
    children: [(0, a.jsxs)("div", {
      className: Q.pageBody,
      children: [(O.length > 0 || y.length > 0) && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          children: (0, a.jsx)(s.Heading, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: X.intl.format(X.t.iB5Gqe, {
              count: O.length + N
            })
          })
        }), O.map(w), y.map(w), (0, a.jsx)("div", {
          className: Q.sectionSeparator
        })]
      }), _.length > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(s.Heading, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: X.intl.format(X.t["8IV8K9"], {
              count: _.length
            })
          }), (0, a.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: X.intl.string(X.t.Ecz7T9)
          })]
        }), _.map(w)]
      }), (0, a.jsx)(ea, {
        guild: p
      })]
    }), m && (0, a.jsx)(en, {
      guild: p,
      user: f
    })]
  })
}