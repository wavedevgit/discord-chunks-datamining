/** Chunk was on 26489 **/
/** chunk id: 353174, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  A: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
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
let S = e => {
    let {
      user: t,
      trialCreationResult: s,
      onClose: a
    } = e, {
      avatarSrc: r,
      eventHandlers: n
    } = (0, f.A)({
      userId: null == t ? true : t.id,
      size: c._3J.SIZE_56
    }), C = _.Ay.getName(t), o = t.username !== C && s === m.o.SUCCESS, h = s === m.o.FAIL;
    return (0, i.jsxs)("div", {
      className: A.El,
      children: [(0, i.jsx)(c.euF, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
            return Object.getOwnPropertyDescriptor(s, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = s[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({
        imageClassName: l()({
          [A.jN]: h
        }),
        src: r,
        "aria-label": C,
        size: c._3J.SIZE_56
      }, n)), (0, i.jsxs)("div", {
        className: A.Dp,
        children: [h ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(c.Text, {
            className: A.E0,
            variant: "text-md/medium",
            children: C
          }), (0, i.jsx)(c.Text, {
            variant: "text-md/medium",
            className: A.nT,
            children: b.intl.format(b.t.RO3T4B, {
              userName: C
            })
          })]
        }) : (0, i.jsx)(d.m, {
          asContainer: true,
          text: b.intl.string(b.t.xkVQPN),
          position: "right",
          children: (0, i.jsx)(c.DUT, {
            onClick: () => {
              var e;
              return e = t.id, void(u.A.hasLayers() && (0, p.jH)(), x.A.openPrivateChannel({
                recipientIds: e
              }), a())
            },
            className: A.t0,
            children: (0, i.jsx)(c.Text, {
              variant: "text-md/medium",
              className: A.QC,
              children: C
            })
          })
        }), o && (0, i.jsx)(c.Text, {
          variant: "text-md/medium",
          className: A.nT,
          children: t.username
        })]
      })]
    })
  },
  w = e => {
    let {
      selectedUsers: t,
      trialCreationResult: s,
      onClose: a
    } = e, l = [...t].map(e => (0, i.jsx)(S, {
      user: e,
      trialCreationResult: s.get(e.id),
      onClose: a
    }, e.id)), r = (0, C.bG)([g.A], () => g.A.getReferralsRemaining());
    n()(null !== r, "Referrals remaining should not be null");
    let d = (0, h.DP)(),
      x = (0, o.qB)(d) ? y.A : L.A,
      p = b.intl.string(b.t.Pcb7KF),
      f = [...s.values()].filter(e => e === m.o.SUCCESS).length;
    return r > 0 && (p = b.intl.formatToPlainString(b.t.iWtOfC, {
      numReferrals: f
    })), 0 === f && (p = b.intl.string(b.t["7VBEue"])), (0, i.jsxs)("div", {
      className: A.Jc,
      children: [(0, i.jsx)(c.DUT, {
        onClick: a,
        className: A.cG,
        children: (0, i.jsx)(c.PGe, {
          size: "custom",
          width: 20,
          height: 20
        })
      }), (0, i.jsx)(x, {
        className: A.nr
      }), (0, i.jsx)(c.Heading, {
        variant: "heading-lg/bold",
        className: A.R_,
        children: p
      }), (0, i.jsx)("div", {
        className: A.wj,
        children: l
      }), (0, i.jsx)(c.Text, {
        variant: "text-md/medium",
        children: b.intl.format(b.t.CZaMHn, {
          days: 10,
          helpdeskArticle: j.A.getArticleURL(v.MVz.REFERRAL_PROGRAM)
        })
      })]
    })
  }