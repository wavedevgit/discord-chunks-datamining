/** Chunk was on 9536 **/
/** chunk id: 227380, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => S
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
  Chunk349348 = require("./349348.js");

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

function N(e, t) {
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
    checked: l,
    pending: a,
    pendingDescription: s,
    failingDescription: o
  } = e, c = t, d = null, u = null;
  return a ? (d = (0, r.jsx)(m.Mgn, {
    size: "custom",
    color: g.Z.unsafe_rawColors.YELLOW_300.css,
    width: 20,
    height: 20
  }), u = null != s ? s : i) : l ? (d = (0, r.jsx)(f.$q, {
    readOnly: true,
    shape: f.zV.ROUND,
    size: 20,
    type: f.M0.INVERTED,
    value: true
  }), u = i) : (d = (0, r.jsx)(m.k$p, {
    size: "custom",
    color: g.Z.unsafe_rawColors.RED_400.css,
    width: 20,
    height: 20
  }), c = null != n ? n : t, u = null != o ? o : i), (0, r.jsxs)("div", {
    className: y.checklistItem,
    children: [(0, r.jsx)("div", {
      className: y.checklistIcon,
      children: d
    }), (0, r.jsxs)("div", {
      className: y.checklistText,
      children: [(0, r.jsx)(m.Heading, {
        variant: "heading-md/semibold",
        children: c
      }), (0, r.jsx)(m.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: u
      })]
    })]
  })
};

function I(e, t) {
  return o()(null == e ? true : e.map(e => {
    let [t, n] = e;
    return null == t ? true : t.id
  }), null == t ? true : t.map(e => {
    let [t, n] = e;
    return null == t ? true : t.id
  }))
}
let S = e => {
  let {
    guild: t,
    guildId: l,
    className: s,
    headerContent: o,
    failedItemsOnly: c = false
  } = e, [g, S] = (0, u.Wu)([j.ZP], () => [j.ZP.getDiscoveryChecklist(l), j.ZP.isLoading()], [l]), {
    nsfwProperties: _
  } = null != g ? g : {}, T = null == t ? true : t.features.has(v.GuildFeatures.PARTNERED), P = null == _ ? true : _.channels_banned_keywords, w = (0, u.e7)([b.ZP], () => {
    var e, n, r;
    if (null == P) return [];
    let i = null != (n = (null != (e = b.ZP.getChannels(t.id)) ? e : {})[b.sH]) ? n : [],
      l = null != (r = null == i ? true : i.map(e => e.channel).reduce((e, t) => N(C({}, e), {
        [t.id]: t
      }), {})) ? r : {};
    return null == P ? [] : Object.entries(P).map(e => {
      let [t, n] = e;
      return [l[t], n]
    })
  }, [t.id, P], I);
  if (S || null == g) return (0, r.jsxs)("div", {
    className: a()(y.container, y.loaderContainer, s),
    children: [(0, r.jsx)(m.Heading, {
      className: y.loadingText,
      variant: "heading-md/semibold",
      color: "text-default",
      children: O.intl.string(O.t.e1gm0f)
    }), (0, r.jsx)(m.$jN, {
      className: y.__invalid_spinner
    })]
  });
  let Z = T ? O.t["WH+1Yz"] : O.t.a4MYDO,
    R = [{
      name: O.intl.string(O.t.yvk9py),
      failingName: O.intl.string(O.t["IY/UT/"]),
      description: O.intl.string(O.t.hSLSM6),
      failingDescription: O.intl.format(O.t.odsGgy, {
        termsURL: v.EYA.TERMS,
        guidelinesURL: p.Z.getArticleURL(v.BhN.PUBLIC_GUILD_GUILDLINES)
      }),
      checked: null == g ? true : g.safeEnvironment
    }, {
      name: O.intl.formatToPlainString(O.t.NYovA2, {
        minMembers: g.minimumGuildSize
      }),
      failingName: O.intl.formatToPlainString(O.t.wvJwYs, {
        minMembers: g.minimumGuildSize.toLocaleString()
      }),
      description: null,
      failingDescription: O.intl.format(Z, {
        minMembers: g.minimumGuildSize.toLocaleString()
      }),
      checked: null == g ? true : g.size
    }, {
      name: O.intl.string(O.t.PtxOCK),
      failingName: O.intl.string(O.t.JPF5IL),
      description: O.intl.formatToPlainString(O.t.VT0bQJ, {
        minimumGuildAge: Math.ceil(g.minimumGuildAge / 7)
      }),
      failingDescription: O.intl.formatToPlainString(O.t.jYwM1Y, {
        minimumGuildAge: Math.ceil(g.minimumGuildAge / 7),
        passDate: d()(h.default.extractTimestamp(l)).add(g.minimumGuildAge, "days").format("LL")
      }),
      checked: null == g ? true : g.age
    }, {
      name: (null == g ? true : g.healthScorePending) ? O.intl.string(O.t.G77ud0) : O.intl.string(O.t["95nW0H"]),
      failingName: O.intl.string(O.t["+GHxPy"]),
      description: O.intl.string(O.t.rTWJwX),
      failingDescription: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.Text, {
          color: "text-muted",
          className: y.healthFailingDescription,
          variant: "text-sm/normal",
          children: O.intl.string(O.t.LjqS0G)
        }), (null == g ? true : g.engagementHealthy) ? null : (0, r.jsx)(m.Text, {
          color: "text-feedback-critical",
          variant: "text-sm/normal",
          children: O.intl.string(O.t.X8Lt77)
        }), (null == g ? true : g.retentionHealthy) ? null : (0, r.jsx)(m.Text, {
          color: "text-feedback-critical",
          variant: "text-sm/normal",
          children: O.intl.string(O.t.esdy89)
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
        })() && (0, r.jsx)(f.zx, {
          className: y.detailsButton,
          look: f.zx.Looks.LINK,
          size: f.zx.Sizes.NONE,
          color: f.zx.Colors.LINK,
          onClick: () => (0, m.ZDy)(async () => {
            let {
              default: e
            } = await n.e("23401").then(n.bind(n, 666599));
            return t => (0, r.jsx)(e, N(C({}, t), {
              guildChecklist: g
            }))
          }),
          children: O.intl.string(O.t.qyiTH8)
        })]
      }),
      pendingDescription: (null == g ? true : g.size) ? O.intl.format(O.t.ALtXIF, {
        checkBackHook: (e, t) => (0, r.jsx)("strong", {
          className: y.healthPending,
          children: e
        }, t)
      }) : O.intl.formatToPlainString(O.t["6S/96D"], {
        minMembers: 200
      }),
      checked: null == g ? true : g.healthy,
      pending: null == g ? true : g.healthScorePending
    }, {
      name: O.intl.string(O.t["AUUV/x"]),
      failingName: O.intl.string(O.t["jURyO+"]),
      description: O.intl.string(O.t.wikb1q),
      failingDescription: (0, r.jsxs)(r.Fragment, {
        children: [(null == _ ? true : _.channels) != null ? (0, r.jsx)(m.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: O.intl.format(O.t["T+DQYY"], {
            channelHook: (e, t) => (0, r.jsx)("span", {
              className: y.doesNot,
              children: e
            }, t)
          })
        }) : null, w.length > 0 ? (0, r.jsx)("div", {
          className: y.indent,
          children: w.map(e => {
            let [t, n] = e;
            return null != t ? (0, r.jsxs)(m.Text, {
              color: "text-muted",
              variant: "text-sm/normal",
              children: ["#", t.name, ": ", n.join(", ")]
            }, t.id) : null
          })
        }) : null, (null == _ ? true : _.name) != null ? (0, r.jsx)(m.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: O.intl.format(O.t.KVD8E3, {
            nameHook: (e, t) => (0, r.jsx)("span", {
              className: y.doesNot,
              children: e
            }, t)
          })
        }) : null, (null == _ ? true : _.description) != null ? (0, r.jsx)(m.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: O.intl.format(O.t["/W9Kel"], {
            descriptionHook: (e, t) => (0, r.jsx)("span", {
              className: y.doesNot,
              children: e
            }, t)
          })
        }) : null, (null == _ ? true : _.icon) != null || (null == _ ? true : _.discovery_splash) != null || (null == _ ? true : _.invite_splash) != null || (null == _ ? true : _.banner) != null ? (0, r.jsx)(m.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: O.intl.string(O.t.WVKQ6q)
        }) : null]
      }),
      checked: null == _ || 0 === Object.keys(_).length
    }, {
      name: O.intl.string(O.t.lSXnL9),
      failingName: O.intl.string(O.t.awA3Pb),
      description: O.intl.string(O.t.QbBJ7R),
      failingDescription: O.intl.format(O.t.kBXInb, {
        onClick: () => x.Z.setSection(v.pNK.SAFETY, v.KsC.SAFETY_PERMISSIONS)
      }),
      checked: null == g ? true : g.protected
    }];
  return (0, r.jsxs)("div", {
    className: a()(y.container, s),
    children: [(() => {
      let e = (null == g ? true : g.sufficient) ? n(909425) : n(177266);
      return null == o ? null : (0, r.jsxs)("div", {
        className: y.header,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: e,
          className: y.headerIcon,
          width: 40
        }), o]
      })
    })(), R.filter(e => !c || null == e.checked || !e.checked).map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(E, C({}, e)), t < R.length - 1 ? (0, r.jsx)("hr", {
        className: y.separator
      }) : null]
    }, "".concat(e.name)))]
  })
}