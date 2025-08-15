/** Chunk was on 58121 **/
/** chunk id: 59350, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => en
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

function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}
let Y = Chunk481060.EFr.SIZE_80,
  K = "required";

function $(e) {
  var t, n, r;
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
    size: (0, p.y9)(Y),
    onlyAnimateOnHover: !h
  }), x = (0, o.e7)([O.ZP], () => O.ZP.getSelfMember(i.id)), b = (0, o.Wu)([O.ZP], () => O.ZP.getMemberRoleWithPendingUpdates(i.id, s.id)), N = (0, o.e7)([Z.Z], () => Z.Z.getSortedRoles(i.id)), I = (0, C.ZP)(i.id, s.id), w = N.filter(e => b.includes(e.id)), P = (0, j.ZP)(s.id, i.id);
  (0, m.ZP)(() => {
    (0, y.Z)(s.id, s.getAvatarURL(i.id, (0, c.pxk)(Y)), {
      guildId: i.id
    })
  });
  let T = (0, _.parseBioReact)(null == P ? true : P.bio),
    A = S.ZP.getEnableHardwareAcceleration() ? c.Xo$ : c.qEK;
  return (0, l.jsxs)("div", {
    className: X.profile,
    children: [(0, l.jsx)(c.X6q, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: z.intl.string(z.t.diTbFx)
    }), (0, l.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: z.intl.string(z.t["+8um3N"])
    }), (0, l.jsxs)("div", {
      className: X.profileCard,
      children: [(0, l.jsx)("div", (n = Q({}, u), r = r = {
        children: (0, l.jsx)(A, {
          src: d,
          avatarDecoration: g,
          size: Y,
          "aria-label": s.username
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n)), (0, l.jsx)(c.Text, {
        variant: "text-lg/medium",
        color: "header-primary",
        className: X.username,
        children: null != (t = null == x ? true : x.nick) ? t : E.ZP.getName(s)
      }), (0, l.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: a()(J.markup, X.bio),
        children: T
      }), null != w && w.length > 0 && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("hr", {
          className: X.separator
        }), (0, l.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          className: X.title,
          children: z.intl.string(z.t.LPJmLy)
        }), (0, l.jsx)("div", {
          className: X.roles,
          children: null == w ? true : w.map(e => {
            var t;
            return (0, l.jsxs)("div", {
              className: X.role,
              children: [(0, l.jsx)(c.xko, {
                color: null != (t = e.colorString) ? t : W.Pbq,
                colors: I ? e.colorStrings : null,
                className: X.roleDot
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
  var t;
  let {
    prompt: n,
    guild: i
  } = e, [s, d] = r.useState(null), [u, m] = r.useState(new Set), h = null == n || null == (t = n.options) ? true : t.filter(e => u.has(e.id)), p = (0, B.L6)(h), f = (0, B.dX)(h), x = (0, o.Wu)([k.Z], () => k.Z.getOnboardingResponsesForPrompt(i.id, n.id)), {
    helpText: _,
    helpTextAdditional: C
  } = (0, D.p)({
    guild: i,
    prompt: n,
    selectedRoleIds: p,
    selectedChannelIds: f,
    itemHook: (e, t) => (0, l.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: e
    }, t)
  }), {
    handleSelectOption: b
  } = (0, R.Z)(i.id), j = n.options.map(e => Q({
    value: e.id
  }, e)), v = n.options.filter(e => x.includes(e.id)).map(e => e.id);
  return (0, l.jsxs)("div", {
    className: X.prompt,
    "data-new": n.isNew,
    children: [n.isNew && (0, l.jsx)(c.IGR, {
      color: (0, g.Lq)(W.Ilk.BRAND_260),
      text: z.intl.string(z.t.y2b7CA),
      className: X.newBadge
    }), (0, l.jsxs)(c.X6q, {
      className: X.promptTitle,
      variant: "heading-md/semibold",
      color: "header-primary",
      children: [n.title, n.required ? (0, l.jsx)("span", {
        className: a()(X.required, {
          [X.error]: (null == s ? true : s.type) === K
        }),
        children: "*"
      }) : null]
    }), (0, l.jsx)(U.Z, {
      options: j,
      value: v,
      onChange: e => {
        let t = e.find(e => !x.includes(e.id)),
          l = e.map(e => e.id);
        if (null != t) b(n, t, true), n.singleSelect && n.options.forEach(e => u.delete(e.id)), u.add(t.id);
        else {
          let e = x.filter(e => !l.includes(e)),
            t = n.options.filter(t => e.includes(t.id));
          if (x.length <= t.length && n.required) return void d({
            type: K
          });
          t.forEach(e => {
            b(n, e, false), u.delete(e.id)
          })
        }
        m(new Set(u)), d(null)
      },
      canBeNew: !n.isNew
    }), (0, l.jsxs)(c.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: X.helpText,
      children: [_, " ", C]
    })]
  })
}

function et(e) {
  var t;
  let {
    prompt: n,
    guild: i
  } = e, [s, d] = r.useState(null), [u, m] = r.useState(new Set), h = null == n || null == (t = n.options) ? true : t.filter(e => u.has(e.id)), p = (0, B.L6)(h), f = (0, B.dX)(h), x = (0, o.Wu)([k.Z], () => k.Z.getOnboardingResponsesForPrompt(i.id, n.id)), {
    helpText: _,
    helpTextAdditional: C
  } = (0, D.p)({
    guild: i,
    prompt: n,
    selectedRoleIds: p,
    selectedChannelIds: f,
    itemHook: (e, t) => (0, l.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: e
    }, t)
  }), {
    handleSelectOption: b
  } = (0, R.Z)(i.id);
  return (0, l.jsxs)("div", {
    className: X.prompt,
    "data-new": n.isNew,
    children: [n.isNew && (0, l.jsx)(c.IGR, {
      color: (0, g.Lq)(W.Ilk.BRAND_260),
      text: z.intl.string(z.t.y2b7CA),
      className: X.newBadge
    }), (0, l.jsxs)(c.X6q, {
      className: X.promptTitle,
      variant: "heading-md/semibold",
      color: "header-primary",
      children: [n.title, n.required ? (0, l.jsx)("span", {
        className: a()(X.required, {
          [X.error]: (null == s ? true : s.type) === K
        }),
        children: "*"
      }) : null]
    }), (0, l.jsx)("div", {
      className: X.promptOptions,
      children: n.options.map(e => (0, l.jsx)(H.Z, {
        hideMemberCount: true,
        guildId: i.id,
        option: e,
        onSelect: t => ((e, t) => {
          if (!t && 1 === x.length && n.required) return void d({
            type: K
          });
          b(n, e, null != t && t), n.singleSelect && t && n.options.forEach(e => u.delete(e.id)), t ? u.add(e.id) : u.delete(e.id), m(new Set(u)), d(null)
        })(e, t),
        selected: x.includes(e.id),
        canBeNew: !n.isNew
      }, e.id))
    }), (0, l.jsxs)(c.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: X.helpText,
      children: [_, " ", C]
    })]
  })
}

function en(e) {
  let {
    guildId: t,
    onBrowseChannels: n
  } = e, i = (0, s.wj)((0, h.ZP)()), m = (0, o.e7)([N.Z], () => N.Z.getGuild(t)), p = (0, o.e7)([w.default], () => w.default.getCurrentUser()), f = (0, u.Z)("(min-width: 1344px)") && null != p, _ = r.useCallback(() => {
    (0, b.uL)(W.Z5c.CHANNEL(t, F.oC.CHANNEL_BROWSER)), null == n || n()
  }, [t, n]), C = (0, o.e7)([I.ZP], () => I.ZP.hasUnread(t, q.W.GUILD_ONBOARDING_QUESTION)), {
    onboardingPromptsRaw: j,
    newOnboardingPrompts: v,
    onboardingPromptsWithNewAnswers: y,
    newAnswersCount: O,
    onboardingPrompts: Z
  } = (0, L.Z)(t);
  r.useEffect(() => {
    (null == m ? true : m.id) != null && !x.Z.isFullServerPreview(m.id) && (k.Z.shouldFetchPrompts(m.id) || C) && (0, A.eM)(m.id)
  }, [null == m ? true : m.id, C]), r.useEffect(() => {
    if ((null == m ? true : m.id) != null && !x.Z.isFullServerPreview(m.id)) return () => {
      (0, d.Ju)(m.id, q.W.GUILD_ONBOARDING_QUESTION, k.Z.ackIdForGuild(m.id)), T.Z.updateOnboardingResponses(m.id)
    }
  }, [null == m ? true : m.id]);
  let E = r.useCallback(e => {
    if (null == m) return null;
    switch (e.type) {
      case G.FN.MULTIPLE_CHOICE:
        return (0, l.jsx)(et, {
          prompt: e,
          guild: m
        }, e.id);
      case G.FN.DROPDOWN:
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
    let e = (0, g.Lq)(i ? W.Ilk.PRIMARY_300 : W.Ilk.PRIMARY_500),
      t = (0, g.Lq)(i ? W.Ilk.PRIMARY_700 : W.Ilk.PRIMARY_230);
    return (0, l.jsx)("div", {
      className: a()(V.content, X.emptyPage),
      children: (0, l.jsxs)("div", {
        className: X.emptyContainer,
        children: [(0, l.jsx)(M.Z, {
          className: X.emptyIcon,
          foregroundColor: e,
          backgroundColor: t
        }), (0, l.jsx)(c.X6q, {
          className: X.emptyHeader,
          variant: "heading-md/semibold",
          children: z.intl.string(z.t.leKHQ0)
        }), (0, l.jsx)(c.Text, {
          variant: "text-sm/medium",
          children: z.intl.format(z.t["jH+ktL"], {
            onBrowseChannels: _
          })
        })]
      })
    })
  }
  return (0, l.jsxs)(c.Den, {
    className: X.scroller,
    fade: true,
    children: [(0, l.jsxs)("div", {
      className: X.pageBody,
      children: [(v.length > 0 || y.length > 0) && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          children: (0, l.jsx)(c.X6q, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: z.intl.format(z.t.iB5Gqa, {
              count: v.length + O
            })
          })
        }), v.map(E), y.map(E), (0, l.jsx)("div", {
          className: X.sectionSeparator
        })]
      }), Z.length > 0 && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
          children: [(0, l.jsx)(c.X6q, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: z.intl.format(z.t["8IV8Ky"], {
              count: Z.length
            })
          }), (0, l.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: z.intl.string(z.t.Ecz7T0)
          })]
        }), Z.map(E)]
      })]
    }), f && (0, l.jsx)($, {
      guild: m,
      user: p
    })]
  })
}