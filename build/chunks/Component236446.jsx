/** Chunk was on 27978 **/
/** chunk id: 236446, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk362762 = require("./362762.js"),
  Chunk409059 = require("./409059.js"),
  Chunk659900 = require("./659900.jsx"),
  Chunk962220 = require("./962220.js"),
  Chunk473855 = require("./473855.jsx"),
  Chunk306453 = require("./306453.jsx"),
  Chunk929809 = require("./929809.js"),
  Chunk108427 = require("./108427.js"),
  Chunk390885 = require("./390885.js"),
  Chunk314897 = require("./314897.js"),
  Chunk896797 = require("./896797.js"),
  Chunk954824 = require("./954824.js"),
  Chunk781428 = require("./781428.jsx"),
  Chunk163671 = require("./163671.jsx"),
  Chunk423527 = require("./423527.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk260539 = require("./260539.js"),
  Chunk701476 = require("./701476.js"),
  Chunk630724 = require("./630724.js"),
  Chunk436620 = require("./436620.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk858518 = require("./858518.js"),
  Chunk10198 = require("./10198.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk442837.ZP.initialize();
class D extends Chunk473749.PureComponent {
  componentDidMount() {
    (0, Chunk108427.e)("guildTemplate"), Chunk436620.KO || Chunk954824.Z.launch("discord://" + Chunk981631.Z5c.GUILD_TEMPLATE(this.props.code), () => true)
  }
  componentDidUpdate(e) {
    this.props.code !== e.code && p.Z.resolveGuildTemplate(this.props.code)
  }
  renderButton(e, t) {
    return Z.KO ? (0, r.jsx)("div", {
      className: L.marginTop40,
      children: (0, r.jsx)(u.Button, {
        text: e,
        fullWidth: true,
        onClick: t
      })
    }) : (0, r.jsx)(d.v6, {
      className: L.marginTop40
    })
  }
  renderSpinner(e) {
    return (0, r.jsxs)(d.ZP, {
      children: [(0, r.jsx)(d.Dx, {
        children: e
      }), (0, r.jsx)(d.Hh, {})]
    })
  }
  renderInvalidGuildTemplate() {
    return (0, Chunk54381.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk54381.jsx)(Chunk388905.Ee, {
        src: require("./167969.js"),
        className: Chunk10198.marginBottom8
      }), (0, Chunk54381.jsx)(Chunk388905.Dx, {
        className: l()(Chunk10198.marginTop8, Chunk10198.marginBottom8),
        children: Chunk388032.intl.string(Chunk388032.t.C7ZRNw)
      }), (0, Chunk54381.jsx)(Chunk388905.DK, {
        children: Chunk388032.intl.string(Chunk388032.t.A6MwXE)
      }), this.renderButton(Chunk388032.intl.string(Chunk388032.t.fIv16B), this.handleContinue)]
    })
  }
  renderAppOpened() {
    return (0, Chunk54381.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk54381.jsx)(Chunk388905.Dx, {
        className: Chunk10198.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.csrAMJ)
      }), (0, Chunk54381.jsx)(Chunk388905.DK, {
        children: Chunk388032.intl.string(Chunk388032.t["m1+IBn"])
      }), this.renderButton(Chunk388032.intl.string(Chunk388032.t.fIv16B), this.handleContinue)]
    })
  }
  renderAuthenticatedOrDownload() {
    let {
      guildTemplate: e
    } = this.props;
    return (o()(null != module, "guild template must not be null"), module.state === Chunk260539.Rj.RESOLVING) ? (0, Chunk54381.jsx)(Chunk388905.ZP, {
      className: Chunk858518.authBox,
      children: (0, Chunk54381.jsx)(Chunk306453.Z, {
        guildTemplate: module
      })
    }) : (0, Chunk54381.jsx)(M, {
      guildTemplate: module
    })
  }
  renderContinue() {
    return (0, Chunk54381.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk54381.jsx)(Chunk388905.Dx, {
        children: Chunk388032.intl.string(Chunk388032.t.fOc4gn)
      }), this.renderButton(Chunk388032.intl.string(Chunk388032.t.fIv16B), this.handleContinue)]
    })
  }
  render() {
    let {
      guildTemplate: e,
      nativeAppState: t,
      authenticated: n,
      transitionTo: i,
      location: s
    } = this.props;
    if (null == module) return this.renderSpinner(Chunk388032.intl.string(Chunk388032.t.ZTNur7));
    if (exports === Chunk981631.kEZ.OPEN) return this.renderAppOpened();
    if (exports === Chunk981631.kEZ.OPENING) return this.renderSpinner(Chunk388032.intl.string(Chunk388032.t["Z+hCVU"]));
    switch (module.state) {
      case Chunk260539.Rj.RESOLVING:
        return this.renderSpinner(Chunk388032.intl.string(Chunk388032.t["Z+hCVU"]));
      case Chunk260539.Rj.RESOLVED:
        if (require || !Chunk436620.KO) return this.renderAuthenticatedOrDownload();
        if (this.props.login) return (0, Chunk54381.jsx)(Chunk781428.Z, {
          guildTemplate: module,
          transitionTo: Chunk473749,
          location: Chunk120356
        });
        return (0, Chunk54381.jsx)(Chunk423527.Z, {
          guildTemplate: module,
          transitionTo: Chunk473749,
          location: Chunk120356,
          onRegister: () => {
            (0, Chunk929809.c)(Chunk701476.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), Chunk390885.Z.flowStart(Chunk630724.MK.ORGANIC_GUILD_TEMPLATES, Chunk630724.EW.NUF_STARTED)
          }
        });
      case Chunk260539.Rj.EXPIRED:
        return this.renderInvalidGuildTemplate();
      default:
        return null
    }
  }
  constructor(...e) {
    super(...e), w(this, "handleContinue", () => {
      let {
        defaultRoute: e,
        transitionTo: t
      } = this.props;
      t(e)
    })
  }
}

function k(e) {
  let t = {
    guildTemplate: (0, c.e7)([g.Z], () => g.Z.getGuildTemplate(e.code)),
    nativeAppState: (0, c.e7)([h.Z], () => h.Z.getState(e.code)),
    authenticated: (0, c.e7)([j.default], () => j.default.isAuthenticated()),
    defaultRoute: (0, c.e7)([b.Z], () => b.Z.defaultRoute)
  };
  return (0, r.jsx)(D, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        w(e, t, n[t])
      })
    }
    return e
  }({}, e, t))
}

function M(e) {
  let {
    guildTemplate: t
  } = e, {
    form: n,
    handleSubmit: i
  } = (0, m.Z)(t, false);
  v.Z.flowStep(A.MK.ORGANIC_GUILD_TEMPLATES, A.X2.GUILD_CREATE);
  let s = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.Dx, {
      className: R.header,
      children: P.intl.string(P.t.UNFvtM)
    }), n, (0, r.jsx)("div", {
      className: R.createButton,
      children: (0, r.jsx)(u.Button, {
        text: P.intl.string(P.t.xr59t7),
        fullWidth: true,
        onClick: i
      })
    })]
  });
  return (0, r.jsx)(S.Z, {
    className: R.authBox,
    children: () => [(0, r.jsx)(f.Z, {
      guildTemplate: t
    }, "template"), (0, r.jsx)("div", {
      className: R.formContainer,
      children: s
    }, "contents")]
  })
}