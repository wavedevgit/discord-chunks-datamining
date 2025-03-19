/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => Q
}), n(47120), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(512722),
  o = n.n(l),
  c = n(392711),
  A = n.n(c),
  d = n(215569),
  u = n(477690),
  g = n(481060),
  f = n(852860),
  m = n(393238),
  p = n(211266),
  h = n(313201),
  C = n(345861),
  b = n(208567),
  v = n(73346),
  x = n(624138),
  N = n(584825),
  j = n(723047),
  E = n(927954),
  I = n(164e3),
  O = n(587431),
  y = n(293810),
  w = n(333866),
  P = n(388032),
  B = n(605652);

function D(e) {
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

function T(e, t) {
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
let S = (0, x.Mg)(u.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);

function L() {
  return [{
    name: P.NW.string(P.t.rXqxhI),
    desc: P.NW.string(P.t.yQiJnZ),
    value: y.e3.SOME_CHANNELS,
    icon: g.VL1
  }, {
    name: P.NW.string(P.t.WzC9s7),
    desc: P.NW.string(P.t.WmagiI),
    value: y.e3.ALL_CHANNELS,
    icon: g._m8
  }]
}

function R(e) {
  let {
    value: t,
    "aria-labelledby": n,
    onChange: s,
    disabled: l = !1
  } = e, {
    ref: o,
    width: c
  } = (0, m.Z)(), A = (0, p.Z)(L), d = i.useMemo(() => A.map(e => T(D({}, e), {
    icon: function() {
      let {
        icon: t
      } = e;
      return (0, r.jsx)("div", {
        className: B.formatRadioIconWrapper,
        children: (0, r.jsx)(t, {
          className: B.formatRadioIcon
        })
      })
    },
    radioBarClassName: B.formatOptionRadioBar,
    radioItemIconClassName: B.formatOptionRadioItemIcon
  })), [A]), u = null != c && c >= 400;
  return (0, r.jsx)("div", {
    ref: o,
    children: (0, r.jsx)(g.FXm, {
      options: d,
      value: t,
      orientation: u ? "horizontal" : "vertical",
      size: g.FXm.Sizes.NONE,
      className: a()({
        [B.radioGroupHorizontal]: u
      }),
      radioItemClassName: B.formatOptionRadioItem,
      onChange: e => {
        let {
          value: t
        } = e;
        return s(t)
      },
      "aria-labelledby": n,
      disabled: l
    })
  })
}

function Q(e) {
  var t;
  let {
    guild: n,
    isGuildProducts: s = !1
  } = e, {
    format: a
  } = (0, I.Z)(n.id), l = (0, N.YB)(n.id), c = i.useCallback(() => {
    var e;
    return (null == l ? void 0 : null === (e = l.cover_image_asset) || void 0 === e ? void 0 : e.application_id) == null ? null : (0, v._W)(l.cover_image_asset.application_id, l.cover_image_asset, S)
  }, [l]), [u, m] = i.useState(a), [p, x] = i.useState(null !== (t = null == l ? void 0 : l.description) && void 0 !== t ? t : ""), [L, Q] = i.useState(c), [Z, W] = i.useState(null == l ? void 0 : l.store_page_guild_products_default_sort), [k, M] = i.useState(null == l ? void 0 : l.server_shop_tab_order), {
    loading: _,
    error: G,
    updateSubscriptionsSettings: F
  } = (0, N.QV)(), {
    imageCTA: U,
    imageAriaLabel: H,
    setFilename: z
  } = (0, E.Z)(null == l ? void 0 : l.cover_image_asset), X = (0, h.Dt)(), Y = (0, h.Dt)(), K = (0, h.Dt)();

  function V(e, t) {
    o()(null != e, "Null value not allowed"), null != t && z(t.name), Q(e)
  }
  let J = i.useMemo(() => {
      var e;
      return null != p && p !== (null !== (e = null == l ? void 0 : l.description) && void 0 !== e ? e : "") || (null == L ? void 0 : L.startsWith("data:")) === !0 || u !== a || (null == l ? void 0 : l.store_page_guild_products_default_sort) !== Z || (null == l ? void 0 : l.server_shop_tab_order) !== k
    }, [L, a, p, l, u, Z, k]),
    q = null != p && "" !== p && null != L;
  i.useEffect(() => {
    var e;
    (null == l ? void 0 : null === (e = l.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null && Q((0, v._W)(l.cover_image_asset.application_id, l.cover_image_asset, S))
  }, [null == l ? void 0 : l.cover_image_asset]);
  let $ = (0, j.mY)(),
    ee = i.useMemo(() => w.kL.map(e => ({
      label: (0, w.eJ)(e),
      value: e
    })), []),
    et = i.useMemo(() => [{
      label: P.NW.string(P.t.X6h2g4),
      value: w.a3.PRODUCTS_FIRST
    }, {
      label: P.NW.string(P.t["KzCF//"]),
      value: w.a3.SUBS_FIRST
    }], []);
  return (0, r.jsxs)("div", {
    className: B.container,
    children: [null != G && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(O.Z, {
        children: G.getAnyErrorMessage()
      }), (0, r.jsx)(g.LZC, {
        size: 16
      })]
    }), s ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(g.hjN, {
        title: P.NW.string(P.t["PAVi+/"]),
        titleId: X,
        disabled: $,
        children: [(0, r.jsx)(g.R94, {
          type: g.R94.Types.DESCRIPTION,
          className: B.formDescription,
          disabled: $,
          children: P.NW.string(P.t.x87YqK)
        }), (0, r.jsx)(R, {
          value: u,
          onChange: e => {
            a !== e && e === y.e3.ALL_CHANNELS && (0, g.h7j)(e => (0, r.jsx)(g.ConfirmModal, T(D({}, e), {
              header: P.NW.string(P.t.dmVoOz),
              confirmText: P.NW.string(P.t["NX+WJC"]),
              confirmButtonColor: g.zxk.Colors.BRAND,
              children: (0, r.jsx)(g.Text, {
                variant: "text-md/normal",
                children: P.NW.string(P.t.mtwzdH)
              })
            }))), m(e)
          },
          "aria-labelledby": X,
          disabled: $
        })]
      }), (0, r.jsx)(g.$i$, {
        className: B.divider
      })]
    }), (0, r.jsx)(g.hjN, {
      title: P.NW.string(P.t["1+Ho1d"]),
      titleId: Y,
      disabled: $,
      children: (0, r.jsx)(g.Kx8, {
        placeholder: s ? P.NW.string(P.t.SD6LRU) : P.NW.string(P.t["aVhW/f"]),
        maxLength: 1500,
        value: p,
        rows: 2,
        autosize: !0,
        onChange: x,
        "aria-labelledby": Y,
        disabled: $
      })
    }), (0, r.jsx)(g.$i$, {
      className: B.divider
    }), (0, r.jsxs)(g.hjN, {
      title: P.NW.string(P.t["0kpTpK"]),
      disabled: $,
      children: [(0, r.jsx)(g.R94, {
        type: g.R94.Types.DESCRIPTION,
        className: B.formDescription,
        disabled: $,
        children: P.NW.string(P.t.i2rCwc)
      }), (0, r.jsx)(b.Z, {
        image: L,
        hint: U,
        showIcon: !0,
        showRemoveButton: !1,
        hideSize: !0,
        className: B.coverImageUploader,
        iconWrapperClassName: B.coverImageUploaderIconWrapper,
        imageClassName: B.coverImageUploaderInner,
        iconClassName: B.coverImageUploaderIcon,
        onChange: V,
        "aria-label": H,
        disabled: $
      }), (0, r.jsx)(g.LZC, {
        size: 16
      }), (0, r.jsx)(C.Z, {
        onChange: V,
        buttonCTA: U,
        "aria-label": H,
        disabled: $,
        look: g.zxk.Looks.OUTLINED,
        color: g.zxk.Colors.PRIMARY
      })]
    }), s ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.$i$, {
        className: B.divider
      }), (0, r.jsxs)(g.hjN, {
        title: P.NW.string(P.t.aaZ9pK),
        titleId: K,
        disabled: $,
        children: [(0, r.jsx)(g.R94, {
          type: g.R94.Types.DESCRIPTION,
          className: B.formDescription,
          disabled: $,
          children: P.NW.string(P.t.TILN8v)
        }), (0, r.jsx)(g.q4e, {
          value: Z,
          placeholder: P.NW.string(P.t.XqMe3N),
          options: ee,
          onChange: e => W(e)
        })]
      })]
    }) : null, et.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.$i$, {
        className: B.divider
      }), (0, r.jsxs)(g.hjN, {
        title: P.NW.string(P.t["+dtmw8"]),
        titleId: K,
        disabled: $,
        children: [(0, r.jsx)(g.R94, {
          type: g.R94.Types.DESCRIPTION,
          className: B.formDescription,
          disabled: $,
          children: P.NW.string(P.t.n8WSWF)
        }), (0, r.jsx)(g.q4e, {
          value: k,
          placeholder: P.NW.string(P.t.XqMe3N),
          options: et,
          onChange: e => M(e)
        })]
      })]
    }), (0, r.jsx)(d.W, {
      component: "div",
      className: B.contentRegion,
      children: J && (0, r.jsx)(g.oXn, {
        children: (0, r.jsx)(f.Z, {
          submitting: _,
          disabled: !q,
          onReset: () => {
            var e;
            m(a), x(null !== (e = null == l ? void 0 : l.description) && void 0 !== e ? e : ""), Q(c), W(null == l ? void 0 : l.store_page_guild_products_default_sort), M(null == l ? void 0 : l.server_shop_tab_order)
          },
          onSave: () => {
            o()(null != l, "Settings must be defined");
            let e = {};
            p !== l.description && (e.description = p), null != L && L.startsWith("data:") && (e.cover_image = L), u !== a && (e.full_server_gate = u === y.e3.ALL_CHANNELS), Z !== l.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = Z), k !== l.server_shop_tab_order && (e.server_shop_tab_order = k), A().isEmpty(e) || F(n.id, e)
          },
          saveButtonTooltip: q ? void 0 : P.NW.string(P.t["6HRvio"])
        })
      })
    })]
  })
}