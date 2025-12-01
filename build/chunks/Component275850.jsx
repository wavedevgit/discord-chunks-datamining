/** Chunk was on web.js **/
/** chunk id: 275850, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => A
}), require("./415506.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk987032 = require("./987032.js"),
  Chunk219929 = require("./219929.jsx"),
  Chunk46141 = require("./46141.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk171609 = require("./171609.js");
let E = "***@***.***",
  b = "****",
  y = "***",
  O = "new_payment_source_id",
  v = new Chunk46141.dm({
    id: O,
    brand: Chunk219929.ZP.Types.UNKNOWN,
    type: Chunk981631.HeQ.CARD
  });

function S(e, t) {
  if (e instanceof f.dm) return e.id === O ? {
    brand: null,
    label: h.intl.string(h.t.eQ2bLp)
  } : {
    brand: t ? d.ZP.Types.UNKNOWN : e.brand,
    label: h.intl.formatToPlainString(h.t.QvBAQk, {
      last4: t ? b : e.last4
    })
  };
  if (e instanceof f.qo) return {
    brand: d.ZP.Types.PAYPAL,
    label: t ? E : e.email
  };
  if (e instanceof f.Sf) return {
    brand: d.ZP.Types.SOFORT,
    label: t ? E : e.email
  };
  if (e instanceof f.fv) return {
    brand: d.ZP.Types.GIROPAY,
    label: h.intl.string(h.t["y+0MQZ"])
  };
  if (e instanceof f.Vg) return {
    brand: d.ZP.Types.PRZELEWY24,
    label: t ? E : e.email
  };
  else if (e instanceof f.sn) return {
    brand: d.ZP.Types.PAYSAFECARD,
    label: h.intl.string(h.t.e3APTT)
  };
  else if (e instanceof f.o_) return {
    brand: d.ZP.Types.GCASH,
    label: h.intl.string(h.t.PjehcF)
  };
  else if (e instanceof f.kX) return {
    brand: d.ZP.Types.GRABPAY,
    label: h.intl.string(h.t.T5davE)
  };
  else if (e instanceof f.z) return {
    brand: d.ZP.Types.MOMO_WALLET,
    label: h.intl.string(h.t.J0A1Vk)
  };
  else if (e instanceof f.Xc) return {
    brand: d.ZP.Types.VENMO,
    label: t ? y : "@" + e.username
  };
  else if (e instanceof f.Om) return {
    brand: d.ZP.Types.KAKAOPAY,
    label: h.intl.string(h.t.CSVexi)
  };
  else if (e instanceof f.JC) return {
    brand: d.ZP.Types.GOPAY_WALLET,
    label: h.intl.string(h.t["43J8JK"])
  };
  else if (e instanceof f.U4) return {
    brand: d.ZP.Types.BANCONTACT,
    label: h.intl.string(h.t["1ITkfq"])
  };
  else if (e instanceof f.D0) return {
    brand: d.ZP.Types.EPS,
    label: h.intl.format(h.t.hSPoZw, {
      bank: (0, u.Ul)(e.bank)
    })
  };
  else if (e instanceof f.jc) return {
    brand: d.ZP.Types.IDEAL,
    label: null == e.bank ? h.intl.string(h.t.nSbwqC) : h.intl.format(h.t["9kUlRU"], {
      bank: (0, u.YE)(e.bank)
    })
  };
  else if (e instanceof f.u_) return {
    brand: d.ZP.Types.CASH_APP,
    label: t ? y : e.username
  };
  throw Error("Invalid Payment Source")
}

function I(e, t, n) {
  if (t.value === O) return (0, r.jsx)("div", {
    className: g.paymentSourceLabel,
    children: t.label
  });
  if (null != e) {
    let {
      brand: t,
      label: i
    } = S(e, n);
    return (0, r.jsxs)("div", {
      className: g.paymentSourceSelectedOption,
      children: [null != t ? (0, r.jsx)(d.ZP, {
        type: d.ZP.getType(t)
      }) : null, (0, r.jsx)("div", {
        className: o()(g.paymentSourceLabel, {
          [g.error]: e.invalid
        }),
        children: i
      })]
    })
  }
  return (0, r.jsx)("div", {
    className: g.paymentSourceLabel,
    children: t.label
  })
}

function T(e, t) {
  let n = null;
  return e && null != t && !t.canRedeemTrial() ? n = h.intl.string(h.t.SvheW9) : e && null != t && t.hasFlag(m.Cw.NEW) && (n = h.intl.format(h.t.d7ZLKA, {
    helpDeskArticle: p.Z.getArticleURL(_.BhN.PAYMENT_AUTHORIZATION_CHARGE)
  })), n
}

function A(e) {
  let {
    label: t,
    selectedPaymentSourceId: n,
    paymentSources: a,
    prependOption: u,
    hidePersonalInformation: d,
    onChange: p,
    onPaymentSourceAdd: _,
    isTrial: m = false,
    disabled: E = false,
    className: b,
    optionClassName: y,
    dropdownLoading: A,
    paymentGatewayRestrictions: C
  } = e, N = 0 === a.length, P = e => {
    if (e === O) null != _ && _();
    else {
      let t = a.find(t => t.id === e);
      null != p && p(t)
    }
  }, R = [...null != u ? [u] : [], ...a, v].map((e, t) => {
    if (e instanceof f.ZP) {
      let {
        label: t
      } = S(e, d), n = e === v || null == C || (null == C ? true : C.includes(e.paymentGateway));
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
  }), w = i.useMemo(() => new Map(a.map(e => [e.id, e])), [a]), D = T(m, i.useMemo(() => a.find(e => e.id === n), [a, n]));
  if (null == n && null != C && C.length > 0) {
    let e = a.filter(e => C.includes(e.paymentGateway));
    n = 0 === e.length ? O : e[0].id
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [N ? (0, r.jsx)(l.zxk, {
      variant: "primary",
      fullWidth: true,
      onClick: _,
      text: h.intl.string(h.t.eQ2bLp)
    }) : (0, r.jsx)(c.q4e, {
      options: R,
      value: n,
      label: t,
      onChange: P,
      isDisabled: E,
      className: o()({
        [g.paymentSourceHasWarning]: null != D
      }, b),
      optionClassName: y,
      placeholder: h.intl.string(h.t["8lqkf8"]),
      renderOptionValue: e => {
        let [t] = e;
        return A ? (0, r.jsx)(c.$jN, {
          type: c.RAz.SPINNING_CIRCLE
        }) : I(null == t.value ? true : w.get(t.value), t, d)
      },
      renderOptionLabel: e => I(null == e.value ? true : w.get(e.value), e, d)
    }), null != D ? (0, r.jsxs)("div", {
      className: g.paymentSourceWarning,
      children: [(0, r.jsx)(c.Mgn, {
        size: "custom",
        width: 20,
        height: 20,
        className: g.paymentSourceWarningIcon,
        color: s.Z.unsafe_rawColors.YELLOW_300.css
      }), (0, r.jsx)(c.Text, {
        variant: "text-xs/normal",
        children: D
      })]
    }) : null]
  })
}