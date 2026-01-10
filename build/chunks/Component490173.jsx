/** Chunk was on web.js **/
/** chunk id: 490173, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk762328 = require("./762328.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk682973 = require("./682973.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk213609 = require("./213609.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk574254 = require("./574254.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");

function E(e, t, n) {
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
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v() {
  window.getSelection().removeAllRanges()
}
let S = e => {
  let {
    children: t,
    close: n,
    onUnmount: s,
    target: u,
    rect: _,
    position: m,
    align: h,
    impressionName: E,
    impressionProperties: b,
    disableClickTrap: y = false
  } = e, O = i.useRef(null), S = i.useMemo(() => ({
    current: u
  }), [u]), I = i.useRef(n);
  i.useEffect(() => {
    I.current = n
  }), i.useEffect(() => {
    var e, t, n;
    let r = null == (e = O.current) ? true : e.elementRef.current;
    if (null == r) return;
    let i = e => {
      var t;
      let n = e.target,
        r = null == (t = O.current) ? true : t.elementRef.current;
      null != r && (0, c.ty$)(r, n) || (v(), I.current())
    };
    return null == (t = r.ownerDocument) || t.addEventListener("click", i, true), null == (n = r.ownerDocument) || n.addEventListener("contextmenu", i, true), () => {
      var e, t;
      null == (e = r.ownerDocument) || e.removeEventListener("click", i, true), null == (t = r.ownerDocument) || t.removeEventListener("contextmenu", i, true)
    }
  }, []);
  let T = i.useRef(s);
  i.useEffect(() => {
    T.current = s
  }), i.useEffect(() => () => {
    var e;
    return null == (e = T.current) ? true : e.call(T)
  }, []), i.useLayoutEffect(() => {
    var e;
    null == (e = O.current) || e.updatePosition()
  }), (0, d.Z)({
    type: a.ImpressionTypes.MENU,
    name: E,
    properties: b
  });
  let C = (0, p.Aq)(),
    A = i.useCallback(() => {
      C.dispatch(g.CkL.POPOUT_SHOW)
    }, [C]),
    N = i.useCallback(() => {
      C.dispatch(g.CkL.POPOUT_HIDE)
    }, [C]),
    P = (0, l.E)("ContextMenu"),
    R = u.ownerDocument;
  return P ? (0, r.jsx)(o.pS, {
    spacing: 0,
    open: true,
    ownerDocument: R,
    onOpenChange: e => {
      e ? A() : (N(), v(), I.current())
    },
    overrideTargetRect: _,
    placement: (0, o.a_)(null != m ? m : "right", null != h ? h : "top"),
    blockPointerEvents: !y,
    crossAccessFlip: false,
    renderLayer: e => {
      let {
        update: n
      } = e;
      return t({
        position: m
      }, n)
    },
    children: () => null
  }) : (0, r.jsx)(f.W5, {
    onMount: A,
    onUnmount: N,
    targetRef: S,
    overrideTargetRect: _,
    position: null != m ? m : "right",
    align: null != h ? h : "top",
    autoInvert: true,
    ref: O,
    nudgeAlignIntoViewport: true,
    clickTrap: !y,
    children: t
  })
};
class I extends Chunk473749.PureComponent {
  componentDidMount() {
    let {
      renderLazy: e,
      renderWindow: t
    } = this.props;
    if (t.addEventListener("resize", this.closeResize, true), h.S.subscribe(g.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e) {
      let t = setTimeout(() => {
        this.setState({
          render: () => (0, r.jsx)(c.TlX, {})
        })
      }, 300);
      e().then(e => {
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
    e.removeEventListener("resize", this.closeResize, true), h.S.unsubscribe(g.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
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
    } = this.props, d = null != (t = this.state.render) ? t : this.props.render;
    return o && null != c && null != l && null != a && null != d && l.context === i && (null == (e = a.ownerDocument) ? true : e.defaultView) === u ? (0, r.jsx)(S, {
      target: a,
      rect: c,
      close: this.close,
      onUnmount: l.onClose,
      align: l.align,
      position: l.position,
      impressionName: l.impressionName,
      impressionProperties: l.impressionProperties,
      disableClickTrap: null != (n = l.disableClickTrap) && n,
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
    super(...e), E(this, "state", {
      render: true
    }), E(this, "closeResize", e => {
      let {
        renderWindow: t
      } = this.props;
      e.target === t && this.close()
    }), E(this, "close", () => {
      let {
        isOpen: e,
        closeContextMenu: t
      } = this.props;
      e && t()
    })
  }
}

function T() {
  let {
    contextMenu: e,
    version: t,
    isOpen: n
  } = (0, s.cj)([m.Z], () => ({
    contextMenu: m.Z.getContextMenu(),
    version: m.Z.version,
    isOpen: m.Z.isOpen()
  })), a = (0, s.e7)([_.Z], () => _.Z.theme), {
    appContext: o,
    renderWindow: l
  } = i.useContext(p.ZP);
  return (0, r.jsx)(I, O(b({
    appContext: o,
    renderWindow: l
  }, e), {
    isOpen: n,
    theme: a,
    closeContextMenu: u.Zy
  }), t)
}