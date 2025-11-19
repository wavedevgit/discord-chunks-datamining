/** Chunk was on 47435 **/
/** chunk id: 258104, original params: e,t,r (module,exports,require) **/
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
  Chunk436931 = require("./436931.js");
let N = e => {
    let {
      user: t,
      trialCreationResult: r,
      onClose: i
    } = e, {
      avatarSrc: n,
      eventHandlers: l
    } = (0, f.Z)({
      userId: null == t ? true : t.id,
      size: c.EFr.SIZE_56
    }), o = j.ZP.getName(t), d = t.username !== o && r === _.Fz.SUCCESS, h = r === _.Fz.FAIL;
    return (0, a.jsxs)("div", {
      className: w.referredUserRowContainer,
      children: [(0, a.jsx)(c.qEK, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = r[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({
        imageClassName: s()({
          [w.erroredAvatar]: h
        }),
        src: n,
        "aria-label": o,
        size: c.EFr.SIZE_56
      }, l)), (0, a.jsxs)("div", {
        className: w.referredUserRowBody,
        children: [h ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(c.Text, {
            className: w.errorDisplayName,
            variant: "text-md/medium",
            children: o
          }), (0, a.jsx)(c.Text, {
            variant: "text-md/medium",
            className: w.userName,
            children: b.intl.format(b.t.RO3T4B, {
              userName: o
            })
          })]
        }) : (0, a.jsx)(C.u, {
          asContainer: true,
          text: b.intl.string(b.t.xkVQPN),
          position: "right",
          children: (0, a.jsx)(c.P3F, {
            onClick: () => {
              var e;
              return e = t.id, void(u.Z.hasLayers() && (0, p.xf)(), x.Z.openPrivateChannel({
                recipientIds: e
              }), i())
            },
            className: w.displayNameClickableContainer,
            children: (0, a.jsx)(c.Text, {
              variant: "text-md/medium",
              className: w.displayName,
              children: o
            })
          })
        }), d && (0, a.jsx)(c.Text, {
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
      trialCreationResult: r,
      onClose: i
    } = e, s = [...t].map(e => (0, a.jsx)(N, {
      user: e,
      trialCreationResult: r.get(e.id),
      onClose: i
    }, e.id)), n = (0, o.e7)([g.Z], () => g.Z.getReferralsRemaining());
    l()(null !== n, "Referrals remaining should not be null");
    let C = (0, h.Fg)(),
      x = (0, d.ap)(C) ? y.Z : L.Z,
      p = b.intl.string(b.t.Pcb7KF),
      f = [...r.values()].filter(e => e === _.Fz.SUCCESS).length;
    return n > 0 && (p = b.intl.formatToPlainString(b.t.iWtOfC, {
      numReferrals: f
    })), 0 === f && (p = b.intl.string(b.t["7VBEue"])), (0, a.jsxs)("div", {
      className: w.confrimationContainer,
      children: [(0, a.jsx)(c.P3F, {
        onClick: i,
        className: w.closeButtonContainer,
        children: (0, a.jsx)(c.Dio, {
          size: "custom",
          width: 20,
          height: 20
        })
      }), (0, a.jsx)(x, {
        className: w.headerIcon
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-lg/bold",
        className: w.heading,
        children: p
      }), (0, a.jsx)("div", {
        className: w.confirmedUserContainer,
        children: s
      }), (0, a.jsx)(c.Text, {
        variant: "text-md/medium",
        children: b.intl.format(b.t.CZaMHn, {
          days: v.p,
          helpdeskArticle: m.Z.getArticleURL(S.BhN.REFERRAL_PROGRAM)
        })
      })]
    })
  }