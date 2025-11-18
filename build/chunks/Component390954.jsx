/** Chunk was on web.js **/
/** chunk id: 390954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./642613.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk159351 = require("./159351.js"),
  Chunk212895 = require("./212895.js"),
  Chunk709054 = require("./709054.js"),
  Chunk156729 = require("./156729.jsx"),
  Chunk244526 = require("./244526.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk708996 = require("./708996.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class I extends(r = Chunk473749.PureComponent) {
  render() {
    let {
      paymentSource: e,
      isDefault: t,
      isEditing: n,
      index: r,
      hideDivider: a,
      isForSubscription: o,
      locale: s,
      removing: u,
      submitting: d,
      onSubmit: f,
      onCancel: _,
      onDelete: m
    } = this.props;
    return require ? (0, Chunk54381.jsx)(Chunk156729.Z, {
      paymentSource: module,
      isDefault: exports,
      removing: Chunk355467,
      submitting: Chunk159351,
      locale: s,
      isForSubscription: Chunk392711,
      onSubmit: Chunk212895,
      onCancel: Chunk709054,
      onDelete: Chunk981631
    }) : (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [r > 0 && !Chunk473749 ? (0, Chunk54381.jsx)(Chunk481060.izJ, {
        className: Chunk708996.__invalid_sourceDivider
      }) : null, (0, Chunk54381.jsxs)("div", {
        className: Chunk708996.paymentSourceRow,
        children: [(0, Chunk54381.jsx)(Chunk244526.Z, {
          paymentSource: module,
          isDefault: exports,
          isForSubscription: Chunk392711,
          locale: s,
          showSubtext: true,
          showLabels: true,
          showPaymentSourceIcon: true
        }), require ? null : (0, Chunk54381.jsx)(Chunk159691.zxk, {
          variant: "secondary",
          onClick: this.handleEditClick,
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t.bt75uw)
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), b(this, "handleEditClick", () => {
      this.props.onEditClick(this.props.paymentSource.id)
    })
  }
}
b(I, "defaultProps", {
  isEditing: false,
  hideDivider: false,
  onEditClick: () => {}
});
class T extends Chunk473749.PureComponent {
  renderFooter() {
    let {
      paymentSources: e
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk708996.footer,
      children: [0 === Object.keys(module).length ? (0, Chunk54381.jsxs)("div", {
        className: Chunk708996.footerContent,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          children: Chunk388032.intl.string(Chunk388032.t.aRHpAB)
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk708996.subText,
          children: Chunk388032.intl.string(Chunk388032.t.o9bOIl)
        })]
      }) : null, (0, Chunk54381.jsx)(Chunk159691.zxk, {
        onClick: this.handleAddPaymentMethod,
        text: Chunk388032.intl.string(Chunk388032.t.CpOiEO)
      })]
    })
  }
  render() {
    let {
      defaultPaymentSourceId: e,
      paymentSources: t,
      locale: n,
      removing: r,
      submitting: a,
      premiumSubscriptionPaymentSourceId: o
    } = this.props, l = s().values(exports).sort((t, n) => t.id === e ? false : n.id === e ? 1 : _.default.compare(t.id, n.id)), u = this.state.editingPayment, d = Chunk159691.findIndex(e => e.id === u), f = Chunk159691.map((t, s) => (0, i.jsx)(I, {
      locale: n,
      paymentSource: t,
      isDefault: e === t.id,
      onCancel: this.handleCancel,
      onDelete: this.handleDelete,
      isForSubscription: t.id === o,
      hideDivider: d === s - 1,
      onSubmit: this.handleSubmit,
      index: s,
      submitting: a,
      removing: r,
      isEditing: u === t.id,
      onEditClick: this.handleEditClick
    }, t.id));
    return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsxs)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        children: [(0, Chunk54381.jsx)(Chunk481060.mBM, {
          size: "sm",
          className: Chunk708996.lockIcon
        }), " ", Chunk388032.intl.string(Chunk388032.t.W26xGQ)]
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: Chunk388032.intl.string(Chunk388032.t.h6V3uK)
      }), Chunk212895, Chunk159351 !== Chunk159691.length - 1 ? (0, Chunk54381.jsx)(Chunk481060.izJ, {
        className: Chunk708996.__invalid_sourceDivider
      }) : null, this.renderFooter()]
    })
  }
  constructor(...e) {
    super(...e), b(this, "state", {
      editingPayment: null
    }), b(this, "handleEditClick", async e => {
      try {
        await u.lO(e), this.setState({
          editingPayment: e
        })
      } catch (e) {}
    }), b(this, "handleCancel", () => {
      this.setState({
        editingPayment: null
      })
    }), b(this, "handleDelete", async e => {
      try {
        await u.xt(e), this.setState({
          editingPayment: null
        })
      } catch (e) {}
    }), b(this, "handleSubmit", async (e, t) => {
      if (null != e) try {
        await u.LI(e, t), this.setState({
          editingPayment: null
        })
      } catch (e) {}
    }), b(this, "handlePaymentSourceAdded", async e => {
      await (0, f.i1)(e.id)
    }), b(this, "handleAddPaymentMethod", () => {
      (0, c.ZDy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 623573));
        return t => (0, i.jsx)(e, v(y({}, t), {
          onAddPaymentSource: this.handlePaymentSourceAdded
        }))
      }, {
        onCloseCallback: () => {
          (0, d.fw)()
        },
        onCloseRequest: m.dG4
      })
    })
  }
}
let S = T