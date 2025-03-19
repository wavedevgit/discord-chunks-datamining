/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => v
});
var r = n(200651),
  i = n(192379),
  s = n(512722),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(674180),
  A = n(584825),
  d = n(289393),
  u = n(727843),
  g = n(14263),
  f = n(783454),
  m = n(388032),
  p = n(174032),
  h = n(81780);

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  var t;
  let {
    onDeleteEditState: s
  } = e, {
    editStateId: v,
    guildId: x,
    groupListingId: N
  } = (0, u.N)(), j = (0, l.e7)([d.Z], () => d.Z.getSubscriptionListing(v)), E = null == j ? void 0 : j.id, I = (0, g.Z)(x), O = i.useMemo(() => {
    var e;
    return null != I && null != j && (null !== (e = I[j.role_id]) && void 0 !== e ? e : 0)
  }, [I, j]), y = 0 === O, w = null == E, P = null !== (t = null == j ? void 0 : j.archived) && void 0 !== t && t, {
    deleteSubscriptionListing: B,
    submitting: D
  } = (0, A.r4)(), {
    archiveSubscriptionListing: T,
    submitting: S
  } = (0, A._1)(), L = () => {
    let e = async () => {
      (w || (a()(null != N, "group listing doesnt exist"), a()(null != E, "subscription listing doesnt exist"), await B(x, N, E))) && (null == s || s())
    };
    (0, o.ZDy)(async () => {
      let {
        ConfirmModal: t
      } = await Promise.resolve().then(n.bind(n, 481060));
      return n => (0, r.jsx)(t, b(C({
        header: m.NW.string(m.t["8ZRTsr"]),
        confirmText: m.NW.string(m.t.GMtG6u),
        cancelText: m.NW.string(m.t["ETE/oK"]),
        onConfirm: () => {
          e()
        },
        confirmButtonColor: o.zxk.Colors.RED
      }, n), {
        children: (0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          children: m.NW.string(m.t.Y4KjUF)
        })
      }))
    })
  }, {
    allowSelfRemoveMonetization: R
  } = (0, c.gX)(x);
  return null == j ? null : (0, r.jsx)(f.Z, {
    title: m.NW.string(m.t["7Si8Ul"]),
    children: P ? (0, r.jsxs)(o.hjN, {
      title: m.NW.string(m.t["2D14T0"]),
      disabled: !R,
      children: [(0, r.jsx)(o.R94, {
        type: o.R94.Types.DESCRIPTION,
        className: p.formDescription,
        disabled: !R,
        children: m.NW.string(m.t.Y4KjUF)
      }), (0, r.jsx)(o.ua7, {
        shouldShow: !y,
        text: m.NW.formatToPlainString(m.t.ABeonZ, {
          listingMemberCount: O
        }),
        children: e => (0, r.jsx)(o.zxk, b(C({}, e), {
          wrapperClassName: h.deleteListingButton,
          color: o.zxk.Colors.RED,
          onClick: L,
          submitting: D,
          disabled: !R || !y,
          children: m.NW.string(m.t.GMtG6u)
        }))
      })]
    }) : (0, r.jsxs)(o.hjN, {
      title: m.NW.string(m.t["MS/4U1"]),
      disabled: !R,
      children: [(0, r.jsx)(o.R94, {
        type: o.R94.Types.DESCRIPTION,
        className: p.formDescription,
        disabled: !R,
        children: m.NW.string(m.t["5/Jeg4"])
      }), (0, r.jsx)(o.zxk, {
        wrapperClassName: h.deleteListingButton,
        color: o.zxk.Colors.RED,
        onClick: () => {
          a()(null != N, "group listing doesnt exist"), a()(null != E, "subscription listing doesnt exist"), (0, o.ZDy)(async () => {
            let {
              ConfirmModal: e
            } = await Promise.resolve().then(n.bind(n, 481060));
            return t => (0, r.jsx)(e, b(C({
              header: m.NW.string(m.t["8ZRTsr"]),
              confirmText: m.NW.string(m.t.RL0wjo),
              cancelText: m.NW.string(m.t["ETE/oK"]),
              onConfirm: () => {
                T(x, N, E)
              },
              confirmButtonColor: o.zxk.Colors.RED
            }, t), {
              children: (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                children: m.NW.string(m.t["5/Jeg4"])
              })
            }))
          })
        },
        submitting: S,
        disabled: !R,
        children: m.NW.string(m.t.RL0wjo)
      })]
    })
  })
}