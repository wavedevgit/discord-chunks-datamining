/** Chunk was on web.js **/
/** chunk id: 606033, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./290780.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk484614 = require("./484614.jsx"),
  Chunk624138 = require("./624138.js"),
  Chunk272008 = require("./272008.js"),
  Chunk569984 = require("./569984.js"),
  Chunk253010 = require("./253010.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk747277 = require("./747277.js");
let h = function(e) {
  var t, n, h;
  let {
    questId: m,
    setQuestId: g,
    quest: E,
    refreshQuest: b
  } = e, [y, O] = i.useState(false), [v, I] = i.useState(false), T = i.useRef(null), S = (0, a.Wu)([u.Z], () => [...u.Z.quests.values()]), A = (0, a.e7)([u.Z], () => null != m ? u.Z.getFetchQuestPreviewError(m) : null, [m]), C = (0, a.e7)([u.Z], () => null != m && u.Z.isFetchingQuestPreview(m), [m]), N = i.useMemo(() => {
    let e = S.map(e => {
      var t, n, r;
      return {
        label: "".concat(null != (r = null == (n = e.config) || null == (t = n.messages) ? true : t.questName) ? r : e.id, " (").concat(e.id, ")"),
        value: e.id
      }
    });
    return null == m || e.some(e => e.value === m) || e.unshift({
      label: m,
      value: m
    }), e
  }, [S, m]), R = i.useCallback(async () => {
    if (null != m) {
      O(true);
      try {
        await (0, c.Wf)(m, 1)
      } finally {
        O(false)
      }
    }
  }, [m, O]), P = i.useCallback(async () => {
    if (null != m) {
      O(true);
      try {
        await (0, c.eT)(m)
      } finally {
        O(false)
      }
    }
  }, [m, O]), w = i.useCallback(async () => {
    if (null != m) {
      O(true);
      try {
        let e = Math.random();
        await (0, c.Wf)(m, e)
      } finally {
        O(false)
      }
    }
  }, [m, O]), D = i.useCallback(e => {
    (0, l.Ew)(e) || null == g || g(e)
  }, [g]);
  return (0, r.jsxs)("div", {
    className: p.controlBar,
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)("div", {
        className: p.questSelectorContainer,
        children: (0, r.jsx)("div", {
          children: (0, r.jsxs)("div", {
            className: p.questInput,
            children: [(0, r.jsx)(o.VcW, {
              "aria-label": "Quest ID",
              options: N,
              value: m,
              onChange: D,
              placeholder: _.intl.string(_.t.Zw8jxs),
              clearable: true,
              filter: (e, t) => {
                if ((0, l.Ew)(null == t ? true : t.trim())) return e;
                let n = e.filter(e => e.label.toLowerCase().includes(t.toLowerCase()) || e.value.toLowerCase().includes(t.toLowerCase()));
                return 0 === n.length && "" !== t.trim() ? [{
                  label: t.trim(),
                  value: t.trim()
                }] : n
              }
            }, "".concat(m, "-").concat(null != (h = null == E || null == (n = E.config) || null == (t = n.messages) ? true : t.questName) ? h : "")), (0, r.jsx)(o.hU, {
              onClick: b,
              "aria-label": _.intl.string(_.t.wzzjk5),
              icon: o.DuK,
              loading: C
            })]
          })
        })
      })
    }), null != m && null != E && (0, r.jsx)("div", {
      className: p.controlsSection,
      children: (0, r.jsxs)(o.hE2, {
        className: p.controlButtons,
        children: [(0, r.jsx)(o.zxk, {
          onClick: R,
          disabled: y,
          loading: y,
          variant: "secondary",
          text: _.intl.string(_.t.jQEfRU)
        }), (0, r.jsx)(o.zxk, {
          onClick: P,
          disabled: y,
          loading: y,
          variant: "secondary",
          text: _.intl.string(_.t.taqkwM)
        }), (0, r.jsx)(o.zxk, {
          onClick: w,
          disabled: y,
          loading: y,
          variant: "secondary",
          text: _.intl.string(_.t.cKSLr6)
        }), (0, r.jsx)(o.yRy, {
          targetElementRef: T,
          shouldShow: v,
          onRequestClose: () => I(false),
          position: "bottom",
          align: "center",
          renderPopout: () => (0, r.jsx)("div", {
            className: p.sharePopover,
            children: (0, r.jsx)("div", {
              className: p.copyInput,
              children: (0, r.jsx)(s.Z, {
                value: f.$w.QUEST_PREVIEW_TOOL_2(m),
                text: _.intl.string(_.t.WqhZsr)
              })
            })
          }),
          children: () => (0, r.jsx)(o.hU, {
            buttonRef: T,
            onClick: () => I(!v),
            "aria-label": _.intl.string(_.t.rNGQfH),
            icon: o.TIy,
            variant: "secondary"
          })
        })]
      })
    }), null != A ? (0, r.jsx)(d.W, {
      error: A
    }) : null, C ? (0, r.jsx)(o.$jN, {}) : null]
  })
}