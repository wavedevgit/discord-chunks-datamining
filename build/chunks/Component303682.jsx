/** Chunk was on web.js **/
/** chunk id: 303682, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SelectFriendsModalScreens: () => C,
  default: () => N
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk803306 = require("./803306.js"),
  Chunk718213 = require("./718213.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk326084 = require("./326084.js"),
  Chunk851746 = require("./851746.js"),
  Chunk761546 = require("./761546.jsx"),
  Chunk972007 = require("./972007.js"),
  Chunk636184 = require("./636184.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk683912 = require("./683912.js");
let S = e => {
    let {
      onClose: t,
      onShare: n
    } = e, a = (0, l.bG)([E.A], () => E.A.getReferralsRemaining()), u = (0, l.bG)([E.A], () => E.A.getHasEligibleFriends()), [f, p] = i.useState(new Map), [_, g] = i.useState(""), O = (0, d.A)(_, 400), {
      eligibleUsers: S,
      fetchUsers: T,
      hasError: C,
      isFetching: N,
      resendUsers: w
    } = (0, b.i)({
      searchQuery: O,
      selectedUsers: f
    }), [R, P] = i.useState(false), D = S.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map), x = () => (0, r.jsx)(c.iS7, {
      selectionMode: "multiple",
      value: Array.from(f.values()),
      options: Array.from(D.values()),
      formatOption: e => {
        let t = e;
        return {
          id: t.id,
          value: t,
          label: m.Ay.getName(t)
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
        className: I.c,
        children: (0, r.jsx)(c.a32, {
          placeholder: 0 === f.size ? A.intl.string(A.t.Kd5RaI) : "",
          onQueryChange: e => {
            g(e.target.value)
          }
        })
      })
    }), L = e => {
      let i, {
          eligibleRecipients: a
        } = e,
        o = O.length > 0 && 0 === a.size;
      return i = true === o ? A.intl.string(A.t.wpSqAW) : f.size <= 1 ? A.intl.string(A.t.ItpQxk) : A.intl.format(A.t.iW2stn, {
        nTrials: f.size
      }), (0, r.jsx)("div", {
        className: s()(I.qr, I.h0),
        children: (0, r.jsx)(c.Button, {
          variant: "primary",
          disabled: 0 === f.size && !o || R,
          text: i,
          size: "md",
          fullWidth: true,
          onClick: async () => {
            o ? t() : (P(true), await n([...f.values()]), P(false))
          }
        })
      })
    }, j = e => {
      let {
        eligibleRecipients: t
      } = e;
      return (0, r.jsx)(y.A, {
        users: Array.from(t.values()),
        isUserSelected: e => f.has(e.id),
        onSelectionChange: (e, t) => {
          p(n => {
            let r = new Map(n);
            return t ? r.set(e.id, e) : r.delete(e.id), r
          })
        },
        isFetching: N,
        onFetchMore: T,
        isUserDisabled: e => null !== a && 0 !== a && [...f.values()].filter(e => !w.has(e.id)).length >= a && !f.has(e.id) && !w.has(e.id),
        searchQuery: O,
        emptySearchContent: {
          header: A.intl.string(A.t["8+ywHD"]),
          body: A.intl.string(A.t.CgQmY2)
        },
        className: I.p_
      })
    };
    return null === a ? (0, r.jsx)(c.y$y, {}) : C ? (0, r.jsx)(o.Modal, {
      transitionState: o.ip4.ENTERED,
      size: "sm",
      title: A.intl.string(A.t.lcuio4),
      subtitle: A.intl.string(A.t["x09+CD"]),
      onClose: t,
      actions: []
    }) : false === u ? (0, r.jsx)(o.Modal, {
      transitionState: o.ip4.ENTERED,
      size: "sm",
      title: A.intl.string(A.t["2YigPp"]),
      subtitle: A.intl.format(A.t.OOCbz8, {
        helpdeskArticle: h.A.getArticleURL(v.MVz.REFERRAL_PROGRAM)
      }),
      onClose: t,
      actions: []
    }) : (0, r.jsx)(o.Modal, {
      size: "md",
      transitionState: o.ip4.ENTERED,
      title: A.intl.string(A.t["2dVCLl"]),
      subtitle: A.intl.string(A.t.DXgoi2),
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
  T = e => {
    let {
      onClose: t,
      onShare: n
    } = e, a = (0, l.bG)([E.A], () => E.A.getRecipientStatus()), [d, f] = i.useState(new Map), [p, _] = i.useState(new Map), [h, m] = i.useState(false);
    i.useEffect(() => {
      (async () => {
        let e = new Map;
        for (let [t, n] of a) {
          let r = await (0, u.wz)(t);
          r.referralStatus = n, e.set(r.id, r)
        }
        f(e)
      })()
    }, [a]);
    let b = () => {
      let e;
      return e = p.size <= 1 ? A.intl.string(A.t.ItpQxk) : A.intl.format(A.t.iW2stn, {
        nTrials: p.size
      }), (0, r.jsx)("div", {
        className: s()(I.qr, I.h0),
        children: (0, r.jsx)(c.Button, {
          variant: "primary",
          disabled: 0 === p.size || h,
          text: e,
          size: "md",
          fullWidth: true,
          onClick: async () => {
            m(true), await n([...p.values()]), m(false)
          }
        })
      })
    };
    return (0, r.jsx)(o.Modal, {
      size: "md",
      transitionState: o.ip4.ENTERED,
      title: A.intl.string(A.t.rKmy8I),
      subtitle: A.intl.string(A.t.VDlF6o),
      onClose: t,
      actions: [],
      actionBarInput: b(),
      children: (0, r.jsx)(y.A, {
        users: Array.from(d.values()),
        isUserSelected: e => p.has(e.id),
        isUserDisabled: e => e.referralStatus === g.aK.REDEEMED,
        onSelectionChange: (e, t) => {
          _(n => {
            let r = new Map(n);
            return t ? r.set(e.id, e) : r.delete(e.id), r
          })
        },
        className: I.p_
      })
    })
  };
var C = function(e) {
  return e[e.SELECT_FRIENDS = 1] = "SELECT_FRIENDS", e[e.CONFIRMATION = 2] = "CONFIRMATION", e[e.REMINDER = 3] = "REMINDER", e
}({});
let N = e => {
  let {
    onClose: t,
    startingScreen: n = 1
  } = e, a = (0, l.bG)([E.A], () => E.A.getReferralsRemaining()), [s, o] = i.useState(n), [u, d] = i.useState([]), {
    analyticsLocations: h
  } = (0, p.Ay)([f.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]), m = async e => {
    _.default.track(v.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
      location_stack: h
    });
    let t = await (0, g.xm)(Object.values(e).map(e => e.id));
    d(e.map(e => ({
      recipient: e,
      status: t.get(e.id)
    }))), o(2)
  };
  if (null === a) return (0, r.jsx)(c.y$y, {});
  if (2 === s) {
    let e = 3 === n;
    return (0, r.jsx)(O.h, {
      isReminderConfirmation: e,
      results: u,
      onClose: t
    })
  }
  return 1 === s ? (0, r.jsx)(S, {
    onClose: t,
    onShare: m
  }) : 3 === s ? (0, r.jsx)(T, {
    onClose: t,
    onShare: m
  }) : true
}