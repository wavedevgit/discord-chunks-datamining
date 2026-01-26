/** Chunk was on 39048 **/
/** chunk id: 191117, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk599119 = require("./599119.js"),
  Chunk219504 = require("./219504.js"),
  Chunk71393 = require("./71393.js"),
  Chunk107795 = require("./107795.js"),
  Chunk655943 = require("./655943.js"),
  Chunk726862 = require("./726862.jsx"),
  Chunk539916 = require("./539916.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk42483 = require("./42483.js");

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

function _(e, t) {
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

function O(e) {
  let {
    guild: t,
    prejoinOnly: n,
    postjoinOnly: l
  } = e, c = (0, a.bG)([p.A], () => p.A.editedOnboardingPrompts), u = c.filter(e => e.inOnboarding), g = u.length, {
    drag: f,
    drop: j,
    dragSourcePosition: _,
    setIsDraggable: O
  } = (0, d.A)({
    type: "ONBOARDING_PROMPT_CARD",
    index: g,
    optionId: "separator",
    onDragStart: () => {},
    onDragComplete: () => {},
    onDragReset: () => {}
  }), v = i.useRef(null);
  return i.useEffect(() => {
    O(false)
  }, [O]), i.useEffect(() => {
    f(j(v))
  }, [f, j, v]), (0, r.jsxs)("div", {
    ref: v,
    className: s()(x.fY, {
      [x.A]: null != _ && g < _,
      [x.Ze]: null != _ && g > _
    }),
    children: [!l && u.length < h.D1 ? (0, r.jsxs)(o.DUT, {
      className: x.Wz,
      onClick: () => (0, m.WC)(t, [...c, (0, h.a5)(true)], false),
      children: [(0, r.jsx)(o.U1e, {
        size: "custom",
        color: "currentColor",
        className: x.WW,
        width: 20,
        height: 20
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-brand",
        children: b.intl.string(b.t.ujFquz)
      })]
    }) : null, n ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: x.yF
      }), (0, r.jsx)(o.Heading, {
        variant: "heading-md/bold",
        children: b.intl.string(b.t.tjrGcb)
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        className: x.VA,
        children: b.intl.string(b.t.XFa6Q8)
      })]
    })]
  })
}

function v(e) {
  let {
    guildId: t,
    prejoinOnly: n,
    postjoinOnly: i,
    includeCount: l,
    singleColumn: s
  } = e, d = (0, a.bG)([g.A], () => g.A.getGuild(t)), v = (0, a.bG)([p.A], () => p.A.editedOnboardingPrompts), y = v.filter(e => e.inOnboarding), A = v.filter(e => true !== e.inOnboarding), E = [...y.map(e => ({
    id: e.id,
    data: e
  })), {
    id: "separator",
    data: (0, h.Mc)()
  }, ...A.map(e => ({
    id: e.id,
    data: e
  }))], {
    handleDragStart: N,
    handleDragReset: S,
    handleDragComplete: I
  } = (0, u.A)(E, e => {
    let t = e.findIndex(e => "separator" === e.id),
      n = e.slice(0, t).map(e => _(j({}, e.data), {
        inOnboarding: true
      })),
      r = e.slice(t + 1).map(e => _(j({}, e.data), {
        inOnboarding: false,
        required: false
      }));
    n.length > h.D1 ? c.A.show({
      title: b.intl.string(b.t.Cxtq5x),
      body: b.intl.formatToPlainString(b.t["pkbZ+U"], {
        numQuestions: h.D1
      })
    }) : (0, m.WC)(d, [...n, ...r])
  });
  return null == d ? null : (0, r.jsxs)(r.Fragment, {
    children: [i ? null : (0, r.jsxs)(r.Fragment, {
      children: [n ? null : (0, r.jsxs)("div", {
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-md/bold",
          children: b.intl.string(b.t["24Qm4M"])
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: x.VA,
          children: b.intl.string(b.t.QvCcYe)
        })]
      }), y.map((e, t) => (0, r.jsx)(f.A, {
        guild: d,
        prompt: e,
        disableAutofocus: n,
        includeCount: l,
        singleColumn: s,
        promptIndex: t,
        dragIndex: t,
        onPromptDragStart: N,
        onPromptDragReset: S,
        onPromptDragComplete: I
      }, e.id))]
    }), (0, r.jsx)(O, {
      guild: d,
      prejoinOnly: n,
      postjoinOnly: i
    }), n ? null : (0, r.jsxs)(r.Fragment, {
      children: [A.map((e, t) => (0, r.jsx)(f.A, {
        guild: d,
        prompt: e,
        promptIndex: t + y.length,
        dragIndex: t + y.length + 1,
        onPromptDragStart: N,
        onPromptDragReset: S,
        onPromptDragComplete: I
      }, e.id)), v.length < h.iD ? (0, r.jsxs)(o.DUT, {
        className: x.Wz,
        onClick: () => (0, m.WC)(d, [...v, (0, h.a5)(false)], false),
        children: [(0, r.jsx)(o.U1e, {
          size: "custom",
          color: "currentColor",
          className: x.WW,
          width: 20,
          height: 20
        }), (0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "text-brand",
          children: b.intl.string(b.t.ujFquz)
        })]
      }) : null]
    })]
  })
}