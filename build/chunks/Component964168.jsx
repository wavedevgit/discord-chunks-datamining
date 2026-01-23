/** Chunk was on web.js **/
/** chunk id: 964168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => S,
  m: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk216456 = require("./216456.js"),
  Chunk859703 = require("./859703.js"),
  Chunk890687 = require("./890687.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk627574 = require("./627574.js"),
  Chunk295171 = require("./295171.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = 2500,
  I = 467;

function S(e) {
  let {
    questId: t,
    survey: n,
    transitionState: a,
    onClose: s,
    onSubmit: f
  } = e, p = (0, _.C5)(t), [y, O] = i.useState(0), [S, C] = (0, l.zhh)(() => ({
    from: {
      width: "0%"
    },
    config: {
      duration: A
    }
  })), R = e => {
    f(), O(1), null != p && d.default.track(h.HAw.QUEST_SURVEY_SUBMITTED, v(b({}, N(p, n)), {
      choice: e.text,
      choice_id: e.key
    }))
  }, w = async e => {
    1 === e && (await C({
      width: "100%"
    }), s())
  };
  return (0, c.Ay)(() => {
    null != p && d.default.track(h.HAw.QUEST_SURVEY_DISPLAYED, N(p, n))
  }), null == p && s(), (0, r.jsx)(l.EOs, {
    "data-migration-pending": true,
    transitionState: a,
    size: l.rIJ.DYNAMIC,
    className: g.modalRoot,
    parentComponent: "QuestSurveyModal",
    children: (0, r.jsxs)(l.tN_, {
      activeSlide: y,
      width: I,
      onSlideReady: w,
      children: [(0, r.jsxs)(l.q7S, {
        id: 0,
        children: [(0, r.jsxs)(l.rQ0, {
          "data-migration-pending": true,
          direction: u.A.Direction.VERTICAL,
          separator: false,
          className: g.Hc,
          children: [(0, r.jsx)(l.s_y, {
            "data-migration-pending": true,
            className: g.PV,
            onClick: s
          }), (0, r.jsx)("img", {
            src: E,
            alt: "",
            className: g.LY
          }), (0, r.jsx)(l.Heading, {
            variant: "heading-lg/semibold",
            children: n.title
          }), (0, r.jsx)(l.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: n.subtitle
          })]
        }), (0, r.jsx)(l.$mQ, {
          "data-migration-pending": true,
          className: g.jE,
          children: n.choices.map(e => (0, r.jsx)(T, {
            choice: e,
            onClick: R
          }, e.key))
        })]
      }), (0, r.jsxs)(l.q7S, {
        id: 1,
        children: [(0, r.jsxs)(l.$mQ, {
          "data-migration-pending": true,
          className: g.wD,
          children: [(0, r.jsx)("img", {
            src: E,
            alt: "",
            className: g.LY
          }), (0, r.jsx)(l.Heading, {
            variant: "heading-lg/semibold",
            children: m.intl.string(m.t.KTjjrG)
          }), (0, r.jsx)(l.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: m.intl.string(m.t.AvbrEM)
          })]
        }), (0, r.jsx)(l.jlY, {
          "data-migration-pending": true,
          children: (0, r.jsxs)("div", {
            className: g.cG,
            children: [(0, r.jsx)(l.Button, {
              variant: "primary",
              text: m.intl.string(m.t.cpT0Cq),
              onClick: s
            }), (0, r.jsx)(o.animated.div, {
              className: g.ce,
              style: S
            })]
          })
        })]
      })]
    })
  })
}

function T(e) {
  let {
    className: t,
    choice: n,
    onClick: i
  } = e;
  return (0, r.jsxs)(l.DUT, {
    className: s()(g.z5, t),
    onClick: () => i(n),
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/semibold",
      children: n.text
    }), (0, r.jsx)(l._BQ, {})]
  })
}

function C(e) {
  let t = false;
  (0, l.mMO)(async () => {
    let {
      default: i
    } = await Promise.resolve().then(n.bind(n, 964168));
    return n => (0, r.jsx)(i, v(b({}, n, e), {
      onSubmit: () => {
        t = true
      }
    }))
  }, {
    onCloseCallback: () => {
      let n = p.A.getQuest(e.questId);
      null != n && d.default.track(h.HAw.QUEST_SURVEY_DISMISSED, v(b({}, N(n, e.survey)), {
        submitted: t
      }))
    }
  })
}

function N(e, t) {
  return {
    quest_id: e.id,
    quest_status: (0, f.NI)(e),
    survey_id: t.id,
    survey_title: t.title,
    survey_subtitle: t.subtitle,
    choices: t.choices.map(e => e.text)
  }
}