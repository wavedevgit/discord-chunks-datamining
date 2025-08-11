/** Chunk was on web.js **/
/** chunk id: 878678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ConfirmModal: () => _,
  s: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk693789 = require("./693789.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk709692 = require("./709692.js"),
  Chunk115589 = require("./115589.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e) {
  let t, n, {
      header: o,
      children: d,
      confirmText: f,
      cancelText: _,
      className: p,
      onConfirm: h,
      onCancel: m,
      onClose: g,
      onCloseCallback: E,
      bodyClassName: b,
      transitionState: y,
      loading: O = false,
      confirmButtonColor: v = s.zx.Colors.RED,
      focusCancel: I = false,
      impression: T
    } = e,
    S = i.useRef(null);
  return i.useEffect(() => {
    I || setTimeout(() => {
      var e;
      return null == (e = S.current) ? true : e.focus()
    }, 0)
  }, [I]), i.useLayoutEffect(() => () => null == E ? true : E()), null != _ && (t = <s.zx type={"button"} look={s.zx.Looks.FILLED} color={s.zx.Colors.PRIMARY} className={u.cancelButton} size={s.zx.Sizes.MEDIUM} disabled={O} onClick={() => {
      null == m || m(), g()
    }} autoFocus={I}>{_}</s.zx>), null != f && (n = <s.zx buttonRef={S} type={"submit"} size={s.zx.Sizes.MEDIUM} color={v} submitting={O} onClick={async () => {
      try {
        await (null == h ? true : h()), g()
      } catch (e) {
        throw e
      }
    }} autoFocus={!I}>{f}</s.zx>), <c.Y0 className={p} transitionState={y} impression={T} parentComponent={"ConfirmModal"}>{null != o ? <c.xB separator={false}><l.X6q variant={"heading-lg/semibold"}>{o}</l.X6q></c.xB> : null}{<c.hz className={a()(u.content, b)}>{d}</c.hz>}{<c.mz>{n}{t}</c.mz>}</c.Y0>
}

function p(e) {
  return <c.u_ onCloseRequest={e.dismissable ? e.onCancel : null} renderModal={t => (0, r.jsx)(_, f({}, t, e))} />
}