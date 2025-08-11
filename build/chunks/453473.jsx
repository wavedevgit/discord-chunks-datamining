/** Chunk was on web.js **/
/** chunk id: 453473, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => Y,
  P: () => W
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk990547 = require("./990547.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk494404 = require("./494404.js"),
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
  Chunk767893 = require("./767893.js"),
  Chunk206697 = require("./206697.jsx"),
  Chunk74551 = require("./74551.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk585693 = require("./585693.js");

function j(e, t, n) {
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
      j(e, t, n[t])
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

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e, t) {
  if (null == e) return {};
  var n, r, i = F(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function F(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
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
  return <p.VqE aria-label={M.intl.string(M.t["2pAkDA"])}><div className={k.popoutContainer}>{<m.h4 icon={p.plf} title={M.intl.string(M.t["2pAkDA"])} />}{<Y closePopout={t} />}</div></p.VqE>
}

function Y(e) {
  let {
    closePopout: t
  } = e, n = (0, P.Z)();
  return ((0, E.Z)({
    type: d.ImpressionTypes.POPOUT,
    name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
    properties: {
      total_count: n.length,
      overdue_count: C.Z.getOverdueMessageReminderCount()
    }
  }, {}, [n.length]), 0 === n.length) ? <D.w /> : <K savedMessageKeys={n} closePopout={t} />
}

function W(e) {
  let {
    onOpen: t,
    onClose: n,
    children: o,
    popoutPosition: a,
    popoutAlign: s
  } = e, [l, c] = i.useState(false), u = i.useRef(null), d = i.useCallback(() => {
    c(false), l && (null == n || n())
  }, [n, l]), f = i.useCallback(() => {
    c(!l), l ? null == n || n() : null == t || t()
  }, [n, t, l]);
  i.useEffect(() => (T.S.subscribe(x.CkL.TOGGLE_FOR_LATER, f), () => void T.S.unsubscribe(x.CkL.TOGGLE_FOR_LATER, f)), [f]);
  let h = (0, _.e7)([C.Z], () => C.Z.hasOverdueReminder(), []);

  function m() {
    return <H closePopout={d} />
  }
  return <p.yRy targetElementRef={u} animation={p.yRy.Animation.NONE} position={a} align={s} autoInvert={false} shouldShow={l} onRequestClose={d} renderPopout={m} ignoreModalClicks={true}>{(e, t) => {
      let {
        isShown: n
      } = t;
      return o(f, n, e, h, u)
    }}</p.yRy>
}

function K(e) {
  let {
    savedMessageKeys: t,
    closePopout: n
  } = e, o = i.useRef(null), a = (0, g.Z)("for-later", o), [s, l] = i.useState(new Date);
  return i.useEffect(() => {
    let e = setInterval(() => l(new Date), S.Z.Millis.MINUTE);
    return () => {
      clearInterval(e)
    }
  }, []), <f.bG navigator={a}><f.SJ>{e => {
        var {
          ref: i
        } = e, a = Z(e, ["ref"]);
        return (0, r.jsx)(p.h21, B(U({
          ref: e => {
            var t;
            o.current = e, i.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
          },
          className: k.messagesScroller
        }, a), {
          children: t.map(e => (0, r.jsx)(q, {
            savedMessageKey: e,
            closePopout: n,
            throttledNow: s
          }, e.messageId))
        }))
      }}</f.SJ></f.bG>
}

function z(e) {
  let {
    savedMessage: t,
    closePopout: n,
    throttledNow: o
  } = e, s = (0, N.gr)(t), l = i.useCallback(async e => {
    var r;
    await (0, N.fC)(t, s), e.shiftKey || n(), I.default.track(x.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
      channel_id: t.saveData.channelId,
      message_id: t.saveData.messageId,
      message_author_id: null == (r = t.message) ? true : r.author.id,
      type: null != t.saveData.dueAt ? R._l.REMINDER : R._l.BOOKMARK,
      due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : true
    })
  }, [n, t, s]), c = (0, _.e7)([v.Z], () => !!((null == s ? true : s.type) === x.d4z.UNKNOWN || (null == s ? true : s.isPrivate())) || v.Z.can(x.Plq.VIEW_CHANNEL, s));
  return null != s && null != t.message && c ? <div className={k.messageContainer}>{<p.P3F className={k.clickableMessageBackground} onClick={l} aria-label={M.intl.string(M.t["+TSRGB"])} />}{null != t.saveData.dueAt ? <L.Z reminder={t} throttledNow={o} /> : null}{<w.Z channel={s} />}{<b.Z message={t.message} channel={s} className={k.message} compact={O.jU.getSetting()} animateAvatar={false} focusProps={V} trackAnnouncementViews={true} />}{<y.ZP className={k.hoverBar}><X savedMessage={t} jumpToMessage={l} /></y.ZP>}</div> : <div className={a()(k.messageContainer, k.deletedMessage)}>{<div className={k.deleteIcon}><p.Mgn size={"xxs"} color={p.TVs.colors.INTERACTIVE_ACTIVE} /></div>}{<p.X6q variant={"text-md/semibold"} color={"header-secondary"}>{null != t.saveData.dueAt ? M.intl.string(M.t["wuQm+v"]) : M.intl.string(M.t.o572FR)}</p.X6q>}{<y.ZP className={k.hoverBar}><y.sF label={M.intl.string(M.t.SvXS1d)} icon={p.XHJ} dangerous={true} onClick={() => (0, A.x)(t.saveData)} /></y.ZP>}</div>
}

function q(e) {
  let {
    savedMessageKey: t,
    closePopout: n,
    throttledNow: i
  } = e, o = (0, _.e7)([C.Z], () => C.Z.getSavedMessage(t.channelId, t.messageId));
  return null == o ? null : <z savedMessage={o} closePopout={n} throttledNow={i} />
}

function X(e) {
  let {
    savedMessage: t,
    jumpToMessage: i
  } = e;
  return (l()(null != t.message, "Saved message must be cached for For Later action buttons"), null != t.saveData.dueAt) ? <r.Fragment>{<y.sF label={M.intl.string(M.t.yjGtdH)} icon={p.dz2} onClick={() => (0, A.z)({
        channelId: t.saveData.channelId,
        messageId: t.saveData.messageId,
        dueAt: true
      })} />}{<y.sF label={M.intl.string(M.t.vrbqs7)} icon={p.vdY} onClick={e => (0, h.jW)(e, async () => {
        let {
          MessageReminderEditMenu: e
        } = await Promise.resolve().then(n.bind(n, 898150));
        return n => (0, r.jsx)(e, B(U({}, n), {
          label: M.intl.string(M.t.roMu1N),
          message: t.message
        }))
      })} />}{<y.fO />}{<y.sF label={M.intl.string(M.t["+TSRGB"])} icon={p.d4D} onClick={e => i(e)} />}{<y.sF label={M.intl.string(M.t.SvXS1d)} icon={p.plf} onClick={() => (0, A.x)(t.saveData)} />}</r.Fragment> : <r.Fragment>{<y.sF label={M.intl.string(M.t.mJ3P0N)} icon={p.T39} onClick={e => (0, h.jW)(e, async () => {
        let {
          MessageReminderEditMenu: e
        } = await Promise.resolve().then(n.bind(n, 898150));
        return n => (0, r.jsx)(e, B(U({}, n), {
          label: M.intl.string(M.t.mJ3P0N),
          message: t.message
        }))
      })} />}{<y.sF label={M.intl.string(M.t["+TSRGB"])} icon={p.d4D} onClick={e => i(e)} />}{<y.sF label={M.intl.string(M.t.SvXS1d)} icon={p.plf} onClick={() => (0, A.x)(t.saveData)} />}</r.Fragment>
}