/** Chunk was on web.js **/
/** chunk id: 44022, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => K,
  J: () => W
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk989349 = require("./989349.js"),
  u = require.n(Chunk989349),
  Chunk110259 = require("./110259.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk928039 = require("./928039.js"),
  Chunk139286 = require("./139286.js"),
  Chunk636922 = require("./636922.jsx"),
  Chunk194085 = require("./194085.jsx"),
  Chunk835835 = require("./835835.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk576705 = require("./576705.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk927813 = require("./927813.js"),
  Chunk164684 = require("./164684.jsx"),
  Chunk704456 = require("./704456.js"),
  Chunk85109 = require("./85109.js"),
  Chunk756377 = require("./756377.js"),
  Chunk601179 = require("./601179.js"),
  Chunk216595 = require("./216595.jsx"),
  Chunk948331 = require("./948331.jsx"),
  Chunk371349 = require("./371349.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk422344 = require("./422344.js");

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

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function F(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = B(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function B(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let H = {
  offset: {
    left: 4,
    right: false
  }
};

function Y(e) {
  let {
    closePopout: t
  } = e;
  return (0, r.jsx)(_.lGe, {
    "aria-label": j.intl.string(j.t["2pAkDA"]),
    children: (0, r.jsxs)("div", {
      className: M.jC,
      children: [(0, r.jsx)(b.Y9, {
        icon: _.cFy,
        title: j.intl.string(j.t["2pAkDA"])
      }), (0, r.jsx)(W, {
        closePopout: t
      })]
    })
  })
}

function W(e) {
  let {
    closePopout: t
  } = e, n = (0, w.A)();
  return ((0, g.A)({
    type: d.ImpressionTypes.POPOUT,
    name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
    properties: {
      total_count: n.length,
      overdue_count: N.A.getOverdueMessageReminderCount()
    }
  }, {}, [n.length]), 0 === n.length) ? (0, r.jsx)(D.g, {}) : (0, r.jsx)(z, {
    savedMessageKeys: n,
    closePopout: t
  })
}

function K(e) {
  let {
    onOpen: t,
    onClose: n,
    children: a,
    popoutPosition: s,
    popoutAlign: o
  } = e, [l, c] = i.useState(false), u = i.useRef(null), d = i.useCallback(() => {
    c(false), l && (null == n || n())
  }, [n, l]), f = i.useCallback(() => {
    c(!l), l ? null == n || n() : null == t || t()
  }, [n, t, l]);
  i.useEffect(() => (I._.subscribe(L.jej.TOGGLE_FOR_LATER, f), () => void I._.unsubscribe(L.jej.TOGGLE_FOR_LATER, f)), [f]);
  let h = (0, p.bG)([N.A], () => N.A.hasOverdueReminder(), []);

  function m() {
    return (0, r.jsx)(Y, {
      closePopout: d
    })
  }
  return (0, r.jsx)(_.YNO, {
    targetElementRef: u,
    animation: _.YNO.Animation.NONE,
    position: s,
    align: o,
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

function z(e) {
  let {
    savedMessageKeys: t,
    closePopout: n
  } = e, a = i.useRef(null), s = (0, m.A)("for-later", a), [o, l] = i.useState(new Date);
  return i.useEffect(() => {
    let e = setInterval(() => l(new Date), S.A.Millis.MINUTE);
    return () => {
      clearInterval(e)
    }
  }, []), (0, r.jsx)(f.hD, {
    navigator: s,
    children: (0, r.jsx)(f.PR, {
      children: e => {
        let {
          ref: i
        } = e, s = F(e, ["ref"]);
        return (0, r.jsx)(_.ChK, V(U({
          ref: e => {
            var t;
            a.current = e, i.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
          },
          className: M.VB
        }, s), {
          children: t.map(e => (0, r.jsx)(X, {
            savedMessageKey: e,
            closePopout: n,
            throttledNow: o
          }, e.messageId))
        }))
      }
    })
  })
}

function q(e) {
  let {
    savedMessage: t,
    closePopout: n,
    throttledNow: a
  } = e, o = (0, C.vr)(t), l = i.useCallback(async e => {
    var r;
    await (0, C.le)(t, o), e.shiftKey || n(), A.default.track(L.HAw.FOR_LATER_SAVED_MESSAGE_JUMP, {
      channel_id: t.saveData.channelId,
      message_id: t.saveData.messageId,
      message_author_id: null == (r = t.message) ? true : r.author.id,
      type: null != t.saveData.dueAt ? R.Yf.REMINDER : R.Yf.BOOKMARK,
      due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : true
    })
  }, [n, t, o]), c = (0, p.bG)([v.A], () => !!((null == o ? true : o.type) === L.rbe.UNKNOWN || (null == o ? true : o.isPrivate())) || v.A.can(L.xBc.VIEW_CHANNEL, o));
  return null != o && null != t.message && c ? (0, r.jsxs)("div", {
    className: M.zC,
    children: [(0, r.jsx)(_.DUT, {
      className: M.M,
      onClick: l,
      "aria-label": j.intl.string(j.t["+TSRGD"])
    }), null != t.saveData.dueAt ? (0, r.jsx)(x.A, {
      reminder: t,
      throttledNow: a
    }) : null, (0, r.jsx)(P.A, {
      channel: o
    }), (0, r.jsx)(E.A, {
      message: t.message,
      channel: o,
      className: M.iU,
      compact: O.hH.getSetting(),
      animateAvatar: false,
      focusProps: H,
      trackAnnouncementViews: true
    }, t.message.id), (0, r.jsx)(y.Ay, {
      className: M.S3,
      children: (0, r.jsx)(Z, {
        savedMessage: t,
        jumpToMessage: l
      })
    })]
  }) : (0, r.jsxs)("div", {
    className: s()(M.zC, M.tq),
    children: [(0, r.jsx)("div", {
      className: M.fy,
      children: (0, r.jsx)(_.EpV, {
        size: "xxs",
        color: _.LU0.colors.INTERACTIVE_TEXT_ACTIVE
      })
    }), (0, r.jsx)(_.Heading, {
      variant: "text-md/semibold",
      color: "text-default",
      children: null != t.saveData.dueAt ? j.intl.string(j.t["wuQm+j"]) : j.intl.string(j.t.o572Fe)
    }), (0, r.jsx)(y.Ay, {
      className: M.S3,
      children: (0, r.jsx)(y.qv, {
        label: j.intl.string(j.t.SvXS1Z),
        icon: _.ucK,
        dangerous: true,
        onClick: () => (0, T.x)(t.saveData)
      }, "delete")
    })]
  })
}

function X(e) {
  let {
    savedMessageKey: t,
    closePopout: n,
    throttledNow: i
  } = e, a = (0, p.bG)([N.A], () => N.A.getSavedMessage(t.channelId, t.messageId));
  return null == a ? null : (0, r.jsx)(q, {
    savedMessage: a,
    closePopout: n,
    throttledNow: i
  })
}

function Z(e) {
  let {
    savedMessage: t,
    jumpToMessage: i
  } = e;
  return (l()(null != t.message, "Saved message must be cached for For Later action buttons"), null != t.saveData.dueAt) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(y.qv, {
      label: j.intl.string(j.t.yjGtdJ),
      icon: _.A9s,
      onClick: () => (0, T.Y)({
        channelId: t.saveData.channelId,
        messageId: t.saveData.messageId,
        dueAt: true
      })
    }, "mark-complete"), (0, r.jsx)(y.qv, {
      label: j.intl.string(j.t.vrbqs1),
      icon: _.R2l,
      onClick: e => (0, h.L3)(e, async () => {
        let {
          MessageReminderEditMenu: e
        } = await n.e("36419").then(n.bind(n, 49678));
        return n => (0, r.jsx)(e, V(U({}, n), {
          label: j.intl.string(j.t.roMu1H),
          message: t.message
        }))
      })
    }, "edit-reminder"), (0, r.jsx)(y.$$, {}), (0, r.jsx)(y.qv, {
      label: j.intl.string(j.t["+TSRGD"]),
      icon: _.txs,
      onClick: e => i(e)
    }, "jump-to-message"), (0, r.jsx)(y.qv, {
      label: j.intl.string(j.t.SvXS1Z),
      icon: _.cFy,
      onClick: () => (0, T.x)(t.saveData)
    }, "remove-reminder")]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(y.qv, {
      label: j.intl.string(j.t.mJ3P0N),
      icon: _.O4,
      onClick: e => (0, h.L3)(e, async () => {
        let {
          MessageReminderEditMenu: e
        } = await n.e("36419").then(n.bind(n, 49678));
        return n => (0, r.jsx)(e, V(U({}, n), {
          label: j.intl.string(j.t.mJ3P0N),
          message: t.message
        }))
      })
    }, "create-reminder"), (0, r.jsx)(y.qv, {
      label: j.intl.string(j.t["+TSRGD"]),
      icon: _.txs,
      onClick: e => i(e)
    }, "jump-to-message"), (0, r.jsx)(y.qv, {
      label: j.intl.string(j.t.SvXS1Z),
      icon: _.cFy,
      onClick: () => (0, T.x)(t.saveData)
    }, "remove-bookmark")]
  })
}