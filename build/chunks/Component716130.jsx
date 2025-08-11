/** Chunk was on 22988 **/
/** chunk id: 716130, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk795808 = require("./795808.js");

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
  } = e, c = (0, s.e7)([p.Z], () => p.Z.editedOnboardingPrompts), u = c.filter(e => e.inOnboarding), m = u.length, {
    drag: h,
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
    h(j(O))
  }, [h, j, O]), (0, r.jsxs)("div", {
    ref: O,
    className: a()(x.separatorSection, {
      [x.dropIndicatorBefore]: null != v && m < v,
      [x.dropIndicatorAfter]: null != v && m > v
    }),
    children: [!l && u.length < f.b3 ? (0, r.jsxs)(o.P3F, {
      className: x.addPrompt,
      onClick: () => (0, g.tS)(t, [...c, (0, f.yZ)(true)], false),
      children: [(0, r.jsx)(o.oFk, {
        size: "custom",
        color: "currentColor",
        className: x.plusIcon,
        width: 20,
        height: 20
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-brand",
        children: b.intl.string(b.t.ujFqu7)
      })]
    }) : null, n ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: x.divider
      }), (0, r.jsx)(o.X6q, {
        variant: "heading-md/bold",
        children: b.intl.string(b.t.tjrGcX)
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: x.subtitle,
        children: b.intl.string(b.t.XFa6Q0)
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
    singleColumn: a
  } = e, d = (0, s.e7)([m.Z], () => m.Z.getGuild(t)), O = (0, s.e7)([p.Z], () => p.Z.editedOnboardingPrompts), y = O.filter(e => e.inOnboarding), C = O.filter(e => true !== e.inOnboarding), N = [...y.map(e => ({
    id: e.id,
    data: e
  })), {
    id: "separator",
    data: (0, f.ae)()
  }, ...C.map(e => ({
    id: e.id,
    data: e
  }))], {
    handleDragStart: I,
    handleDragReset: E,
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
    if (n.length > f.b3) return void c.Z.show({
      title: b.intl.string(b.t["Cxtq5+"]),
      body: b.intl.formatToPlainString(b.t["pkbZ+f"], {
        numQuestions: f.b3
      })
    });
    (0, g.tS)(d, [...n, ...r])
  });
  return null == d ? null : (0, r.jsxs)(r.Fragment, {
    children: [i ? null : (0, r.jsxs)(r.Fragment, {
      children: [n ? null : (0, r.jsxs)("div", {
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-md/bold",
          children: b.intl.string(b.t["24Qm4O"])
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: x.subtitle,
          children: b.intl.string(b.t.QvCcYW)
        })]
      }), y.map((e, t) => (0, r.jsx)(h.Z, {
        guild: d,
        prompt: e,
        disableAutofocus: n,
        includeCount: l,
        singleColumn: a,
        promptIndex: t,
        dragIndex: t,
        onPromptDragStart: I,
        onPromptDragReset: E,
        onPromptDragComplete: S
      }, e.id))]
    }), (0, r.jsx)(_, {
      guild: d,
      prejoinOnly: n,
      postjoinOnly: i
    }), n ? null : (0, r.jsxs)(r.Fragment, {
      children: [C.map((e, t) => (0, r.jsx)(h.Z, {
        guild: d,
        prompt: e,
        promptIndex: t + y.length,
        dragIndex: t + y.length + 1,
        onPromptDragStart: I,
        onPromptDragReset: E,
        onPromptDragComplete: S
      }, e.id)), O.length < f.YW ? (0, r.jsxs)(o.P3F, {
        className: x.addPrompt,
        onClick: () => (0, g.tS)(d, [...O, (0, f.yZ)(false)], false),
        children: [(0, r.jsx)(o.oFk, {
          size: "custom",
          color: "currentColor",
          className: x.plusIcon,
          width: 20,
          height: 20
        }), (0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "text-brand",
          children: b.intl.string(b.t.ujFqu7)
        })]
      }) : null]
    })]
  })
}