/** Chunk was on web.js **/
/** chunk id: 744061, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk210887 = require("./210887.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk41281 = require("./41281.js"),
  Chunk73433 = require("./73433.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e) {
  let {
    onClose: t,
    onConfirm: m,
    onCancel: E,
    channel: b,
    analyticsType: y,
    popoutText: O,
    animation: v
  } = e;
  i.useEffect(() => {
    d.default.track(f.rMx.OPEN_POPOUT, g({
      type: y
    }, (0, c.v_)(b)))
  }, [y, b]);
  let I = i.useCallback(() => {
      null == m || m(), t()
    }, [m, t]),
    T = i.useCallback(() => {
      null == E || E(), t()
    }, [E, t]),
    S = i.useRef(null);
  return i.useEffect(() => {
    let e, t = u.Z.theme,
      r = false;
    return null != v && (async () => {
      let [{
        default: i
      }, o] = await Promise.all([Promise.resolve().then(n.t.bind(n, 500923, 23)), (0, a.wj)(t) ? v.dark() : v.light()]);
      r || null == S.current || (e = i.loadAnimation({
        container: S.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: o
      }))
    })(), () => {
      r = true, null != e && (e.destroy(), e = true)
    }
  }, [v]), <l.VqE aria-labelledby={"content-warning-popout-label"}><form className={p.contentWarningPopout} onSubmit={I}>{<div className={p.body}>{null != v && <div className={p.animation} ref={S} />}{<div className={p.content}>{<div className={p.header}>{_.intl.string(_.t.mY3Y39)}</div>}{<l.Text id={"content-warning-popout-label"} className={h.markup} variant={"text-sm/normal"}>{O.body}</l.Text>}{<div className={p.buttonWrapper}>{<div className={p.buttonContainer}>{<s.zx className={p.button} color={s.zx.Colors.PRIMARY} onClick={T}>{_.intl.string(_.t.fsBWmZ)}</s.zx>}{<l.Text variant={"text-xs/normal"} className={p.buttonHint}>{_.intl.format(_.t["0LzVPT"], {})}</l.Text>}</div>}{<div className={p.buttonContainer}>{<s.zx className={p.button} onClick={I} type={"submit"} autoFocus={true}>{_.intl.string(_.t.KJnHq6)}</s.zx>}{<l.Text variant={"text-xs/normal"} className={p.buttonHint}>{_.intl.format(_.t.khjqdH, {})}</l.Text>}</div>}</div>}</div>}</div>}{null != O.footer && "" !== O.footer ? <div className={p.footer}>{<l.d3s size={"xs"} color={o.Z.unsafe_rawColors.PRIMARY_400.css} className={p.icon} />}{<l.Text variant={"text-sm/normal"}>{O.footer}</l.Text>}</div> : null}</form></l.VqE>
}