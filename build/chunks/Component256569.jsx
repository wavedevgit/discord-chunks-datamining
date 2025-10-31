/** Chunk was on 64982 **/
/** chunk id: 256569, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./358797.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk347469 = require("./347469.js"),
  Chunk853276 = require("./853276.jsx"),
  Chunk596390 = require("./596390.js"),
  Chunk870472 = require("./870472.js"),
  Chunk961010 = require("./961010.js");

function p(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: i
  } = e, l = (0, c.Z)({
    minDimension: u.tq,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: i,
    orientation: c.y.VERTICAL_BOTTOM,
    throttleDuration: 16
  });
  return (0, r.jsx)("div", {
    onMouseDown: l,
    className: m.resizeHandle
  })
}
let f = Chunk647438.forwardRef(function(e, t) {
  let {
    children: n,
    onFocus: l,
    onBlur: a,
    onClick: o
  } = e, c = i.useRef(null), [d, g] = i.useState(u.tq);
  return (0, r.jsxs)(s.P3F, {
    className: m.textArea,
    onFocus: l,
    onBlur: a,
    onClick: o,
    innerRef: c,
    ignoreKeyPress: true,
    style: {
      minHeight: d
    },
    children: [(0, r.jsx)(s.Den, {
      className: m.innerScroller,
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
  } = e, x = i.useRef(null), j = i.useRef(null), v = i.useRef(null), _ = (0, g.V)(n), {
    handlePasteEvent: C,
    handleInputChange: O,
    handleKeyDown: y,
    handleContainerKeyUp: E,
    handleRemoveTag: N,
    handleTagChangeEvent: I,
    handleSelectTag: S,
    handleUnselectTag: T,
    handleResetTagSelections: P,
    handleInputBlurEvent: w
  } = (0, g.Q)(_, {
    scrollerRef: v,
    mainInputRef: x,
    mainContainerRef: j
  }), {
    state: {
      value: Z,
      tags: R,
      selections: D,
      isSelecting: A
    }
  } = _, L = (0, o.Z)(R), [k, G] = i.useState(false), M = i.useCallback(() => {
    var e;
    G(false), P(), null == (e = x.current) || e.focus({
      preventScroll: true
    })
  }, [P]);
  i.useEffect(() => {
    L !== R && l(R)
  }, [l, L, R]), i.useEffect(() => {
    k || c(Z)
  }, [c, Z, k]);
  let U = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      e && M(), G(false)
    }, [M]),
    B = i.useCallback(e => t => {
      if (t) {
        var n;
        let t = D.includes(R[e]);
        null == (n = x.current) || n.focus(), t ? T(e) : (S(e), setImmediate(() => {
          var e;
          null == (e = x.current) || e.blur(), setTimeout(() => {
            var e;
            return null == (e = j.current) ? true : e.focus()
          }, 16)
        }))
      } else T(e, true), G(true)
    }, [S, T, D, R]);
  return (0, r.jsxs)("div", {
    className: a()(m.mainContainer, h),
    ref: j,
    tabIndex: 0,
    onKeyUp: E,
    children: [(0, r.jsxs)(f, {
      ref: v,
      onClick: M,
      children: [R.map((e, t) => (0, r.jsx)(d.Z, {
        value: e,
        onChange: I(t),
        onBlur: U,
        onFocus: B(t),
        onRemove: () => N(t),
        isSelected: D.includes(e),
        isSelecting: A,
        error: u[e],
        forceShowErrorTooltip: !k && t === R.length - 1
      }, t)), (0, r.jsx)("input", {
        className: a()(m.mainTextInput, {
          [m.isEditingOtherNodes]: k
        }),
        ref: x,
        onChange: O,
        onKeyDownCapture: y,
        onPaste: C,
        onBlur: w,
        placeholder: 0 === R.length ? p : true,
        value: Z
      })]
    }), null != b && (0, r.jsxs)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: m.maxTags,
      children: [null != (t = null == R ? true : R.length) ? t : 0, "/", b]
    })]
  })
}