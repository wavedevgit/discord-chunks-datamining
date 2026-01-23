/** Chunk was on 47841 **/
/** chunk id: 626083, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  aP: () => N,
  oJ: () => E
}), require("./896048.js"), require("./228524.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk375499 = require("./375499.jsx"),
  Chunk937773 = require("./937773.jsx"),
  Chunk508675 = require("./508675.js"),
  Chunk7584 = require("./7584.js"),
  Chunk808728 = require("./808728.js"),
  Chunk841650 = require("./841650.jsx"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk790943 = require("./790943.js");

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

function y(e) {
  let {
    guildId: t,
    emojiData: n,
    onSelectEmoji: l
  } = e, s = i.useRef(null), a = (0, o.bG)([p.Ay], () => null != n.id ? p.Ay.getCustomEmojiById(n.id) : true), u = (0, o.bG)([b.Ay], () => b.Ay.getDefaultChannel(t)), h = i.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return (0, r.jsx)(m.A, {
      pickerIntention: x.b_.GUILD_ROLE_BENEFIT_EMOJI,
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
  }, [l, u]), j = i.useMemo(() => null == a && null == n.name ? null : function() {
    return (0, r.jsx)(d.A, {
      className: _.Zg,
      emojiId: n.id,
      emojiName: n.name,
      animated: null == a ? true : a.animated
    })
  }, [n, a]), y = "";
  return null != a ? y = ":".concat(a.name, ":") : null != n.name && (y = f.Ay.convertSurrogateToName(n.name)), (0, r.jsx)(c.YNO, {
    targetElementRef: s,
    animation: c.YNO.Animation.NONE,
    position: "top",
    renderPopout: h,
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, r.jsxs)("div", v(O({
        ref: s,
        className: _.oc
      }, e), {
        children: [(0, r.jsx)(g.A, {
          className: _.Z8,
          active: n,
          tabIndex: 0,
          renderButtonContents: j
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/normal",
          className: _.at,
          children: y
        })]
      }))
    }
  })
}

function A(e) {
  var t;
  let {
    guildId: n,
    initialData: l,
    benefitTypeInput: s,
    descriptionPlaceholder: o,
    canSubmit: d,
    onSave: g,
    onDelete: m,
    transitionState: p,
    onClose: f
  } = e, b = (0, u.GV)(), [h, x] = i.useState(null != (t = null == l ? true : l.description) ? t : ""), [_, O] = i.useState(() => ({
    id: null == l ? true : l.emoji_id,
    name: null == l ? true : l.emoji_name
  })), v = d && "" !== h && (null != _.id || null != _.name);

  function A(e) {
    e.preventDefault(), v && (g({
      description: h,
      emojiId: _.id,
      emojiName: _.name
    }), f())
  }
  let E = [{
    text: j.intl.string(j.t["ETE/oC"]),
    variant: "secondary",
    onClick: f
  }];
  return null != m && E.push({
    text: j.intl.string(j.t.oyYWHE),
    variant: "critical-secondary",
    onClick: () => {
      m(), f()
    },
    icon: c.ucK
  }), E.push({
    text: null == l ? j.intl.string(j.t.OYkgVk) : j.intl.string(j.t["R3BPH+"]),
    variant: "primary",
    onClick: A,
    disabled: !v
  }), (0, r.jsx)("form", {
    onSubmit: A,
    children: (0, r.jsx)(a.Modal, {
      transitionState: p,
      onClose: f,
      title: j.intl.string(j.t["2qf9EI"]),
      actions: E,
      children: (0, r.jsxs)(c.BJc, {
        gap: "md",
        children: [s, (0, r.jsx)(c.fs1, {
          label: j.intl.string(j.t["1Ts7QP"]),
          placeholder: o,
          value: h,
          rows: 1,
          autosize: true,
          onChange: x,
          "aria-labelledby": b
        }), (0, r.jsx)(a.D0$, {
          label: j.intl.string(j.t.sMOuuS),
          children: (0, r.jsx)(y, {
            guildId: n,
            emojiData: _,
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
    onSave: a,
    onDelete: o,
    transitionState: d,
    onClose: g
  } = e, [m, p] = i.useState(null == l ? true : l.ref_id), f = (0, u.GV)(), b = (0, r.jsxs)(c.BJc, {
    gap: 16,
    children: [(0, r.jsx)(c.po8, {
      messageType: c.YCn.WARNING,
      children: j.intl.string(j.t.xunxCo)
    }), (0, r.jsx)(h.A, {
      label: j.intl.string(j.t.GK18KJ),
      guildId: t,
      value: m,
      initialChannelId: null == l ? true : l.ref_id,
      omitChannelIds: n,
      onChange: function(e) {
        p(e)
      },
      "aria-labelledby": f
    })]
  });
  return (0, r.jsx)(A, {
    guildId: t,
    initialData: l,
    benefitTypeInput: b,
    descriptionPlaceholder: j.intl.string(j.t.J8O1Lp),
    canSubmit: null != m,
    onSave: function(e) {
      s()(null != m, "Cannot submit null channel"), a(v(O({}, e), {
        channelId: m
      }))
    },
    transitionState: d,
    onClose: g,
    onDelete: o
  })
}

function N(e) {
  var t;
  let {
    initialData: n,
    onSave: l,
    transitionState: a,
    onClose: o,
    onDelete: d,
    guildId: g
  } = e, [m, p] = i.useState(null != (t = null == n ? true : n.name) ? t : ""), f = (0, u.GV)(), b = (0, r.jsx)(c.fs1, {
    label: j.intl.string(j.t.NPOJrU),
    placeholder: j.intl.string(j.t.NPOJrU),
    value: m,
    rows: 1,
    onChange: function(e) {
      p(e)
    },
    "aria-labelledby": f
  });
  return (0, r.jsx)(A, {
    guildId: g,
    initialData: n,
    benefitTypeInput: b,
    descriptionPlaceholder: j.intl.string(j.t.ucP4Tt),
    canSubmit: "" !== m,
    onSave: function(e) {
      s()("" !== m, "Cannot submit empty name"), l(v(O({}, e), {
        name: m
      }))
    },
    transitionState: a,
    onClose: o,
    onDelete: d
  })
}