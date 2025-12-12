/** Chunk was on 58121 **/
/** chunk id: 59350, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ei
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk29858 = require("./29858.js"),
  Chunk97009 = require("./97009.js"),
  Chunk430864 = require("./430864.js");

function J(e) {
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
let $ = Chunk481060.EFr.SIZE_80,
  ee = "required";

function et(e) {
  var t, n, l;
  let {
    guild: i,
    user: s
  } = e, {
    avatarSrc: c,
    eventHandlers: u,
    isAvatarAnimating: p
  } = (0, O.Z)({
    user: s,
    guildId: i.id,
    size: 120
  }), {
    avatarDecorationSrc: f
  } = (0, _.Z)({
    user: s,
    size: (0, g.y9)($),
    onlyAnimateOnHoverOrFocus: !p
  }), m = (0, o.e7)([N.ZP], () => N.ZP.getSelfMember(i.id)), x = (0, o.Wu)([N.ZP], () => N.ZP.getMemberRoleWithPendingUpdates(i.id, s.id)), j = (0, o.e7)([w.Z], () => w.Z.getSortedRoles(i.id)), Z = (0, b.ZP)(i.id, s.id), I = j.filter(e => x.includes(e.id)), P = (0, v.ZP)(s.id, i.id);
  (0, h.ZP)(() => {
    (0, y.Z)(s.id, s.getAvatarURL(i.id, (0, d.dcp)($)), {
      guildId: i.id
    })
  });
  let S = (0, C.parseBioReact)(null == P ? true : P.bio),
    B = T.ZP.getEnableHardwareAcceleration() ? d.Xo$ : d.qEK;
  return (0, r.jsxs)("div", {
    className: Q.profile,
    children: [(0, r.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: X.intl.string(X.t.diTbF8)
    }), (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: X.intl.string(X.t["+8um3M"])
    }), (0, r.jsxs)("div", {
      className: Q.profileCard,
      children: [(0, r.jsx)("div", (n = J({}, u), l = l = {
        children: (0, r.jsx)(B, {
          src: c,
          avatarDecoration: f,
          size: $,
          "aria-label": s.username
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
      }), n)), (0, r.jsx)(d.Text, {
        variant: "text-lg/medium",
        color: "text-strong",
        className: Q.username,
        children: null != (t = null == m ? true : m.nick) ? t : E.ZP.getName(s)
      }), (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: a()(K.markup, Q.bio),
        children: S
      }), null != I && I.length > 0 && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: Q.separator
        }), (0, r.jsx)(d.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          className: Q.title,
          children: X.intl.string(X.t["LPJmL/"])
        }), (0, r.jsx)("div", {
          className: Q.roles,
          children: null == I ? true : I.map(e => {
            var t;
            return (0, r.jsxs)("div", {
              className: Q.role,
              children: [(0, r.jsx)(d.xko, {
                color: null != (t = e.colorString) ? t : q.Pbq,
                colors: Z ? e.colorStrings : null,
                className: Q.roleDot
              }), (0, r.jsx)(d.Text, {
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
    guild: i
  } = e, [c, u] = l.useState(null), [p, h] = l.useState(new Set), f = null == n || null == (t = n.options) ? true : t.filter(e => p.has(e.id)), m = (0, R.L6)(f), g = (0, R.dX)(f), _ = (0, o.Wu)([D.Z], () => D.Z.getOnboardingResponsesForPrompt(i.id, n.id)), {
    helpText: x,
    helpTextAdditional: C
  } = (0, L.p)({
    guild: i,
    prompt: n,
    selectedRoleIds: m,
    selectedChannelIds: g,
    itemHook: (e, t) => (0, r.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-strong",
      children: e
    }, t)
  }), {
    handleSelectOption: b
  } = (0, k.Z)(i.id), j = n.options.map(e => J({
    value: e.id
  }, e)), v = n.options.filter(e => _.includes(e.id)).map(e => e.id);
  return (0, r.jsxs)("div", {
    className: Q.prompt,
    "data-new": n.isNew,
    children: [n.isNew && (0, r.jsx)(d.IGR, {
      color: s.Z.unsafe_rawColors.BRAND_260.css,
      text: X.intl.string(X.t.y2b7CA),
      className: Q.newBadge
    }), (0, r.jsxs)(d.Heading, {
      className: Q.promptTitle,
      variant: "heading-md/semibold",
      color: "text-strong",
      children: [n.title, n.required ? (0, r.jsx)("span", {
        className: a()(Q.required, {
          [Q.error]: (null == c ? true : c.type) === ee
        }),
        children: "*"
      }) : null]
    }), (0, r.jsx)(W.Z, {
      options: j,
      value: v,
      onChange: e => {
        let t = e.find(e => !_.includes(e.id)),
          r = e.map(e => e.id);
        if (null != t) b(n, t, true), n.singleSelect && n.options.forEach(e => p.delete(e.id)), p.add(t.id);
        else {
          let e = _.filter(e => !r.includes(e)),
            t = n.options.filter(t => e.includes(t.id));
          if (_.length <= t.length && n.required) return void u({
            type: ee
          });
          t.forEach(e => {
            b(n, e, false), p.delete(e.id)
          })
        }
        h(new Set(p)), u(null)
      },
      canBeNew: !n.isNew
    }), (0, r.jsxs)(d.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: Q.helpText,
      children: [x, " ", C]
    })]
  })
}

function er(e) {
  let {
    guild: t
  } = e, n = (0, o.e7)([D.Z], () => D.Z.getConnections(t.id));
  return 0 === n.length ? null : (0, r.jsxs)("div", {
    className: Q.prompt,
    children: [(0, r.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: X.intl.string(X.t.eDVMrA)
    }), (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: X.intl.string(X.t.BozOXu)
    }), (0, r.jsx)("div", {
      className: Q.connectionsContainer,
      children: n.map((e, n) => (0, r.jsx)(M.Z, {
        connection: e,
        guildId: t.id,
        location: m.Z.CHANNELS_AND_ROLES
      }, n))
    })]
  })
}

function el(e) {
  var t;
  let {
    prompt: n,
    guild: i
  } = e, [c, u] = l.useState(null), [p, h] = l.useState(new Set), f = null == n || null == (t = n.options) ? true : t.filter(e => p.has(e.id)), m = (0, R.L6)(f), g = (0, R.dX)(f), _ = (0, o.Wu)([D.Z], () => D.Z.getOnboardingResponsesForPrompt(i.id, n.id)), {
    helpText: x,
    helpTextAdditional: C
  } = (0, L.p)({
    guild: i,
    prompt: n,
    selectedRoleIds: m,
    selectedChannelIds: g,
    itemHook: (e, t) => (0, r.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-strong",
      children: e
    }, t)
  }), {
    handleSelectOption: b
  } = (0, k.Z)(i.id);
  return (0, r.jsxs)("div", {
    className: Q.prompt,
    "data-new": n.isNew,
    children: [n.isNew && (0, r.jsx)(d.IGR, {
      color: s.Z.unsafe_rawColors.BRAND_260.css,
      text: X.intl.string(X.t.y2b7CA),
      className: Q.newBadge
    }), (0, r.jsxs)(d.Heading, {
      className: Q.promptTitle,
      variant: "heading-md/semibold",
      color: "text-strong",
      children: [n.title, n.required ? (0, r.jsx)("span", {
        className: a()(Q.required, {
          [Q.error]: (null == c ? true : c.type) === ee
        }),
        children: "*"
      }) : null]
    }), (0, r.jsx)("div", {
      className: Q.promptOptions,
      children: n.options.map(e => (0, r.jsx)(G.Z, {
        hideMemberCount: true,
        guildId: i.id,
        option: e,
        onSelect: t => ((e, t) => {
          if (!t && 1 === _.length && n.required) return void u({
            type: ee
          });
          b(n, e, null != t && t), n.singleSelect && t && n.options.forEach(e => p.delete(e.id)), t ? p.add(e.id) : p.delete(e.id), h(new Set(p)), u(null)
        })(e, t),
        selected: _.includes(e.id),
        canBeNew: !n.isNew
      }, e.id))
    }), (0, r.jsxs)(d.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: Q.helpText,
      children: [x, " ", C]
    })]
  })
}

function ei(e) {
  let {
    guildId: t,
    onBrowseChannels: n
  } = e, i = (0, c.wj)((0, f.ZP)()), h = (0, o.e7)([Z.Z], () => Z.Z.getGuild(t)), m = (0, o.e7)([P.default], () => P.default.getCurrentUser()), g = (0, p.Z)("(min-width: 1344px)") && null != m, _ = l.useCallback(() => {
    (0, j.uL)(q.Z5c.CHANNEL(t, z.oC.CHANNEL_BROWSER)), null == n || n()
  }, [t, n]), C = (0, o.e7)([I.ZP], () => I.ZP.hasUnread(t, V.W.GUILD_ONBOARDING_QUESTION)), {
    onboardingPromptsRaw: b,
    newOnboardingPrompts: v,
    onboardingPromptsWithNewAnswers: O,
    newAnswersCount: y,
    onboardingPrompts: N
  } = (0, H.Z)(t);
  l.useEffect(() => {
    (null == h ? true : h.id) != null && !x.Z.isFullServerPreview(h.id) && (D.Z.shouldFetchPrompts(h.id) || C) && (0, A.eM)(h.id)
  }, [null == h ? true : h.id, C]), l.useEffect(() => {
    if ((null == h ? true : h.id) != null && !x.Z.isFullServerPreview(h.id)) return () => {
      (0, u.Ju)(h.id, V.W.GUILD_ONBOARDING_QUESTION, D.Z.ackIdForGuild(h.id)), B.Z.updateOnboardingResponses(h.id)
    }
  }, [null == h ? true : h.id]);
  let w = l.useCallback(e => {
    if (null == h) return null;
    switch (e.type) {
      case F.FN.MULTIPLE_CHOICE:
        return (0, r.jsx)(el, {
          prompt: e,
          guild: h
        }, e.id);
      case F.FN.DROPDOWN:
        return (0, r.jsx)(en, {
          prompt: e,
          guild: h
        }, e.id);
      default:
        (0, S.vE)(e.type)
    }
  }, [h]);
  if (null == h) return null;
  if (0 === b.length) {
    let e = i ? s.Z.unsafe_rawColors.PRIMARY_300.css : s.Z.unsafe_rawColors.PRIMARY_500.css,
      t = i ? s.Z.unsafe_rawColors.PRIMARY_700.css : s.Z.unsafe_rawColors.PRIMARY_230.css;
    return (0, r.jsx)("div", {
      className: a()(Y.content, Q.emptyPage),
      children: (0, r.jsxs)("div", {
        className: Q.emptyContainer,
        children: [(0, r.jsx)(U.Z, {
          className: Q.emptyIcon,
          foregroundColor: e,
          backgroundColor: t
        }), (0, r.jsx)(d.Heading, {
          className: Q.emptyHeader,
          variant: "heading-md/semibold",
          children: X.intl.string(X.t.leKHQz)
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          children: X.intl.format(X.t["jH+ktB"], {
            onBrowseChannels: _
          })
        })]
      })
    })
  }
  return (0, r.jsxs)(d.Den, {
    className: Q.scroller,
    fade: true,
    children: [(0, r.jsxs)("div", {
      className: Q.pageBody,
      children: [(v.length > 0 || O.length > 0) && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          children: (0, r.jsx)(d.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: X.intl.format(X.t.iB5Gqe, {
              count: v.length + y
            })
          })
        }), v.map(w), O.map(w), (0, r.jsx)("div", {
          className: Q.sectionSeparator
        })]
      }), N.length > 0 && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(d.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: X.intl.format(X.t["8IV8K9"], {
              count: N.length
            })
          }), (0, r.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: X.intl.string(X.t.Ecz7T9)
          })]
        }), N.map(w)]
      }), (0, r.jsx)(er, {
        guild: h
      })]
    }), g && (0, r.jsx)(et, {
      guild: h,
      user: m
    })]
  })
}