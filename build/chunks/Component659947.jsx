/** Chunk was on web.js **/
/** chunk id: 659947, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk660216 = require("./660216.js"),
  Chunk40908 = require("./40908.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk415795 = require("./415795.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk727785 = require("./727785.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk704563 = require("./704563.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
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

function S() {}
let I = [Chunk727785.h8.VOICE_CHANNEL];

function T(e) {
  e.setOptions({
    voiceChannelGuildFilter: null
  }), e.setLimit(1 / 0)
}

function A() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk704563.voiceListSearchEmpty,
    children: (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      className: Chunk704563.noVoiceChannelSelected,
      children: Chunk388032.intl.string(Chunk388032.t.zHjCd1)
    })
  })
}

function C(e) {
  let t = "" !== e,
    n = (0, o.Wu)([p.ZP, f.Z, m.Z], () => {
      let e = m.Z.getGuildId();
      if (t || null == e) return [];
      let n = [];
      for (let t of p.ZP.getVocalChannelIds(e)) {
        let e = f.Z.getChannel(t);
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
  } = e, o = i.useRef(a);
  i.useEffect(() => {
    o.current = a
  });
  let [c, d] = i.useState(null != (n = null == (t = a.params) ? true : t.channelId) ? n : true), f = i.useCallback(() => {
    (0, s.ZDy)(async () => e => (0, r.jsx)(R, v(y({}, e), {
      onSelect: e => {
        d(e), l.Z.setKeybind(v(y({}, o.current), {
          params: {
            channelId: e
          }
        }))
      }
    })))
  }, []);
  return (0, r.jsx)("div", {
    className: E.channelIdSection,
    children: (0, r.jsx)(s.gNt, {
      label: g.intl.string(g.t.q4JpM8),
      children: (0, r.jsxs)(u.Z, {
        align: u.Z.Align.STRETCH,
        children: [(0, r.jsx)("div", {
          className: E.selectedVoiceChannel,
          children: (0, r.jsx)(D, {
            channelId: c
          })
        }), (0, r.jsx)(u.Z.Child, {
          grow: 0,
          shrink: 0,
          children: (0, r.jsx)(s.Button, {
            variant: "primary",
            text: g.intl.string(g.t.Dm8O4e),
            onClick: f
          })
        })]
      })
    })
  })
}

function P(e) {
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
    onSelect: o
  } = e, l = i.useId(), u = i.useRef(null), {
    query: p,
    updateQuery: m,
    queryResults: b
  } = (0, c.Z)({
    visible: true,
    autocompleterResultTypes: I,
    autocompleterBeforeCreateSearchContext: T
  }), y = C(p), {
    focusedIndex: O,
    setFocusedIndex: v
  } = P(p);
  i.useEffect(() => {
    let {
      current: e
    } = u;
    null == e || e.isItemVisible(0, O, true) || e.scrollToIndex({
      section: 0,
      row: O
    })
  }, [O]);
  let S = null != y ? y.length : b.length;

  function N(e) {
    let {
      row: t
    } = e, i = (() => {
      if (null != y) return y[t];
      let e = b[t];
      if ((null == e ? true : e.type) === h.h8.VOICE_CHANNEL) return e.record
    })();
    if (null == i) return null;
    let a = null != i.parent_id ? f.Z.getChannel(i.parent_id) : true,
      s = _.Z.getGuild(i.guild_id);
    return (0, r.jsx)(d.$W, {
      id: i.id,
      channel: i,
      category: a,
      focused: O === t,
      onMouseEnter: () => v(t),
      onClick: () => {
        o(i.id), n()
      },
      onFocus: () => v(t),
      children: null != s ? (0, r.jsx)("div", {
        className: E.guildName,
        children: s.name
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
          if (null != y) return y[O];
          let e = b[O];
          if ((null == e ? true : e.type) === h.h8.VOICE_CHANNEL) return e.record
        })();
        null == e ? o(true) : o(e.id), n();
        break
      }
      case "arrowup":
        0 === O ? v(S - 1) : v(O - 1);
        break;
      case "arrowdown":
        O >= S - 1 ? v(0) : v(O + 1)
    }
  }
  let D = (() => {
      if (null != y) {
        var e;
        return null == (e = y[O]) ? true : e.id
      }
      let t = b[O];
      if ((null == t ? true : t.type) === h.h8.VOICE_CHANNEL) return t.record.id
    })(),
    w = S > 0 || "" === p ? {
      innerId: l,
      innerRole: "listbox",
      innerAriaLabel: g.intl.string(g.t["+N3fW7"]),
      ref: u,
      sections: [S],
      renderRow: N,
      sectionHeight: 0,
      rowHeight: 34
    } : {
      sections: [1],
      renderRow: () => (0, r.jsx)(A, {}),
      sectionHeight: 0,
      rowHeight: 52
    };
  return (0, r.jsx)(a.Modal, {
    transitionState: t,
    onClose: n,
    title: g.intl.string(g.t.Dm8O4e),
    subtitle: g.intl.string(g.t.q4JpM8),
    actions: true,
    input: (0, r.jsx)(s.oil, {
      value: p,
      onChange: m,
      onKeyDown: R,
      placeholder: g.intl.string(g.t.tG0r7g),
      role: "combobox",
      "aria-controls": l,
      "aria-expanded": S > 0,
      "aria-activedescendant": S > 0 && null != D ? D : true,
      "aria-autocomplete": "list",
      spellCheck: false,
      autoFocus: true
    }),
    listProps: w
  })
}

function D(e) {
  let {
    channelId: t
  } = e, {
    channel: n,
    category: i,
    guild: a
  } = (0, o.cj)([f.Z, _.Z], () => {
    let e = null != t ? f.Z.getChannel(t) : true;
    return null != e ? {
      channel: e,
      category: null != e.parent_id ? f.Z.getChannel(e.parent_id) : true,
      guild: null != e.guild_id ? _.Z.getGuild(e.guild_id) : true
    } : {
      channel: true,
      category: true,
      guild: true
    }
  });
  return null == n ? (0, r.jsx)(s.Text, {
    variant: "text-md/medium",
    color: "text-muted",
    className: E.noVoiceChannelSelected,
    children: g.intl.string(g.t["/fYIK7"])
  }) : (0, r.jsx)(d.$W, {
    channel: n,
    id: n.id,
    category: i,
    onClick: S,
    onFocus: S,
    onMouseEnter: S,
    focused: false,
    children: null != a ? (0, r.jsx)("div", {
      className: E.guildName,
      children: a.name
    }) : null
  })
}