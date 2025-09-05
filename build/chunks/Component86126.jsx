/** Chunk was on 54052 **/
/** chunk id: 86126, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk851016 = require("./851016.js"),
  Chunk471709 = require("./471709.js");

function x(e) {
  var t;
  let {
    onDeleteEditState: l
  } = e, {
    editStateId: x,
    guildId: j,
    groupListingId: _
  } = (0, m.N)(), v = (0, s.e7)([u.Z], () => u.Z.getSubscriptionListing(x)), O = null == v ? true : v.id, y = (0, g.Z)(j), C = i.useMemo(() => {
    var e;
    return null != y && null != v && (null != (e = y[v.role_id]) ? e : 0)
  }, [y, v]), N = 0 === C, E = null == O, I = null != (t = null == v ? true : v.archived) && t, {
    error: S,
    deleteSubscriptionListing: T,
    submitting: P
  } = (0, d.r4)(), {
    error: w,
    archiveSubscriptionListing: R,
    submitting: Z
  } = (0, d._1)(), {
    allowSelfRemoveMonetization: D
  } = (0, c.gX)(j);
  return null == v ? null : (0, r.jsx)(p.Z, {
    title: f.intl.string(f.t["7Si8Ul"]),
    children: (0, r.jsxs)(o.Kqy, {
      gap: 16,
      children: [null !== S && (0, r.jsx)(o.Wn, {
        messageType: o.QYI.ERROR,
        children: f.intl.string(f.t["9k8H//"])
      }), null !== w && (0, r.jsx)(o.Wn, {
        messageType: o.QYI.ERROR,
        children: f.intl.string(f.t.up8gUl)
      }), I ? (0, r.jsxs)(o.hjN, {
        title: f.intl.string(f.t["2D14T0"]),
        disabled: !D,
        children: [(0, r.jsx)(o.R94, {
          type: o.R94.Types.DESCRIPTION,
          className: h.formDescription,
          disabled: !D,
          children: f.intl.string(f.t.Y4KjUF)
        }), (0, r.jsxs)(o.Kqy, {
          gap: 16,
          children: [!N && (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: b.warning,
            children: f.intl.formatToPlainString(f.t.ABeonZ, {
              listingMemberCount: C
            })
          }), (0, r.jsx)(o.zxk, {
            variant: "critical-primary",
            onClick: () => {
              let e = async () => {
                (E || (a()(null != _, "group listing doesnt exist"), a()(null != O, "subscription listing doesnt exist"), await T(j, _, O))) && (null == l || l())
              };
              (0, o.ZDy)(async () => {
                let {
                  Modal: t
                } = await Promise.resolve().then(n.bind(n, 82659));
                return n => (0, r.jsx)(t, {
                  title: f.intl.string(f.t["8ZRTsr"]),
                  onClose: n.onClose,
                  transitionState: n.transitionState,
                  actions: [{
                    text: f.intl.string(f.t["ETE/oK"]),
                    variant: "secondary",
                    onClick: () => n.onClose()
                  }, {
                    text: f.intl.string(f.t.GMtG6u),
                    variant: "critical-primary",
                    onClick: async () => {
                      await e(), n.onClose()
                    }
                  }],
                  children: (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: f.intl.string(f.t.Y4KjUF)
                  })
                })
              })
            },
            loading: P,
            disabled: !D || !N,
            text: f.intl.string(f.t.GMtG6u)
          })]
        })]
      }) : (0, r.jsxs)(o.hjN, {
        title: f.intl.string(f.t["MS/4U1"]),
        disabled: !D,
        children: [(0, r.jsx)(o.R94, {
          type: o.R94.Types.DESCRIPTION,
          className: h.formDescription,
          disabled: !D,
          children: f.intl.string(f.t["5/Jeg4"])
        }), (0, r.jsx)(o.zxk, {
          variant: "critical-primary",
          onClick: () => {
            a()(null != _, "group listing doesnt exist"), a()(null != O, "subscription listing doesnt exist"), (0, o.ZDy)(async () => {
              let {
                Modal: e
              } = await Promise.resolve().then(n.bind(n, 82659));
              return t => (0, r.jsx)(e, {
                transitionState: t.transitionState,
                title: f.intl.string(f.t["8ZRTsr"]),
                onClose: t.onClose,
                actions: [{
                  text: f.intl.string(f.t["ETE/oK"]),
                  variant: "secondary",
                  onClick: () => t.onClose()
                }, {
                  text: f.intl.string(f.t.RL0wjo),
                  variant: "critical-primary",
                  onClick: async () => {
                    await R(j, _, O), t.onClose()
                  }
                }],
                children: (0, r.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children: f.intl.string(f.t["5/Jeg4"])
                })
              })
            })
          },
          loading: Z,
          disabled: !D,
          text: f.intl.string(f.t.RL0wjo)
        })]
      })]
    })
  })
}