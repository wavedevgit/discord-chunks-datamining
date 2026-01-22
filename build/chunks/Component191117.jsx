/** Chunk was on 47841 **/
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

function O(e, t) {
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

function y(e) {
  let {
    guild: t,
    prejoinOnly: n,
    postjoinOnly: l
  } = e, o = (0, a.bG)([b.A], () => b.A.editedOnboardingPrompts), u = o.filter(e => e.inOnboarding), f = u.length, {
    drag: m,
    drop: j,
    dragSourcePosition: O,
    setIsDraggable: y
  } = (0, d.A)({
    type: "ONBOARDING_PROMPT_CARD",
    index: f,
    optionId: "separator",
    onDragStart: () => {},
    onDragComplete: () => {},
    onDragReset: () => {}
  }), v = i.useRef(null);
  return i.useEffect(() => {
    y(false)
  }, [y]), i.useEffect(() => {
    m(j(v))
  }, [m, j, v]), (0, r.jsxs)("div", {
    ref: v,
    className: s()(h.fY, {
      [h.A]: null != O && f < O,
      [h.Ze]: null != O && f > O
    }),
    children: [!l && u.length < p.D1 ? (0, r.jsxs)(c.DUT, {
      className: h.Wz,
      onClick: () => (0, g.WC)(t, [...o, (0, p.a5)(true)], false),
      children: [(0, r.jsx)(c.U1e, {
        size: "custom",
        color: "currentColor",
        className: h.WW,
        width: 20,
        height: 20
      }), (0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "text-brand",
        children: x.intl.string(x.t.ujFquz)
      })]
    }) : null, n ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: h.yF
      }), (0, r.jsx)(c.Heading, {
        variant: "heading-md/bold",
        children: x.intl.string(x.t.tjrGcb)
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        className: h.VA,
        children: x.intl.string(x.t.XFa6Q8)
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
  } = e, d = (0, a.bG)([f.A], () => f.A.getGuild(t)), v = (0, a.bG)([b.A], () => b.A.editedOnboardingPrompts), A = v.filter(e => e.inOnboarding), E = v.filter(e => true !== e.inOnboarding), N = [...A.map(e => ({
    id: e.id,
    data: e
  })), {
    id: "separator",
    data: (0, p.Mc)()
  }, ...E.map(e => ({
    id: e.id,
    data: e
  }))], {
    handleDragStart: _,
    handleDragReset: S,
    handleDragComplete: T
  } = (0, u.A)(N, e => {
    let t = e.findIndex(e => "separator" === e.id),
      n = e.slice(0, t).map(e => O(j({}, e.data), {
        inOnboarding: true
      })),
      r = e.slice(t + 1).map(e => O(j({}, e.data), {
        inOnboarding: false,
        required: false
      }));
    n.length > p.D1 ? o.A.show({
      title: x.intl.string(x.t.Cxtq5x),
      body: x.intl.formatToPlainString(x.t["pkbZ+U"], {
        numQuestions: p.D1
      })
    }) : (0, g.WC)(d, [...n, ...r])
  });
  return null == d ? null : (0, r.jsxs)(r.Fragment, {
    children: [i ? null : (0, r.jsxs)(r.Fragment, {
      children: [n ? null : (0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.Heading, {
          variant: "heading-md/bold",
          children: x.intl.string(x.t["24Qm4M"])
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: h.VA,
          children: x.intl.string(x.t.QvCcYe)
        })]
      }), A.map((e, t) => (0, r.jsx)(m.A, {
        guild: d,
        prompt: e,
        disableAutofocus: n,
        includeCount: l,
        singleColumn: s,
        promptIndex: t,
        dragIndex: t,
        onPromptDragStart: _,
        onPromptDragReset: S,
        onPromptDragComplete: T
      }, e.id))]
    }), (0, r.jsx)(y, {
      guild: d,
      prejoinOnly: n,
      postjoinOnly: i
    }), n ? null : (0, r.jsxs)(r.Fragment, {
      children: [E.map((e, t) => (0, r.jsx)(m.A, {
        guild: d,
        prompt: e,
        promptIndex: t + A.length,
        dragIndex: t + A.length + 1,
        onPromptDragStart: _,
        onPromptDragReset: S,
        onPromptDragComplete: T
      }, e.id)), v.length < p.iD ? (0, r.jsxs)(c.DUT, {
        className: h.Wz,
        onClick: () => (0, g.WC)(d, [...v, (0, p.a5)(false)], false),
        children: [(0, r.jsx)(c.U1e, {
          size: "custom",
          color: "currentColor",
          className: h.WW,
          width: 20,
          height: 20
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "text-brand",
          children: x.intl.string(x.t.ujFquz)
        })]
      }) : null]
    })]
  })
}