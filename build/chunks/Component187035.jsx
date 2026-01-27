/** Chunk was on 86142 **/
/** chunk id: 187035, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => B
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk10088 = require("./10088.js"),
  Chunk122906 = require("./122906.js"),
  Chunk225858 = require("./225858.jsx"),
  Chunk121623 = require("./121623.js"),
  Chunk895600 = require("./895600.jsx"),
  Chunk768397 = require("./768397.jsx"),
  Chunk942614 = require("./942614.js"),
  Chunk210714 = require("./210714.js"),
  Chunk894778 = require("./894778.js"),
  Chunk961350 = require("./961350.js"),
  Chunk650048 = require("./650048.js"),
  Chunk877062 = require("./877062.js"),
  Chunk129851 = require("./129851.jsx"),
  Chunk538796 = require("./538796.jsx"),
  Chunk229 = require("./229.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk401755 = require("./401755.js"),
  Chunk771016 = require("./771016.js"),
  Chunk315290 = require("./315290.js"),
  Chunk396574 = require("./396574.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk256651 = require("./256651.js"),
  Chunk473169 = require("./473169.js");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk311907.Ay.initialize();
class D extends Chunk64700.PureComponent {
  componentDidMount() {
    (0, x.d)("guildTemplate"), R.VP || b.A.launch("discord://" + S.BVt.GUILD_TEMPLATE(this.props.code), () => true)
  }
  componentDidUpdate(e) {
    this.props.code !== e.code && f.A.resolveGuildTemplate(this.props.code)
  }
  renderButton(e, t) {
    return R.VP ? (0, r.jsx)("div", {
      className: k.eT,
      children: (0, r.jsx)(u.Button, {
        text: e,
        fullWidth: true,
        onClick: t
      })
    }) : (0, r.jsx)(d.KE, {
      className: k.eT
    })
  }
  renderSpinner(e) {
    return (0, r.jsxs)(d.Ay, {
      children: [(0, r.jsx)(d.hE, {
        children: e
      }), (0, r.jsx)(d.CK, {})]
    })
  }
  renderInvalidGuildTemplate() {
    return (0, r.jsxs)(d.Ay, {
      children: [(0, r.jsx)(d._V, {
        src: n(428721),
        className: k.QB
      }), (0, r.jsx)(d.hE, {
        className: l()(k.Ot, k.QB),
        children: w.intl.string(w.t.C7ZRNw)
      }), (0, r.jsx)(d.tK, {
        children: w.intl.string(w.t.A6MwXE)
      }), this.renderButton(w.intl.string(w.t.fIv16B), this.handleContinue)]
    })
  }
  renderAppOpened() {
    return (0, r.jsxs)(d.Ay, {
      children: [(0, r.jsx)(d.hE, {
        className: k.QB,
        children: w.intl.string(w.t.csrAMJ)
      }), (0, r.jsx)(d.tK, {
        children: w.intl.string(w.t["m1+IBn"])
      }), this.renderButton(w.intl.string(w.t.fIv16B), this.handleContinue)]
    })
  }
  renderAuthenticatedOrDownload() {
    let {
      guildTemplate: e
    } = this.props;
    return (o()(null != e, "guild template must not be null"), e.state === N.QB.RESOLVING) ? (0, r.jsx)(d.Ay, {
      className: P.sL,
      children: (0, r.jsx)(m.A, {
        guildTemplate: e
      })
    }) : (0, r.jsx)(U, {
      guildTemplate: e
    })
  }
  renderContinue() {
    return (0, r.jsxs)(d.Ay, {
      children: [(0, r.jsx)(d.hE, {
        children: w.intl.string(w.t.fOc4gn)
      }), this.renderButton(w.intl.string(w.t.fIv16B), this.handleContinue)]
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
    if (null == e) return this.renderSpinner(w.intl.string(w.t.ZTNur7));
    if (t === S.fAW.OPEN) return this.renderAppOpened();
    if (t === S.fAW.OPENING) return this.renderSpinner(w.intl.string(w.t["Z+hCVU"]));
    switch (e.state) {
      case N.QB.RESOLVING:
        return this.renderSpinner(w.intl.string(w.t["Z+hCVU"]));
      case N.QB.RESOLVED:
        if (n || !R.VP) return this.renderAuthenticatedOrDownload();
        if (this.props.login) return (0, r.jsx)(j.A, {
          guildTemplate: e,
          transitionTo: i,
          location: s
        });
        return (0, r.jsx)(I.A, {
          guildTemplate: e,
          transitionTo: i,
          location: s,
          onRegister: () => {
            (0, A.C)(C.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE), E.A.flowStart(T.do.ORGANIC_GUILD_TEMPLATES, T.ju.NUF_STARTED)
          }
        });
      case N.QB.EXPIRED:
        return this.renderInvalidGuildTemplate();
      default:
        return null
    }
  }
  constructor(...e) {
    super(...e), L(this, "handleContinue", () => {
      let {
        defaultRoute: e,
        transitionTo: t
      } = this.props;
      t(e)
    })
  }
}

function B(e) {
  let t = {
    guildTemplate: (0, c.bG)([p.A], () => p.A.getGuildTemplate(e.code)),
    nativeAppState: (0, c.bG)([h.A], () => h.A.getState(e.code)),
    authenticated: (0, c.bG)([v.default], () => v.default.isAuthenticated()),
    defaultRoute: (0, c.bG)([y.A], () => y.A.defaultRoute)
  };
  return (0, r.jsx)(D, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        L(e, t, n[t])
      })
    }
    return e
  }({}, e, t))
}

function U(e) {
  let {
    guildTemplate: t
  } = e, {
    form: n,
    handleSubmit: i
  } = (0, g.A)(t, false);
  E.A.flowStep(T.do.ORGANIC_GUILD_TEMPLATES, T.jC.GUILD_CREATE);
  let s = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.hE, {
      className: P.wx,
      children: w.intl.string(w.t.UNFvtM)
    }), n, (0, r.jsx)("div", {
      className: P.Tf,
      children: (0, r.jsx)(u.Button, {
        text: w.intl.string(w.t.xr59t7),
        fullWidth: true,
        onClick: i
      })
    })]
  });
  return (0, r.jsx)(O.A, {
    className: P.sL,
    children: () => [(0, r.jsx)(_.A, {
      guildTemplate: t
    }, "template"), (0, r.jsx)("div", {
      className: P.KJ,
      children: s
    }, "contents")]
  })
}