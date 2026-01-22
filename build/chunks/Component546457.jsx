/** Chunk was on 47841 **/
/** chunk id: 546457, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js"), require("./142703.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk475743 = require("./475743.js"),
  Chunk761929 = require("./761929.js"),
  Chunk273875 = require("./273875.jsx"),
  Chunk530552 = require("./530552.js"),
  Chunk330299 = require("./330299.js"),
  Chunk698085 = require("./698085.js");

function b(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: i
  } = e, l = (0, o.A)({
    minDimension: u.vl,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: i,
    orientation: o.R.VERTICAL_BOTTOM,
    throttleDuration: 16
  });
  return (0, r.jsx)("div", {
    onMouseDown: l,
    className: g.Di
  })
}
let m = Chunk64700.forwardRef(function(e, t) {
  let {
    children: n,
    onFocus: l,
    onBlur: s,
    onClick: c
  } = e, o = i.useRef(null), [d, f] = i.useState(u.vl);
  return (0, r.jsxs)(a.DUT, {
    className: g.Tg,
    onFocus: l,
    onBlur: s,
    onClick: c,
    innerRef: o,
    ignoreKeyPress: true,
    style: {
      minHeight: d
    },
    children: [(0, r.jsx)(a.T7Y, {
      className: g.Fg,
      style: {
        minHeight: d - 2
      },
      ref: t,
      children: n
    }), (0, r.jsx)(b, {
      resizableNode: o,
      onResize: f,
      onResizeEnd: e => {
        f(e), null == l || l()
      }
    })]
  })
});

function p(e) {
  var t;
  let {
    initialValue: n,
    onChangeTags: l,
    onChangeNewTagValue: o,
    tagErrors: u = {},
    placeholder: b,
    className: p,
    maxTags: x
  } = e, h = i.useRef(null), j = i.useRef(null), O = i.useRef(null), y = (0, f.M)(n), {
    handlePasteEvent: v,
    handleInputChange: A,
    handleKeyDown: E,
    handleContainerKeyUp: N,
    handleRemoveTag: _,
    handleTagChangeEvent: S,
    handleSelectTag: T,
    handleUnselectTag: I,
    handleResetTagSelections: C,
    handleInputBlurEvent: P
  } = (0, f.d)(y, {
    scrollerRef: O,
    mainInputRef: h,
    mainContainerRef: j
  }), {
    state: {
      value: w,
      tags: R,
      selections: D,
      isSelecting: G
    }
  } = y, L = (0, c.A)(R), [k, M] = i.useState(false), U = i.useCallback(() => {
    var e;
    M(false), C(), null == (e = h.current) || e.focus({
      preventScroll: true
    })
  }, [C]);
  i.useEffect(() => {
    L !== R && l(R)
  }, [l, L, R]), i.useEffect(() => {
    k || o(w)
  }, [o, w, k]);
  let F = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      e && U(), M(false)
    }, [U]),
    B = i.useCallback(e => t => {
      if (t) {
        var n;
        let t = D.includes(R[e]);
        null == (n = h.current) || n.focus(), t ? I(e) : (T(e), setImmediate(() => {
          var e;
          null == (e = h.current) || e.blur(), setTimeout(() => {
            var e;
            return null == (e = j.current) ? true : e.focus()
          }, 16)
        }))
      } else I(e, true), M(true)
    }, [T, I, D, R]);
  return (0, r.jsxs)("div", {
    className: s()(g.rs, p),
    ref: j,
    tabIndex: 0,
    onKeyUp: N,
    children: [(0, r.jsxs)(m, {
      ref: O,
      onClick: U,
      children: [R.map((e, t) => (0, r.jsx)(d.A, {
        value: e,
        onChange: S(t),
        onBlur: F,
        onFocus: B(t),
        onRemove: () => _(t),
        isSelected: D.includes(e),
        isSelecting: G,
        error: u[e],
        forceShowErrorTooltip: !k && t === R.length - 1
      }, t)), (0, r.jsx)("input", {
        className: s()(g.tM, {
          [g.kD]: k
        }),
        ref: h,
        onChange: A,
        onKeyDownCapture: E,
        onPaste: v,
        onBlur: P,
        placeholder: 0 === R.length ? b : true,
        value: w
      })]
    }), null != x && (0, r.jsxs)(a.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: g.MH,
      children: [null != (t = null == R ? true : R.length) ? t : 0, "/", x]
    })]
  })
}