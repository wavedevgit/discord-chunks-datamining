/** Chunk was on 27978 **/
/** chunk id: 761305, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./35282.js"), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk478411 = require("./478411.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk442837.ZP.initialize();
class E extends(r = Chunk473749.PureComponent) {
  componentDidMount() {
    let e = (0, f.Z)(this.props.location),
      t = (0, a.parse)(this.props.location.search);
    o.tn.post({
      url: m.ANM.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
      body: {
        token: e,
        pixel_uuid: t.hash,
        guild_id: t.guild_id
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
    })), (0, u.e)("disable_server_highlight_notifications")
  }
  renderBusy() {
    return (0, i.jsx)(g.ZP, {
      children: (0, i.jsx)(g.Hh, {})
    })
  }
  renderSuccess() {
    let {
      defaultRoute: e,
      transitionTo: t
    } = this.props, {
      guild: n
    } = this.state;
    return (0, i.jsxs)(g.ZP, {
      children: [(0, i.jsx)(g.Dx, {
        className: x.marginBottom8,
        children: p.intl.string(p.t.Z33eiP)
      }), (0, i.jsx)(g.DK, {
        children: p.intl.format(p.t.NRWtfC, {
          guildName: n.name
        })
      }), (0, i.jsx)("div", {
        className: x.marginTop40,
        children: (0, i.jsx)(c.Button, {
          text: p.intl.string(p.t.fIv16B),
          fullWidth: true,
          onClick: () => t(e)
        })
      }), (0, i.jsx)("div", {
        className: x.marginTop8,
        children: (0, i.jsx)(c.Avr, {
          text: p.intl.string(p.t["cGmT/J"]),
          onClick: () => {
            t(m.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(n.id))
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
    return (0, i.jsxs)(g.ZP, {
      children: [(0, i.jsx)(g.Ee, {
        src: n(105020),
        className: x.marginBottom20
      }), (0, i.jsx)(g.Dx, {
        className: x.marginBottom8,
        children: p.intl.string(p.t.ox9hIS)
      }), (0, i.jsx)(g.DK, {
        children: p.intl.string(p.t["/dcuR5"])
      }), (0, i.jsx)("div", {
        className: x.marginTop40,
        children: (0, i.jsx)(c.Button, {
          text: p.intl.string(p.t.fIv16B),
          fullWidth: true,
          onClick: () => t(e)
        })
      })]
    })
  }
  render() {
    let {
      busy: e,
      success: t
    } = this.state;
    return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError()
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      busy: true,
      success: false,
      guild: null
    })
  }
}
_(E, "defaultProps", {
  transitionTo: e => n.g.location.assign(e)
});
let v = Chunk442837.ZP.connectStores([Chunk896797.Z], () => ({
  defaultRoute: d.Z.defaultRoute
}))(E)