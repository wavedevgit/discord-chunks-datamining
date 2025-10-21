/** Chunk was on 58121 **/
/** chunk id: 59350, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => et
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk45114 = require("./45114.js"),
  Chunk131388 = require("./131388.js"),
  Chunk493773 = require("./493773.js"),
  Chunk410030 = require("./410030.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk125988 = require("./125988.js"),
  Chunk44315 = require("./44315.js"),
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
  Chunk614328 = require("./614328.jsx"),
  Chunk104265 = require("./104265.jsx"),
  Chunk588632 = require("./588632.jsx"),
  Chunk290511 = require("./290511.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk490897 = require("./490897.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk29858 = require("./29858.js"),
  Chunk97009 = require("./97009.js"),
  Chunk430864 = require("./430864.js");

function Y(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}
let K = Chunk481060.EFr.SIZE_80,
  J = "required";

function $(e) {
  var n, t, r;
  let {
    guild: i,
    user: s
  } = e, {
    avatarSrc: d,
    eventHandlers: u,
    isAvatarAnimating: h
  } = (0, v.Z)({
    user: s,
    guildId: i.id,
    size: 120
  }), {
    avatarDecorationSrc: g
  } = (0, f.Z)({
    user: s,
    size: (0, p.y9)(K),
    onlyAnimateOnHoverOrFocus: !h
  }), x = (0, o.e7)([O.ZP], () => O.ZP.getSelfMember(i.id)), b = (0, o.Wu)([O.ZP], () => O.ZP.getMemberRoleWithPendingUpdates(i.id, s.id)), Z = (0, o.e7)([N.Z], () => N.Z.getSortedRoles(i.id)), I = (0, C.ZP)(i.id, s.id), w = Z.filter(e => b.includes(e.id)), P = (0, j.ZP)(s.id, i.id);
  (0, m.ZP)(() => {
    (0, y.Z)(s.id, s.getAvatarURL(i.id, (0, c.pxk)(K)), {
      guildId: i.id
    })
  });
  let T = (0, _.parseBioReact)(null == P ? true : P.bio),
    B = S.ZP.getEnableHardwareAcceleration() ? c.Xo$ : c.qEK;
  return (0, l.jsxs)("div", {
    className: V.profile,
    children: [(0, l.jsx)(c.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: z.intl.string(z.t.diTbF8)
    }), (0, l.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: z.intl.string(z.t["+8um3M"])
    }), (0, l.jsxs)("div", {
      className: V.profileCard,
      children: [(0, l.jsx)("div", (t = Y({}, u), r = r = {
        children: (0, l.jsx)(B, {
          src: d,
          avatarDecoration: g,
          size: K,
          "aria-label": s.username
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          t.push.apply(t, l)
        }
        return t
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t)), (0, l.jsx)(c.Text, {
        variant: "text-lg/medium",
        color: "header-primary",
        className: V.username,
        children: null != (n = null == x ? true : x.nick) ? n : E.ZP.getName(s)
      }), (0, l.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: a()(Q.markup, V.bio),
        children: T
      }), null != w && w.length > 0 && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("hr", {
          className: V.separator
        }), (0, l.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          className: V.title,
          children: z.intl.string(z.t["LPJmL/"])
        }), (0, l.jsx)("div", {
          className: V.roles,
          children: null == w ? true : w.map(e => {
            var n;
            return (0, l.jsxs)("div", {
              className: V.role,
              children: [(0, l.jsx)(c.xko, {
                color: null != (n = e.colorString) ? n : G.Pbq,
                colors: I ? e.colorStrings : null,
                className: V.roleDot
              }), (0, l.jsx)(c.Text, {
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

function ee(e) {
  var n;
  let {
    prompt: t,
    guild: i
  } = e, [s, d] = r.useState(null), [u, m] = r.useState(new Set), h = null == t || null == (n = t.options) ? true : n.filter(e => u.has(e.id)), p = (0, R.L6)(h), f = (0, R.dX)(h), x = (0, o.Wu)([A.Z], () => A.Z.getOnboardingResponsesForPrompt(i.id, t.id)), {
    helpText: _,
    helpTextAdditional: C
  } = (0, D.p)({
    guild: i,
    prompt: t,
    selectedRoleIds: p,
    selectedChannelIds: f,
    itemHook: (e, n) => (0, l.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: e
    }, n)
  }), {
    handleSelectOption: b
  } = (0, k.Z)(i.id), j = t.options.map(e => Y({
    value: e.id
  }, e)), v = t.options.filter(e => x.includes(e.id)).map(e => e.id);
  return (0, l.jsxs)("div", {
    className: V.prompt,
    "data-new": t.isNew,
    children: [t.isNew && (0, l.jsx)(c.IGR, {
      color: (0, g.Lq)(G.Ilk.BRAND_260),
      text: z.intl.string(z.t.y2b7CA),
      className: V.newBadge
    }), (0, l.jsxs)(c.Heading, {
      className: V.promptTitle,
      variant: "heading-md/semibold",
      color: "header-primary",
      children: [t.title, t.required ? (0, l.jsx)("span", {
        className: a()(V.required, {
          [V.error]: (null == s ? true : s.type) === J
        }),
        children: "*"
      }) : null]
    }), (0, l.jsx)(U.Z, {
      options: j,
      value: v,
      onChange: e => {
        let n = e.find(e => !x.includes(e.id)),
          l = e.map(e => e.id);
        if (null != n) b(t, n, true), t.singleSelect && t.options.forEach(e => u.delete(e.id)), u.add(n.id);
        else {
          let e = x.filter(e => !l.includes(e)),
            n = t.options.filter(n => e.includes(n.id));
          if (x.length <= n.length && t.required) return void d({
            type: J
          });
          n.forEach(e => {
            b(t, e, false), u.delete(e.id)
          })
        }
        m(new Set(u)), d(null)
      },
      canBeNew: !t.isNew
    }), (0, l.jsxs)(c.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: V.helpText,
      children: [_, " ", C]
    })]
  })
}

function en(e) {
  var n;
  let {
    prompt: t,
    guild: i
  } = e, [s, d] = r.useState(null), [u, m] = r.useState(new Set), h = null == t || null == (n = t.options) ? true : n.filter(e => u.has(e.id)), p = (0, R.L6)(h), f = (0, R.dX)(h), x = (0, o.Wu)([A.Z], () => A.Z.getOnboardingResponsesForPrompt(i.id, t.id)), {
    helpText: _,
    helpTextAdditional: C
  } = (0, D.p)({
    guild: i,
    prompt: t,
    selectedRoleIds: p,
    selectedChannelIds: f,
    itemHook: (e, n) => (0, l.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: e
    }, n)
  }), {
    handleSelectOption: b
  } = (0, k.Z)(i.id);
  return (0, l.jsxs)("div", {
    className: V.prompt,
    "data-new": t.isNew,
    children: [t.isNew && (0, l.jsx)(c.IGR, {
      color: (0, g.Lq)(G.Ilk.BRAND_260),
      text: z.intl.string(z.t.y2b7CA),
      className: V.newBadge
    }), (0, l.jsxs)(c.Heading, {
      className: V.promptTitle,
      variant: "heading-md/semibold",
      color: "header-primary",
      children: [t.title, t.required ? (0, l.jsx)("span", {
        className: a()(V.required, {
          [V.error]: (null == s ? true : s.type) === J
        }),
        children: "*"
      }) : null]
    }), (0, l.jsx)("div", {
      className: V.promptOptions,
      children: t.options.map(e => (0, l.jsx)(H.Z, {
        hideMemberCount: true,
        guildId: i.id,
        option: e,
        onSelect: n => ((e, n) => {
          if (!n && 1 === x.length && t.required) return void d({
            type: J
          });
          b(t, e, null != n && n), t.singleSelect && n && t.options.forEach(e => u.delete(e.id)), n ? u.add(e.id) : u.delete(e.id), m(new Set(u)), d(null)
        })(e, n),
        selected: x.includes(e.id),
        canBeNew: !t.isNew
      }, e.id))
    }), (0, l.jsxs)(c.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: V.helpText,
      children: [_, " ", C]
    })]
  })
}

function et(e) {
  let {
    guildId: n,
    onBrowseChannels: t
  } = e, i = (0, s.wj)((0, h.ZP)()), m = (0, o.e7)([Z.Z], () => Z.Z.getGuild(n)), p = (0, o.e7)([w.default], () => w.default.getCurrentUser()), f = (0, u.Z)("(min-width: 1344px)") && null != p, _ = r.useCallback(() => {
    (0, b.uL)(G.Z5c.CHANNEL(n, F.oC.CHANNEL_BROWSER)), null == t || t()
  }, [n, t]), C = (0, o.e7)([I.ZP], () => I.ZP.hasUnread(n, q.W.GUILD_ONBOARDING_QUESTION)), {
    onboardingPromptsRaw: j,
    newOnboardingPrompts: v,
    onboardingPromptsWithNewAnswers: y,
    newAnswersCount: O,
    onboardingPrompts: N
  } = (0, L.Z)(n);
  r.useEffect(() => {
    (null == m ? true : m.id) != null && !x.Z.isFullServerPreview(m.id) && (A.Z.shouldFetchPrompts(m.id) || C) && (0, B.eM)(m.id)
  }, [null == m ? true : m.id, C]), r.useEffect(() => {
    if ((null == m ? true : m.id) != null && !x.Z.isFullServerPreview(m.id)) return () => {
      (0, d.Ju)(m.id, q.W.GUILD_ONBOARDING_QUESTION, A.Z.ackIdForGuild(m.id)), T.Z.updateOnboardingResponses(m.id)
    }
  }, [null == m ? true : m.id]);
  let E = r.useCallback(e => {
    if (null == m) return null;
    switch (e.type) {
      case W.FN.MULTIPLE_CHOICE:
        return (0, l.jsx)(en, {
          prompt: e,
          guild: m
        }, e.id);
      case W.FN.DROPDOWN:
        return (0, l.jsx)(ee, {
          prompt: e,
          guild: m
        }, e.id);
      default:
        (0, P.vE)(e.type)
    }
  }, [m]);
  if (null == m) return null;
  if (0 === j.length) {
    let e = (0, g.Lq)(i ? G.Ilk.PRIMARY_300 : G.Ilk.PRIMARY_500),
      n = (0, g.Lq)(i ? G.Ilk.PRIMARY_700 : G.Ilk.PRIMARY_230);
    return (0, l.jsx)("div", {
      className: a()(X.content, V.emptyPage),
      children: (0, l.jsxs)("div", {
        className: V.emptyContainer,
        children: [(0, l.jsx)(M.Z, {
          className: V.emptyIcon,
          foregroundColor: e,
          backgroundColor: n
        }), (0, l.jsx)(c.Heading, {
          className: V.emptyHeader,
          variant: "heading-md/semibold",
          children: z.intl.string(z.t.leKHQz)
        }), (0, l.jsx)(c.Text, {
          variant: "text-sm/medium",
          children: z.intl.format(z.t["jH+ktB"], {
            onBrowseChannels: _
          })
        })]
      })
    })
  }
  return (0, l.jsxs)(c.Den, {
    className: V.scroller,
    fade: true,
    children: [(0, l.jsxs)("div", {
      className: V.pageBody,
      children: [(v.length > 0 || y.length > 0) && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          children: (0, l.jsx)(c.Heading, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: z.intl.format(z.t.iB5Gqe, {
              count: v.length + O
            })
          })
        }), v.map(E), y.map(E), (0, l.jsx)("div", {
          className: V.sectionSeparator
        })]
      }), N.length > 0 && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
          children: [(0, l.jsx)(c.Heading, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: z.intl.format(z.t["8IV8K9"], {
              count: N.length
            })
          }), (0, l.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: z.intl.string(z.t.Ecz7T9)
          })]
        }), N.map(E)]
      })]
    }), f && (0, l.jsx)($, {
      guild: m,
      user: p
    })]
  })
}