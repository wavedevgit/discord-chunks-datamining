/** Chunk was on 1272 **/
/** chunk id: 606033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./290780.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
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
  Chunk982538 = require("./982538.js");
let b = function(e) {
  var t, n, b;
  let {
    questId: E,
    setQuestId: O,
    quest: v,
    refreshQuest: y
  } = e, [I, C] = i.useState(false), [S, T] = i.useState(false), N = i.useRef(null), j = (0, p.MP)(), P = (0, l.e7)([d.Z], () => null != E ? d.Z.getFetchQuestPreviewError(E) : null, [E]), x = (0, l.e7)([d.Z], () => null != E && d.Z.isFetchingQuestPreview(E), [E]), A = i.useMemo(() => {
    let e = j.map(e => {
      var t, n, r;
      return {
        label: "".concat(null != (r = null == (n = e.config) || null == (t = n.messages) ? true : t.questName) ? r : e.id, " (").concat(e.id, ")"),
        value: e.id
      }
    });
    return null == E || e.some(e => e.value === E) || e.unshift({
      label: E,
      value: E
    }), e
  }, [j, E]), Z = i.useCallback(async () => {
    if (null != E) {
      C(true);
      try {
        await (0, u.Wf)(E, 1)
      } finally {
        C(false)
      }
    }
  }, [E, C]), w = i.useCallback(async () => {
    if (null != E) {
      C(true);
      try {
        await (0, u.eT)(E)
      } finally {
        C(false)
      }
    }
  }, [E, C]), L = i.useCallback(async () => {
    if (null != E) {
      C(true);
      try {
        let e = Math.random();
        await (0, u.Wf)(E, e)
      } finally {
        C(false)
      }
    }
  }, [E, C]), R = i.useCallback(e => {
    (0, c.Ew)(e) || null == O || O(e)
  }, [O]);
  return (0, r.jsxs)("div", {
    className: _.controlBar,
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)("div", {
        className: _.questSelectorContainer,
        children: (0, r.jsxs)("div", {
          className: _.questSelectorWrapper,
          children: [(0, r.jsx)(g.Z, {}), (0, r.jsxs)("div", {
            className: _.questInput,
            children: [(0, r.jsx)(a.d, {
              "aria-label": "Quest ID",
              options: A,
              value: E,
              onChange: R,
              placeholder: m.intl.string(m.t.Zw8jxn),
              clearable: true,
              filter: (e, t) => {
                if ((0, c.Ew)(null == t ? true : t.trim())) return e;
                let n = e.filter(e => e.label.toLowerCase().includes(t.toLowerCase()) || e.value.toLowerCase().includes(t.toLowerCase()));
                return 0 === n.length && "" !== t.trim() ? [{
                  label: t.trim(),
                  value: t.trim()
                }] : n
              }
            }, "".concat(E, "-").concat(null != (b = null == v || null == (n = v.config) || null == (t = n.messages) ? true : t.questName) ? b : "")), (0, r.jsx)(s.hU, {
              onClick: y,
              "aria-label": m.intl.string(m.t.wzzjk9),
              icon: s.DuK,
              loading: x
            })]
          })]
        })
      })
    }), null != E && null != v && (0, r.jsx)("div", {
      className: _.controlsSection,
      children: (0, r.jsxs)(s.ButtonGroup, {
        className: _.controlButtons,
        children: [(0, r.jsx)(s.Button, {
          onClick: Z,
          disabled: I,
          loading: I,
          variant: "secondary",
          text: m.intl.string(m.t.jQEfRT)
        }), (0, r.jsx)(s.Button, {
          onClick: w,
          disabled: I,
          loading: I,
          variant: "secondary",
          text: m.intl.string(m.t.taqkwK)
        }), (0, r.jsx)(s.Button, {
          onClick: L,
          disabled: I,
          loading: I,
          variant: "secondary",
          text: m.intl.string(m.t.cKSLr4)
        }), (0, r.jsx)(s.yRy, {
          targetElementRef: N,
          shouldShow: S,
          onRequestClose: () => T(false),
          position: "bottom",
          align: "center",
          renderPopout: () => (0, r.jsx)("div", {
            className: _.sharePopover,
            children: (0, r.jsx)("div", {
              className: _.copyInput,
              children: (0, r.jsx)(o.Z, {
                value: h.$w.QUEST_PREVIEW_TOOL_2(E),
                text: m.intl.string(m.t.WqhZss)
              })
            })
          }),
          children: () => (0, r.jsx)(s.hU, {
            buttonRef: N,
            onClick: () => T(!S),
            "aria-label": m.intl.string(m.t.rNGQfD),
            icon: s.TIy,
            variant: "secondary"
          })
        })]
      })
    }), null != P ? (0, r.jsx)(f.W, {
      error: P
    }) : null, x ? (0, r.jsx)(s.$jN, {}) : null]
  })
}