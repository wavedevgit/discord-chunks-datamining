/** Chunk was on web.js **/
/** chunk id: 767375, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./896048.js"), require("./638769.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
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

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
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
class A extends(r = Chunk64700.PureComponent) {
  render() {
    let {
      paymentSource: e,
      isDefault: t,
      isEditing: n,
      index: r,
      hideDivider: a,
      isForSubscription: s,
      locale: o,
      removing: u,
      submitting: d,
      onSubmit: f,
      onCancel: p,
      onDelete: m
    } = this.props;
    return n ? (0, i.jsx)(_.A, {
      paymentSource: e,
      isDefault: t,
      removing: u,
      submitting: d,
      locale: o,
      isForSubscription: s,
      onSubmit: f,
      onCancel: p,
      onDelete: m
    }) : (0, i.jsxs)(i.Fragment, {
      children: [r > 0 && !a ? (0, i.jsx)(c.cGx, {
        className: E.__invalid_sourceDivider
      }) : null, (0, i.jsxs)("div", {
        className: E.Yb,
        children: [(0, i.jsx)(h.A, {
          paymentSource: e,
          isDefault: t,
          isForSubscription: s,
          locale: o,
          showSubtext: true,
          showLabels: true,
          showPaymentSourceIcon: true
        }), n ? null : (0, i.jsx)(l.$nd, {
          variant: "secondary",
          onClick: this.handleEditClick,
          size: "sm",
          text: g.intl.string(g.t.bt75uw)
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), y(this, "handleEditClick", () => {
      this.props.onEditClick(this.props.paymentSource.id)
    })
  }
}
y(A, "defaultProps", {
  isEditing: false,
  hideDivider: false,
  onEditClick: () => {}
});
class I extends Chunk64700.PureComponent {
  renderFooter() {
    let {
      paymentSources: e
    } = this.props;
    return (0, i.jsxs)("div", {
      className: E.qr,
      children: [0 === Object.keys(e).length ? (0, i.jsxs)("div", {
        className: E.z8,
        children: [(0, i.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: g.intl.string(g.t.aRHpAB)
        }), (0, i.jsx)("div", {
          className: E.Sv,
          children: g.intl.string(g.t.o9bOIl)
        })]
      }) : null, (0, i.jsx)(l.$nd, {
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
      submitting: s,
      premiumSubscriptionPaymentSourceId: l
    } = this.props, u = o().values(n).sort((e, n) => e.id === t ? false : n.id === t ? 1 : p.default.compare(e.id, n.id)), d = this.state.editingPayment, f = u.findIndex(e => e.id === d), _ = u.map((e, n) => (0, i.jsx)(A, {
      locale: r,
      paymentSource: e,
      isDefault: t === e.id,
      onCancel: this.handleCancel,
      onDelete: this.handleDelete,
      isForSubscription: e.id === l,
      hideDivider: f === n - 1,
      onSubmit: this.handleSubmit,
      index: n,
      submitting: s,
      removing: a,
      isEditing: d === e.id,
      onEditClick: this.handleEditClick
    }, e.id));
    return (0, i.jsxs)(i.Fragment, {
      children: [e ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(c.Heading, {
          variant: "heading-lg/semibold",
          children: [(0, i.jsx)(c.XAi, {
            size: "sm",
            className: E.hz
          }), " ", g.intl.string(g.t.W26xGQ)]
        }), (0, i.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: g.intl.string(g.t.h6V3uK)
        })]
      }) : null, _, f !== u.length - 1 ? (0, i.jsx)(c.cGx, {}) : null, this.renderFooter()]
    })
  }
  constructor(...e) {
    super(...e), y(this, "state", {
      editingPayment: null
    }), y(this, "handleEditClick", async e => {
      try {
        await u.Gr(e), this.setState({
          editingPayment: e
        })
      } catch (e) {}
    }), y(this, "handleCancel", () => {
      this.setState({
        editingPayment: null
      })
    }), y(this, "handleDelete", async e => {
      try {
        await u.JQ(e), this.setState({
          editingPayment: null
        })
      } catch (e) {}
    }), y(this, "handleSubmit", async (e, t) => {
      if (null != e) try {
        await u.Ps(e, t), this.setState({
          editingPayment: null
        })
      } catch (e) {}
    }), y(this, "handlePaymentSourceAdded", async e => {
      await (0, f.c_)(e.id)
    }), y(this, "handleAddPaymentMethod", () => {
      (0, c.mMO)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 362111));
        return t => (0, i.jsx)(e, v(b({}, t), {
          onAddPaymentSource: this.handlePaymentSourceAdded
        }))
      }, {
        onCloseCallback: () => {
          (0, d.ET)()
        },
        onCloseRequest: m.tEg
      })
    })
  }
}
let S = I