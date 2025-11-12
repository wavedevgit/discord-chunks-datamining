/** Chunk was on web.js **/
/** chunk id: 930295, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => A,
  H: () => N
}), require("./953529.js"), require("./388685.js"), require("./415506.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk299608 = require("./299608.js"),
  s = require.n(Chunk299608),
  Chunk97613 = require("./97613.js"),
  c = require.n(Chunk97613),
  Chunk603113 = require("./603113.js"),
  Chunk374470 = require("./374470.js"),
  Chunk793030 = require("./793030.js"),
  Chunk846519 = require("./846519.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk574254 = require("./574254.js"),
  Chunk960048 = require("./960048.js"),
  Chunk920676 = require("./920676.jsx"),
  Chunk981631 = require("./981631.js");

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
let A = Symbol("POPOUT_PREVENT_CLOSE"),
  C = new Set(["Spacebar", " ", "Enter"]);
class N extends(r = Chunk647438.Component) {
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
    let t = null == (e = this.props.targetElementRef) ? true : module.current;
    if (!(0, Chunk374470.kK)(exports)) {
      let e = Error("Popout cannot find DOM node");
      return console.error(module), Chunk960048.Z.captureException(module), null
    }
    return exports
  }
  get closeAction() {
    return this.props.ignoreModalClicks ? Chunk981631.CkL.POPOUT_CLOSE_AFTER_MODALS : Chunk981631.CkL.POPOUT_CLOSE
  }
  setupShowPopout() {
    var e, t, n, r;
    let i = this.getDomElement();
    null != Chunk951288 && (null == (e = Chunk951288.ownerDocument) || module.addEventListener("mousedown", this.handleDocumentMouseDown, true), null == (t = Chunk951288.ownerDocument) || exports.addEventListener("mouseup", this.handleDocumentMouseUp, true), "close" === this.props.scrollBehavior ? null == (n = Chunk951288.ownerDocument) || require.addEventListener("scroll", this.handleScroll, true) : "sticky" === this.props.scrollBehavior && (null == (r = Chunk951288.ownerDocument) || r.addEventListener("scroll", this.handleStickyScroll, true)), this.context.windowDispatch.subscribe(this.closeAction, this.handleEscapeClose), this.domElementRef.current = Chunk951288, this.isValidClickStart = false, this.forceUpdate())
  }
  unsubscribe() {
    var e, t, n, r, i;
    let a = this.domElementRef.current;
    null != Chunk647438 && (null == (t = Chunk647438.ownerDocument) || exports.removeEventListener("mousedown", this.handleDocumentMouseDown, true), null == (n = Chunk647438.ownerDocument) || require.removeEventListener("mouseup", this.handleDocumentMouseUp, true), null == (r = Chunk647438.ownerDocument) || r.removeEventListener("scroll", this.handleScroll, true), null == (i = Chunk647438.ownerDocument) || Chunk951288.removeEventListener("scroll", this.handleStickyScroll, true)), this.context.windowDispatch.unsubscribe(Chunk981631.CkL.POPOUT_CLOSE, this.handleEscapeClose), this.context.windowDispatch.unsubscribe(Chunk981631.CkL.POPOUT_CLOSE_AFTER_MODALS, this.handleEscapeClose), null == (e = this.resizeObserver) || module.disconnect()
  }
  componentWillUnmount() {
    this.unsubscribe(), this.domElementRef.current = null, this.loadingTimeout.stop(), this.validClickTimeout.stop()
  }
  render() {
    let {
      children: e,
      useMouseEnter: t
    } = this.props, n = this.shouldShowPopout(this.props, this.state);
    return (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [module(S(I({
        onMouseDown: this.handlePreload
      }, exports ? {
        onMouseEnter: this.handleMouseEnter
      } : {}), {
        onKeyDown: this.handleKeyboardPreload,
        onClick: this.handleClick,
        "aria-controls": require ? this.popoutId : true,
        "aria-expanded": require
      }), {
        isShown: require,
        position: this.state.renderedPosition
      }), (0, Chunk951288.jsx)(Chunk481060.y5t, {
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
      autoInvert: o,
      fixed: s,
      positionKey: l,
      disablePointerEvents: c,
      layerContext: u,
      clickTrap: d = false
    } = this.props, {
      resizeKey: _,
      isLoading: p,
      shouldShowLoadingState: g
    } = this.state;
    return Chunk952265 && !Chunk728285 ? null : (0, Chunk951288.jsx)(Chunk793030.mh4, {
      layerContext: null != Chunk603113 ? Chunk603113 : Chunk314910.nz,
      children: (0, Chunk951288.jsx)(Chunk481060.jRF, {
        ref: this.layerRef,
        onMount: this.handlePopoutShow,
        onUnmount: this.handlePopoutHide,
        id: this.popoutId,
        targetRef: this.domElementRef,
        position: module,
        align: exports,
        nudgeAlignIntoViewport: require,
        useRawTargetDimensions: r,
        spacing: Chunk647438,
        autoInvert: Chunk299608,
        fixed: s,
        positionKey: null != Chunk97613 ? Chunk97613 : String(Chunk846519),
        disablePointerEvents: c,
        onPositionChange: this.handlePopoutPositionChange,
        clickTrap: Chunk374470,
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
    super(...e), v(this, "domElementRef", a.createRef()), v(this, "layerRef", a.createRef()), v(this, "popoutRef", a.createRef()), v(this, "resizeObserver", true), v(this, "popoutId", "popout_".concat(c()())), v(this, "loadingTimeout", new _.V7), v(this, "validClickTimeout", new _.V7), v(this, "isValidClickStart", false), v(this, "state", {
      renderedPosition: this.props.position,
      shouldShowPopout: false,
      shouldShowLoadingState: false,
      isLoading: false,
      resizeKey: 0
    }), v(this, "handlePopoutShow", () => {
      this.context.windowDispatch.dispatch(O.CkL.POPOUT_SHOW, this.props.popoutKey)
    }), v(this, "handlePopoutHide", () => {
      this.context.windowDispatch.dispatch(O.CkL.POPOUT_HIDE, this.props.popoutKey)
    }), v(this, "handleSetPopoutRef", e => {
      var t;
      let n = null == e ? true : e.ownerDocument.defaultView;
      null != e && null != n && (this.popoutRef.current = e, null == (t = this.resizeObserver) || t.disconnect(), this.resizeObserver = new n.ResizeObserver(() => {
        u.flushSync(() => {
          this.setState({
            resizeKey: this.state.resizeKey + 1
          })
        })
      }), this.resizeObserver.observe(e))
    }), v(this, "renderPopout", (e, t) => {
      let {
        renderPopout: n
      } = this.props;
      return this.state.isLoading ? this.props.loadingComponent : n(S(I({}, e), {
        updatePosition: t,
        closePopout: this.close,
        setPopoutRef: this.handleSetPopoutRef
      }))
    }), v(this, "close", (e, t) => {
      let {
        onRequestClose: n,
        shouldShow: r
      } = this.props;
      (null == n ? true : n(e, t)) !== A && null == r && this.toggleShow(false)
    }), v(this, "handleClick", e => {
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
    }), v(this, "handleMouseEnter", () => {
      let {
        onRequestOpen: e
      } = this.props;
      null == e || e(), this.setState({
        shouldShowPopout: true
      })
    }), v(this, "handlePreload", async () => {
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
    }), v(this, "handleKeyboardPreload", e => {
      C.has(e.key) && this.handlePreload()
    }), v(this, "handleDocumentMouseDown", e => {
      let {
        ignoreModalClicks: t,
        closeOnClickOutside: n
      } = this.props;
      if (false === n) return;
      let r = e.target,
        i = this.domElementRef.current;
      if (null != i) {
        if ((0, h.ty$)(i, r) || E.Z.isOpen() || t && (0, p.$s)()) return;
        this.isValidClickStart = true
      }
    }), v(this, "handleDocumentMouseUp", e => {
      this.isValidClickStart && (this.isValidClickStart = false, this.close(e, "system:click_outside"))
    }), v(this, "handlePopoutPositionChange", e => {
      this.setState({
        renderedPosition: e
      })
    }), v(this, "handleScroll", e => {
      let t = e.target;
      (null == t ? true : t.contains(this.domElementRef.current)) && this.close(true, "system:scroll")
    }), v(this, "handleEscapeClose", e => {
      this.close(e, "user:escape")
    }), v(this, "handleStickyScroll", s()(() => {
      requestAnimationFrame(() => {
        let e = this.popoutRef.current;
        if (null != e && this.shouldShowPopout(this.props, this.state)) {
          var t;
          R(e) || this.close(true, "system:viewport_exit"), null == (t = this.layerRef.current) || t.updatePosition()
        }
      })
    }, 1e3 / 60))
  }
}
v(N, "defaultProps", {
  autoInvert: false,
  nudgeAlignIntoViewport: false,
  spacing: 0,
  loadingComponent: (0, Chunk951288.jsx)(Chunk920676.x, {}),
  closeOnClickOutside: true
}), v(N, "contextType", Chunk728285.ZP);
let R = e => {
  var t, n, r, i, a, o;
  let s = e.getBoundingClientRect(),
    l = null != (a = null == (n = e.ownerDocument) || null == (t = n.defaultView) ? true : t.innerHeight) ? a : 0,
    c = null != (o = null == (i = e.ownerDocument) || null == (r = i.defaultView) ? true : r.innerWidth) ? o : 0;
  return s.top < l && s.bottom > 0 && s.left < c && s.right > 0
}