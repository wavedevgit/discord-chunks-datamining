/** Chunk was on 64982 **/
/** chunk id: 716130, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk603211 = require("./603211.js"),
  Chunk710344 = require("./710344.js"),
  Chunk430824 = require("./430824.js"),
  Chunk570961 = require("./570961.js"),
  Chunk208665 = require("./208665.js"),
  Chunk959508 = require("./959508.jsx"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk314160 = require("./314160.js");

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e) {
  let {
    guild: t,
    prejoinOnly: n,
    postjoinOnly: l
  } = e, c = (0, a.e7)([p.Z], () => p.Z.editedOnboardingPrompts), u = c.filter(e => e.inOnboarding), m = u.length, {
    drag: f,
    drop: j,
    dragSourcePosition: v,
    setIsDraggable: _
  } = (0, d.Z)({
    type: "ONBOARDING_PROMPT_CARD",
    index: m,
    optionId: "separator",
    onDragStart: () => {},
    onDragComplete: () => {},
    onDragReset: () => {}
  }), O = i.useRef(null);
  return i.useEffect(() => {
    _(false)
  }, [_]), i.useEffect(() => {
    f(j(O))
  }, [f, j, O]), (0, r.jsxs)("div", {
    ref: O,
    className: s()(b.separatorSection, {
      [b.dropIndicatorBefore]: null != v && m < v,
      [b.dropIndicatorAfter]: null != v && m > v
    }),
    children: [!l && u.length < h.b3 ? (0, r.jsxs)(o.P3F, {
      className: b.addPrompt,
      onClick: () => (0, g.tS)(t, [...c, (0, h.yZ)(true)], false),
      children: [(0, r.jsx)(o.oFk, {
        size: "custom",
        color: "currentColor",
        className: b.plusIcon,
        width: 20,
        height: 20
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-brand",
        children: x.intl.string(x.t.ujFqu7)
      })]
    }) : null, n ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: b.divider
      }), (0, r.jsx)(o.X6q, {
        variant: "heading-md/bold",
        children: x.intl.string(x.t.tjrGcX)
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: b.subtitle,
        children: x.intl.string(x.t.XFa6Q0)
      })]
    })]
  })
}

function O(e) {
  let {
    guildId: t,
    prejoinOnly: n,
    postjoinOnly: i,
    includeCount: l,
    singleColumn: s
  } = e, d = (0, a.e7)([m.Z], () => m.Z.getGuild(t)), O = (0, a.e7)([p.Z], () => p.Z.editedOnboardingPrompts), y = O.filter(e => e.inOnboarding), C = O.filter(e => true !== e.inOnboarding), N = [...y.map(e => ({
    id: e.id,
    data: e
  })), {
    id: "separator",
    data: (0, h.ae)()
  }, ...C.map(e => ({
    id: e.id,
    data: e
  }))], {
    handleDragStart: E,
    handleDragReset: I,
    handleDragComplete: S
  } = (0, u.Z)(N, e => {
    let t = e.findIndex(e => "separator" === e.id),
      n = e.slice(0, t).map(e => v(j({}, e.data), {
        inOnboarding: true
      })),
      r = e.slice(t + 1).map(e => v(j({}, e.data), {
        inOnboarding: false,
        required: false
      }));
    if (n.length > h.b3) return void c.Z.show({
      title: x.intl.string(x.t["Cxtq5+"]),
      body: x.intl.formatToPlainString(x.t["pkbZ+f"], {
        numQuestions: h.b3
      })
    });
    (0, g.tS)(d, [...n, ...r])
  });
  return null == d ? null : (0, r.jsxs)(r.Fragment, {
    children: [i ? null : (0, r.jsxs)(r.Fragment, {
      children: [n ? null : (0, r.jsxs)("div", {
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-md/bold",
          children: x.intl.string(x.t["24Qm4O"])
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: b.subtitle,
          children: x.intl.string(x.t.QvCcYW)
        })]
      }), y.map((e, t) => (0, r.jsx)(f.Z, {
        guild: d,
        prompt: e,
        disableAutofocus: n,
        includeCount: l,
        singleColumn: s,
        promptIndex: t,
        dragIndex: t,
        onPromptDragStart: E,
        onPromptDragReset: I,
        onPromptDragComplete: S
      }, e.id))]
    }), (0, r.jsx)(_, {
      guild: d,
      prejoinOnly: n,
      postjoinOnly: i
    }), n ? null : (0, r.jsxs)(r.Fragment, {
      children: [C.map((e, t) => (0, r.jsx)(f.Z, {
        guild: d,
        prompt: e,
        promptIndex: t + y.length,
        dragIndex: t + y.length + 1,
        onPromptDragStart: E,
        onPromptDragReset: I,
        onPromptDragComplete: S
      }, e.id)), O.length < h.YW ? (0, r.jsxs)(o.P3F, {
        className: b.addPrompt,
        onClick: () => (0, g.tS)(d, [...O, (0, h.yZ)(false)], false),
        children: [(0, r.jsx)(o.oFk, {
          size: "custom",
          color: "currentColor",
          className: b.plusIcon,
          width: 20,
          height: 20
        }), (0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "text-brand",
          children: x.intl.string(x.t.ujFqu7)
        })]
      }) : null]
    })]
  })
}