/** Chunk was on web.js **/
/** chunk id: 930295, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => S,
  H: () => N
}), require("./953529.js"), require("./388685.js"), require("./415506.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk97613 = require("./97613.js"),
  s = require.n(Chunk97613),
  Chunk867309 = require("./867309.js"),
  Chunk374470 = require("./374470.js"),
  Chunk846519 = require("./846519.js"),
  Chunk302901 = require("./302901.jsx"),
  Chunk539907 = require("./539907.jsx"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk314910 = require("./314910.jsx"),
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

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = Symbol("POPOUT_PREVENT_CLOSE"),
  A = new Set(["Spacebar", " ", "Enter"]);
class N extends(r = Chunk73800.Component) {
  shouldShowPopout(e, t) {
    return null != e.shouldShow ? e.shouldShow : t.shouldShowPopout
  }
  componentDidMount() {
    this.shouldShowPopout(this.props, this.state) && this.setupShowPopout()
  }
  componentDidUpdate(e, t) {
    e.shouldShow, this.props.shouldShow;
    let n = this.shouldShowPopout(this.props, this.state);
    if ((this.shouldShowPopout(e, t) !== n || t.isLoading !== this.state.isLoading || e.ignoreModalClicks !== this.props.ignoreModalClicks) && (n ? this.setupShowPopout() : this.unsubscribe()), this.props.closeOnScroll !== e.closeOnScroll) {
      var r, i;
      let e = this.getDomElement();
      if (null == e) return;
      this.props.closeOnScroll ? null == (r = e.ownerDocument) || r.addEventListener("scroll", this.handleScroll, true) : null == (i = e.ownerDocument) || i.removeEventListener("scroll", this.handleScroll, true)
    }
  }
  getDomElement() {
    var e;
    let t = null == (e = this.props.targetElementRef) ? true : module.current;
    if (!(0, Chunk374470.k)(exports)) {
      let e = Error("Popout cannot find DOM node");
      return console.error(module), Chunk960048.Z.captureException(module), null
    }
    return exports
  }
  get closeAction() {
    return this.props.ignoreModalClicks ? Chunk981631.CkL.POPOUT_CLOSE_AFTER_MODALS : Chunk981631.CkL.POPOUT_CLOSE
  }
  setupShowPopout() {
    var e, t, n;
    let r = this.getDomElement();
    null != r && (null == (e = r.ownerDocument) || module.addEventListener("mousedown", this.handleDocumentMouseDown, true), null == (t = r.ownerDocument) || exports.addEventListener("mouseup", this.handleDocumentMouseUp, true), this.props.closeOnScroll && (null == (n = r.ownerDocument) || require.addEventListener("scroll", this.handleScroll, true)), this.context.windowDispatch.subscribe(this.closeAction, this.close), this.domElementRef.current = r, this.isValidClickStart = false, this.forceUpdate())
  }
  unsubscribe() {
    var e, t, n, r;
    let i = this.domElementRef.current;
    null != Chunk255367 && (null == (t = Chunk255367.ownerDocument) || exports.removeEventListener("mousedown", this.handleDocumentMouseDown, true), null == (n = Chunk255367.ownerDocument) || require.removeEventListener("mouseup", this.handleDocumentMouseUp, true), null == (r = Chunk255367.ownerDocument) || r.removeEventListener("scroll", this.handleScroll, true)), this.context.windowDispatch.unsubscribe(Chunk981631.CkL.POPOUT_CLOSE, this.close), this.context.windowDispatch.unsubscribe(Chunk981631.CkL.POPOUT_CLOSE_AFTER_MODALS, this.close), null == (e = this.resizeObserver) || module.disconnect()
  }
  componentWillUnmount() {
    this.unsubscribe(), this.domElementRef.current = null, this.loadingTimeout.stop(), this.validClickTimeout.stop()
  }
  render() {
    let {
      children: e,
      useMouseEnter: t
    } = this.props, n = this.shouldShowPopout(this.props, this.state);
    return (0, Chunk255367.jsxs)(Chunk73800.Fragment, {
      children: [module(T(v({
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
      }), (0, Chunk255367.jsx)(Chunk481060.y5t, {
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
      spacing: o,
      autoInvert: a,
      fixed: s,
      positionKey: l,
      disablePointerEvents: c,
      layerContext: u,
      clickTrap: _ = false
    } = this.props, {
      resizeKey: p,
      isLoading: h,
      shouldShowLoadingState: g
    } = this.state;
    return Chunk40851 && !Chunk574254 ? null : (0, Chunk255367.jsx)(Chunk302901.mh, {
      layerContext: null != Chunk846519 ? Chunk846519 : Chunk314910.nz,
      children: (0, Chunk255367.jsx)(Chunk539907.j, {
        ref: this.layerRef,
        onMount: this.handlePopoutShow,
        onUnmount: this.handlePopoutHide,
        id: this.popoutId,
        targetRef: this.domElementRef,
        position: module,
        align: exports,
        nudgeAlignIntoViewport: require,
        useRawTargetDimensions: r,
        spacing: Chunk73800,
        autoInvert: Chunk97613,
        fixed: s,
        positionKey: null != Chunk867309 ? Chunk867309 : String(Chunk481060),
        disablePointerEvents: Chunk374470,
        onPositionChange: this.handlePopoutPositionChange,
        clickTrap: Chunk952265,
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
    super(...e), O(this, "domElementRef", o.createRef()), O(this, "layerRef", o.createRef()), O(this, "popoutRef", o.createRef()), O(this, "resizeObserver", true), O(this, "popoutId", "popout_".concat(s()())), O(this, "loadingTimeout", new u.V7), O(this, "validClickTimeout", new u.V7), O(this, "isValidClickStart", false), O(this, "state", {
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
        l.flushSync(() => {
          this.setState({
            resizeKey: this.state.resizeKey + 1
          })
        })
      }), this.resizeObserver.observe(e))
    }), O(this, "renderPopout", (e, t) => {
      let {
        renderPopout: n
      } = this.props;
      return this.state.isLoading ? this.props.loadingComponent : n(T(v({}, e), {
        updatePosition: t,
        closePopout: this.close,
        setPopoutRef: this.handleSetPopoutRef
      }))
    }), O(this, "close", e => {
      let {
        onRequestClose: t,
        shouldShow: n
      } = this.props;
      (null == t ? true : t(e)) !== S && null == n && this.toggleShow(false)
    }), O(this, "handleClick", e => {
      let {
        onShiftClick: t,
        shouldShow: n,
        onRequestOpen: r,
        onRequestClose: i
      } = this.props;
      if ((null == e ? true : e.shiftKey) && null != t) return void t(e);
      let o = null != n;
      (o ? n : this.state.shouldShowPopout) ? null == i || i(): null == r || r(), o || this.setState(e => {
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
      A.has(e.key) && this.handlePreload()
    }), O(this, "handleDocumentMouseDown", e => {
      let {
        ignoreModalClicks: t,
        closeOnClickOutside: n
      } = this.props;
      if (false === n) return;
      let r = e.target,
        i = this.domElementRef.current;
      if (null != i) {
        if ((0, f.t)(i, r) || g.Z.isOpen() || t && (0, _.$s)()) return;
        this.isValidClickStart = true
      }
    }), O(this, "handleDocumentMouseUp", e => {
      this.isValidClickStart && (this.isValidClickStart = false, this.close(e))
    }), O(this, "handlePopoutPositionChange", e => {
      this.setState({
        renderedPosition: e
      })
    }), O(this, "handleScroll", () => {
      this.close()
    })
  }
}
O(N, "defaultProps", {
  autoInvert: false,
  nudgeAlignIntoViewport: false,
  spacing: 0,
  loadingComponent: (0, Chunk255367.jsx)(Chunk920676.x, {}),
  closeOnClickOutside: true
}), O(N, "contextType", Chunk40851.ZP)