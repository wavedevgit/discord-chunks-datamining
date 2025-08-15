/** Chunk was on 81369 **/
/** chunk id: 596583, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  n = require.n(Chunk512722),
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
let E = e => {
    let {
      user: t,
      trialCreationResult: r,
      onClose: i
    } = e, {
      avatarSrc: l,
      eventHandlers: n
    } = (0, u.Z)({
      userId: null == t ? true : t.id,
      size: d.EFr.SIZE_56
    }), o = _.ZP.getName(t), C = t.username !== o && r === g.Fz.SUCCESS, h = r === g.Fz.FAIL;
    return (0, a.jsxs)("div", {
      className: R.referredUserRowContainer,
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
          [R.erroredAvatar]: h
        }),
        src: l,
        "aria-label": o,
        size: d.EFr.SIZE_56
      }, n)), (0, a.jsxs)("div", {
        className: R.referredUserRowBody,
        children: [h ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(d.Text, {
            className: R.errorDisplayName,
            variant: "text-md/medium",
            children: o
          }), (0, a.jsx)(d.Text, {
            variant: "text-md/medium",
            className: R.userName,
            children: v.intl.format(v.t.RO3T4O, {
              userName: o
            })
          })]
        }) : (0, a.jsx)(d.ua7, {
          text: v.intl.string(v.t.xkVQPD),
          position: "right",
          children: e => {
            let {
              onMouseEnter: r,
              onMouseLeave: s
            } = e;
            return (0, a.jsx)(d.P3F, {
              onClick: () => {
                var e;
                return e = t.id, void(f.Z.hasLayers() && (0, c.xf)(), p.Z.openPrivateChannel({
                  recipientIds: e
                }), i())
              },
              className: R.displayNameClickableContainer,
              onMouseEnter: r,
              onMouseLeave: s,
              children: (0, a.jsx)(d.Text, {
                variant: "text-md/medium",
                className: R.displayName,
                children: o
              })
            })
          }
        }), C && (0, a.jsx)(d.Text, {
          variant: "text-md/medium",
          className: R.userName,
          children: t.username
        })]
      })]
    })
  },
  O = e => {
    let {
      selectedUsers: t,
      trialCreationResult: r,
      onClose: i
    } = e, s = [...t].map(e => (0, a.jsx)(E, {
      user: e,
      trialCreationResult: r.get(e.id),
      onClose: i
    }, e.id)), l = (0, o.e7)([j.Z], () => j.Z.getReferralsRemaining());
    n()(null !== l, "Referrals remaining should not be null");
    let p = (0, h.Fg)(),
      c = (0, C.ap)(p) ? m.Z : L.Z,
      u = v.intl.string(v.t.Pcb7KC),
      f = [...r.values()].filter(e => e === g.Fz.SUCCESS).length;
    return l > 0 && (u = v.intl.formatToPlainString(v.t.iWtOfH, {
      numReferrals: f
    })), 0 === f && (u = v.intl.string(v.t["7VBEub"])), (0, a.jsxs)("div", {
      className: R.confrimationContainer,
      children: [(0, a.jsx)(d.P3F, {
        onClick: i,
        className: R.closeButtonContainer,
        children: (0, a.jsx)(d.Dio, {
          size: "custom",
          width: 20,
          height: 20
        })
      }), (0, a.jsx)(c, {
        className: R.headerIcon
      }), (0, a.jsx)(d.X6q, {
        variant: "heading-lg/bold",
        className: R.heading,
        children: u
      }), (0, a.jsx)("div", {
        className: R.confirmedUserContainer,
        children: s
      }), (0, a.jsx)(d.Text, {
        variant: "text-md/medium",
        children: v.intl.format(v.t.CZaMHh, {
          days: y.p,
          helpdeskArticle: x.Z.getArticleURL(b.BhN.REFERRAL_PROGRAM)
        })
      })]
    })
  }