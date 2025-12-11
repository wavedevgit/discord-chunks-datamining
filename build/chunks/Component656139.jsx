/** Chunk was on web.js **/
/** chunk id: 656139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SelectFriendsModalScreens: () => A,
  default: () => N
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
  Chunk480466 = require("./480466.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk51144 = require("./51144.js"),
  Chunk281494 = require("./281494.js"),
  Chunk276444 = require("./276444.js"),
  Chunk904399 = require("./904399.jsx"),
  Chunk955839 = require("./955839.js"),
  Chunk382271 = require("./382271.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk14515 = require("./14515.js");
let T = e => {
    let {
      onClose: t,
      onShare: n
    } = e, a = (0, l.e7)([E.Z], () => E.Z.getReferralsRemaining()), u = (0, l.e7)([E.Z], () => E.Z.getHasEligibleFriends()), [f, p] = i.useState(new Map), [_, g] = i.useState(""), O = (0, d.Z)(_, 400), {
      eligibleUsers: T,
      fetchUsers: C,
      hasError: A,
      isFetching: N,
      resendUsers: P
    } = (0, y.q)({
      searchQuery: O,
      selectedUsers: f
    }), [R, w] = i.useState(false), D = T.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map), x = () => (0, r.jsx)(c.uzC, {
      selectionMode: "multiple",
      value: Array.from(f.values()),
      options: Array.from(D.values()),
      formatOption: e => {
        let t = e;
        return {
          id: t.id,
          value: t,
          label: h.ZP.getName(t)
        }
      },
      onSelectionChange: e => {
        let t = Array.isArray(e) ? e : [e],
          n = new Map;
        t.forEach(e => {
          null != e && n.set(e.id, e)
        }), p(n)
      },
      children: (0, r.jsx)("div", {
        className: I.searchbar,
        children: (0, r.jsx)(c.CtY, {
          placeholder: 0 === f.size ? S.intl.string(S.t.Kd5RaI) : "",
          onQueryChange: e => {
            g(e.target.value)
          }
        })
      })
    }), L = e => {
      let i, {
          eligibleRecipients: a
        } = e,
        s = O.length > 0 && 0 === a.size;
      return i = true === s ? S.intl.string(S.t.wpSqAW) : f.size <= 1 ? S.intl.string(S.t.ItpQxk) : S.intl.format(S.t.iW2stn, {
        nTrials: f.size
      }), (0, r.jsx)("div", {
        className: o()(I.footer, I.footerSeparator),
        children: (0, r.jsx)(c.Button, {
          variant: "primary",
          disabled: 0 === f.size && !s || R,
          text: i,
          size: "md",
          fullWidth: true,
          onClick: async () => {
            if (s) return void t();
            w(true), await n([...f.values()]), w(false)
          }
        })
      })
    }, j = e => {
      let {
        eligibleRecipients: t
      } = e;
      return (0, r.jsx)(b.Z, {
        users: Array.from(t.values()),
        isUserSelected: e => f.has(e.id),
        onSelectionChange: (e, t) => {
          p(n => {
            let r = new Map(n);
            return t ? r.set(e.id, e) : r.delete(e.id), r
          })
        },
        isFetching: N,
        onFetchMore: C,
        isUserDisabled: e => null !== a && 0 !== a && [...f.values()].filter(e => !P.has(e.id)).length >= a && !f.has(e.id) && !P.has(e.id),
        searchQuery: O,
        emptySearchContent: {
          header: S.intl.string(S.t["8+ywHD"]),
          body: S.intl.string(S.t.CgQmY2)
        },
        className: I.list
      })
    };
    return null === a ? (0, r.jsx)(c.$jN, {}) : A ? (0, r.jsx)(s.Modal, {
      transitionState: s.Dvm.ENTERED,
      size: "sm",
      title: S.intl.string(S.t.lcuio4),
      subtitle: S.intl.string(S.t["x09+CD"]),
      onClose: t,
      actions: []
    }) : false === u ? (0, r.jsx)(s.Modal, {
      transitionState: s.Dvm.ENTERED,
      size: "sm",
      title: S.intl.string(S.t["2YigPp"]),
      subtitle: S.intl.format(S.t.OOCbz8, {
        helpdeskArticle: m.Z.getArticleURL(v.BhN.REFERRAL_PROGRAM)
      }),
      onClose: t,
      actions: []
    }) : (0, r.jsx)(s.Modal, {
      size: "md",
      transitionState: s.Dvm.ENTERED,
      title: S.intl.string(S.t["2dVCLl"]),
      subtitle: S.intl.string(S.t.DXgoi2),
      onClose: t,
      input: x(),
      actions: [],
      actionBarInput: L({
        eligibleRecipients: D
      }),
      children: j({
        eligibleRecipients: D
      })
    })
  },
  C = e => {
    let {
      onClose: t,
      onShare: n
    } = e, a = (0, l.e7)([E.Z], () => E.Z.getRecipientStatus()), [d, f] = i.useState(new Map), [p, _] = i.useState(new Map), [m, h] = i.useState(false);
    i.useEffect(() => {
      (async () => {
        let e = new Map;
        for (let [t, n] of a) {
          let r = await (0, u.PR)(t);
          r.referralStatus = n, e.set(r.id, r)
        }
        f(e)
      })()
    }, [a]);
    let y = () => {
      let e;
      return e = p.size <= 1 ? S.intl.string(S.t.ItpQxk) : S.intl.format(S.t.iW2stn, {
        nTrials: p.size
      }), (0, r.jsx)("div", {
        className: o()(I.footer, I.footerSeparator),
        children: (0, r.jsx)(c.Button, {
          variant: "primary",
          disabled: 0 === p.size || m,
          text: e,
          size: "md",
          fullWidth: true,
          onClick: async () => {
            h(true), await n([...p.values()]), h(false)
          }
        })
      })
    };
    return (0, r.jsx)(s.Modal, {
      size: "md",
      transitionState: s.Dvm.ENTERED,
      title: S.intl.string(S.t.rKmy8I),
      subtitle: S.intl.string(S.t.VDlF6o),
      onClose: t,
      actions: [],
      actionBarInput: y(),
      children: (0, r.jsx)(b.Z, {
        users: Array.from(d.values()),
        isUserSelected: e => p.has(e.id),
        isUserDisabled: e => e.referralStatus === g.Fe.REDEEMED,
        onSelectionChange: (e, t) => {
          _(n => {
            let r = new Map(n);
            return t ? r.set(e.id, e) : r.delete(e.id), r
          })
        },
        className: I.list
      })
    })
  };
var A = function(e) {
  return e[e.SELECT_FRIENDS = 1] = "SELECT_FRIENDS", e[e.CONFIRMATION = 2] = "CONFIRMATION", e[e.REMINDER = 3] = "REMINDER", e
}({});
let N = e => {
  let {
    onClose: t,
    startingScreen: n = 1
  } = e, a = (0, l.e7)([E.Z], () => E.Z.getReferralsRemaining()), [o, s] = i.useState(n), [u, d] = i.useState([]), {
    analyticsLocations: m
  } = (0, p.ZP)([f.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]), h = async e => {
    _.default.track(v.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
      location_stack: m
    });
    let t = await (0, g.jy)(Object.values(e).map(e => e.id));
    d(e.map(e => ({
      recipient: e,
      status: t.get(e.id)
    }))), s(2)
  };
  if (null === a) return (0, r.jsx)(c.$jN, {});
  if (2 === o) {
    let e = 3 === n;
    return (0, r.jsx)(O.m, {
      isReminderConfirmation: e,
      results: u,
      onClose: t
    })
  }
  return 1 === o ? (0, r.jsx)(T, {
    onClose: t,
    onShare: h
  }) : 3 === o ? (0, r.jsx)(C, {
    onClose: t,
    onShare: h
  }) : true
}