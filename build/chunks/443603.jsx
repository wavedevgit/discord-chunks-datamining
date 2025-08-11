/** Chunk was on web.js **/
/** chunk id: 443603, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O,
  j: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.js"),
  Chunk855981 = require("./855981.js"),
  Chunk55543 = require("./55543.jsx"),
  Chunk504684 = require("./504684.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var g = function(e) {
  return e[e.UPDATE = 0] = "UPDATE", e[e.NEW = 1] = "NEW", e
}({});
let E = 20,
  b = {
    config: {
      friction: 26,
      tension: 700,
      mass: 1
    },
    initial: {
      scale: 1,
      opacity: 1
    },
    from: {
      scale: .6,
      opacity: 0
    },
    enter: {
      scale: 1,
      opacity: 1
    },
    leave: {
      scale: .6,
      opacity: 0
    }
  };

function y(e) {
  let {
    ref: t,
    className: n,
    disabled: i = false,
    childClassName: o,
    iconClassName: _,
    icon: h,
    children: g,
    onClick: y,
    onDoubleClick: O,
    isActive: v,
    onMouseEnter: I,
    onMouseLeave: T,
    onFocus: S,
    onBlur: A,
    pulse: N,
    sparkle: C,
    notification: R,
    "aria-label": P,
    "aria-expanded": w,
    "aria-haspopup": D,
    "aria-controls": L,
    noHover: x
  } = e, M = (0, l.Yzy)(null != g, m(p({}, b), {
    keys: e => e ? "children" : "icon"
  })), k = e => {
    let {
      component: t
    } = e;
    return null != R ? <div className={f.buttonContent}>{<c.ZP className={f.iconMask} mask={c.QS.CHAT_INPUT_BUTTON_NOTIFICATION} width={E} height={E}>{t}</c.ZP>}{<span className={f.notificationDot} />}</div> : t
  };
  return <l.P3F innerRef={t} aria-label={P} aria-expanded={w} aria-haspopup={D} aria-controls={L} aria-disabled={i} className={a()(n, f.button, {
      [f.active]: v,
      [f.noHover]: x,
      [f.pulseButton]: N,
      [f.disabled]: i
    })} onClick={i ? true : y} onDoubleClick={i ? true : O} onMouseEnter={I} onMouseLeave={T} onFocus={S} onBlur={A} focusProps={{
      offset: {
        top: 4,
        bottom: 4
      }
    }}>{M((e, t, n) => {
      let {
        key: i
      } = n;
      return t ? <s.animated.div style={e} className={a()(f.buttonWrapper, o)}>{k({
          component: g
        })}</s.animated.div> : null != h ? <s.animated.div style={e} className={a()(f.buttonWrapper, o)}>{k({
          component: (0, r.jsx)(h, {
            className: a()(f.icon, _, {
              [f.pulseIcon]: N
            }),
            color: "currentColor"
          })
        })}</s.animated.div> : true
    })}{C && <div className={f.sparkleContainer}>{<d.Z className={f.sparkleStar} />}{<u.Z className={f.sparklePlus} />}</div>}</l.P3F>
}
let O = Chunk73800.memo(y)