/** Chunk was on web.js **/
/** chunk id: 403592, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => N
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk166459 = require("./166459.js"),
  Chunk990169 = require("./990169.js"),
  Chunk476326 = require("./476326.js"),
  Chunk752305 = require("./752305.js"),
  Chunk703558 = require("./703558.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk374450 = require("./374450.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = 104,
  I = 16;

function T(e) {
  var t, n, a;
  let {
    file: s
  } = e, [l, c] = i.useState(), [d, f] = i.useState(false), [p, _] = i.useState({}), m = i.useRef(null);
  i.useEffect(() => {
    if (null != m.current && f(false), null == s) return;
    let e = URL.createObjectURL(s);
    return c(e), () => {
      c(true), URL.revokeObjectURL(e)
    }
  }, [s]), i.useLayoutEffect(() => {
    let e = m.current;
    null != e && (e.onload = () => {
      let t = Math.max(.66, Math.min(e.naturalWidth / e.naturalHeight, 4));
      1 === t ? _({
        width: S,
        height: S
      }) : t > 1 ? _({
        width: S * t,
        height: true
      }) : _({
        width: true,
        height: S / t
      }), f(true)
    })
  }, []);
  let h = (0, u.Z)(m),
    g = Math.max(16, (I + S - (null != (t = null == h ? true : h.width) ? t : 0)) / 2);
  return (0, r.jsx)("img", {
    ref: m,
    src: l,
    className: o()(E.fileIcon, {
      [E.image]: !d
    }),
    "aria-hidden": true,
    alt: "",
    style: {
      width: null != (n = p.width) ? n : "initial",
      maxHeight: null != (a = p.height) ? a : S,
      height: "unset",
      marginLeft: g,
      marginRight: g,
      marginTop: 0
    }
  })
}
class A extends Chunk473749.Component {
  render() {
    var e;
    return this.props.upload.item.platform !== Chunk476326.ow.WEB ? null : this.props.upload.isImage ? (0, Chunk54381.jsx)(T, {
      file: this.props.upload.item.file
    }) : (0, Chunk54381.jsx)("div", {
      className: o()(Chunk374450.fileIcon, {
        [Chunk374450[null != (e = this.props.upload.classification) ? module : ""]]: true
      })
    })
  }
}
class C extends Chunk473749.Component {
  componentDidMount() {
    Chunk358085.isPlatformEmbedded && Chunk998502.ZP.focus()
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
      disableSpoiler: n,
      onClose: i
    } = this.props, {
      hasSpoiler: a
    } = this.state;
    return (0, Chunk54381.jsxs)(Chunk793030.Modal, {
      transitionState: exports,
      onClose: Chunk473749,
      title: Chunk388032.intl.string(Chunk388032.t.Y8ujqr),
      actions: [{
        variant: "secondary",
        text: Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
        onClick: this.cancel
      }, {
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t["TY+auE"]),
        onClick: this.handleSubmit
      }],
      children: [(0, Chunk54381.jsx)(A, {
        upload: module
      }), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
        gap: 24,
        children: [(0, Chunk54381.jsxs)(Chunk481060.Kqy, {
          gap: 16,
          children: [(0, Chunk54381.jsx)(Chunk481060.oil, {
            label: Chunk388032.intl.string(Chunk388032.t.ILJuBq),
            value: this.state.filename,
            onChange: e => this.setState({
              filename: e
            }),
            onKeyDown: e => {
              if (e.which === h.yXg.ENTER) return this.handleSubmit()
            }
          }), module.isImage ? (0, Chunk54381.jsx)(Chunk481060.oil, {
            label: Chunk388032.intl.string(Chunk388032.t.eOB2eR),
            placeholder: Chunk388032.intl.string(Chunk388032.t.RNH1jn),
            value: this.state.description,
            onChange: e => this.setState({
              description: e
            }),
            onKeyDown: e => {
              if (e.which === h.yXg.ENTER) return this.handleSubmit()
            }
          }) : null]
        }), true !== require && (0, Chunk54381.jsx)(Chunk481060.Checkbox, {
          checked: Chunk120356,
          onChange: e => this.setState({
            hasSpoiler: e
          }),
          label: Chunk388032.intl.string(Chunk388032.t["gsI+xC"])
        })]
      })]
    })
  }
  constructor(e) {
    var t, n, r, i, a, o;
    super(e), b(this, "cancelAll", () => {
      c.Z.clearAll(this.props.channelId, this.props.draftType), this.props.onClose()
    }), b(this, "cancel", () => {
      this.props.onClose()
    }), b(this, "handleTextChange", (e, t, n) => {
      this.setState({
        textValue: t,
        richValue: n
      })
    }), b(this, "handleSubmit", () => {
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
    this.state = v(y({}, (0, f.eK)(s)), {
      textFocused: true,
      hasSpoiler: null != (i = null == (t = e.upload) ? true : t.spoiler) && i,
      filename: null != (a = null == (n = e.upload) ? true : n.filename) ? a : "",
      contentWarningProps: null,
      description: null != (o = null == (r = e.upload) ? true : r.description) ? o : ""
    })
  }
}

function N(e) {
  return e.upload.item.platform !== d.ow.WEB ? null : (0, r.jsx)(C, v(y({}, e), {
    file: e.upload.item.file
  }))
}