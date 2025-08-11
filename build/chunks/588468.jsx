/** Chunk was on web.js **/
/** chunk id: 588468, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DJ: () => Z,
  ZP: () => es,
  rp: () => F
}), require("./415506.js"), require("./953529.js"), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk91192 = require("./91192.jsx"),
  Chunk446673 = require("./446673.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk895924 = require("./895924.js"),
  Chunk237375 = require("./237375.jsx"),
  Chunk342687 = require("./342687.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk511618 = require("./511618.jsx"),
  Chunk884902 = require("./884902.js"),
  Chunk887120 = require("./887120.js"),
  Chunk926491 = require("./926491.js"),
  Chunk378233 = require("./378233.js"),
  Chunk695346 = require("./695346.js"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk51144 = require("./51144.js"),
  Chunk965386 = require("./965386.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk256965 = require("./256965.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e, t) {
  if (null == e) return {};
  var n, r, i = B(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function B(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function Z(e) {
  return null != e ? "autocomplete-".concat(e) : null
}

function F(e) {
  return "autocomplete-".concat(e, "-title")
}
let V = Chunk73800.createContext(null);
class H extends Chunk73800.PureComponent {
  isSelectable() {
    return this.selectable
  }
  renderContent() {
    throw Error("AutocompleteRow: renderContent must be extended")
  }
  renderClickable(e) {
    var t;
    let {
      layoutClass: n,
      props: {
        className: r,
        index: o,
        selected: a
      }
    } = this, l = this.isSelectable();
    return <f.P3F{...U(k({}, e), {
      className: s()(x.clickable, r, n),
      id: null != (t = Z(o)) ? t : true,
      onClick: l ? this.handleClick : true,
      onMouseMove: l ? () => {
        this.setState({
          hovered: true
        }), this.handleMouseEnter()
      } : true,
      onMouseLeave: l ? () => this.setState({
        hovered: false
      }) : true,
      role: "option",
      "aria-disabled": !l,
      "aria-selected": l && a,
      children: (0, i.jsx)("div", {
        className: x.base,
        children: this.renderContent()
      })
    })} />
  }
  render() {
    let {
      index: e
    } = this.props;
    return this.isSelectable() ? <Chunk91192.mh id={"".concat(module)}>{e => this.renderClickable(e)}</Chunk91192.mh> : this.renderClickable()
  }
  constructor(e) {
    super(e), M(this, "selectable", true), M(this, "layoutClass", x.autocompleteRowVertical), M(this, "handleMouseEnter", () => {
      let {
        onHover: e,
        index: t,
        selected: n
      } = this.props;
      null == e || n || "number" != typeof t || e(t)
    }), M(this, "handleClick", e => {
      let {
        onClick: t,
        index: n
      } = this.props;
      null != t && "number" == typeof n && t(n, e)
    }), this.state = {
      hovered: false
    }
  }
}
class Y extends H {
  renderContent() {
    let {
      text: e,
      description: t,
      badge: n
    } = this.props;
    return <Chunk965386.RX>{<Chunk965386.z5><Chunk965386.BR>{module}{" "}{null != require && <Chunk446673.C badge={require} />}</Chunk965386.BR></Chunk965386.z5>}{null != exports ? <Chunk965386.dY>{exports}</Chunk965386.dY> : null}</Chunk965386.RX>
  }
}

function W(e) {
  let t = o.useMemo(() => c().random(60, 120), []);
  return <div className={x.base} aria-busy={true}><P.RX><P.z5><P.BR><div className={x.autocompletePlaceholder} style={{
              width: t
            }} /></P.BR></P.z5></P.RX></div>
}

function K(e) {
  let {
    title: t,
    className: n,
    children: r
  } = e, a = o.useContext(V);
  return <div className={x.base}><f.X6q id={F(a.id)} className={s()(x.contentTitle, n)} variant={"heading-deprecated-12/semibold"}>{t}{r}</f.X6q></div>
}
class z extends H {
  renderContent() {
    let {
      className: e
    } = this.props;
    return <div className={s()(module, Chunk256965.divider)} />
  }
  constructor(...e) {
    super(...e), M(this, "layoutClass", x.dividerContainer), M(this, "selectable", false)
  }
}
class q extends H {
  renderContent() {
    var e;
    let {
      user: t,
      nick: n,
      status: r,
      hidePersonalInformation: o,
      guildId: a
    } = this.props, s = null == Chunk120356 ? Chunk699516.Z.getNickname(exports.id) : null;
    return <Chunk965386.RX>{<Chunk965386.Tw><Chunk481060.qEK size={Chunk481060.EFr.SIZE_24} src={exports.getAvatarURL(Chunk120356, 24)} aria-hidden={true} status={r} /></Chunk965386.Tw>}{<Chunk965386.z5><Chunk965386.BR>{null != (e = null != require ? require : s) ? module : Chunk51144.ZP.getName(exports)}</Chunk965386.BR></Chunk965386.z5>}{<Chunk965386.dY>{Chunk51144.ZP.getUserTag(exports, {
          mode: "username",
          identifiable: Chunk73800 ? "never" : "always"
        })}{Chunk73800 || exports.hasUniqueUsername() ? null : <span className={Chunk256965.descriptionDiscriminator}>{"#"}{exports.discriminator}</span>}</Chunk965386.dY>}</Chunk965386.RX>
  }
}
class X extends H {
  renderContent() {
    let {
      role: e,
      hideDescription: t,
      guildId: n
    } = this.props, {
      colorString: r,
      colorStrings: o
    } = module, a = "dot" === Chunk607070.Z.roleStyle, l = "username" === Chunk607070.Z.roleStyle && (null != r || null != Chunk73800), c = (0, Chunk884902.AQ)(require, module, Chunk73800), u = null != c && Chunk392711, {
      gradientStyle: d,
      gradientClassname: p
    } = (0, Chunk481060.JUn)({
      colorStrings: Chunk73800,
      useReducedMotion: Chunk607070.Z.useReducedMotion,
      roleStyle: "username",
      includeConvenienceGlow: true
    }), h = Chunk392711 ? k({}, Chunk91192 ? Chunk446673 : {
      color: null != r ? r : true
    }) : true;
    return <Chunk965386.RX>{<Chunk965386.z5><Chunk965386.BR>{Chunk120356 && <Chunk481060.FhE className={Chunk256965.roleDot} color={r} colors={c} tooltip={false} />}{<span className={s()({
              [Chunk895924]: Chunk91192
            })} style={Chunk237375} data-text={Chunk91192 ? "@".concat(module.name) : true}>{"@"}{module.name}</span>}</Chunk965386.BR></Chunk965386.z5>}{exports ? null : <Chunk965386.dY>{Chunk388032.intl.string(Chunk388032.t["/91tbm"])}</Chunk965386.dY>}</Chunk965386.RX>
  }
}
class Q extends H {
  renderContent() {
    let {
      channel: e,
      category: t
    } = this.props, n = module.type === Chunk981631.d4z.GUILD_CATEGORY ? Chunk481060.ROc : (0, Chunk471445.KS)(module);
    return <Chunk965386.RX>{null != require && <Chunk965386.Tw><require className={Chunk256965.icon} /></Chunk965386.Tw>}{<Chunk965386.z5><Chunk965386.BR>{(0, Chunk933557.F6)(module, Chunk594174.default, Chunk699516.Z)}</Chunk965386.BR></Chunk965386.z5>}{null != exports ? <Chunk965386.dY>{exports.name}</Chunk965386.dY> : null}</Chunk965386.RX>
  }
}
class J extends H {
  renderContent() {
    let {
      command: e
    } = this.props;
    return <Chunk965386.RX>{<Chunk965386.Tw><Chunk481060.XZC size={"xs"} color={"currentColor"} className={Chunk256965.icon} colorClass={Chunk256965.iconForeground} /></Chunk965386.Tw>}{<Chunk965386.z5><Chunk965386.BR>{module.displayName}</Chunk965386.BR></Chunk965386.z5>}{<Chunk965386.dY>{module.displayDescription}</Chunk965386.dY>}</Chunk965386.RX>
  }
}
class $ extends H {
  isSelectable() {
    return this.props.command.inputType !== Chunk895924.iw.PLACEHOLDER
  }
  renderContent() {
    let {
      command: e,
      channel: t,
      showImage: n,
      section: r,
      selected: o
    } = this.props, {
      hovered: a
    } = this.state, s = this.isSelectable();
    return module.inputType === Chunk895924.iw.PLACEHOLDER ? <Chunk342687.Z /> : <Chunk237375.Z command={module} channel={exports} showImage={require} showOptions={Chunk120356 || s && Chunk73800} section={r} isSelectable={s} />
  }
}
class ee extends H {
  renderContent() {
    let {
      emoji: e,
      sentinel: t,
      guild: n
    } = this.props, r = Chunk695346.Yk.getSetting(), o = null != module.id || "" !== module.url ? <img alt={""} className={Chunk256965.emojiImage} src={null != module.id ? Chunk768581.ZP.getEmojiURL({
        id: module.id,
        animated: module.animated && r,
        size: Chunk185923.$U
      }) : module.url} /> : <span className={Chunk256965.emojiRaw}>{module.surrogates}</span>, a = null != require ? <Chunk965386.dY>{require.name}</Chunk965386.dY> : null;
    return <Chunk965386.RX>{<Chunk965386.Tw>{Chunk73800}</Chunk965386.Tw>}{<Chunk965386.z5><Chunk965386.BR>{exports}{module.name}{exports}</Chunk965386.BR></Chunk965386.z5>}{Chunk120356}</Chunk965386.RX>
  }
  constructor(...e) {
    super(...e), M(this, "layoutClass", s()(x.autocompleteRowVertical, x.autocompleteRowVerticalSmall))
  }
}
class et extends H {
  renderContent() {
    var e, t;
    let n, {
        queryMatch: r,
        renderSticker: o,
        selected: a,
        sticker: s
      } = this.props,
      {
        hovered: l
      } = this.state;
    return (0, Chunk378233.jl)(s) ? n = null == (e = Chunk926491.Z.getStickerPack(s.pack_id)) ? true : module.name : (0, Chunk378233.J8)(s) && (n = null == (t = Chunk430824.Z.getGuild(s.guild_id)) ? true : exports.name), <Chunk965386.RX>{<Chunk965386.Tw>{Chunk73800(s, Chunk392711 || true === Chunk120356)}</Chunk965386.Tw>}{<Chunk965386.z5>{<Chunk965386.BR>{s.name}</Chunk965386.BR>}{null != r && <Chunk965386.wL>{Chunk388032.intl.format(Chunk388032.t.PAutaW, {
            queryMatch: r
          })}</Chunk965386.wL>}</Chunk965386.z5>}{null != require && <Chunk965386.dY>{require}</Chunk965386.dY>}</Chunk965386.RX>
  }
  constructor(...e) {
    super(...e), M(this, "layoutClass", s()(x.autocompleteRowVertical, x.autocompleteRowVerticalSmall))
  }
}
class en extends H {
  renderContent() {
    let {
      width: e,
      height: t,
      src: n
    } = this.props;
    return <img alt={""} src={require} width={module} height={exports} />
  }
  constructor(...e) {
    super(...e), M(this, "layoutClass", x.autocompleteRowHorizontal)
  }
}
class er extends H {
  renderContent() {
    return <Chunk511618.Z emojis={this.props.emojis} />
  }
}
class ei extends H {
  renderContent() {
    return <Chunk887120.Z{...k({}, this.props)} />
  }
}
class eo extends H {
  renderContent() {
    let {
      game: e
    } = this.props, t = <img alt={""} className={Chunk256965.icon} src={Chunk768581.ZP.getApplicationIconURL({
        id: module.id,
        icon: module.icon,
        size: 32
      })} />;
    return <Chunk965386.RX>{<Chunk965386.Tw>{exports}</Chunk965386.Tw>}{<Chunk965386.z5><Chunk965386.BR>{module.name}</Chunk965386.BR></Chunk965386.z5>}</Chunk965386.RX>
  }
}
class ea extends(r = Chunk73800.PureComponent) {
  render() {
    let e = this.props,
      {
        children: t,
        className: n,
        innerClassName: r,
        id: a
      } = module,
      l = G(module, ["children", "className", "innerClassName", "id"]);
    return Chunk73800.Children.count(exports) > 0 ? <V.Provider value={{
        id: null != Chunk120356 ? Chunk120356 : ""
      }}><div className={s()(Chunk256965.autocomplete, require)}><div{...U(k({
          className: s()(Chunk256965.autocompleteInner, r)
        }, Chunk392711), {
          children: exports
        })} /></div></V.Provider> : null
  }
}
M(ea, "Generic", Y), M(ea, "Loading", W), M(ea, "Title", K), M(ea, "Divider", z), M(ea, "User", q), M(ea, "Role", X), M(ea, "Channel", Q), M(ea, "Command", J), M(ea, "NewCommand", $), M(ea, "Emoji", ee), M(ea, "GIFIntegration", en), M(ea, "Sticker", et), M(ea, "EmojiUpsell", er), M(ea, "Soundmoji", ei), M(ea, "Game", eo);
let es = ea