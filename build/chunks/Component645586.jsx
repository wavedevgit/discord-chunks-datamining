/** Chunk was on 7232 **/
/** chunk id: 645586, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk626135 = require("./626135.js"),
  Chunk937615 = require("./937615.js"),
  Chunk622999 = require("./622999.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk848747 = require("./848747.js");

function g(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
class m extends Chunk647438.Component {
  componentDidMount() {
    Chunk626135.default.track(Chunk981631.rMx.OPEN_MODAL, {
      type: Chunk981631.jXE.PAYMENT_AUTHENTICATION_MODAL
    })
  }
  componentWillUnmount() {
    Chunk626135.default.track(Chunk981631.rMx.MODAL_DISMISSED, {
      type: Chunk981631.jXE.PAYMENT_AUTHENTICATION_MODAL
    })
  }
  getTitle() {
    let {
      step: t
    } = this.state;
    switch (module) {
      case 0:
        return Chunk388032.intl.string(Chunk388032.t.N65ZrW);
      case 2:
        return Chunk388032.intl.string(Chunk388032.t.DPgrRk);
      case 3:
        return Chunk388032.intl.string(Chunk388032.t.xypuIv);
      default:
        return Chunk388032.intl.string(Chunk388032.t.uEoQdA)
    }
  }
  getImageStyle() {
    let {
      step: t
    } = this.state;
    switch (module) {
      case 0:
        return Chunk848747.authenticationRequiredImage;
      case 2:
        return Chunk848747.authenticationSuccessImage;
      default:
        return Chunk848747.authenticationFailImage
    }
  }
  getMessage() {
    let {
      step: t
    } = this.state, {
      pendingPayment: e
    } = this.props;
    switch (module) {
      case 0:
        return Chunk388032.intl.format(Chunk388032.t.RoxWET, {
          price: (0, Chunk937615.T4)(exports.amount, exports.currency),
          item: exports.description
        });
      case 2:
        return Chunk388032.intl.string(Chunk388032.t.PZskfs);
      case 3:
        return Chunk388032.intl.format(Chunk388032.t["j0tI/b"], {
          item: exports.description
        });
      default:
        return Chunk388032.intl.string(Chunk388032.t.BAr3rB)
    }
  }
  renderButtons() {
    let {
      step: t,
      isAwaitingAuthentication: e
    } = this.state;
    return 0 === module ? [{
      text: Chunk388032.intl.string(Chunk388032.t["2NeVoY"]),
      onClick: this.cancelPayment,
      variant: "secondary"
    }, {
      text: Chunk388032.intl.string(Chunk388032.t.VAqBoE),
      onClick: this.handleAuthenticate,
      variant: "primary",
      loading: exports
    }] : [{
      text: Chunk388032.intl.string(Chunk388032.t.cpT0Cq),
      onClick: this.close,
      variant: "primary"
    }]
  }
  render() {
    let {
      transitionState: t
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk793030.Modal, {
      transitionState: module,
      "aria-label": this.getTitle(),
      title: this.getTitle(),
      onClose: this.close,
      actions: this.renderButtons(),
      children: [(0, Chunk951288.jsx)("div", {
        className: this.getImageStyle()
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
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