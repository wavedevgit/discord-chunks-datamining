/** Chunk was on 9536 **/
/** chunk id: 256569, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./358797.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk347469 = require("./347469.js"),
  Chunk853276 = require("./853276.jsx"),
  Chunk596390 = require("./596390.js"),
  Chunk870472 = require("./870472.js"),
  Chunk420974 = require("./420974.js");

function f(e) {
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
let b = Chunk473749.forwardRef(function(e, t) {
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
    }), (0, r.jsx)(f, {
      resizableNode: c,
      onResize: g,
      onResizeEnd: e => {
        g(e), null == l || l()
      }
    })]
  })
});

function p(e) {
  var t;
  let {
    initialValue: n,
    onChangeTags: l,
    onChangeNewTagValue: c,
    tagErrors: u = {},
    placeholder: f,
    className: p,
    maxTags: h
  } = e, x = i.useRef(null), j = i.useRef(null), v = i.useRef(null), O = (0, g.V)(n), {
    handlePasteEvent: y,
    handleInputChange: C,
    handleKeyDown: N,
    handleContainerKeyUp: E,
    handleRemoveTag: I,
    handleTagChangeEvent: S,
    handleSelectTag: _,
    handleUnselectTag: T,
    handleResetTagSelections: P,
    handleInputBlurEvent: w
  } = (0, g.Q)(O, {
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
  } = O, L = (0, o.Z)(R), [k, G] = i.useState(false), M = i.useCallback(() => {
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
        null == (n = x.current) || n.focus(), t ? T(e) : (_(e), setImmediate(() => {
          var e;
          null == (e = x.current) || e.blur(), setTimeout(() => {
            var e;
            return null == (e = j.current) ? true : e.focus()
          }, 16)
        }))
      } else T(e, true), G(true)
    }, [_, T, D, R]);
  return (0, r.jsxs)("div", {
    className: a()(m.mainContainer, p),
    ref: j,
    tabIndex: 0,
    onKeyUp: E,
    children: [(0, r.jsxs)(b, {
      ref: v,
      onClick: M,
      children: [R.map((e, t) => (0, r.jsx)(d.Z, {
        value: e,
        onChange: S(t),
        onBlur: U,
        onFocus: B(t),
        onRemove: () => I(t),
        isSelected: D.includes(e),
        isSelecting: A,
        error: u[e],
        forceShowErrorTooltip: !k && t === R.length - 1
      }, t)), (0, r.jsx)("input", {
        className: a()(m.mainTextInput, {
          [m.isEditingOtherNodes]: k
        }),
        ref: x,
        onChange: C,
        onKeyDownCapture: N,
        onPaste: y,
        onBlur: w,
        placeholder: 0 === R.length ? f : true,
        value: Z
      })]
    }), null != h && (0, r.jsxs)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: m.maxTags,
      children: [null != (t = null == R ? true : R.length) ? t : 0, "/", h]
    })]
  })
}