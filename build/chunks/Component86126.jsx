/** Chunk was on 9536 **/
/** chunk id: 86126, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk674180 = require("./674180.js"),
  Chunk584825 = require("./584825.js"),
  Chunk289393 = require("./289393.js"),
  Chunk727843 = require("./727843.jsx"),
  Chunk14263 = require("./14263.js"),
  Chunk783454 = require("./783454.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk345040 = require("./345040.js");

function h(e) {
  var t;
  let {
    onDeleteEditState: l
  } = e, {
    editStateId: h,
    guildId: x,
    groupListingId: j
  } = (0, g.N)(), v = (0, s.e7)([u.Z], () => u.Z.getSubscriptionListing(h)), O = null == v ? true : v.id, C = (0, f.Z)(x), y = i.useMemo(() => {
    var e;
    return null != C && null != v && (null != (e = C[v.role_id]) ? e : 0)
  }, [C, v]), N = 0 === y, E = null == O, I = null != (t = null == v ? true : v.archived) && t, {
    error: S,
    deleteSubscriptionListing: _,
    submitting: T
  } = (0, d.r4)(), {
    error: P,
    archiveSubscriptionListing: w,
    submitting: Z
  } = (0, d._1)(), {
    allowSelfRemoveMonetization: R
  } = (0, c.gX)(x);
  return null == v ? null : (0, r.jsx)(m.Z, {
    title: b.intl.string(b.t["7Si8Ul"]),
    children: (0, r.jsxs)(o.Kqy, {
      gap: 16,
      children: [null !== S && (0, r.jsx)(o.Wn, {
        messageType: o.QYI.ERROR,
        children: b.intl.string(b.t["9k8H/9"])
      }), null !== P && (0, r.jsx)(o.Wn, {
        messageType: o.QYI.ERROR,
        children: b.intl.string(b.t.up8gUr)
      }), I ? (0, r.jsx)(o.gNt, {
        disabled: !R,
        label: b.intl.string(b.t["2D14T0"]),
        description: b.intl.string(b.t.Y4KjUN),
        children: (0, r.jsxs)(o.Kqy, {
          gap: 16,
          children: [!N && (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: p.warning,
            children: b.intl.formatToPlainString(b.t.ABeonY, {
              listingMemberCount: y
            })
          }), (0, r.jsx)(o.Button, {
            variant: "critical-primary",
            onClick: () => {
              let e = async () => {
                (E || (a()(null != j, "group listing doesnt exist"), a()(null != O, "subscription listing doesnt exist"), await _(x, j, O))) && (null == l || l())
              };
              (0, o.ZDy)(async () => {
                let {
                  Modal: t
                } = await Promise.resolve().then(n.bind(n, 793030));
                return n => (0, r.jsx)(t, {
                  title: b.intl.string(b.t["8ZRTsv"]),
                  onClose: n.onClose,
                  transitionState: n.transitionState,
                  actions: [{
                    text: b.intl.string(b.t["ETE/oC"]),
                    variant: "secondary",
                    onClick: () => n.onClose()
                  }, {
                    text: b.intl.string(b.t.GMtG6p),
                    variant: "critical-primary",
                    onClick: async () => {
                      await e(), n.onClose()
                    }
                  }],
                  children: (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: b.intl.string(b.t.Y4KjUN)
                  })
                })
              })
            },
            loading: T,
            disabled: !R || !N,
            text: b.intl.string(b.t.GMtG6p)
          })]
        })
      }) : (0, r.jsx)(o.gNt, {
        disabled: !R,
        label: b.intl.string(b.t["MS/4U1"]),
        description: b.intl.string(b.t["5/Jeg2"]),
        children: (0, r.jsx)(o.Button, {
          variant: "critical-primary",
          onClick: () => {
            a()(null != j, "group listing doesnt exist"), a()(null != O, "subscription listing doesnt exist"), (0, o.ZDy)(async () => {
              let {
                Modal: e
              } = await Promise.resolve().then(n.bind(n, 793030));
              return t => (0, r.jsx)(e, {
                transitionState: t.transitionState,
                title: b.intl.string(b.t["8ZRTsv"]),
                onClose: t.onClose,
                actions: [{
                  text: b.intl.string(b.t["ETE/oC"]),
                  variant: "secondary",
                  onClick: () => t.onClose()
                }, {
                  text: b.intl.string(b.t.RL0wjm),
                  variant: "critical-primary",
                  onClick: async () => {
                    await w(x, j, O), t.onClose()
                  }
                }],
                children: (0, r.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children: b.intl.string(b.t["5/Jeg2"])
                })
              })
            })
          },
          loading: Z,
          disabled: !R,
          text: b.intl.string(b.t.RL0wjm)
        })
      })]
    })
  })
}