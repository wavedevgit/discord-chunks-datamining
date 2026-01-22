/** Chunk was on 47841 **/
/** chunk id: 652056, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk465932 = require("./465932.js"),
  Chunk599941 = require("./599941.js"),
  Chunk636194 = require("./636194.js"),
  Chunk306444 = require("./306444.jsx"),
  Chunk386784 = require("./386784.js"),
  Chunk963175 = require("./963175.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk691814 = require("./691814.js");

function x(e) {
  var t;
  let {
    onDeleteEditState: l
  } = e, {
    editStateId: x,
    guildId: h,
    groupListingId: j
  } = (0, f.O)(), O = (0, a.bG)([u.A], () => u.A.getSubscriptionListing(x)), y = null == O ? true : O.id, v = (0, g.A)(h), A = i.useMemo(() => {
    var e;
    return null != v && null != O && (null != (e = v[O.role_id]) ? e : 0)
  }, [v, O]), E = 0 === A, N = null == y, _ = null != (t = null == O ? true : O.archived) && t, {
    error: S,
    deleteSubscriptionListing: T,
    submitting: I
  } = (0, d.et)(), {
    error: C,
    archiveSubscriptionListing: P,
    submitting: w
  } = (0, d.hc)(), {
    allowSelfRemoveMonetization: R
  } = (0, o.nq)(h);
  return null == O ? null : (0, r.jsx)(b.A, {
    title: m.intl.string(m.t["7Si8Ul"]),
    children: (0, r.jsxs)(c.BJc, {
      gap: 16,
      children: [null !== S && (0, r.jsx)(c.po8, {
        messageType: c.YCn.ERROR,
        children: m.intl.string(m.t["9k8H/9"])
      }), null !== C && (0, r.jsx)(c.po8, {
        messageType: c.YCn.ERROR,
        children: m.intl.string(m.t.up8gUr)
      }), _ ? (0, r.jsx)(c.D0$, {
        disabled: !R,
        label: m.intl.string(m.t["2D14T0"]),
        description: m.intl.string(m.t.Y4KjUN),
        children: (0, r.jsxs)(c.BJc, {
          gap: 16,
          children: [!E && (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            className: p.$,
            children: m.intl.formatToPlainString(m.t.ABeonY, {
              listingMemberCount: A
            })
          }), (0, r.jsx)(c.Button, {
            variant: "critical-primary",
            onClick: () => {
              let e = async () => {
                (N || (s()(null != j, "group listing doesnt exist"), s()(null != y, "subscription listing doesnt exist"), await T(h, j, y))) && (null == l || l())
              };
              (0, c.mMO)(async () => {
                let {
                  Modal: t
                } = await Promise.resolve().then(n.bind(n, 158954));
                return n => (0, r.jsx)(t, {
                  title: m.intl.string(m.t["8ZRTsv"]),
                  onClose: n.onClose,
                  transitionState: n.transitionState,
                  actions: [{
                    text: m.intl.string(m.t["ETE/oC"]),
                    variant: "secondary",
                    onClick: () => n.onClose()
                  }, {
                    text: m.intl.string(m.t.GMtG6p),
                    variant: "critical-primary",
                    onClick: async () => {
                      await e(), n.onClose()
                    }
                  }],
                  children: (0, r.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: m.intl.string(m.t.Y4KjUN)
                  })
                })
              })
            },
            loading: I,
            disabled: !R || !E,
            text: m.intl.string(m.t.GMtG6p)
          })]
        })
      }) : (0, r.jsx)(c.D0$, {
        disabled: !R,
        label: m.intl.string(m.t["MS/4U1"]),
        description: m.intl.string(m.t["5/Jeg2"]),
        children: (0, r.jsx)(c.Button, {
          variant: "critical-primary",
          onClick: () => {
            s()(null != j, "group listing doesnt exist"), s()(null != y, "subscription listing doesnt exist"), (0, c.mMO)(async () => {
              let {
                Modal: e
              } = await Promise.resolve().then(n.bind(n, 158954));
              return t => (0, r.jsx)(e, {
                transitionState: t.transitionState,
                title: m.intl.string(m.t["8ZRTsv"]),
                onClose: t.onClose,
                actions: [{
                  text: m.intl.string(m.t["ETE/oC"]),
                  variant: "secondary",
                  onClick: () => t.onClose()
                }, {
                  text: m.intl.string(m.t.RL0wjm),
                  variant: "critical-primary",
                  onClick: async () => {
                    await P(h, j, y), t.onClose()
                  }
                }],
                children: (0, r.jsx)(c.Text, {
                  variant: "text-md/normal",
                  children: m.intl.string(m.t["5/Jeg2"])
                })
              })
            })
          },
          loading: w,
          disabled: !R,
          text: m.intl.string(m.t.RL0wjm)
        })
      })]
    })
  })
}