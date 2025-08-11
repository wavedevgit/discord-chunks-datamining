/** Chunk was on web.js **/
/** chunk id: 95152, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => w
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk166459 = require("./166459.js"),
  Chunk990169 = require("./990169.js"),
  Chunk476326 = require("./476326.js"),
  Chunk752305 = require("./752305.js"),
  Chunk849522 = require("./849522.js"),
  Chunk703558 = require("./703558.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk948979 = require("./948979.js"),
  Chunk20493 = require("./20493.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = 104,
  N = 16;

function C(e) {
  var t, n, o;
  let {
    file: s
  } = e, [l, c] = i.useState(), [d, f] = i.useState(false), [_, p] = i.useState({}), h = i.useRef(null);
  i.useEffect(() => {
    if (null != h.current && f(false), null == s) return;
    let e = URL.createObjectURL(s);
    return c(e), () => {
      c(true), URL.revokeObjectURL(e)
    }
  }, [s]), i.useLayoutEffect(() => {
    let e = h.current;
    null != e && (e.onload = () => {
      let t = Math.max(.66, Math.min(e.naturalWidth / e.naturalHeight, 4));
      1 === t ? p({
        width: A,
        height: A
      }) : t > 1 ? p({
        width: A * t,
        height: true
      }) : p({
        width: true,
        height: A / t
      }), f(true)
    })
  }, []);
  let m = (0, u.Z)(h),
    g = Math.max(16, (N + A - (null != (t = null == m ? true : m.width) ? t : 0)) / 2);
  return <img ref={h} src={l} className={a()(y.icon, {
      [y.image]: !d
    })} aria-hidden={true} alt={""} style={{
      width: null != (n = _.width) ? n : "initial",
      height: null != (o = _.height) ? o : A,
      marginLeft: g,
      marginRight: g,
      marginTop: null != _.height ? A - _.height - 33 : false
    }} />
}
class R extends Chunk73800.Component {
  render() {
    var e;
    return this.props.upload.item.platform !== Chunk476326.ow.WEB ? null : this.props.upload.isImage ? <C file={this.props.upload.item.file} /> : <div className={a()(Chunk948979.icon, {
        [Chunk948979[null != (e = this.props.upload.classification) ? module : ""]]: true
      })} />
  }
}
class P extends Chunk73800.Component {
  componentDidMount() {
    var e;
    (null == (e = this.props.upload) ? true : module.showLargeMessageDialog) && this.props.upload.item.platform === Chunk476326.ow.WEB && Chunk626135.default.track(Chunk981631.rMx.OPEN_MODAL, {
      type: "Upload Large Message",
      message_content_length: this.props.upload.item.file.size
    }), Chunk358085.isPlatformEmbedded && Chunk998502.ZP.focus()
  }
  shouldComponentUpdate(e) {
    return null != e.upload
  }
  componentDidUpdate(e) {
    var t, n, r, i;
    (null == (t = e.upload) ? true : t.filename) !== (null == (n = this.props.upload) ? true : n.filename) && this.setState({
      filename: null != (i = null == (r = this.props.upload) ? true : r.filename) ? i : ""
    })
  }
  render() {
    let {
      upload: e,
      transitionState: t,
      messageMaxLength: n,
      disableSpoiler: o
    } = this.props, {
      hasSpoiler: c
    } = this.state;
    return <Chunk481060.Y0X aria-label={Chunk388032.intl.string(Chunk388032.t["3AS4UF"])} size={Chunk481060.CgR.DYNAMIC} transitionState={exports} className={Chunk948979.uploadModal} parentComponent={"UploadAttachment"}>{<div className={Chunk948979.inner}>{<div className={a()(Chunk948979.file, {
            [Chunk948979.expandable]: module.isImage
          })}>{<R upload={module} />}{<div className={Chunk948979.description}>{<div className={Chunk948979.filename}>{module.showLargeMessageDialog ? Chunk388032.intl.formatToPlainString(Chunk388032.t.QWQxtL, {
                maxLength: require
              }) : module.filename}</div>}{module.showLargeMessageDialog ? <div className={Chunk948979.subtitle}>{Chunk388032.intl.string(Chunk388032.t.Plcu09)}</div> : null}</div>}</div>}{<div className={Chunk948979.comment}>{<div className={Chunk948979.label}><span>{Chunk388032.intl.string(Chunk388032.t.ILJuBg)}</span></div>}{<Chunk755721.Is className={a()(Chunk948979.channelTextAreaUpload, Chunk20493.marginTop8)} value={this.state.filename} onChange={e => this.setState({
              filename: e
            })} onKeyDown={e => {
              if (e.which === E.yXg.ENTER) return this.handleSubmit()
            }} />}{module.isImage ? <Chunk73800.Fragment>{<div className={Chunk948979.label}><span>{Chunk388032.intl.string(Chunk388032.t.eOB2eX)}</span></div>}{<Chunk755721.Is className={a()(Chunk948979.channelTextAreaUpload, Chunk20493.marginTop8)} placeholder={Chunk388032.intl.string(Chunk388032.t.RNH1jo)} value={this.state.description} onChange={e => this.setState({
                description: e
              })} onKeyDown={e => {
                if (e.which === E.yXg.ENTER) return this.handleSubmit()
              }} />}</Chunk73800.Fragment> : null}{true !== Chunk120356 && <Chunk481060.XZJ className={Chunk20493.marginBottom20} value={Chunk166459} onChange={(e, t) => this.setState({
              hasSpoiler: t
            })}><Chunk481060.Text variant={"text-sm/normal"}>{Chunk388032.intl.string(Chunk388032.t["gsI+xM"])}</Chunk481060.Text></Chunk481060.XZJ>}</div>}</div>}{<div className={Chunk948979.footer}><div className={a()(Chunk948979.hasSpoilers, Chunk948979.footerRightAlign)}>{<Chunk755721.zx type={"button"} look={Chunk755721.zx.Looks.LINK} color={Chunk755721.zx.Colors.PRIMARY} onClick={this.cancel}><span>{Chunk388032.intl.string(Chunk388032.t["ETE/oK"])}</span></Chunk755721.zx>}{<Chunk755721.zx type={"submit"} onClick={this.handleSubmit}><span>{Chunk388032.intl.string(Chunk388032.t["TY+auL"])}</span></Chunk755721.zx>}</div></div>}</Chunk481060.Y0X>
  }
  constructor(e) {
    var t, n, r, i, o, a;
    super(e), v(this, "cancelAll", () => {
      c.Z.clearAll(this.props.channelId, this.props.draftType), this.props.onClose()
    }), v(this, "cancel", () => {
      this.props.onClose()
    }), v(this, "handleTextChange", (e, t, n) => {
      this.setState({
        textValue: t,
        richValue: n
      })
    }), v(this, "handleSubmit", () => {
      let {
        upload: e,
        onClose: t,
        onSubmit: n
      } = this.props, {
        filename: r,
        description: i,
        hasSpoiler: o
      } = this.state;
      n({
        upload: e,
        name: r,
        description: i,
        spoiler: o
      }), t()
    });
    let s = e.ignoreDraft ? "" : p.Z.getDraft(this.props.channelId, e.draftType);
    this.state = S(I({}, (0, f.eK)(s)), {
      textFocused: true,
      hasSpoiler: null != (i = null == (t = e.upload) ? true : t.spoiler) && i,
      filename: null != (o = null == (n = e.upload) ? true : n.filename) ? o : "",
      contentWarningProps: null,
      description: null != (a = null == (r = e.upload) ? true : r.description) ? a : ""
    })
  }
}

function w(e) {
  let t = (0, _.Z)();
  return e.upload.item.platform !== d.ow.WEB ? null : <P{...S(I({}, e), {
    file: e.upload.item.file,
    messageMaxLength: t
  })} />
}