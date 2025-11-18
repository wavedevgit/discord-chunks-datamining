/** Chunk was on web.js **/
/** chunk id: 781160, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Jc: () => j,
  dx: () => M,
  tE: () => G
});
var i, Chunk473749 = require("./473749.js"),
  Chunk54381 = require("./54381.js"),
  s = Object.defineProperty,
  l = (e, t, n) => t in e ? s(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n,
  c = (e, t, n) => (l(e, "symbol" != typeof t ? t + "" : t, n), n),
  u = {
    exports: {}
  };
! function(e) {
  ! function() {
    var t = {}.hasOwnProperty;

    function n() {
      for (var e = [], r = 0; r < arguments.length; r++) {
        var i = arguments[r];
        if (i) {
          var a = typeof i;
          if ("string" === a || "number" === a) e.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var o = n.apply(null, i);
              o && e.push(o)
            }
          } else if ("object" === a) {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              e.push(i.toString());
              continue
            }
            for (var s in i) t.call(i, s) && i[s] && e.push(s)
          }
        }
      }
      return e.join(" ")
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n
  }()
}(u);
let d = u.exports;
var f = function(e, t, n, r, i, a, o, s) {
  if (!e) {
    var l;
    if (true === t) l = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var c = [n, r, i, a, o, s],
        u = 0;
      (l = Error(t.replace(/%s/g, function() {
        return c[u++]
      }))).name = "Invariant Violation"
    }
    throw l.framesToPop = 1, l
  }
};

function _(e, t, n) {
  if (/%$/.test(t)) return 3 === n ? parseFloat(t) / 100 : 255 * parseFloat(t) / 100;
  if ("h" === e[n]) {
    if (/turn$/.test(t)) return 360 * parseFloat(t);
    if (/rad$/.test(t)) return 57.3 * parseFloat(t)
  }
  return parseFloat(t)
}

function p({
  hue: e,
  saturation: t,
  lightness: n,
  alpha: r
}) {
  let i, a = (1 - Math.abs(2 * (n /= 255) - 1)) * (t /= 255),
    o = a * (1 - Math.abs(e / 60 % 2 - 1)),
    s = n - a / 2,
    l = (i = e < 60 ? [a, o, 0] : e < 120 ? [o, a, 0] : e < 180 ? [0, a, o] : e < 240 ? [0, o, a] : e < 300 ? [o, 0, a] : [a, 0, o]).map(e => Math.round((e + s) * 255));
  return {
    red: l[0],
    green: l[1],
    blue: l[2],
    alpha: r
  }
}

function h({
  red: e,
  green: t,
  blue: n,
  alpha: r
}) {
  let i = e / 255,
    a = t / 255,
    o = n / 255,
    s = Math.max(i, a, o),
    l = Math.min(i, a, o),
    c = s - l,
    u = (s + l) / 2,
    d = c > 0 ? c / (1 - Math.abs(2 * u - 1)) : 0;
  if (0 === c) return {
    hue: 0,
    saturation: d,
    lightness: u,
    alpha: r
  };
  let f = 0;
  switch (s) {
    case i:
      f = (a - o) / c % 6;
      break;
    case a:
      f = (o - i) / c + 2;
      break;
    case o:
      f = (a - o) / c + 4
  }
  return {
    hue: 60 * f,
    saturation: d,
    lightness: u,
    alpha: r
  }
}
let m = /^#[0-9a-f]{3,8}$/i,
  g = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class E {
  constructor(e, t, n, r) {
    this.red = e, this.green = t, this.blue = n, this.alpha = r
  }
  toHexString() {
    let e = Math.round(this.red).toString(16),
      t = Math.round(this.green).toString(16),
      n = Math.round(this.blue).toString(16);
    return "#" + (this.red > 15.5 ? module : "0" + module) + (this.green > 15.5 ? exports : "0" + exports) + (this.blue > 15.5 ? require : "0" + require)
  }
  static parseString(e) {
    return e.match(g) ? this.parseColorFnString(e) : e.match(m) ? this.parseHexString(e) : true
  }
  static parseRgbString(e) {
    return "transparent" === e ? new E(0, 0, 0, 0) : this.parseColorFnString(e)
  }
  static parseHexString(e) {
    if (!e.match(m) || [6, 8].includes(e.length)) return;
    if ((e = e.replace("#", "")).length < 6) {
      let [t, n, r, i] = e.split("");
      e = t + t + n + n + r + r, i && (e += i + i)
    }
    let t = e.match(/.{1,2}/g);
    if (null != t) return new E(parseInt(t[0], 16), parseInt(t[1], 16), parseInt(t[2], 16), null != t[3] ? parseInt(t[3], 16) / 255 : 1)
  }
  static parseColorFnString(e) {
    var t;
    let [, n, r] = null != (t = e.match(g)) ? t : [];
    if (!n || !r) return;
    let i = r.split(/\s*[,/\s]\s*/).map(e => e.replace(",", "").trim()).filter(e => "" !== e).map((e, t) => _(n, e, t));
    if ("hsl" === n.substr(0, 3)) {
      let e = p({
        hue: i[0],
        saturation: i[1],
        lightness: i[2],
        alpha: i[3]
      });
      return new E(e.red, e.green, e.blue, e.alpha)
    }
    return new E(i[0], i[1], i[2], "number" == typeof i[3] ? i[3] : 1)
  }
  toHSL() {
    return h({
      red: this.red,
      green: this.green,
      blue: this.blue,
      alpha: this.alpha
    })
  }
  getRelativeLuminance() {
    let e = this.red / 255,
      t = this.green / 255,
      n = this.blue / 255;
    return .2126 * (module <= .03928 ? module / 12.92 : Math.pow((module + .055) / 1.055, 2.4)) + .7152 * (exports <= .03928 ? exports / 12.92 : Math.pow((exports + .055) / 1.055, 2.4)) + .0722 * (require <= .03928 ? require / 12.92 : Math.pow((require + .055) / 1.055, 2.4))
  }
}

