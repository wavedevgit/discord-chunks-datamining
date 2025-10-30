/** Chunk was on web.js **/
/** chunk id: 490173, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk213609 = require("./213609.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk574254 = require("./574254.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y() {
  window.getSelection().removeAllRanges()
}
let O = e => {
  let {
    children: t,
    close: n,
    onUnmount: o,
    target: l,
    rect: f,
    position: _,
    align: p,
    impressionName: m,
    impressionProperties: g,
    disableClickTrap: E = false
  } = e, b = i.useRef(null), O = i.useMemo(() => ({
    current: l
  }), [l]), v = i.useRef(n);
  i.useEffect(() => {
    v.current = n
  }), i.useEffect(() => {
    var e, t, n;
    let r = null == (e = b.current) ? true : e.elementRef.current;
    if (null == r) return;
    let i = e => {
      var t;
      let n = e.target,
        r = null == (t = b.current) ? true : t.elementRef.current;
      null != r && (0, s.ty$)(r, n) || (y(), v.current())
    };
    return null == (t = r.ownerDocument) || t.addEventListener("click", i, true), null == (n = r.ownerDocument) || n.addEventListener("contextmenu", i, true), () => {
      var e, t;
      null == (e = r.ownerDocument) || e.removeEventListener("click", i, true), null == (t = r.ownerDocument) || t.removeEventListener("contextmenu", i, true)
    }
  }, []);
  let I = i.useRef(o);
  i.useEffect(() => {
    I.current = o
  }), i.useEffect(() => () => {
    var e;
    return null == (e = I.current) ? true : e.call(I)
  }, []), i.useLayoutEffect(() => {
    var e;
    null == (e = b.current) || e.updatePosition()
  }), (0, c.Z)({
    type: a.ImpressionTypes.MENU,
    name: m,
    properties: g
  });
  let S = (0, d.Aq)(),
    T = i.useCallback(() => {
      S.dispatch(h.CkL.POPOUT_SHOW)
    }, [S]),
    A = i.useCallback(() => {
      S.dispatch(h.CkL.POPOUT_HIDE)
    }, [S]);
  return (0, r.jsx)(u.W5, {
    onMount: T,
    onUnmount: A,
    targetRef: O,
    overrideTargetRect: f,
    position: null != _ ? _ : "right",
    align: null != p ? p : "top",
    autoInvert: true,
    ref: b,
    nudgeAlignIntoViewport: true,
    clickTrap: !E,
    children: t
  })
};
class v extends Chunk647438.PureComponent {
  componentDidMount() {
    let {
      renderLazy: e,
      renderWindow: t
    } = this.props;
    if (exports.addEventListener("resize", this.closeResize, true), Chunk585483.S.subscribe(Chunk981631.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != module) {
      let t = setTimeout(() => {
        this.setState({
          render: () => (0, Chunk951288.jsx)(Chunk481060.TlX, {})
        })
      }, 300);
      module().then(e => {
        this.setState({
          render: e
        }), clearTimeout(t)
      })
    }
  }
  componentDidUpdate(e) {
    let {
      isOpen: t
    } = this.props;
    if (!t && e.isOpen) {
      var n, r;
      null == (r = e.config) || null == (n = r.onClose) || n.call(r)
    }
  }
  componentWillUnmount() {
    let {
      renderWindow: e
    } = this.props;
    module.removeEventListener("resize", this.closeResize, true), Chunk585483.S.unsubscribe(Chunk981631.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
  }
  render() {
    var e, t, n;
    let {
      appContext: i,
      target: a,
      isOpen: o,
      theme: s,
      config: l,
      rect: c,
      renderWindow: u
    } = this.props, d = null != (t = this.state.render) ? exports : this.props.render;
    return Chunk442837 && null != Chunk213609 && null != Chunk239091 && null != Chunk990547 && null != Chunk728285 && Chunk239091.context === Chunk647438 && (null == (e = Chunk990547.ownerDocument) ? true : module.defaultView) === Chunk314910 ? (0, Chunk951288.jsx)(O, {
      target: Chunk990547,
      rect: Chunk213609,
      close: this.close,
      onUnmount: Chunk239091.onClose,
      align: Chunk239091.align,
      position: Chunk239091.position,
      impressionName: Chunk239091.impressionName,
      impressionProperties: Chunk239091.impressionProperties,
      disableClickTrap: null != (n = Chunk239091.disableClickTrap) && require,
      children: (e, t) => {
        let {
          position: n
        } = e;
        return d({
          position: n,
          theme: s,
          onHeightUpdate: t,
          config: l,
          target: a,
          context: i
        })
      }
    }) : null
  }
  constructor(...e) {
    super(...e), m(this, "state", {
      render: true
    }), m(this, "closeResize", e => {
      let {
        renderWindow: t
      } = this.props;
      e.target === t && this.close()
    }), m(this, "close", () => {
      let {
        isOpen: e,
        closeContextMenu: t
      } = this.props;
      e && t()
    })
  }
}

function I() {
  let {
    contextMenu: e,
    version: t,
    isOpen: n
  } = (0, Chunk442837.cj)([Chunk574254.Z], () => ({
    contextMenu: Chunk574254.Z.getContextMenu(),
    version: Chunk574254.Z.version,
    isOpen: Chunk574254.Z.isOpen()
  })), a = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme), {
    appContext: s,
    renderWindow: c
  } = Chunk647438.useContext(Chunk728285.ZP);
  return (0, Chunk951288.jsx)(v, b(g({
    appContext: Chunk481060,
    renderWindow: Chunk213609
  }, module), {
    isOpen: require,
    theme: Chunk990547,
    closeContextMenu: Chunk239091.Zy
  }), exports)
}