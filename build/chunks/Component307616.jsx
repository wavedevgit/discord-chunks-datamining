/** Chunk was on web.js **/
/** chunk id: 307616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => P,
  v: () => A
}), require("./388685.js"), require("./290780.js"), require("./415506.js"), require("./482853.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk793030 = require("./793030.js"),
  Chunk215569 = require("./215569.js"),
  Chunk770278 = require("./770278.jsx"),
  Chunk314910 = require("./314910.jsx"),
  Chunk429142 = require("./429142.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk952265 = require("./952265.js"),
  Chunk602091 = require("./602091.js"),
  Chunk981631 = require("./981631.js"),
  Chunk233477 = require("./233477.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
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

function v(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = [Chunk314910.ZP, Chunk429142.ZP];
class T extends Chunk473749.PureComponent {
  render() {
    let {
      render: e,
      LayerComponent: t,
      isTopModal: n,
      instant: i,
      dismissable: a
    } = this.props, s = module({
      transitionState: Chunk473749 ? Chunk602091.Dv.ENTERED : this.state.transitionState,
      onClose: this.close,
      dismissable: Chunk120356
    });
    return (0, Chunk54381.jsx)(exports, {
      children: (0, Chunk54381.jsx)("div", {
        className: o()(Chunk233477.layer, !require && Chunk233477.inactive),
        children: Chunk392711
      })
    })
  }
  constructor(...e) {
    super(...e), y(this, "state", {
      transitionState: null
    }), y(this, "componentWillAppear", e => {
      this.componentWillEnter(e)
    }), y(this, "componentWillEnter", e => {
      let {
        instant: t
      } = this.props;
      this.setState({
        transitionState: g.Dv.ENTERING
      }), setTimeout(() => {
        this.setState({
          transitionState: g.Dv.ENTERED
        }), null == e || e()
      }, t ? 0 : g.CT)
    }), y(this, "componentWillLeave", e => {
      let {
        instant: t
      } = this.props;
      this.setState({
        transitionState: g.Dv.EXITING
      }), setTimeout(() => {
        this.setState({
          transitionState: g.Dv.EXITED
        }), e()
      }, t ? 0 : g.CT)
    }), y(this, "componentDidUpdate", e => {
      if (e.isVisible !== this.props.isVisible) {
        let {
          transitionState: e
        } = this.state;
        e === g.Dv.HIDDEN && this.props.isVisible && this.componentWillEnter(), this.props.isVisible || e !== g.Dv.ENTERING && e !== g.Dv.ENTERED || this.setState({
          transitionState: g.Dv.HIDDEN
        })
      }
    }), y(this, "close", () => new Promise(e => {
      this.props.closeModal(this.props.modalKey), setTimeout(() => e(), g.CT)
    }))
  }
}

function A() {
  return (0, Chunk952265.Vn)((0, Chunk728285.bp)())
}

function C(e) {
  let t = [],
    n = false;
  for (let i = e.length - 1; i >= 0; i--) {
    var r;
    let a = e[i],
      o = null == (r = e[i + 1]) ? true : r.stackingBehavior,
      s = n || "replace" === o;
    t.unshift(S(O({}, a), {
      isVisible: !s
    })), "replaceAll" === a.stackingBehavior && (n = true)
  }
  return t
}
let N = [];

function P() {
  let e = A(),
    t = (0, Chunk952265.s9)(t => true !== t[e] ? t[e] : N),
    n = Chunk473749.useMemo(() => C(exports), [exports]),
    a = Chunk473749.useRef(true);
  Chunk473749.useLayoutEffect(() => {
    Chunk120356.current = exports[exports.length - 1]
  }, [exports]);
  let o = exports.length > 0;
  Chunk473749.useLayoutEffect(() => {
    if (!o) return;
    let e = () => {
      let e = Chunk120356.current;
      null != module && null != module.onCloseRequest && false !== module.dismissable && module.onCloseRequest()
    };
    return Chunk585483.S.subscribe(Chunk981631.CkL.MODAL_CLOSE, module), () => {
      Chunk585483.S.unsubscribe(Chunk981631.CkL.MODAL_CLOSE, module)
    }
  }, [o]);
  let s = Chunk473749.useCallback(() => {
      let e = Chunk120356.current;
      (null == module ? true : module.dismissable) !== false && Chunk585483.S.dispatch(Chunk981631.CkL.MODAL_CLOSE)
    }, []),
    p = Chunk473749.useCallback(t => {
      (0, h.Mr)(t, e)
    }, [module]),
    _ = I.map(e => t.some(t => t.Layer === e || null == t.Layer && e === f.ZP));
  return (0, Chunk54381.jsxs)(Chunk215569.W, {
    component: Chunk473749.Fragment,
    children: [I.map((e, n) => {
      var i;
      let a = l().findLast(t, t => t.Layer === e || null == t.Layer && e === f.ZP),
        o = null != (i = null == a ? true : a.backdropStyle) ? i : c.fCB.DARK;
      return (0, c.OLG)(o) ? (0, r.jsx)(e, {
        children: (0, r.jsx)(c.ZMr, {
          variant: o === c.fCB.LIGHTBOX || o === c.fCB.IMMERSIVE ? "lightbox" : "default",
          animationVariant: (null == a ? true : a.instant) ? "instant" : "default",
          isVisible: _[n],
          onClick: s
        })
      }, "layer-".concat(n)) : (0, r.jsx)(d.Z, {
        isVisible: _[n],
        backdropStyle: o,
        onClose: s,
        LayerComponent: e,
        backdropInstant: null == a ? true : a.instant
      }, "layer-".concat(n))
    }), require.map((e, t) => {
      let {
        key: i,
        Layer: a,
        render: o,
        instant: s,
        isVisible: l,
        dismissable: c
      } = e;
      return (0, r.jsx)(T, {
        modalKey: i,
        LayerComponent: null != a ? a : f.ZP,
        isVisible: l,
        isTopModal: t === n.length - 1,
        render: o,
        closeModal: p,
        instant: s,
        dismissable: c
      }, i)
    })]
  })
}