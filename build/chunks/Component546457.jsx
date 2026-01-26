/** Chunk was on 39048 **/
/** chunk id: 546457, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
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

function p(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: i
  } = e, l = (0, c.A)({
    minDimension: u.vl,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: i,
    orientation: c.R.VERTICAL_BOTTOM,
    throttleDuration: 16
  });
  return (0, r.jsx)("div", {
    onMouseDown: l,
    className: m.Di
  })
}
let f = Chunk64700.forwardRef(function(e, t) {
  let {
    children: n,
    onFocus: l,
    onBlur: s,
    onClick: o
  } = e, c = i.useRef(null), [d, g] = i.useState(u.vl);
  return (0, r.jsxs)(a.DUT, {
    className: m.Tg,
    onFocus: l,
    onBlur: s,
    onClick: o,
    innerRef: c,
    ignoreKeyPress: true,
    style: {
      minHeight: d
    },
    children: [(0, r.jsx)(a.T7Y, {
      className: m.Fg,
      style: {
        minHeight: d - 2
      },
      ref: t,
      children: n
    }), (0, r.jsx)(p, {
      resizableNode: c,
      onResize: g,
      onResizeEnd: e => {
        g(e), null == l || l()
      }
    })]
  })
});

function h(e) {
  var t;
  let {
    initialValue: n,
    onChangeTags: l,
    onChangeNewTagValue: c,
    tagErrors: u = {},
    placeholder: p,
    className: h,
    maxTags: b
  } = e, x = i.useRef(null), j = i.useRef(null), _ = i.useRef(null), O = (0, g.M)(n), {
    handlePasteEvent: v,
    handleInputChange: y,
    handleKeyDown: A,
    handleContainerKeyUp: E,
    handleRemoveTag: N,
    handleTagChangeEvent: S,
    handleSelectTag: I,
    handleUnselectTag: T,
    handleResetTagSelections: C,
    handleInputBlurEvent: P
  } = (0, g.d)(O, {
    scrollerRef: _,
    mainInputRef: x,
    mainContainerRef: j
  }), {
    state: {
      value: w,
      tags: R,
      selections: D,
      isSelecting: G
    }
  } = O, L = (0, o.A)(R), [k, M] = i.useState(false), U = i.useCallback(() => {
    var e;
    M(false), C(), null == (e = x.current) || e.focus({
      preventScroll: true
    })
  }, [C]);
  i.useEffect(() => {
    L !== R && l(R)
  }, [l, L, R]), i.useEffect(() => {
    k || c(w)
  }, [c, w, k]);
  let B = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      e && U(), M(false)
    }, [U]),
    F = i.useCallback(e => t => {
      if (t) {
        var n;
        let t = D.includes(R[e]);
        null == (n = x.current) || n.focus(), t ? T(e) : (I(e), setImmediate(() => {
          var e;
          null == (e = x.current) || e.blur(), setTimeout(() => {
            var e;
            return null == (e = j.current) ? true : e.focus()
          }, 16)
        }))
      } else T(e, true), M(true)
    }, [I, T, D, R]);
  return (0, r.jsxs)("div", {
    className: s()(m.rs, h),
    ref: j,
    tabIndex: 0,
    onKeyUp: E,
    children: [(0, r.jsxs)(f, {
      ref: _,
      onClick: U,
      children: [R.map((e, t) => (0, r.jsx)(d.A, {
        value: e,
        onChange: S(t),
        onBlur: B,
        onFocus: F(t),
        onRemove: () => N(t),
        isSelected: D.includes(e),
        isSelecting: G,
        error: u[e],
        forceShowErrorTooltip: !k && t === R.length - 1
      }, t)), (0, r.jsx)("input", {
        className: s()(m.tM, {
          [m.kD]: k
        }),
        ref: x,
        onChange: y,
        onKeyDownCapture: A,
        onPaste: v,
        onBlur: P,
        placeholder: 0 === R.length ? p : true,
        value: w
      })]
    }), null != b && (0, r.jsxs)(a.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: m.MH,
      children: [null != (t = null == R ? true : R.length) ? t : 0, "/", b]
    })]
  })
}