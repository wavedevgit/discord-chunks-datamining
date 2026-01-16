/** Chunk was on 58121 **/
/** chunk id: 59350, original params: e,t,n (module,exports,require) **/
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
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}
let $ = Chunk481060.EFr.SIZE_80,
  ee = "required";

function et(e) {
  var t, n, r;
  let {
    guild: l,
    user: c
  } = e, {
    avatarSrc: d,
    eventHandlers: u,
    isAvatarAnimating: b
  } = (0, y.Z)({
    user: c,
    guildId: l.id,
    size: 120
  }), {
    avatarDecorationSrc: f
  } = (0, g.Z)({
    user: c,
    size: (0, m.y9)($),
    onlyAnimateOnHoverOrFocus: !b
  }), h = (0, o.e7)([_.ZP], () => _.ZP.getSelfMember(l.id)), x = (0, o.Wu)([_.ZP], () => _.ZP.getMemberRoleWithPendingUpdates(l.id, c.id)), v = (0, o.e7)([Z.Z], () => Z.Z.getSortedRoles(l.id)), w = (0, j.ZP)(l.id, c.id), I = v.filter(e => x.includes(e.id)), P = (0, O.ZP)(c.id, l.id);
  (0, p.ZP)(() => {
    (0, N.Z)(c.id, c.getAvatarURL(l.id, (0, s.dcp)($)), {
      guildId: l.id
    })
  });
  let S = (0, C.parseBioReact)(null == P ? true : P.bio),
    B = T.ZP.getEnableHardwareAcceleration() ? s.Xo$ : s.qEK;
  return (0, a.jsxs)("div", {
    className: Q.profile,
    children: [(0, a.jsx)(s.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: X.intl.string(X.t.diTbF8)
    }), (0, a.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: X.intl.string(X.t["+8um3M"])
    }), (0, a.jsxs)("div", {
      className: Q.profileCard,
      children: [(0, a.jsx)("div", (n = J({}, u), r = r = {
        children: (0, a.jsx)(B, {
          src: d,
          avatarDecoration: f,
          size: $,
          "aria-label": c.username
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n.push.apply(n, a)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n)), (0, a.jsx)(s.Text, {
        variant: "text-lg/medium",
        color: "text-strong",
        className: Q.username,
        children: null != (t = null == h ? true : h.nick) ? t : E.ZP.getName(c)
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
            var t;
            return (0, a.jsxs)("div", {
              className: Q.role,
              children: [(0, a.jsx)(s.xko, {
                color: null != (t = e.colorString) ? t : q.Pbq,
                colors: w ? e.colorStrings : null,
                className: Q.roleDot
              }), (0, a.jsx)(s.Text, {
                variant: "text-xs/medium",
                color: "text-strong",
                children: e.name
              })]
            }, e.id)
          })
        })]
      })]
    })]
  })
}

