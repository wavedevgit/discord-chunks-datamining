/** Chunk was on 47841 **/
/** chunk id: 623529, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk73939 = require("./73939.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk139033 = require("./139033.jsx"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk405810 = require("./405810.jsx"),
  Chunk342298 = require("./342298.jsx"),
  Chunk371794 = require("./371794.js"),
  Chunk240248 = require("./240248.js"),
  Chunk599941 = require("./599941.js"),
  Chunk11351 = require("./11351.js"),
  Chunk996507 = require("./996507.js"),
  Chunk389025 = require("./389025.js"),
  Chunk2242 = require("./2242.js"),
  Chunk284683 = require("./284683.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk941769 = require("./941769.js");
let S = (0, Chunk240248.xI)(Chunk319060.A.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);

function I(e) {
  var t;
  let {
    guild: n,
    isGuildProducts: l = false
  } = e, {
    format: a
  } = (0, v.A)(n.id), g = (0, j.Tq)(n.id), x = i.useCallback(() => {
    var e;
    return (null == g || null == (e = g.cover_image_asset) ? true : e.application_id) == null ? null : (0, h.YE)(g.cover_image_asset.application_id, g.cover_image_asset, S)
  }, [g]), [I, T] = i.useState(a), [C, P] = i.useState(null != (t = null == g ? true : g.description) ? t : ""), [w, R] = i.useState(x), [D, G] = i.useState(null == g ? true : g.store_page_guild_products_default_sort), [L, k] = i.useState(null == g ? true : g.server_shop_tab_order), {
    loading: M,
    error: U,
    updateSubscriptionsSettings: B
  } = (0, j.KE)(), {
    imageCTA: F,
    imageAriaLabel: H,
    setFilename: V
  } = (0, O.A)(null == g ? true : g.cover_image_asset), K = (0, p.GV)();

  function z(e, t) {
    s()(null != e, "Null value not allowed"), null != t && V(t.name), R(e)
  }
  let W = i.useMemo(() => {
      var e;
      return null != C && C !== (null != (e = null == g ? true : g.description) ? e : "") || (null == w ? true : w.startsWith("data:")) === true || I !== a || (null == g ? true : g.store_page_guild_products_default_sort) !== D || (null == g ? true : g.server_shop_tab_order) !== L
    }, [w, a, C, g, I, D, L]),
    Y = null != C && "" !== C && null != w;
  i.useEffect(() => {
    var e;
    (null == g || null == (e = g.cover_image_asset) ? true : e.application_id) != null && R((0, h.YE)(g.cover_image_asset.application_id, g.cover_image_asset, S))
  }, [null == g ? true : g.cover_image_asset]);
  let X = (0, _.gN)(),
    J = i.useMemo(() => A.aq.map(e => ({
      id: e.toString(),
      label: (0, A.Ac)(e),
      value: e
    })), []),
    Z = i.useMemo(() => [{
      id: "products-first",
      label: E.intl.string(E.t.X6h2gz),
      value: A.HA.PRODUCTS_FIRST
    }, {
      id: "subs-first",
      label: E.intl.string(E.t["KzCF/6"]),
      value: A.HA.SUBS_FIRST
    }], []);
  return (0, r.jsxs)("div", {
    className: N.kL,
    children: [null != U && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.wx6, {
        type: "critical",
        children: U.getAnyErrorMessage()
      }), (0, r.jsx)(m.hKd, {
        size: 16
      })]
    }), l ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.z6M, {
        label: E.intl.string(E.t["PAVi++"]),
        description: E.intl.string(E.t.x87YqH),
        value: I,
        onChange: e => {
          a !== e && e === y.c4.ALL_CHANNELS && (0, u.A)({
            title: E.intl.string(E.t.dmVoOz),
            subtitle: E.intl.string(E.t.mtwzdD),
            confirmText: E.intl.string(E.t["NX+WJN"])
          }), T(e)
        },
        disabled: X,
        options: [{
          name: E.intl.string(E.t.rXqxhF),
          desc: E.intl.string(E.t.yQiJne),
          value: y.c4.SOME_CHANNELS,
          icon: m.N$i
        }, {
          name: E.intl.string(E.t.WzC9s6),
          desc: E.intl.string(E.t.WmagiB),
          value: y.c4.ALL_CHANNELS,
          icon: m.RYV
        }]
      }), (0, r.jsx)(m.cGx, {
        className: N.yF
      })]
    }), (0, r.jsx)(m.fs1, {
      label: E.intl.string(E.t["1+Ho1X"]),
      placeholder: l ? E.intl.string(E.t.SD6LRZ) : E.intl.string(E.t["aVhW/W"]),
      maxLength: 1500,
      value: C,
      autosize: true,
      onChange: P,
      "aria-labelledby": K,
      disabled: X
    }), (0, r.jsx)(m.cGx, {
      className: N.yF
    }), (0, r.jsxs)(m.D0$, {
      label: E.intl.string(E.t["0kpTpM"]),
      description: E.intl.string(E.t.i2rCwT),
      children: [(0, r.jsx)(b.A, {
        image: w,
        hint: F,
        showIcon: true,
        showRemoveButton: false,
        hideSize: true,
        className: N.bm,
        iconWrapperClassName: N.RU,
        imageClassName: N.$B,
        iconClassName: N.S$,
        onChange: z,
        "aria-label": H,
        disabled: X
      }), (0, r.jsx)(f.A, {
        onChange: z,
        "aria-label": H,
        disabled: X,
        text: F,
        variant: "secondary",
        size: "md"
      })]
    }), l ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.cGx, {
        className: N.yF
      }), (0, r.jsx)(m.l6P, {
        label: E.intl.string(E.t.aaZ9pE),
        description: E.intl.string(E.t.TILN8u),
        value: D,
        placeholder: E.intl.string(E.t.XqMe3N),
        options: J,
        onSelectionChange: G,
        selectionMode: "single",
        fullWidth: true
      })]
    }) : null, Z.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.cGx, {
        className: N.yF
      }), (0, r.jsx)(m.l6P, {
        label: E.intl.string(E.t["+dtmw+"]),
        description: E.intl.string(E.t.n8WSWJ),
        value: L,
        placeholder: E.intl.string(E.t.XqMe3N),
        options: Z,
        onSelectionChange: k,
        selectionMode: "single",
        fullWidth: true
      })]
    }), (0, r.jsx)(c.F, {
      component: "div",
      className: N.se,
      children: W && (0, r.jsx)(m.FQk, {
        children: (0, r.jsx)(d.A, {
          submitting: M,
          disabled: !Y,
          onReset: () => {
            var e;
            T(a), P(null != (e = null == g ? true : g.description) ? e : ""), R(x), G(null == g ? true : g.store_page_guild_products_default_sort), k(null == g ? true : g.server_shop_tab_order)
          },
          onSave: () => {
            s()(null != g, "Settings must be defined");
            let e = {};
            C !== g.description && (e.description = C), null != w && w.startsWith("data:") && (e.cover_image = w), I !== a && (e.full_server_gate = I === y.c4.ALL_CHANNELS), D !== g.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = D), L !== g.server_shop_tab_order && (e.server_shop_tab_order = L), o().isEmpty(e) || B(n.id, e)
          },
          saveButtonTooltip: Y ? true : E.intl.string(E.t["6HRvit"])
        })
      })
    })]
  })
}