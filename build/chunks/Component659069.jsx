/** Chunk was on 72165 **/
/** chunk id: 659069, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => ei
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk334738 = require("./334738.js"),
  Chunk241524 = require("./241524.js"),
  Chunk964486 = require("./964486.js"),
  Chunk736653 = require("./736653.js"),
  Chunk793574 = require("./793574.js"),
  Chunk954921 = require("./954921.jsx"),
  Chunk278539 = require("./278539.js"),
  Chunk164956 = require("./164956.js"),
  Chunk713804 = require("./713804.js"),
  Chunk676608 = require("./676608.js"),
  Chunk976860 = require("./976860.js"),
  Chunk950191 = require("./950191.js"),
  Chunk62199 = require("./62199.js"),
  Chunk576622 = require("./576622.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk222823 = require("./222823.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk427262 = require("./427262.js"),
  Chunk837921 = require("./837921.js"),
  Chunk669953 = require("./669953.js"),
  Chunk817818 = require("./817818.js"),
  Chunk591552 = require("./591552.js"),
  Chunk961973 = require("./961973.js"),
  Chunk663915 = require("./663915.js"),
  Chunk218785 = require("./218785.js"),
  Chunk901434 = require("./901434.js"),
  Chunk724531 = require("./724531.jsx"),
  Chunk576977 = require("./576977.jsx"),
  Chunk164048 = require("./164048.jsx"),
  Chunk839447 = require("./839447.jsx"),
  Chunk539916 = require("./539916.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk790782 = require("./790782.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk713273 = require("./713273.js"),
  Chunk638990 = require("./638990.js"),
  Chunk206314 = require("./206314.js");

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
let $ = Chunk397927._3J.SIZE_80,
  ee = "required";

function et(e) {
  var t, n, r;
  let {
    guild: i,
    user: o
  } = e, {
    avatarSrc: c,
    eventHandlers: u,
    isAvatarAnimating: h
  } = (0, O.A)({
    user: o,
    guildId: i.id,
    size: 120
  }), {
    avatarDecorationSrc: f
  } = (0, g.A)({
    user: o,
    size: (0, m.Te)($),
    onlyAnimateOnHoverOrFocus: !h
  }), _ = (0, s.bG)([y.Ay], () => y.Ay.getSelfMember(i.id)), x = (0, s.yK)([y.Ay], () => y.Ay.getMemberRoleWithPendingUpdates(i.id, o.id)), C = (0, s.bG)([N.A], () => N.A.getSortedRoles(i.id)), w = (0, A.Ay)(i.id, o.id), I = C.filter(e => x.includes(e.id)), S = (0, j.Ay)(o.id, i.id);
  (0, p.Ay)(() => {
    (0, v.A)(o.id, o.getAvatarURL(i.id, (0, d.FT9)($)), {
      guildId: i.id
    })
  });
  let E = (0, b.parseBioReact)(null == S ? true : S.bio),
    R = D.Ay.getEnableHardwareAcceleration() ? d.JsQ : d.euF;
  return (0, l.jsxs)("div", {
    className: z.ME,
    children: [(0, l.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: Y.intl.string(Y.t.diTbF8)
    }), (0, l.jsx)(d.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: Y.intl.string(Y.t["+8um3M"])
    }), (0, l.jsxs)("div", {
      className: z.Kq,
      children: [(0, l.jsx)("div", (n = Q({}, u), r = r = {
        children: (0, l.jsx)(R, {
          src: c,
          avatarDecoration: f,
          size: $,
          "aria-label": o.username
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
      }), n)), (0, l.jsx)(d.Text, {
        variant: "text-lg/medium",
        color: "text-strong",
        className: z.Xh,
        children: null != (t = null == _ ? true : _.nick) ? t : P.Ay.getName(o)
      }), (0, l.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: a()(X.PT, z.z3),
        children: E
      }), null != I && I.length > 0 && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("hr", {
          className: z.me
        }), (0, l.jsx)(d.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          className: z.DD,
          children: Y.intl.string(Y.t["LPJmL/"])
        }), (0, l.jsx)("div", {
          className: z.Ot,
          children: null == I ? true : I.map(e => {
            var t;
            return (0, l.jsxs)("div", {
              className: z.JC,
              children: [(0, l.jsx)(d.RYH, {
                color: null != (t = e.colorString) ? t : q.TpD,
                colors: w ? e.colorStrings : null,
                className: z.m4
              }), (0, l.jsx)(d.Text, {
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
  } = e, [c, u] = r.useState(null), [h, p] = r.useState(new Set), f = null == n || null == (t = n.options) ? true : t.filter(e => h.has(e.id)), _ = (0, k.a)(f), m = (0, k.vV)(f), g = (0, s.yK)([L.A], () => L.A.getOnboardingResponsesForPrompt(i.id, n.id)), {
    helpText: x,
    helpTextAdditional: b
  } = (0, M.W)({
    guild: i,
    prompt: n,
    selectedRoleIds: _,
    selectedChannelIds: m,
    itemHook: (e, t) => (0, l.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-strong",
      children: e
    }, t)
  }), {
    handleSelectOption: A
  } = (0, H.A)(i.id), C = n.options.map(e => Q({
    value: e.id
  }, e)), j = n.options.filter(e => g.includes(e.id)).map(e => e.id);
  return (0, l.jsxs)("div", {
    className: z.J1,
    "data-new": n.isNew,
    children: [n.isNew && (0, l.jsx)(d.LpS, {
      color: o.A.unsafe_rawColors.BRAND_260.css,
      text: Y.intl.string(Y.t.y2b7CA),
      className: z.Ad
    }), (0, l.jsxs)(d.Heading, {
      className: z.Hi,
      variant: "heading-md/semibold",
      color: "text-strong",
      children: [n.title, n.required ? (0, l.jsx)("span", {
        className: a()(z.mw, {
          [z.So]: (null == c ? true : c.type) === ee
        }),
        children: "*"
      }) : null]
    }), (0, l.jsx)(F.A, {
      options: C,
      value: j,
      onChange: e => {
        let t = e.find(e => !g.includes(e.id)),
          l = e.map(e => e.id);
        if (null != t) A(n, t, true), n.singleSelect && n.options.forEach(e => h.delete(e.id)), h.add(t.id);
        else {
          let e = g.filter(e => !l.includes(e)),
            t = n.options.filter(t => e.includes(t.id));
          if (g.length <= t.length && n.required) return void u({
            type: ee
          });
          t.forEach(e => {
            A(n, e, false), h.delete(e.id)
          })
        }
        p(new Set(h)), u(null)
      },
      canBeNew: !n.isNew
    }), (0, l.jsxs)(d.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: z.BK,
      children: [x, " ", b]
    })]
  })
}

function el(e) {
  let {
    guild: t
  } = e, n = (0, s.bG)([L.A], () => L.A.getConnections(t.id));
  return 0 === n.length ? null : (0, l.jsxs)("div", {
    className: z.J1,
    children: [(0, l.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: Y.intl.string(Y.t.eDVMrA)
    }), (0, l.jsx)(d.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: Y.intl.string(Y.t.BozOXu)
    }), (0, l.jsx)("div", {
      className: z.lA,
      children: n.map((e, n) => (0, l.jsx)(B.A, {
        connection: e,
        guildId: t.id,
        location: _.A.CHANNELS_AND_ROLES
      }, n))
    })]
  })
}

function er(e) {
  var t;
  let {
    prompt: n,
    guild: i
  } = e, [c, u] = r.useState(null), [h, p] = r.useState(new Set), f = null == n || null == (t = n.options) ? true : t.filter(e => h.has(e.id)), _ = (0, k.a)(f), m = (0, k.vV)(f), g = (0, s.yK)([L.A], () => L.A.getOnboardingResponsesForPrompt(i.id, n.id)), {
    helpText: x,
    helpTextAdditional: b
  } = (0, M.W)({
    guild: i,
    prompt: n,
    selectedRoleIds: _,
    selectedChannelIds: m,
    itemHook: (e, t) => (0, l.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-strong",
      children: e
    }, t)
  }), {
    handleSelectOption: A
  } = (0, H.A)(i.id);
  return (0, l.jsxs)("div", {
    className: z.J1,
    "data-new": n.isNew,
    children: [n.isNew && (0, l.jsx)(d.LpS, {
      color: o.A.unsafe_rawColors.BRAND_260.css,
      text: Y.intl.string(Y.t.y2b7CA),
      className: z.Ad
    }), (0, l.jsxs)(d.Heading, {
      className: z.Hi,
      variant: "heading-md/semibold",
      color: "text-strong",
      children: [n.title, n.required ? (0, l.jsx)("span", {
        className: a()(z.mw, {
          [z.So]: (null == c ? true : c.type) === ee
        }),
        children: "*"
      }) : null]
    }), (0, l.jsx)("div", {
      className: z.vS,
      children: n.options.map(e => (0, l.jsx)(V.A, {
        hideMemberCount: true,
        guildId: i.id,
        option: e,
        onSelect: t => {
          !t && 1 === g.length && n.required ? u({
            type: ee
          }) : (A(n, e, null != t && t), n.singleSelect && t && n.options.forEach(e => h.delete(e.id)), t ? h.add(e.id) : h.delete(e.id), p(new Set(h)), u(null))
        },
        selected: g.includes(e.id),
        canBeNew: !n.isNew
      }, e.id))
    }), (0, l.jsxs)(d.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: z.BK,
      children: [x, " ", b]
    })]
  })
}

function ei(e) {
  let {
    guildId: t,
    onBrowseChannels: n
  } = e, i = (0, c.Mw)((0, f.Ay)()), p = (0, s.bG)([w.A], () => w.A.getGuild(t)), _ = (0, s.bG)([S.default], () => S.default.getCurrentUser()), m = (0, h.A)("(min-width: 1344px)") && null != _, g = r.useCallback(() => {
    (0, C.pX)(q.BVt.CHANNEL(t, K.VV.CHANNEL_BROWSER)), null == n || n()
  }, [t, n]), b = (0, s.bG)([I.Ay], () => I.Ay.hasUnread(t, Z.P.GUILD_ONBOARDING_QUESTION)), A = null == p ? true : p.latestOnboardingQuestionId, {
    onboardingPromptsRaw: j,
    newOnboardingPrompts: O,
    onboardingPromptsWithNewAnswers: v,
    newAnswersCount: y,
    onboardingPrompts: N
  } = (0, G.A)(t);
  r.useEffect(() => {
    (null == p ? true : p.id) == null || !x.A.isFullServerPreview(p.id) && (L.A.shouldFetchPrompts(p.id) || b) && (0, T.jx)(p.id)
  }, [null == p ? true : p.id, b, A]), r.useEffect(() => {
    if ((null == p ? true : p.id) != null && !x.A.isFullServerPreview(p.id)) return () => {
      (0, u.hK)(p.id, Z.P.GUILD_ONBOARDING_QUESTION, L.A.ackIdForGuild(p.id)), R.A.updateOnboardingResponses(p.id)
    }
  }, [null == p ? true : p.id]);
  let P = r.useCallback(e => {
    if (null == p) return null;
    switch (e.type) {
      case W.ME.MULTIPLE_CHOICE:
        return (0, l.jsx)(er, {
          prompt: e,
          guild: p
        }, e.id);
      case W.ME.DROPDOWN:
        return (0, l.jsx)(en, {
          prompt: e,
          guild: p
        }, e.id);
      default:
        (0, E.xb)(e.type)
    }
  }, [p]);
  if (null == p) return null;
  if (0 === j.length) {
    let e = i ? o.A.unsafe_rawColors.PRIMARY_300.css : o.A.unsafe_rawColors.PRIMARY_500.css,
      t = i ? o.A.unsafe_rawColors.PRIMARY_700.css : o.A.unsafe_rawColors.PRIMARY_230.css;
    return (0, l.jsx)("div", {
      className: a()(J.Qs, z.Zc),
      children: (0, l.jsxs)("div", {
        className: z.do,
        children: [(0, l.jsx)(U.A, {
          className: z.Dw,
          foregroundColor: e,
          backgroundColor: t
        }), (0, l.jsx)(d.Heading, {
          className: z.jU,
          variant: "heading-md/semibold",
          children: Y.intl.string(Y.t.leKHQz)
        }), (0, l.jsx)(d.Text, {
          variant: "text-sm/medium",
          children: Y.intl.format(Y.t["jH+ktB"], {
            onBrowseChannels: g
          })
        })]
      })
    })
  }
  return (0, l.jsxs)(d.T7Y, {
    className: z.XG,
    fade: true,
    children: [(0, l.jsxs)("div", {
      className: z.kw,
      children: [(O.length > 0 || v.length > 0) && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          children: (0, l.jsx)(d.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: Y.intl.format(Y.t.iB5Gqe, {
              count: O.length + y
            })
          })
        }), O.map(P), v.map(P), (0, l.jsx)("div", {
          className: z.DY
        })]
      }), N.length > 0 && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
          children: [(0, l.jsx)(d.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: Y.intl.format(Y.t["8IV8K9"], {
              count: N.length
            })
          }), (0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: Y.intl.string(Y.t.Ecz7T9)
          })]
        }), N.map(P)]
      }), (0, l.jsx)(el, {
        guild: p
      })]
    }), m && (0, l.jsx)(et, {
      guild: p,
      user: _
    })]
  })
}