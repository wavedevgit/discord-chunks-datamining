/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => p
}), n(47120), n(177593);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(110924),
  c = n(347469),
  A = n(853276),
  d = n(596390),
  u = n(870472),
  g = n(224669);

function f(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: i
  } = e, s = (0, c.Z)({
    minDimension: d.tq,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: i,
    orientation: c.y.VERTICAL_BOTTOM,
    throttleDuration: 16
  });
  return (0, r.jsx)("div", {
    onMouseDown: s,
    className: g.resizeHandle
  })
}
let m = i.forwardRef(function(e, t) {
  let {
    children: n,
    onFocus: s,
    onBlur: a,
    onClick: o
  } = e, c = i.useRef(null), [A, u] = i.useState(d.tq);
  return (0, r.jsxs)(l.P3F, {
    className: g.textArea,
    onFocus: s,
    onBlur: a,
    onClick: o,
    innerRef: c,
    ignoreKeyPress: !0,
    style: {
      minHeight: A
    },
    children: [(0, r.jsx)(l.Den, {
      className: g.innerScroller,
      style: {
        minHeight: A - 2
      },
      ref: t,
      children: n
    }), (0, r.jsx)(f, {
      resizableNode: c,
      onResize: u,
      onResizeEnd: e => {
        u(e), null == s || s()
      }
    })]
  })
});

function p(e) {
  var t;
  let {
    initialValue: n,
    onChangeTags: s,
    onChangeNewTagValue: c,
    tagErrors: d = {},
    placeholder: f,
    className: p,
    maxTags: h
  } = e, C = i.useRef(null), b = i.useRef(null), v = i.useRef(null), x = (0, u.V)(n), {
    handlePasteEvent: N,
    handleInputChange: j,
    handleKeyDown: E,
    handleContainerKeyUp: I,
    handleRemoveTag: O,
    handleTagChangeEvent: y,
    handleSelectTag: w,
    handleUnselectTag: P,
    handleResetTagSelections: B,
    handleInputBlurEvent: D
  } = (0, u.Q)(x, {
    scrollerRef: v,
    mainInputRef: C,
    mainContainerRef: b
  }), {
    state: {
      value: T,
      tags: S,
      selections: L,
      isSelecting: R
    }
  } = x, Q = (0, o.Z)(S), [Z, W] = i.useState(!1), k = i.useCallback(() => {
    var e;
    W(!1), B(), null === (e = C.current) || void 0 === e || e.focus({
      preventScroll: !0
    })
  }, [B]);
  i.useEffect(() => {
    !Z && Q !== S && s(S)
  }, [s, Q, S, Z]), i.useEffect(() => {
    !Z && c(T)
  }, [c, T, Z]);
  let M = i.useCallback(function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      e && k(), W(!1)
    }, [k]),
    _ = i.useCallback(e => t => {
      if (t) {
        var n;
        let t = L.includes(S[e]);
        null === (n = C.current) || void 0 === n || n.focus(), t ? P(e) : (w(e), setImmediate(() => {
          var e;
          null === (e = C.current) || void 0 === e || e.blur(), setTimeout(() => {
            var e;
            return null === (e = b.current) || void 0 === e ? void 0 : e.focus()
          }, 16)
        }))
      } else P(e, !0), W(!0)
    }, [w, P, L, S]);
  return (0, r.jsxs)("div", {
    className: a()(g.mainContainer, p),
    ref: b,
    tabIndex: 0,
    onKeyUp: I,
    children: [(0, r.jsxs)(m, {
      ref: v,
      onClick: k,
      children: [S.map((e, t) => (0, r.jsx)(A.Z, {
        value: e,
        onChange: y(t),
        onBlur: M,
        onFocus: _(t),
        onRemove: () => O(t),
        isSelected: L.includes(e),
        isSelecting: R,
        error: d[e],
        forceShowErrorTooltip: !Z && t === S.length - 1
      }, t)), (0, r.jsx)("input", {
        className: a()(g.mainTextInput, {
          [g.isEditingOtherNodes]: Z
        }),
        ref: C,
        onChange: j,
        onKeyDownCapture: E,
        onPaste: N,
        onBlur: D,
        placeholder: 0 === S.length ? f : void 0,
        value: T
      })]
    }), null != h && (0, r.jsxs)(l.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: g.maxTags,
      children: [null !== (t = null == S ? void 0 : S.length) && void 0 !== t ? t : 0, "/", h]
    })]
  })
}