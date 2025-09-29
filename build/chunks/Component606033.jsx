/** Chunk was on 1272 **/
/** chunk id: 606033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk747277 = require("./747277.js");
let m = function(e) {
  var t, n, m;
  let {
    questId: b,
    setQuestId: _,
    quest: O,
    refreshQuest: E
  } = e, [y, v] = i.useState(false), [I, S] = i.useState(false), C = i.useRef(null), T = (0, u.MP)(), N = (0, l.e7)([d.Z], () => null != b ? d.Z.getFetchQuestPreviewError(b) : null, [b]), j = (0, l.e7)([d.Z], () => null != b && d.Z.isFetchingQuestPreview(b), [b]), P = i.useMemo(() => {
    let e = T.map(e => {
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
  }, [T, b]), x = i.useCallback(async () => {
    if (null != b) {
      v(true);
      try {
        await (0, c.Wf)(b, 1)
      } finally {
        v(false)
      }
    }
  }, [b, v]), A = i.useCallback(async () => {
    if (null != b) {
      v(true);
      try {
        await (0, c.eT)(b)
      } finally {
        v(false)
      }
    }
  }, [b, v]), Z = i.useCallback(async () => {
    if (null != b) {
      v(true);
      try {
        let e = Math.random();
        await (0, c.Wf)(b, e)
      } finally {
        v(false)
      }
    }
  }, [b, v]), w = i.useCallback(e => {
    (0, s.Ew)(e) || null == _ || _(e)
  }, [_]);
  return (0, r.jsxs)("div", {
    className: g.controlBar,
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)("div", {
        className: g.questSelectorContainer,
        children: (0, r.jsx)("div", {
          children: (0, r.jsxs)("div", {
            className: g.questInput,
            children: [(0, r.jsx)(a.VcW, {
              "aria-label": "Quest ID",
              options: P,
              value: b,
              onChange: w,
              placeholder: h.intl.string(h.t.Zw8jxs),
              clearable: true,
              filter: (e, t) => {
                if ((0, s.Ew)(null == t ? true : t.trim())) return e;
                let n = e.filter(e => e.label.toLowerCase().includes(t.toLowerCase()) || e.value.toLowerCase().includes(t.toLowerCase()));
                return 0 === n.length && "" !== t.trim() ? [{
                  label: t.trim(),
                  value: t.trim()
                }] : n
              }
            }, "".concat(b, "-").concat(null != (m = null == O || null == (n = O.config) || null == (t = n.messages) ? true : t.questName) ? m : "")), (0, r.jsx)(a.hU, {
              onClick: E,
              "aria-label": h.intl.string(h.t.wzzjk5),
              icon: a.DuK,
              loading: j
            })]
          })
        })
      })
    }), null != b && null != O && (0, r.jsx)("div", {
      className: g.controlsSection,
      children: (0, r.jsxs)(a.hE2, {
        className: g.controlButtons,
        children: [(0, r.jsx)(a.zxk, {
          onClick: x,
          disabled: y,
          loading: y,
          variant: "secondary",
          text: h.intl.string(h.t.jQEfRU)
        }), (0, r.jsx)(a.zxk, {
          onClick: A,
          disabled: y,
          loading: y,
          variant: "secondary",
          text: h.intl.string(h.t.taqkwM)
        }), (0, r.jsx)(a.zxk, {
          onClick: Z,
          disabled: y,
          loading: y,
          variant: "secondary",
          text: h.intl.string(h.t.cKSLr6)
        }), (0, r.jsx)(a.yRy, {
          targetElementRef: C,
          shouldShow: I,
          onRequestClose: () => S(false),
          position: "bottom",
          align: "center",
          renderPopout: () => (0, r.jsx)("div", {
            className: g.sharePopover,
            children: (0, r.jsx)("div", {
              className: g.copyInput,
              children: (0, r.jsx)(o.Z, {
                value: f.$w.QUEST_PREVIEW_TOOL_2(b),
                text: h.intl.string(h.t.WqhZsr)
              })
            })
          }),
          children: () => (0, r.jsx)(a.hU, {
            buttonRef: C,
            onClick: () => S(!I),
            "aria-label": h.intl.string(h.t.rNGQfH),
            icon: a.TIy,
            variant: "secondary"
          })
        })]
      })
    }), null != N ? (0, r.jsx)(p.W, {
      error: N
    }) : null, j ? (0, r.jsx)(a.$jN, {}) : null]
  })
}