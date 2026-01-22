/** Chunk was on 86142 **/
/** chunk id: 409934, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./747238.js"), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk492462 = require("./492462.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk210714 = require("./210714.js"),
  Chunk650048 = require("./650048.js"),
  Chunk860689 = require("./860689.js"),
  Chunk396681 = require("./396681.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473169 = require("./473169.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk311907.Ay.initialize();
class _ extends(r = Chunk64700.PureComponent) {
  componentDidMount() {
    let e = (0, f.A)(this.props.location),
      t = (0, l.parse)(this.props.location.search);
    o.Bo.post({
      url: g.Rsh.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
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
    })), (0, u.d)("disable_server_highlight_notifications")
  }
  renderBusy() {
    return (0, i.jsx)(p.Ay, {
      children: (0, i.jsx)(p.CK, {})
    })
  }
  renderSuccess() {
    let {
      defaultRoute: e,
      transitionTo: t
    } = this.props, {
      guild: n
    } = this.state;
    return (0, i.jsxs)(p.Ay, {
      children: [(0, i.jsx)(p.hE, {
        className: A.QB,
        children: m.intl.string(m.t.Z33eiP)
      }), (0, i.jsx)(p.tK, {
        children: m.intl.format(m.t.NRWtfC, {
          guildName: n.name
        })
      }), (0, i.jsx)("div", {
        className: A.eT,
        children: (0, i.jsx)(c.Button, {
          text: m.intl.string(m.t.fIv16B),
          fullWidth: true,
          onClick: () => t(e)
        })
      }), (0, i.jsx)("div", {
        className: A.Ot,
        children: (0, i.jsx)(c.QWc, {
          text: m.intl.string(m.t["cGmT/J"]),
          onClick: () => {
            t(g.BVt.USER_GUILD_NOTIFICATION_SETTINGS(n.id))
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
    return (0, i.jsxs)(p.Ay, {
      children: [(0, i.jsx)(p._V, {
        src: n(37772),
        className: A.SX
      }), (0, i.jsx)(p.hE, {
        className: A.QB,
        children: m.intl.string(m.t.ox9hIS)
      }), (0, i.jsx)(p.tK, {
        children: m.intl.string(m.t["/dcuR5"])
      }), (0, i.jsx)("div", {
        className: A.eT,
        children: (0, i.jsx)(c.Button, {
          text: m.intl.string(m.t.fIv16B),
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
    super(...e), x(this, "state", {
      busy: true,
      success: false,
      guild: null
    })
  }
}
x(_, "defaultProps", {
  transitionTo: e => n.g.location.assign(e)
});
let E = Chunk311907.Ay.connectStores([Chunk650048.A], () => ({
  defaultRoute: d.A.defaultRoute
}))(_)