function b(e, t) {
  let n = e.alpha,
    r = (1 - n) * t.red + n * e.red,
    i = (1 - n) * t.green + n * e.green;
  return new E(r, i, (1 - n) * t.blue + n * e.blue, e.alpha + t.alpha * (1 - e.alpha))
}

function y(e, t) {
  if (null == e) return "var(--focus-primary)";
  let {
    saturation: n
  } = e.toHSL(), r = e.getRelativeLuminance();
  return n <= .4 ? "var(--focus-primary)" : "u" > typeof t ? r < (t.brightnessTreshold || .2) ? "var(--focus-light, rgba(255,255,255,0.7))" : "var(--focus-dark, rgba(0, 0, 0, 0.85))" : "rgba(255,255,255,0.7)"
}

function O(e) {
  let t = [];
  for (let n of e.styles.slice(1)) {
    let e = E.parseString(n.backgroundColor);
    if (null != e) {
      if (e.alpha > .95) return e;
      t.push(e)
    }
  }
  return t.push(new E(255, 255, 255, 1)), t.reduce(b)
}
let v = "--__adaptive-focus-ring-color",
  I = "--__adaptive-focus-ring-radius";

function T(e) {
  e !== r && (null == r || r.hide(), r = e)
}

function S(e) {
  if (e) return parseInt(e) > 0 ? e : true
}
class A {
  constructor() {
    c(this, "targetElement"), c(this, "targetAncestry"), c(this, "boundingBox"), c(this, "className"), c(this, "offset", 0), c(this, "zIndex"), c(this, "container", null), c(this, "themeOptions"), c(this, "invalidate", () => null)
  }
  setContainer(e) {
    this.container = e
  }
  setThemeOptions(e) {
    this.themeOptions = e
  }
  showElement(e, t = {}) {
    var n;
    this.targetElement = e, this.targetAncestry = this.getElementAncestors(this.targetElement), this.boundingBox = true, this.className = t.className, this.offset = null != (n = t.offset) ? n : 0, this.zIndex = t.zIndex, T(this), this.invalidate()
  }
  hide() {
    this.targetElement = true, this.targetAncestry = true, this.boundingBox = true, this.className = true, this.offset = 0, this.zIndex = true, this.invalidate()
  }
  get visible() {
    return null != this.targetElement || null != this.boundingBox
  }
  getElementAncestors(e) {
    if (null == e) return {
      elements: [],
      styles: []
    };
    let t = [],
      n = [],
      r = e;
    for (; null != r;) t.push(r), "u" > typeof window && n.push(window.getComputedStyle(r)), r = r.parentElement;
    return {
      elements: t,
      styles: n
    }
  }
  getNextZIndexForAncestry(e) {
    for (let t = 0; t < e.elements.length; t++) {
      let n = e.elements[t],
        r = parseInt(e.styles[t].getPropertyValue("z-index"));
      if (!isNaN(r)) return r + 1;
      if (n === this.container) break
    }
  }
  getBorderRadius(e) {
    var t, n, r, i, a, o, s, l;
    let c = null != (n = S(null == (t = e.styles[0]) ? true : t.borderTopLeftRadius)) ? n : "0",
      u = null != (i = S(null == (r = e.styles[0]) ? true : r.borderTopRightRadius)) ? i : "0",
      d = null != (o = S(null == (a = e.styles[0]) ? true : a.borderBottomRightRadius)) ? o : "0",
      f = null != (l = S(null == (s = e.styles[0]) ? true : s.borderBottomLeftRadius)) ? l : "0";
    if ("0" !== c || "0" !== u || "0" !== d || "0" !== f) return `${c} ${u} ${d} ${f}`
  }
  makePositionFromDOMRect(e) {
    var t, n, r, i;
    if (null == this.container) return {};
    let a = this.container.getBoundingClientRect(),
      {
        scrollTop: o,
        scrollLeft: s
      } = this.container,
      l = 0,
      c = 0,
      u = 0,
      d = 0;
    return "number" == typeof this.offset ? (l = this.offset, c = this.offset, u = this.offset, d = this.offset) : (l = null != (t = this.offset.top) ? t : 0, c = null != (n = this.offset.right) ? n : 0, u = null != (r = this.offset.bottom) ? r : 0, d = null != (i = this.offset.left) ? i : 0), {
      top: o + e.top - a.top + l,
      width: e.width - (c + d),
      height: e.height - (u + l),
      left: s + e.left - a.left + d
    }
  }
  getStyle() {
    var e;
    let t = {};
    if (null != this.boundingBox && (t = {
        ...this.makePositionFromDOMRect(this.boundingBox),
        zIndex: this.zIndex
      }), null != this.targetElement && null != this.targetAncestry) {
      let n = O(this.targetAncestry);
      t = {
        ...this.makePositionFromDOMRect(this.targetElement.getBoundingClientRect()),
        zIndex: null != (e = this.zIndex) ? module : this.getNextZIndexForAncestry(this.targetAncestry),
        [v]: y(require, this.themeOptions),
        [I]: this.getBorderRadius(this.targetAncestry)
      }
    }
    return exports
  }
}
let C = new A;
"u" > typeof window && C.setContainer(document.body);
let N = Chunk473749.createContext(C);
var R = function(e, t, n, r) {
  var i = n ? n.call(r, e, t) : true;
  if (true !== i) return !!i;
  if (e === t) returntrue;
  if ("object" != typeof e || !e || "object" != typeof t || !t) returnfalse;
  var a = Object.keys(e),
    o = Object.keys(t);
  if (a.length !== o.length) returnfalse;
  for (var s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < a.length; l++) {
    var c = a[l];
    if (!s(c)) returnfalse;
    var u = e[c],
      d = t[c];
    if (false === (i = n ? n.call(r, u, d, c) : true) || true === i && u !== d) returnfalse
  }
  returntrue
};
let P = false,
  D, w = {};

