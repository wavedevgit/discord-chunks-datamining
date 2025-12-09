/** Chunk was on 384 **/
/** chunk id: 909656, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk215569 = require("./215569.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk199849 = require("./199849.jsx"),
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
  Chunk858760 = require("./858760.js");
let S = (0, Chunk624138.Mg)(Chunk477690.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);

function T(e) {
  var t;
  let {
    guild: n,
    isGuildProducts: l = false
  } = e, {
    format: s
  } = (0, C.Z)(n.id), m = (0, _.YB)(n.id), j = i.useCallback(() => {
    var e;
    return (null == m || null == (e = m.cover_image_asset) ? true : e.application_id) == null ? null : (0, x._W)(m.cover_image_asset.application_id, m.cover_image_asset, S)
  }, [m]), [T, P] = i.useState(s), [w, Z] = i.useState(null != (t = null == m ? true : m.description) ? t : ""), [R, D] = i.useState(j), [A, L] = i.useState(null == m ? true : m.store_page_guild_products_default_sort), [k, G] = i.useState(null == m ? true : m.server_shop_tab_order), {
    loading: M,
    error: U,
    updateSubscriptionsSettings: B
  } = (0, _.QV)(), {
    imageCTA: F,
    imageAriaLabel: H,
    setFilename: W
  } = (0, O.Z)(null == m ? true : m.cover_image_asset), z = (0, f.Dt)();

  function V(e, t) {
    a()(null != e, "Null value not allowed"), null != t && W(t.name), D(e)
  }
  let K = i.useMemo(() => {
      var e;
      return null != w && w !== (null != (e = null == m ? true : m.description) ? e : "") || (null == R ? true : R.startsWith("data:")) === true || T !== s || (null == m ? true : m.store_page_guild_products_default_sort) !== A || (null == m ? true : m.server_shop_tab_order) !== k
    }, [R, s, w, m, T, A, k]),
    Y = null != w && "" !== w && null != R;
  i.useEffect(() => {
    var e;
    (null == m || null == (e = m.cover_image_asset) ? true : e.application_id) != null && D((0, x._W)(m.cover_image_asset.application_id, m.cover_image_asset, S))
  }, [null == m ? true : m.cover_image_asset]);
  let q = (0, v.mY)(),
    X = i.useMemo(() => N.kL.map(e => ({
      label: (0, N.eJ)(e),
      value: e
    })), []),
    J = i.useMemo(() => [{
      label: E.intl.string(E.t.X6h2gz),
      value: N.a3.PRODUCTS_FIRST
    }, {
      label: E.intl.string(E.t["KzCF/6"]),
      value: N.a3.SUBS_FIRST
    }], []);
  return (0, r.jsxs)("div", {
    className: I.container,
    children: [null != U && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.M14, {
        type: "critical",
        children: U.getAnyErrorMessage()
      }), (0, r.jsx)(p.LZC, {
        size: 16
      })]
    }), l ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.FXm, {
        label: E.intl.string(E.t["PAVi++"]),
        description: E.intl.string(E.t.x87YqH),
        value: T,
        onChange: e => {
          s !== e && e === y.e3.ALL_CHANNELS && (0, g.Z)({
            title: E.intl.string(E.t.dmVoOz),
            subtitle: E.intl.string(E.t.mtwzdD),
            confirmText: E.intl.string(E.t["NX+WJN"])
          }), P(e)
        },
        disabled: q,
        options: [{
          name: E.intl.string(E.t.rXqxhF),
          desc: E.intl.string(E.t.yQiJne),
          value: y.e3.SOME_CHANNELS,
          icon: p.VL1
        }, {
          name: E.intl.string(E.t.WzC9s6),
          desc: E.intl.string(E.t.WmagiB),
          value: y.e3.ALL_CHANNELS,
          icon: p._m8
        }]
      }), (0, r.jsx)(p.izJ, {
        className: I.divider
      })]
    }), (0, r.jsx)(p.Kx8, {
      label: E.intl.string(E.t["1+Ho1X"]),
      placeholder: l ? E.intl.string(E.t.SD6LRZ) : E.intl.string(E.t["aVhW/W"]),
      maxLength: 1500,
      value: w,
      autosize: true,
      onChange: Z,
      "aria-labelledby": z,
      disabled: q
    }), (0, r.jsx)(p.izJ, {
      className: I.divider
    }), (0, r.jsxs)(p.gNt, {
      label: E.intl.string(E.t["0kpTpM"]),
      description: E.intl.string(E.t.i2rCwT),
      children: [(0, r.jsx)(b.Z, {
        image: R,
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
      }), (0, r.jsx)(h.Z, {
        onChange: V,
        "aria-label": H,
        disabled: q,
        text: F,
        variant: "secondary",
        size: "md"
      })]
    }), l ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.izJ, {
        className: I.divider
      }), (0, r.jsx)(u.y6, {
        label: E.intl.string(E.t.aaZ9pE),
        description: E.intl.string(E.t.TILN8u),
        value: A,
        placeholder: E.intl.string(E.t.XqMe3N),
        options: X,
        onChange: e => L(e)
      })]
    }) : null, J.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.izJ, {
        className: I.divider
      }), (0, r.jsx)(u.y6, {
        label: E.intl.string(E.t["+dtmw+"]),
        description: E.intl.string(E.t.n8WSWJ),
        value: k,
        placeholder: E.intl.string(E.t.XqMe3N),
        options: J,
        onChange: e => G(e)
      })]
    }), (0, r.jsx)(c.W, {
      component: "div",
      className: I.contentRegion,
      children: K && (0, r.jsx)(p.oXn, {
        children: (0, r.jsx)(d.Z, {
          submitting: M,
          disabled: !Y,
          onReset: () => {
            var e;
            P(s), Z(null != (e = null == m ? true : m.description) ? e : ""), D(j), L(null == m ? true : m.store_page_guild_products_default_sort), G(null == m ? true : m.server_shop_tab_order)
          },
          onSave: () => {
            a()(null != m, "Settings must be defined");
            let e = {};
            w !== m.description && (e.description = w), null != R && R.startsWith("data:") && (e.cover_image = R), T !== s && (e.full_server_gate = T === y.e3.ALL_CHANNELS), A !== m.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = A), k !== m.server_shop_tab_order && (e.server_shop_tab_order = k), o().isEmpty(e) || B(n.id, e)
          },
          saveButtonTooltip: Y ? true : E.intl.string(E.t["6HRvit"])
        })
      })
    })]
  })
}