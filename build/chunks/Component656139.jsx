/** Chunk was on web.js **/
/** chunk id: 656139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SelectFriendsModalScreens: () => R,
  default: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
  Chunk794433 = require("./794433.jsx"),
  Chunk480466 = require("./480466.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk51144 = require("./51144.js"),
  Chunk281494 = require("./281494.js"),
  Chunk276444 = require("./276444.js"),
  Chunk955839 = require("./955839.js"),
  Chunk28061 = require("./28061.jsx"),
  Chunk382271 = require("./382271.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk476034 = require("./476034.js");
let C = e => {
    let {
      onClose: t,
      onShare: n
    } = e, a = (0, c.e7)([y.Z], () => y.Z.getReferralsRemaining()), d = (0, c.e7)([y.Z], () => y.Z.getHasEligibleFriends()), [p, h] = i.useState(new Map), [m, b] = i.useState(""), I = (0, _.Z)(m, 400), {
      eligibleUsers: C,
      fetchUsers: N,
      hasError: R,
      isFetching: P,
      resendUsers: w
    } = (0, O.q)({
      searchQuery: I,
      selectedUsers: p
    }), [D, L] = i.useState(false), x = (0, s.O)(e => {
      e && !P && N()
    }), M = C.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map), j = () => (0, r.jsx)(f.Z, {
      className: A.searchbar,
      size: f.Z.Sizes.MEDIUM,
      tags: [...p.values()].map(e => E.ZP.getName(e)),
      placeholder: 0 === p.size ? S.intl.string(S.t.Kd5RaG) : "",
      query: m,
      onRemoveTag: e => {
        h(t => {
          let n = [...t.values()][e],
            r = new Map(t);
          return r.delete(n.id), r
        })
      },
      onQueryChange: b,
      onClear: () => b("")
    }), k = e => {
      let i, {
          eligibleRecipients: a
        } = e,
        s = I.length > 0 && 0 === a.size;
      return i = true === s ? S.intl.string(S.t.wpSqAQ) : p.size <= 1 ? S.intl.string(S.t.ItpQxs) : S.intl.format(S.t.iW2str, {
        nTrials: p.size
      }), (0, r.jsx)("div", {
        className: o()(A.footer, A.footerSeparator),
        children: (0, r.jsx)(u.Button, {
          variant: "primary",
          disabled: 0 === p.size && !s || D,
          text: i,
          size: "md",
          fullWidth: true,
          onClick: async () => {
            if (s) return void t();
            L(true), await n([...p.values()]), L(false)
          }
        })
      })
    }, U = e => {
      let {
        eligibleRecipients: t
      } = e;
      returntrue == (I.length > 0 && 0 === t.size) ? (0, r.jsxs)("div", {
        className: A.emptySearchResultsContainer,
        children: [(0, r.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: S.intl.string(S.t["8+ywHB"])
        }), (0, r.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "text-secondary",
          children: S.intl.string(S.t.CgQmY2)
        })]
      }) : (0, r.jsxs)(u.u2D, {
        className: A.list,
        children: [Array.from(t.values()).map(e => (0, r.jsx)(v.Z, {
          disabled: null !== a && 0 !== a && [...p.values()].filter(e => !w.has(e.id)).length >= a && !p.has(e.id) && !w.has(e.id),
          checked: p.has(e.id),
          user: e,
          onChange: (e, t) => {
            h(n => {
              let r = new Map(n);
              return t ? r.set(e.id, e) : r.delete(e.id), r
            })
          }
        }, e.id)), P && (0, r.jsx)(u.$jN, {}), (0, r.jsx)("div", {
          ref: x
        })]
      })
    };
    return null === a ? (0, r.jsx)(u.$jN, {}) : R ? (0, r.jsx)(l.Modal, {
      transitionState: l.Dvm.ENTERED,
      size: "sm",
      title: S.intl.string(S.t.lcuio6),
      subtitle: S.intl.string(S.t["x09+CA"]),
      onClose: t,
      actions: []
    }) : false === d ? (0, r.jsx)(l.Modal, {
      transitionState: l.Dvm.ENTERED,
      size: "sm",
      title: S.intl.string(S.t["2YigPj"]),
      subtitle: S.intl.format(S.t.OOCbz8, {
        helpdeskArticle: g.Z.getArticleURL(T.BhN.REFERRAL_PROGRAM)
      }),
      onClose: t,
      actions: []
    }) : (0, r.jsx)(l.Modal, {
      size: "md",
      transitionState: l.Dvm.ENTERED,
      title: S.intl.string(S.t["2dVCLi"]),
      subtitle: S.intl.string(S.t.DXgoi4),
      onClose: t,
      input: j(),
      actions: [],
      actionBarInput: k({
        eligibleRecipients: M
      }),
      children: U({
        eligibleRecipients: M
      })
    })
  },
  N = e => {
    let {
      onClose: t,
      onShare: n
    } = e, a = (0, c.e7)([y.Z], () => y.Z.getRecipientStatus()), [s, f] = i.useState(new Map), [_, p] = i.useState(new Map), [h, m] = i.useState(false);
    i.useEffect(() => {
      (async () => {
        let e = new Map;
        for (let [t, n] of a) {
          let r = await (0, d.PR)(t);
          r.referralStatus = n, e.set(r.id, r)
        }
        f(e)
      })()
    }, [a]);
    let g = () => {
      let e;
      return e = _.size <= 1 ? S.intl.string(S.t.ItpQxs) : S.intl.format(S.t.iW2str, {
        nTrials: _.size
      }), (0, r.jsx)("div", {
        className: o()(A.footer, A.footerSeparator),
        children: (0, r.jsx)(u.Button, {
          variant: "primary",
          disabled: 0 === _.size || h,
          text: e,
          size: "md",
          fullWidth: true,
          onClick: async () => {
            m(true), await n([..._.values()]), m(false)
          }
        })
      })
    };
    return (0, r.jsx)(l.Modal, {
      size: "md",
      transitionState: l.Dvm.ENTERED,
      title: S.intl.string(S.t.rKmy8P),
      subtitle: S.intl.string(S.t.VDlF6u),
      onClose: t,
      actions: [],
      actionBarInput: g(),
      children: (0, r.jsx)(u.u2D, {
        className: A.list,
        children: Array.from(s.values()).map(e => (0, r.jsx)(v.Z, {
          checked: _.has(e.id),
          disabled: e.referralStatus === b.Fe.REDEEMED,
          user: e,
          onChange: (e, t) => {
            p(n => {
              let r = new Map(n);
              return t ? r.set(e.id, e) : r.delete(e.id), r
            })
          }
        }, e.id))
      })
    })
  };
var R = function(e) {
  return e[e.SELECT_FRIENDS = 1] = "SELECT_FRIENDS", e[e.CONFIRMATION = 2] = "CONFIRMATION", e[e.REMINDER = 3] = "REMINDER", e
}({});
let P = e => {
  let {
    onClose: t,
    startingScreen: n = 1
  } = e, a = (0, c.e7)([y.Z], () => y.Z.getReferralsRemaining()), [o, s] = i.useState(n), [l, d] = i.useState([]), {
    analyticsLocations: f
  } = (0, h.ZP)([p.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]), _ = async e => {
    m.default.track(T.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
      location_stack: f
    });
    let t = await (0, b.jy)(Object.values(e).map(e => e.id));
    d(e.map(e => ({
      recipient: e,
      status: t.get(e.id)
    }))), s(2)
  };
  if (null === a) return (0, r.jsx)(u.$jN, {});
  if (2 === o) {
    let e = 3 === n;
    return (0, r.jsx)(I.m, {
      isReminderConfirmation: e,
      results: l,
      onClose: t
    })
  }
  return 1 === o ? (0, r.jsx)(C, {
    onClose: t,
    onShare: _
  }) : 3 === o ? (0, r.jsx)(N, {
    onClose: t,
    onShare: _
  }) : true
}