function L() {
  if (!P) return;
  let e = null == r ? true : r.getStyle();
  null == module || R(module, w) ? null != D && cancelAnimationFrame(D) : (w = module, null == r || r.invalidate()), D = requestAnimationFrame(L)
}
let x = false,
  M = {
    get ringsEnabled() {
      return x
    },
    setRingsEnabled(e) {
      x = e, null == r || r.invalidate()
    },
    enableAnimationTracking() {
      P = true, D = requestAnimationFrame(L)
    },
    disableAnimationTracking() {
      P = false, null != D && cancelAnimationFrame(D)
    }
  };

function j(e) {
  let {
    containerRef: t,
    children: n,
    themeOptions: r
  } = e, i = a.useRef(new A);
  return a.useEffect(() => {
    i.current.setContainer(t.current), i.current.setThemeOptions(r)
  }, [t.current]), (0, o.jsxs)(N.Provider, {
    value: i.current,
    children: [n, (0, o.jsx)(k, {})]
  })
}

function k() {
  let e = Chunk473749.useContext(N),
    [, t] = Chunk473749.useState({});
  return Chunk473749.useEffect(() => (module.invalidate = () => exports({}), () => {
    module.invalidate = () => null
  }), [module]), M.ringsEnabled && module.visible ? (0, Chunk54381.jsx)("div", {
    className: d("focus-rings-ring", module.className),
    style: module.getStyle()
  }) : null
}
let U = "u" > typeof window && (null == (i = window.document) ? true : i.createElement) != null ? Chunk473749.useLayoutEffect : Chunk473749.useEffect;

