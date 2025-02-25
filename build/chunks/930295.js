/** Chunk was on web.js **/
"use strict";
n.d(t, {
  F: () => S,
  H: () => T
}), n(266796), n(47120), n(411104);
var r, i = n(200651),
  o = n(192379),
  a = n(97613),
  s = n.n(a),
  l = n(995295),
  c = n(374470),
  u = n(846519),
  d = n(302901),
  f = n(539907),
  p = n(952265),
  _ = n(481060),
  h = n(40851),
  m = n(314910),
  g = n(920676),
  E = n(981631);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function b(e) {
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
let S = Symbol("POPOUT_PREVENT_CLOSE"),
  I = new Set(["Spacebar", " ", "Enter"]);
class T extends(r = o.Component) {
  shouldShowPopout(e, t) {
    return null != e.shouldShow ? e.shouldShow : t.shouldShowPopout
  }
  componentDidMount() {
    this.shouldShowPopout(this.props, this.state) && this.setupShowPopout()
  }
  componentDidUpdate(e, t) {
    e.shouldShow, this.props.shouldShow;
    let n = this.shouldShowPopout(this.props, this.state);
    if ((this.shouldShowPopout(e, t) !== n || t.isLoading !== this.state.isLoading) && (n ? this.setupShowPopout() : this.unsubscribe()), this.props.closeOnScroll !== e.closeOnScroll) {
      var r, i;
      let e = this.getDomElement();
      this.props.closeOnScroll ? null === (r = e.ownerDocument) || void 0 === r || r.addEventListener("scroll", this.handleScroll, !0) : null === (i = e.ownerDocument) || void 0 === i || i.removeEventListener("scroll", this.handleScroll, !0)
    }
  }
  getDomElement() {
    let e = l.findDOMNode(this);
    if (!(0, c.k)(e)) throw Error("Popout cannot find DOM node");
    return e
  }
  setupShowPopout() {
    var e, t, n;
    let r = this.getDomElement();
    null === (e = r.ownerDocument) || void 0 === e || e.addEventListener("mousedown", this.handleDocumentMouseDown, !0), null === (t = r.ownerDocument) || void 0 === t || t.addEventListener("mouseup", this.handleDocumentMouseUp, !0), this.props.closeOnScroll && (null === (n = r.ownerDocument) || void 0 === n || n.addEventListener("scroll", this.handleScroll, !0)), this.context.windowDispatch.subscribe(E.CkL.POPOUT_CLOSE, this.close), this.domElementRef.current = r, this.isValidClickStart = !1, this.forceUpdate()
  }
  unsubscribe() {
    var e, t, n, r;
    let i = this.domElementRef.current;
    null != i && (null === (t = i.ownerDocument) || void 0 === t || t.removeEventListener("mousedown", this.handleDocumentMouseDown, !0), null === (n = i.ownerDocument) || void 0 === n || n.removeEventListener("mouseup", this.handleDocumentMouseUp, !0), null === (r = i.ownerDocument) || void 0 === r || r.removeEventListener("scroll", this.handleScroll, !0)), this.context.windowDispatch.unsubscribe(E.CkL.POPOUT_CLOSE, this.close), null === (e = this.resizeObserver) || void 0 === e || e.disconnect()
  }
  componentWillUnmount() {
    this.unsubscribe(), this.domElementRef.current = null, this.loadingTimeout.stop(), this.validClickTimeout.stop()
  }
  render() {
    let {
      children: e,
      useMouseEnter: t
    } = this.props, n = this.shouldShowPopout(this.props, this.state);
    return (0, i.jsxs)(o.Fragment, {
      children: [e(O(b({
        onMouseDown: this.handlePreload
      }, t ? {
        onMouseEnter: this.handleMouseEnter
      } : {}), {
        onKeyDown: this.handleKeyboardPreload,
        onClick: this.handleClick,
        "aria-controls": n ? this.popoutId : void 0,
        "aria-expanded": n
      }), {
        isShown: n,
        position: this.state.renderedPosition
      }), (0, i.jsx)(_.y5t, {
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
      overridePositionRef: c,
      disablePointerEvents: u,
      layerContext: p,
      clickTrap: _ = !1
    } = this.props, {
      resizeKey: h,
      isLoading: g,
      shouldShowLoadingState: E
    } = this.state;
    return g && !E ? null : (0, i.jsx)(d.mh, {
      layerContext: null != p ? p : m.nz,
      children: (0, i.jsx)(f.j, {
        ref: this.layerRef,
        onMount: this.handlePopoutShow,
        onUnmount: this.handlePopoutHide,
        id: this.popoutId,
        targetRef: null != c ? c : this.domElementRef,
        position: e,
        align: t,
        nudgeAlignIntoViewport: n,
        useRawTargetDimensions: r,
        spacing: o,
        autoInvert: a,
        fixed: s,
        positionKey: null != l ? l : String(h),
        disablePointerEvents: u,
        onPositionChange: this.handlePopoutPositionChange,
        clickTrap: _,
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
    super(...e), v(this, "domElementRef", o.createRef()), v(this, "layerRef", o.createRef()), v(this, "popoutRef", o.createRef()), v(this, "resizeObserver", void 0), v(this, "popoutId", "popout_".concat(s()())), v(this, "loadingTimeout", new u.V7), v(this, "validClickTimeout", new u.V7), v(this, "isValidClickStart", !1), v(this, "state", {
      renderedPosition: this.props.position,
      shouldShowPopout: !1,
      shouldShowLoadingState: !1,
      isLoading: !1,
      resizeKey: 0
    }), v(this, "handlePopoutShow", () => {
      this.context.windowDispatch.dispatch(E.CkL.POPOUT_SHOW)
    }), v(this, "handlePopoutHide", () => {
      this.context.windowDispatch.dispatch(E.CkL.POPOUT_HIDE)
    }), v(this, "handleSetPopoutRef", e => {
      var t;
      let n = null == e ? void 0 : e.ownerDocument.defaultView;
      null != e && null != n && (this.popoutRef.current = e, null === (t = this.resizeObserver) || void 0 === t || t.disconnect(), this.resizeObserver = new n.ResizeObserver(() => {
        l.flushSync(() => {
          this.setState({
            resizeKey: this.state.resizeKey + 1
          })
        })
      }), this.resizeObserver.observe(e))
    }), v(this, "renderPopout", (e, t) => {
      let {
        renderPopout: n
      } = this.props;
      return this.state.isLoading ? this.props.loadingComponent : n(O(b({}, e), {
        updatePosition: t,
        closePopout: this.close,
        setPopoutRef: this.handleSetPopoutRef
      }))
    }), v(this, "close", e => {
      let {
        onRequestClose: t,
        shouldShow: n
      } = this.props;
      (null == t ? void 0 : t(e)) !== S && null == n && this.toggleShow(!1)
    }), v(this, "handleClick", e => {
      let {
        onShiftClick: t,
        shouldShow: n,
        onRequestOpen: r,
        onRequestClose: i
      } = this.props;
      if (e.shiftKey && null != t) {
        t(e);
        return
      }
      let o = null != n;
      (o ? n : this.state.shouldShowPopout) ? null == i || i(): null == r || r(), o || this.setState(e => {
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
        shouldShowPopout: !0
      })
    }), v(this, "handlePreload", async () => {
      let {
        preload: e
      } = this.props;
      if (null != e) {
        this.setState({
          isLoading: !0
        }), this.loadingTimeout.start(250, () => this.setState({
          shouldShowLoadingState: !0
        }), !1);
        try {
          await e()
        } finally {
          this.setState({
            isLoading: !1
          })
        }
      }
    }), v(this, "handleKeyboardPreload", e => {
      I.has(e.key) && this.handlePreload()
    }), v(this, "handleDocumentMouseDown", e => {
      let {
        ignoreModalClicks: t
      } = this.props, n = e.target, r = this.domElementRef.current;
      if (null != r) {
        if ((0, f.t)(r, n) || t && (0, p.$s)()) return;
        this.isValidClickStart = !0
      }
    }), v(this, "handleDocumentMouseUp", e => {
      this.isValidClickStart && (this.isValidClickStart = !1, this.close(e))
    }), v(this, "handlePopoutPositionChange", e => {
      this.setState({
        renderedPosition: e
      })
    }), v(this, "handleScroll", () => {
      this.close()
    })
  }
}
v(T, "defaultProps", {
  autoInvert: !1,
  nudgeAlignIntoViewport: !1,
  spacing: 0,
  loadingComponent: (0, i.jsx)(g.x, {})
}), v(T, "contextType", h.ZP)