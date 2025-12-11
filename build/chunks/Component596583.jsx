/** Chunk was on 47435 **/
/** chunk id: 596583, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk37234 = require("./37234.js"),
  Chunk410030 = require("./410030.js"),
  Chunk518950 = require("./518950.js"),
  Chunk819640 = require("./819640.js"),
  Chunk63063 = require("./63063.js"),
  Chunk51144 = require("./51144.js"),
  Chunk281494 = require("./281494.js"),
  Chunk276444 = require("./276444.js"),
  Chunk792451 = require("./792451.jsx"),
  Chunk814667 = require("./814667.jsx"),
  Chunk263885 = require("./263885.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk730314 = require("./730314.js");
let N = e => {
    let {
      user: t,
      trialCreationResult: a,
      onClose: i
    } = e, {
      avatarSrc: n,
      eventHandlers: l
    } = (0, h.Z)({
      userId: null == t ? true : t.id,
      size: c.EFr.SIZE_56
    }), d = j.ZP.getName(t), C = t.username !== d && a === _.Fz.SUCCESS, f = a === _.Fz.FAIL;
    return (0, r.jsxs)("div", {
      className: w.referredUserRowContainer,
      children: [(0, r.jsx)(c.qEK, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(a);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = a[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        imageClassName: s()({
          [w.erroredAvatar]: f
        }),
        src: n,
        "aria-label": d,
        size: c.EFr.SIZE_56
      }, l)), (0, r.jsxs)("div", {
        className: w.referredUserRowBody,
        children: [f ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.Text, {
            className: w.errorDisplayName,
            variant: "text-md/medium",
            children: d
          }), (0, r.jsx)(c.Text, {
            variant: "text-md/medium",
            className: w.userName,
            children: S.intl.format(S.t.RO3T4B, {
              userName: d
            })
          })]
        }) : (0, r.jsx)(o.u, {
          asContainer: true,
          text: S.intl.string(S.t.xkVQPN),
          position: "right",
          children: (0, r.jsx)(c.P3F, {
            onClick: () => {
              var e;
              return e = t.id, void(u.Z.hasLayers() && (0, p.xf)(), x.Z.openPrivateChannel({
                recipientIds: e
              }), i())
            },
            className: w.displayNameClickableContainer,
            children: (0, r.jsx)(c.Text, {
              variant: "text-md/medium",
              className: w.displayName,
              children: d
            })
          })
        }), C && (0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          className: w.userName,
          children: t.username
        })]
      })]
    })
  },
  Z = e => {
    let {
      selectedUsers: t,
      trialCreationResult: a,
      onClose: i
    } = e, s = [...t].map(e => (0, r.jsx)(N, {
      user: e,
      trialCreationResult: a.get(e.id),
      onClose: i
    }, e.id)), n = (0, d.e7)([g.Z], () => g.Z.getReferralsRemaining());
    l()(null !== n, "Referrals remaining should not be null");
    let o = (0, f.Fg)(),
      x = (0, C.ap)(o) ? y.Z : L.Z,
      p = S.intl.string(S.t.Pcb7KF),
      h = [...a.values()].filter(e => e === _.Fz.SUCCESS).length;
    return n > 0 && (p = S.intl.formatToPlainString(S.t.iWtOfC, {
      numReferrals: h
    })), 0 === h && (p = S.intl.string(S.t["7VBEue"])), (0, r.jsxs)("div", {
      className: w.confrimationContainer,
      children: [(0, r.jsx)(c.P3F, {
        onClick: i,
        className: w.closeButtonContainer,
        children: (0, r.jsx)(c.Dio, {
          size: "custom",
          width: 20,
          height: 20
        })
      }), (0, r.jsx)(x, {
        className: w.headerIcon
      }), (0, r.jsx)(c.Heading, {
        variant: "heading-lg/bold",
        className: w.heading,
        children: p
      }), (0, r.jsx)("div", {
        className: w.confirmedUserContainer,
        children: s
      }), (0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        children: S.intl.format(S.t.CZaMHn, {
          days: b.p,
          helpdeskArticle: m.Z.getArticleURL(v.BhN.REFERRAL_PROGRAM)
        })
      })]
    })
  }