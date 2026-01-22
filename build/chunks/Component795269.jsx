/** Chunk was on web.js **/
/** chunk id: 795269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Lj: () => m,
  R: () => _,
  at: () => p,
  ir: () => h,
  rm: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk511484 = require("./511484.js"),
  Chunk349563 = require("./349563.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk639179 = require("./639179.js"),
  p = function(e) {
    return e[e.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", e[e.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", e[e.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", e[e.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", e[e.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", e[e.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE", e[e.PREMIUM_TIER_2_GREY_FILL = 6] = "PREMIUM_TIER_2_GREY_FILL", e[e.PREMIUM_TIER_2_MOD_BACKGROUND_FILL = 7] = "PREMIUM_TIER_2_MOD_BACKGROUND_FILL", e
  }({});

function _(e) {
  let {
    text: t,
    className: n,
    colorOptions: i = 2,
    icon: s,
    gap: l = true
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(n, f.Yu, {
      [f.XW]: 1 === i,
      [f.Rc]: 3 === i,
      [f.WY]: 4 === i,
      [f.mY]: 5 === i,
      [f.ZC]: 6 === i,
      [f.u0]: 7 === i,
      [f._p]: l
    }),
    children: [(0, r.jsx)(o.Text, {
      variant: "text-xs/bold",
      className: a()(f.xG, {
        [f.wV]: 0 !== i && 2 !== i,
        [f.Xm]: 0 === i,
        [f.X3]: 2 === i || 6 === i,
        [f.kC]: 7 === i
      }),
      children: t
    }), s]
  })
}

function h(e) {
  let t, {
    text: n,
    className: i,
    colorOptions: o = 2,
    isPillOnBorder: l = true
  } = e;
  switch (o) {
    case 1:
      t = s.A.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
      break;
    case 3:
      t = "url(#".concat(c.Bp, ")");
      break;
    case 4:
    case 5:
      t = "url(#".concat(c.G5, ")");
      break;
    default:
      t = "white"
  }
  return l ? (0, r.jsxs)("div", {
    className: a()(i, f.ls),
    children: [(0, r.jsx)(c.zF, {
      foreground: f.QX,
      color: t
    }), (0, r.jsx)(c.zF, {
      foreground: f.J0,
      color: t
    }), (0, r.jsx)(c.zF, {
      foreground: f.QC,
      color: t
    }), (0, r.jsx)(_, {
      text: n,
      colorOptions: o
    }), (0, r.jsx)(c.zF, {
      foreground: f.JF,
      color: t
    }), (0, r.jsx)(c.zF, {
      foreground: f.Cm,
      color: t
    })]
  }) : (0, r.jsxs)("div", {
    className: a()(i, f.ls),
    children: [(0, r.jsx)(_, {
      text: n,
      colorOptions: o
    }), (0, r.jsx)(c.zF, {
      foreground: f.QX,
      style: {
        marginLeft: 4,
        marginBottom: false
      },
      color: t
    }), (0, r.jsx)(c.zF, {
      foreground: f.J0,
      color: t
    })]
  })
}

function m(e, t) {
  return t === u.pe.TIER_0 ? d.intl.string(d.t.IBYG5U) : e === u.PremiumTypes.TIER_0 ? d.intl.string(d.t.qYKftX) : null
}

function g(e, t, n, r, i) {
  if (null != n && (0, l.U9)(n, u.pe.TIER_2) && true !== n.discount.amount) return e ? d.intl.string(d.t.EyjDRE) : d.intl.formatToPlainString(d.t.iiLbvu, {
    percent: n.discount.amount
  });
  if (i === u.pe.TIER_2) {
    let e = d.intl.string(d.t.IBYG5U);
    return (null == r ? true : r.trial_id) === u.Dw && (e = d.intl.string(d.t.gtNqJQ)), e
  }
  return t === u.PremiumTypes.TIER_2 ? d.intl.string(d.t.qYKftX) : e ? d.intl.string(d.t.EyjDRE) : null
}