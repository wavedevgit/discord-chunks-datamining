/** Chunk was on 88479 **/
/** chunk id: 764163, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  DI: () => I,
  x3: () => E
}), require("./388685.js"), require("./953529.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
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
    "aria-labelledby": l,
    onSelectEmoji: a
  } = e, o = i.useRef(null), m = (0, s.e7)([h.ZP], () => null != n.id ? h.ZP.getCustomEmojiById(n.id) : true), x = (0, s.e7)([b.ZP], () => b.ZP.getDefaultChannel(t)), C = i.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return (0, r.jsx)(p.Z, {
      pickerIntention: j.Hz.GUILD_ROLE_BENEFIT_EMOJI,
      channel: x,
      closePopout: t,
      onNavigateAway: t,
      onSelectEmoji: e => {
        let {
          emoji: n,
          willClose: r
        } = e;
        null != n && a(null != n.id ? {
          id: n.id,
          name: true
        } : {
          id: true,
          name: n.optionallyDiverseSequence
        }), r && t()
      }
    })
  }, [a, x]), N = i.useMemo(() => null == m && null == n.name ? null : function() {
    return (0, r.jsx)(u.Z, {
      className: v.emoji,
      emojiId: n.id,
      emojiName: n.name,
      animated: null == m ? true : m.animated
    })
  }, [n, m]), E = "";
  return null != m ? E = ":".concat(m.name, ":") : null != n.name && (E = f.ZP.convertSurrogateToName(n.name)), (0, r.jsx)(d.yRy, {
    targetElementRef: o,
    animation: d.yRy.Animation.NONE,
    position: "top",
    renderPopout: C,
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, r.jsxs)("div", y(O({
        ref: o,
        className: v.emojiInputContainer
      }, e), {
        children: [(0, r.jsx)(g.Z, {
          className: v.emojiButton,
          active: n,
          tabIndex: 0,
          renderButtonContents: N
        }), (0, r.jsx)(c.Is, {
          inputClassName: v.emojiText,
          placeholder: _.intl.string(_.t.qJPLNT),
          value: E,
          "aria-labelledby": l,
          readOnly: true
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
    descriptionPlaceholder: s,
    canSubmit: c,
    onSave: u,
    onDelete: g,
    transitionState: p,
    onClose: h
  } = e, f = (0, m.Dt)(), b = (0, m.Dt)(), [x, j] = i.useState(null != (t = null == l ? true : l.description) ? t : ""), [v, O] = i.useState(() => ({
    id: null == l ? true : l.emoji_id,
    name: null == l ? true : l.emoji_name
  })), y = c && "" !== x && (null != v.id || null != v.name);

  function N(e) {
    e.preventDefault(), y && (u({
      description: x,
      emojiId: v.id,
      emojiName: v.name
    }), h())
  }
  let E = [{
    text: _.intl.string(_.t["ETE/oK"]),
    variant: "secondary",
    onClick: h
  }];
  return null != g && E.push({
    text: _.intl.string(_.t.oyYWHB),
    variant: "critical-secondary",
    onClick: () => {
      g(), h()
    },
    icon: d.XHJ
  }), E.push({
    text: null == l ? _.intl.string(_.t.OYkgVl) : _.intl.string(_.t.R3BPHx),
    variant: "primary",
    onClick: N,
    disabled: !y
  }), (0, r.jsx)("form", {
    onSubmit: N,
    children: (0, r.jsx)(o.Modal, {
      transitionState: p,
      onClose: h,
      title: _.intl.string(_.t["2qf9EB"]),
      actions: E,
      children: (0, r.jsxs)(d.Kqy, {
        gap: "md",
        children: [a, (0, r.jsx)(d.hjN, {
          title: _.intl.string(_.t["1Ts7QE"]),
          titleId: f,
          children: (0, r.jsx)(d.Kx8, {
            placeholder: s,
            value: x,
            rows: 1,
            autosize: true,
            onChange: j,
            "aria-labelledby": f
          })
        }), (0, r.jsx)(d.hjN, {
          title: _.intl.string(_.t.sMOuub),
          titleId: b,
          children: (0, r.jsx)(C, {
            guildId: n,
            emojiData: v,
            onSelectEmoji: O,
            "aria-labelledby": b
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
    transitionState: c,
    onClose: u
  } = e, [g, p] = i.useState(null == l ? true : l.ref_id), h = (0, m.Dt)(), f = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.Wn, {
      messageType: d.QYI.WARNING,
      children: _.intl.string(_.t.xunxCg)
    }), (0, r.jsx)(d.LZC, {
      size: 24
    }), (0, r.jsx)(d.hjN, {
      title: _.intl.string(_.t.GK18KC),
      titleId: h,
      children: (0, r.jsx)(x.Z, {
        guildId: t,
        value: g,
        initialChannelId: null == l ? true : l.ref_id,
        omitChannelIds: n,
        onChange: function(e) {
          p(e)
        },
        "aria-labelledby": h
      })
    })]
  });
  return (0, r.jsx)(N, {
    guildId: t,
    initialData: l,
    benefitTypeInput: f,
    descriptionPlaceholder: _.intl.string(_.t.J8O1Li),
    canSubmit: null != g,
    onSave: function(e) {
      a()(null != g, "Cannot submit null channel"), s(y(O({}, e), {
        channelId: g
      }))
    },
    transitionState: c,
    onClose: u,
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
    onDelete: c,
    guildId: u
  } = e, [g, p] = i.useState(null != (t = null == n ? true : n.name) ? t : ""), h = (0, m.Dt)(), f = (0, r.jsx)(d.hjN, {
    title: _.intl.string(_.t.NPOJra),
    titleId: h,
    children: (0, r.jsx)(d.Kx8, {
      placeholder: _.intl.string(_.t.NPOJra),
      value: g,
      rows: 1,
      onChange: function(e) {
        p(e)
      },
      "aria-labelledby": h
    })
  });
  return (0, r.jsx)(N, {
    guildId: u,
    initialData: n,
    benefitTypeInput: f,
    descriptionPlaceholder: _.intl.string(_.t.ucP4Tk),
    canSubmit: "" !== g,
    onSave: function(e) {
      a()("" !== g, "Cannot submit empty name"), l(y(O({}, e), {
        name: g
      }))
    },
    transitionState: s,
    onClose: o,
    onDelete: c
  })
}