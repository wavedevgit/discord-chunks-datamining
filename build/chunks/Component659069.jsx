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
    user: c
  } = e, {
    avatarSrc: d,
    eventHandlers: u,
    isAvatarAnimating: f
  } = (0, y.A)({
    user: c,
    guildId: i.id,
    size: 120
  }), {
    avatarDecorationSrc: h
  } = (0, m.A)({
    user: c,
    size: (0, g.Te)($),
    onlyAnimateOnHoverOrFocus: !f
  }), p = (0, s.bG)([_.Ay], () => _.Ay.getSelfMember(i.id)), x = (0, s.yK)([_.Ay], () => _.Ay.getMemberRoleWithPendingUpdates(i.id, c.id)), O = (0, s.bG)([N.A], () => N.A.getSortedRoles(i.id)), w = (0, j.Ay)(i.id, c.id), E = O.filter(e => x.includes(e.id)), S = (0, C.Ay)(c.id, i.id);
  (0, b.Ay)(() => {
    (0, v.A)(c.id, c.getAvatarURL(i.id, (0, o.FT9)($)), {
      guildId: i.id
    })
  });
  let I = (0, A.parseBioReact)(null == S ? true : S.bio),
    R = D.Ay.getEnableHardwareAcceleration() ? o.JsQ : o.euF;
  return (0, l.jsxs)("div", {
    className: J.ME,
    children: [(0, l.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: Y.intl.string(Y.t.diTbF8)
    }), (0, l.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: Y.intl.string(Y.t["+8um3M"])
    }), (0, l.jsxs)("div", {
      className: J.Kq,
      children: [(0, l.jsx)("div", (n = Q({}, u), r = r = {
        children: (0, l.jsx)(R, {
          src: d,
          avatarDecoration: h,
          size: $,
          "aria-label": c.username
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
      }), n)), (0, l.jsx)(o.Text, {
        variant: "text-lg/medium",
        color: "text-strong",
        className: J.Xh,
        children: null != (t = null == p ? true : p.nick) ? t : P.Ay.getName(c)
      }), (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: a()(X.PT, J.z3),
        children: I
      }), null != E && E.length > 0 && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("hr", {
          className: J.me
        }), (0, l.jsx)(o.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          className: J.DD,
          children: Y.intl.string(Y.t["LPJmL/"])
        }), (0, l.jsx)("div", {
          className: J.Ot,
          children: null == E ? true : E.map(e => {
            var t;
            return (0, l.jsxs)("div", {
              className: J.JC,
              children: [(0, l.jsx)(o.RYH, {
                color: null != (t = e.colorString) ? t : q.TpD,
                colors: w ? e.colorStrings : null,
                className: J.m4
              }), (0, l.jsx)(o.Text, {
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
  } = e, [d, u] = r.useState(null), [f, b] = r.useState(new Set), h = null == n || null == (t = n.options) ? true : t.filter(e => f.has(e.id)), p = (0, G.a)(h), g = (0, G.vV)(h), m = (0, s.yK)([T.A], () => T.A.getOnboardingResponsesForPrompt(i.id, n.id)), {
    helpText: x,
    helpTextAdditional: A
  } = (0, M.W)({
    guild: i,
    prompt: n,
    selectedRoleIds: p,
    selectedChannelIds: g,
    itemHook: (e, t) => (0, l.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-strong",
      children: e
    }, t)
  }), {
    handleSelectOption: j
  } = (0, H.A)(i.id), O = n.options.map(e => Q({
    value: e.id
  }, e)), C = n.options.filter(e => m.includes(e.id)).map(e => e.id);
  return (0, l.jsxs)("div", {
    className: J.J1,
    "data-new": n.isNew,
    children: [n.isNew && (0, l.jsx)(o.LpS, {
      color: c.A.unsafe_rawColors.BRAND_260.css,
      text: Y.intl.string(Y.t.y2b7CA),
      className: J.Ad
    }), (0, l.jsxs)(o.Heading, {
      className: J.Hi,
      variant: "heading-md/semibold",
      color: "text-strong",
      children: [n.title, n.required ? (0, l.jsx)("span", {
        className: a()(J.mw, {
          [J.So]: (null == d ? true : d.type) === ee
        }),
        children: "*"
      }) : null]
    }), (0, l.jsx)(F.A, {
      options: O,
      value: C,
      onChange: e => {
        let t = e.find(e => !m.includes(e.id)),
          l = e.map(e => e.id);
        if (null != t) j(n, t, true), n.singleSelect && n.options.forEach(e => f.delete(e.id)), f.add(t.id);
        else {
          let e = m.filter(e => !l.includes(e)),
            t = n.options.filter(t => e.includes(t.id));
          if (m.length <= t.length && n.required) return void u({
            type: ee
          });
          t.forEach(e => {
            j(n, e, false), f.delete(e.id)
          })
        }
        b(new Set(f)), u(null)
      },
      canBeNew: !n.isNew
    }), (0, l.jsxs)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: J.BK,
      children: [x, " ", A]
    })]
  })
}

function el(e) {
  let {
    guild: t
  } = e, n = (0, s.bG)([T.A], () => T.A.getConnections(t.id));
  return 0 === n.length ? null : (0, l.jsxs)("div", {
    className: J.J1,
    children: [(0, l.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: Y.intl.string(Y.t.eDVMrA)
    }), (0, l.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: Y.intl.string(Y.t.BozOXu)
    }), (0, l.jsx)("div", {
      className: J.lA,
      children: n.map((e, n) => (0, l.jsx)(U.A, {
        connection: e,
        guildId: t.id,
        location: p.A.CHANNELS_AND_ROLES
      }, n))
    })]
  })
}

function er(e) {
  var t;
  let {
    prompt: n,
    guild: i
  } = e, [d, u] = r.useState(null), [f, b] = r.useState(new Set), h = null == n || null == (t = n.options) ? true : t.filter(e => f.has(e.id)), p = (0, G.a)(h), g = (0, G.vV)(h), m = (0, s.yK)([T.A], () => T.A.getOnboardingResponsesForPrompt(i.id, n.id)), {
    helpText: x,
    helpTextAdditional: A
  } = (0, M.W)({
    guild: i,
    prompt: n,
    selectedRoleIds: p,
    selectedChannelIds: g,
    itemHook: (e, t) => (0, l.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-strong",
      children: e
    }, t)
  }), {
    handleSelectOption: j
  } = (0, H.A)(i.id);
  return (0, l.jsxs)("div", {
    className: J.J1,
    "data-new": n.isNew,
    children: [n.isNew && (0, l.jsx)(o.LpS, {
      color: c.A.unsafe_rawColors.BRAND_260.css,
      text: Y.intl.string(Y.t.y2b7CA),
      className: J.Ad
    }), (0, l.jsxs)(o.Heading, {
      className: J.Hi,
      variant: "heading-md/semibold",
      color: "text-strong",
      children: [n.title, n.required ? (0, l.jsx)("span", {
        className: a()(J.mw, {
          [J.So]: (null == d ? true : d.type) === ee
        }),
        children: "*"
      }) : null]
    }), (0, l.jsx)("div", {
      className: J.vS,
      children: n.options.map(e => (0, l.jsx)(V.A, {
        hideMemberCount: true,
        guildId: i.id,
        option: e,
        onSelect: t => {
          !t && 1 === m.length && n.required ? u({
            type: ee
          }) : (j(n, e, null != t && t), n.singleSelect && t && n.options.forEach(e => f.delete(e.id)), t ? f.add(e.id) : f.delete(e.id), b(new Set(f)), u(null))
        },
        selected: m.includes(e.id),
        canBeNew: !n.isNew
      }, e.id))
    }), (0, l.jsxs)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: J.BK,
      children: [x, " ", A]
    })]
  })
}

function ei(e) {
  let {
    guildId: t,
    onBrowseChannels: n
  } = e, i = (0, d.Mw)((0, h.Ay)()), b = (0, s.bG)([w.A], () => w.A.getGuild(t)), p = (0, s.bG)([S.default], () => S.default.getCurrentUser()), g = (0, f.A)("(min-width: 1344px)") && null != p, m = r.useCallback(() => {
    (0, O.pX)(q.BVt.CHANNEL(t, K.VV.CHANNEL_BROWSER)), null == n || n()
  }, [t, n]), A = (0, s.bG)([E.Ay], () => E.Ay.hasUnread(t, Z.P.GUILD_ONBOARDING_QUESTION)), j = null == b ? true : b.latestOnboardingQuestionId, {
    onboardingPromptsRaw: C,
    newOnboardingPrompts: y,
    onboardingPromptsWithNewAnswers: v,
    newAnswersCount: _,
    onboardingPrompts: N
  } = (0, k.A)(t);
  r.useEffect(() => {
    (null == b ? true : b.id) == null || !x.A.isFullServerPreview(b.id) && (T.A.shouldFetchPrompts(b.id) || A) && (0, L.jx)(b.id)
  }, [null == b ? true : b.id, A, j]), r.useEffect(() => {
    if ((null == b ? true : b.id) != null && !x.A.isFullServerPreview(b.id)) return () => {
      (0, u.hK)(b.id, Z.P.GUILD_ONBOARDING_QUESTION, T.A.ackIdForGuild(b.id)), R.A.updateOnboardingResponses(b.id)
    }
  }, [null == b ? true : b.id]);
  let P = r.useCallback(e => {
    if (null == b) return null;
    switch (e.type) {
      case W.ME.MULTIPLE_CHOICE:
        return (0, l.jsx)(er, {
          prompt: e,
          guild: b
        }, e.id);
      case W.ME.DROPDOWN:
        return (0, l.jsx)(en, {
          prompt: e,
          guild: b
        }, e.id);
      default:
        (0, I.xb)(e.type)
    }
  }, [b]);
  if (null == b) return null;
  if (0 === C.length) {
    let e = i ? c.A.unsafe_rawColors.PRIMARY_300.css : c.A.unsafe_rawColors.PRIMARY_500.css,
      t = i ? c.A.unsafe_rawColors.PRIMARY_700.css : c.A.unsafe_rawColors.PRIMARY_230.css;
    return (0, l.jsx)("div", {
      className: a()(z.Qs, J.Zc),
      children: (0, l.jsxs)("div", {
        className: J.do,
        children: [(0, l.jsx)(B.A, {
          className: J.Dw,
          foregroundColor: e,
          backgroundColor: t
        }), (0, l.jsx)(o.Heading, {
          className: J.jU,
          variant: "heading-md/semibold",
          children: Y.intl.string(Y.t.leKHQz)
        }), (0, l.jsx)(o.Text, {
          variant: "text-sm/medium",
          children: Y.intl.format(Y.t["jH+ktB"], {
            onBrowseChannels: m
          })
        })]
      })
    })
  }
  return (0, l.jsxs)(o.T7Y, {
    className: J.XG,
    fade: true,
    children: [(0, l.jsxs)("div", {
      className: J.kw,
      children: [(y.length > 0 || v.length > 0) && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          children: (0, l.jsx)(o.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: Y.intl.format(Y.t.iB5Gqe, {
              count: y.length + _
            })
          })
        }), y.map(P), v.map(P), (0, l.jsx)("div", {
          className: J.DY
        })]
      }), N.length > 0 && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
          children: [(0, l.jsx)(o.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: Y.intl.format(Y.t["8IV8K9"], {
              count: N.length
            })
          }), (0, l.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: Y.intl.string(Y.t.Ecz7T9)
          })]
        }), N.map(P)]
      }), (0, l.jsx)(el, {
        guild: b
      })]
    }), g && (0, l.jsx)(et, {
      guild: b,
      user: p
    })]
  })
}