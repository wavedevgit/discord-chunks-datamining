/** Chunk was on web.js **/
/** chunk id: 318009, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk508382 = require("./508382.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk502939 = require("./502939.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk139286 = require("./139286.js"),
  Chunk750506 = require("./750506.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk712687 = require("./712687.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");

function E(e, t, n) {
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
      E(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v() {
  window.getSelection().removeAllRanges()
}
let A = e => {
  let {
    children: t,
    close: n,
    onUnmount: o,
    target: u,
    rect: _,
    position: h,
    align: m,
    impressionName: E,
    impressionProperties: y,
    disableClickTrap: b = false
  } = e, O = i.useRef(null), A = i.useMemo(() => ({
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
      null != r && (0, c.HG$)(r, n) || (v(), I.current())
    };
    return null == (t = r.ownerDocument) || t.addEventListener("click", i, true), null == (n = r.ownerDocument) || n.addEventListener("contextmenu", i, true), () => {
      var e, t;
      null == (e = r.ownerDocument) || e.removeEventListener("click", i, true), null == (t = r.ownerDocument) || t.removeEventListener("contextmenu", i, true)
    }
  }, []);
  let S = i.useRef(o);
  i.useEffect(() => {
    S.current = o
  }), i.useEffect(() => () => {
    var e;
    return null == (e = S.current) ? true : e.call(S)
  }, []), i.useLayoutEffect(() => {
    var e;
    null == (e = O.current) || e.updatePosition()
  }), (0, d.A)({
    type: a.ImpressionTypes.MENU,
    name: E,
    properties: y
  });
  let T = (0, p.aL)(),
    C = i.useCallback(() => {
      T.dispatch(g.jej.POPOUT_SHOW)
    }, [T]),
    N = i.useCallback(() => {
      T.dispatch(g.jej.POPOUT_HIDE)
    }, [T]),
    R = (0, l.D)("ContextMenu"),
    w = u.ownerDocument;
  return R ? (0, r.jsx)(s.Ow, {
    spacing: 0,
    open: true,
    ownerDocument: w,
    onOpenChange: e => {
      e ? C() : (N(), v(), I.current())
    },
    overrideTargetRect: _,
    placement: (0, s.Pv)(null != h ? h : "right", null != m ? m : "top"),
    blockPointerEvents: !b,
    crossAccessFlip: false,
    renderLayer: e => {
      let {
        update: n
      } = e;
      return t({
        position: h
      }, n)
    },
    children: () => null
  }) : (0, r.jsx)(f.nE, {
    onMount: C,
    onUnmount: N,
    targetRef: A,
    overrideTargetRect: _,
    position: null != h ? h : "right",
    align: null != m ? m : "top",
    autoInvert: true,
    ref: O,
    nudgeAlignIntoViewport: true,
    clickTrap: !b,
    children: t
  })
};
class I extends Chunk64700.PureComponent {
  componentDidMount() {
    let {
      renderLazy: e,
      renderWindow: t
    } = this.props;
    if (t.addEventListener("resize", this.closeResize, true), m._.subscribe(g.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e) {
      let t = setTimeout(() => {
        this.setState({
          render: () => (0, r.jsx)(c.XSw, {})
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
    e.removeEventListener("resize", this.closeResize, true), m._.unsubscribe(g.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
  }
  render() {
    var e, t, n;
    let {
      appContext: i,
      target: a,
      isOpen: s,
      theme: o,
      config: l,
      rect: c,
      renderWindow: u
    } = this.props, d = null != (e = this.state.render) ? e : this.props.render;
    return s && null != c && null != l && null != a && null != d && l.context === i && (null == (n = a.ownerDocument) ? true : n.defaultView) === u ? (0, r.jsx)(A, {
      target: a,
      rect: c,
      close: this.close,
      onUnmount: l.onClose,
      align: l.align,
      position: l.position,
      impressionName: l.impressionName,
      impressionProperties: l.impressionProperties,
      disableClickTrap: null != (t = l.disableClickTrap) && t,
      children: (e, t) => {
        let {
          position: n
        } = e;
        return d({
          position: n,
          theme: o,
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

function S() {
  let {
    contextMenu: e,
    version: t,
    isOpen: n
  } = (0, o.cf)([h.A], () => ({
    contextMenu: h.A.getContextMenu(),
    version: h.A.version,
    isOpen: h.A.isOpen()
  })), a = (0, o.bG)([_.A], () => _.A.theme), {
    appContext: s,
    renderWindow: l
  } = i.useContext(p.Ay);
  return (0, r.jsx)(I, O(y({
    appContext: s,
    renderWindow: l
  }, e), {
    isOpen: n,
    theme: a,
    closeContextMenu: u.Z_
  }), t)
}