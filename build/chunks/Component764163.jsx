/** Chunk was on 49236 **/
/** chunk id: 764163, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  DI: () => E,
  x3: () => N
}), require("./388685.js"), require("./953529.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
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
  Chunk803931 = require("./803931.js");

function _(e) {
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
    guildId: t,
    emojiData: n,
    onSelectEmoji: l
  } = e, s = i.useRef(null), o = (0, a.e7)([p.ZP], () => null != n.id ? p.ZP.getCustomEmojiById(n.id) : true), u = (0, a.e7)([h.ZP], () => h.ZP.getDefaultChannel(t)), x = i.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return (0, r.jsx)(g.Z, {
      pickerIntention: b.Hz.GUILD_ROLE_BENEFIT_EMOJI,
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
  }, [l, u]), j = i.useMemo(() => null == o && null == n.name ? null : function() {
    return (0, r.jsx)(d.Z, {
      className: v.emoji,
      emojiId: n.id,
      emojiName: n.name,
      animated: null == o ? true : o.animated
    })
  }, [n, o]), y = "";
  return null != o ? y = ":".concat(o.name, ":") : null != n.name && (y = f.ZP.convertSurrogateToName(n.name)), (0, r.jsx)(c.yRy, {
    targetElementRef: s,
    animation: c.yRy.Animation.NONE,
    position: "top",
    renderPopout: x,
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, r.jsxs)("div", O(_({
        ref: s,
        className: v.emojiInputContainer
      }, e), {
        children: [(0, r.jsx)(m.Z, {
          className: v.emojiButton,
          active: n,
          tabIndex: 0,
          renderButtonContents: j
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/normal",
          className: v.emojiText,
          children: y
        })]
      }))
    }
  })
}

function C(e) {
  var t;
  let {
    guildId: n,
    initialData: l,
    benefitTypeInput: s,
    descriptionPlaceholder: a,
    canSubmit: d,
    onSave: m,
    onDelete: g,
    transitionState: p,
    onClose: f
  } = e, h = (0, u.Dt)(), [x, b] = i.useState(null != (t = null == l ? true : l.description) ? t : ""), [v, _] = i.useState(() => ({
    id: null == l ? true : l.emoji_id,
    name: null == l ? true : l.emoji_name
  })), O = d && "" !== x && (null != v.id || null != v.name);

  function C(e) {
    e.preventDefault(), O && (m({
      description: x,
      emojiId: v.id,
      emojiName: v.name
    }), f())
  }
  let N = [{
    text: j.intl.string(j.t["ETE/oK"]),
    variant: "secondary",
    onClick: f
  }];
  return null != g && N.push({
    text: j.intl.string(j.t.oyYWHB),
    variant: "critical-secondary",
    onClick: () => {
      g(), f()
    },
    icon: c.XHJ
  }), N.push({
    text: null == l ? j.intl.string(j.t.OYkgVl) : j.intl.string(j.t.R3BPHx),
    variant: "primary",
    onClick: C,
    disabled: !O
  }), (0, r.jsx)("form", {
    onSubmit: C,
    children: (0, r.jsx)(o.Modal, {
      transitionState: p,
      onClose: f,
      title: j.intl.string(j.t["2qf9EB"]),
      actions: N,
      children: (0, r.jsxs)(c.Kqy, {
        gap: "md",
        children: [s, (0, r.jsx)(c.hjN, {
          title: j.intl.string(j.t["1Ts7QE"]),
          titleId: h,
          children: (0, r.jsx)(c.Kx8, {
            placeholder: a,
            value: x,
            rows: 1,
            autosize: true,
            onChange: b,
            "aria-labelledby": h
          })
        }), (0, r.jsx)(c.hjN, {
          title: j.intl.string(j.t.sMOuub),
          children: (0, r.jsx)(y, {
            guildId: n,
            emojiData: v,
            onSelectEmoji: _
          })
        })]
      })
    })
  })
}

function N(e) {
  let {
    guildId: t,
    omitChannelIds: n,
    initialData: l,
    onSave: a,
    onDelete: o,
    transitionState: d,
    onClose: m
  } = e, [g, p] = i.useState(null == l ? true : l.ref_id), f = (0, u.Dt)(), h = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Wn, {
      messageType: c.QYI.WARNING,
      children: j.intl.string(j.t.xunxCg)
    }), (0, r.jsx)(c.LZC, {
      size: 24
    }), (0, r.jsx)(c.hjN, {
      title: j.intl.string(j.t.GK18KC),
      titleId: f,
      children: (0, r.jsx)(x.Z, {
        guildId: t,
        value: g,
        initialChannelId: null == l ? true : l.ref_id,
        omitChannelIds: n,
        onChange: function(e) {
          p(e)
        },
        "aria-labelledby": f
      })
    })]
  });
  return (0, r.jsx)(C, {
    guildId: t,
    initialData: l,
    benefitTypeInput: h,
    descriptionPlaceholder: j.intl.string(j.t.J8O1Li),
    canSubmit: null != g,
    onSave: function(e) {
      s()(null != g, "Cannot submit null channel"), a(O(_({}, e), {
        channelId: g
      }))
    },
    transitionState: d,
    onClose: m,
    onDelete: o
  })
}

function E(e) {
  var t;
  let {
    initialData: n,
    onSave: l,
    transitionState: a,
    onClose: o,
    onDelete: d,
    guildId: m
  } = e, [g, p] = i.useState(null != (t = null == n ? true : n.name) ? t : ""), f = (0, u.Dt)(), h = (0, r.jsx)(c.hjN, {
    title: j.intl.string(j.t.NPOJra),
    titleId: f,
    children: (0, r.jsx)(c.Kx8, {
      placeholder: j.intl.string(j.t.NPOJra),
      value: g,
      rows: 1,
      onChange: function(e) {
        p(e)
      },
      "aria-labelledby": f
    })
  });
  return (0, r.jsx)(C, {
    guildId: m,
    initialData: n,
    benefitTypeInput: h,
    descriptionPlaceholder: j.intl.string(j.t.ucP4Tk),
    canSubmit: "" !== g,
    onSave: function(e) {
      s()("" !== g, "Cannot submit empty name"), l(O(_({}, e), {
        name: g
      }))
    },
    transitionState: a,
    onClose: o,
    onDelete: d
  })
}