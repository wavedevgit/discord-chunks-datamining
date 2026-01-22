/** Chunk was on web.js **/
/** chunk id: 919499, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk861382 = require("./861382.js"),
  Chunk35277 = require("./35277.js"),
  Chunk407315 = require("./407315.js"),
  Chunk113001 = require("./113001.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  let {
    editor: t,
    channel: n,
    disableEnterToSubmit: c,
    onKeyDown: u,
    onKeyUp: d,
    onTab: f,
    onEnter: p,
    allowNewLines: _,
    submit: h,
    hideAutocomplete: m,
    moveSelection: g
  } = e;
  return {
    handleKeyDown: r.useCallback(e => {
      var r;
      switch (e.which) {
        case l.Ks6.ARROW_UP:
          if (g(false)) return void e.preventDefault();
          break;
        case l.Ks6.ARROW_DOWN:
          if (g(1)) return void e.preventDefault();
          break;
        case l.Ks6.P:
          if ((0, o.j)(e, {
              ctrl: true
            }) && g(false)) return void e.preventDefault();
          break;
        case l.Ks6.N:
          if ((0, o.j)(e, {
              ctrl: true
            }) && g(1)) return void e.preventDefault();
          break;
        case l.Ks6.ESCAPE:
          null == m || m();
          break;
        case l.Ks6.TAB:
          if ((0, o.j)(e, {}) && (null == f ? true : f())) {
            e.preventDefault(), e.stopPropagation();
            return
          }
          if (null != i.A.getActiveCommand(n.id)) {
            e.preventDefault(), e.stopPropagation(), e.shiftKey ? a.b.selectPreviousCommandOption(t) : a.b.selectNextCommandOption(t);
            return
          }
          break;
        case l.Ks6.ENTER:
          if ((0, o.j)(e, {}) && (null == p ? true : p(e))) {
            e.preventDefault(), e.stopPropagation();
            return
          }
      }
      if ((null == (r = t.onKeyDown) ? true : r.call(t, e)) === true) {
        e.preventDefault(), e.stopPropagation();
        return
      }
      e.which !== l.Ks6.ENTER || (e.altKey || e.shiftKey || c && !e.ctrlKey || (0, s.Q9)(t)) && _ || (e.preventDefault(), e.stopPropagation(), h()), null == u || u(e)
    }, [_, n.id, c, t, m, g, p, u, f, h]),
    handleKeyUp: r.useCallback(e => {
      null == d || d(e)
    }, [d])
  }
}