/** Chunk was on 21738 **/
/** chunk id: 306190, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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
let m = function(e) {
  var t, n, m;
  let {
    questId: b,
    setQuestId: _,
    quest: E,
    refreshQuest: O
  } = e, [y, I] = i.useState(false), [v, S] = i.useState(false), C = i.useRef(null), N = (0, d.pT)(), T = (0, l.bG)([u.A], () => null != b ? u.A.getFetchQuestPreviewError(b) : null, [b]), j = (0, l.bG)([u.A], () => null != b && u.A.isFetchingQuestPreview(b), [b]), x = i.useMemo(() => {
    let e = N.map(e => {
      var t, n, r;
      return {
        id: e.id,
        label: "".concat(null != (t = null == (r = e.config) || null == (n = r.messages) ? true : n.questName) ? t : e.id, " (").concat(e.id, ")"),
        value: e.id
      }
    });
    return null == b || e.some(e => e.value === b) || e.unshift({
      id: b,
      label: b,
      value: b
    }), e
  }, [N, b]), P = i.useCallback(async () => {
    if (null != b) {
      I(true);
      try {
        await (0, c.Yb)(b, 1)
      } finally {
        I(false)
      }
    }
  }, [b, I]), w = i.useCallback(async () => {
    if (null != b) {
      I(true);
      try {
        await (0, c.UZ)(b)
      } finally {
        I(false)
      }
    }
  }, [b, I]), L = i.useCallback(async () => {
    if (null != b) {
      I(true);
      try {
        let e = Math.random();
        await (0, c.Yb)(b, e)
      } finally {
        I(false)
      }
    }
  }, [b, I]), R = i.useCallback(e => {
    (0, o.uJ)(e) || null == _ || _(e)
  }, [_]);
  return (0, r.jsxs)("div", {
    className: g.Fr,
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)("div", {
        className: g.Br,
        children: (0, r.jsxs)("div", {
          className: g.bo,
          children: [(0, r.jsx)(f.A, {}), (0, r.jsxs)("div", {
            className: g.b8,
            children: [(0, r.jsx)(a.ZiE, {
              selectionMode: "single",
              label: "Quest ID",
              hideLabel: true,
              options: x,
              value: b,
              onSelectionChange: R,
              placeholder: A.intl.string(A.t.Zw8jxn),
              clearable: true,
              customMatchSorter: (e, t) => {
                if ((0, o.uJ)(null == t ? true : t.trim())) return e;
                let n = e.filter(e => e.label.toLowerCase().includes(t.toLowerCase()) || e.value.toLowerCase().includes(t.toLowerCase()));
                return 0 === n.length && "" !== t.trim() ? [{
                  label: t.trim(),
                  value: t.trim()
                }] : n
              }
            }, "".concat(b, "-").concat(null != (t = null == E || null == (m = E.config) || null == (n = m.messages) ? true : n.questName) ? t : "")), (0, r.jsx)(a.K0, {
              onClick: O,
              "aria-label": A.intl.string(A.t.wzzjk9),
              icon: a.fNY,
              loading: j
            })]
          })]
        })
      })
    }), null != b && null != E && (0, r.jsx)("div", {
      className: g.in,
      children: (0, r.jsxs)(a.ButtonGroup, {
        className: g.xv,
        children: [(0, r.jsx)(a.Button, {
          onClick: P,
          disabled: y,
          loading: y,
          variant: "secondary",
          text: A.intl.string(A.t.jQEfRT)
        }), (0, r.jsx)(a.Button, {
          onClick: w,
          disabled: y,
          loading: y,
          variant: "secondary",
          text: A.intl.string(A.t.taqkwK)
        }), (0, r.jsx)(a.Button, {
          onClick: L,
          disabled: y,
          loading: y,
          variant: "secondary",
          text: A.intl.string(A.t.cKSLr4)
        }), (0, r.jsx)(a.YNO, {
          targetElementRef: C,
          shouldShow: v,
          onRequestClose: () => S(false),
          position: "bottom",
          align: "center",
          renderPopout: () => (0, r.jsx)("div", {
            className: g.PP,
            children: (0, r.jsx)("div", {
              className: g.sH,
              children: (0, r.jsx)(s.A, {
                value: h.Sb.QUEST_PREVIEW_TOOL_2(b),
                text: A.intl.string(A.t.WqhZss)
              })
            })
          }),
          children: () => (0, r.jsx)(a.K0, {
            buttonRef: C,
            onClick: () => S(!v),
            "aria-label": A.intl.string(A.t.rNGQfD),
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