/** Chunk was on web.js **/
/** chunk id: 638495, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => w,
  k: () => T
}), require("./896048.js"), require("./667532.js"), require("./65821.js"), require("./775443.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk158954 = require("./158954.js"),
  Chunk73939 = require("./73939.js"),
  Chunk626494 = require("./626494.jsx"),
  Chunk750506 = require("./750506.jsx"),
  Chunk80556 = require("./80556.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk192308 = require("./192308.js"),
  Chunk231723 = require("./231723.js"),
  Chunk652215 = require("./652215.js"),
  Chunk727423 = require("./727423.js");

function b(e, t, n) {
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
      b(e, t, n[t])
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

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = [Chunk750506.Ay, Chunk80556.Ay];
class S extends Chunk64700.PureComponent {
  render() {
    let {
      render: e,
      LayerComponent: t,
      isTopModal: n,
      instant: i,
      dismissable: a
    } = this.props, o = e({
      transitionState: i ? g.ip.ENTERED : this.state.transitionState,
      onClose: this.close,
      dismissable: a
    });
    return (0, r.jsx)(t, {
      children: (0, r.jsx)("div", {
        className: s()(y.qd, !n && y.AD),
        children: o
      })
    })
  }
  constructor(...e) {
    super(...e), b(this, "state", {
      transitionState: null
    }), b(this, "componentWillAppear", e => {
      this.componentWillEnter(e)
    }), b(this, "componentWillEnter", e => {
      let {
        instant: t
      } = this.props;
      this.setState({
        transitionState: g.ip.ENTERING
      }), setTimeout(() => {
        this.setState({
          transitionState: g.ip.ENTERED
        }), null == e || e()
      }, t ? 0 : g.xt)
    }), b(this, "componentWillLeave", e => {
      let {
        instant: t
      } = this.props;
      this.setState({
        transitionState: g.ip.EXITING
      }), setTimeout(() => {
        this.setState({
          transitionState: g.ip.EXITED
        }), e()
      }, t ? 0 : g.xt)
    }), b(this, "componentDidUpdate", e => {
      if (e.isVisible !== this.props.isVisible) {
        let {
          transitionState: e
        } = this.state;
        e === g.ip.HIDDEN && this.props.isVisible && this.componentWillEnter(), this.props.isVisible || e !== g.ip.ENTERING && e !== g.ip.ENTERED || this.setState({
          transitionState: g.ip.HIDDEN
        })
      }
    }), b(this, "close", () => new Promise(e => {
      this.props.closeModal(this.props.modalKey), setTimeout(() => e(), g.xt)
    }))
  }
}

function T() {
  return (0, m.modalContextFromAppContext)((0, _.Us)())
}

function C(e) {
  let t = [],
    n = false;
  for (let i = e.length - 1; i >= 0; i--) {
    var r;
    let a = e[i],
      s = null == (r = e[i + 1]) ? true : r.stackingBehavior,
      o = n || "replace" === s;
    t.unshift(A(O({}, a), {
      isVisible: !o
    })), "replaceAll" === a.stackingBehavior && (n = true)
  }
  return t
}
let N = [];

function w() {
  let e = T(),
    t = (0, m.useModalsStore)(t => true !== t[e] ? t[e] : N),
    n = i.useMemo(() => C(t), [t]),
    a = i.useRef(true);
  i.useLayoutEffect(() => {
    a.current = t[t.length - 1]
  }, [t]);
  let s = t.length > 0;
  i.useLayoutEffect(() => {
    if (!s) return;
    let e = () => {
      let e = a.current;
      null != e && null != e.onCloseRequest && false !== e.dismissable && e.onCloseRequest()
    };
    return h._.subscribe(E.jej.MODAL_CLOSE, e), () => {
      h._.unsubscribe(E.jej.MODAL_CLOSE, e)
    }
  }, [s]);
  let o = i.useCallback(() => {
      let e = a.current;
      (null == e ? true : e.dismissable) !== false && h._.dispatch(E.jej.MODAL_CLOSE)
    }, []),
    p = i.useCallback(t => {
      (0, m.closeModal)(t, e)
    }, [e]),
    _ = I.map(e => t.some(t => t.Layer === e || null == t.Layer && e === f.Ay));
  return (0, r.jsxs)(u.F, {
    component: i.Fragment,
    children: [I.map((e, n) => {
      var i;
      let a = l().findLast(t, t => t.Layer === e || null == t.Layer && e === f.Ay),
        s = null != (i = null == a ? true : a.backdropStyle) ? i : c.F2Z.DARK;
      return (0, c.sC$)(s) ? (0, r.jsx)(e, {
        children: (0, r.jsx)(c.pkL, {
          variant: s === c.F2Z.LIGHTBOX || s === c.F2Z.IMMERSIVE ? "lightbox" : "default",
          animationVariant: (null == a ? true : a.instant) ? "instant" : "default",
          isVisible: _[n],
          onClick: o
        })
      }, "layer-".concat(n)) : (0, r.jsx)(d.A, {
        isVisible: _[n],
        backdropStyle: s,
        onClose: o,
        LayerComponent: e,
        backdropInstant: null == a ? true : a.instant
      }, "layer-".concat(n))
    }), n.map((e, t) => {
      let {
        key: i,
        Layer: a,
        render: s,
        instant: o,
        isVisible: l,
        dismissable: c
      } = e;
      return (0, r.jsx)(S, {
        modalKey: i,
        LayerComponent: null != a ? a : f.Ay,
        isVisible: l,
        isTopModal: t === n.length - 1,
        render: s,
        closeModal: p,
        instant: o,
        dismissable: c
      }, i)
    })]
  })
}