/** Chunk was on web.js **/
/** chunk id: 37148, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => g,
  x: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk446673 = require("./446673.js"),
  Chunk146187 = require("./146187.js"),
  Chunk304789 = require("./304789.js"),
  Chunk751334 = require("./751334.js"),
  Chunk587272 = require("./587272.js"),
  Chunk667137 = require("./667137.js"),
  Chunk946598 = require("./946598.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e) {
  let {
    shouldColorMix: t = false
  } = e, {
    onClose: n
  } = (0, _.v)();
  return <c.P onClick={n} colorMix={t} />
}

function E(e) {
  let {
    leading: t,
    trailing: n,
    hasGradient: i,
    children: o
  } = e;
  return <r.Fragment>{null != t && <div className={p.headerLeading}>{t}</div>}{o}{<div className={p.headerTrailing}>{null != n && n}{<g shouldColorMix={i} />}</div>}</r.Fragment>
}

function b(e) {
  let {
    leading: t,
    trailing: n,
    hasGradient: i,
    children: o
  } = e;
  return <r.Fragment>{null != t && <div className={a()(p.headerLeading, p.headerLeadingAbsolute)}>{t}</div>}{o}{<div className={a()(p.headerTrailing, p.headerTrailingAbsolute)}>{null != n && n}{<g shouldColorMix={i} />}</div>}</r.Fragment>
}

function y(e) {
  let {
    leading: t,
    trailing: n,
    hasGradient: o,
    children: s
  } = e, [l, c] = i.useState(24), [u, d] = i.useState(24), f = i.useRef(null), _ = i.useRef(null);
  return i.useLayoutEffect(() => {
    let e = new ResizeObserver(() => {
      let e = 0,
        t = 0;
      if (null != f && null != f.current) {
        let n = f.current.getBoundingClientRect();
        e = Math.max(e, n.height), t = Math.max(t, n.width)
      }
      if (null != _ && null != _.current) {
        let n = _.current.getBoundingClientRect();
        e = Math.max(e, n.height), t = Math.max(t, n.width)
      }
      d(Math.ceil(t)), c(Math.ceil(e))
    });
    return null != f.current && e.observe(f.current), null != _.current && e.observe(_.current), () => e.disconnect()
  }, []), <r.Fragment>{<div ref={f} className={a()(p.headerLeading, p.headerLeadingAbsolute)}>{t}</div>}{<div className={p.headerLeadingSpacer} style={{
        height: l,
        width: u
      }} />}{s}{<div className={p.headerTrailingSpacer} style={{
        height: l,
        width: u
      }} />}{<div ref={_} className={a()(p.headerTrailing, p.headerTrailingAbsolute)}>{null != n && n}{<g shouldColorMix={o} />}</div>}</r.Fragment>
}

function O(e) {
  let {
    gradientColor: t,
    graphic: n,
    badge: i,
    title: o,
    titleTextVariant: c,
    subtitle: h,
    alignCenter: g = false,
    leading: O,
    trailing: v
  } = e, {
    headingId: I
  } = (0, _.v)(), T = null != t, S = (0, f.MW)(n), A = g ? S ? b : y : E, N = null != n && <div className={a()(p.headerGraphic, {
      [p.headerGraphicAnimated]: S
    })}><div className={p.headerGraphicContainer}><d.z{...m({}, n)} /></div></div>, C = <s.X6 className={p.headerTitle} id={I} variant={null != c ? c : "heading-lg/semibold"} color={"text-primary"}>{o}</s.X6>, R = <s.xv className={p.headerSubtitle} variant={"text-md/normal"} color={"text-secondary"}>{h}</s.xv>, P = null != n ? N : C, w = <header className={a()(p.section, p.header, {
      [p.headerCentered]: g
    })}><s.Kq gap={8}>{<div className={p.headerLayout}><A leading={O} trailing={v} hasGradient={T}><div className={p.headerMain}>{P}</div></A></div>}{null != i && <div className={p.headerBadge}><l.C badge={i} /></div>}{null != n && null != o && C}{null != h && R}</s.Kq></header>;
  return T ? <u.$ color={t} className={p.headerGradient}>{w}</u.$> : w
}