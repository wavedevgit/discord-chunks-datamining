/** Chunk was on web.js **/
/** chunk id: 637141, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => C
}), require("./65821.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk843282 = require("./843282.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk887555 = require("./887555.js"),
  Chunk812745 = require("./812745.jsx"),
  Chunk202613 = require("./202613.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk101541 = require("./101541.js");
let y = "***@***.***",
  b = "****",
  O = "***",
  v = "new_payment_source_id",
  A = new Chunk202613.YS({
    id: v,
    brand: Chunk812745.Ay.Types.UNKNOWN,
    type: Chunk652215.hes.CARD
  });

function I(e, t) {
  if (e instanceof p.YS) return e.id === v ? {
    brand: null,
    label: g.intl.string(g.t.eQ2bLp)
  } : {
    brand: t ? f.Ay.Types.UNKNOWN : e.brand,
    label: g.intl.formatToPlainString(g.t.QvBAQk, {
      last4: t ? b : e.last4
    })
  };
  if (e instanceof p.SJ) return {
    brand: f.Ay.Types.PAYPAL,
    label: t ? y : e.email
  };
  if (e instanceof p.A0) return {
    brand: f.Ay.Types.SOFORT,
    label: t ? y : e.email
  };
  if (e instanceof p.Qh) return {
    brand: f.Ay.Types.GIROPAY,
    label: g.intl.string(g.t["y+0MQZ"])
  };
  if (e instanceof p.Tu) return {
    brand: f.Ay.Types.PRZELEWY24,
    label: t ? y : e.email
  };
  else if (e instanceof p.Ux) return {
    brand: f.Ay.Types.PAYSAFECARD,
    label: g.intl.string(g.t.e3APTT)
  };
  else if (e instanceof p.F_) return {
    brand: f.Ay.Types.GCASH,
    label: g.intl.string(g.t.PjehcF)
  };
  else if (e instanceof p.Xj) return {
    brand: f.Ay.Types.GRABPAY,
    label: g.intl.string(g.t.T5davE)
  };
  else if (e instanceof p.am) return {
    brand: f.Ay.Types.MOMO_WALLET,
    label: g.intl.string(g.t.J0A1Vk)
  };
  else if (e instanceof p._1) return {
    brand: f.Ay.Types.VENMO,
    label: t ? O : "@" + e.username
  };
  else if (e instanceof p.i6) return {
    brand: f.Ay.Types.KAKAOPAY,
    label: g.intl.string(g.t.CSVexi)
  };
  else if (e instanceof p.cg) return {
    brand: f.Ay.Types.GOPAY_WALLET,
    label: g.intl.string(g.t["43J8JK"])
  };
  else if (e instanceof p.UG) return {
    brand: f.Ay.Types.BANCONTACT,
    label: g.intl.string(g.t["1ITkfq"])
  };
  else if (e instanceof p.rJ) return {
    brand: f.Ay.Types.EPS,
    label: g.intl.format(g.t.hSPoZw, {
      bank: (0, d.jK)(e.bank)
    })
  };
  else if (e instanceof p.EE) return {
    brand: f.Ay.Types.IDEAL,
    label: null == e.bank ? g.intl.string(g.t.nSbwqC) : g.intl.format(g.t["9kUlRU"], {
      bank: (0, d.o0)(e.bank)
    })
  };
  else if (e instanceof p.FQ) return {
    brand: f.Ay.Types.CASH_APP,
    label: t ? O : e.username
  };
  throw Error("Invalid Payment Source")
}

function S(e, t, n) {
  if (t.value === v) return (0, r.jsx)("div", {
    className: E.wC,
    children: t.label
  });
  if (null != e) {
    let {
      brand: t,
      label: i
    } = I(e, n);
    return (0, r.jsxs)("div", {
      className: E.IF,
      children: [null != t ? (0, r.jsx)(f.Ay, {
        type: f.Ay.getType(t)
      }) : null, (0, r.jsx)("div", {
        className: s()(E.wC, {
          [E.z3]: e.invalid
        }),
        children: i
      })]
    })
  }
  return (0, r.jsx)("div", {
    className: E.wC,
    children: t.label
  })
}

function T(e, t) {
  let n = null;
  return e && null != t && !t.canRedeemTrial() ? n = g.intl.string(g.t.SvheW9) : e && null != t && t.hasFlag(m.rI.NEW) && (n = g.intl.format(g.t.d7ZLKA, {
    helpDeskArticle: _.A.getArticleURL(h.MVz.PAYMENT_AUTHORIZATION_CHARGE)
  })), n
}

function C(e) {
  let {
    label: t,
    selectedPaymentSourceId: n,
    paymentSources: a,
    prependOption: d,
    hidePersonalInformation: f,
    onChange: _,
    onPaymentSourceAdd: h,
    isTrial: m = false,
    disabled: y = false,
    className: b,
    optionClassName: O,
    dropdownLoading: C,
    paymentGatewayRestrictions: N
  } = e, R = 0 === a.length, w = e => {
    if (e === v) null != h && h();
    else {
      let t = a.find(t => t.id === e);
      null != _ && _(t)
    }
  }, P = [...null != d ? [d] : [], ...a, A].map((e, t) => {
    if (e instanceof p.Ay) {
      let {
        label: t
      } = I(e, f), n = e === A || null == N || (null == N ? true : N.includes(e.paymentGateway));
      return {
        value: e.id,
        label: t,
        disabled: !n
      }
    }
    return {
      key: t,
      value: e.value,
      label: e.label
    }
  }), D = i.useMemo(() => new Map(a.map(e => [e.id, e])), [a]), x = T(m, i.useMemo(() => a.find(e => e.id === n), [a, n]));
  if (null == n && null != N && N.length > 0) {
    let e = a.filter(e => N.includes(e.paymentGateway));
    n = 0 === e.length ? v : e[0].id
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [R ? (0, r.jsx)(c.$nd, {
      variant: "primary",
      fullWidth: true,
      onClick: h,
      text: g.intl.string(g.t.eQ2bLp)
    }) : (0, r.jsx)(l.Te, {
      options: P,
      value: n,
      label: t,
      onChange: w,
      isDisabled: y,
      className: s()({
        [E.uQ]: null != x
      }, b),
      optionClassName: O,
      placeholder: g.intl.string(g.t["8lqkf8"]),
      renderOptionValue: e => {
        let [t] = e;
        return C ? (0, r.jsx)(u.y$y, {
          type: u.tVU.SPINNING_CIRCLE
        }) : S(null == t.value ? true : D.get(t.value), t, f)
      },
      renderOptionLabel: e => S(null == e.value ? true : D.get(e.value), e, f),
      "data-migration-pending": true
    }), null != x ? (0, r.jsxs)("div", {
      className: E.ot,
      children: [(0, r.jsx)(u.EpV, {
        size: "custom",
        width: 20,
        height: 20,
        className: E.fT,
        color: o.A.unsafe_rawColors.YELLOW_300.css
      }), (0, r.jsx)(u.Text, {
        variant: "text-xs/normal",
        children: x
      })]
    }) : null]
  })
}