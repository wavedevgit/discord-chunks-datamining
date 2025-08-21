/** Chunk was on 47435 **/
/** chunk id: 596583, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
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
let w = e => {
    let {
      user: t,
      trialCreationResult: r,
      onClose: i
    } = e, {
      avatarSrc: n,
      eventHandlers: l
    } = (0, h.Z)({
      userId: null == t ? true : t.id,
      size: d.EFr.SIZE_56
    }), o = m.ZP.getName(t), C = t.username !== o && r === j.Fz.SUCCESS, p = r === j.Fz.FAIL;
    return (0, a.jsxs)("div", {
      className: b.referredUserRowContainer,
      children: [(0, a.jsx)(d.qEK, function(e) {
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
          [b.erroredAvatar]: p
        }),
        src: n,
        "aria-label": o,
        size: d.EFr.SIZE_56
      }, l)), (0, a.jsxs)("div", {
        className: b.referredUserRowBody,
        children: [p ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(d.Text, {
            className: b.errorDisplayName,
            variant: "text-md/medium",
            children: o
          }), (0, a.jsx)(d.Text, {
            variant: "text-md/medium",
            className: b.userName,
            children: S.intl.format(S.t.RO3T4O, {
              userName: o
            })
          })]
        }) : (0, a.jsx)(d.ua7, {
          text: S.intl.string(S.t.xkVQPD),
          position: "right",
          children: e => {
            let {
              onMouseEnter: r,
              onMouseLeave: s
            } = e;
            return (0, a.jsx)(d.P3F, {
              onClick: () => {
                var e;
                return e = t.id, void(f.Z.hasLayers() && (0, x.xf)(), c.Z.openPrivateChannel({
                  recipientIds: e
                }), i())
              },
              className: b.displayNameClickableContainer,
              onMouseEnter: r,
              onMouseLeave: s,
              children: (0, a.jsx)(d.Text, {
                variant: "text-md/medium",
                className: b.displayName,
                children: o
              })
            })
          }
        }), C && (0, a.jsx)(d.Text, {
          variant: "text-md/medium",
          className: b.userName,
          children: t.username
        })]
      })]
    })
  },
  N = e => {
    let {
      selectedUsers: t,
      trialCreationResult: r,
      onClose: i
    } = e, s = [...t].map(e => (0, a.jsx)(w, {
      user: e,
      trialCreationResult: r.get(e.id),
      onClose: i
    }, e.id)), n = (0, o.e7)([_.Z], () => _.Z.getReferralsRemaining());
    l()(null !== n, "Referrals remaining should not be null");
    let c = (0, p.Fg)(),
      x = (0, C.ap)(c) ? L.Z : g.Z,
      h = S.intl.string(S.t.Pcb7KC),
      f = [...r.values()].filter(e => e === j.Fz.SUCCESS).length;
    return n > 0 && (h = S.intl.formatToPlainString(S.t.iWtOfH, {
      numReferrals: f
    })), 0 === f && (h = S.intl.string(S.t["7VBEub"])), (0, a.jsxs)("div", {
      className: b.confrimationContainer,
      children: [(0, a.jsx)(d.P3F, {
        onClick: i,
        className: b.closeButtonContainer,
        children: (0, a.jsx)(d.Dio, {
          size: "custom",
          width: 20,
          height: 20
        })
      }), (0, a.jsx)(x, {
        className: b.headerIcon
      }), (0, a.jsx)(d.X6q, {
        variant: "heading-lg/bold",
        className: b.heading,
        children: h
      }), (0, a.jsx)("div", {
        className: b.confirmedUserContainer,
        children: s
      }), (0, a.jsx)(d.Text, {
        variant: "text-md/medium",
        children: S.intl.format(S.t.CZaMHh, {
          days: y.p,
          helpdeskArticle: u.Z.getArticleURL(v.BhN.REFERRAL_PROGRAM)
        })
      })]
    })
  }