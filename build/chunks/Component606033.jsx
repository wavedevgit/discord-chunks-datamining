/** Chunk was on web.js **/
/** chunk id: 606033, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./781311.js");
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
  Chunk982538 = require("./982538.js");
let h = function(e) {
  let {
    questId: t,
    setQuestId: n,
    quest: h,
    refreshQuest: m
  } = e, [g, E] = i.useState(false), [b, y] = i.useState(false), O = i.useRef(null), v = (0, a.Wu)([u.Z], () => [...u.Z.quests.values()]), I = (0, a.e7)([u.Z], () => null != t ? u.Z.getFetchQuestPreviewError(t) : null, [t]), T = (0, a.e7)([u.Z], () => null != t && u.Z.isFetchingQuestPreview(t), [t]), S = i.useMemo(() => v.map(e => {
    var t, n, r;
    return {
      label: "".concat(null != (r = null == (n = e.config) || null == (t = n.messages) ? true : t.questName) ? r : e.id, " (").concat(e.id, ")"),
      value: e.id
    }
  }), [v]), A = i.useCallback(async () => {
    if (null != t) {
      E(true);
      try {
        await (0, c.Wf)(t, 1)
      } finally {
        E(false)
      }
    }
  }, [t, E]), C = i.useCallback(async () => {
    if (null != t) {
      E(true);
      try {
        await (0, c.eT)(t)
      } finally {
        E(false)
      }
    }
  }, [t, E]), N = i.useCallback(async () => {
    if (null != t) {
      E(true);
      try {
        let e = Math.random();
        await (0, c.Wf)(t, e)
      } finally {
        E(false)
      }
    }
  }, [t, E]), R = i.useCallback(e => {
    (0, l.Ew)(e) || null == n || n(e)
  }, [n]);
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
              options: S,
              value: t,
              onChange: R,
              placeholder: "Select or enter Quest ID",
              clearable: true,
              filter: (e, t) => {
                if ((0, l.Ew)(null == t ? true : t.trim())) return e;
                let n = e.filter(e => e.label.toLowerCase().includes(t.toLowerCase()) || e.value.toLowerCase().includes(t.toLowerCase()));
                return 0 === n.length && "" !== t.trim() ? [{
                  label: t.trim(),
                  value: t.trim()
                }] : n
              }
            }), (0, r.jsx)(o.hU, {
              onClick: m,
              "aria-label": _.intl.string(_.t.wzzjk5),
              icon: o.DuK,
              loading: T
            })]
          })
        })
      })
    }), null != t && null != h && (0, r.jsx)("div", {
      className: p.controlsSection,
      children: (0, r.jsxs)(o.hE2, {
        className: p.controlButtons,
        children: [(0, r.jsx)(o.zxk, {
          onClick: A,
          disabled: g,
          loading: g,
          variant: "secondary",
          text: "Complete Quest"
        }), (0, r.jsx)(o.zxk, {
          onClick: C,
          disabled: g,
          loading: g,
          variant: "secondary",
          text: "Reset Quest"
        }), (0, r.jsx)(o.zxk, {
          onClick: N,
          disabled: g,
          loading: g,
          variant: "secondary",
          text: "Random Progress"
        }), (0, r.jsx)(o.yRy, {
          targetElementRef: O,
          shouldShow: b,
          onRequestClose: () => y(false),
          position: "bottom",
          align: "center",
          renderPopout: () => (0, r.jsx)("div", {
            className: p.sharePopover,
            children: (0, r.jsx)("div", {
              className: p.copyInput,
              children: (0, r.jsx)(s.Z, {
                value: f.$w.SETTINGS_QUEST_PREVIEW_TOOL_2(t),
                text: "Copy link"
              })
            })
          }),
          children: () => (0, r.jsx)(o.hU, {
            buttonRef: O,
            onClick: () => y(!b),
            "aria-label": "Share quest link",
            icon: o.TIy,
            variant: "secondary"
          })
        })]
      })
    }), null != I ? (0, r.jsx)(d.W, {
      error: I
    }) : null, T ? (0, r.jsx)(o.$jN, {}) : null]
  })
}