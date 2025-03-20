/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => O
}), n(266796), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(498607),
  o = n.n(l),
  A = n(913527),
  c = n.n(A),
  d = n(442837),
  u = n(692547),
  g = n(481060),
  f = n(984933),
  m = n(63063),
  p = n(709054),
  h = n(434404),
  C = n(118215),
  b = n(981631),
  v = n(388032),
  x = n(579382);

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function j(e, t) {
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
let E = e => {
  let {
    name: t,
    failingName: n,
    description: i,
    checked: s,
    pending: a,
    pendingDescription: l,
    failingDescription: o
  } = e, A = t, c = null, d = null;
  return a ? (c = (0, r.jsx)(g.P4T, {
    size: "custom",
    color: u.Z.unsafe_rawColors.YELLOW_300.css,
    width: 20,
    height: 20
  }), d = null != l ? l : i) : s ? (c = (0, r.jsx)(g.XZJ, {
    readOnly: !0,
    shape: g.XZJ.Shapes.ROUND,
    size: 20,
    type: g.XZJ.Types.INVERTED,
    value: !0
  }), d = i) : (c = (0, r.jsx)(g.k$p, {
    size: "custom",
    color: u.Z.unsafe_rawColors.RED_400.css,
    width: 20,
    height: 20
  }), A = null != n ? n : t, d = null != o ? o : i), (0, r.jsxs)("div", {
    className: x.checklistItem,
    children: [(0, r.jsx)("div", {
      className: x.checklistIcon,
      children: c
    }), (0, r.jsxs)("div", {
      className: x.checklistText,
      children: [(0, r.jsx)(g.X6q, {
        variant: "heading-md/semibold",
        children: A
      }), (0, r.jsx)(g.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: d
      })]
    })]
  })
};

