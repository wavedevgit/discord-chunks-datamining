/** Chunk was on 9536 **/
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
  Chunk719096 = require("./719096.js");
let _ = (0, Chunk624138.Mg)(Chunk477690.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);

function T(e) {
  var t;
  let {
    guild: n,
    isGuildProducts: l = false
  } = e, {
    format: s
  } = (0, C.Z)(n.id), m = (0, v.YB)(n.id), j = i.useCallback(() => {
    var e;
    return (null == m || null == (e = m.cover_image_asset) ? true : e.application_id) == null ? null : (0, x._W)(m.cover_image_asset.application_id, m.cover_image_asset, _)
  }, [m]), [T, P] = i.useState(s), [w, Z] = i.useState(null != (t = null == m ? true : m.description) ? t : ""), [R, D] = i.useState(j), [A, L] = i.useState(null == m ? true : m.store_page_guild_products_default_sort), [k, G] = i.useState(null == m ? true : m.server_shop_tab_order), {
    loading: M,
    error: U,
    updateSubscriptionsSettings: B
  } = (0, v.QV)(), {
    imageCTA: F,
    imageAriaLabel: H,
    setFilename: W
  } = (0, y.Z)(null == m ? true : m.cover_image_asset), z = (0, b.Dt)();

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
    (null == m || null == (e = m.cover_image_asset) ? true : e.application_id) != null && D((0, x._W)(m.cover_image_asset.application_id, m.cover_image_asset, _))
  }, [null == m ? true : m.cover_image_asset]);
  let q = (0, O.mY)(),
    X = i.useMemo(() => E.kL.map(e => ({
      label: (0, E.eJ)(e),
      value: e
    })), []),
    J = i.useMemo(() => [{
      label: I.intl.string(I.t.X6h2gz),
      value: E.a3.PRODUCTS_FIRST
    }, {
      label: I.intl.string(I.t["KzCF/6"]),
      value: E.a3.SUBS_FIRST
    }], []);
  return (0, r.jsxs)("div", {
    className: S.container,
    children: [null != U && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.M14, {
        type: "critical",
        children: U.getAnyErrorMessage()
      }), (0, r.jsx)(f.LZC, {
        size: 16
      })]
    }), l ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.FXm, {
        label: I.intl.string(I.t["PAVi++"]),
        description: I.intl.string(I.t.x87YqH),
        value: T,
        onChange: e => {
          s !== e && e === N.e3.ALL_CHANNELS && (0, g.Z)({
            title: I.intl.string(I.t.dmVoOz),
            subtitle: I.intl.string(I.t.mtwzdD),
            confirmText: I.intl.string(I.t["NX+WJN"])
          }), P(e)
        },
        disabled: q,
        options: [{
          name: I.intl.string(I.t.rXqxhF),
          desc: I.intl.string(I.t.yQiJne),
          value: N.e3.SOME_CHANNELS,
          icon: f.VL1
        }, {
          name: I.intl.string(I.t.WzC9s6),
          desc: I.intl.string(I.t.WmagiB),
          value: N.e3.ALL_CHANNELS,
          icon: f._m8
        }]
      }), (0, r.jsx)(f.izJ, {
        className: S.divider
      })]
    }), (0, r.jsx)(f.Kx8, {
      label: I.intl.string(I.t["1+Ho1X"]),
      placeholder: l ? I.intl.string(I.t.SD6LRZ) : I.intl.string(I.t["aVhW/W"]),
      maxLength: 1500,
      value: w,
      autosize: true,
      onChange: Z,
      "aria-labelledby": z,
      disabled: q
    }), (0, r.jsx)(f.izJ, {
      className: S.divider
    }), (0, r.jsxs)(f.gNt, {
      label: I.intl.string(I.t["0kpTpM"]),
      description: I.intl.string(I.t.i2rCwT),
      children: [(0, r.jsx)(h.Z, {
        image: R,
        hint: F,
        showIcon: true,
        showRemoveButton: false,
        hideSize: true,
        className: S.coverImageUploader,
        iconWrapperClassName: S.coverImageUploaderIconWrapper,
        imageClassName: S.coverImageUploaderInner,
        iconClassName: S.coverImageUploaderIcon,
        onChange: V,
        "aria-label": H,
        disabled: q
      }), (0, r.jsx)(p.Z, {
        onChange: V,
        "aria-label": H,
        disabled: q,
        text: F,
        variant: "secondary",
        size: "md"
      })]
    }), l ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.izJ, {
        className: S.divider
      }), (0, r.jsx)(u.y6, {
        label: I.intl.string(I.t.aaZ9pE),
        description: I.intl.string(I.t.TILN8u),
        value: A,
        placeholder: I.intl.string(I.t.XqMe3N),
        options: X,
        onChange: e => L(e)
      })]
    }) : null, J.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.izJ, {
        className: S.divider
      }), (0, r.jsx)(u.y6, {
        label: I.intl.string(I.t["+dtmw+"]),
        description: I.intl.string(I.t.n8WSWJ),
        value: k,
        placeholder: I.intl.string(I.t.XqMe3N),
        options: J,
        onChange: e => G(e)
      })]
    }), (0, r.jsx)(c.W, {
      component: "div",
      className: S.contentRegion,
      children: K && (0, r.jsx)(f.oXn, {
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
            w !== m.description && (e.description = w), null != R && R.startsWith("data:") && (e.cover_image = R), T !== s && (e.full_server_gate = T === N.e3.ALL_CHANNELS), A !== m.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = A), k !== m.server_shop_tab_order && (e.server_shop_tab_order = k), o().isEmpty(e) || B(n.id, e)
          },
          saveButtonTooltip: Y ? true : I.intl.string(I.t["6HRvit"])
        })
      })
    })]
  })
}