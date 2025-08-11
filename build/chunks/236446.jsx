/** Chunk was on 27978 **/
/** chunk id: 236446, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk388905 = require("./388905.js"),
  Chunk362762 = require("./362762.js"),
  Chunk409059 = require("./409059.js"),
  Chunk659900 = require("./659900.js"),
  Chunk962220 = require("./962220.js"),
  Chunk473855 = require("./473855.js"),
  Chunk306453 = require("./306453.js"),
  Chunk929809 = require("./929809.js"),
  Chunk108427 = require("./108427.js"),
  Chunk390885 = require("./390885.js"),
  Chunk314897 = require("./314897.js"),
  Chunk896797 = require("./896797.js"),
  Chunk954824 = require("./954824.js"),
  Chunk781428 = require("./781428.js"),
  Chunk163671 = require("./163671.jsx"),
  Chunk423527 = require("./423527.js"),
  Chunk981631 = require("./981631.js"),
  Chunk260539 = require("./260539.js"),
  Chunk701476 = require("./701476.js"),
  Chunk630724 = require("./630724.js"),
  Chunk436620 = require("./436620.js"),
  Chunk388032 = require("./388032.js"),
  Chunk183170 = require("./183170.js"),
  Chunk20493 = require("./20493.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
Chunk442837.ZP.initialize();
class L extends Chunk73800.PureComponent {
  componentDidMount() {
    (0, Chunk108427.e)("guildTemplate"), Chunk436620.KO || Chunk954824.Z.launch("discord://" + Chunk981631.Z5c.GUILD_TEMPLATE(this.props.code), () => true)
  }
  componentDidUpdate(e) {
    this.props.code !== e.code && f.Z.resolveGuildTemplate(this.props.code)
  }
  renderButton(e, t) {
    return T.KO ? <u.zx className={R.marginTop40} onClick={t}>{e}</u.zx> : <u.v6 className={R.marginTop40} />
  }
  renderSpinner(e) {
    return <u.ZP>{<u.Dx>{e}</u.Dx>}{<u.Hh />}</u.ZP>
  }
  renderInvalidGuildTemplate() {
    return <Chunk388905.ZP>{<Chunk388905.Ee src={require("./167969.js")} className={Chunk20493.marginBottom8} />}{<Chunk388905.Dx className={o()(Chunk20493.marginTop8, Chunk20493.marginBottom8)}>{Chunk388032.intl.string(Chunk388032.t.C7ZRNz)}</Chunk388905.Dx>}{<Chunk388905.DK>{Chunk388032.intl.string(Chunk388032.t.A6MwXF)}</Chunk388905.DK>}{this.renderButton(Chunk388032.intl.string(Chunk388032.t.fIv16O), this.handleContinue)}</Chunk388905.ZP>
  }
  renderAppOpened() {
    return <Chunk388905.ZP>{<Chunk388905.Dx className={Chunk20493.marginBottom8}>{Chunk388032.intl.string(Chunk388032.t.csrAMD)}</Chunk388905.Dx>}{<Chunk388905.DK>{Chunk388032.intl.string(Chunk388032.t["m1+IBg"])}</Chunk388905.DK>}{this.renderButton(Chunk388032.intl.string(Chunk388032.t.fIv16O), this.handleContinue)}</Chunk388905.ZP>
  }
  renderAuthenticatedOrDownload() {
    let {
      guildTemplate: e
    } = this.props;
    return (a()(null != module, "guild template must not be null"), module.state === Chunk260539.Rj.RESOLVING) ? <Chunk388905.ZP className={Chunk183170.authBox}><Chunk306453.Z guildTemplate={module} /></Chunk388905.ZP> : <k guildTemplate={module} />
  }
  renderContinue() {
    return <Chunk388905.ZP>{<Chunk388905.Dx>{Chunk388032.intl.string(Chunk388032.t.fOc4go)}</Chunk388905.Dx>}{this.renderButton(Chunk388032.intl.string(Chunk388032.t.fIv16O), this.handleContinue)}</Chunk388905.ZP>
  }
  render() {
    let {
      guildTemplate: e,
      nativeAppState: t,
      authenticated: n,
      transitionTo: i,
      location: l
    } = this.props;
    if (null == module) return this.renderSpinner(Chunk388032.intl.string(Chunk388032.t.ZTNur6));
    if (exports === Chunk981631.kEZ.OPEN) return this.renderAppOpened();
    if (exports === Chunk981631.kEZ.OPENING) return this.renderSpinner(Chunk388032.intl.string(Chunk388032.t["Z+hCVV"]));
    switch (module.state) {
      case Chunk260539.Rj.RESOLVING:
        return this.renderSpinner(Chunk388032.intl.string(Chunk388032.t["Z+hCVV"]));
      case Chunk260539.Rj.RESOLVED:
        if (require || !Chunk436620.KO) return this.renderAuthenticatedOrDownload();
        if (this.props.login) return <Chunk781428.Z guildTemplate={module} transitionTo={Chunk73800} location={Chunk120356} />;
        return <Chunk423527.Z guildTemplate={module} transitionTo={Chunk73800} location={Chunk120356} onRegister={() => {
            (0, Chunk929809.c)(Chunk701476.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), Chunk390885.Z.flowStart(Chunk630724.MK.ORGANIC_GUILD_TEMPLATES, Chunk630724.EW.NUF_STARTED)
          }} />;
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

function D(e) {
  let t = {
    guildTemplate: (0, c.e7)([h.Z], () => h.Z.getGuildTemplate(e.code)),
    nativeAppState: (0, c.e7)([d.Z], () => d.Z.getState(e.code)),
    authenticated: (0, c.e7)([E.default], () => E.default.isAuthenticated()),
    defaultRoute: (0, c.e7)([v.Z], () => v.Z.defaultRoute)
  };
  return <L{...function(e) {
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
  }({}, e, t)} />
}

function k(e) {
  let {
    guildTemplate: t
  } = e, {
    form: n,
    handleSubmit: i
  } = (0, p.Z)(t, false);
  b.Z.flowStep(A.MK.ORGANIC_GUILD_TEMPLATES, A.X2.GUILD_CREATE);
  let l = <r.Fragment>{<u.Dx className={P.header}>{Z.intl.string(Z.t.UNFvtL)}</u.Dx>}{n}{<u.zx className={P.createButton} onClick={i}>{Z.intl.string(Z.t.xr59t7)}</u.zx>}</r.Fragment>;
  return <O.Z className={P.authBox}>{() => [(0, r.jsx)(m.Z, {
      guildTemplate: t
    }, "template"), (0, r.jsx)("div", {
      className: P.formContainer,
      children: l
    }, "contents")]}</O.Z>
}