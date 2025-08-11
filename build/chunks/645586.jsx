/** Chunk was on 7232 **/
/** chunk id: 645586, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk626135 = require("./626135.js"),
  Chunk937615 = require("./937615.js"),
  Chunk622999 = require("./622999.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk279818 = require("./279818.js");

function g(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
class f extends Chunk73800.Component {
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
        return Chunk388032.intl.string(Chunk388032.t.N65Zra);
      case 2:
        return Chunk388032.intl.string(Chunk388032.t.DPgrRk);
      case 3:
        return Chunk388032.intl.string(Chunk388032.t.xypuIi);
      default:
        return Chunk388032.intl.string(Chunk388032.t.uEoQdH)
    }
  }
  getImageStyle() {
    let {
      step: t
    } = this.state;
    switch (module) {
      case 0:
        return Chunk279818.authenticationRequiredImage;
      case 2:
        return Chunk279818.authenticationSuccessImage;
      default:
        return Chunk279818.authenticationFailImage
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
        return Chunk388032.intl.format(Chunk388032.t.RoxWER, {
          price: (0, Chunk937615.T4)(exports.amount, exports.currency),
          item: exports.description
        });
      case 2:
        return Chunk388032.intl.string(Chunk388032.t.PZskfn);
      case 3:
        return Chunk388032.intl.format(Chunk388032.t["j0tI/f"], {
          item: exports.description
        });
      default:
        return Chunk388032.intl.string(Chunk388032.t.BAr3rK)
    }
  }
  renderButtons() {
    let {
      step: t,
      isAwaitingAuthentication: e
    } = this.state;
    return 0 === module ? [{
      text: Chunk388032.intl.string(Chunk388032.t["2NeVoa"]),
      onClick: this.cancelPayment,
      variant: "secondary"
    }, {
      text: Chunk388032.intl.string(Chunk388032.t.VAqBoK),
      onClick: this.handleAuthenticate,
      variant: "primary",
      loading: exports
    }] : [{
      text: Chunk388032.intl.string(Chunk388032.t.cpT0Cg),
      onClick: this.close,
      variant: "primary"
    }]
  }
  render() {
    let {
      transitionState: t
    } = this.props;
    return <Chunk82659.Modal transitionState={module} aria-label={this.getTitle()} title={this.getTitle()} onClose={this.close} actions={this.renderButtons()}>{<div className={this.getImageStyle()} />}{<Chunk481060.Text variant={"text-md/normal"}>{this.getMessage()}</Chunk481060.Text>}</Chunk82659.Modal>
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
      } = await (0, l.oe)(t.id);
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
let m = f