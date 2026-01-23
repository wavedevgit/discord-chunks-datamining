/** Chunk was on web.js **/
/** chunk id: 670735, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk258873 = require("./258873.js"),
  Chunk622242 = require("./622242.js"),
  Chunk731738 = require("./731738.js"),
  Chunk70298 = require("./70298.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk148810 = require("./148810.js"),
  Chunk521502 = require("./521502.js"),
  Chunk380610 = require("./380610.js"),
  Chunk831062 = require("./831062.js"),
  Chunk976860 = require("./976860.js"),
  Chunk954571 = require("./954571.js"),
  Chunk728458 = require("./728458.js"),
  Chunk837921 = require("./837921.js"),
  Chunk721668 = require("./721668.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk502167 = require("./502167.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T() {
  let [e, t] = i.useState(false);
  if (null == (0, f.bG)([_.A], () => {
      var e;
      return (0, h.kK)() ? null == (e = _.A.getCurrentBuildOverride().overrides) ? true : e.discord_web : null
    })) return null;
  let n = async () => {
    try {
      t(true), await (0, p.iD)(), window.location.reload(true)
    } catch (e) {
      t(false)
    }
  };
  return (0, r.jsx)(d.$nd, {
    variant: "primary",
    size: "md",
    text: A.intl.string(A.t["/Nz9rY"]),
    onClick: n,
    loading: e
  })
}
let C = s().throttle(e => {
  m.A.increment({
    name: c.K.APP_CRASHED,
    tags: ["reason:".concat(o.J.UNHANDLED_JS_ERROR), "level:".concat(l.k.FATAL), "modded_client:".concat(e)]
  }, true)
}, 100, {
  trailing: false
});
class N extends Chunk64700.PureComponent {
  componentDidCatch(e, t) {
    this.triggerSoftCrash(e, t)
  }
  triggerSoftCrash(e, t) {
    let n = (0, g.JK)().location;
    this.setState({
      error: e,
      info: t
    });
    let r = (0, u.b)(),
      i = y.A.captureCrash(e, {
        extra: t
      });
    E.default.track(v.HAw.APP_CRASHED, {
      path: n.pathname,
      extra: t,
      error_message: e.message,
      error_stack: e.stack,
      sentry_issue_id: i,
      uses_client_mods: r,
      error_level: "fatal"
    }), C(r), b.Ay.cleanupDisplaySleep()
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
      let e = (0, r.jsxs)("div", {
          children: [(0, r.jsx)("p", {
            children: A.intl.string(A.t.tx8CkI)
          }), (0, r.jsx)("p", {
            children: A.intl.string(A.t.CvQlAH)
          })]
        }),
        n = (0, r.jsxs)(d.e2v, {
          children: [(0, r.jsx)(d.$nd, {
            variant: "primary",
            size: "md",
            text: A.intl.string(A.t["+hivLW"]),
            onClick: this._handleSubmitReport
          }), (0, r.jsx)(T, {})]
        });
      return (0, r.jsx)(O.A, {
        title: A.intl.string(A.t["3h+n+8"]),
        note: null != t ? t() : e,
        action: n,
        className: I.W
      })
    }
    return e
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      error: null,
      info: null
    }), S(this, "discordErrorsSet", false)
  }
}
let R = N