function en(e) {
  var t;
  let {
    prompt: n,
    guild: l
  } = e, [d, u] = r.useState(null), [b, p] = r.useState(new Set), f = null == n || null == (t = n.options) ? true : t.filter(e => b.has(e.id)), h = (0, R.L6)(f), m = (0, R.dX)(f), g = (0, o.Wu)([A.Z], () => A.Z.getOnboardingResponsesForPrompt(l.id, n.id)), {
    helpText: x,
    helpTextAdditional: C
  } = (0, L.p)({
    guild: l,
    prompt: n,
    selectedRoleIds: h,
    selectedChannelIds: m,
    itemHook: (e, t) => (0, a.jsx)(s.Text, {
      variant: "text-xs/medium",
      color: "text-strong",
      children: e
    }, t)
  }), {
    handleSelectOption: j
  } = (0, k.Z)(l.id), v = n.options.map(e => J({
    value: e.id
  }, e)), O = n.options.filter(e => g.includes(e.id)).map(e => e.id);
  return (0, a.jsxs)("div", {
    className: Q.prompt,
    "data-new": n.isNew,
    children: [n.isNew && (0, a.jsx)(s.IGR, {
      color: c.Z.unsafe_rawColors.BRAND_260.css,
      text: X.intl.string(X.t.y2b7CA),
      className: Q.newBadge
    }), (0, a.jsxs)(s.Heading, {
      className: Q.promptTitle,
      variant: "heading-md/semibold",
      color: "text-strong",
      children: [n.title, n.required ? (0, a.jsx)("span", {
        className: i()(Q.required, {
          [Q.error]: (null == d ? true : d.type) === ee
        }),
        children: "*"
      }) : null]
    }), (0, a.jsx)(W.Z, {
      options: v,
      value: O,
      onChange: e => {
        let t = e.find(e => !g.includes(e.id)),
          a = e.map(e => e.id);
        if (null != t) j(n, t, true), n.singleSelect && n.options.forEach(e => b.delete(e.id)), b.add(t.id);
        else {
          let e = g.filter(e => !a.includes(e)),
            t = n.options.filter(t => e.includes(t.id));
          if (g.length <= t.length && n.required) return void u({
            type: ee
          });
          t.forEach(e => {
            j(n, e, false), b.delete(e.id)
          })
        }
        p(new Set(b)), u(null)
      },
      canBeNew: !n.isNew
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
    guild: t
  } = e, n = (0, o.e7)([A.Z], () => A.Z.getConnections(t.id));
  return 0 === n.length ? null : (0, a.jsxs)("div", {
    className: Q.prompt,
    children: [(0, a.jsx)(s.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: X.intl.string(X.t.eDVMrA)
    }), (0, a.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: X.intl.string(X.t.BozOXu)
    }), (0, a.jsx)("div", {
      className: Q.connectionsContainer,
      children: n.map((e, n) => (0, a.jsx)(M.Z, {
        connection: e,
        guildId: t.id,
        location: h.Z.CHANNELS_AND_ROLES
      }, n))
    })]
  })
}

function er(e) {
  var t;
  let {
    prompt: n,
    guild: l
  } = e, [d, u] = r.useState(null), [b, p] = r.useState(new Set), f = null == n || null == (t = n.options) ? true : t.filter(e => b.has(e.id)), h = (0, R.L6)(f), m = (0, R.dX)(f), g = (0, o.Wu)([A.Z], () => A.Z.getOnboardingResponsesForPrompt(l.id, n.id)), {
    helpText: x,
    helpTextAdditional: C
  } = (0, L.p)({
    guild: l,
    prompt: n,
    selectedRoleIds: h,
    selectedChannelIds: m,
    itemHook: (e, t) => (0, a.jsx)(s.Text, {
      variant: "text-xs/medium",
      color: "text-strong",
      children: e
    }, t)
  }), {
    handleSelectOption: j
  } = (0, k.Z)(l.id);
  return (0, a.jsxs)("div", {
    className: Q.prompt,
    "data-new": n.isNew,
    children: [n.isNew && (0, a.jsx)(s.IGR, {
      color: c.Z.unsafe_rawColors.BRAND_260.css,
      text: X.intl.string(X.t.y2b7CA),
      className: Q.newBadge
    }), (0, a.jsxs)(s.Heading, {
      className: Q.promptTitle,
      variant: "heading-md/semibold",
      color: "text-strong",
      children: [n.title, n.required ? (0, a.jsx)("span", {
        className: i()(Q.required, {
          [Q.error]: (null == d ? true : d.type) === ee
        }),
        children: "*"
      }) : null]
    }), (0, a.jsx)("div", {
      className: Q.promptOptions,
      children: n.options.map(e => (0, a.jsx)(G.Z, {
        hideMemberCount: true,
        guildId: l.id,
        option: e,
        onSelect: t => ((e, t) => {
          if (!t && 1 === g.length && n.required) return void u({
            type: ee
          });
          j(n, e, null != t && t), n.singleSelect && t && n.options.forEach(e => b.delete(e.id)), t ? b.add(e.id) : b.delete(e.id), p(new Set(b)), u(null)
        })(e, t),
        selected: g.includes(e.id),
        canBeNew: !n.isNew
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
    guildId: t,
    onBrowseChannels: n
  } = e, l = (0, d.wj)((0, f.ZP)()), p = (0, o.e7)([w.Z], () => w.Z.getGuild(t)), h = (0, o.e7)([P.default], () => P.default.getCurrentUser()), m = (0, b.Z)("(min-width: 1344px)") && null != h, g = r.useCallback(() => {
    (0, v.uL)(q.Z5c.CHANNEL(t, z.oC.CHANNEL_BROWSER)), null == n || n()
  }, [t, n]), C = (0, o.e7)([I.ZP], () => I.ZP.hasUnread(t, V.W.GUILD_ONBOARDING_QUESTION)), j = null == p ? true : p.latestOnboardingQuestionId, {
    onboardingPromptsRaw: O,
    newOnboardingPrompts: y,
    onboardingPromptsWithNewAnswers: N,
    newAnswersCount: _,
    onboardingPrompts: Z
  } = (0, H.Z)(t);
  r.useEffect(() => {
    (null == p ? true : p.id) != null && !x.Z.isFullServerPreview(p.id) && (A.Z.shouldFetchPrompts(p.id) || C) && (0, D.eM)(p.id)
  }, [null == p ? true : p.id, C, j]), r.useEffect(() => {
    if ((null == p ? true : p.id) != null && !x.Z.isFullServerPreview(p.id)) return () => {
      (0, u.Ju)(p.id, V.W.GUILD_ONBOARDING_QUESTION, A.Z.ackIdForGuild(p.id)), B.Z.updateOnboardingResponses(p.id)
    }
  }, [null == p ? true : p.id]);
  let E = r.useCallback(e => {
    if (null == p) return null;
    switch (e.type) {
      case F.FN.MULTIPLE_CHOICE:
        return (0, a.jsx)(er, {
          prompt: e,
          guild: p
        }, e.id);
      case F.FN.DROPDOWN:
        return (0, a.jsx)(en, {
          prompt: e,
          guild: p
        }, e.id);
      default:
        (0, S.vE)(e.type)
    }
  }, [p]);
  if (null == p) return null;
  if (0 === O.length) {
    let e = l ? c.Z.unsafe_rawColors.PRIMARY_300.css : c.Z.unsafe_rawColors.PRIMARY_500.css,
      t = l ? c.Z.unsafe_rawColors.PRIMARY_700.css : c.Z.unsafe_rawColors.PRIMARY_230.css;
    return (0, a.jsx)("div", {
      className: i()(Y.content, Q.emptyPage),
      children: (0, a.jsxs)("div", {
        className: Q.emptyContainer,
        children: [(0, a.jsx)(U.Z, {
          className: Q.emptyIcon,
          foregroundColor: e,
          backgroundColor: t
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
      children: [(y.length > 0 || N.length > 0) && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          children: (0, a.jsx)(s.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: X.intl.format(X.t.iB5Gqe, {
              count: y.length + _
            })
          })
        }), y.map(E), N.map(E), (0, a.jsx)("div", {
          className: Q.sectionSeparator
        })]
      }), Z.length > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(s.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: X.intl.format(X.t["8IV8K9"], {
              count: Z.length
            })
          }), (0, a.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: X.intl.string(X.t.Ecz7T9)
          })]
        }), Z.map(E)]
      }), (0, a.jsx)(ea, {
        guild: p
      })]
    }), m && (0, a.jsx)(et, {
      guild: p,
      user: h
    })]
  })
}