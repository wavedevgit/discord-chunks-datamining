/** Chunk was on 1272 **/
/** chunk id: 606033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
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
  Chunk9976 = require("./9976.js");
let E = function(e) {
  var t, n, E;
  let {
    questId: _,
    setQuestId: O,
    quest: v,
    refreshQuest: I
  } = e, [y, C] = i.useState(false), [S, T] = i.useState(false), N = i.useRef(null), j = (0, p.MP)(), x = (0, l.e7)([d.Z], () => null != _ ? d.Z.getFetchQuestPreviewError(_) : null, [_]), P = (0, l.e7)([d.Z], () => null != _ && d.Z.isFetchingQuestPreview(_), [_]), A = i.useMemo(() => {
    let e = j.map(e => {
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
  }, [j, _]), Z = i.useCallback(async () => {
    if (null != _) {
      C(true);
      try {
        await (0, u.Wf)(_, 1)
      } finally {
        C(false)
      }
    }
  }, [_, C]), w = i.useCallback(async () => {
    if (null != _) {
      C(true);
      try {
        await (0, u.eT)(_)
      } finally {
        C(false)
      }
    }
  }, [_, C]), L = i.useCallback(async () => {
    if (null != _) {
      C(true);
      try {
        let e = Math.random();
        await (0, u.Wf)(_, e)
      } finally {
        C(false)
      }
    }
  }, [_, C]), R = i.useCallback(e => {
    (0, c.Ew)(e) || null == O || O(e)
  }, [O]);
  return (0, r.jsxs)("div", {
    className: b.controlBar,
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)("div", {
        className: b.questSelectorContainer,
        children: (0, r.jsxs)("div", {
          className: b.questSelectorWrapper,
          children: [(0, r.jsx)(g.Z, {}), (0, r.jsxs)("div", {
            className: b.questInput,
            children: [(0, r.jsx)(a.d, {
              "aria-label": "Quest ID",
              options: A,
              value: _,
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
            }, "".concat(_, "-").concat(null != (E = null == v || null == (n = v.config) || null == (t = n.messages) ? true : t.questName) ? E : "")), (0, r.jsx)(o.hU, {
              onClick: I,
              "aria-label": m.intl.string(m.t.wzzjk9),
              icon: o.DuK,
              loading: P
            })]
          })]
        })
      })
    }), null != _ && null != v && (0, r.jsx)("div", {
      className: b.controlsSection,
      children: (0, r.jsxs)(o.ButtonGroup, {
        className: b.controlButtons,
        children: [(0, r.jsx)(o.Button, {
          onClick: Z,
          disabled: y,
          loading: y,
          variant: "secondary",
          text: m.intl.string(m.t.jQEfRT)
        }), (0, r.jsx)(o.Button, {
          onClick: w,
          disabled: y,
          loading: y,
          variant: "secondary",
          text: m.intl.string(m.t.taqkwK)
        }), (0, r.jsx)(o.Button, {
          onClick: L,
          disabled: y,
          loading: y,
          variant: "secondary",
          text: m.intl.string(m.t.cKSLr4)
        }), (0, r.jsx)(o.yRy, {
          targetElementRef: N,
          shouldShow: S,
          onRequestClose: () => T(false),
          position: "bottom",
          align: "center",
          renderPopout: () => (0, r.jsx)("div", {
            className: b.sharePopover,
            children: (0, r.jsx)("div", {
              className: b.copyInput,
              children: (0, r.jsx)(s.Z, {
                value: h.$w.QUEST_PREVIEW_TOOL_2(_),
                text: m.intl.string(m.t.WqhZss)
              })
            })
          }),
          children: () => (0, r.jsx)(o.hU, {
            buttonRef: N,
            onClick: () => T(!S),
            "aria-label": m.intl.string(m.t.rNGQfD),
            icon: o.TIy,
            variant: "secondary"
          })
        })]
      })
    }), null != x ? (0, r.jsx)(f.W, {
      error: x
    }) : null, P ? (0, r.jsx)(o.$jN, {}) : null]
  })
}