/** Chunk was on web.js **/
/** chunk id: 792423, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk401190 = require("./401190.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk919047 = require("./919047.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends Chunk647438.PureComponent {
  renderErrorMessage() {
    let {
      hasError: e
    } = this.state;
    return module ? (0, Chunk951288.jsx)("div", {
      className: Chunk919047.error,
      children: Chunk388032.intl.string(Chunk388032.t.UUcECA)
    }) : null
  }
  render() {
    let {
      isRequestPending: e
    } = this.state, {
      isHypeSquadOnlineMember: t
    } = this.props;
    return exports ? (0, Chunk951288.jsxs)("div", {
      className: Chunk919047.leaveActionWrapper,
      children: [this.renderErrorMessage(), (0, Chunk951288.jsxs)(Chunk481060.Text, {
        variant: "text-sm/normal",
        children: [Chunk388032.intl.string(Chunk388032.t.ziWmcH), (0, Chunk951288.jsx)(Chunk755721.zx, {
          className: Chunk919047.leaveButton,
          color: Chunk755721.zx.Colors.LINK,
          look: Chunk755721.zx.Looks.LINK,
          onClick: this.handleLeaveHypeSquadClick,
          size: Chunk755721.zx.Sizes.NONE,
          submitting: module,
          children: Chunk388032.intl.string(Chunk388032.t["WH+dho"])
        })]
      })]
    }) : null
  }
  constructor(...e) {
    super(...e), u(this, "state", {
      isRequestPending: false,
      hasError: false
    }), u(this, "handleLeaveHypeSquadError", () => {
      this.setState({
        hasError: true
      })
    }), u(this, "handleLeaveHypeSquadClick", () => {
      this.setState({
        isRequestPending: true
      }, () => {
        s.Z.leaveHypeSquadOnline().then(() => {
          this.setState({
            isRequestPending: false
          })
        }).catch(() => {
          this.setState({
            hasError: true,
            isRequestPending: false
          })
        })
      })
    })
  }
}