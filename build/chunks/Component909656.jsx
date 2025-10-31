/** Chunk was on 64982 **/
/** chunk id: 909656, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk215569 = require("./215569.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk477690 = require("./477690.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk345861 = require("./345861.jsx"),
  Chunk208567 = require("./208567.jsx"),
  Chunk73346 = require("./73346.js"),
  Chunk624138 = require("./624138.js"),
  Chunk584825 = require("./584825.js"),
  Chunk723047 = require("./723047.js"),
  Chunk927954 = require("./927954.js"),
  Chunk164000 = require("./164000.js"),
  Chunk293810 = require("./293810.js"),
  Chunk333866 = require("./333866.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk858760 = require("./858760.js");
let I = (0, Chunk624138.Mg)(Chunk477690.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);

function S(e) {
  var t;
  let {
    guild: n,
    isGuildProducts: l = false
  } = e, {
    format: s
  } = (0, C.Z)(n.id), u = (0, j.YB)(n.id), x = i.useCallback(() => {
    var e;
    return (null == u || null == (e = u.cover_image_asset) ? true : e.application_id) == null ? null : (0, b._W)(u.cover_image_asset.application_id, u.cover_image_asset, I)
  }, [u]), [S, T] = i.useState(s), [P, w] = i.useState(null != (t = null == u ? true : u.description) ? t : ""), [Z, R] = i.useState(x), [D, A] = i.useState(null == u ? true : u.store_page_guild_products_default_sort), [L, k] = i.useState(null == u ? true : u.server_shop_tab_order), {
    loading: G,
    error: M,
    updateSubscriptionsSettings: U
  } = (0, j.QV)(), {
    imageCTA: B,
    imageAriaLabel: F,
    setFilename: H
  } = (0, _.Z)(null == u ? true : u.cover_image_asset), W = (0, p.Dt)();

  function z(e, t) {
    a()(null != e, "Null value not allowed"), null != t && H(t.name), R(e)
  }
  let V = i.useMemo(() => {
      var e;
      return null != P && P !== (null != (e = null == u ? true : u.description) ? e : "") || (null == Z ? true : Z.startsWith("data:")) === true || S !== s || (null == u ? true : u.store_page_guild_products_default_sort) !== D || (null == u ? true : u.server_shop_tab_order) !== L
    }, [Z, s, P, u, S, D, L]),
    K = null != P && "" !== P && null != Z;
  i.useEffect(() => {
    var e;
    (null == u || null == (e = u.cover_image_asset) ? true : e.application_id) != null && R((0, b._W)(u.cover_image_asset.application_id, u.cover_image_asset, I))
  }, [null == u ? true : u.cover_image_asset]);
  let Y = (0, v.mY)(),
    q = i.useMemo(() => y.kL.map(e => ({
      label: (0, y.eJ)(e),
      value: e
    })), []),
    X = i.useMemo(() => [{
      label: E.intl.string(E.t.X6h2gz),
      value: y.a3.PRODUCTS_FIRST
    }, {
      label: E.intl.string(E.t["KzCF/6"]),
      value: y.a3.SUBS_FIRST
    }], []);
  return (0, r.jsxs)("div", {
    className: N.container,
    children: [null != M && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.M14, {
        type: "critical",
        children: M.getAnyErrorMessage()
      }), (0, r.jsx)(m.LZC, {
        size: 16
      })]
    }), l ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.FXm, {
        label: E.intl.string(E.t["PAVi++"]),
        description: E.intl.string(E.t.x87YqH),
        value: S,
        onChange: e => {
          s !== e && e === O.e3.ALL_CHANNELS && (0, m.h7j)(e => {
            var t, n;
            return (0, r.jsx)(m.ConfirmModal, (t = function(e) {
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
              confirmText: E.intl.string(E.t["NX+WJN"]),
              confirmButtonColor: g.zx.Colors.BRAND,
              children: (0, r.jsx)(m.Text, {
                variant: "text-md/normal",
                children: E.intl.string(E.t.mtwzdD)
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
          }), T(e)
        },
        disabled: Y,
        options: [{
          name: E.intl.string(E.t.rXqxhF),
          desc: E.intl.string(E.t.yQiJne),
          value: O.e3.SOME_CHANNELS,
          icon: m.VL1
        }, {
          name: E.intl.string(E.t.WzC9s6),
          desc: E.intl.string(E.t.WmagiB),
          value: O.e3.ALL_CHANNELS,
          icon: m._m8
        }]
      }), (0, r.jsx)(m.izJ, {
        className: N.divider
      })]
    }), (0, r.jsx)(m.Kx8, {
      label: E.intl.string(E.t["1+Ho1X"]),
      placeholder: l ? E.intl.string(E.t.SD6LRZ) : E.intl.string(E.t["aVhW/W"]),
      maxLength: 1500,
      value: P,
      autosize: true,
      onChange: w,
      "aria-labelledby": W,
      disabled: Y
    }), (0, r.jsx)(m.izJ, {
      className: N.divider
    }), (0, r.jsxs)(m.gNt, {
      label: E.intl.string(E.t["0kpTpM"]),
      description: E.intl.string(E.t.i2rCwT),
      children: [(0, r.jsx)(h.Z, {
        image: Z,
        hint: B,
        showIcon: true,
        showRemoveButton: false,
        hideSize: true,
        className: N.coverImageUploader,
        iconWrapperClassName: N.coverImageUploaderIconWrapper,
        imageClassName: N.coverImageUploaderInner,
        iconClassName: N.coverImageUploaderIcon,
        onChange: z,
        "aria-label": F,
        disabled: Y
      }), (0, r.jsx)(f.Z, {
        onChange: z,
        "aria-label": F,
        disabled: Y,
        text: B,
        variant: "secondary",
        size: "md"
      })]
    }), l ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.izJ, {
        className: N.divider
      }), (0, r.jsx)(m.q4e, {
        label: E.intl.string(E.t.aaZ9pE),
        description: E.intl.string(E.t.TILN8u),
        value: D,
        placeholder: E.intl.string(E.t.XqMe3N),
        options: q,
        onChange: e => A(e)
      })]
    }) : null, X.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.izJ, {
        className: N.divider
      }), (0, r.jsx)(m.q4e, {
        label: E.intl.string(E.t["+dtmw+"]),
        description: E.intl.string(E.t.n8WSWJ),
        value: L,
        placeholder: E.intl.string(E.t.XqMe3N),
        options: X,
        onChange: e => k(e)
      })]
    }), (0, r.jsx)(c.W, {
      component: "div",
      className: N.contentRegion,
      children: V && (0, r.jsx)(m.oXn, {
        children: (0, r.jsx)(d.Z, {
          submitting: G,
          disabled: !K,
          onReset: () => {
            var e;
            T(s), w(null != (e = null == u ? true : u.description) ? e : ""), R(x), A(null == u ? true : u.store_page_guild_products_default_sort), k(null == u ? true : u.server_shop_tab_order)
          },
          onSave: () => {
            a()(null != u, "Settings must be defined");
            let e = {};
            P !== u.description && (e.description = P), null != Z && Z.startsWith("data:") && (e.cover_image = Z), S !== s && (e.full_server_gate = S === O.e3.ALL_CHANNELS), D !== u.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = D), L !== u.server_shop_tab_order && (e.server_shop_tab_order = L), o().isEmpty(e) || U(n.id, e)
          },
          saveButtonTooltip: K ? true : E.intl.string(E.t["6HRvit"])
        })
      })
    })]
  })
}