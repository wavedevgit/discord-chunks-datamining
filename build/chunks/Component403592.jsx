/** Chunk was on web.js **/
/** chunk id: 403592, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => P
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk374450 = require("./374450.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = 104,
  A = 16;

function C(e) {
  var t, n, a;
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
        width: T,
        height: T
      }) : t > 1 ? p({
        width: T * t,
        height: true
      }) : p({
        width: true,
        height: T / t
      }), f(true)
    })
  }, []);
  let m = (0, u.Z)(h),
    g = Math.max(16, (A + T - (null != (t = null == m ? true : m.width) ? t : 0)) / 2);
  return (0, r.jsx)("img", {
    ref: h,
    src: l,
    className: o()(y.icon, {
      [y.image]: !d
    }),
    "aria-hidden": true,
    alt: "",
    style: {
      width: null != (n = _.width) ? n : "initial",
      maxHeight: null != (a = _.height) ? a : T,
      height: "unset",
      marginLeft: g,
      marginRight: g,
      marginTop: null != _.height ? T - _.height - 33 : false
    }
  })
}
class N extends Chunk647438.Component {
  render() {
    var e;
    return this.props.upload.item.platform !== Chunk476326.ow.WEB ? null : this.props.upload.isImage ? (0, Chunk951288.jsx)(C, {
      file: this.props.upload.item.file
    }) : (0, Chunk951288.jsx)("div", {
      className: o()(Chunk374450.icon, {
        [Chunk374450[null != (e = this.props.upload.classification) ? module : ""]]: true
      })
    })
  }
}
class R extends Chunk647438.Component {
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
      disableSpoiler: i
    } = this.props, {
      hasSpoiler: a
    } = this.state;
    return (0, Chunk951288.jsxs)(Chunk481060.Y0X, {
      "aria-label": Chunk388032.intl.string(Chunk388032.t["3AS4UM"]),
      size: Chunk481060.CgR.DYNAMIC,
      transitionState: exports,
      className: Chunk374450.uploadModal,
      parentComponent: "UploadAttachment",
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk374450.inner,
        children: [(0, Chunk951288.jsxs)("div", {
          className: o()(Chunk374450.file, {
            [Chunk374450.expandable]: module.isImage
          }),
          children: [(0, Chunk951288.jsx)(N, {
            upload: module
          }), (0, Chunk951288.jsxs)("div", {
            className: Chunk374450.description,
            children: [(0, Chunk951288.jsx)("div", {
              className: Chunk374450.filename,
              children: module.showLargeMessageDialog ? Chunk388032.intl.formatToPlainString(Chunk388032.t.QWQxtC, {
                maxLength: require
              }) : module.filename
            }), module.showLargeMessageDialog ? (0, Chunk951288.jsx)("div", {
              className: Chunk374450.subtitle,
              children: Chunk388032.intl.string(Chunk388032.t.Plcu02)
            }) : null]
          })]
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk374450.form,
          children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
            gap: 24,
            children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
              gap: 16,
              children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
                label: Chunk388032.intl.string(Chunk388032.t.ILJuBq),
                value: this.state.filename,
                onChange: e => this.setState({
                  filename: e
                }),
                onKeyDown: e => {
                  if (e.which === E.yXg.ENTER) return this.handleSubmit()
                }
              }), module.isImage ? (0, Chunk951288.jsx)(Chunk481060.oil, {
                label: Chunk388032.intl.string(Chunk388032.t.eOB2eR),
                placeholder: Chunk388032.intl.string(Chunk388032.t.RNH1jn),
                value: this.state.description,
                onChange: e => this.setState({
                  description: e
                }),
                onKeyDown: e => {
                  if (e.which === E.yXg.ENTER) return this.handleSubmit()
                }
              }) : null]
            }), true !== Chunk647438 && (0, Chunk951288.jsx)(Chunk481060.Checkbox, {
              checked: Chunk120356,
              onChange: e => this.setState({
                hasSpoiler: e
              }),
              label: Chunk388032.intl.string(Chunk388032.t["gsI+xC"])
            })]
          })
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk374450.footer,
        children: (0, Chunk951288.jsxs)("div", {
          className: o()(Chunk374450.hasSpoilers, Chunk374450.footerRightAlign),
          children: [(0, Chunk951288.jsx)(Chunk755721.zx, {
            type: "button",
            look: Chunk755721.zx.Looks.LINK,
            color: Chunk755721.zx.Colors.PRIMARY,
            onClick: this.cancel,
            children: (0, Chunk951288.jsx)("span", {
              children: Chunk388032.intl.string(Chunk388032.t["ETE/oC"])
            })
          }), (0, Chunk951288.jsx)(Chunk755721.zx, {
            type: "submit",
            onClick: this.handleSubmit,
            children: (0, Chunk951288.jsx)("span", {
              children: Chunk388032.intl.string(Chunk388032.t["TY+auE"])
            })
          })]
        })
      })]
    })
  }
  constructor(e) {
    var t, n, r, i, a, o;
    super(e), O(this, "cancelAll", () => {
      c.Z.clearAll(this.props.channelId, this.props.draftType), this.props.onClose()
    }), O(this, "cancel", () => {
      this.props.onClose()
    }), O(this, "handleTextChange", (e, t, n) => {
      this.setState({
        textValue: t,
        richValue: n
      })
    }), O(this, "handleSubmit", () => {
      let {
        upload: e,
        onClose: t,
        onSubmit: n
      } = this.props, {
        filename: r,
        description: i,
        hasSpoiler: a
      } = this.state;
      n({
        upload: e,
        name: r,
        description: i,
        spoiler: a
      }), t()
    });
    let s = e.ignoreDraft ? "" : p.Z.getDraft(this.props.channelId, e.draftType);
    this.state = S(v({}, (0, f.eK)(s)), {
      textFocused: true,
      hasSpoiler: null != (i = null == (t = e.upload) ? true : t.spoiler) && i,
      filename: null != (a = null == (n = e.upload) ? true : n.filename) ? a : "",
      contentWarningProps: null,
      description: null != (o = null == (r = e.upload) ? true : r.description) ? o : ""
    })
  }
}

function P(e) {
  let t = (0, _.Z)();
  return e.upload.item.platform !== d.ow.WEB ? null : (0, r.jsx)(R, S(v({}, e), {
    file: e.upload.item.file,
    messageMaxLength: t
  }))
}