/** Chunk was on 384 **/
/** chunk id: 227380, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk498607 = require("./498607.js"),
  o = require.n(Chunk498607),
  Chunk913527 = require("./913527.js"),
  d = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk984933 = require("./984933.js"),
  Chunk63063 = require("./63063.js"),
  Chunk709054 = require("./709054.js"),
  Chunk434404 = require("./434404.js"),
  Chunk733895 = require("./733895.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk213798 = require("./213798.js");

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

function y(e, t) {
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
let N = e => {
  let {
    name: t,
    failingName: n,
    description: i,
    checked: l,
    pending: a,
    pendingDescription: s,
    failingDescription: o
  } = e, c = t, d = null, u = null;
  return a ? (d = (0, r.jsx)(p.Mgn, {
    size: "custom",
    color: g.Z.unsafe_rawColors.YELLOW_300.css,
    width: 20,
    height: 20
  }), u = null != s ? s : i) : l ? (d = (0, r.jsx)(m.$q, {
    readOnly: true,
    shape: m.zV.ROUND,
    size: 20,
    type: m.M0.INVERTED,
    value: true
  }), u = i) : (d = (0, r.jsx)(p.k$p, {
    size: "custom",
    color: g.Z.unsafe_rawColors.RED_400.css,
    width: 20,
    height: 20
  }), c = null != n ? n : t, u = null != o ? o : i), (0, r.jsxs)("div", {
    className: O.checklistItem,
    children: [(0, r.jsx)("div", {
      className: O.checklistIcon,
      children: d
    }), (0, r.jsxs)("div", {
      className: O.checklistText,
      children: [(0, r.jsx)(p.Heading, {
        variant: "heading-md/semibold",
        children: c
      }), (0, r.jsx)(p.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: u
      })]
    })]
  })
};

function E(e, t) {
  return o()(null == e ? true : e.map(e => {
    let [t, n] = e;
    return null == t ? true : t.id
  }), null == t ? true : t.map(e => {
    let [t, n] = e;
    return null == t ? true : t.id
  }))
}
let I = e => {
  let {
    guild: t,
    guildId: l,
    className: s,
    headerContent: o,
    failedItemsOnly: c = false
  } = e, [g, I] = (0, u.Wu)([j.ZP], () => [j.ZP.getDiscoveryChecklist(l), j.ZP.isLoading()], [l]), {
    nsfwProperties: S
  } = null != g ? g : {}, T = null == t ? true : t.features.has(_.GuildFeatures.PARTNERED), P = null == S ? true : S.channels_banned_keywords, w = (0, u.e7)([f.ZP], () => {
    var e, n, r;
    if (null == P) return [];
    let i = null != (n = (null != (e = f.ZP.getChannels(t.id)) ? e : {})[f.sH]) ? n : [],
      l = null != (r = null == i ? true : i.map(e => e.channel).reduce((e, t) => y(C({}, e), {
        [t.id]: t
      }), {})) ? r : {};
    return null == P ? [] : Object.entries(P).map(e => {
      let [t, n] = e;
      return [l[t], n]
    })
  }, [t.id, P], E);
  if (I || null == g) return (0, r.jsxs)("div", {
    className: a()(O.container, O.loaderContainer, s),
    children: [(0, r.jsx)(p.Heading, {
      className: O.loadingText,
      variant: "heading-md/semibold",
      color: "header-secondary",
      children: v.intl.string(v.t.e1gm0f)
    }), (0, r.jsx)(p.$jN, {
      className: O.__invalid_spinner
    })]
  });
  let Z = T ? v.t["WH+1Yz"] : v.t.a4MYDO,
    R = [{
      name: v.intl.string(v.t.yvk9py),
      failingName: v.intl.string(v.t["IY/UT/"]),
      description: v.intl.string(v.t.hSLSM6),
      failingDescription: v.intl.format(v.t.odsGgy, {
        termsURL: _.EYA.TERMS,
        guidelinesURL: h.Z.getArticleURL(_.BhN.PUBLIC_GUILD_GUILDLINES)
      }),
      checked: null == g ? true : g.safeEnvironment
    }, {
      name: v.intl.formatToPlainString(v.t.NYovA2, {
        minMembers: g.minimumGuildSize
      }),
      failingName: v.intl.formatToPlainString(v.t.wvJwYs, {
        minMembers: g.minimumGuildSize.toLocaleString()
      }),
      description: null,
      failingDescription: v.intl.format(Z, {
        minMembers: g.minimumGuildSize.toLocaleString()
      }),
      checked: null == g ? true : g.size
    }, {
      name: v.intl.string(v.t.PtxOCK),
      failingName: v.intl.string(v.t.JPF5IL),
      description: v.intl.formatToPlainString(v.t.VT0bQJ, {
        minimumGuildAge: Math.ceil(g.minimumGuildAge / 7)
      }),
      failingDescription: v.intl.formatToPlainString(v.t.jYwM1Y, {
        minimumGuildAge: Math.ceil(g.minimumGuildAge / 7),
        passDate: d()(b.default.extractTimestamp(l)).add(g.minimumGuildAge, "days").format("LL")
      }),
      checked: null == g ? true : g.age
    }, {
      name: (null == g ? true : g.healthScorePending) ? v.intl.string(v.t.G77ud0) : v.intl.string(v.t["95nW0H"]),
      failingName: v.intl.string(v.t["+GHxPy"]),
      description: v.intl.string(v.t.rTWJwX),
      failingDescription: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(p.Text, {
          color: "text-muted",
          className: O.healthFailingDescription,
          variant: "text-sm/normal",
          children: v.intl.string(v.t.LjqS0G)
        }), (null == g ? true : g.engagementHealthy) ? null : (0, r.jsx)(p.Text, {
          color: "text-danger",
          variant: "text-sm/normal",
          children: v.intl.string(v.t.X8Lt77)
        }), (null == g ? true : g.retentionHealthy) ? null : (0, r.jsx)(p.Text, {
          color: "text-danger",
          variant: "text-sm/normal",
          children: v.intl.string(v.t.esdy89)
        }), (() => {
          if (null == g || null == g.healthScore) returnfalse;
          let {
            retentionHealthy: e,
            engagementHealthy: t,
            healthScore: n
          } = g, {
            avg_nonnew_participators: r,
            avg_nonnew_communicators: i,
            perc_ret_w1_intentful: l
          } = n;
          return !e && null != l || !t && null != r && null != i
        })() && (0, r.jsx)(m.zx, {
          className: O.detailsButton,
          look: m.zx.Looks.LINK,
          size: m.zx.Sizes.NONE,
          color: m.zx.Colors.LINK,
          onClick: () => (0, p.ZDy)(async () => {
            let {
              default: e
            } = await n.e("23401").then(n.bind(n, 666599));
            return t => (0, r.jsx)(e, y(C({}, t), {
              guildChecklist: g
            }))
          }),
          children: v.intl.string(v.t.qyiTH8)
        })]
      }),
      pendingDescription: (null == g ? true : g.size) ? v.intl.format(v.t.ALtXIF, {
        checkBackHook: (e, t) => (0, r.jsx)("strong", {
          className: O.healthPending,
          children: e
        }, t)
      }) : v.intl.formatToPlainString(v.t["6S/96D"], {
        minMembers: 200
      }),
      checked: null == g ? true : g.healthy,
      pending: null == g ? true : g.healthScorePending
    }, {
      name: v.intl.string(v.t["AUUV/x"]),
      failingName: v.intl.string(v.t["jURyO+"]),
      description: v.intl.string(v.t.wikb1q),
      failingDescription: (0, r.jsxs)(r.Fragment, {
        children: [(null == S ? true : S.channels) != null ? (0, r.jsx)(p.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: v.intl.format(v.t["T+DQYY"], {
            channelHook: (e, t) => (0, r.jsx)("span", {
              className: O.doesNot,
              children: e
            }, t)
          })
        }) : null, w.length > 0 ? (0, r.jsx)("div", {
          className: O.indent,
          children: w.map(e => {
            let [t, n] = e;
            return null != t ? (0, r.jsxs)(p.Text, {
              color: "text-muted",
              variant: "text-sm/normal",
              children: ["#", t.name, ": ", n.join(", ")]
            }, t.id) : null
          })
        }) : null, (null == S ? true : S.name) != null ? (0, r.jsx)(p.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: v.intl.format(v.t.KVD8E3, {
            nameHook: (e, t) => (0, r.jsx)("span", {
              className: O.doesNot,
              children: e
            }, t)
          })
        }) : null, (null == S ? true : S.description) != null ? (0, r.jsx)(p.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: v.intl.format(v.t["/W9Kel"], {
            descriptionHook: (e, t) => (0, r.jsx)("span", {
              className: O.doesNot,
              children: e
            }, t)
          })
        }) : null, (null == S ? true : S.icon) != null || (null == S ? true : S.discovery_splash) != null || (null == S ? true : S.invite_splash) != null || (null == S ? true : S.banner) != null ? (0, r.jsx)(p.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: v.intl.string(v.t.WVKQ6q)
        }) : null]
      }),
      checked: null == S || 0 === Object.keys(S).length
    }, {
      name: v.intl.string(v.t.lSXnL9),
      failingName: v.intl.string(v.t.awA3Pb),
      description: v.intl.string(v.t.QbBJ7R),
      failingDescription: v.intl.format(v.t.kBXInb, {
        onClick: () => x.Z.setSection(_.pNK.SAFETY, _.KsC.SAFETY_PERMISSIONS)
      }),
      checked: null == g ? true : g.protected
    }];
  return (0, r.jsxs)("div", {
    className: a()(O.container, s),
    children: [(() => {
      let e = (null == g ? true : g.sufficient) ? n(909425) : n(177266);
      return null == o ? null : (0, r.jsxs)("div", {
        className: O.header,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: e,
          className: O.headerIcon,
          width: 40
        }), o]
      })
    })(), R.filter(e => !c || null == e.checked || !e.checked).map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(N, C({}, e)), t < R.length - 1 ? (0, r.jsx)("hr", {
        className: O.separator
      }) : null]
    }, "".concat(e.name)))]
  })
}