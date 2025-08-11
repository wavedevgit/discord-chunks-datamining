/** Chunk was on 22988 **/
/** chunk id: 353398, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q5: () => T,
  Sf: () => S,
  ZP: () => w
}), require("./781311.js"), require("./953529.js"), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk484614 = require("./484614.js"),
  Chunk852860 = require("./852860.js"),
  Chunk881052 = require("./881052.js"),
  Chunk751189 = require("./751189.js"),
  Chunk409059 = require("./409059.js"),
  Chunk518936 = require("./518936.js"),
  Chunk999382 = require("./999382.js"),
  Chunk260539 = require("./260539.js"),
  Chunk388032 = require("./388032.js"),
  Chunk651412 = require("./651412.js"),
  Chunk20493 = require("./20493.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class E extends(r = Chunk442837.ZP.Store) {
  getTemplate() {
    let e = Chunk999382.Z.getProps().guild;
    if (null == module) return null;
    let t = Chunk409059.Z.getForGuild(module.id);
    return null != exports && exports.state !== Chunk260539.Rj.RESOLVING ? exports : null
  }
  showNotice() {
    let e = this.getTemplate();
    return null != module && null != this.name && (this.name.trim() !== module.name || this.description.trim() !== module.description)
  }
  constructor(...e) {
    super(...e), I(this, "name", ""), I(this, "description", ""), I(this, "error", null), I(this, "reset", () => {
      let e = this.getTemplate();
      if (null != e) {
        var t, n;
        this.name = null != (t = e.name) ? t : this.name, this.description = null != (n = e.description) ? n : this.description
      } else this.name = "", this.description = "";
      this.emitChange()
    }), I(this, "setName", e => {
      this.name = e, this.emitChange()
    }), I(this, "setDescription", e => {
      this.description = e, this.emitChange()
    }), I(this, "setError", e => {
      this.error = e, this.emitChange()
    }), I(this, "save", async () => {
      await x.Z.updateGuildTemplate(_.Z.getProps().guild.id, this.getTemplate().code, this.name, this.description), this.emitChange()
    })
  }
}
I(E, "displayName", "GuildSettingsTemplateMetadataStore_");
let S = new E(Chunk570140.Z);

function T() {
  let [e, t] = Chunk73800.useState(false), n = async () => {
    exports(true), await S.save(), exports(false)
  };
  return <Chunk852860.Z submitting={module} onReset={S.reset} onSave={require} disabled={!P(S.name)} />
}

function P(e) {
  return null != e && e.trim().length >= 2
}

function w() {
  return <Chunk481060.hjN className={Chunk20493.marginBottom4}><Chunk481060.y5t component={(0, Chunk255367.jsx)(Chunk481060.vwX, {
        tag: Chunk481060.RB0.H1,
        children: Chunk388032.intl.string(Chunk388032.t.KUw7Sk)
      })}>{<Chunk481060.R94 className={Chunk20493.marginBottom20} type={Chunk481060.geA.DESCRIPTION}>{Chunk388032.intl.format(Chunk388032.t.c0m8bG, {})}</Chunk481060.R94>}{<Z />}{<Chunk481060.$i$ className={Chunk651412.divider} />}{<R />}</Chunk481060.y5t></Chunk481060.hjN>
}

function R() {
  let {
    guild: e
  } = Chunk999382.Z.getProps();
  c()(null != module, "guild cannot be null");
  let t = (0, Chunk442837.e7)([S], () => S.error),
    [n, r] = Chunk73800.useState(true),
    {
      loading: a,
      guildTemplate: s
    } = function(e) {
      let [t, n] = l.useState(true);
      return l.useEffect(() => {
        !async function() {
          n(true);
          try {
            await x.Z.loadTemplatesForGuild(e), n(false)
          } catch (e) {
            S.setError(new b.Hx(e))
          }
        }()
      }, [e]), {
        loading: t,
        guildTemplate: (0, d.e7)([j.Z], () => j.Z.getForGuild(e), [e])
      }
    }(module.id);
  if (Chunk73800.useEffect(() => {
      if (require && !Chunk120356) {
        if (null != s) {
          var e, t;
          S.setName(null != (e = s.name) ? module : ""), S.setDescription(null != (t = s.description) ? exports : "")
        }
        r(false)
      }
    }, [require, s, Chunk120356]), Chunk73800.useEffect(() => () => {
      S.reset(), S.setError(null)
    }, []), require) return null != exports ? <Chunk481060.Text color={"text-danger"} variant={"text-sm/normal"}>{exports.message}</Chunk481060.Text> : <Chunk481060.$jN className={Chunk20493.marginTop40} />;
  let o = null != exports && null == exports.getFirstFieldErrorMessage("name") && null == exports.getFirstFieldErrorMessage("description");
  return <Chunk255367.Fragment>{<A />}{<k guild={module} guildTemplate={s} />}{Chunk512722 ? <Chunk481060.Text className={Chunk20493.marginTop8} color={"text-danger"} variant={"text-sm/normal"}>{exports.getAnyErrorMessage()}</Chunk481060.Text> : null}</Chunk255367.Fragment>
}

function Z() {
  return <div className={Chunk651412.descriptionBox}>{<div className={Chunk651412.descriptionSection}>{<Chunk481060.X6q variant={"eyebrow"}>{Chunk388032.intl.string(Chunk388032.t["f8u+VF"])}</Chunk481060.X6q>}{<div className={Chunk651412.descriptionRow}>{<Chunk481060.owK size={"md"} className={Chunk651412.descriptionIcon} color={Chunk692547.Z.unsafe_rawColors.GREEN_360.css} secondaryColor={Chunk692547.Z.unsafe_rawColors.WHITE_500.css} />}{Chunk388032.intl.string(Chunk388032.t.K2tn19)}</div>}{<div className={Chunk651412.descriptionRow}>{<Chunk481060.owK size={"md"} className={Chunk651412.descriptionIcon} color={Chunk692547.Z.unsafe_rawColors.GREEN_360.css} secondaryColor={Chunk692547.Z.unsafe_rawColors.WHITE_500.css} />}{Chunk388032.intl.string(Chunk388032.t.om5gNj)}</div>}{<div className={Chunk651412.descriptionRow}>{<Chunk481060.owK size={"md"} className={Chunk651412.descriptionIcon} color={Chunk692547.Z.unsafe_rawColors.GREEN_360.css} secondaryColor={Chunk692547.Z.unsafe_rawColors.WHITE_500.css} />}{Chunk388032.intl.string(Chunk388032.t["/VNqdH"])}</div>}</div>}{<div className={Chunk651412.descriptionSection}>{<Chunk481060.X6q variant={"eyebrow"}>{Chunk388032.intl.string(Chunk388032.t["8zhJEh"])}</Chunk481060.X6q>}{<div className={Chunk651412.descriptionRow}>{<Chunk481060.k$p size={"md"} className={Chunk651412.descriptionIcon} color={Chunk692547.Z.unsafe_rawColors.RED_400.css} secondaryColor={Chunk692547.Z.unsafe_rawColors.WHITE_500.css} />}{Chunk388032.intl.string(Chunk388032.t.WOKI6u)}</div>}{<div className={Chunk651412.descriptionRow}>{<Chunk481060.k$p size={"md"} className={Chunk651412.descriptionIcon} color={Chunk692547.Z.unsafe_rawColors.RED_400.css} secondaryColor={Chunk692547.Z.unsafe_rawColors.WHITE_500.css} />}{Chunk388032.intl.string(Chunk388032.t.ddhDJC)}</div>}{<div className={Chunk651412.descriptionRow}>{<Chunk481060.k$p size={"md"} className={Chunk651412.descriptionIcon} color={Chunk692547.Z.unsafe_rawColors.RED_400.css} secondaryColor={Chunk692547.Z.unsafe_rawColors.WHITE_500.css} />}{Chunk388032.intl.string(Chunk388032.t["6Q/DHh"])}</div>}</div>}</div>
}

function D(e) {
  let {
    cancel: t,
    confirm: n
  } = e;
  return <g.sYh dismissable={true} header={y.intl.string(y.t["cN/RFB"])} confirmText={y.intl.string(y.t["cN/RFB"])} cancelText={y.intl.string(y.t["ETE/oK"])} onCancel={t} onConfirm={n}><g.Text variant={"text-md/normal"} color={"text-default"}>{y.intl.string(y.t.apCQv7)}</g.Text></g.sYh>
}

function A() {
  let e = (0, Chunk442837.e7)([S], () => S.name),
    t = (0, Chunk442837.e7)([S], () => S.description),
    n = (0, Chunk442837.e7)([S], () => S.error),
    [r, a] = Chunk73800.useState(false),
    s = Chunk73800.useCallback(() => {
      Chunk120356(false)
    }, []),
    o = Chunk73800.useCallback(() => {
      Chunk120356(true)
    }, []),
    c = Chunk73800.useMemo(() => {
      if (!(r || module.length < 1 || P(module))) return Chunk388032.intl.string(Chunk388032.t.IHAlh4)
    }, [module, r]);
  return <Chunk255367.Fragment>{<Chunk481060.xJW className={Chunk20493.marginBottom20} title={Chunk388032.intl.string(Chunk388032.t.z1a9R0)} required={true} error={null == require ? true : require.getFirstFieldErrorMessage("name")}><Chunk481060.oil value={module} onChange={e => S.setName(e)} placeholder={Chunk388032.intl.string(Chunk388032.t.bMlpvr)} maxLength={100} onBlur={s} onFocus={Chunk512722} autoFocus={true} error={c} /></Chunk481060.xJW>}{<Chunk481060.xJW className={Chunk20493.marginBottom20} title={Chunk388032.intl.string(Chunk388032.t.GxirWV)} error={null == require ? true : require.getFirstFieldErrorMessage("description")}><Chunk481060.Kx8 value={exports} onChange={e => S.setDescription(e)} placeholder={Chunk388032.intl.string(Chunk388032.t.n1FBXl)} maxLength={120} /></Chunk481060.xJW>}</Chunk255367.Fragment>
}

function k(e) {
  let {
    guild: t,
    guildTemplate: n
  } = e;
  return null == n ? <L guild={t} /> : <i.Fragment>{<g.xJW title={y.intl.string(y.t.zGGcLy)}><h.Z buttonLook={m.zx.Looks.FILLED} buttonColor={m.zx.Colors.BRAND} value={(0, v.Z)(n.code)} /></g.xJW>}{n.isDirty && <g.Text color={"text-feedback-warning"} className={N.marginTop8} variant={"text-sm/normal"}>{y.intl.string(y.t.aWsjtL)}</g.Text>}{<div className={s()(N.marginTop20, C.buttonContainer)}>{n.isDirty && <M guild={t} guildTemplate={n} />}{<div className={C.rightButtonContainer}>{<G guild={t} guildTemplate={n} />}{<U guildTemplate={n} />}</div>}</div>}{n.isDirty && <div className={C.lastSync}>{y.intl.format(y.t.v0AVur, {
        timestamp: new Date(n.updatedAt)
      })}</div>}</i.Fragment>
}

function L(e) {
  let {
    guild: t
  } = e, n = (0, d.e7)([S], () => S.name), [r, a] = l.useState(false), s = async () => {
    S.setError(null), a(true);
    try {
      await x.Z.createGuildTemplate(t.id, S.name, S.description)
    } catch (e) {
      S.setError(new b.Hx(e))
    }
    a(false)
  };
  return <g.zxk variant={"primary"} text={y.intl.string(y.t.Wxdi8P)} loading={r} disabled={!P(n)} onClick={s} />
}

function M(e) {
  let {
    guild: t,
    guildTemplate: n
  } = e, [r, a] = l.useState(false), s = async () => {
    S.setError(null), a(true);
    try {
      await x.Z.syncGuildTemplate(t.id, n.code)
    } catch (e) {
      S.setError(new b.Hx(e))
    }
    a(false)
  };
  return <div data-button-hoisted-classname-wrapper={true} className={C.button}><g.zxk variant={"primary"} text={y.intl.string(y.t["Nw+0Y2"])} loading={r} onClick={s} /></div>
}

function G(e) {
  let {
    guild: t,
    guildTemplate: n
  } = e, [r, a] = l.useState(false), s = async () => {
    S.setError(null);
    try {
      await x.Z.deleteGuildTemplate(t.id, n.code), S.setName(""), S.setDescription("")
    } catch (e) {
      S.setError(new b.Hx(e))
    }
    a(false)
  };
  return <i.Fragment>{<div data-button-hoisted-classname-wrapper={true} className={C.button}><g.zxk variant={"critical-secondary"} text={y.intl.string(y.t["cN/RFB"])} onClick={() => a(true)} /></div>}{r ? <D confirm={s} cancel={() => a(false)} /> : null}</i.Fragment>
}

function U(e) {
  let {
    guildTemplate: t
  } = e;
  return <div data-button-hoisted-classname-wrapper={true} className={C.button}><g.zxk variant={"secondary"} text={y.intl.string(y.t.YI3iV1)} onClick={() => (0, g.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("10778"), n.e("44044")]).then(n.bind(n, 766775));
        return n => {
          var r, l;
          return (0, i.jsx)(e, (r = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                I(e, t, n[t])
              })
            }
            return e
          }({}, n), l = l = {
            guildTemplate: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
          }), r))
        }
      })} /></div>
}