/** Chunk was on 1272 **/
/** chunk id: 606033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./290780.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk484614 = require("./484614.jsx"),
  Chunk624138 = require("./624138.js"),
  Chunk272008 = require("./272008.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk253010 = require("./253010.jsx"),
  Chunk6809 = require("./6809.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk982538 = require("./982538.js");
let b = function(e) {
  var t, n, b;
  let {
    questId: _,
    setQuestId: O,
    quest: E,
    refreshQuest: y
  } = e, [v, I] = i.useState(false), [C, S] = i.useState(false), T = i.useRef(null), N = (0, u.MP)(), P = (0, l.e7)([d.Z], () => null != _ ? d.Z.getFetchQuestPreviewError(_) : null, [_]), j = (0, l.e7)([d.Z], () => null != _ && d.Z.isFetchingQuestPreview(_), [_]), A = i.useMemo(() => {
    let e = N.map(e => {
      var t, n, r;
      return {
        label: "".concat(null != (r = null == (n = e.config) || null == (t = n.messages) ? true : t.questName) ? r : e.id, " (").concat(e.id, ")"),
        value: e.id
      }
    });
    return null == _ || e.some(e => e.value === _) || e.unshift({
      label: _,
      value: _
    }), e
  }, [N, _]), x = i.useCallback(async () => {
    if (null != _) {
      I(true);
      try {
        await (0, c.Wf)(_, 1)
      } finally {
        I(false)
      }
    }
  }, [_, I]), Z = i.useCallback(async () => {
    if (null != _) {
      I(true);
      try {
        await (0, c.eT)(_)
      } finally {
        I(false)
      }
    }
  }, [_, I]), w = i.useCallback(async () => {
    if (null != _) {
      I(true);
      try {
        let e = Math.random();
        await (0, c.Wf)(_, e)
      } finally {
        I(false)
      }
    }
  }, [_, I]), L = i.useCallback(e => {
    (0, s.Ew)(e) || null == O || O(e)
  }, [O]);
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
              "aria-label": "Quest ID",
              options: A,
              value: _,
              onChange: L,
              placeholder: g.intl.string(g.t.Zw8jxs),
              clearable: true,
              filter: (e, t) => {
                if ((0, s.Ew)(null == t ? true : t.trim())) return e;
                let n = e.filter(e => e.label.toLowerCase().includes(t.toLowerCase()) || e.value.toLowerCase().includes(t.toLowerCase()));
                return 0 === n.length && "" !== t.trim() ? [{
                  label: t.trim(),
                  value: t.trim()
                }] : n
              }
            }, "".concat(_, "-").concat(null != (b = null == E || null == (n = E.config) || null == (t = n.messages) ? true : t.questName) ? b : "")), (0, r.jsx)(a.hU, {
              onClick: y,
              "aria-label": g.intl.string(g.t.wzzjk5),
              icon: a.DuK,
              loading: j
            })]
          })]
        })
      })
    }), null != _ && null != E && (0, r.jsx)("div", {
      className: m.controlsSection,
      children: (0, r.jsxs)(a.ButtonGroup, {
        className: m.controlButtons,
        children: [(0, r.jsx)(a.Button, {
          onClick: x,
          disabled: v,
          loading: v,
          variant: "secondary",
          text: g.intl.string(g.t.jQEfRU)
        }), (0, r.jsx)(a.Button, {
          onClick: Z,
          disabled: v,
          loading: v,
          variant: "secondary",
          text: g.intl.string(g.t.taqkwM)
        }), (0, r.jsx)(a.Button, {
          onClick: w,
          disabled: v,
          loading: v,
          variant: "secondary",
          text: g.intl.string(g.t.cKSLr6)
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
                value: h.$w.QUEST_PREVIEW_TOOL_2(_),
                text: g.intl.string(g.t.WqhZsr)
              })
            })
          }),
          children: () => (0, r.jsx)(a.hU, {
            buttonRef: T,
            onClick: () => S(!C),
            "aria-label": g.intl.string(g.t.rNGQfH),
            icon: a.TIy,
            variant: "secondary"
          })
        })]
      })
    }), null != P ? (0, r.jsx)(p.W, {
      error: P
    }) : null, j ? (0, r.jsx)(a.$jN, {}) : null]
  })
}