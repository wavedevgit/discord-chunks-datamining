/** Chunk was on web.js **/
/** chunk id: 958831, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk97260 = require("./97260.js"),
  Chunk337692 = require("./337692.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk586068 = require("./586068.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk967198 = require("./967198.js"),
  Chunk926140 = require("./926140.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk777563 = require("./777563.js");

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

function A() {}
let I = [Chunk926140.rD.VOICE_CHANNEL];

function S(e) {
  e.setOptions({
    voiceChannelGuildFilter: null
  }), e.setLimit(1 / 0)
}

function T() {
  return (0, r.jsx)("div", {
    className: E.i1,
    children: (0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      className: E.GN,
      children: g.intl.string(g.t.zHjCd1)
    })
  })
}

function C(e) {
  let t = "" !== e,
    n = (0, s.yK)([p.Ay, f.A, h.A], () => {
      let e = h.A.getGuildId();
      if (t || null == e) return [];
      let n = [];
      for (let t of p.Ay.getVocalChannelIds(e)) {
        let e = f.A.getChannel(t);
        null != e && n.push(e)
      }
      return n
    }, [t]);
  return t ? null : n
}

function N(e) {
  var t, n;
  let {
    keybind: a
  } = e, s = i.useRef(a);
  i.useEffect(() => {
    s.current = a
  });
  let [c, d] = i.useState(null != (t = null == (n = a.params) ? true : n.channelId) ? t : true), f = i.useCallback(() => {
    (0, o.mMO)(async () => e => (0, r.jsx)(R, v(b({}, e), {
      onSelect: e => {
        d(e), l.A.setKeybind(v(b({}, s.current), {
          params: {
            channelId: e
          }
        }))
      }
    })))
  }, []);
  return (0, r.jsx)("div", {
    className: E.a8,
    children: (0, r.jsx)(o.D0$, {
      label: g.intl.string(g.t.q4JpM8),
      children: (0, r.jsxs)(u.A, {
        align: u.A.Align.STRETCH,
        children: [(0, r.jsx)("div", {
          className: E.$X,
          children: (0, r.jsx)(P, {
            channelId: c
          })
        }), (0, r.jsx)(u.A.Child, {
          grow: 0,
          shrink: 0,
          children: (0, r.jsx)(o.Button, {
            variant: "primary",
            text: g.intl.string(g.t.Dm8O4e),
            onClick: f
          })
        })]
      })
    })
  })
}

function w(e) {
  let [t, n] = i.useState(0), r = i.useRef(e);
  return e !== r.current && 0 !== t && n(0), i.useEffect(() => {
    r.current = e
  }), {
    focusedIndex: t,
    setFocusedIndex: n
  }
}

function R(e) {
  let {
    transitionState: t,
    onClose: n,
    onSelect: s
  } = e, l = i.useId(), u = i.useRef(null), {
    query: p,
    updateQuery: h,
    queryResults: y
  } = (0, c.A)({
    visible: true,
    autocompleterResultTypes: I,
    autocompleterBeforeCreateSearchContext: S
  }), b = C(p), {
    focusedIndex: O,
    setFocusedIndex: v
  } = w(p);
  i.useEffect(() => {
    let {
      current: e
    } = u;
    null == e || e.isItemVisible(0, O, true) || e.scrollToIndex({
      section: 0,
      row: O
    })
  }, [O]);
  let A = null != b ? b.length : y.length;

  function N(e) {
    let {
      row: t
    } = e, i = (() => {
      if (null != b) return b[t];
      let e = y[t];
      if ((null == e ? true : e.type) === m.rD.VOICE_CHANNEL) return e.record
    })();
    if (null == i) return null;
    let a = null != i.parent_id ? f.A.getChannel(i.parent_id) : true,
      o = _.A.getGuild(i.guild_id);
    return (0, r.jsx)(d.c3, {
      id: i.id,
      channel: i,
      category: a,
      focused: O === t,
      onMouseEnter: () => v(t),
      onClick: () => {
        s(i.id), n()
      },
      onFocus: () => v(t),
      children: null != o ? (0, r.jsx)("div", {
        className: E.J5,
        children: o.name
      }) : null
    }, i.id)
  }

  function R(e) {
    let t = e.key.toLowerCase();
    if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t) switch (e.preventDefault(), t) {
      case "escape":
        n();
        break;
      case "enter": {
        let e = (() => {
          if (null != b) return b[O];
          let e = y[O];
          if ((null == e ? true : e.type) === m.rD.VOICE_CHANNEL) return e.record
        })();
        null == e ? s(true) : s(e.id), n();
        break
      }
      case "arrowup":
        0 === O ? v(A - 1) : v(O - 1);
        break;
      case "arrowdown":
        O >= A - 1 ? v(0) : v(O + 1)
    }
  }
  let P = (() => {
      if (null != b) {
        var e;
        return null == (e = b[O]) ? true : e.id
      }
      let t = y[O];
      if ((null == t ? true : t.type) === m.rD.VOICE_CHANNEL) return t.record.id
    })(),
    D = A > 0 || "" === p ? {
      innerId: l,
      innerRole: "listbox",
      innerAriaLabel: g.intl.string(g.t["+N3fW7"]),
      ref: u,
      sections: [A],
      renderRow: N,
      sectionHeight: 0,
      rowHeight: 34
    } : {
      sections: [1],
      renderRow: () => (0, r.jsx)(T, {}),
      sectionHeight: 0,
      rowHeight: 52
    };
  return (0, r.jsx)(a.Modal, {
    transitionState: t,
    onClose: n,
    title: g.intl.string(g.t.Dm8O4e),
    subtitle: g.intl.string(g.t.q4JpM8),
    actions: true,
    input: (0, r.jsx)(o.ksK, {
      value: p,
      onChange: h,
      onKeyDown: R,
      placeholder: g.intl.string(g.t.tG0r7g),
      role: "combobox",
      "aria-controls": l,
      "aria-expanded": A > 0,
      "aria-activedescendant": A > 0 && null != P ? P : true,
      "aria-autocomplete": "list",
      spellCheck: false,
      autoFocus: true
    }),
    listProps: D
  })
}

function P(e) {
  let {
    channelId: t
  } = e, {
    channel: n,
    category: i,
    guild: a
  } = (0, s.cf)([f.A, _.A], () => {
    let e = null != t ? f.A.getChannel(t) : true;
    return null != e ? {
      channel: e,
      category: null != e.parent_id ? f.A.getChannel(e.parent_id) : true,
      guild: null != e.guild_id ? _.A.getGuild(e.guild_id) : true
    } : {
      channel: true,
      category: true,
      guild: true
    }
  });
  return null == n ? (0, r.jsx)(o.Text, {
    variant: "text-md/medium",
    color: "text-muted",
    className: E.GN,
    children: g.intl.string(g.t["/fYIK7"])
  }) : (0, r.jsx)(d.c3, {
    channel: n,
    id: n.id,
    category: i,
    onClick: A,
    onFocus: A,
    onMouseEnter: A,
    focused: false,
    children: null != a ? (0, r.jsx)("div", {
      className: E.J5,
      children: a.name
    }) : null
  })
}