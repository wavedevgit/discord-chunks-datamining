/** Chunk was on 56999 **/
/** chunk id: 302810, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk954571 = require("./954571.js"),
  Chunk580630 = require("./580630.js"),
  Chunk71532 = require("./71532.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk847392 = require("./847392.js");

function g(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
class A extends Chunk64700.Component {
  componentDidMount() {
    c.default.track(u.HAw.OPEN_MODAL, {
      type: u.JJy.PAYMENT_AUTHENTICATION_MODAL
    })
  }
  componentWillUnmount() {
    c.default.track(u.HAw.MODAL_DISMISSED, {
      type: u.JJy.PAYMENT_AUTHENTICATION_MODAL
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
        return d.Xh;
      case 2:
        return d.ZG;
      default:
        return d.E6
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
          price: (0, o.$g)(e.amount, e.currency),
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
    return (0, s.jsxs)(a.Modal, {
      transitionState: t,
      "aria-label": this.getTitle(),
      title: this.getTitle(),
      onClose: this.close,
      actions: this.renderButtons(),
      children: [(0, s.jsx)("div", {
        className: this.getImageStyle()
      }), (0, s.jsx)(r.Text, {
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
      0 === t && await (0, l.N)(i.id), e()
    }), g(this, "cancelPayment", async () => {
      let {
        pendingPayment: t
      } = this.props;
      try {
        await (0, l.N)(t.id)
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
      } = await (0, h.ap)(t.id);
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
let m = A