function G(e) {
  let {
    within: t = false,
    enabled: n = true,
    focused: r,
    offset: i = 0,
    focusTarget: o,
    ringTarget: s,
    ringClassName: l,
    focusClassName: c,
    focusWithinClassName: u,
    children: _
  } = e;
  null != o && f(null != s, "FocusRing was given a focusTarget but the required ringTarget was not provided. A ringTarget is required to avoid ambiguity of where the ring will be applied."), null != r && f(null != s, "FocusRing was given a controlled focused prop but no ringTarget to apply the ring to. A ringTarget is required since it cannot be inferred through regular focus events.");
  let p = a.useRef(false),
    [h, m] = a.useState(false),
    g = a.useContext(N),
    E = a.Children.only(_),
    {
      onBlur: b,
      onFocus: y,
      ...O
    } = E.props,
    v = a.useMemo(() => ({
      className: l,
      offset: i
    }), [l, i]);
  U(() => {
    n && g.invalidate()
  }), a.useEffect(() => {
    n || g.hide()
  }, [n, g]), a.useEffect(() => () => {
    p.current && g.hide()
  }, [g]), a.useEffect(() => {
    let e = null == s ? true : s.current;
    null == r || null == e || (p.current = r, r ? g.showElement(e, v) : false === r && g.hide())
  }, [r, v, g, s]), U(() => {
    if (null != r) return;
    let e = null == o ? true : o.current,
      n = null == s ? true : s.current;
    if (null != e && null != n) return e.addEventListener("focusin", i, true), e.addEventListener("focusout", a, true), () => {
      e.removeEventListener("focusin", i, true), e.removeEventListener("focusout", a, true)
    };

    function i(e) {
      if (null != n) {
        if (e.currentTarget === e.target) {
          p.current = true, g.showElement(n, v);
          return
        }
        m(true), t && g.showElement(n, v)
      }
    }

    function a() {
      g.hide(), p.current = false, m(false)
    }
  }, [t, v, r, g, o, s]);
  let I = a.useCallback(e => {
      g.hide(), p.current = false, m(false), null == b || b(e)
    }, [b, g]),
    T = a.useCallback(e => {
      let n = null == s ? true : s.current;
      e.currentTarget === e.target ? (p.current = true, g.showElement(null != n ? n : e.currentTarget, v)) : (m(true), t && g.showElement(null != n ? n : e.currentTarget, v)), null == y || y(e)
    }, [s, t, y, g, v]);
  return n && null == o && null == r ? a.cloneElement(E, {
    ...O,
    className: d(O.className, p.current ? c : true, h ? u : true),
    onBlur: I,
    onFocus: T
  }) : E
}