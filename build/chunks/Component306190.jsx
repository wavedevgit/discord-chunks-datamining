/** Chunk was on 21738 **/
/** chunk id: 306190, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js"), require("./667532.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk416052 = require("./416052.jsx"),
  Chunk240248 = require("./240248.js"),
  Chunk829219 = require("./829219.js"),
  Chunk859703 = require("./859703.js"),
  Chunk890687 = require("./890687.js"),
  Chunk45498 = require("./45498.jsx"),
  Chunk767521 = require("./767521.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk883088 = require("./883088.js");
let A = function(e) {
  var t, n, A;
  let {
    questId: _,
    setQuestId: b,
    quest: E,
    refreshQuest: O
  } = e, [y, I] = i.useState(false), [v, S] = i.useState(false), C = i.useRef(null), N = (0, d.pT)(), T = (0, l.bG)([u.A], () => null != _ ? u.A.getFetchQuestPreviewError(_) : null, [_]), j = (0, l.bG)([u.A], () => null != _ && u.A.isFetchingQuestPreview(_), [_]), x = i.useMemo(() => {
    let e = N.map(e => {
      var t, n, r;
      return {
        id: e.id,
        label: "".concat(null != (t = null == (r = e.config) || null == (n = r.messages) ? true : n.questName) ? t : e.id, " (").concat(e.id, ")"),
        value: e.id
      }
    });
    return null == _ || e.some(e => e.value === _) || e.unshift({
      id: _,
      label: _,
      value: _
    }), e
  }, [N, _]), P = i.useCallback(async () => {
    if (null != _) {
      I(true);
      try {
        await (0, c.Yb)(_, 1)
      } finally {
        I(false)
      }
    }
  }, [_, I]), w = i.useCallback(async () => {
    if (null != _) {
      I(true);
      try {
        await (0, c.UZ)(_)
      } finally {
        I(false)
      }
    }
  }, [_, I]), L = i.useCallback(async () => {
    if (null != _) {
      I(true);
      try {
        let e = Math.random();
        await (0, c.Yb)(_, e)
      } finally {
        I(false)
      }
    }
  }, [_, I]), R = i.useCallback(e => {
    (0, o.uJ)(e) || null == b || b(e)
  }, [b]);
  return (0, r.jsxs)("div", {
    className: f.Fr,
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)("div", {
        className: f.Br,
        children: (0, r.jsxs)("div", {
          className: f.bo,
          children: [(0, r.jsx)(h.A, {}), (0, r.jsxs)("div", {
            className: f.b8,
            children: [(0, r.jsx)(a.ZiE, {
              selectionMode: "single",
              label: "Quest ID",
              hideLabel: true,
              options: x,
              value: _,
              onSelectionChange: R,
              placeholder: m.intl.string(m.t.Zw8jxn),
              clearable: true,
              customMatchSorter: (e, t) => {
                if ((0, o.uJ)(null == t ? true : t.trim())) return e;
                let n = e.filter(e => e.label.toLowerCase().includes(t.toLowerCase()) || e.value.toLowerCase().includes(t.toLowerCase()));
                return 0 === n.length && "" !== t.trim() ? [{
                  label: t.trim(),
                  value: t.trim()
                }] : n
              }
            }, "".concat(_, "-").concat(null != (t = null == E || null == (A = E.config) || null == (n = A.messages) ? true : n.questName) ? t : "")), (0, r.jsx)(a.K0, {
              onClick: O,
              "aria-label": m.intl.string(m.t.wzzjk9),
              icon: a.fNY,
              loading: j
            })]
          })]
        })
      })
    }), null != _ && null != E && (0, r.jsx)("div", {
      className: f.in,
      children: (0, r.jsxs)(a.ButtonGroup, {
        className: f.xv,
        children: [(0, r.jsx)(a.Button, {
          onClick: P,
          disabled: y,
          loading: y,
          variant: "secondary",
          text: m.intl.string(m.t.jQEfRT)
        }), (0, r.jsx)(a.Button, {
          onClick: w,
          disabled: y,
          loading: y,
          variant: "secondary",
          text: m.intl.string(m.t.taqkwK)
        }), (0, r.jsx)(a.Button, {
          onClick: L,
          disabled: y,
          loading: y,
          variant: "secondary",
          text: m.intl.string(m.t.cKSLr4)
        }), (0, r.jsx)(a.YNO, {
          targetElementRef: C,
          shouldShow: v,
          onRequestClose: () => S(false),
          position: "bottom",
          align: "center",
          renderPopout: () => (0, r.jsx)("div", {
            className: f.PP,
            children: (0, r.jsx)("div", {
              className: f.sH,
              children: (0, r.jsx)(s.A, {
                value: g.Sb.QUEST_PREVIEW_TOOL_2(_),
                text: m.intl.string(m.t.WqhZss)
              })
            })
          }),
          children: () => (0, r.jsx)(a.K0, {
            buttonRef: C,
            onClick: () => S(!v),
            "aria-label": m.intl.string(m.t.rNGQfD),
            icon: a.TdU,
            variant: "secondary"
          })
        })]
      })
    }), null != T ? (0, r.jsx)(p.P, {
      error: T
    }) : null, j ? (0, r.jsx)(a.y$y, {}) : null]
  })
}