/** Chunk was on 64982 **/
/** chunk id: 86126, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk654321 = require("./654321.js");

function b(e) {
  var t;
  let {
    onDeleteEditState: l
  } = e, {
    editStateId: b,
    guildId: x,
    groupListingId: j
  } = (0, g.N)(), _ = (0, s.e7)([u.Z], () => u.Z.getSubscriptionListing(b)), v = null == _ ? true : _.id, O = (0, m.Z)(x), C = i.useMemo(() => {
    var e;
    return null != O && null != _ && (null != (e = O[_.role_id]) ? e : 0)
  }, [O, _]), y = 0 === C, N = null == v, E = null != (t = null == _ ? true : _.archived) && t, {
    error: I,
    deleteSubscriptionListing: S,
    submitting: T
  } = (0, d.r4)(), {
    error: P,
    archiveSubscriptionListing: w,
    submitting: Z
  } = (0, d._1)(), {
    allowSelfRemoveMonetization: R
  } = (0, c.gX)(x);
  return null == _ ? null : (0, r.jsx)(p.Z, {
    title: f.intl.string(f.t["7Si8Ul"]),
    children: (0, r.jsxs)(o.Kqy, {
      gap: 16,
      children: [null !== I && (0, r.jsx)(o.Wn, {
        messageType: o.QYI.ERROR,
        children: f.intl.string(f.t["9k8H/9"])
      }), null !== P && (0, r.jsx)(o.Wn, {
        messageType: o.QYI.ERROR,
        children: f.intl.string(f.t.up8gUr)
      }), E ? (0, r.jsx)(o.gNt, {
        disabled: !R,
        label: f.intl.string(f.t["2D14T0"]),
        description: f.intl.string(f.t.Y4KjUN),
        children: (0, r.jsxs)(o.Kqy, {
          gap: 16,
          children: [!y && (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: h.warning,
            children: f.intl.formatToPlainString(f.t.ABeonY, {
              listingMemberCount: C
            })
          }), (0, r.jsx)(o.Button, {
            variant: "critical-primary",
            onClick: () => {
              let e = async () => {
                (N || (a()(null != j, "group listing doesnt exist"), a()(null != v, "subscription listing doesnt exist"), await S(x, j, v))) && (null == l || l())
              };
              (0, o.ZDy)(async () => {
                let {
                  Modal: t
                } = await Promise.resolve().then(n.bind(n, 793030));
                return n => (0, r.jsx)(t, {
                  title: f.intl.string(f.t["8ZRTsv"]),
                  onClose: n.onClose,
                  transitionState: n.transitionState,
                  actions: [{
                    text: f.intl.string(f.t["ETE/oC"]),
                    variant: "secondary",
                    onClick: () => n.onClose()
                  }, {
                    text: f.intl.string(f.t.GMtG6p),
                    variant: "critical-primary",
                    onClick: async () => {
                      await e(), n.onClose()
                    }
                  }],
                  children: (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: f.intl.string(f.t.Y4KjUN)
                  })
                })
              })
            },
            loading: T,
            disabled: !R || !y,
            text: f.intl.string(f.t.GMtG6p)
          })]
        })
      }) : (0, r.jsx)(o.gNt, {
        disabled: !R,
        label: f.intl.string(f.t["MS/4U1"]),
        description: f.intl.string(f.t["5/Jeg2"]),
        children: (0, r.jsx)(o.Button, {
          variant: "critical-primary",
          onClick: () => {
            a()(null != j, "group listing doesnt exist"), a()(null != v, "subscription listing doesnt exist"), (0, o.ZDy)(async () => {
              let {
                Modal: e
              } = await Promise.resolve().then(n.bind(n, 793030));
              return t => (0, r.jsx)(e, {
                transitionState: t.transitionState,
                title: f.intl.string(f.t["8ZRTsv"]),
                onClose: t.onClose,
                actions: [{
                  text: f.intl.string(f.t["ETE/oC"]),
                  variant: "secondary",
                  onClick: () => t.onClose()
                }, {
                  text: f.intl.string(f.t.RL0wjm),
                  variant: "critical-primary",
                  onClick: async () => {
                    await w(x, j, v), t.onClose()
                  }
                }],
                children: (0, r.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children: f.intl.string(f.t["5/Jeg2"])
                })
              })
            })
          },
          loading: Z,
          disabled: !R,
          text: f.intl.string(f.t.RL0wjm)
        })
      })]
    })
  })
}