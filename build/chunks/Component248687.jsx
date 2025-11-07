/** Chunk was on web.js **/
/** chunk id: 248687, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk818405 = require("./818405.js"),
  Chunk587158 = require("./587158.js"),
  Chunk286379 = require("./286379.js"),
  Chunk903772 = require("./903772.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk386506 = require("./386506.js"),
  Chunk304761 = require("./304761.js"),
  Chunk865427 = require("./865427.js"),
  Chunk797614 = require("./797614.js"),
  Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998502 = require("./998502.js"),
  Chunk406128 = require("./406128.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk365861 = require("./365861.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A() {
  let [e, t] = Chunk647438.useState(false);
  if (null == (0, Chunk442837.e7)([Chunk304761.C], () => {
      var e;
      return (0, Chunk865427.fD)() ? null == (e = Chunk304761.C.getCurrentBuildOverride().overrides) ? true : module.discord_web : null
    })) return null;
  let n = async () => {
    try {
      exports(true), await (0, Chunk386506.bF)(), window.location.reload(true)
    } catch (e) {
      exports(false)
    }
  };
  return (0, Chunk951288.jsx)(Chunk793030.zxk, {
    variant: "primary",
    size: "md",
    text: Chunk388032.intl.string(Chunk388032.t["/Nz9rY"]),
    onClick: require,
    loading: module
  })
}
let C = o().throttle(e => {
  m.Z.increment({
    name: c.V.APP_CRASHED,
    tags: ["reason:".concat(s.v.UNHANDLED_JS_ERROR), "level:".concat(l.c.FATAL), "modded_client:".concat(e)]
  }, true)
}, 100, {
  trailing: false
});
class N extends Chunk647438.PureComponent {
  componentDidCatch(e, t) {
    this.triggerSoftCrash(e, t)
  }
  triggerSoftCrash(e, t) {
    let n = (0, g.s1)().location;
    this.setState({
      error: e,
      info: t
    });
    let r = (0, u.e)(),
      i = b.Z.captureCrash(e, {
        extra: t
      });
    E.default.track(v.rMx.APP_CRASHED, {
      path: n.pathname,
      extra: t,
      error_message: e.message,
      error_stack: e.stack,
      sentry_issue_id: i,
      uses_client_mods: r,
      error_level: "fatal"
    }), C(r), y.ZP.cleanupDisplaySleep()
  }
  _handleSubmitReport() {
    location.reload(true)
  }
  componentDidMount() {
    null == window.DiscordErrors && (window.DiscordErrors = {
      softCrash: e => {
        this.triggerSoftCrash(e)
      }
    }, this.discordErrorsSet = true)
  }
  componentWillUnmount() {
    this.discordErrorsSet && (window.DiscordErrors = null, this.discordErrorsSet = false)
  }
  render() {
    let {
      children: e,
      renderCustomMessage: t
    } = this.props;
    if (null !== this.state.error) {
      let e = (0, Chunk951288.jsxs)("div", {
          children: [(0, Chunk951288.jsx)("p", {
            children: Chunk388032.intl.string(Chunk388032.t.tx8CkI)
          }), (0, Chunk951288.jsx)("p", {
            children: Chunk388032.intl.string(Chunk388032.t.CvQlAH)
          })]
        }),
        n = (0, Chunk951288.jsxs)(Chunk793030.hE2, {
          children: [(0, Chunk951288.jsx)(Chunk793030.zxk, {
            variant: "primary",
            size: "md",
            text: Chunk388032.intl.string(Chunk388032.t["+hivLW"]),
            onClick: this._handleSubmitReport
          }), (0, Chunk951288.jsx)(A, {})]
        });
      return (0, Chunk951288.jsx)(Chunk406128.Z, {
        title: Chunk388032.intl.string(Chunk388032.t["3h+n+8"]),
        note: null != exports ? exports() : module,
        action: require,
        className: Chunk365861.errorPage
      })
    }
    return module
  }
  constructor(...e) {
    super(...e), T(this, "state", {
      error: null,
      info: null
    }), T(this, "discordErrorsSet", false)
  }
}
let R = N