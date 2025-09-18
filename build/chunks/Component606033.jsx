/** Chunk was on web.js **/
/** chunk id: 606033, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk272008 = require("./272008.js"),
  Chunk569984 = require("./569984.js"),
  Chunk564034 = require("./564034.jsx"),
  Chunk253010 = require("./253010.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk982538 = require("./982538.js");
let _ = function(e) {
  let {
    questId: t,
    setQuestId: n,
    quest: _,
    refreshQuest: p
  } = e, [h, m] = i.useState(false), [g, E] = i.useState(null != t ? t : ""), b = (0, a.e7)([l.Z], () => null != t ? l.Z.getFetchQuestPreviewError(t) : null, [t]), y = (0, a.e7)([l.Z], () => null != t && l.Z.isFetchingQuestPreview(t), [t]);
  i.useEffect(() => {
    E(null != t ? t : "")
  }, [t, E]);
  let O = i.useCallback(async () => {
      if (null != t) {
        m(true);
        try {
          await (0, s.Wf)(t, 1)
        } finally {
          m(false)
        }
      }
    }, [t, m]),
    v = i.useCallback(async () => {
      if (null != t) {
        m(true);
        try {
          await (0, s.eT)(t)
        } finally {
          m(false)
        }
      }
    }, [t, m]),
    I = i.useCallback(async () => {
      if (null != t) {
        m(true);
        try {
          let e = Math.random();
          await (0, s.Wf)(t, e)
        } finally {
          m(false)
        }
      }
    }, [t, m]),
    T = i.useCallback(() => {
      let e = g.trim();
      "" !== e && null != n && n(e)
    }, [g, n]),
    S = i.useCallback(e => {
      "Enter" === e.key && T()
    }, [T]);
  return (0, r.jsxs)(o.Zbd, {
    className: f.controlBar,
    children: [(0, r.jsx)("div", {
      className: f.topSection,
      children: (0, r.jsxs)("div", {
        className: f.questSelectorContainer,
        children: [(0, r.jsxs)("div", {
          className: f.inputGroup,
          children: [(0, r.jsx)("div", {
            className: f.questInput,
            children: (0, r.jsx)(o.oil, {
              value: g,
              onChange: E,
              onKeyUp: S,
              placeholder: "Enter Quest ID"
            })
          }), (0, r.jsx)(o.zxk, {
            onClick: T,
            disabled: "" === g.trim(),
            variant: "primary",
            text: "Load"
          })]
        }), null != t && null != _ && (0, r.jsxs)("div", {
          className: f.currentQuestInfo,
          children: [(0, r.jsxs)("div", {
            className: f.questName,
            children: [(0, r.jsx)("span", {
              className: f.questLabel,
              children: "Current Quest:"
            }), (0, r.jsx)("span", {
              className: f.questTitle,
              children: _.config.messages.questName
            })]
          }), (0, r.jsx)(o.hU, {
            onClick: p,
            "aria-label": d.intl.string(d.t.wzzjk5),
            icon: o.DuK,
            loading: y
          })]
        })]
      })
    }), null != t && null != _ && (0, r.jsxs)("div", {
      className: f.controlsSection,
      children: [(0, r.jsx)(c.i, {}), (0, r.jsxs)(o.hE2, {
        className: f.controlButtons,
        children: [(0, r.jsx)(o.zxk, {
          onClick: O,
          disabled: h,
          loading: h,
          variant: "secondary",
          text: "Complete Quest"
        }), (0, r.jsx)(o.zxk, {
          onClick: v,
          disabled: h,
          loading: h,
          variant: "secondary",
          text: "Reset Quest"
        }), (0, r.jsx)(o.zxk, {
          onClick: I,
          disabled: h,
          loading: h,
          variant: "secondary",
          text: "Random Progress"
        })]
      })]
    }), null != b ? (0, r.jsx)(u.W, {
      error: b
    }) : null, y ? (0, r.jsx)(o.$jN, {}) : null]
  })
}