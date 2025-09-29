/** Chunk was on web.js **/
/** chunk id: 606033, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
    questId: g,
    setQuestId: E,
    quest: b,
    refreshQuest: y
  } = e, [O, v] = i.useState(false), [I, T] = i.useState(false), S = i.useRef(null), A = (0, u.MP)(), C = (0, a.e7)([d.Z], () => null != g ? d.Z.getFetchQuestPreviewError(g) : null, [g]), N = (0, a.e7)([d.Z], () => null != g && d.Z.isFetchingQuestPreview(g), [g]), R = i.useMemo(() => {
    let e = A.map(e => {
      var t, n, r;
      return {
        label: "".concat(null != (r = null == (n = e.config) || null == (t = n.messages) ? true : t.questName) ? r : e.id, " (").concat(e.id, ")"),
        value: e.id
      }
    });
    return null == g || e.some(e => e.value === g) || e.unshift({
      label: g,
      value: g
    }), e
  }, [A, g]), P = i.useCallback(async () => {
    if (null != g) {
      v(true);
      try {
        await (0, c.Wf)(g, 1)
      } finally {
        v(false)
      }
    }
  }, [g, v]), w = i.useCallback(async () => {
    if (null != g) {
      v(true);
      try {
        await (0, c.eT)(g)
      } finally {
        v(false)
      }
    }
  }, [g, v]), D = i.useCallback(async () => {
    if (null != g) {
      v(true);
      try {
        let e = Math.random();
        await (0, c.Wf)(g, e)
      } finally {
        v(false)
      }
    }
  }, [g, v]), x = i.useCallback(e => {
    (0, l.Ew)(e) || null == E || E(e)
  }, [E]);
  return (0, r.jsxs)("div", {
    className: h.controlBar,
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)("div", {
        className: h.questSelectorContainer,
        children: (0, r.jsx)("div", {
          children: (0, r.jsxs)("div", {
            className: h.questInput,
            children: [(0, r.jsx)(o.VcW, {
              "aria-label": "Quest ID",
              options: R,
              value: g,
              onChange: x,
              placeholder: p.intl.string(p.t.Zw8jxs),
              clearable: true,
              filter: (e, t) => {
                if ((0, l.Ew)(null == t ? true : t.trim())) return e;
                let n = e.filter(e => e.label.toLowerCase().includes(t.toLowerCase()) || e.value.toLowerCase().includes(t.toLowerCase()));
                return 0 === n.length && "" !== t.trim() ? [{
                  label: t.trim(),
                  value: t.trim()
                }] : n
              }
            }, "".concat(g, "-").concat(null != (m = null == b || null == (n = b.config) || null == (t = n.messages) ? true : t.questName) ? m : "")), (0, r.jsx)(o.hU, {
              onClick: y,
              "aria-label": p.intl.string(p.t.wzzjk5),
              icon: o.DuK,
              loading: N
            })]
          })
        })
      })
    }), null != g && null != b && (0, r.jsx)("div", {
      className: h.controlsSection,
      children: (0, r.jsxs)(o.hE2, {
        className: h.controlButtons,
        children: [(0, r.jsx)(o.zxk, {
          onClick: P,
          disabled: O,
          loading: O,
          variant: "secondary",
          text: p.intl.string(p.t.jQEfRU)
        }), (0, r.jsx)(o.zxk, {
          onClick: w,
          disabled: O,
          loading: O,
          variant: "secondary",
          text: p.intl.string(p.t.taqkwM)
        }), (0, r.jsx)(o.zxk, {
          onClick: D,
          disabled: O,
          loading: O,
          variant: "secondary",
          text: p.intl.string(p.t.cKSLr6)
        }), (0, r.jsx)(o.yRy, {
          targetElementRef: S,
          shouldShow: I,
          onRequestClose: () => T(false),
          position: "bottom",
          align: "center",
          renderPopout: () => (0, r.jsx)("div", {
            className: h.sharePopover,
            children: (0, r.jsx)("div", {
              className: h.copyInput,
              children: (0, r.jsx)(s.Z, {
                value: _.$w.QUEST_PREVIEW_TOOL_2(g),
                text: p.intl.string(p.t.WqhZsr)
              })
            })
          }),
          children: () => (0, r.jsx)(o.hU, {
            buttonRef: S,
            onClick: () => T(!I),
            "aria-label": p.intl.string(p.t.rNGQfH),
            icon: o.TIy,
            variant: "secondary"
          })
        })]
      })
    }), null != C ? (0, r.jsx)(f.W, {
      error: C
    }) : null, N ? (0, r.jsx)(o.$jN, {}) : null]
  })
}