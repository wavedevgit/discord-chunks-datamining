/** Chunk was on web.js **/
/** chunk id: 930295, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => T,
  H: () => A
}), require("./953529.js"), require("./388685.js"), require("./415506.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk299608 = require("./299608.js"),
  s = require.n(Chunk299608),
  Chunk97613 = require("./97613.js"),
  c = require.n(Chunk97613),
  Chunk24156 = require("./24156.js"),
  Chunk374470 = require("./374470.js"),
  Chunk793030 = require("./793030.js"),
  Chunk846519 = require("./846519.js"),
  Chunk952265 = require("./952265.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk574254 = require("./574254.js"),
  Chunk960048 = require("./960048.js"),
  Chunk920676 = require("./920676.jsx"),
  Chunk981631 = require("./981631.js");

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

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = Symbol("POPOUT_PREVENT_CLOSE"),
  C = new Set(["Spacebar", " ", "Enter"]);
class A extends(r = Chunk473749.Component) {
  shouldShowPopout(e, t) {
    return null != e.shouldShow ? e.shouldShow : t.shouldShowPopout
  }
  componentDidMount() {
    this.shouldShowPopout(this.props, this.state) && this.setupShowPopout()
  }
  componentDidUpdate(e, t) {
    e.shouldShow, this.props.shouldShow;
    let n = this.shouldShowPopout(this.props, this.state);
    if ((this.shouldShowPopout(e, t) !== n || t.isLoading !== this.state.isLoading || e.ignoreModalClicks !== this.props.ignoreModalClicks) && (n ? this.setupShowPopout() : this.unsubscribe()), this.props.scrollBehavior !== e.scrollBehavior) {
      var r, i, a, o;
      let e = this.getDomElement();
      if (null == e) return;
      null == (r = e.ownerDocument) || r.removeEventListener("scroll", this.handleScroll, true), null == (i = e.ownerDocument) || i.removeEventListener("scroll", this.handleStickyScroll, true), "close" === this.props.scrollBehavior ? null == (a = e.ownerDocument) || a.addEventListener("scroll", this.handleScroll, true) : "sticky" === this.props.scrollBehavior && (null == (o = e.ownerDocument) || o.addEventListener("scroll", this.handleStickyScroll, true))
    }
  }
  getDomElement() {
    var e;
    let t = null == (e = this.props.targetElementRef) ? true : e.current;
    if (!(0, d.kK)(t)) {
      let e = Error("Popout cannot find DOM node");
      return console.error(e), E.Z.captureException(e), null
    }
    return t
  }
  get closeAction() {
    return this.props.ignoreModalClicks ? y.CkL.POPOUT_CLOSE_AFTER_MODALS : y.CkL.POPOUT_CLOSE
  }
  setupShowPopout() {
    var e, t, n, r;
    let i = this.getDomElement();
    null != i && (null == (e = i.ownerDocument) || e.addEventListener("mousedown", this.handleDocumentMouseDown, true), null == (t = i.ownerDocument) || t.addEventListener("mouseup", this.handleDocumentMouseUp, true), "close" === this.props.scrollBehavior ? null == (n = i.ownerDocument) || n.addEventListener("scroll", this.handleScroll, true) : "sticky" === this.props.scrollBehavior && (null == (r = i.ownerDocument) || r.addEventListener("scroll", this.handleStickyScroll, true)), this.context.windowDispatch.subscribe(this.closeAction, this.handleEscapeClose), this.domElementRef.current = i, this.isValidClickStart = false, this.forceUpdate())
  }
  unsubscribe() {
    var e, t, n, r, i;
    let a = this.domElementRef.current;
    null != a && (null == (t = a.ownerDocument) || t.removeEventListener("mousedown", this.handleDocumentMouseDown, true), null == (n = a.ownerDocument) || n.removeEventListener("mouseup", this.handleDocumentMouseUp, true), null == (r = a.ownerDocument) || r.removeEventListener("scroll", this.handleScroll, true), null == (i = a.ownerDocument) || i.removeEventListener("scroll", this.handleStickyScroll, true)), this.context.windowDispatch.unsubscribe(y.CkL.POPOUT_CLOSE, this.handleEscapeClose), this.context.windowDispatch.unsubscribe(y.CkL.POPOUT_CLOSE_AFTER_MODALS, this.handleEscapeClose), null == (e = this.resizeObserver) || e.disconnect()
  }
  componentWillUnmount() {
    this.unsubscribe(), this.domElementRef.current = null, this.loadingTimeout.stop(), this.validClickTimeout.stop()
  }
  render() {
    let {
      children: e,
      useMouseEnter: t
    } = this.props, n = this.shouldShowPopout(this.props, this.state);
    return (0, i.jsxs)(a.Fragment, {
      children: [e(I(v({
        onMouseDown: this.handlePreload
      }, t ? {
        onMouseEnter: this.handleMouseEnter
      } : {}), {
        onKeyDown: this.handleKeyboardPreload,
        onClick: this.handleClick,
        "aria-controls": n ? this.popoutId : true,
        "aria-expanded": n
      }), {
        isShown: n,
        position: this.state.renderedPosition
      }), (0, i.jsx)(f.y5t, {
        forceLevel: 2,
        children: this.renderLayer()
      })]
    })
  }
  renderLayer() {
    if (!this.shouldShowPopout(this.props, this.state) || null == this.domElementRef.current) return null;
    let {
      position: e,
      align: t,
      nudgeAlignIntoViewport: n,
      useRawTargetDimensions: r,
      spacing: a,
      offset: o,
      autoInvert: s,
      fixed: l,
      positionKey: c,
      disablePointerEvents: u,
      layerContext: d,
      clickTrap: p = false
    } = this.props, {
      resizeKey: _,
      isLoading: h,
      shouldShowLoadingState: g
    } = this.state;
    return h && !g ? null : (0, i.jsx)(f.mh4, {
      layerContext: null != d ? d : m.nz,
      children: (0, i.jsx)(f.jRF, {
        ref: this.layerRef,
        onMount: this.handlePopoutShow,
        onUnmount: this.handlePopoutHide,
        id: this.popoutId,
        targetRef: this.domElementRef,
        position: e,
        align: t,
        nudgeAlignIntoViewport: n,
        useRawTargetDimensions: r,
        spacing: a,
        offset: o,
        autoInvert: s,
        fixed: l,
        positionKey: null != c ? c : String(_),
        disablePointerEvents: u,
        onPositionChange: this.handlePopoutPositionChange,
        clickTrap: p,
        children: this.renderPopout
      })
    })
  }
  toggleShow(e) {
    this.state.shouldShowPopout !== e && this.setState({
      shouldShowPopout: e
    })
  }
  constructor(...e) {
    super(...e), O(this, "domElementRef", a.createRef()), O(this, "layerRef", a.createRef()), O(this, "popoutRef", a.createRef()), O(this, "resizeObserver", true), O(this, "popoutId", "popout_".concat(c()())), O(this, "loadingTimeout", new p.V7), O(this, "validClickTimeout", new p.V7), O(this, "isValidClickStart", false), O(this, "state", {
      renderedPosition: this.props.position,
      shouldShowPopout: false,
      shouldShowLoadingState: false,
      isLoading: false,
      resizeKey: 0
    }), O(this, "handlePopoutShow", () => {
      this.context.windowDispatch.dispatch(y.CkL.POPOUT_SHOW, this.props.popoutKey)
    }), O(this, "handlePopoutHide", () => {
      this.context.windowDispatch.dispatch(y.CkL.POPOUT_HIDE, this.props.popoutKey)
    }), O(this, "handleSetPopoutRef", e => {
      var t;
      let n = null == e ? true : e.ownerDocument.defaultView;
      null != e && null != n && (this.popoutRef.current = e, null == (t = this.resizeObserver) || t.disconnect(), this.resizeObserver = new n.ResizeObserver(() => {
        u.flushSync(() => {
          this.setState({
            resizeKey: this.state.resizeKey + 1
          })
        })
      }), this.resizeObserver.observe(e))
    }), O(this, "renderPopout", (e, t) => {
      let {
        renderPopout: n
      } = this.props;
      return this.state.isLoading ? this.props.loadingComponent : n(I(v({}, e), {
        updatePosition: t,
        closePopout: this.close,
        setPopoutRef: this.handleSetPopoutRef
      }))
    }), O(this, "close", (e, t) => {
      let {
        onRequestClose: n,
        shouldShow: r
      } = this.props;
      (null == n ? true : n(e, t)) !== T && null == r && this.toggleShow(false)
    }), O(this, "handleClick", e => {
      let {
        onShiftClick: t,
        shouldShow: n,
        onRequestOpen: r,
        onRequestClose: i
      } = this.props;
      if ((null == e ? true : e.shiftKey) && null != t) return void t(e);
      let a = null != n;
      (a ? n : this.state.shouldShowPopout) ? null == i || i(null == e ? true : e.nativeEvent, "user:explicit"): null == r || r(), a || this.setState(e => {
        let {
          shouldShowPopout: t
        } = e;
        return {
          shouldShowPopout: !t
        }
      })
    }), O(this, "handleMouseEnter", () => {
      let {
        onRequestOpen: e
      } = this.props;
      null == e || e(), this.setState({
        shouldShowPopout: true
      })
    }), O(this, "handlePreload", async () => {
      let {
        preload: e
      } = this.props;
      if (null != e) {
        this.setState({
          isLoading: true
        }), this.loadingTimeout.start(250, () => this.setState({
          shouldShowLoadingState: true
        }), false);
        try {
          await e()
        } finally {
          this.setState({
            isLoading: false
          })
        }
      }
    }), O(this, "handleKeyboardPreload", e => {
      C.has(e.key) && this.handlePreload()
    }), O(this, "handleDocumentMouseDown", e => {
      let {
        ignoreModalClicks: t,
        closeOnClickOutside: n
      } = this.props;
      if (false === n) return;
      let r = e.target,
        i = this.domElementRef.current;
      if (null != i) {
        if ((0, f.ty$)(i, r) || g.Z.isOpen() || t && (0, _.hasAnyModalOpen)()) return;
        this.isValidClickStart = true
      }
    }), O(this, "handleDocumentMouseUp", e => {
      this.isValidClickStart && (this.isValidClickStart = false, this.close(e, "system:click_outside"))
    }), O(this, "handlePopoutPositionChange", e => {
      this.setState({
        renderedPosition: e
      })
    }), O(this, "handleScroll", e => {
      let t = e.target;
      (null == t ? true : t.contains(this.domElementRef.current)) && this.close(true, "system:scroll")
    }), O(this, "handleEscapeClose", e => {
      this.close(e, "user:escape")
    }), O(this, "handleStickyScroll", s()(() => {
      requestAnimationFrame(() => {
        let e = this.popoutRef.current;
        if (null != e && this.shouldShowPopout(this.props, this.state)) {
          var t;
          N(e) || this.close(true, "system:viewport_exit"), null == (t = this.layerRef.current) || t.updatePosition()
        }
      })
    }, 1e3 / 60))
  }
}
O(A, "defaultProps", {
  autoInvert: false,
  nudgeAlignIntoViewport: false,
  spacing: 0,
  loadingComponent: (0, Chunk54381.jsx)(Chunk920676.x, {}),
  closeOnClickOutside: true
}), O(A, "contextType", Chunk728285.ZP);
let N = e => {
  var t, n, r, i, a, o;
  let s = e.getBoundingClientRect(),
    l = null != (a = null == (n = e.ownerDocument) || null == (t = n.defaultView) ? true : t.innerHeight) ? a : 0,
    c = null != (o = null == (i = e.ownerDocument) || null == (r = i.defaultView) ? true : r.innerWidth) ? o : 0;
  return s.top < l && s.bottom > 0 && s.left < c && s.right > 0
}