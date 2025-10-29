/** Chunk was on 27978 **/
/** chunk id: 761305, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./35282.js"), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk593473 = require("./593473.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk108427 = require("./108427.js"),
  Chunk896797 = require("./896797.js"),
  Chunk411198 = require("./411198.js"),
  Chunk129293 = require("./129293.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk442837.ZP.initialize();
class E extends(r = Chunk647438.PureComponent) {
  componentDidMount() {
    let e = (0, Chunk129293.Z)(this.props.location),
      t = (0, Chunk593473.parse)(this.props.location.search);
    Chunk544891.tn.post({
      url: Chunk981631.ANM.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
      body: {
        token: module,
        pixel_uuid: exports.hash,
        guild_id: exports.guild_id
      },
      oldFormErrors: true,
      rejectWithError: true
    }).then(e => {
      let {
        body: {
          guild: t
        }
      } = e, n = (0, h.dangerouslyConstructGuildRecordFromUntypedObject)(t);
      this.setState({
        success: true,
        busy: false,
        guild: n
      })
    }, () => this.setState({
      success: false,
      busy: false
    })), (0, Chunk108427.e)("disable_server_highlight_notifications")
  }
  renderBusy() {
    return (0, Chunk951288.jsx)(Chunk388905.ZP, {
      children: (0, Chunk951288.jsx)(Chunk388905.Hh, {})
    })
  }
  renderSuccess() {
    let {
      defaultRoute: e,
      transitionTo: t
    } = this.props, {
      guild: n
    } = this.state;
    return (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk951288.jsx)(Chunk388905.Dx, {
        className: Chunk197571.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.Z33eiP)
      }), (0, Chunk951288.jsx)(Chunk388905.DK, {
        children: Chunk388032.intl.format(Chunk388032.t.NRWtfC, {
          guildName: require.name
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk197571.marginTop40,
        children: (0, Chunk951288.jsx)(Chunk481060.Button, {
          text: Chunk388032.intl.string(Chunk388032.t.fIv16B),
          fullWidth: true,
          onClick: () => exports(module)
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk197571.marginTop8,
        children: (0, Chunk951288.jsx)(Chunk481060.Avr, {
          text: Chunk388032.intl.string(Chunk388032.t["cGmT/J"]),
          onClick: () => {
            exports(Chunk981631.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(require.id))
          }
        })
      })]
    })
  }
  renderError() {
    let {
      defaultRoute: e,
      transitionTo: t
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk951288.jsx)(Chunk388905.Ee, {
        src: require("./105020.js"),
        className: Chunk197571.marginBottom20
      }), (0, Chunk951288.jsx)(Chunk388905.Dx, {
        className: Chunk197571.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.ox9hIS)
      }), (0, Chunk951288.jsx)(Chunk388905.DK, {
        children: Chunk388032.intl.string(Chunk388032.t["/dcuR5"])
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk197571.marginTop40,
        children: (0, Chunk951288.jsx)(Chunk481060.Button, {
          text: Chunk388032.intl.string(Chunk388032.t.fIv16B),
          fullWidth: true,
          onClick: () => exports(module)
        })
      })]
    })
  }
  render() {
    let {
      busy: e,
      success: t
    } = this.state;
    return module ? this.renderBusy() : exports ? this.renderSuccess() : this.renderError()
  }
  constructor(...e) {
    super(...e), x(this, "state", {
      busy: true,
      success: false,
      guild: null
    })
  }
}
x(E, "defaultProps", {
  transitionTo: e => n.g.location.assign(e)
});
let v = Chunk442837.ZP.connectStores([Chunk896797.Z], () => ({
  defaultRoute: Chunk896797.Z.defaultRoute
}))(E)