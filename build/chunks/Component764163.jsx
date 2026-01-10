/** Chunk was on 9536 **/
/** chunk id: 764163, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  DI: () => I,
  x3: () => E
}), require("./388685.js"), require("./953529.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk318766 = require("./318766.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk339085 = require("./339085.js"),
  Chunk633302 = require("./633302.js"),
  Chunk984933 = require("./984933.js"),
  Chunk691886 = require("./691886.jsx"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk640414 = require("./640414.js");

function O(e) {
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

function y(e, t) {
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

function C(e) {
  let {
    guildId: t,
    emojiData: n,
    onSelectEmoji: l
  } = e, a = i.useRef(null), s = (0, o.e7)([m.ZP], () => null != n.id ? m.ZP.getCustomEmojiById(n.id) : true), u = (0, o.e7)([p.ZP], () => p.ZP.getDefaultChannel(t)), h = i.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return (0, r.jsx)(f.Z, {
      pickerIntention: x.Hz.GUILD_ROLE_BENEFIT_EMOJI,
      channel: u,
      closePopout: t,
      onNavigateAway: t,
      onSelectEmoji: e => {
        let {
          emoji: n,
          willClose: r
        } = e;
        null != n && l(null != n.id ? {
          id: n.id,
          name: true
        } : {
          id: true,
          name: n.optionallyDiverseSequence
        }), r && t()
      }
    })
  }, [l, u]), j = i.useMemo(() => null == s && null == n.name ? null : function() {
    return (0, r.jsx)(d.Z, {
      className: v.emoji,
      emojiId: n.id,
      emojiName: n.name,
      animated: null == s ? true : s.animated
    })
  }, [n, s]), C = "";
  return null != s ? C = ":".concat(s.name, ":") : null != n.name && (C = b.ZP.convertSurrogateToName(n.name)), (0, r.jsx)(c.yRy, {
    targetElementRef: a,
    animation: c.yRy.Animation.NONE,
    position: "top",
    renderPopout: h,
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, r.jsxs)("div", y(O({
        ref: a,
        className: v.emojiInputContainer
      }, e), {
        children: [(0, r.jsx)(g.Z, {
          className: v.emojiButton,
          active: n,
          tabIndex: 0,
          renderButtonContents: j
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/normal",
          className: v.emojiText,
          children: C
        })]
      }))
    }
  })
}

function N(e) {
  var t;
  let {
    guildId: n,
    initialData: l,
    benefitTypeInput: a,
    descriptionPlaceholder: o,
    canSubmit: d,
    onSave: g,
    onDelete: f,
    transitionState: m,
    onClose: b
  } = e, p = (0, u.Dt)(), [h, x] = i.useState(null != (t = null == l ? true : l.description) ? t : ""), [v, O] = i.useState(() => ({
    id: null == l ? true : l.emoji_id,
    name: null == l ? true : l.emoji_name
  })), y = d && "" !== h && (null != v.id || null != v.name);

  function N(e) {
    e.preventDefault(), y && (g({
      description: h,
      emojiId: v.id,
      emojiName: v.name
    }), b())
  }
  let E = [{
    text: j.intl.string(j.t["ETE/oC"]),
    variant: "secondary",
    onClick: b
  }];
  return null != f && E.push({
    text: j.intl.string(j.t.oyYWHE),
    variant: "critical-secondary",
    onClick: () => {
      f(), b()
    },
    icon: c.XHJ
  }), E.push({
    text: null == l ? j.intl.string(j.t.OYkgVk) : j.intl.string(j.t["R3BPH+"]),
    variant: "primary",
    onClick: N,
    disabled: !y
  }), (0, r.jsx)("form", {
    onSubmit: N,
    children: (0, r.jsx)(s.Modal, {
      transitionState: m,
      onClose: b,
      title: j.intl.string(j.t["2qf9EI"]),
      actions: E,
      children: (0, r.jsxs)(c.Kqy, {
        gap: "md",
        children: [a, (0, r.jsx)(c.Kx8, {
          label: j.intl.string(j.t["1Ts7QP"]),
          placeholder: o,
          value: h,
          rows: 1,
          autosize: true,
          onChange: x,
          "aria-labelledby": p
        }), (0, r.jsx)(s.gNt, {
          label: j.intl.string(j.t.sMOuuS),
          children: (0, r.jsx)(C, {
            guildId: n,
            emojiData: v,
            onSelectEmoji: O
          })
        })]
      })
    })
  })
}

function E(e) {
  let {
    guildId: t,
    omitChannelIds: n,
    initialData: l,
    onSave: s,
    onDelete: o,
    transitionState: d,
    onClose: g
  } = e, [f, m] = i.useState(null == l ? true : l.ref_id), b = (0, u.Dt)(), p = (0, r.jsxs)(c.Kqy, {
    gap: 16,
    children: [(0, r.jsx)(c.Wn, {
      messageType: c.QYI.WARNING,
      children: j.intl.string(j.t.xunxCo)
    }), (0, r.jsx)(h.Z, {
      label: j.intl.string(j.t.GK18KJ),
      guildId: t,
      value: f,
      initialChannelId: null == l ? true : l.ref_id,
      omitChannelIds: n,
      onChange: function(e) {
        m(e)
      },
      "aria-labelledby": b
    })]
  });
  return (0, r.jsx)(N, {
    guildId: t,
    initialData: l,
    benefitTypeInput: p,
    descriptionPlaceholder: j.intl.string(j.t.J8O1Lp),
    canSubmit: null != f,
    onSave: function(e) {
      a()(null != f, "Cannot submit null channel"), s(y(O({}, e), {
        channelId: f
      }))
    },
    transitionState: d,
    onClose: g,
    onDelete: o
  })
}

function I(e) {
  var t;
  let {
    initialData: n,
    onSave: l,
    transitionState: s,
    onClose: o,
    onDelete: d,
    guildId: g
  } = e, [f, m] = i.useState(null != (t = null == n ? true : n.name) ? t : ""), b = (0, u.Dt)(), p = (0, r.jsx)(c.Kx8, {
    label: j.intl.string(j.t.NPOJrU),
    placeholder: j.intl.string(j.t.NPOJrU),
    value: f,
    rows: 1,
    onChange: function(e) {
      m(e)
    },
    "aria-labelledby": b
  });
  return (0, r.jsx)(N, {
    guildId: g,
    initialData: n,
    benefitTypeInput: p,
    descriptionPlaceholder: j.intl.string(j.t.ucP4Tt),
    canSubmit: "" !== f,
    onSave: function(e) {
      a()("" !== f, "Cannot submit empty name"), l(y(O({}, e), {
        name: f
      }))
    },
    transitionState: s,
    onClose: o,
    onDelete: d
  })
}