/** Chunk was on 64935 **/
/** chunk id: 303682, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  SelectFriendsModalScreens: () => S,
  default: () => T
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
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
let C = e => {
    let {
      onClose: t,
      onShare: n
    } = e, r = (0, c.bG)([y.A], () => y.A.getReferralsRemaining()), a = (0, c.bG)([y.A], () => y.A.getHasEligibleFriends()), [d, m] = l.useState(new Map), [f, g] = l.useState(""), b = (0, p.A)(f, 400), {
      eligibleUsers: O,
      fetchUsers: C,
      hasError: I,
      isFetching: S,
      resendUsers: T
    } = (0, v.i)({
      searchQuery: b,
      selectedUsers: d
    }), [N, P] = l.useState(false), w = O.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map);
    return null === r ? (0, i.jsx)(u.y$y, {}) : I ? (0, i.jsx)(o.Modal, {
      transitionState: o.ip4.ENTERED,
      size: "sm",
      title: E.intl.string(E.t.lcuio4),
      subtitle: E.intl.string(E.t["x09+CD"]),
      onClose: t,
      actions: []
    }) : false === a ? (0, i.jsx)(o.Modal, {
      transitionState: o.ip4.ENTERED,
      size: "sm",
      title: E.intl.string(E.t["2YigPp"]),
      subtitle: E.intl.format(E.t.OOCbz8, {
        helpdeskArticle: _.A.getArticleURL(x.MVz.REFERRAL_PROGRAM)
      }),
      onClose: t,
      actions: []
    }) : (0, i.jsx)(o.Modal, {
      size: "md",
      transitionState: o.ip4.ENTERED,
      title: E.intl.string(E.t["2dVCLl"]),
      subtitle: E.intl.string(E.t.DXgoi2),
      onClose: t,
      input: (0, i.jsx)(u.iS7, {
        selectionMode: "multiple",
        value: Array.from(d.values()),
        options: Array.from(w.values()),
        formatOption: e => ({
          id: e.id,
          value: e,
          label: h.Ay.getName(e)
        }),
        onSelectionChange: e => {
          let t = Array.isArray(e) ? e : [e],
            n = new Map;
          t.forEach(e => {
            null != e && n.set(e.id, e)
          }), m(n)
        },
        children: (0, i.jsx)("div", {
          className: j.c,
          children: (0, i.jsx)(u.a32, {
            placeholder: 0 === d.size ? E.intl.string(E.t.Kd5RaI) : "",
            onQueryChange: e => {
              g(e.target.value)
            }
          })
        })
      }),
      actions: [],
      actionBarInput: (e => {
        let r, {
            eligibleRecipients: l
          } = e,
          a = b.length > 0 && 0 === l.size;
        return r = true === a ? E.intl.string(E.t.wpSqAW) : d.size <= 1 ? E.intl.string(E.t.ItpQxk) : E.intl.format(E.t.iW2stn, {
          nTrials: d.size
        }), (0, i.jsx)("div", {
          className: s()(j.qr, j.h0),
          children: (0, i.jsx)(u.Button, {
            variant: "primary",
            disabled: 0 === d.size && !a || N,
            text: r,
            size: "md",
            fullWidth: true,
            onClick: async () => {
              a ? t() : (P(true), await n([...d.values()]), P(false))
            }
          })
        })
      })({
        eligibleRecipients: w
      }),
      children: (e => {
        let {
          eligibleRecipients: t
        } = e;
        return (0, i.jsx)(A.A, {
          users: Array.from(t.values()),
          isUserSelected: e => d.has(e.id),
          onSelectionChange: (e, t) => {
            m(n => {
              let r = new Map(n);
              return t ? r.set(e.id, e) : r.delete(e.id), r
            })
          },
          isFetching: S,
          onFetchMore: C,
          isUserDisabled: e => null !== r && 0 !== r && [...d.values()].filter(e => !T.has(e.id)).length >= r && !d.has(e.id) && !T.has(e.id),
          searchQuery: b,
          emptySearchContent: {
            header: E.intl.string(E.t["8+ywHD"]),
            body: E.intl.string(E.t.CgQmY2)
          },
          className: j.p_
        })
      })({
        eligibleRecipients: w
      })
    })
  },
  I = e => {
    let t, {
        onClose: n,
        onShare: r
      } = e,
      a = (0, c.bG)([y.A], () => y.A.getRecipientStatus()),
      [p, m] = l.useState(new Map),
      [f, g] = l.useState(new Map),
      [_, h] = l.useState(false);
    return l.useEffect(() => {
      (async () => {
        let e = new Map;
        for (let [t, n] of a) {
          let r = await (0, d.wz)(t);
          r.referralStatus = n, e.set(r.id, r)
        }
        m(e)
      })()
    }, [a]), (0, i.jsx)(o.Modal, {
      size: "md",
      transitionState: o.ip4.ENTERED,
      title: E.intl.string(E.t.rKmy8I),
      subtitle: E.intl.string(E.t.VDlF6o),
      onClose: n,
      actions: [],
      actionBarInput: (t = f.size <= 1 ? E.intl.string(E.t.ItpQxk) : E.intl.format(E.t.iW2stn, {
        nTrials: f.size
      }), (0, i.jsx)("div", {
        className: s()(j.qr, j.h0),
        children: (0, i.jsx)(u.Button, {
          variant: "primary",
          disabled: 0 === f.size || _,
          text: t,
          size: "md",
          fullWidth: true,
          onClick: async () => {
            h(true), await r([...f.values()]), h(false)
          }
        })
      })),
      children: (0, i.jsx)(A.A, {
        users: Array.from(p.values()),
        isUserSelected: e => f.has(e.id),
        isUserDisabled: e => e.referralStatus === b.aK.REDEEMED,
        onSelectionChange: (e, t) => {
          g(n => {
            let r = new Map(n);
            return t ? r.set(e.id, e) : r.delete(e.id), r
          })
        },
        className: j.p_
      })
    })
  };
var S = ((r = {})[r.SELECT_FRIENDS = 1] = "SELECT_FRIENDS", r[r.CONFIRMATION = 2] = "CONFIRMATION", r[r.REMINDER = 3] = "REMINDER", r);
let T = e => {
  let {
    onClose: t,
    startingScreen: n = 1
  } = e, r = (0, c.bG)([y.A], () => y.A.getReferralsRemaining()), [a, s] = l.useState(n), [o, d] = l.useState([]), {
    analyticsLocations: p
  } = (0, f.Ay)([m.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]), _ = async e => {
    g.default.track(x.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
      location_stack: p
    });
    let t = await (0, b.xm)(Object.values(e).map(e => e.id));
    d(e.map(e => ({
      recipient: e,
      status: t.get(e.id)
    }))), s(2)
  };
  return null === r ? (0, i.jsx)(u.y$y, {}) : 2 === a ? (0, i.jsx)(O.h, {
    isReminderConfirmation: 3 === n,
    results: o,
    onClose: t
  }) : 1 === a ? (0, i.jsx)(C, {
    onClose: t,
    onShare: _
  }) : 3 === a ? (0, i.jsx)(I, {
    onClose: t,
    onShare: _
  }) : true
}