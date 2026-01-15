/** Chunk was on web.js **/
/** chunk id: 390954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
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
  Chunk262992 = require("./262992.js");

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
class S extends(r = Chunk473749.PureComponent) {
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
      onCancel: p,
      onDelete: m
    } = this.props;
    return n ? (0, i.jsx)(_.Z, {
      paymentSource: e,
      isDefault: t,
      removing: u,
      submitting: d,
      locale: s,
      isForSubscription: o,
      onSubmit: f,
      onCancel: p,
      onDelete: m
    }) : (0, i.jsxs)(i.Fragment, {
      children: [r > 0 && !a ? (0, i.jsx)(c.izJ, {
        className: E.__invalid_sourceDivider
      }) : null, (0, i.jsxs)("div", {
        className: E.paymentSourceRow,
        children: [(0, i.jsx)(h.Z, {
          paymentSource: e,
          isDefault: t,
          isForSubscription: o,
          locale: s,
          showSubtext: true,
          showLabels: true,
          showPaymentSourceIcon: true
        }), n ? null : (0, i.jsx)(l.zxk, {
          variant: "secondary",
          onClick: this.handleEditClick,
          size: "sm",
          text: g.intl.string(g.t.bt75uw)
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
b(S, "defaultProps", {
  isEditing: false,
  hideDivider: false,
  onEditClick: () => {}
});
class I extends Chunk473749.PureComponent {
  renderFooter() {
    let {
      paymentSources: e
    } = this.props;
    return (0, i.jsxs)("div", {
      className: E.footer,
      children: [0 === Object.keys(e).length ? (0, i.jsxs)("div", {
        className: E.footerContent,
        children: [(0, i.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: g.intl.string(g.t.aRHpAB)
        }), (0, i.jsx)("div", {
          className: E.subText,
          children: g.intl.string(g.t.o9bOIl)
        })]
      }) : null, (0, i.jsx)(l.zxk, {
        onClick: this.handleAddPaymentMethod,
        text: g.intl.string(g.t.CpOiEO)
      })]
    })
  }
  render() {
    let {
      showHeader: e,
      defaultPaymentSourceId: t,
      paymentSources: n,
      locale: r,
      removing: a,
      submitting: o,
      premiumSubscriptionPaymentSourceId: l
    } = this.props, u = s().values(n).sort((e, n) => e.id === t ? false : n.id === t ? 1 : p.default.compare(e.id, n.id)), d = this.state.editingPayment, f = u.findIndex(e => e.id === d), _ = u.map((e, n) => (0, i.jsx)(S, {
      locale: r,
      paymentSource: e,
      isDefault: t === e.id,
      onCancel: this.handleCancel,
      onDelete: this.handleDelete,
      isForSubscription: e.id === l,
      hideDivider: f === n - 1,
      onSubmit: this.handleSubmit,
      index: n,
      submitting: o,
      removing: a,
      isEditing: d === e.id,
      onEditClick: this.handleEditClick
    }, e.id));
    return (0, i.jsxs)(i.Fragment, {
      children: [e ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(c.Heading, {
          variant: "heading-lg/semibold",
          children: [(0, i.jsx)(c.mBM, {
            size: "sm",
            className: E.lockIcon
          }), " ", g.intl.string(g.t.W26xGQ)]
        }), (0, i.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: g.intl.string(g.t.h6V3uK)
        })]
      }) : null, _, f !== u.length - 1 ? (0, i.jsx)(c.izJ, {}) : null, this.renderFooter()]
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
let T = I