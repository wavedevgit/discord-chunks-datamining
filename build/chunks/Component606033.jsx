/** Chunk was on 1272 **/
/** chunk id: 606033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./290780.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk484614 = require("./484614.jsx"),
  Chunk624138 = require("./624138.js"),
  Chunk22095 = require("./22095.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk253010 = require("./253010.jsx"),
  Chunk6809 = require("./6809.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk747277 = require("./747277.js");
let _ = function(e) {
  var t, n, _;
  let {
    questId: b,
    setQuestId: E,
    quest: O,
    refreshQuest: I
  } = e, [y, v] = i.useState(false), [C, S] = i.useState(false), T = i.useRef(null), N = (0, u.MP)(), j = (0, l.e7)([d.Z], () => null != b ? d.Z.getFetchQuestPreviewError(b) : null, [b]), P = (0, l.e7)([d.Z], () => null != b && d.Z.isFetchingQuestPreview(b), [b]), x = i.useMemo(() => {
    let e = N.map(e => {
      var t, n, r;
      return {
        label: "".concat(null != (r = null == (n = e.config) || null == (t = n.messages) ? true : t.questName) ? r : e.id, " (").concat(e.id, ")"),
        value: e.id
      }
    });
    return null == b || e.some(e => e.value === b) || e.unshift({
      label: b,
      value: b
    }), e
  }, [N, b]), A = i.useCallback(async () => {
    if (null != b) {
      v(true);
      try {
        await (0, c.Wf)(b, 1)
      } finally {
        v(false)
      }
    }
  }, [b, v]), Z = i.useCallback(async () => {
    if (null != b) {
      v(true);
      try {
        await (0, c.eT)(b)
      } finally {
        v(false)
      }
    }
  }, [b, v]), w = i.useCallback(async () => {
    if (null != b) {
      v(true);
      try {
        let e = Math.random();
        await (0, c.Wf)(b, e)
      } finally {
        v(false)
      }
    }
  }, [b, v]), L = i.useCallback(e => {
    (0, o.Ew)(e) || null == E || E(e)
  }, [E]);
  return (0, r.jsxs)("div", {
    className: g.controlBar,
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)("div", {
        className: g.questSelectorContainer,
        children: (0, r.jsxs)("div", {
          className: g.questSelectorWrapper,
          children: [(0, r.jsx)(f.Z, {}), (0, r.jsxs)("div", {
            className: g.questInput,
            children: [(0, r.jsx)(a.VcW, {
              "aria-label": "Quest ID",
              options: x,
              value: b,
              onChange: L,
              placeholder: h.intl.string(h.t.Zw8jxn),
              clearable: true,
              filter: (e, t) => {
                if ((0, o.Ew)(null == t ? true : t.trim())) return e;
                let n = e.filter(e => e.label.toLowerCase().includes(t.toLowerCase()) || e.value.toLowerCase().includes(t.toLowerCase()));
                return 0 === n.length && "" !== t.trim() ? [{
                  label: t.trim(),
                  value: t.trim()
                }] : n
              }
            }, "".concat(b, "-").concat(null != (_ = null == O || null == (n = O.config) || null == (t = n.messages) ? true : t.questName) ? _ : "")), (0, r.jsx)(a.hU, {
              onClick: I,
              "aria-label": h.intl.string(h.t.wzzjk9),
              icon: a.DuK,
              loading: P
            })]
          })]
        })
      })
    }), null != b && null != O && (0, r.jsx)("div", {
      className: g.controlsSection,
      children: (0, r.jsxs)(a.ButtonGroup, {
        className: g.controlButtons,
        children: [(0, r.jsx)(a.Button, {
          onClick: A,
          disabled: y,
          loading: y,
          variant: "secondary",
          text: h.intl.string(h.t.jQEfRT)
        }), (0, r.jsx)(a.Button, {
          onClick: Z,
          disabled: y,
          loading: y,
          variant: "secondary",
          text: h.intl.string(h.t.taqkwK)
        }), (0, r.jsx)(a.Button, {
          onClick: w,
          disabled: y,
          loading: y,
          variant: "secondary",
          text: h.intl.string(h.t.cKSLr4)
        }), (0, r.jsx)(a.yRy, {
          targetElementRef: T,
          shouldShow: C,
          onRequestClose: () => S(false),
          position: "bottom",
          align: "center",
          renderPopout: () => (0, r.jsx)("div", {
            className: g.sharePopover,
            children: (0, r.jsx)("div", {
              className: g.copyInput,
              children: (0, r.jsx)(s.Z, {
                value: m.$w.QUEST_PREVIEW_TOOL_2(b),
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
    }) : null, P ? (0, r.jsx)(a.$jN, {}) : null]
  })
}