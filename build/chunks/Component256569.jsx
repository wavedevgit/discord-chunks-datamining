/** Chunk was on 64982 **/
/** chunk id: 256569, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./358797.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
    className: g.resizeHandle
  })
}
let f = Chunk647438.forwardRef(function(e, t) {
  let {
    children: n,
    onFocus: l,
    onBlur: s,
    onClick: o
  } = e, c = i.useRef(null), [d, m] = i.useState(u.tq);
  return (0, r.jsxs)(a.P3F, {
    className: g.textArea,
    onFocus: l,
    onBlur: s,
    onClick: o,
    innerRef: c,
    ignoreKeyPress: true,
    style: {
      minHeight: d
    },
    children: [(0, r.jsx)(a.Den, {
      className: g.innerScroller,
      style: {
        minHeight: d - 2
      },
      ref: t,
      children: n
    }), (0, r.jsx)(p, {
      resizableNode: c,
      onResize: m,
      onResizeEnd: e => {
        m(e), null == l || l()
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
    maxTags: x
  } = e, b = i.useRef(null), j = i.useRef(null), _ = i.useRef(null), v = (0, m.V)(n), {
    handlePasteEvent: C,
    handleInputChange: O,
    handleKeyDown: y,
    handleContainerKeyUp: N,
    handleRemoveTag: E,
    handleTagChangeEvent: I,
    handleSelectTag: S,
    handleUnselectTag: T,
    handleResetTagSelections: P,
    handleInputBlurEvent: w
  } = (0, m.Q)(v, {
    scrollerRef: _,
    mainInputRef: b,
    mainContainerRef: j
  }), {
    state: {
      value: R,
      tags: Z,
      selections: D,
      isSelecting: A
    }
  } = v, L = (0, o.Z)(Z), [k, G] = i.useState(false), M = i.useCallback(() => {
    var e;
    G(false), P(), null == (e = b.current) || e.focus({
      preventScroll: true
    })
  }, [P]);
  i.useEffect(() => {
    L !== Z && l(Z)
  }, [l, L, Z]), i.useEffect(() => {
    k || c(R)
  }, [c, R, k]);
  let U = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      e && M(), G(false)
    }, [M]),
    B = i.useCallback(e => t => {
      if (t) {
        var n;
        let t = D.includes(Z[e]);
        null == (n = b.current) || n.focus(), t ? T(e) : (S(e), setImmediate(() => {
          var e;
          null == (e = b.current) || e.blur(), setTimeout(() => {
            var e;
            return null == (e = j.current) ? true : e.focus()
          }, 16)
        }))
      } else T(e, true), G(true)
    }, [S, T, D, Z]);
  return (0, r.jsxs)("div", {
    className: s()(g.mainContainer, h),
    ref: j,
    tabIndex: 0,
    onKeyUp: N,
    children: [(0, r.jsxs)(f, {
      ref: _,
      onClick: M,
      children: [Z.map((e, t) => (0, r.jsx)(d.Z, {
        value: e,
        onChange: I(t),
        onBlur: U,
        onFocus: B(t),
        onRemove: () => E(t),
        isSelected: D.includes(e),
        isSelecting: A,
        error: u[e],
        forceShowErrorTooltip: !k && t === Z.length - 1
      }, t)), (0, r.jsx)("input", {
        className: s()(g.mainTextInput, {
          [g.isEditingOtherNodes]: k
        }),
        ref: b,
        onChange: O,
        onKeyDownCapture: y,
        onPaste: C,
        onBlur: w,
        placeholder: 0 === Z.length ? p : true,
        value: R
      })]
    }), null != x && (0, r.jsxs)(a.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: g.maxTags,
      children: [null != (t = null == Z ? true : Z.length) ? t : 0, "/", x]
    })]
  })
}