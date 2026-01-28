/** Chunk was on 5606 **/
/** chunk id: 767375, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js"), require("./638769.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk391048 = require("./391048.js"),
  Chunk83617 = require("./83617.js"),
  Chunk661191 = require("./661191.js"),
  Chunk533808 = require("./533808.jsx"),
  Chunk219887 = require("./219887.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk228851 = require("./228851.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class E extends(r = Chunk64700.PureComponent) {
  render() {
    let {
      paymentSource: e,
      isDefault: t,
      isEditing: n,
      index: r,
      hideDivider: l,
      isForSubscription: s,
      locale: a,
      removing: d,
      submitting: u,
      onSubmit: p,
      onCancel: _,
      onDelete: f
    } = this.props;
    return n ? (0, i.jsx)(m.A, {
      paymentSource: e,
      isDefault: t,
      removing: d,
      submitting: u,
      locale: a,
      isForSubscription: s,
      onSubmit: p,
      onCancel: _,
      onDelete: f
    }) : (0, i.jsxs)(i.Fragment, {
      children: [r > 0 && !l ? (0, i.jsx)(c.cGx, {
        className: h.__invalid_sourceDivider
      }) : null, (0, i.jsxs)("div", {
        className: h.Yb,
        children: [(0, i.jsx)(g.A, {
          paymentSource: e,
          isDefault: t,
          isForSubscription: s,
          locale: a,
          showSubtext: true,
          showLabels: true,
          showPaymentSourceIcon: true
        }), n ? null : (0, i.jsx)(o.$nd, {
          variant: "secondary",
          onClick: this.handleEditClick,
          size: "sm",
          text: b.intl.string(b.t.bt75uw)
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), A(this, "handleEditClick", () => {
      this.props.onEditClick(this.props.paymentSource.id)
    })
  }
}
A(E, "defaultProps", {
  isEditing: false,
  hideDivider: false,
  onEditClick: () => {}
});
class x extends Chunk64700.PureComponent {
  renderFooter() {
    let {
      paymentSources: e
    } = this.props;
    return (0, i.jsxs)("div", {
      className: h.qr,
      children: [0 === Object.keys(e).length ? (0, i.jsxs)("div", {
        className: h.z8,
        children: [(0, i.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: b.intl.string(b.t.aRHpAB)
        }), (0, i.jsx)("div", {
          className: h.Sv,
          children: b.intl.string(b.t.o9bOIl)
        })]
      }) : null, (0, i.jsx)(o.$nd, {
        onClick: this.handleAddPaymentMethod,
        text: b.intl.string(b.t.CpOiEO)
      })]
    })
  }
  render() {
    let {
      showHeader: e,
      defaultPaymentSourceId: t,
      paymentSources: n,
      locale: r,
      removing: l,
      submitting: s,
      premiumSubscriptionPaymentSourceId: o
    } = this.props, d = a().values(n).sort((e, n) => e.id === t ? false : n.id === t ? 1 : _.default.compare(e.id, n.id)), u = this.state.editingPayment, p = d.findIndex(e => e.id === u), m = d.map((e, n) => (0, i.jsx)(E, {
      locale: r,
      paymentSource: e,
      isDefault: t === e.id,
      onCancel: this.handleCancel,
      onDelete: this.handleDelete,
      isForSubscription: e.id === o,
      hideDivider: p === n - 1,
      onSubmit: this.handleSubmit,
      index: n,
      submitting: s,
      removing: l,
      isEditing: u === e.id,
      onEditClick: this.handleEditClick
    }, e.id));
    return (0, i.jsxs)(i.Fragment, {
      children: [e ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(c.Heading, {
          variant: "heading-lg/semibold",
          children: [(0, i.jsx)(c.XAi, {
            size: "sm",
            className: h.hz
          }), " ", b.intl.string(b.t.W26xGQ)]
        }), (0, i.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: b.intl.string(b.t.h6V3uK)
        })]
      }) : null, m, p !== d.length - 1 ? (0, i.jsx)(c.cGx, {}) : null, this.renderFooter()]
    })
  }
  constructor(...e) {
    super(...e), A(this, "state", {
      editingPayment: null
    }), A(this, "handleEditClick", async e => {
      try {
        await d.Gr(e), this.setState({
          editingPayment: e
        })
      } catch (e) {}
    }), A(this, "handleCancel", () => {
      this.setState({
        editingPayment: null
      })
    }), A(this, "handleDelete", async e => {
      try {
        await d.JQ(e), this.setState({
          editingPayment: null
        })
      } catch (e) {}
    }), A(this, "handleSubmit", async (e, t) => {
      if (null != e) try {
        await d.Ps(e, t), this.setState({
          editingPayment: null
        })
      } catch (e) {}
    }), A(this, "handlePaymentSourceAdded", async e => {
      await (0, p.c_)(e.id)
    }), A(this, "handleAddPaymentMethod", () => {
      (0, c.mMO)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 362111));
        return t => {
          var n, r;
          return (0, i.jsx)(e, (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                A(e, t, n[t])
              })
            }
            return e
          }({}, t), r = r = {
            onAddPaymentSource: this.handlePaymentSourceAdded
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }), n))
        }
      }, {
        onCloseCallback: () => {
          (0, u.ET)()
        },
        onCloseRequest: f.tEg
      })
    })
  }
}
let O = x