/** Chunk was on web.js **/
/** chunk id: 659947, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function E(e, t, n) {
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
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v() {}
let S = [Chunk727785.h8.VOICE_CHANNEL];

function I(e) {
  e.setOptions({
    voiceChannelGuildFilter: null
  }), e.setLimit(1 / 0)
}

function T(e) {
  let {
    height: t
  } = e;
  return (0, r.jsx)("div", {
    style: {
      height: t
    }
  })
}

function A() {
  return (0, Chunk54381.jsx)(T, {
    height: 16
  }, "footer")
}

function C() {
  return (0, Chunk54381.jsx)(T, {
    height: 8
  }, "header")
}

function N() {
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

function P(e) {
  let t = "" !== e,
    n = (0, a.Wu)([f.ZP, d.Z, _.Z], () => {
      let e = _.Z.getGuildId();
      if (t || null == e) return [];
      let n = [];
      for (let t of f.ZP.getVocalChannelIds(e)) {
        let e = d.Z.getChannel(t);
        null != e && n.push(e)
      }
      return n
    }, [t]);
  return t ? null : n
}

function R(e) {
  var t, n;
  let {
    keybind: a
  } = e, l = i.useRef(a);
  i.useEffect(() => {
    l.current = a
  });
  let [u, d] = i.useState(null != (n = null == (t = a.params) ? true : t.channelId) ? n : true), f = i.useCallback(() => {
    (0, o.ZDy)(async () => e => (0, r.jsx)(x, O(b({}, e), {
      onSelect: e => {
        d(e), s.Z.setKeybind(O(b({}, l.current), {
          params: {
            channelId: e
          }
        }))
      }
    })))
  }, []);
  return (0, r.jsx)("div", {
    className: g.channelIdSection,
    children: (0, r.jsx)(o.gNt, {
      label: h.intl.string(h.t.q4JpM8),
      children: (0, r.jsxs)(c.Z, {
        align: c.Z.Align.STRETCH,
        children: [(0, r.jsx)("div", {
          className: g.selectedVoiceChannel,
          children: (0, r.jsx)(L, {
            channelId: u
          })
        }), (0, r.jsx)(c.Z.Child, {
          grow: 0,
          shrink: 0,
          children: (0, r.jsx)(o.Button, {
            variant: "primary",
            text: h.intl.string(h.t.Dm8O4e),
            onClick: f
          })
        })]
      })
    })
  })
}

function w() {
  let e = Chunk473749.useRef(false),
    t = Chunk473749.useCallback(() => {
      module.current = true
    }, []),
    n = Chunk473749.useCallback(() => {
      module.current = false
    }, []);
  return {
    mouseFocusEnabled: module,
    enableMouseFocus: exports,
    disableMouseFocus: require
  }
}

function D(e) {
  let [t, n] = i.useState(0), r = i.useRef(e);
  return e !== r.current && 0 !== t && n(0), i.useEffect(() => {
    r.current = e
  }), {
    focusedIndex: t,
    setFocusedIndex: n
  }
}

function x(e) {
  let {
    transitionState: t,
    onClose: n,
    onSelect: a
  } = e, s = i.useId(), c = i.useRef(null), {
    mouseFocusEnabled: f,
    enableMouseFocus: _,
    disableMouseFocus: E
  } = w(), {
    query: b,
    updateQuery: y,
    queryResults: O
  } = (0, l.Z)({
    visible: true,
    autocompleterResultTypes: S,
    autocompleterBeforeCreateSearchContext: I
  }), v = P(b), {
    focusedIndex: T,
    setFocusedIndex: R
  } = D(b);
  i.useEffect(() => {
    let {
      current: e
    } = c;
    null == e || e.isItemVisible(0, T, true) || e.scrollToIndex({
      section: 0,
      row: T
    })
  }, [T]);
  let x = null != v ? v.length : O.length;

  function L(e) {
    let {
      row: t
    } = e, i = (() => {
      if (null != v) return v[t];
      let e = O[t];
      if ((null == e ? true : e.type) === m.h8.VOICE_CHANNEL) return e.record
    })();
    if (null == i) return null;
    let o = null != i.parent_id ? d.Z.getChannel(i.parent_id) : true,
      s = p.Z.getGuild(i.guild_id);
    return (0, r.jsx)(u.$W, {
      id: i.id,
      channel: i,
      category: o,
      focused: T === t,
      onMouseEnter: () => f.current && R(t),
      onClick: () => {
        a(i.id), n()
      },
      onFocus: () => R(t),
      children: null != s ? (0, r.jsx)("div", {
        className: g.guildName,
        children: s.name
      }) : null
    }, i.id)
  }

  function j(e) {
    E();
    let t = e.key.toLowerCase();
    if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t) switch (e.preventDefault(), t) {
      case "escape":
        n();
        break;
      case "enter": {
        let e = (() => {
          if (null != v) return v[T];
          let e = O[T];
          if ((null == e ? true : e.type) === m.h8.VOICE_CHANNEL) return e.record
        })();
        null == e ? a(true) : a(e.id), n();
        break
      }
      case "arrowup":
        0 === T ? R(x - 1) : R(T - 1);
        break;
      case "arrowdown":
        T >= x - 1 ? R(0) : R(T + 1)
    }
  }
  let M = (() => {
    if (null != v) {
      var e;
      return null == (e = v[T]) ? true : e.id
    }
    let t = O[T];
    if ((null == t ? true : t.type) === m.h8.VOICE_CHANNEL) return t.record.id
  })();
  return (0, r.jsx)(o.IX, {
    transitionState: t,
    size: "lg",
    onClose: n,
    children: (0, r.jsxs)("div", {
      className: g.container,
      onMouseMove: _,
      children: [(0, r.jsx)("div", {
        className: g.inputWrapper,
        children: (0, r.jsx)(o.oil, {
          value: b,
          onChange: y,
          onKeyDown: j,
          placeholder: h.intl.string(h.t.tG0r7g),
          role: "combobox",
          "aria-controls": s,
          "aria-expanded": x > 0,
          "aria-activedescendant": x > 0 && null != M ? M : true,
          "aria-autocomplete": "list",
          spellCheck: false
        })
      }), 0 === x && "" !== b && (0, r.jsx)(N, {}), (x > 0 || "" === b) && (0, r.jsx)(o.Tvr, {
        innerId: s,
        innerRole: "listbox",
        "aria-label": h.intl.string(h.t["+N3fW7"]),
        ref: c,
        sections: [x],
        renderRow: L,
        renderListHeader: C,
        renderFooter: A,
        sectionHeight: 0,
        rowHeight: 34,
        className: g.voiceChannelList,
        listHeaderHeight: 8,
        footerHeight: 16
      })]
    })
  })
}

function L(e) {
  let {
    channelId: t
  } = e, {
    channel: n,
    category: i,
    guild: s
  } = (0, a.cj)([d.Z, p.Z], () => {
    let e = null != t ? d.Z.getChannel(t) : true;
    return null != e ? {
      channel: e,
      category: null != e.parent_id ? d.Z.getChannel(e.parent_id) : true,
      guild: null != e.guild_id ? p.Z.getGuild(e.guild_id) : true
    } : {
      channel: true,
      category: true,
      guild: true
    }
  });
  return null == n ? (0, r.jsx)(o.Text, {
    variant: "text-md/medium",
    color: "text-muted",
    className: g.noVoiceChannelSelected,
    children: h.intl.string(h.t["/fYIK7"])
  }) : (0, r.jsx)(u.$W, {
    channel: n,
    id: n.id,
    category: i,
    onClick: v,
    onFocus: v,
    onMouseEnter: v,
    focused: false,
    children: null != s ? (0, r.jsx)("div", {
      className: g.guildName,
      children: s.name
    }) : null
  })
}