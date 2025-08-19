/** Chunk was on 47435 **/
/** chunk id: 596583, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => S
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
let O = e => {
    let {
      user: t,
      trialCreationResult: i,
      onClose: C
    } = e, {
      avatarSrc: a,
      eventHandlers: l
    } = (0, f.Z)({
      userId: null == t ? true : t.id,
      size: d.EFr.SIZE_56
    }), n = u.ZP.getName(t), o = t.username !== n && i === j.Fz.SUCCESS, c = i === j.Fz.FAIL;
    return (0, r.jsxs)("div", {
      className: U.referredUserRowContainer,
      children: [(0, r.jsx)(d.qEK, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
            return Object.getOwnPropertyDescriptor(i, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = i[t], t in e ? Object.defineProperty(e, t, {
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
          [U.erroredAvatar]: c
        }),
        src: a,
        "aria-label": n,
        size: d.EFr.SIZE_56
      }, l)), (0, r.jsxs)("div", {
        className: U.referredUserRowBody,
        children: [c ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(d.Text, {
            className: U.errorDisplayName,
            variant: "text-md/medium",
            children: n
          }), (0, r.jsx)(d.Text, {
            variant: "text-md/medium",
            className: U.userName,
            children: w.intl.format(w.t.RO3T4O, {
              userName: n
            })
          })]
        }) : (0, r.jsx)(d.ua7, {
          text: w.intl.string(w.t.xkVQPD),
          position: "right",
          children: e => {
            let {
              onMouseEnter: i,
              onMouseLeave: s
            } = e;
            return (0, r.jsx)(d.P3F, {
              onClick: () => {
                var e;
                return e = t.id, void(h.Z.hasLayers() && (0, x.xf)(), p.Z.openPrivateChannel({
                  recipientIds: e
                }), C())
              },
              className: U.displayNameClickableContainer,
              onMouseEnter: i,
              onMouseLeave: s,
              children: (0, r.jsx)(d.Text, {
                variant: "text-md/medium",
                className: U.displayName,
                children: n
              })
            })
          }
        }), o && (0, r.jsx)(d.Text, {
          variant: "text-md/medium",
          className: U.userName,
          children: t.username
        })]
      })]
    })
  },
  S = e => {
    let {
      selectedUsers: t,
      trialCreationResult: i,
      onClose: C
    } = e, s = [...t].map(e => (0, r.jsx)(O, {
      user: e,
      trialCreationResult: i.get(e.id),
      onClose: C
    }, e.id)), a = (0, n.e7)([L.Z], () => L.Z.getReferralsRemaining());
    l()(null !== a, "Referrals remaining should not be null");
    let p = (0, c.Fg)(),
      x = (0, o.ap)(p) ? y.Z : m.Z,
      f = w.intl.string(w.t.Pcb7KC),
      h = [...i.values()].filter(e => e === j.Fz.SUCCESS).length;
    return a > 0 && (f = w.intl.formatToPlainString(w.t.iWtOfH, {
      numReferrals: h
    })), 0 === h && (f = w.intl.string(w.t["7VBEub"])), (0, r.jsxs)("div", {
      className: U.confrimationContainer,
      children: [(0, r.jsx)(d.P3F, {
        onClick: C,
        className: U.closeButtonContainer,
        children: (0, r.jsx)(d.Dio, {
          size: "custom",
          width: 20,
          height: 20
        })
      }), (0, r.jsx)(x, {
        className: U.headerIcon
      }), (0, r.jsx)(d.X6q, {
        variant: "heading-lg/bold",
        className: U.heading,
        children: f
      }), (0, r.jsx)("div", {
        className: U.confirmedUserContainer,
        children: s
      }), (0, r.jsx)(d.Text, {
        variant: "text-md/medium",
        children: w.intl.format(w.t.CZaMHh, {
          days: g.p,
          helpdeskArticle: _.Z.getArticleURL(F.BhN.REFERRAL_PROGRAM)
        })
      })]
    })
  }