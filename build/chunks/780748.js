/** Chunk was on web.js **/
/** chunk id: 780748, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk998698 = require("./998698.js"),
  Chunk436660 = require("./436660.js"),
  Chunk515270 = require("./515270.js"),
  Chunk417662 = require("./417662.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let {
    editor: t,
    channel: n,
    disableEnterToSubmit: c,
    onKeyDown: u,
    onKeyUp: d,
    onTab: f,
    onEnter: _,
    allowNewLines: p,
    submit: h,
    hideAutocomplete: m,
    moveSelection: g
  } = e;
  return {
    handleKeyDown: r.useCallback(e => {
      var r;
      switch (e.which) {
        case l.yXg.ARROW_UP:
          if (g(false)) return void e.preventDefault();
          break;
        case l.yXg.ARROW_DOWN:
          if (g(1)) return void e.preventDefault();
          break;
        case l.yXg.P:
          if ((0, s.E)(e, {
              ctrl: true
            }) && g(false)) return void e.preventDefault();
          break;
        case l.yXg.N:
          if ((0, s.E)(e, {
              ctrl: true
            }) && g(1)) return void e.preventDefault();
          break;
        case l.yXg.ESCAPE:
          null == m || m();
          break;
        case l.yXg.TAB:
          if ((0, s.E)(e, {}) && (null == f ? true : f())) {
            e.preventDefault(), e.stopPropagation();
            return
          }
          if (null != i.Z.getActiveCommand(n.id)) {
            e.preventDefault(), e.stopPropagation(), e.shiftKey ? a.Q.selectPreviousCommandOption(t) : a.Q.selectNextCommandOption(t);
            return
          }
          break;
        case l.yXg.ENTER:
          if ((0, s.E)(e, {}) && (null == _ ? true : _(e))) {
            e.preventDefault(), e.stopPropagation();
            return
          }
      }
      if ((null == (r = t.onKeyDown) ? true : r.call(t, e)) === true) {
        e.preventDefault(), e.stopPropagation();
        return
      }
      e.which !== l.yXg.ENTER || (e.altKey || e.shiftKey || c && !e.ctrlKey || (0, o.L6)(t)) && p || (e.preventDefault(), e.stopPropagation(), h()), null == u || u(e)
    }, [p, n.id, c, t, m, g, _, u, f, h]),
    handleKeyUp: r.useCallback(e => {
      null == d || d(e)
    }, [d])
  }
}