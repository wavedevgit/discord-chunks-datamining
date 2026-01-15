/** Chunk was on web.js **/
/** chunk id: 453473, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => Y,
  P: () => W
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk990547 = require("./990547.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk724757 = require("./724757.js"),
  Chunk213609 = require("./213609.js"),
  Chunk294218 = require("./294218.jsx"),
  Chunk373662 = require("./373662.jsx"),
  Chunk598999 = require("./598999.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk496675 = require("./496675.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk70956 = require("./70956.js"),
  Chunk324701 = require("./324701.jsx"),
  Chunk575016 = require("./575016.js"),
  Chunk768943 = require("./768943.js"),
  Chunk686478 = require("./686478.js"),
  Chunk664559 = require("./664559.js"),
  Chunk767893 = require("./767893.jsx"),
  Chunk206697 = require("./206697.jsx"),
  Chunk74551 = require("./74551.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk581201 = require("./581201.js");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function F(e, t) {
  if (null == e) return {};
  var n, r, i = B(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function B(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let V = {
  offset: {
    left: 4,
    right: false
  }
};

function H(e) {
  let {
    closePopout: t
  } = e;
  return (0, r.jsx)(_.VqE, {
    "aria-label": j.intl.string(j.t["2pAkDA"]),
    children: (0, r.jsxs)("div", {
      className: M.popoutContainer,
      children: [(0, r.jsx)(y.h4, {
        icon: _.plf,
        title: j.intl.string(j.t["2pAkDA"])
      }), (0, r.jsx)(Y, {
        closePopout: t
      })]
    })
  })
}

function Y(e) {
  let {
    closePopout: t
  } = e, n = (0, w.Z)();
  return ((0, g.Z)({
    type: d.ImpressionTypes.POPOUT,
    name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
    properties: {
      total_count: n.length,
      overdue_count: N.Z.getOverdueMessageReminderCount()
    }
  }, {}, [n.length]), 0 === n.length) ? (0, r.jsx)(D.w, {}) : (0, r.jsx)(K, {
    savedMessageKeys: n,
    closePopout: t
  })
}

function W(e) {
  let {
    onOpen: t,
    onClose: n,
    children: a,
    popoutPosition: o,
    popoutAlign: s
  } = e, [l, c] = i.useState(false), u = i.useRef(null), d = i.useCallback(() => {
    c(false), l && (null == n || n())
  }, [n, l]), f = i.useCallback(() => {
    c(!l), l ? null == n || n() : null == t || t()
  }, [n, t, l]);
  i.useEffect(() => (I.S.subscribe(L.CkL.TOGGLE_FOR_LATER, f), () => void I.S.unsubscribe(L.CkL.TOGGLE_FOR_LATER, f)), [f]);
  let h = (0, p.e7)([N.Z], () => N.Z.hasOverdueReminder(), []);

  function m() {
    return (0, r.jsx)(H, {
      closePopout: d
    })
  }
  return (0, r.jsx)(_.yRy, {
    targetElementRef: u,
    animation: _.yRy.Animation.NONE,
    position: o,
    align: s,
    autoInvert: false,
    shouldShow: l,
    onRequestClose: d,
    renderPopout: m,
    ignoreModalClicks: true,
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return a(f, n, e, h, u)
    }
  })
}

function K(e) {
  let {
    savedMessageKeys: t,
    closePopout: n
  } = e, a = i.useRef(null), o = (0, m.Z)("for-later", a), [s, l] = i.useState(new Date);
  return i.useEffect(() => {
    let e = setInterval(() => l(new Date), T.Z.Millis.MINUTE);
    return () => {
      clearInterval(e)
    }
  }, []), (0, r.jsx)(f.bG, {
    navigator: o,
    children: (0, r.jsx)(f.SJ, {
      children: e => {
        var {
          ref: i
        } = e, o = F(e, ["ref"]);
        return (0, r.jsx)(_.h21, Z(U({
          ref: e => {
            var t;
            a.current = e, i.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
          },
          className: M.messagesScroller
        }, o), {
          children: t.map(e => (0, r.jsx)(q, {
            savedMessageKey: e,
            closePopout: n,
            throttledNow: s
          }, e.messageId))
        }))
      }
    })
  })
}

function z(e) {
  let {
    savedMessage: t,
    closePopout: n,
    throttledNow: a
  } = e, s = (0, A.gr)(t), l = i.useCallback(async e => {
    var r;
    await (0, A.fC)(t, s), e.shiftKey || n(), S.default.track(L.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
      channel_id: t.saveData.channelId,
      message_id: t.saveData.messageId,
      message_author_id: null == (r = t.message) ? true : r.author.id,
      type: null != t.saveData.dueAt ? P._l.REMINDER : P._l.BOOKMARK,
      due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : true
    })
  }, [n, t, s]), c = (0, p.e7)([v.Z], () => !!((null == s ? true : s.type) === L.d4z.UNKNOWN || (null == s ? true : s.isPrivate())) || v.Z.can(L.Plq.VIEW_CHANNEL, s));
  return null != s && null != t.message && c ? (0, r.jsxs)("div", {
    className: M.messageContainer,
    children: [(0, r.jsx)(_.P3F, {
      className: M.clickableMessageBackground,
      onClick: l,
      "aria-label": j.intl.string(j.t["+TSRGD"])
    }), null != t.saveData.dueAt ? (0, r.jsx)(x.Z, {
      reminder: t,
      throttledNow: a
    }) : null, (0, r.jsx)(R.Z, {
      channel: s
    }), (0, r.jsx)(E.Z, {
      message: t.message,
      channel: s,
      className: M.message,
      compact: O.jU.getSetting(),
      animateAvatar: false,
      focusProps: V,
      trackAnnouncementViews: true
    }, t.message.id), (0, r.jsx)(b.ZP, {
      className: M.hoverBar,
      children: (0, r.jsx)(Q, {
        savedMessage: t,
        jumpToMessage: l
      })
    })]
  }) : (0, r.jsxs)("div", {
    className: o()(M.messageContainer, M.deletedMessage),
    children: [(0, r.jsx)("div", {
      className: M.deleteIcon,
      children: (0, r.jsx)(_.Mgn, {
        size: "xxs",
        color: _.TVs.colors.INTERACTIVE_TEXT_ACTIVE
      })
    }), (0, r.jsx)(_.Heading, {
      variant: "text-md/semibold",
      color: "text-default",
      children: null != t.saveData.dueAt ? j.intl.string(j.t["wuQm+j"]) : j.intl.string(j.t.o572Fe)
    }), (0, r.jsx)(b.ZP, {
      className: M.hoverBar,
      children: (0, r.jsx)(b.sF, {
        label: j.intl.string(j.t.SvXS1Z),
        icon: _.XHJ,
        dangerous: true,
        onClick: () => (0, C.x)(t.saveData)
      }, "delete")
    })]
  })
}

function q(e) {
  let {
    savedMessageKey: t,
    closePopout: n,
    throttledNow: i
  } = e, a = (0, p.e7)([N.Z], () => N.Z.getSavedMessage(t.channelId, t.messageId));
  return null == a ? null : (0, r.jsx)(z, {
    savedMessage: a,
    closePopout: n,
    throttledNow: i
  })
}

function Q(e) {
  let {
    savedMessage: t,
    jumpToMessage: i
  } = e;
  return (l()(null != t.message, "Saved message must be cached for For Later action buttons"), null != t.saveData.dueAt) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(b.sF, {
      label: j.intl.string(j.t.yjGtdJ),
      icon: _.dz2,
      onClick: () => (0, C.z)({
        channelId: t.saveData.channelId,
        messageId: t.saveData.messageId,
        dueAt: true
      })
    }, "mark-complete"), (0, r.jsx)(b.sF, {
      label: j.intl.string(j.t.vrbqs1),
      icon: _.vdY,
      onClick: e => (0, h.jW)(e, async () => {
        let {
          MessageReminderEditMenu: e
        } = await n.e("69818").then(n.bind(n, 898150));
        return n => (0, r.jsx)(e, Z(U({}, n), {
          label: j.intl.string(j.t.roMu1H),
          message: t.message
        }))
      })
    }, "edit-reminder"), (0, r.jsx)(b.fO, {}), (0, r.jsx)(b.sF, {
      label: j.intl.string(j.t["+TSRGD"]),
      icon: _.acy,
      onClick: e => i(e)
    }, "jump-to-message"), (0, r.jsx)(b.sF, {
      label: j.intl.string(j.t.SvXS1Z),
      icon: _.plf,
      onClick: () => (0, C.x)(t.saveData)
    }, "remove-reminder")]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(b.sF, {
      label: j.intl.string(j.t.mJ3P0N),
      icon: _.T39,
      onClick: e => (0, h.jW)(e, async () => {
        let {
          MessageReminderEditMenu: e
        } = await n.e("69818").then(n.bind(n, 898150));
        return n => (0, r.jsx)(e, Z(U({}, n), {
          label: j.intl.string(j.t.mJ3P0N),
          message: t.message
        }))
      })
    }, "create-reminder"), (0, r.jsx)(b.sF, {
      label: j.intl.string(j.t["+TSRGD"]),
      icon: _.acy,
      onClick: e => i(e)
    }, "jump-to-message"), (0, r.jsx)(b.sF, {
      label: j.intl.string(j.t.SvXS1Z),
      icon: _.plf,
      onClick: () => (0, C.x)(t.saveData)
    }, "remove-bookmark")]
  })
}