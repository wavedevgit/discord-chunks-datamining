/** Chunk was on 88479 **/
/** chunk id: 909656, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk215569 = require("./215569.js"),
  Chunk477690 = require("./477690.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk393238 = require("./393238.js"),
  Chunk211266 = require("./211266.js"),
  Chunk313201 = require("./313201.js"),
  Chunk345861 = require("./345861.jsx"),
  Chunk208567 = require("./208567.jsx"),
  Chunk73346 = require("./73346.js"),
  Chunk624138 = require("./624138.js"),
  Chunk584825 = require("./584825.js"),
  Chunk723047 = require("./723047.js"),
  Chunk927954 = require("./927954.js"),
  Chunk164000 = require("./164000.js"),
  Chunk587431 = require("./587431.jsx"),
  Chunk293810 = require("./293810.js"),
  Chunk333866 = require("./333866.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk858760 = require("./858760.js");

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function Z(e, t) {
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
let D = (0, Chunk624138.Mg)(Chunk477690.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);

function A() {
  return [{
    name: Chunk388032.intl.string(Chunk388032.t.rXqxhI),
    desc: Chunk388032.intl.string(Chunk388032.t.yQiJnZ),
    value: Chunk293810.e3.SOME_CHANNELS,
    icon: Chunk481060.VL1
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.WzC9s7),
    desc: Chunk388032.intl.string(Chunk388032.t.WmagiI),
    value: Chunk293810.e3.ALL_CHANNELS,
    icon: Chunk481060._m8
  }]
}

function L(e) {
  let {
    value: t,
    "aria-labelledby": n,
    onChange: l,
    disabled: s = false
  } = e, {
    ref: o,
    width: c
  } = (0, h.ZP)(), d = (0, b.Z)(A), u = i.useMemo(() => d.map(e => Z(R({}, e), {
    icon: function() {
      let {
        icon: t
      } = e;
      return (0, r.jsx)("div", {
        className: w.formatRadioIconWrapper,
        children: (0, r.jsx)(t, {
          className: w.formatRadioIcon
        })
      })
    },
    radioBarClassName: w.formatOptionRadioBar,
    radioItemIconClassName: w.formatOptionRadioItemIcon
  })), [d]), m = null != c && c >= 400;
  return (0, r.jsx)("div", {
    ref: o,
    children: (0, r.jsx)(g.Gu, {
      options: u,
      value: t,
      orientation: m ? "horizontal" : "vertical",
      size: g.l7.NONE,
      className: a()({
        [w.radioGroupHorizontal]: m
      }),
      radioItemClassName: w.formatOptionRadioItem,
      onChange: e => {
        let {
          value: t
        } = e;
        return l(t)
      },
      "aria-labelledby": n,
      disabled: s
    })
  })
}

function k(e) {
  var t;
  let {
    guild: n,
    isGuildProducts: l = false
  } = e, {
    format: a
  } = (0, E.Z)(n.id), s = (0, y.YB)(n.id), c = i.useCallback(() => {
    var e;
    return (null == s || null == (e = s.cover_image_asset) ? true : e.application_id) == null ? null : (0, v._W)(s.cover_image_asset.application_id, s.cover_image_asset, D)
  }, [s]), [m, h] = i.useState(a), [b, O] = i.useState(null != (t = null == s ? true : s.description) ? t : ""), [A, k] = i.useState(c), [M, G] = i.useState(null == s ? true : s.store_page_guild_products_default_sort), [U, B] = i.useState(null == s ? true : s.server_shop_tab_order), {
    loading: F,
    error: H,
    updateSubscriptionsSettings: z
  } = (0, y.QV)(), {
    imageCTA: W,
    imageAriaLabel: V,
    setFilename: K
  } = (0, N.Z)(null == s ? true : s.cover_image_asset), Y = (0, x.Dt)(), q = (0, x.Dt)(), X = (0, x.Dt)();

  function Q(e, t) {
    o()(null != e, "Null value not allowed"), null != t && K(t.name), k(e)
  }
  let J = i.useMemo(() => {
      var e;
      return null != b && b !== (null != (e = null == s ? true : s.description) ? e : "") || (null == A ? true : A.startsWith("data:")) === true || m !== a || (null == s ? true : s.store_page_guild_products_default_sort) !== M || (null == s ? true : s.server_shop_tab_order) !== U
    }, [A, a, b, s, m, M, U]),
    $ = null != b && "" !== b && null != A;
  i.useEffect(() => {
    var e;
    (null == s || null == (e = s.cover_image_asset) ? true : e.application_id) != null && k((0, v._W)(s.cover_image_asset.application_id, s.cover_image_asset, D))
  }, [null == s ? true : s.cover_image_asset]);
  let ee = (0, C.mY)(),
    et = i.useMemo(() => T.kL.map(e => ({
      label: (0, T.eJ)(e),
      value: e
    })), []),
    en = i.useMemo(() => [{
      label: P.intl.string(P.t.X6h2g4),
      value: T.a3.PRODUCTS_FIRST
    }, {
      label: P.intl.string(P.t["KzCF//"]),
      value: T.a3.SUBS_FIRST
    }], []);
  return (0, r.jsxs)("div", {
    className: w.container,
    children: [null != H && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(I.Z, {
        children: H.getAnyErrorMessage()
      }), (0, r.jsx)(p.LZC, {
        size: 16
      })]
    }), l ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(p.hjN, {
        title: P.intl.string(P.t["PAVi+/"]),
        titleId: Y,
        disabled: ee,
        children: [(0, r.jsx)(p.R94, {
          type: p.R94.Types.DESCRIPTION,
          className: w.formDescription,
          disabled: ee,
          children: P.intl.string(P.t.x87YqK)
        }), (0, r.jsx)(L, {
          value: m,
          onChange: e => {
            a !== e && e === S.e3.ALL_CHANNELS && (0, p.h7j)(e => (0, r.jsx)(p.ConfirmModal, Z(R({}, e), {
              header: P.intl.string(P.t.dmVoOz),
              confirmText: P.intl.string(P.t["NX+WJC"]),
              confirmButtonColor: g.zx.Colors.BRAND,
              children: (0, r.jsx)(p.Text, {
                variant: "text-md/normal",
                children: P.intl.string(P.t.mtwzdH)
              })
            }))), h(e)
          },
          "aria-labelledby": Y,
          disabled: ee
        })]
      }), (0, r.jsx)(p.$i$, {
        className: w.divider
      })]
    }), (0, r.jsx)(p.hjN, {
      title: P.intl.string(P.t["1+Ho1d"]),
      titleId: q,
      disabled: ee,
      children: (0, r.jsx)(p.Kx8, {
        placeholder: l ? P.intl.string(P.t.SD6LRU) : P.intl.string(P.t["aVhW/f"]),
        maxLength: 1500,
        value: b,
        autosize: true,
        onChange: O,
        "aria-labelledby": q,
        disabled: ee
      })
    }), (0, r.jsx)(p.$i$, {
      className: w.divider
    }), (0, r.jsxs)(p.hjN, {
      title: P.intl.string(P.t["0kpTpK"]),
      disabled: ee,
      children: [(0, r.jsx)(p.R94, {
        type: p.R94.Types.DESCRIPTION,
        className: w.formDescription,
        disabled: ee,
        children: P.intl.string(P.t.i2rCwc)
      }), (0, r.jsx)(_.Z, {
        image: A,
        hint: W,
        showIcon: true,
        showRemoveButton: false,
        hideSize: true,
        className: w.coverImageUploader,
        iconWrapperClassName: w.coverImageUploaderIconWrapper,
        imageClassName: w.coverImageUploaderInner,
        iconClassName: w.coverImageUploaderIcon,
        onChange: Q,
        "aria-label": V,
        disabled: ee
      }), (0, r.jsx)(p.LZC, {
        size: 16
      }), (0, r.jsx)(j.Z, {
        onChange: Q,
        buttonCTA: W,
        "aria-label": V,
        disabled: ee,
        look: g.zx.Looks.OUTLINED,
        color: g.zx.Colors.PRIMARY
      })]
    }), l ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.$i$, {
        className: w.divider
      }), (0, r.jsxs)(p.hjN, {
        title: P.intl.string(P.t.aaZ9pK),
        titleId: X,
        disabled: ee,
        children: [(0, r.jsx)(p.R94, {
          type: p.R94.Types.DESCRIPTION,
          className: w.formDescription,
          disabled: ee,
          children: P.intl.string(P.t.TILN8v)
        }), (0, r.jsx)(p.q4e, {
          value: M,
          placeholder: P.intl.string(P.t.XqMe3N),
          options: et,
          onChange: e => G(e)
        })]
      })]
    }) : null, en.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.$i$, {
        className: w.divider
      }), (0, r.jsxs)(p.hjN, {
        title: P.intl.string(P.t["+dtmw8"]),
        titleId: X,
        disabled: ee,
        children: [(0, r.jsx)(p.R94, {
          type: p.R94.Types.DESCRIPTION,
          className: w.formDescription,
          disabled: ee,
          children: P.intl.string(P.t.n8WSWF)
        }), (0, r.jsx)(p.q4e, {
          value: U,
          placeholder: P.intl.string(P.t.XqMe3N),
          options: en,
          onChange: e => B(e)
        })]
      })]
    }), (0, r.jsx)(u.W, {
      component: "div",
      className: w.contentRegion,
      children: J && (0, r.jsx)(p.oXn, {
        children: (0, r.jsx)(f.Z, {
          submitting: F,
          disabled: !$,
          onReset: () => {
            var e;
            h(a), O(null != (e = null == s ? true : s.description) ? e : ""), k(c), G(null == s ? true : s.store_page_guild_products_default_sort), B(null == s ? true : s.server_shop_tab_order)
          },
          onSave: () => {
            o()(null != s, "Settings must be defined");
            let e = {};
            b !== s.description && (e.description = b), null != A && A.startsWith("data:") && (e.cover_image = A), m !== a && (e.full_server_gate = m === S.e3.ALL_CHANNELS), M !== s.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = M), U !== s.server_shop_tab_order && (e.server_shop_tab_order = U), d().isEmpty(e) || z(n.id, e)
          },
          saveButtonTooltip: $ ? true : P.intl.string(P.t["6HRvio"])
        })
      })
    })]
  })
}