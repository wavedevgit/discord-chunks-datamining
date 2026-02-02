/** Chunk was on 39048 **/
/** chunk id: 658446, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk33851 = require("./33851.js"),
  o = require.n(Chunk33851),
  Chunk989349 = require("./989349.js"),
  d = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk808728 = require("./808728.js"),
  Chunk975571 = require("./975571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk997509 = require("./997509.js"),
  Chunk834720 = require("./834720.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk960552 = require("./960552.js");

function y(e) {
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

function A(e, t) {
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
    pending: s,
    pendingDescription: a,
    failingDescription: o
  } = e, c = t, d = null, u = null;
  return s ? (d = (0, r.jsx)(p.EpV, {
    size: "custom",
    color: g.A.unsafe_rawColors.YELLOW_300.css,
    width: 20,
    height: 20
  }), u = null != a ? a : i) : l ? (d = (0, r.jsx)(m.Kj, {
    readOnly: true,
    shape: m.Ib.ROUND,
    size: 20,
    type: m.Xo.INVERTED,
    value: true
  }), u = i) : (d = (0, r.jsx)(p.aXh, {
    size: "custom",
    color: g.A.unsafe_rawColors.RED_400.css,
    width: 20,
    height: 20
  }), c = null != n ? n : t, u = null != o ? o : i), (0, r.jsxs)("div", {
    className: v.gd,
    children: [(0, r.jsx)("div", {
      className: v.aV,
      children: d
    }), (0, r.jsxs)("div", {
      className: v.QL,
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

function N(e, t) {
  return o()(null == e ? true : e.map(e => {
    let [t, n] = e;
    return null == t ? true : t.id
  }), null == t ? true : t.map(e => {
    let [t, n] = e;
    return null == t ? true : t.id
  }))
}
let S = e => {
  let t, {
      guild: l,
      guildId: a,
      className: o,
      headerContent: c,
      failedItemsOnly: g = false
    } = e,
    [S, I] = (0, u.yK)([j.Ay], () => [j.Ay.getDiscoveryChecklist(a), j.Ay.isLoading()], [a]),
    {
      nsfwProperties: C
    } = null != S ? S : {},
    T = null == l ? true : l.features.has(_.GuildFeatures.PARTNERED),
    P = null == C ? true : C.channels_banned_keywords,
    w = (0, u.bG)([f.Ay], () => {
      var e, t, n;
      if (null == P) return [];
      let r = null != (e = (null != (t = f.Ay.getChannels(l.id)) ? t : {})[f.I6]) ? e : [],
        i = null != (n = null == r ? true : r.map(e => e.channel).reduce((e, t) => A(y({}, e), {
          [t.id]: t
        }), {})) ? n : {};
      return null == P ? [] : Object.entries(P).map(e => {
        let [t, n] = e;
        return [i[t], n]
      })
    }, [l.id, P], N);
  if (I || null == S) return (0, r.jsxs)("div", {
    className: s()(v.kL, v.NQ, o),
    children: [(0, r.jsx)(p.Heading, {
      className: v.KQ,
      variant: "heading-md/semibold",
      color: "text-default",
      children: O.intl.string(O.t.e1gm0f)
    }), (0, r.jsx)(p.y$y, {
      className: v.__invalid_spinner
    })]
  });
  let R = T ? O.t["WH+1Yz"] : O.t.a4MYDO,
    D = [{
      name: O.intl.string(O.t.yvk9py),
      failingName: O.intl.string(O.t["IY/UT/"]),
      description: O.intl.string(O.t.hSLSM6),
      failingDescription: O.intl.format(O.t.odsGgy, {
        termsURL: _.X7G.TERMS,
        guidelinesURL: h.A.getArticleURL(_.MVz.PUBLIC_GUILD_GUILDLINES)
      }),
      checked: null == S ? true : S.safeEnvironment
    }, {
      name: O.intl.formatToPlainString(O.t.NYovA2, {
        minMembers: S.minimumGuildSize
      }),
      failingName: O.intl.formatToPlainString(O.t.wvJwYs, {
        minMembers: S.minimumGuildSize.toLocaleString()
      }),
      description: null,
      failingDescription: O.intl.format(R, {
        minMembers: S.minimumGuildSize.toLocaleString()
      }),
      checked: null == S ? true : S.size
    }, {
      name: O.intl.string(O.t.PtxOCK),
      failingName: O.intl.string(O.t.JPF5IL),
      description: O.intl.formatToPlainString(O.t.VT0bQJ, {
        minimumGuildAge: Math.ceil(S.minimumGuildAge / 7)
      }),
      failingDescription: O.intl.formatToPlainString(O.t.jYwM1Y, {
        minimumGuildAge: Math.ceil(S.minimumGuildAge / 7),
        passDate: d()(b.default.extractTimestamp(a)).add(S.minimumGuildAge, "days").format("LL")
      }),
      checked: null == S ? true : S.age
    }, {
      name: (null == S ? true : S.healthScorePending) ? O.intl.string(O.t.G77ud0) : O.intl.string(O.t["95nW0H"]),
      failingName: O.intl.string(O.t["+GHxPy"]),
      description: O.intl.string(O.t.rTWJwX),
      failingDescription: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(p.Text, {
          color: "text-muted",
          className: v.t,
          variant: "text-sm/normal",
          children: O.intl.string(O.t.LjqS0G)
        }), (null == S ? true : S.engagementHealthy) ? null : (0, r.jsx)(p.Text, {
          color: "text-feedback-critical",
          variant: "text-sm/normal",
          children: O.intl.string(O.t.X8Lt77)
        }), (null == S ? true : S.retentionHealthy) ? null : (0, r.jsx)(p.Text, {
          color: "text-feedback-critical",
          variant: "text-sm/normal",
          children: O.intl.string(O.t.esdy89)
        }), (() => {
          if (null == S || null == S.healthScore) returnfalse;
          let {
            retentionHealthy: e,
            engagementHealthy: t,
            healthScore: n
          } = S, {
            avg_nonnew_participators: r,
            avg_nonnew_communicators: i,
            perc_ret_w1_intentful: l
          } = n;
          return !e && null != l || !t && null != r && null != i
        })() && (0, r.jsx)(m.$n, {
          className: v.zh,
          look: m.$n.Looks.LINK,
          size: m.$n.Sizes.NONE,
          color: m.$n.Colors.LINK,
          onClick: () => (0, p.mMO)(async () => {
            let {
              default: e
            } = await n.e("63401").then(n.bind(n, 247920));
            return t => (0, r.jsx)(e, A(y({}, t), {
              guildChecklist: S
            }))
          }),
          children: O.intl.string(O.t.qyiTH8)
        })]
      }),
      pendingDescription: (null == S ? true : S.size) ? O.intl.format(O.t.ALtXIF, {
        checkBackHook: (e, t) => (0, r.jsx)("strong", {
          className: v.eb,
          children: e
        }, t)
      }) : O.intl.formatToPlainString(O.t["6S/96D"], {
        minMembers: 200
      }),
      checked: null == S ? true : S.healthy,
      pending: null == S ? true : S.healthScorePending
    }, {
      name: O.intl.string(O.t["AUUV/x"]),
      failingName: O.intl.string(O.t["jURyO+"]),
      description: O.intl.string(O.t.wikb1q),
      failingDescription: (0, r.jsxs)(r.Fragment, {
        children: [(null == C ? true : C.channels) != null ? (0, r.jsx)(p.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: O.intl.format(O.t["T+DQYY"], {
            channelHook: (e, t) => (0, r.jsx)("span", {
              className: v.ty,
              children: e
            }, t)
          })
        }) : null, w.length > 0 ? (0, r.jsx)("div", {
          className: v.pZ,
          children: w.map(e => {
            let [t, n] = e;
            return null != t ? (0, r.jsxs)(p.Text, {
              color: "text-muted",
              variant: "text-sm/normal",
              children: ["#", t.name, ": ", n.join(", ")]
            }, t.id) : null
          })
        }) : null, (null == C ? true : C.name) != null ? (0, r.jsx)(p.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: O.intl.format(O.t.KVD8E3, {
            nameHook: (e, t) => (0, r.jsx)("span", {
              className: v.ty,
              children: e
            }, t)
          })
        }) : null, (null == C ? true : C.description) != null ? (0, r.jsx)(p.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: O.intl.format(O.t["/W9Kel"], {
            descriptionHook: (e, t) => (0, r.jsx)("span", {
              className: v.ty,
              children: e
            }, t)
          })
        }) : null, (null == C ? true : C.icon) != null || (null == C ? true : C.discovery_splash) != null || (null == C ? true : C.invite_splash) != null || (null == C ? true : C.banner) != null ? (0, r.jsx)(p.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: O.intl.string(O.t.WVKQ6q)
        }) : null]
      }),
      checked: null == C || 0 === Object.keys(C).length
    }, {
      name: O.intl.string(O.t.lSXnL9),
      failingName: O.intl.string(O.t.awA3Pb),
      description: O.intl.string(O.t.QbBJ7R),
      failingDescription: O.intl.format(O.t.kBXInb, {
        onClick: () => x.A.setSection(_.BEX.SAFETY, _.nd0.SAFETY_PERMISSIONS)
      }),
      checked: null == S ? true : S.protected
    }];
  return (0, r.jsxs)("div", {
    className: s()(v.kL, o),
    children: [(t = (null == S ? true : S.sufficient) ? n(617416) : n(848887), null == c ? null : (0, r.jsxs)("div", {
      className: v.wx,
      children: [(0, r.jsx)("img", {
        alt: "",
        src: t,
        className: v.nr,
        width: 40
      }), c]
    })), D.filter(e => !g || null == e.checked || !e.checked).map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(E, y({}, e)), t < D.length - 1 ? (0, r.jsx)("hr", {
        className: v.me
      }) : null]
    }, "".concat(e.name)))]
  })
}