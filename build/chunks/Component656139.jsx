/** Chunk was on web.js **/
/** chunk id: 656139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => w,
  default: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
  Chunk794433 = require("./794433.jsx"),
  Chunk480466 = require("./480466.js"),
  Chunk434650 = require("./434650.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk281494 = require("./281494.js"),
  Chunk276444 = require("./276444.js"),
  Chunk687555 = require("./687555.jsx"),
  Chunk955839 = require("./955839.js"),
  Chunk553874 = require("./553874.jsx"),
  Chunk28061 = require("./28061.jsx"),
  Chunk382271 = require("./382271.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk476034 = require("./476034.js");
let R = e => {
    let {
      onClose: t,
      onShare: n
    } = e, a = (0, s.e7)([y.Z], () => y.Z.getReferralsRemaining()), [d, h] = i.useState(new Map), [m, g] = i.useState(""), b = (0, _.Z)(m, 400), {
      eligibleUsers: S,
      fetchUsers: A,
      hasError: R,
      isFetching: P,
      resendUsers: w
    } = (0, v.q)({
      searchQuery: b,
      selectedUsers: d
    }), [D, x] = i.useState(false), L = (0, p.O)(e => {
      e && !P && A()
    }), j = S.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map), M = () => (0, r.jsx)(f.Z, {
      className: N.searchbar,
      size: f.Z.Sizes.MEDIUM,
      tags: [...d.values()].map(e => E.ZP.getName(e)),
      placeholder: 0 === d.size ? C.intl.string(C.t.Kd5RaG) : "",
      query: m,
      onRemoveTag: e => {
        h(t => {
          let n = [...t.values()][e],
            r = new Map(t);
          return r.delete(n.id), r
        })
      },
      onQueryChange: g,
      onClear: () => g("")
    }), k = e => {
      let i, {
          eligibleRecipients: a
        } = e,
        s = b.length > 0 && 0 === a.size;
      return i = true === s ? C.intl.string(C.t.wpSqAQ) : d.size <= 1 ? C.intl.string(C.t.ItpQxs) : C.intl.format(C.t.iW2str, {
        nTrials: d.size
      }), (0, r.jsx)("div", {
        className: o()(N.footer, N.footerSeparator),
        children: (0, r.jsx)(u.zxk, {
          variant: "primary",
          disabled: 0 === d.size && !s || D,
          text: i,
          size: "md",
          fullWidth: true,
          onClick: async () => {
            if (s) return void t();
            x(true), await n([...d.values()]), x(false)
          }
        })
      })
    }, U = e => {
      let {
        eligibleRecipients: t
      } = e;
      returntrue == (b.length > 0 && 0 === t.size) ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(O.ih, {}), (0, r.jsx)(O.d, {})]
      }) : (0, r.jsxs)(u.u2D, {
        className: N.list,
        children: [Array.from(t.values()).map(e => (0, r.jsx)(T.Z, {
          disabled: null !== a && 0 !== a && [...d.values()].filter(e => !w.has(e.id)).length >= a && !d.has(e.id) && !w.has(e.id),
          checked: d.has(e.id),
          user: e,
          onChange: (e, t) => {
            h(n => {
              let r = new Map(n);
              return t ? r.set(e.id, e) : r.delete(e.id), r
            })
          }
        }, e.id)), P && (0, r.jsx)(u.$jN, {}), (0, r.jsx)("div", {
          ref: L
        })]
      })
    };
    return null === a ? (0, r.jsx)(u.$jN, {}) : R ? (0, r.jsx)(I.P, {
      onClose: t
    }) : (0, r.jsx)(c.Modal, {
      size: "md",
      transitionState: l.D.ENTERED,
      title: C.intl.string(C.t["2dVCLi"]),
      subtitle: C.intl.string(C.t.DXgoi4),
      onClose: t,
      input: M(),
      actions: [],
      actionBarInput: k({
        eligibleRecipients: j
      }),
      children: U({
        eligibleRecipients: j
      })
    })
  },
  P = e => {
    let {
      onClose: t,
      onShare: n
    } = e, a = (0, s.e7)([y.Z], () => y.Z.getRecipientStatus()), [f, _] = i.useState(new Map), [p, h] = i.useState(new Map), [m, g] = i.useState(false);
    i.useEffect(() => {
      (async () => {
        let e = new Map;
        for (let [t, n] of a) {
          let r = await (0, d.PR)(t);
          r.referralStatus = n, e.set(r.id, r)
        }
        _(e)
      })()
    }, [a]);
    let E = () => {
      let e;
      return e = p.size <= 1 ? C.intl.string(C.t.ItpQxs) : C.intl.format(C.t.iW2str, {
        nTrials: p.size
      }), (0, r.jsx)("div", {
        className: o()(N.footer, N.footerSeparator),
        children: (0, r.jsx)(u.zxk, {
          variant: "primary",
          disabled: 0 === p.size || m,
          text: e,
          size: "md",
          fullWidth: true,
          onClick: async () => {
            g(true), await n([...p.values()]), g(false)
          }
        })
      })
    };
    return (0, r.jsx)(c.Modal, {
      size: "md",
      transitionState: l.D.ENTERED,
      title: C.intl.string(C.t.rKmy8P),
      subtitle: C.intl.string(C.t.VDlF6u),
      onClose: t,
      actions: [],
      actionBarInput: E(),
      children: (0, r.jsx)(u.u2D, {
        className: N.list,
        children: Array.from(f.values()).map(e => (0, r.jsx)(T.Z, {
          checked: p.has(e.id),
          disabled: e.referralStatus === b.Fe.REDEEMED,
          user: e,
          onChange: (e, t) => {
            h(n => {
              let r = new Map(n);
              return t ? r.set(e.id, e) : r.delete(e.id), r
            })
          }
        }, e.id))
      })
    })
  };
var w = function(e) {
  return e[e.SELECT_FRIENDS = 1] = "SELECT_FRIENDS", e[e.CONFIRMATION = 2] = "CONFIRMATION", e[e.REMINDER = 3] = "REMINDER", e
}({});
let D = e => {
  let {
    onClose: t,
    startingScreen: n = null
  } = e, a = (0, s.e7)([y.Z], () => y.Z.getReferralsRemaining()), [o, l] = i.useState(null !== n ? n : null !== a && a > 0 ? 1 : 3), [c, d] = i.useState(false), [f, _] = i.useState([]), {
    analyticsLocations: p
  } = (0, m.ZP)([h.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]), E = async e => {
    g.default.track(A.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
      location_stack: p
    });
    let t = await (0, b.jy)(Object.values(e).map(e => e.id));
    _(e.map(e => ({
      recipient: e,
      status: t.get(e.id)
    }))), 3 === o && d(true), l(2)
  };
  return null === a ? (0, r.jsx)(u.$jN, {}) : 2 === o ? (0, r.jsx)(S.m, {
    isReminderConfirmation: c,
    results: f,
    onClose: t
  }) : 1 === o ? (0, r.jsx)(R, {
    onClose: t,
    onShare: E
  }) : 3 === o ? (0, r.jsx)(P, {
    onClose: t,
    onShare: E
  }) : true
}