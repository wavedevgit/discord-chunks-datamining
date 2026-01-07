/** Chunk was on 7232 **/
/** chunk id: 747988, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk626135 = require("./626135.js"),
  Chunk937615 = require("./937615.js"),
  Chunk622999 = require("./622999.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk78678 = require("./78678.js");

function g(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
class m extends Chunk473749.Component {
  componentDidMount() {
    l.default.track(h.rMx.OPEN_MODAL, {
      type: h.jXE.PAYMENT_AUTHENTICATION_MODAL
    })
  }
  componentWillUnmount() {
    l.default.track(h.rMx.MODAL_DISMISSED, {
      type: h.jXE.PAYMENT_AUTHENTICATION_MODAL
    })
  }
  getTitle() {
    let {
      step: t
    } = this.state;
    switch (t) {
      case 0:
        return p.intl.string(p.t.N65ZrW);
      case 2:
        return p.intl.string(p.t.DPgrRk);
      case 3:
        return p.intl.string(p.t.xypuIv);
      default:
        return p.intl.string(p.t.uEoQdA)
    }
  }
  getImageStyle() {
    let {
      step: t
    } = this.state;
    switch (t) {
      case 0:
        return d.authenticationRequiredImage;
      case 2:
        return d.authenticationSuccessImage;
      default:
        return d.authenticationFailImage
    }
  }
  getMessage() {
    let {
      step: t
    } = this.state, {
      pendingPayment: e
    } = this.props;
    switch (t) {
      case 0:
        return p.intl.format(p.t.RoxWET, {
          price: (0, o.T4)(e.amount, e.currency),
          item: e.description
        });
      case 2:
        return p.intl.string(p.t.PZskfs);
      case 3:
        return p.intl.format(p.t["j0tI/b"], {
          item: e.description
        });
      default:
        return p.intl.string(p.t.BAr3rB)
    }
  }
  renderButtons() {
    let {
      step: t,
      isAwaitingAuthentication: e
    } = this.state;
    return 0 === t ? [{
      text: p.intl.string(p.t["2NeVoY"]),
      onClick: this.cancelPayment,
      variant: "secondary"
    }, {
      text: p.intl.string(p.t.VAqBoE),
      onClick: this.handleAuthenticate,
      variant: "primary",
      loading: e
    }] : [{
      text: p.intl.string(p.t.cpT0Cq),
      onClick: this.close,
      variant: "primary"
    }]
  }
  render() {
    let {
      transitionState: t
    } = this.props;
    return (0, a.jsxs)(s.Modal, {
      transitionState: t,
      "aria-label": this.getTitle(),
      title: this.getTitle(),
      onClose: this.close,
      actions: this.renderButtons(),
      children: [(0, a.jsx)("div", {
        className: this.getImageStyle()
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        children: this.getMessage()
      })]
    })
  }
  constructor(...t) {
    super(...t), g(this, "state", {
      step: 0,
      isAwaitingAuthentication: false
    }), g(this, "close", async () => {
      let {
        step: t
      } = this.state, {
        onClose: e,
        pendingPayment: i
      } = this.props;
      0 === t && await (0, c.UY)(i.id), e()
    }), g(this, "cancelPayment", async () => {
      let {
        pendingPayment: t
      } = this.props;
      try {
        await (0, c.UY)(t.id)
      } catch (t) {
        throw this.setState({
          step: 3
        }), t
      }
      this.setState({
        step: 3
      })
    }), g(this, "handleAuthenticate", async () => {
      let {
        pendingPayment: t
      } = this.props;
      this.setState({
        isAwaitingAuthentication: true
      });
      let {
        error: e
      } = await (0, u.oe)(t.id);
      this.setState({
        isAwaitingAuthentication: false
      }), null != e ? this.setState({
        step: 1
      }) : this.setState({
        step: 2
      })
    })
  }
}
let A = m