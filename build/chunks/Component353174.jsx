/** Chunk was on 26489 **/
/** chunk id: 353174, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  n = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk398590 = require("./398590.js"),
  Chunk736653 = require("./736653.js"),
  Chunk854627 = require("./854627.js"),
  Chunk186111 = require("./186111.js"),
  Chunk975571 = require("./975571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk326084 = require("./326084.js"),
  Chunk851746 = require("./851746.js"),
  Chunk558450 = require("./558450.jsx"),
  Chunk614298 = require("./614298.jsx");
require("./232198.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk535828 = require("./535828.js");
let b = e => {
    let {
      user: t,
      trialCreationResult: i,
      onClose: a
    } = e, {
      avatarSrc: l,
      eventHandlers: n
    } = (0, f.A)({
      userId: null == t ? true : t.id,
      size: c._3J.SIZE_56
    }), C = j.Ay.getName(t), o = t.username !== C && i === m.o.SUCCESS, h = i === m.o.FAIL;
    return (0, s.jsxs)("div", {
      className: S.El,
      children: [(0, s.jsx)(c.euF, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
            return Object.getOwnPropertyDescriptor(i, e).enumerable
          }))), s.forEach(function(t) {
            var s;
            s = i[t], t in e ? Object.defineProperty(e, t, {
              value: s,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = s
          })
        }
        return e
      }({
        imageClassName: r()({
          [S.jN]: h
        }),
        src: l,
        "aria-label": C,
        size: c._3J.SIZE_56
      }, n)), (0, s.jsxs)("div", {
        className: S.Dp,
        children: [h ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(c.Text, {
            className: S.E0,
            variant: "text-md/medium",
            children: C
          }), (0, s.jsx)(c.Text, {
            variant: "text-md/medium",
            className: S.nT,
            children: A.intl.format(A.t.RO3T4B, {
              userName: C
            })
          })]
        }) : (0, s.jsx)(d.m, {
          asContainer: true,
          text: A.intl.string(A.t.xkVQPN),
          position: "right",
          children: (0, s.jsx)(c.DUT, {
            onClick: () => {
              var e;
              return e = t.id, void(u.A.hasLayers() && (0, p.jH)(), x.A.openPrivateChannel({
                recipientIds: e
              }), a())
            },
            className: S.t0,
            children: (0, s.jsx)(c.Text, {
              variant: "text-md/medium",
              className: S.QC,
              children: C
            })
          })
        }), o && (0, s.jsx)(c.Text, {
          variant: "text-md/medium",
          className: S.nT,
          children: t.username
        })]
      })]
    })
  },
  w = e => {
    let {
      selectedUsers: t,
      trialCreationResult: i,
      onClose: a
    } = e, r = [...t].map(e => (0, s.jsx)(b, {
      user: e,
      trialCreationResult: i.get(e.id),
      onClose: a
    }, e.id)), l = (0, C.bG)([g.A], () => g.A.getReferralsRemaining());
    n()(null !== l, "Referrals remaining should not be null");
    let d = (0, h.DP)(),
      x = (0, o.qB)(d) ? y.A : L.A,
      p = A.intl.string(A.t.Pcb7KF),
      f = [...i.values()].filter(e => e === m.o.SUCCESS).length;
    return l > 0 && (p = A.intl.formatToPlainString(A.t.iWtOfC, {
      numReferrals: f
    })), 0 === f && (p = A.intl.string(A.t["7VBEue"])), (0, s.jsxs)("div", {
      className: S.Jc,
      children: [(0, s.jsx)(c.DUT, {
        onClick: a,
        className: S.cG,
        children: (0, s.jsx)(c.PGe, {
          size: "custom",
          width: 20,
          height: 20
        })
      }), (0, s.jsx)(x, {
        className: S.nr
      }), (0, s.jsx)(c.Heading, {
        variant: "heading-lg/bold",
        className: S.R_,
        children: p
      }), (0, s.jsx)("div", {
        className: S.wj,
        children: r
      }), (0, s.jsx)(c.Text, {
        variant: "text-md/medium",
        children: A.intl.format(A.t.CZaMHn, {
          days: 10,
          helpdeskArticle: _.A.getArticleURL(v.MVz.REFERRAL_PROGRAM)
        })
      })]
    })
  }