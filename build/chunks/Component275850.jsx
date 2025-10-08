/** Chunk was on web.js **/
/** chunk id: 275850, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => S
}), require("./415506.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk809681 = require("./809681.js");
let E = "***@***.***",
  b = "****",
  y = "***",
  O = "new_payment_source_id",
  v = new Chunk46141.dm({
    id: O,
    brand: Chunk219929.ZP.Types.UNKNOWN,
    type: Chunk981631.HeQ.CARD
  });

function I(e, t) {
  if (e instanceof f.dm) return e.id === O ? {
    brand: null,
    label: m.intl.string(m.t.eQ2bLi)
  } : {
    brand: t ? d.ZP.Types.UNKNOWN : e.brand,
    label: m.intl.formatToPlainString(m.t.QvBAQk, {
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
    label: m.intl.string(m.t["y+0MQU"])
  };
  if (e instanceof f.Vg) return {
    brand: d.ZP.Types.PRZELEWY24,
    label: t ? E : e.email
  };
  else if (e instanceof f.sn) return {
    brand: d.ZP.Types.PAYSAFECARD,
    label: m.intl.string(m.t.e3APTU)
  };
  else if (e instanceof f.o_) return {
    brand: d.ZP.Types.GCASH,
    label: m.intl.string(m.t.PjehcH)
  };
  else if (e instanceof f.kX) return {
    brand: d.ZP.Types.GRABPAY,
    label: m.intl.string(m.t.T5davL)
  };
  else if (e instanceof f.z) return {
    brand: d.ZP.Types.MOMO_WALLET,
    label: m.intl.string(m.t.J0A1Vl)
  };
  else if (e instanceof f.Xc) return {
    brand: d.ZP.Types.VENMO,
    label: t ? y : "@" + e.username
  };
  else if (e instanceof f.Om) return {
    brand: d.ZP.Types.KAKAOPAY,
    label: m.intl.string(m.t.CSVexs)
  };
  else if (e instanceof f.JC) return {
    brand: d.ZP.Types.GOPAY_WALLET,
    label: m.intl.string(m.t["43J8JC"])
  };
  else if (e instanceof f.U4) return {
    brand: d.ZP.Types.BANCONTACT,
    label: m.intl.string(m.t["1ITkfn"])
  };
  else if (e instanceof f.D0) return {
    brand: d.ZP.Types.EPS,
    label: m.intl.format(m.t.hSPoZ2, {
      bank: (0, u.Ul)(e.bank)
    })
  };
  else if (e instanceof f.jc) return {
    brand: d.ZP.Types.IDEAL,
    label: null == e.bank ? m.intl.string(m.t.nSbwqK) : m.intl.format(m.t["9kUlRU"], {
      bank: (0, u.YE)(e.bank)
    })
  };
  else if (e instanceof f.u_) return {
    brand: d.ZP.Types.CASH_APP,
    label: t ? y : e.username
  };
  throw Error("Invalid Payment Source")
}

function T(e, t) {
  let n = null;
  return e && null != t && !t.canRedeemTrial() ? n = m.intl.string(m.t.SvheW1) : e && null != t && t.hasFlag(h.Cw.NEW) && (n = m.intl.format(m.t.d7ZLKC, {
    helpDeskArticle: _.Z.getArticleURL(p.BhN.PAYMENT_AUTHORIZATION_CHARGE)
  })), n
}

function S(e) {
  let {
    label: t,
    selectedPaymentSourceId: n,
    paymentSources: a,
    prependOption: u,
    hidePersonalInformation: _,
    onChange: p,
    onPaymentSourceAdd: h,
    isTrial: E = false,
    disabled: b = false,
    className: y,
    optionClassName: S,
    dropdownLoading: A,
    paymentGatewayRestrictions: C
  } = e, N = 0 === a.length, R = e => {
    if (e === O) null != h && h();
    else {
      let t = a.find(t => t.id === e);
      null != p && p(t)
    }
  }, P = [...null != u ? [u] : [], ...a, v].map((e, t) => {
    if (e instanceof f.ZP) {
      let {
        brand: t,
        label: n
      } = I(e, _), i = e === v || null == C || (null == C ? true : C.includes(e.paymentGateway));
      return {
        value: e.id,
        label: (0, r.jsxs)("div", {
          className: g.paymentSourceSelectedOption,
          children: [null != t ? (0, r.jsx)(d.ZP, {
            type: d.ZP.getType(t)
          }) : null, (0, r.jsx)("div", {
            className: o()(g.paymentSourceLabel, {
              [g.error]: e.invalid
            }),
            children: n
          })]
        }),
        disabled: !i
      }
    }
    return {
      key: t,
      value: e.value,
      label: (0, r.jsx)("div", {
        className: g.paymentSourceLabel,
        children: e.label
      })
    }
  }), w = T(E, i.useMemo(() => a.find(e => e.id === n), [a, n]));
  if (null == n && null != C && C.length > 0) {
    let e = a.filter(e => C.includes(e.paymentGateway));
    n = 0 === e.length ? O : e[0].id
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [N ? (0, r.jsx)(l.zxk, {
      variant: "primary",
      fullWidth: true,
      onClick: h,
      text: m.intl.string(m.t.eQ2bLi)
    }) : (0, r.jsx)(c.q4e, {
      options: P,
      value: n,
      label: t,
      onChange: R,
      isDisabled: b,
      className: o()({
        [g.paymentSourceHasWarning]: null != w
      }, y),
      optionClassName: S,
      placeholder: m.intl.string(m.t["8lqkf3"]),
      renderOptionValue: e => {
        let [t] = e;
        return A ? (0, r.jsx)(c.$jN, {
          type: c.RAz.SPINNING_CIRCLE
        }) : t.label
      }
    }), null != w ? (0, r.jsxs)("div", {
      className: g.paymentSourceWarning,
      children: [(0, r.jsx)(c.Mgn, {
        size: "custom",
        width: 20,
        height: 20,
        className: g.paymentSourceWarningIcon,
        color: s.Z.unsafe_rawColors.YELLOW_300.css
      }), (0, r.jsx)(c.Text, {
        variant: "text-xs/normal",
        children: w
      })]
    }) : null]
  })
}