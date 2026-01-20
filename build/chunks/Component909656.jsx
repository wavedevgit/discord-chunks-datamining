/** Chunk was on 9536 **/
/** chunk id: 909656, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk215569 = require("./215569.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk885387 = require("./885387.jsx"),
  Chunk477690 = require("./477690.js"),
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
  Chunk719096 = require("./719096.js");
let S = (0, Chunk624138.Mg)(Chunk477690.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);

function _(e) {
  var t;
  let {
    guild: n,
    isGuildProducts: l = false
  } = e, {
    format: s
  } = (0, y.Z)(n.id), g = (0, j.YB)(n.id), x = i.useCallback(() => {
    var e;
    return (null == g || null == (e = g.cover_image_asset) ? true : e.application_id) == null ? null : (0, h._W)(g.cover_image_asset.application_id, g.cover_image_asset, S)
  }, [g]), [_, T] = i.useState(s), [P, w] = i.useState(null != (t = null == g ? true : g.description) ? t : ""), [Z, R] = i.useState(x), [D, A] = i.useState(null == g ? true : g.store_page_guild_products_default_sort), [L, k] = i.useState(null == g ? true : g.server_shop_tab_order), {
    loading: G,
    error: M,
    updateSubscriptionsSettings: U
  } = (0, j.QV)(), {
    imageCTA: B,
    imageAriaLabel: F,
    setFilename: H
  } = (0, O.Z)(null == g ? true : g.cover_image_asset), W = (0, m.Dt)();

  function z(e, t) {
    a()(null != e, "Null value not allowed"), null != t && H(t.name), R(e)
  }
  let V = i.useMemo(() => {
      var e;
      return null != P && P !== (null != (e = null == g ? true : g.description) ? e : "") || (null == Z ? true : Z.startsWith("data:")) === true || _ !== s || (null == g ? true : g.store_page_guild_products_default_sort) !== D || (null == g ? true : g.server_shop_tab_order) !== L
    }, [Z, s, P, g, _, D, L]),
    K = null != P && "" !== P && null != Z;
  i.useEffect(() => {
    var e;
    (null == g || null == (e = g.cover_image_asset) ? true : e.application_id) != null && R((0, h._W)(g.cover_image_asset.application_id, g.cover_image_asset, S))
  }, [null == g ? true : g.cover_image_asset]);
  let Y = (0, v.mY)(),
    q = i.useMemo(() => N.kL.map(e => ({
      id: e.toString(),
      label: (0, N.eJ)(e),
      value: e
    })), []),
    X = i.useMemo(() => [{
      id: "products-first",
      label: E.intl.string(E.t.X6h2gz),
      value: N.a3.PRODUCTS_FIRST
    }, {
      id: "subs-first",
      label: E.intl.string(E.t["KzCF/6"]),
      value: N.a3.SUBS_FIRST
    }], []);
  return (0, r.jsxs)("div", {
    className: I.container,
    children: [null != M && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.M14, {
        type: "critical",
        children: M.getAnyErrorMessage()
      }), (0, r.jsx)(f.LZC, {
        size: 16
      })]
    }), l ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.FXm, {
        label: E.intl.string(E.t["PAVi++"]),
        description: E.intl.string(E.t.x87YqH),
        value: _,
        onChange: e => {
          s !== e && e === C.e3.ALL_CHANNELS && (0, u.Z)({
            title: E.intl.string(E.t.dmVoOz),
            subtitle: E.intl.string(E.t.mtwzdD),
            confirmText: E.intl.string(E.t["NX+WJN"])
          }), T(e)
        },
        disabled: Y,
        options: [{
          name: E.intl.string(E.t.rXqxhF),
          desc: E.intl.string(E.t.yQiJne),
          value: C.e3.SOME_CHANNELS,
          icon: f.VL1
        }, {
          name: E.intl.string(E.t.WzC9s6),
          desc: E.intl.string(E.t.WmagiB),
          value: C.e3.ALL_CHANNELS,
          icon: f._m8
        }]
      }), (0, r.jsx)(f.izJ, {
        className: I.divider
      })]
    }), (0, r.jsx)(f.Kx8, {
      label: E.intl.string(E.t["1+Ho1X"]),
      placeholder: l ? E.intl.string(E.t.SD6LRZ) : E.intl.string(E.t["aVhW/W"]),
      maxLength: 1500,
      value: P,
      autosize: true,
      onChange: w,
      "aria-labelledby": W,
      disabled: Y
    }), (0, r.jsx)(f.izJ, {
      className: I.divider
    }), (0, r.jsxs)(f.gNt, {
      label: E.intl.string(E.t["0kpTpM"]),
      description: E.intl.string(E.t.i2rCwT),
      children: [(0, r.jsx)(p.Z, {
        image: Z,
        hint: B,
        showIcon: true,
        showRemoveButton: false,
        hideSize: true,
        className: I.coverImageUploader,
        iconWrapperClassName: I.coverImageUploaderIconWrapper,
        imageClassName: I.coverImageUploaderInner,
        iconClassName: I.coverImageUploaderIcon,
        onChange: z,
        "aria-label": F,
        disabled: Y
      }), (0, r.jsx)(b.Z, {
        onChange: z,
        "aria-label": F,
        disabled: Y,
        text: B,
        variant: "secondary",
        size: "md"
      })]
    }), l ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.izJ, {
        className: I.divider
      }), (0, r.jsx)(f.PhF, {
        label: E.intl.string(E.t.aaZ9pE),
        description: E.intl.string(E.t.TILN8u),
        value: D,
        placeholder: E.intl.string(E.t.XqMe3N),
        options: q,
        onSelectionChange: A,
        selectionMode: "single",
        fullWidth: true
      })]
    }) : null, X.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.izJ, {
        className: I.divider
      }), (0, r.jsx)(f.PhF, {
        label: E.intl.string(E.t["+dtmw+"]),
        description: E.intl.string(E.t.n8WSWJ),
        value: L,
        placeholder: E.intl.string(E.t.XqMe3N),
        options: X,
        onSelectionChange: k,
        selectionMode: "single",
        fullWidth: true
      })]
    }), (0, r.jsx)(c.W, {
      component: "div",
      className: I.contentRegion,
      children: V && (0, r.jsx)(f.oXn, {
        children: (0, r.jsx)(d.Z, {
          submitting: G,
          disabled: !K,
          onReset: () => {
            var e;
            T(s), w(null != (e = null == g ? true : g.description) ? e : ""), R(x), A(null == g ? true : g.store_page_guild_products_default_sort), k(null == g ? true : g.server_shop_tab_order)
          },
          onSave: () => {
            a()(null != g, "Settings must be defined");
            let e = {};
            P !== g.description && (e.description = P), null != Z && Z.startsWith("data:") && (e.cover_image = Z), _ !== s && (e.full_server_gate = _ === C.e3.ALL_CHANNELS), D !== g.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = D), L !== g.server_shop_tab_order && (e.server_shop_tab_order = L), o().isEmpty(e) || U(n.id, e)
          },
          saveButtonTooltip: K ? true : E.intl.string(E.t["6HRvit"])
        })
      })
    })]
  })
}