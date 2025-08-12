/** Chunk was on 67825 **/
/** chunk id: 656139, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk476674 = require("./476674.js");
let Z = e => {
    let {
      onClose: t,
      onShare: a
    } = e, n = (0, l.e7)([j.Z], () => j.Z.getReferralsRemaining()), [u, x] = i.useState(new Map), [b, h] = i.useState(""), R = (0, p.Z)(b, 400), {
      eligibleUsers: N,
      fetchUsers: S,
      hasError: Z,
      isFetching: M,
      resendUsers: A
    } = (0, v.q)({
      searchQuery: R,
      selectedUsers: u
    }), [D, O] = i.useState(false), P = (0, f.O)(e => {
      e && !M && S()
    }), k = N.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map);
    return null === n ? (0, r.jsx)(d.$jN, {}) : Z ? (0, r.jsx)(C.P, {
      onClose: t
    }) : (0, r.jsx)(c.Modal, {
      size: "sm",
      transitionState: o.D.ENTERED,
      title: y.intl.string(y.t.Lm2nFR),
      subtitle: y.intl.string(y.t.SRIMcn),
      onClose: t,
      input: (0, r.jsx)(m.Z, {
        className: w.searchbar,
        size: m.Z.Sizes.MEDIUM,
        tags: [...u.values()].map(e => _.ZP.getName(e)),
        placeholder: 0 === u.size ? y.intl.string(y.t.Kd5RaG) : "",
        query: b,
        onRemoveTag: e => {
          x(t => {
            let a = [...t.values()][e],
              r = new Map(t);
            return r.delete(a.id), r
          })
        },
        onQueryChange: h,
        onClear: () => h("")
      }),
      actions: [],
      actionBarInput: (e => {
        let {
          eligibleRecipients: i
        } = e, n = R.length > 0 && 0 === i.size;
        return (0, r.jsx)("div", {
          className: s()(w.footer, w.footerSeparator),
          children: (0, r.jsx)(d.zxk, {
            variant: "primary",
            disabled: 0 === u.size && !n || D,
            text: n ? y.intl.string(y.t.wpSqAQ) : y.intl.string(y.t.ItpQxs),
            size: "md",
            fullWidth: true,
            onClick: async () => {
              if (n) return void t();
              O(true), await a([...u.values()]), O(false)
            }
          })
        })
      })({
        eligibleRecipients: k
      }),
      children: (e => {
        let {
          eligibleRecipients: t
        } = e;
        returntrue == (R.length > 0 && 0 === t.size) ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(g.ih, {}), (0, r.jsx)(g.d, {})]
        }) : (0, r.jsxs)(d.w0Z, {
          className: w.list,
          children: [Array.from(t.values()).map(e => (0, r.jsx)(E.Z, {
            disabled: null !== n && 0 !== n && [...u.values()].filter(e => !A.has(e.id)).length >= n && !u.has(e.id) && !A.has(e.id),
            checked: u.has(e.id),
            user: e,
            onChange: (e, t) => {
              x(a => {
                let r = new Map(a);
                return t ? r.set(e.id, e) : r.delete(e.id), r
              })
            }
          }, e.id)), M && (0, r.jsx)(d.$jN, {}), (0, r.jsx)("div", {
            ref: P
          })]
        })
      })({
        eligibleRecipients: k
      })
    })
  },
  M = e => {
    let {
      onClose: t,
      onShare: a
    } = e, n = (0, l.e7)([j.Z], () => j.Z.getRecipientStatus()), [m, p] = i.useState(new Map), [f, x] = i.useState(new Map), [b, h] = i.useState(false);
    return i.useEffect(() => {
      (async () => {
        let e = new Map;
        for (let [t, a] of n) {
          let r = await (0, u.PR)(t);
          r.referralStatus = a, e.set(r.id, r)
        }
        p(e)
      })()
    }, [n]), (0, r.jsx)(c.Modal, {
      size: "md",
      transitionState: o.D.ENTERED,
      title: y.intl.string(y.t.SY9tyM),
      subtitle: y.intl.string(y.t.mPmPrq),
      onClose: t,
      actions: [],
      actionBarInput: (0, r.jsx)("div", {
        className: s()(w.footer, w.footerSeparator),
        children: (0, r.jsx)(d.zxk, {
          variant: "primary",
          disabled: 0 === f.size || b,
          text: y.intl.string(y.t.ItpQxs),
          size: "md",
          fullWidth: true,
          onClick: async () => {
            h(true), await a([...f.values()]), h(false)
          }
        })
      }),
      children: (0, r.jsx)(d.w0Z, {
        className: w.list,
        children: Array.from(m.values()).map(e => (0, r.jsx)(E.Z, {
          checked: f.has(e.id),
          disabled: e.referralStatus === R.Fe.REDEEMED,
          user: e,
          onChange: (e, t) => {
            x(a => {
              let r = new Map(a);
              return t ? r.set(e.id, e) : r.delete(e.id), r
            })
          }
        }, e.id))
      })
    })
  },
  A = e => {
    let {
      onClose: t
    } = e, a = (0, l.e7)([j.Z], () => j.Z.getReferralsRemaining()), [n, s] = i.useState(null !== a && a > 0 ? 1 : 3), [o, c] = i.useState([]), {
      analyticsLocations: u
    } = (0, b.ZP)([x.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]), m = async e => {
      h.default.track(S.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
        location_stack: u
      });
      let t = await (0, R.jy)(Object.values(e).map(e => e.id));
      c(e.map(e => ({
        recipient: e,
        status: t.get(e.id)
      }))), s(2)
    };
    return null === a ? (0, r.jsx)(d.$jN, {}) : 2 === n ? (0, r.jsx)(N.m, {
      results: o,
      onClose: t
    }) : 1 === n ? (0, r.jsx)(Z, {
      onClose: t,
      onShare: m
    }) : 3 === n ? (0, r.jsx)(M, {
      onClose: t,
      onShare: m
    }) : true
  }