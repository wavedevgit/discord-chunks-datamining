/** Chunk was on web.js **/
/** chunk id: 427281, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => N
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk608299 = require("./608299.js"),
  Chunk724442 = require("./724442.js"),
  Chunk565150 = require("./565150.js"),
  Chunk408018 = require("./408018.js"),
  Chunk31717 = require("./31717.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk893221 = require("./893221.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
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
let A = 104,
  I = 16;

function S(e) {
  var t, n, a;
  let {
    file: s
  } = e, [l, c] = i.useState(), [d, f] = i.useState(false), [p, _] = i.useState({}), h = i.useRef(null);
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
      1 === t ? _({
        width: A,
        height: A
      }) : t > 1 ? _({
        width: A * t,
        height: true
      }) : _({
        width: true,
        height: A / t
      }), f(true)
    })
  }, []);
  let m = (0, u.A)(h),
    g = Math.max(16, (I + A - (null != (t = null == m ? true : m.width) ? t : 0)) / 2);
  return (0, r.jsx)("img", {
    ref: h,
    src: l,
    className: o()(E.fileIcon, {
      [E.image]: !d
    }),
    "aria-hidden": true,
    alt: "",
    style: {
      width: null != (n = p.width) ? n : "initial",
      maxHeight: null != (a = p.height) ? a : A,
      height: "unset",
      marginLeft: g,
      marginRight: g,
      marginTop: 0
    }
  })
}
class T extends Chunk64700.Component {
  render() {
    var e;
    return this.props.upload.item.platform !== d.xz.WEB ? null : this.props.upload.isImage ? (0, r.jsx)(S, {
      file: this.props.upload.item.file
    }) : (0, r.jsx)("div", {
      className: o()(E.fileIcon, {
        [E[null != (e = this.props.upload.classification) ? e : ""]]: true
      })
    })
  }
}
class C extends Chunk64700.Component {
  componentDidMount() {
    _.isPlatformEmbedded && h.Ay.focus()
  }
  shouldComponentUpdate(e) {
    return null != e.upload
  }
  componentDidUpdate(e) {
    var t, n, r, i;
    (null == (t = e.upload) ? true : t.filename) !== (null == (n = this.props.upload) ? true : n.filename) && this.setState({
      filename: null != (r = null == (i = this.props.upload) ? true : i.filename) ? r : ""
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
    return (0, r.jsxs)(s.Modal, {
      transitionState: t,
      onClose: i,
      title: g.intl.string(g.t.Y8ujqr),
      actions: [{
        variant: "secondary",
        text: g.intl.string(g.t["ETE/oC"]),
        onClick: this.cancel
      }, {
        variant: "primary",
        text: g.intl.string(g.t["TY+auE"]),
        onClick: this.handleSubmit
      }],
      children: [(0, r.jsx)(T, {
        upload: e
      }), (0, r.jsxs)(l.BJc, {
        gap: 24,
        children: [(0, r.jsxs)(l.BJc, {
          gap: 16,
          children: [(0, r.jsx)(l.ksK, {
            label: g.intl.string(g.t.ILJuBq),
            value: this.state.filename,
            onChange: e => this.setState({
              filename: e
            }),
            onKeyDown: e => {
              if (e.which === m.Ks6.ENTER) return this.handleSubmit()
            }
          }), e.isImage ? (0, r.jsx)(l.ksK, {
            label: g.intl.string(g.t.eOB2eR),
            placeholder: g.intl.string(g.t.RNH1jn),
            value: this.state.description,
            onChange: e => this.setState({
              description: e
            }),
            onKeyDown: e => {
              if (e.which === m.Ks6.ENTER) return this.handleSubmit()
            }
          }) : null]
        }), true !== n && (0, r.jsx)(l.Checkbox, {
          checked: a,
          onChange: e => this.setState({
            hasSpoiler: e
          }),
          label: g.intl.string(g.t["gsI+xC"])
        })]
      })]
    })
  }
  constructor(e) {
    var t, n, r, i, a, o;
    super(e), y(this, "cancelAll", () => {
      c.A.clearAll(this.props.channelId, this.props.draftType), this.props.onClose()
    }), y(this, "cancel", () => {
      this.props.onClose()
    }), y(this, "handleTextChange", (e, t, n) => {
      this.setState({
        textValue: t,
        richValue: n
      })
    }), y(this, "handleSubmit", () => {
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
    const s = e.ignoreDraft ? "" : p.A.getDraft(this.props.channelId, e.draftType);
    this.state = v(b({}, (0, f.ur)(s)), {
      textFocused: true,
      hasSpoiler: null != (t = null == (i = e.upload) ? true : i.spoiler) && t,
      filename: null != (n = null == (a = e.upload) ? true : a.filename) ? n : "",
      contentWarningProps: null,
      description: null != (r = null == (o = e.upload) ? true : o.description) ? r : ""
    })
  }
}

function N(e) {
  return e.upload.item.platform !== d.xz.WEB ? null : (0, r.jsx)(C, v(b({}, e), {
    file: e.upload.item.file
  }))
}