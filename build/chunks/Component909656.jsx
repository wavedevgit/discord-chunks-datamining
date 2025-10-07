/** Chunk was on 64982 **/
/** chunk id: 909656, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk215569 = require("./215569.js"),
  Chunk477690 = require("./477690.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk852860 = require("./852860.jsx"),
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
let S = (0, Chunk624138.Mg)(Chunk477690.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);

function T(e) {
  var t;
  let {
    guild: n,
    isGuildProducts: l = false
  } = e, {
    format: a
  } = (0, C.Z)(n.id), d = (0, j.YB)(n.id), b = i.useCallback(() => {
    var e;
    return (null == d || null == (e = d.cover_image_asset) ? true : e.application_id) == null ? null : (0, x._W)(d.cover_image_asset.application_id, d.cover_image_asset, S)
  }, [d]), [T, P] = i.useState(a), [w, R] = i.useState(null != (t = null == d ? true : d.description) ? t : ""), [Z, D] = i.useState(b), [A, L] = i.useState(null == d ? true : d.store_page_guild_products_default_sort), [k, G] = i.useState(null == d ? true : d.server_shop_tab_order), {
    loading: M,
    error: U,
    updateSubscriptionsSettings: B
  } = (0, j.QV)(), {
    imageCTA: F,
    imageAriaLabel: H,
    setFilename: z
  } = (0, v.Z)(null == d ? true : d.cover_image_asset), W = (0, p.Dt)();

  function V(e, t) {
    s()(null != e, "Null value not allowed"), null != t && z(t.name), D(e)
  }
  let K = i.useMemo(() => {
      var e;
      return null != w && w !== (null != (e = null == d ? true : d.description) ? e : "") || (null == Z ? true : Z.startsWith("data:")) === true || T !== a || (null == d ? true : d.store_page_guild_products_default_sort) !== A || (null == d ? true : d.server_shop_tab_order) !== k
    }, [Z, a, w, d, T, A, k]),
    Y = null != w && "" !== w && null != Z;
  i.useEffect(() => {
    var e;
    (null == d || null == (e = d.cover_image_asset) ? true : e.application_id) != null && D((0, x._W)(d.cover_image_asset.application_id, d.cover_image_asset, S))
  }, [null == d ? true : d.cover_image_asset]);
  let q = (0, _.mY)(),
    X = i.useMemo(() => N.kL.map(e => ({
      label: (0, N.eJ)(e),
      value: e
    })), []),
    J = i.useMemo(() => [{
      label: E.intl.string(E.t.X6h2g4),
      value: N.a3.PRODUCTS_FIRST
    }, {
      label: E.intl.string(E.t["KzCF//"]),
      value: N.a3.SUBS_FIRST
    }], []);
  return (0, r.jsxs)("div", {
    className: I.container,
    children: [null != U && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(O.Z, {
        children: U.getAnyErrorMessage()
      }), (0, r.jsx)(g.LZC, {
        size: 16
      })]
    }), l ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.FXm, {
        label: E.intl.string(E.t["PAVi+/"]),
        description: E.intl.string(E.t.x87YqK),
        value: T,
        onChange: e => {
          a !== e && e === y.e3.ALL_CHANNELS && (0, g.h7j)(e => {
            var t, n;
            return (0, r.jsx)(g.ConfirmModal, (t = function(e) {
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
            }({}, e), n = n = {
              header: E.intl.string(E.t.dmVoOz),
              confirmText: E.intl.string(E.t["NX+WJC"]),
              confirmButtonColor: u.zx.Colors.BRAND,
              children: (0, r.jsx)(g.Text, {
                variant: "text-md/normal",
                children: E.intl.string(E.t.mtwzdH)
              })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(n)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
          }), P(e)
        },
        disabled: q,
        options: [{
          name: E.intl.string(E.t.rXqxhI),
          desc: E.intl.string(E.t.yQiJnZ),
          value: y.e3.SOME_CHANNELS,
          icon: g.VL1
        }, {
          name: E.intl.string(E.t.WzC9s7),
          desc: E.intl.string(E.t.WmagiI),
          value: y.e3.ALL_CHANNELS,
          icon: g._m8
        }]
      }), (0, r.jsx)(g.izJ, {
        className: I.divider
      })]
    }), (0, r.jsx)(g.Kx8, {
      label: E.intl.string(E.t["1+Ho1d"]),
      placeholder: l ? E.intl.string(E.t.SD6LRU) : E.intl.string(E.t["aVhW/f"]),
      maxLength: 1500,
      value: w,
      autosize: true,
      onChange: R,
      "aria-labelledby": W,
      disabled: q
    }), (0, r.jsx)(g.izJ, {
      className: I.divider
    }), (0, r.jsxs)(g.NIc, {
      label: E.intl.string(E.t["0kpTpK"]),
      description: E.intl.string(E.t.i2rCwc),
      children: [(0, r.jsx)(h.Z, {
        image: Z,
        hint: F,
        showIcon: true,
        showRemoveButton: false,
        hideSize: true,
        className: I.coverImageUploader,
        iconWrapperClassName: I.coverImageUploaderIconWrapper,
        imageClassName: I.coverImageUploaderInner,
        iconClassName: I.coverImageUploaderIcon,
        onChange: V,
        "aria-label": H,
        disabled: q
      }), (0, r.jsx)(f.Z, {
        onChange: V,
        "aria-label": H,
        disabled: q,
        text: F,
        variant: "secondary",
        size: "md"
      })]
    }), l ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.izJ, {
        className: I.divider
      }), (0, r.jsx)(g.q4e, {
        label: E.intl.string(E.t.aaZ9pK),
        description: E.intl.string(E.t.TILN8v),
        value: A,
        placeholder: E.intl.string(E.t.XqMe3N),
        options: X,
        onChange: e => L(e)
      })]
    }) : null, J.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.izJ, {
        className: I.divider
      }), (0, r.jsx)(g.q4e, {
        label: E.intl.string(E.t["+dtmw8"]),
        description: E.intl.string(E.t.n8WSWF),
        value: k,
        placeholder: E.intl.string(E.t.XqMe3N),
        options: J,
        onChange: e => G(e)
      })]
    }), (0, r.jsx)(c.W, {
      component: "div",
      className: I.contentRegion,
      children: K && (0, r.jsx)(g.oXn, {
        children: (0, r.jsx)(m.Z, {
          submitting: M,
          disabled: !Y,
          onReset: () => {
            var e;
            P(a), R(null != (e = null == d ? true : d.description) ? e : ""), D(b), L(null == d ? true : d.store_page_guild_products_default_sort), G(null == d ? true : d.server_shop_tab_order)
          },
          onSave: () => {
            s()(null != d, "Settings must be defined");
            let e = {};
            w !== d.description && (e.description = w), null != Z && Z.startsWith("data:") && (e.cover_image = Z), T !== a && (e.full_server_gate = T === y.e3.ALL_CHANNELS), A !== d.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = A), k !== d.server_shop_tab_order && (e.server_shop_tab_order = k), o().isEmpty(e) || B(n.id, e)
          },
          saveButtonTooltip: Y ? true : E.intl.string(E.t["6HRvio"])
        })
      })
    })]
  })
}