/** Chunk was on 54157 **/
/** chunk id: 453473, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => U,
  P: () => B
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk990547 = require("./990547.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk494404 = require("./494404.jsx"),
  Chunk724757 = require("./724757.js"),
  Chunk213609 = require("./213609.js"),
  Chunk294218 = require("./294218.jsx"),
  Chunk373662 = require("./373662.jsx"),
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
  Chunk125919 = require("./125919.js");

function D(e) {
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

function L(e, t) {
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
let F = {
  offset: {
    left: 4,
    right: false
  }
};

function H(e) {
  let {
    closePopout: t
  } = e;
  return (0, r.jsx)(f.VqE, {
    "aria-label": k.intl.string(k.t["2pAkDA"]),
    children: (0, r.jsxs)("div", {
      className: M.popoutContainer,
      children: [(0, r.jsx)(g.h4, {
        icon: f.plf,
        title: k.intl.string(k.t["2pAkDA"])
      }), (0, r.jsx)(U, {
        closePopout: t
      })]
    })
  })
}

function U(e) {
  let {
    closePopout: t
  } = e, n = (0, I.Z)();
  return ((0, m.Z)({
    type: d.ImpressionTypes.POPOUT,
    name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
    properties: {
      total_count: n.length,
      overdue_count: P.Z.getOverdueMessageReminderCount()
    }
  }, {}, [n.length]), 0 === n.length) ? (0, r.jsx)(N.w, {}) : (0, r.jsx)(W, {
    savedMessageKeys: n,
    closePopout: t
  })
}

function B(e) {
  let {
    onOpen: t,
    onClose: n,
    children: l,
    popoutPosition: a,
    popoutAlign: i
  } = e, [o, c] = s.useState(false), u = s.useRef(null), d = s.useCallback(() => {
    c(false), o && (null == n || n())
  }, [n, o]), h = s.useCallback(() => {
    c(!o), o ? null == n || n() : null == t || t()
  }, [n, t, o]);
  s.useEffect(() => (O.S.subscribe(w.CkL.TOGGLE_FOR_LATER, h), () => void O.S.unsubscribe(w.CkL.TOGGLE_FOR_LATER, h)), [h]);
  let _ = (0, p.e7)([P.Z], () => P.Z.hasOverdueReminder(), []);
  return (0, r.jsx)(f.yRy, {
    targetElementRef: u,
    animation: f.yRy.Animation.NONE,
    position: a,
    align: i,
    autoInvert: false,
    shouldShow: o,
    onRequestClose: d,
    renderPopout: function() {
      return (0, r.jsx)(H, {
        closePopout: d
      })
    },
    ignoreModalClicks: true,
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return l(h, n, e, _, u)
    }
  })
}

function W(e) {
  let {
    savedMessageKeys: t,
    closePopout: n
  } = e, l = s.useRef(null), a = (0, S.Z)("for-later", l), [i, o] = s.useState(new Date);
  return s.useEffect(() => {
    let e = setInterval(() => o(new Date), v.Z.Millis.MINUTE);
    return () => {
      clearInterval(e)
    }
  }, []), (0, r.jsx)(h.bG, {
    navigator: a,
    children: (0, r.jsx)(h.SJ, {
      children: e => {
        var {
          ref: s
        } = e, a = function(e, t) {
          if (null == e) return {};
          var n, r, s = function(e, t) {
            if (null == e) return {};
            var n, r, s = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
            return s
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
          }
          return s
        }(e, ["ref"]);
        return (0, r.jsx)(f.h21, L(D({
          ref: e => {
            var t;
            l.current = e, s.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
          },
          className: M.messagesScroller
        }, a), {
          children: t.map(e => (0, r.jsx)(G, {
            savedMessageKey: e,
            closePopout: n,
            throttledNow: i
          }, e.messageId))
        }))
      }
    })
  })
}

function Q(e) {
  let {
    savedMessage: t,
    closePopout: n,
    throttledNow: l
  } = e, i = (0, j.gr)(t), o = s.useCallback(async e => {
    var r;
    await (0, j.fC)(t, i), e.shiftKey || n(), C.default.track(w.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
      channel_id: t.saveData.channelId,
      message_id: t.saveData.messageId,
      message_author_id: null == (r = t.message) ? true : r.author.id,
      type: null != t.saveData.dueAt ? T._l.REMINDER : T._l.BOOKMARK,
      due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : true
    })
  }, [n, t, i]), c = (0, p.e7)([x.Z], () => !!((null == i ? true : i.type) === w.d4z.UNKNOWN || (null == i ? true : i.isPrivate())) || x.Z.can(w.Plq.VIEW_CHANNEL, i));
  return null != i && null != t.message && c ? (0, r.jsxs)("div", {
    className: M.messageContainer,
    children: [(0, r.jsx)(f.P3F, {
      className: M.clickableMessageBackground,
      onClick: o,
      "aria-label": k.intl.string(k.t["+TSRGB"])
    }), null != t.saveData.dueAt ? (0, r.jsx)(Z.Z, {
      reminder: t,
      throttledNow: l
    }) : null, (0, r.jsx)(A.Z, {
      channel: i
    }), (0, r.jsx)(y.Z, {
      message: t.message,
      channel: i,
      className: M.message,
      compact: E.jU.getSetting(),
      animateAvatar: false,
      focusProps: F,
      trackAnnouncementViews: true
    }, t.message.id), (0, r.jsx)(b.ZP, {
      className: M.hoverBar,
      children: (0, r.jsx)(q, {
        savedMessage: t,
        jumpToMessage: o
      })
    })]
  }) : (0, r.jsxs)("div", {
    className: a()(M.messageContainer, M.deletedMessage),
    children: [(0, r.jsx)("div", {
      className: M.deleteIcon,
      children: (0, r.jsx)(f.Mgn, {
        size: "xxs",
        color: f.TVs.colors.INTERACTIVE_ACTIVE
      })
    }), (0, r.jsx)(f.X6q, {
      variant: "text-md/semibold",
      color: "header-secondary",
      children: null != t.saveData.dueAt ? k.intl.string(k.t["wuQm+v"]) : k.intl.string(k.t.o572FR)
    }), (0, r.jsx)(b.ZP, {
      className: M.hoverBar,
      children: (0, r.jsx)(b.sF, {
        label: k.intl.string(k.t.SvXS1d),
        icon: f.XHJ,
        dangerous: true,
        onClick: () => (0, R.x)(t.saveData)
      }, "delete")
    })]
  })
}

function G(e) {
  let {
    savedMessageKey: t,
    closePopout: n,
    throttledNow: s
  } = e, l = (0, p.e7)([P.Z], () => P.Z.getSavedMessage(t.channelId, t.messageId));
  return null == l ? null : (0, r.jsx)(Q, {
    savedMessage: l,
    closePopout: n,
    throttledNow: s
  })
}

function q(e) {
  let {
    savedMessage: t,
    jumpToMessage: s
  } = e;
  return (o()(null != t.message, "Saved message must be cached for For Later action buttons"), null != t.saveData.dueAt) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(b.sF, {
      label: k.intl.string(k.t.yjGtdH),
      icon: f.dz2,
      onClick: () => (0, R.z)({
        channelId: t.saveData.channelId,
        messageId: t.saveData.messageId,
        dueAt: true
      })
    }, "mark-complete"), (0, r.jsx)(b.sF, {
      label: k.intl.string(k.t.vrbqs7),
      icon: f.vdY,
      onClick: e => (0, _.jW)(e, async () => {
        let {
          MessageReminderEditMenu: e
        } = await n.e("69818").then(n.bind(n, 898150));
        return n => (0, r.jsx)(e, L(D({}, n), {
          label: k.intl.string(k.t.roMu1N),
          message: t.message
        }))
      })
    }, "edit-reminder"), (0, r.jsx)(b.fO, {}), (0, r.jsx)(b.sF, {
      label: k.intl.string(k.t["+TSRGB"]),
      icon: f.d4D,
      onClick: e => s(e)
    }, "jump-to-message"), (0, r.jsx)(b.sF, {
      label: k.intl.string(k.t.SvXS1d),
      icon: f.plf,
      onClick: () => (0, R.x)(t.saveData)
    }, "remove-reminder")]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(b.sF, {
      label: k.intl.string(k.t.mJ3P0N),
      icon: f.T39,
      onClick: e => (0, _.jW)(e, async () => {
        let {
          MessageReminderEditMenu: e
        } = await n.e("69818").then(n.bind(n, 898150));
        return n => (0, r.jsx)(e, L(D({}, n), {
          label: k.intl.string(k.t.mJ3P0N),
          message: t.message
        }))
      })
    }, "create-reminder"), (0, r.jsx)(b.sF, {
      label: k.intl.string(k.t["+TSRGB"]),
      icon: f.d4D,
      onClick: e => s(e)
    }, "jump-to-message"), (0, r.jsx)(b.sF, {
      label: k.intl.string(k.t.SvXS1d),
      icon: f.plf,
      onClick: () => (0, R.x)(t.saveData)
    }, "remove-bookmark")]
  })
}