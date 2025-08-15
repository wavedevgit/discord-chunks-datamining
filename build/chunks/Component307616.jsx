/** Chunk was on web.js **/
/** chunk id: 307616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => P,
  v: () => N
}), require("./388685.js"), require("./290780.js"), require("./415506.js"), require("./482853.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk215569 = require("./215569.js"),
  Chunk770278 = require("./770278.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk724723 = require("./724723.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk429142 = require("./429142.js"),
  Chunk585483 = require("./585483.js"),
  Chunk952265 = require("./952265.js"),
  Chunk602091 = require("./602091.js"),
  Chunk981631 = require("./981631.js"),
  Chunk233477 = require("./233477.js");

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
let S = [Chunk314910.ZP, Chunk429142.ZP];
class A extends Chunk73800.PureComponent {
  render() {
    let {
      render: e,
      LayerComponent: t,
      isTopModal: n,
      instant: i
    } = this.props, a = Chunk73800 ? Chunk602091.Dv.ENTERED : this.state.transitionState;
    return (0, Chunk255367.jsx)(exports, {
      children: (0, Chunk255367.jsx)("div", {
        className: o()(Chunk233477.layer, !require && Chunk233477.inactive),
        children: module({
          transitionState: Chunk120356,
          onClose: this.close
        })
      })
    })
  }
  constructor(...e) {
    super(...e), O(this, "state", {
      transitionState: null
    }), O(this, "componentWillAppear", e => {
      this.componentWillEnter(e)
    }), O(this, "componentWillEnter", e => {
      let {
        instant: t
      } = this.props;
      this.setState({
        transitionState: E.Dv.ENTERING
      }), setTimeout(() => {
        this.setState({
          transitionState: E.Dv.ENTERED
        }), null == e || e()
      }, t ? 0 : E.CT)
    }), O(this, "componentWillLeave", e => {
      let {
        instant: t
      } = this.props;
      this.setState({
        transitionState: E.Dv.EXITING
      }), setTimeout(() => {
        this.setState({
          transitionState: E.Dv.EXITED
        }), e()
      }, t ? 0 : E.CT)
    }), O(this, "componentDidUpdate", e => {
      if (e.isVisible !== this.props.isVisible) {
        let {
          transitionState: e
        } = this.state;
        e === E.Dv.HIDDEN && this.props.isVisible && this.componentWillEnter(), this.props.isVisible || e !== E.Dv.ENTERING && e !== E.Dv.ENTERED || this.setState({
          transitionState: E.Dv.HIDDEN
        })
      }
    }), O(this, "close", () => new Promise(e => {
      this.props.closeModal(this.props.modalKey), setTimeout(() => e(), E.CT)
    }))
  }
}

function N() {
  return (0, Chunk952265.Vn)((0, Chunk40851.bp)())
}

function C(e) {
  let t = [],
    n = false;
  for (let i = e.length - 1; i >= 0; i--) {
    var r;
    let a = e[i],
      o = null == (r = e[i + 1]) ? true : r.stackingBehavior,
      s = n || "replace" === o;
    t.unshift(T(v({}, a), {
      isVisible: !s
    })), "replaceAll" === a.stackingBehavior && (n = true)
  }
  return t
}
let R = [];

function P() {
  let e = N(),
    t = (0, Chunk952265.s9)(t => true !== t[e] ? t[e] : R),
    n = Chunk73800.useMemo(() => C(exports), [exports]),
    a = (0, Chunk724723.q)("Modals"),
    o = Chunk73800.useRef(true);
  Chunk73800.useLayoutEffect(() => {
    o.current = exports[exports.length - 1]
  }, [exports]);
  let s = exports.length > 0;
  Chunk73800.useLayoutEffect(() => {
    if (!Chunk392711) return;
    let e = () => {
      let e = o.current;
      null != module && null != module.onCloseRequest && module.onCloseRequest()
    };
    return Chunk585483.S.subscribe(Chunk981631.CkL.MODAL_CLOSE, module), () => {
      Chunk585483.S.unsubscribe(Chunk981631.CkL.MODAL_CLOSE, module)
    }
  }, [Chunk392711]);
  let f = Chunk73800.useCallback(() => {
      Chunk585483.S.dispatch(Chunk981631.CkL.MODAL_CLOSE)
    }, []),
    h = Chunk73800.useCallback(t => {
      (0, g.Mr)(t, e)
    }, [module]),
    E = S.map(e => t.some(t => t.Layer === e || null == t.Layer && e === p.ZP));
  return (0, Chunk255367.jsxs)(Chunk215569.W, {
    component: Chunk73800.Fragment,
    children: [S.map((e, n) => {
      var i;
      let o = l().findLast(t, t => t.Layer === e || null == t.Layer && e === p.ZP),
        s = null != (i = null == o ? true : o.backdropStyle) ? i : d.fCB.DARK;
      return a && (0, d.OLG)(s) ? (0, r.jsx)(e, {
        children: (0, r.jsx)(d.ZMr, {
          variant: s === d.fCB.LIGHTBOX || s === d.fCB.IMMERSIVE ? "lightbox" : "default",
          animationVariant: (null == o ? true : o.instant) ? "instant" : "default",
          isVisible: E[n],
          onClick: f
        })
      }, "layer-".concat(n)) : (0, r.jsx)(u.Z, {
        isVisible: E[n],
        backdropStyle: s,
        onClose: f,
        LayerComponent: e,
        backdropInstant: null == o ? true : o.instant
      }, "layer-".concat(n))
    }), require.map((e, t) => {
      let {
        key: i,
        Layer: a,
        render: o,
        instant: s,
        isVisible: l
      } = e;
      return (0, r.jsx)(A, {
        modalKey: i,
        LayerComponent: null != a ? a : p.ZP,
        isVisible: l,
        isTopModal: t === n.length - 1,
        render: o,
        closeModal: h,
        instant: s
      }, i)
    })]
  })
}