/** Chunk was on 1272 **/
/** chunk id: 606033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./290780.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk484614 = require("./484614.jsx"),
  Chunk624138 = require("./624138.js"),
  Chunk22095 = require("./22095.js"),
  Chunk616022 = require("./616022.js"),
  Chunk968843 = require("./968843.js"),
  Chunk253010 = require("./253010.jsx"),
  Chunk6809 = require("./6809.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk9976 = require("./9976.js");
let b = function(e) {
  var t, n, b;
  let {
    questId: E,
    setQuestId: _,
    quest: O,
    refreshQuest: I
  } = e, [v, y] = i.useState(false), [C, S] = i.useState(false), T = i.useRef(null), N = (0, d.MP)(), j = (0, l.e7)([u.Z], () => null != E ? u.Z.getFetchQuestPreviewError(E) : null, [E]), x = (0, l.e7)([u.Z], () => null != E && u.Z.isFetchingQuestPreview(E), [E]), P = i.useMemo(() => {
    let e = N.map(e => {
      var t, n, r;
      return {
        id: e.id,
        label: "".concat(null != (r = null == (n = e.config) || null == (t = n.messages) ? true : t.questName) ? r : e.id, " (").concat(e.id, ")"),
        value: e.id
      }
    });
    return null == E || e.some(e => e.value === E) || e.unshift({
      id: E,
      label: E,
      value: E
    }), e
  }, [N, E]), A = i.useCallback(async () => {
    if (null != E) {
      y(true);
      try {
        await (0, c.Wf)(E, 1)
      } finally {
        y(false)
      }
    }
  }, [E, y]), Z = i.useCallback(async () => {
    if (null != E) {
      y(true);
      try {
        await (0, c.eT)(E)
      } finally {
        y(false)
      }
    }
  }, [E, y]), w = i.useCallback(async () => {
    if (null != E) {
      y(true);
      try {
        let e = Math.random();
        await (0, c.Wf)(E, e)
      } finally {
        y(false)
      }
    }
  }, [E, y]), L = i.useCallback(e => {
    (0, s.Ew)(e) || null == _ || _(e)
  }, [_]);
  return (0, r.jsxs)("div", {
    className: m.controlBar,
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)("div", {
        className: m.questSelectorContainer,
        children: (0, r.jsxs)("div", {
          className: m.questSelectorWrapper,
          children: [(0, r.jsx)(f.Z, {}), (0, r.jsxs)("div", {
            className: m.questInput,
            children: [(0, r.jsx)(a.VcW, {
              selectionMode: "single",
              label: "Quest ID",
              hideLabel: true,
              options: P,
              value: E,
              onSelectionChange: L,
              placeholder: h.intl.string(h.t.Zw8jxn),
              clearable: true,
              customMatchSorter: (e, t) => {
                if ((0, s.Ew)(null == t ? true : t.trim())) return e;
                let n = e.filter(e => e.label.toLowerCase().includes(t.toLowerCase()) || e.value.toLowerCase().includes(t.toLowerCase()));
                return 0 === n.length && "" !== t.trim() ? [{
                  label: t.trim(),
                  value: t.trim()
                }] : n
              }
            }, "".concat(E, "-").concat(null != (b = null == O || null == (n = O.config) || null == (t = n.messages) ? true : t.questName) ? b : "")), (0, r.jsx)(a.hU, {
              onClick: I,
              "aria-label": h.intl.string(h.t.wzzjk9),
              icon: a.DuK,
              loading: x
            })]
          })]
        })
      })
    }), null != E && null != O && (0, r.jsx)("div", {
      className: m.controlsSection,
      children: (0, r.jsxs)(a.ButtonGroup, {
        className: m.controlButtons,
        children: [(0, r.jsx)(a.Button, {
          onClick: A,
          disabled: v,
          loading: v,
          variant: "secondary",
          text: h.intl.string(h.t.jQEfRT)
        }), (0, r.jsx)(a.Button, {
          onClick: Z,
          disabled: v,
          loading: v,
          variant: "secondary",
          text: h.intl.string(h.t.taqkwK)
        }), (0, r.jsx)(a.Button, {
          onClick: w,
          disabled: v,
          loading: v,
          variant: "secondary",
          text: h.intl.string(h.t.cKSLr4)
        }), (0, r.jsx)(a.yRy, {
          targetElementRef: T,
          shouldShow: C,
          onRequestClose: () => S(false),
          position: "bottom",
          align: "center",
          renderPopout: () => (0, r.jsx)("div", {
            className: m.sharePopover,
            children: (0, r.jsx)("div", {
              className: m.copyInput,
              children: (0, r.jsx)(o.Z, {
                value: g.$w.QUEST_PREVIEW_TOOL_2(E),
                text: h.intl.string(h.t.WqhZss)
              })
            })
          }),
          children: () => (0, r.jsx)(a.hU, {
            buttonRef: T,
            onClick: () => S(!C),
            "aria-label": h.intl.string(h.t.rNGQfD),
            icon: a.TIy,
            variant: "secondary"
          })
        })]
      })
    }), null != j ? (0, r.jsx)(p.W, {
      error: j
    }) : null, x ? (0, r.jsx)(a.$jN, {}) : null]
  })
}