function I(e, t) {
  return o()(null == e ? void 0 : e.map(e => {
    let [t, n] = e;
    return null == t ? void 0 : t.id
  }), null == t ? void 0 : t.map(e => {
    let [t, n] = e;
    return null == t ? void 0 : t.id
  }))
}
let O = e => {
  let {
    guild: t,
    guildId: s,
    className: l,
    headerContent: o,
    failedItemsOnly: A = !1
  } = e, [u, O] = (0, d.Wu)([C.ZP], () => [C.ZP.getDiscoveryChecklist(s), C.ZP.isLoading()], [s]), {
    nsfwProperties: y
  } = null != u ? u : {}, w = null == t ? void 0 : t.hasFeature(b.oNc.PARTNERED), P = null == y ? void 0 : y.channels_banned_keywords, B = (0, d.e7)([f.ZP], () => {
    var e, n, r;
    if (null == P) return [];
    let i = null !== (n = (null !== (e = f.ZP.getChannels(t.id)) && void 0 !== e ? e : {})[f.sH]) && void 0 !== n ? n : [],
      s = null !== (r = null == i ? void 0 : i.map(e => e.channel).reduce((e, t) => j(N({}, e), {
        [t.id]: t
      }), {})) && void 0 !== r ? r : {};
    return null == P ? [] : Object.entries(P).map(e => {
      let [t, n] = e;
      return [s[t], n]
    })
  }, [t.id, P], I);
  if (O || null == u) return (0, r.jsxs)("div", {
    className: a()(x.container, x.loaderContainer, l),
    children: [(0, r.jsx)(g.X6q, {
      className: x.loadingText,
      variant: "heading-md/semibold",
      color: "header-secondary",
      children: v.NW.string(v.t.e1gm0d)
    }), (0, r.jsx)(g.$jN, {
      className: x.__invalid_spinner
    })]
  });
  let D = w ? v.t["WH+1Y2"] : v.t.a4MYDA,
    T = [{
      name: v.NW.string(v.t.yvk9p6),
      failingName: v.NW.string(v.t["IY/UT0"]),
      description: v.NW.string(v.t.hSLSMz),
      failingDescription: v.NW.format(v.t.odsGg4, {
        termsURL: b.EYA.TERMS,
        guidelinesURL: m.Z.getArticleURL(b.BhN.PUBLIC_GUILD_GUILDLINES)
      }),
      checked: null == u ? void 0 : u.safeEnvironment
    }, {
      name: v.NW.formatToPlainString(v.t.NYovAw, {
        minMembers: u.minimumGuildSize
      }),
      failingName: v.NW.formatToPlainString(v.t.wvJwYm, {
        minMembers: u.minimumGuildSize.toLocaleString()
      }),
      description: null,
      failingDescription: v.NW.format(D, {
        minMembers: u.minimumGuildSize.toLocaleString()
      }),
      checked: null == u ? void 0 : u.size
    }, {
      name: v.NW.string(v.t.PtxOCA),
      failingName: v.NW.string(v.t.JPF5IC),
      description: v.NW.formatToPlainString(v.t.VT0bQE, {
        minimumGuildAge: Math.ceil(u.minimumGuildAge / 7)
      }),
      failingDescription: v.NW.formatToPlainString(v.t.jYwM1d, {
        minimumGuildAge: Math.ceil(u.minimumGuildAge / 7),
        passDate: c()(p.default.extractTimestamp(s)).add(u.minimumGuildAge, "days").format("LL")
      }),
      checked: null == u ? void 0 : u.age
    }, {
      name: (null == u ? void 0 : u.healthScorePending) ? v.NW.string(v.t.G77ud3) : v.NW.string(v.t["95nW0N"]),
      failingName: v.NW.string(v.t["+GHxPz"]),
      description: v.NW.string(v.t.rTWJwc),
      failingDescription: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(g.Text, {
          color: "text-muted",
          className: x.healthFailingDescription,
          variant: "text-sm/normal",
          children: v.NW.string(v.t.LjqS0N)
        }), (null == u ? void 0 : u.engagementHealthy) ? null : (0, r.jsx)(g.Text, {
          color: "text-danger",
          variant: "text-sm/normal",
          children: v.NW.string(v.t["X8Lt7+"])
        }), (null == u ? void 0 : u.retentionHealthy) ? null : (0, r.jsx)(g.Text, {
          color: "text-danger",
          variant: "text-sm/normal",
          children: v.NW.string(v.t["esdy8/"])
        }), (() => {
          if (null == u || null == u.healthScore) return !1;
          let {
            retentionHealthy: e,
            engagementHealthy: t,
            healthScore: n
          } = u, {
            avg_nonnew_participators: r,
            avg_nonnew_communicators: i,
            perc_ret_w1_intentful: s
          } = n;
          return !e && null != s || !t && null != r && null != i
        })() && (0, r.jsx)(g.zxk, {
          className: x.detailsButton,
          look: g.zxk.Looks.LINK,
          size: g.zxk.Sizes.NONE,
          color: g.zxk.Colors.LINK,
          onClick: () => (0, g.ZDy)(async () => {
            let {
              default: e
            } = await n.e("23401").then(n.bind(n, 666599));
            return t => (0, r.jsx)(e, j(N({}, t), {
              guildChecklist: u
            }))
          }),
          children: v.NW.string(v.t.qyiTHx)
        })]
      }),
      pendingDescription: (null == u ? void 0 : u.size) ? v.NW.format(v.t.ALtXIC, {
        checkBackHook: (e, t) => (0, r.jsx)("strong", {
          className: x.healthPending,
          children: e
        }, t)
      }) : v.NW.formatToPlainString(v.t["6S/96O"], {
        minMembers: 200
      }),
      checked: null == u ? void 0 : u.healthy,
      pending: null == u ? void 0 : u.healthScorePending
    }, {
      name: v.NW.string(v.t["/cghSE"]),
      failingName: v.NW.string(v.t["0HJNa2"]),
      description: v.NW.string(v.t.Pbu9AQ),
      failingDescription: (0, r.jsxs)(r.Fragment, {
        children: [(null == y ? void 0 : y.channels) != null ? (0, r.jsx)(g.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: v.NW.format(v.t["T+DQYW"], {
            channelHook: (e, t) => (0, r.jsx)("span", {
              className: x.doesNot,
              children: e
            }, t)
          })
        }) : null, B.length > 0 ? (0, r.jsx)("div", {
          className: x.indent,
          children: B.map(e => {
            let [t, n] = e;
            return null != t ? (0, r.jsxs)(g.Text, {
              color: "text-muted",
              variant: "text-sm/normal",
              children: ["#", t.name, ": ", n.join(", ")]
            }, t.id) : null
          })
        }) : null, (null == y ? void 0 : y.name) != null ? (0, r.jsx)(g.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: v.NW.format(v.t.KVD8Ex, {
            nameHook: (e, t) => (0, r.jsx)("span", {
              className: x.doesNot,
              children: e
            }, t)
          })
        }) : null, (null == y ? void 0 : y.description) != null ? (0, r.jsx)(g.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: v.NW.format(v.t["/W9Ken"], {
            descriptionHook: (e, t) => (0, r.jsx)("span", {
              className: x.doesNot,
              children: e
            }, t)
          })
        }) : null]
      }),
      checked: null == y || 0 === Object.keys(y).length
    }, {
      name: v.NW.string(v.t.lSXnLy),
      failingName: v.NW.string(v.t.awA3PT),
      description: v.NW.string(v.t.QbBJ7e),
      failingDescription: v.NW.format(v.t.kBXInZ, {
        onClick: () => h.Z.setSection(b.pNK.SAFETY, b.KsC.SAFETY_PERMISSIONS)
      }),
      checked: null == u ? void 0 : u.protected
    }];
  return (0, r.jsxs)("div", {
    className: a()(x.container, l),
    children: [(() => {
      let e = (null == u ? void 0 : u.sufficient) ? n(909425) : n(177266);
      return null == o ? null : (0, r.jsxs)("div", {
        className: x.header,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: e,
          className: x.headerIcon,
          width: 40
        }), o]
      })
    })(), T.filter(e => !A || null == e.checked || !e.checked).map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(E, N({}, e)), t < T.length - 1 ? (0, r.jsx)("hr", {
        className: x.separator
      }) : null]
    }, "".concat(e.name)))]
  })
}